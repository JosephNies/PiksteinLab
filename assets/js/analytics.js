// GTM Header
class GTMHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
		<script>
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', 'GTM-TVPK6975');
    </script>
	`;
  }
}
customElements.define('gtm-header', GTMHeader);

// GTM Body
class GTMBody extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
		<noscript
      ><iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-TVPK6975"
        height="0"
        width="0"
        style="display: none; visibility: hidden"></iframe
    ></noscript>
	`;
  }
}
customElements.define('gtm-body', GTMBody);
