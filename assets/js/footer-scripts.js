// ── Footer Scripts Loader ──────────────────────────────
// Central file to load all sitewide scripts in order.
// Replace all individual <script> tags in your HTML with:
// <script src="assets/js/footer-scripts.js"></script>

(function () {
  var scripts = [
    'assets/js/jquery.min.js',
    'assets/js/browser.min.js',
    'assets/js/breakpoints.min.js',
    'assets/js/util.js',
    'assets/js/main.js',
    'assets/js/headerfooter.js',
    'assets/js/cookieconsent.js',
    'assets/js/load-gtm.js',
  ];

  // Loads scripts sequentially so each one finishes before the next starts.
  // This preserves the original load order (important for jQuery dependents).
  function loadNext(index) {
    if (index >= scripts.length) return;

    var script = document.createElement('script');
    script.src = scripts[index];
    script.onload = function () {
      loadNext(index + 1);
    };
    script.onerror = function () {
      console.error('Failed to load script:', scripts[index]);
      loadNext(index + 1); // continue loading remaining scripts even if one fails
    };
    document.body.appendChild(script);
  }

  loadNext(0);
})();