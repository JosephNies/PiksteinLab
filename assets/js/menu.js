class MyMenu extends HTMLElement {
	connectedCallback() {
		// document.getElementById("menu")
		// .shadowRoot.getElementById('menu')
		// .attachShadow({mode:"open"})

		this.innerHTML = `

							<section>
								<ul class="links">
									<li>
										<a href="http://piksteinlab.org/donate/">
											<h3>Donate</h3>
										</a>
									</li>
									<li>
										<a href="#">
											<h3>Dolor sit amet</h3>
											<p>Sed vitae justo condimentum</p>
										</a>
									</li>
									<li>
										<a href="#">
											<h3>Feugiat veroeros</h3>
											<p>Phasellus sed ultricies mi congue</p>
										</a>
									</li>
									<li>
										<a href="#">
											<h3>Etiam sed consequat</h3>
											<p>Porta lectus amet ultricies</p>
										</a>
									</li>
								</ul>
							</section>
		
		`;
	}
	// connectedCallback() {
		// const menu = document.getElementById("menu")

	// this.menu = document.getElementById("menu");
	// const menu = document.createElement("menu");
		
	
	
	
	// connectedCallback() {
		// this.attachShadow({ mode: 'open' });
		
    // connectedCallback() {
    //     this.innerHTML = `
						


    //     `;
    // }
} 
customElements.define('menu-component', MyMenu);
