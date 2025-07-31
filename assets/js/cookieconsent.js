(function () {
  const consentCookieName = 'cookie_consent';

  function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
  }

  function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  }

  function loadGTMIfConsented() {
    if (getCookie(consentCookieName) !== 'accepted') return;

    const attemptLoad = () => {
      if (typeof window.loadGoogleTagManager === 'function') {
        window.loadGoogleTagManager('GTM-TVPK6975');
      } else {
        // Try again shortly in case the script hasn't been parsed yet.
        setTimeout(attemptLoad, 100);
      }
    };

    attemptLoad();
  }

  function createBanner() {
    const banner = document.createElement('div');
    banner.className = 'cookie-consent-banner';
    banner.innerHTML = `
      <p>We use cookies to improve your experience. By clicking "Accept", you consent to our cookie policy.</p>
      <div class="buttons">
        <button id="cookie-accept">Accept</button>
        <button id="cookie-decline">Decline</button>
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
      .cookie-consent-banner button {
        padding: 0.5rem 1rem;
        border: none;
        cursor: pointer;
        border-radius: 4px;
        font-weight: 600;
      }
      #cookie-accept {
        background: #2ecc71;
        color: #ffffff;
      }
      #cookie-decline {
        background: #e74c3c;
        color: #ffffff;
      }
    `;

    document.head.appendChild(style);
    document.body.appendChild(banner);

    document.getElementById('cookie-accept').addEventListener('click', function () {
      setCookie(consentCookieName, 'accepted', 365);
      banner.remove();
      loadGTMIfConsented();
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
    } else {
      loadGTMIfConsented();
    }
  });
})();
