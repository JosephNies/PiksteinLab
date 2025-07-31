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
      <div class="cookie-content">
        <p>We use cookies to improve your experience. By clicking "Accept", you consent to our cookie policy.</p>
        <div class="cookie-buttons">
          <button id="cookie-accept" class="button">Accept</button>
          <button id="cookie-decline" class="button alt">Decline</button>
        </div>
      </div>
    `;

    const style = document.createElement('style');
    style.textContent = `
      .cookie-consent-banner {
        position: sticky;
        bottom: 0;
        left: 0;
        right: 0;
        background: #ffffff;
        border-top: 1px solid #e1e1e1;
        padding: 1rem;
        box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        font-size: 0.9rem;
        margin-top: 2rem;
      }
      
      .cookie-content {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        max-width: 1200px;
        margin: 0 auto;
      }
      
      .cookie-consent-banner p {
        margin: 0;
        flex: 1 1 auto;
        color: #666;
        line-height: 1.4;
      }
      
      .cookie-buttons {
        display: flex;
        gap: 0.5rem;
        flex-shrink: 0;
      }
      
      .cookie-consent-banner .button {
        padding: 0.5rem 1rem;
        border: none;
        cursor: pointer;
        border-radius: 4px;
        font-weight: 600;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        transition: all 0.2s ease;
      }
      
      .cookie-consent-banner .button:hover {
        transform: translateY(-1px);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      }
      
      #cookie-accept {
        background: #2ecc71;
        color: #ffffff;
      }
      
      #cookie-accept:hover {
        background: #27ae60;
      }
      
      #cookie-decline {
        background: #e74c3c;
        color: #ffffff;
      }
      
      #cookie-decline:hover {
        background: #c0392b;
      }
      
      @media screen and (max-width: 736px) {
        .cookie-content {
          flex-direction: column;
          text-align: center;
        }
        
        .cookie-buttons {
          width: 100%;
          justify-content: center;
        }
        
        .cookie-consent-banner {
          padding: 1.5rem 1rem;
        }
      }
    `;

    document.head.appendChild(style);

    // Find the footer and append the banner to it
    const footer = document.querySelector('#footer');
    if (footer) {
      footer.appendChild(banner);
    } else {
      // Fallback: append to body if footer not found
      document.body.appendChild(banner);
    }

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
