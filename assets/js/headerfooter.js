class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
					<header id="header">
						<h1><a href="index.html">Pikstein</a></h1>
						<nav class="links">
							<ul>
								<li><a href="http://piksteinlab.org/donate/">Donate</a></li>
								<li><a href="http://piksteinlab.org/pikstein-lab/">Pikstein Lab</a></li>
								<li><a href="http://piksteinlab.org/about/">About</a></li>
								<li><a href="https://piksteinlab.org/events/">Events</a></li>
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