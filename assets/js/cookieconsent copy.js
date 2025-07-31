(function () {
  const consentCookieName = 'cookie_consent';
  const statusCookieName = 'initial_load';

  function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
  }

  function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  }

  setCookie(statusCookieName, 'load', 365);

  function createBanner() {
    const banner = document.createElement('div');
    banner.className = 'cookie-consent-banner';
    banner.innerHTML = `
      <p>We use cookies to improve your experience. Learn more by reading our cookie policy.</p>
      <div class="buttons">
        <button id="cookie-accept" class="button">Accept</button>
      </div>
    `;

    const style = document.createElement('style');
    style.textContent = `
      .cookie-consent-banner {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: #ffffff;
        padding: 1rem;
        box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        z-index: 9999;
        font-size: 0.9rem;
      }
      .cookie-consent-banner p {
        margin: 0;
        padding-right: 1rem;
        flex: 1 1 auto;
      }
      .cookie-consent-banner .buttons {
        display: flex;
        gap: 0.5rem;
      }
    `;

    document.head.appendChild(style);
    document.body.appendChild(banner);

    document.getElementById('cookie-accept').addEventListener('click', function () {
      setCookie(consentCookieName, 'accepted', 365);
      banner.remove();
    });

    document.getElementById('cookie-decline').addEventListener('click', function () {
      setCookie(consentCookieName, 'rejected', 365);
      banner.remove();
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    const consent = getCookie(consentCookieName);
    if (!consent) {
      createBanner();
    }
  });
})();
