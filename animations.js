/* True Tally — subtle site-wide scroll/hover animation. Self-applying: needs no
   per-element classes in HTML, so it works on every existing and future page
   the moment <script src="/animations.js" defer></script> is present. */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  var targets = document.querySelectorAll(
    '.card, .blog-card, .step, .highlight, .faq-item, .chip, .quote, ' +
    'article.article-body > h2, article.article-body > h3, ' +
    'article.article-body > table, article.article-body > ul, ' +
    'article.article-body > div[style*="terra-pale"], article.article-body > div[style*="blue-pale"]'
  );
  if (!targets.length) return;

  targets.forEach(function (el, i) {
    el.classList.add('tt-reveal');
    el.style.transitionDelay = (Math.min(i % 6, 5) * 0.06) + 's';
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('tt-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(function (el) { io.observe(el); });
})();
