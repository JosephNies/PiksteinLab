// Header no submenus
class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
		<header id="header">
        <h1><a href="index.html">Pikstein</a></h1>
        <nav class="links">
          <ul>
            <li><a href="donate.html">Donate</a></li>
            <li><a href="pikstein-lab.html">Pikstein Lab</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="events.html">Events</a></li>
          </ul>
        </nav>
        <nav class="main">
          <ul>
            <li class="menu">
              <a class="fa-bars" href="#menu">Menu</a>
            </li>
          </ul>
        </nav>
      </header>
	`;
  }
}
customElements.define('header-component', MyHeader);

// Header with submenus
class MyHeaderS extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header id="header">
        <h1><a href="index.html">Pikstein</a></h1>
        <nav class="links">
          <ul>
            <li><a href="donate.html">Donate</a></li>
            <li>
              <a href="pikstein-lab.html">Pikstein Lab</a>

              <ul class="submenu">
                <li><a href="#">Research</a></li>
                <li><a href="#">Students</a></li>
              </ul>
            </li>
            <li><a href="about.html">About</a></li>
            <li><a href="events.html">Events</a></li>
          </ul>
        </nav>
        <nav class="main">
          <ul>
            <li class="menu">
              <a class="fa-bars" href="#menu">Menu</a>
            </li>
          </ul>
        </nav>
      </header>
	`;
  }
}
customElements.define('header-components', MyHeaderS);

class MyHamburger extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <ul class="links">
            <li>
              <a href="donate.html">
                <h3>Donate</h3>
              </a>
            </li>
            <li>
              <a href="pikstein-lab.html">
                <h3>Pikstein Lab</h3>
              </a>
            </li>
            <li>
              <a href="about.html">
                <h3>About</h3>
              </a>
            </li>
            <li>
              <a href="events.html">
                <h3>Events</h3>
              </a>
            </li>
          </ul>
	`;
  }
}
customElements.define('hamburger-component', MyHamburger);

class MyHamburgerS extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <ul class="links">
            <li>
              <a href="donate.html">
                <h3>Donate</h3>
              </a>
            </li>
            <li>
              <a href="pikstein-lab.html">
                <h3>Pikstein Lab</h3>
              </a>
              <ul class="submenu">
                <li>
                  <a href="#">
                  Research
                  </a>
                </li>
                <li>
                  <a href="#">
                    Students
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="about.html">
                <h3>About</h3>
              </a>
            </li>
            <li>
              <a href="events.html">
                <h3>Events</h3>
              </a>
            </li>
          </ul>
     	`;
  }
}
customElements.define('hamburger-components', MyHamburgerS);

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <ul class="icons">
            <li>
              <a
                href="https://www.facebook.com/rachel.pikstein"
                class="icon brands fa-facebook-f"
                target="_blank"
                ><span class="label">Facebook</span></a
              >
            </li>
            <li>
              <a
                href="https://www.instagram.com/pikstein_lab/"
                class="icon brands fa-instagram"
                target="_blank"
                ><span class="label">Instagram</span></a
              >
            </li>
            <li>
              <a
                href="https://www.youtube.com/@PiksteinLab"
                class="icon brands fa-youtube"
				target="_blank"
                ><span class="label">YouTube</span></a
              >
            </li>
            <li>
              <a
                href="mailto:rpbiologist+website@gmail.com"
                class="icon solid fa-envelope"
                ><span class="label">Email</span></a
              >
            </li>
        </ul>
		<p class="copyright">
			&copy;
			<script>
				document.write(new Date().getFullYear());
			</script>
			<a href="http://rachelpikstein.com/"  target="_blank">Rachel Pikstein</a>. All rights
			reserved.
		</p>        
	`;
  }
}
customElements.define('footer-component', MyFooter);

class MyAbout extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
		<h2>About</h2>
          <p>
           We are dedicated to advancing conservation and ecological stewardship through research, education, and community action. Our mission is to safeguard biodiversity, restore natural habitats, and promote sustainable practices that ensure a thriving planet for future generations.
          </p>
          <ul class="actions">
            <li><a href="about.html" class="button">Learn More</a></li>
          </ul>
	`;
  }
}
customElements.define('about-component', MyAbout);

// Ensure the cookie consent logic is loaded on every page.
(function () {
  const scriptSrc = 'assets/js/cookieconsent.js';
  if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
    const s = document.createElement('script');
    s.src = scriptSrc;
    document.body.appendChild(s);
  }
})();
