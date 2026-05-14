(function () {
  "use strict";

  var openPosterDialog = null;
  var posterKeyHandler = null;

  function togglePanel(button, panel) {
    if (!panel) return;
    var open = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", open ? "false" : "true");
    if (open) {
      panel.setAttribute("hidden", "");
    } else {
      panel.removeAttribute("hidden");
    }
  }

  function applyPosterScale(dialog) {
    var img = dialog.querySelector("[data-poster-img]");
    if (!img || !img.dataset.basew) return;
    var s = parseFloat(img.dataset.scale || "1");
    var bw = parseFloat(img.dataset.basew);
    var bh = parseFloat(img.dataset.baseh);
    img.style.width = bw * s + "px";
    img.style.height = bh * s + "px";
  }

  function initPosterImg(dialog) {
    var img = dialog.querySelector("[data-poster-img]");
    if (!img || img.dataset.posterReady === "1") return;

    function setBase() {
      var nw = img.naturalWidth || 800;
      var nh = img.naturalHeight || 1000;
      var maxVw = window.innerWidth * 0.88;
      var maxVh = window.innerHeight * 0.68;
      var r = Math.min(1, maxVw / nw, maxVh / nh);
      var bw = nw * r;
      var bh = nh * r;
      img.dataset.basew = String(bw);
      img.dataset.baseh = String(bh);
      img.dataset.scale = "1";
      img.dataset.posterReady = "1";
      applyPosterScale(dialog);
    }

    if (img.complete && img.naturalWidth) setBase();
    else img.addEventListener("load", setBase, { once: true });
  }

  function openPosterLightbox(dialog) {
    if (!dialog) return;
    if (openPosterDialog && openPosterDialog !== dialog) {
      closePosterLightbox(openPosterDialog);
    }
    openPosterDialog = dialog;
    dialog.removeAttribute("hidden");
    dialog.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    initPosterImg(dialog);

    posterKeyHandler = function (ev) {
      if (ev.key === "Escape" && openPosterDialog) {
        closePosterLightbox(openPosterDialog);
      }
    };
    document.addEventListener("keydown", posterKeyHandler);
  }

  function closePosterLightbox(dialog) {
    if (!dialog) return;
    dialog.setAttribute("hidden", "");
    dialog.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    var img = dialog.querySelector("[data-poster-img]");
    if (img) {
      img.dataset.posterReady = "0";
      img.style.width = "";
      img.style.height = "";
    }
    if (openPosterDialog === dialog) openPosterDialog = null;
    if (posterKeyHandler) {
      document.removeEventListener("keydown", posterKeyHandler);
      posterKeyHandler = null;
    }
  }

  function posterZoom(dialog, dir) {
    var img = dialog.querySelector("[data-poster-img]");
    if (!img || !img.dataset.basew) return;
    var s = parseFloat(img.dataset.scale || "1");
    if (dir === 0) s = 1;
    else if (dir > 0) s = Math.min(3.5, s * 1.18);
    else s = Math.max(0.35, s / 1.18);
    img.dataset.scale = String(Math.round(s * 1000) / 1000);
    applyPosterScale(dialog);
  }

  document.addEventListener("click", function (e) {
    var pending = e.target.closest("a.publication-card__pill[data-pending]");
    if (pending) {
      e.preventDefault();
      return;
    }

    var absBtn = e.target.closest(".publication-card__abstract-toggle");
    if (absBtn) {
      e.preventDefault();
      var absId = absBtn.getAttribute("aria-controls");
      togglePanel(absBtn, absId ? document.getElementById(absId) : null);
      return;
    }

    var bibBtn = e.target.closest(".publication-card__bibtex-toggle");
    if (bibBtn) {
      e.preventDefault();
      var bibId = bibBtn.getAttribute("aria-controls");
      togglePanel(bibBtn, bibId ? document.getElementById(bibId) : null);
      return;
    }

    var thumbOpen = e.target.closest("[data-poster-open]");
    if (thumbOpen) {
      e.preventDefault();
      var cid = thumbOpen.getAttribute("data-poster-open");
      var dlg = cid ? document.querySelector('[data-poster-lightbox="' + cid + '"]') : null;
      openPosterLightbox(dlg);
      return;
    }

    var closeEl = e.target.closest("[data-poster-close]");
    if (closeEl) {
      e.preventDefault();
      var cid2 = closeEl.getAttribute("data-poster-close");
      var dlg2 = cid2 ? document.querySelector('[data-poster-lightbox="' + cid2 + '"]') : null;
      if (dlg2) closePosterLightbox(dlg2);
      return;
    }

    var zoomBtn = e.target.closest("[data-poster-zoom]");
    if (zoomBtn) {
      e.preventDefault();
      var cid3 = zoomBtn.getAttribute("data-poster-zoom");
      var dir = parseInt(zoomBtn.getAttribute("data-zoom-dir"), 10);
      var dlg3 = cid3 ? document.querySelector('[data-poster-lightbox="' + cid3 + '"]') : null;
      if (dlg3) posterZoom(dlg3, dir);
      return;
    }

    var copyBtn = e.target.closest("[data-copy-bibtex]");
    if (copyBtn) {
      e.preventDefault();
      var sel = copyBtn.getAttribute("data-copy-bibtex");
      var pre = sel ? document.querySelector(sel) : null;
      if (!pre) return;
      var text = pre.textContent || "";
      function done() {
        var orig = copyBtn.getAttribute("data-copy-label") || "Copy";
        copyBtn.textContent = "Copied";
        setTimeout(function () {
          copyBtn.textContent = orig;
        }, 1800);
      }
      if (!copyBtn.getAttribute("data-copy-label")) {
        copyBtn.setAttribute("data-copy-label", copyBtn.textContent.trim());
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(function () {
          fallbackCopy(text, done);
        });
      } else {
        fallbackCopy(text, done);
      }
    }
  });

  function fallbackCopy(text, cb) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
    } catch (err) {}
    document.body.removeChild(ta);
    if (cb) cb();
  }

  document.addEventListener(
    "wheel",
    function (e) {
      if (!openPosterDialog || !e.ctrlKey) return;
      var vp = openPosterDialog.querySelector(".publication-card__lightbox-viewport");
      if (!vp || !vp.contains(e.target)) return;
      e.preventDefault();
      posterZoom(openPosterDialog, e.deltaY < 0 ? 1 : -1);
    },
    { passive: false }
  );
})();
