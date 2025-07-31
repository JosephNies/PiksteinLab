// Expose a function so GTM can be loaded after the visitor gives consent.
// Call `window.loadGoogleTagManager('GTM-XXXXXXX')` once cookies are accepted.
window.loadGoogleTagManager = function (id) {
  if (!id) return;

  // Prevent loading GTM multiple times.
  if (document.getElementById('gtm-script')) return;

  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != 'dataLayer' ? '&l=' + l : '';

    j.async = true;
    j.id = 'gtm-script';
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', id);
};