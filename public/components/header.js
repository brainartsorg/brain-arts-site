class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <body data-spy="scroll" data-target=".site-navbar-target" data-offset="100">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
        <div class="container">
          <a class="navbar-brand js-scroll-trigger" href="/"><img src="img/bao_logo.png" class="img-logo" /></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item pull-right">
                <a class="nav-link js-scroll-trigger" href="https://bostoncompassnewspaper.com/blog"
                  target="_blank">Blog</a>
              </li>
              <li class="nav-item pull-right">
                <a class="nav-link"
                  href="https://docs.google.com/forms/d/e/1FAIpQLScssa9lAj2SxgiCUiizpFB03oRMVtVPXoF9bQBOATWh4jr8xw/viewform"
                  target="_blank">Volunteer</a>
              </li>
              <li class="nav-item pull-right">
                <a class="nav-link" href="https://withfriends.co/brain_arts_organization_inc/join"
                  target="_blank">Donate</a>
              </li>
              <li class="nav-item dropdown pull-right">
                <div class="header-dropdown">
                  <button class="dropbtn nav-link">About</button>
                  <div class="dropdown-content">
                    <a href="/about">About Us</a>
                    <a href="/staff">Staff & Board</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('header-component', Header);