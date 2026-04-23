---
permalink: /
title: "Boglarka Ecsedi"
hide_page_header: true
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<section class="hero-card">
  <div class="hero-card__photo-wrap">
    <img src="/images/FF3D3EAB-65AE-495B-9F88-D96EFAD9FB7D_1_105_c.jpeg" alt="Portrait of Boglarka Ecsedi" class="hero-card__photo" width="1200" height="1200" loading="eager" decoding="async">
  </div>
  <div class="hero-card__text">
    <p class="eyebrow">Boglárka Ecsedi</p>
    <h1 class="hero-card__title">Computer Vision and Machine Learning Researcher</h1>
    <p class="hero-card__lead">
      I build reliable, practical machine learning systems and study the geometry of representation learning.
      My work combines theory, empirical analysis, and deployment-minded experimentation.
    </p>
    <div class="hero-card__cta">
      <a class="btn btn--primary" href="/publications/">View Publications</a>
      <a class="btn btn--inverse" href="/cv/">Download CV</a>
    </div>
  </div>
</section>

<section class="section-card">
  <h2>About</h2>
  <p>
    I am a PhD student at Georgia Tech interested in robust and trustworthy machine learning.
    My research sits at the intersection of representation learning, optimization, and practical model evaluation.
    I enjoy building tools that help bridge elegant theory and real-world impact.
  </p>
</section>

<section class="section-card">
  <h2>Research Themes</h2>
  <div class="theme-grid">
    <article class="theme-item">
      <h3>Reliable Computer Vision</h3>
      <p>Methods that remain robust under distribution shifts and uncertainty.</p>
    </article>
    <article class="theme-item">
      <h3>Efficient Learning Systems</h3>
      <p>Training and adaptation techniques for practical large-scale deployment.</p>
    </article>
    <article class="theme-item">
      <h3>Interpretable Representations</h3>
      <p>Analysis tools to understand what deep models learn and why.</p>
    </article>
  </div>
</section>

<section class="section-card">
  <div class="section-card__header">
    <h2>Selected Publications</h2>
    <a href="/publications/">See all</a>
  </div>
  <ul class="clean-list">
    {% assign publication_count = 0 %}
    {% for post in site.publications reversed %}
      {% if publication_count < 4 %}
        <li>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          {% if post.venue %}<span class="muted-text"> - {{ post.venue }}</span>{% endif %}
        </li>
        {% assign publication_count = publication_count | plus: 1 %}
      {% endif %}
    {% endfor %}
  </ul>
</section>

<section class="section-card">
  <div class="section-card__header">
    <h2>Recent Talks</h2>
    <a href="/talks/">See all</a>
  </div>
  <ul class="clean-list">
    {% assign talk_count = 0 %}
    {% for post in site.talks reversed %}
      {% if talk_count < 3 %}
        <li>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          {% if post.venue %}<span class="muted-text"> - {{ post.venue }}</span>{% endif %}
        </li>
        {% assign talk_count = talk_count | plus: 1 %}
      {% endif %}
    {% endfor %}
  </ul>
</section>

<section class="section-card">
  <h2>Contact</h2>
  <p>
    Reach me at <a href="mailto:boglarka.ecsedi@gatech.edu">boglarka.ecsedi@gatech.edu</a>.
    You can also find me on <a href="https://scholar.google.com/citations?user=eoMip2gAAAAJ&hl=en">Google Scholar</a>,
    <a href="https://www.linkedin.com/in/boglarka-ecsedi/">LinkedIn</a>, and <a href="https://github.com/eeboogi">GitHub</a>.
  </p>
</section>
