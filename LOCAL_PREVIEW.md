# Local preview (fast development)

Run the site on your machine so you can see changes immediately without pushing to GitHub Pages.

## One-time setup

From the project root (`eeboogi.github.io`):

```bash
cd /path/to/eeboogi.github.io
bundle install
```

If you use Homebrew Ruby (common on macOS), ensure it is on your PATH before `bundle`:

```bash
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
```

## Start a live preview server

```bash
cd /path/to/eeboogi.github.io
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"   # if needed
bundle exec jekyll serve
```

Then open **http://127.0.0.1:4000/** (or the URL Jekyll prints).

- Edits to most files are picked up automatically; **restart the server** if you change `_config.yml`.
- Press **Ctrl+C** in the terminal to stop the server.

### Optional: different host or port

```bash
bundle exec jekyll serve -H 127.0.0.1 -P 4000
```

### Optional: LiveReload (browser auto-refresh)

```bash
bundle exec jekyll serve --livereload
```

## Build without serving (check that the site compiles)

```bash
bundle exec jekyll build
```

Output is written to `_site/`. This does not start a server.

## Clean rebuild (if something looks stale)

```bash
bundle exec jekyll clean
bundle exec jekyll serve
```

## Why this is faster than GitHub Pages

GitHub Pages only shows what is **committed and pushed**, after Actions finishes. `jekyll serve` uses your **current files on disk**, so you iterate locally, then push when you are happy.
