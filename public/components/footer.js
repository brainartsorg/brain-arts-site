class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="site-footer">
    <div class="container">
      <div class="row">
        <div class="col" align="center">
          <div class="row">
            <a href="https://brain-arts.org/">
              <img src="img/Brain_Arts_Shorthand_BlackWhite_Knockout.png" style="width: 60%;" />
            </a>
          </div>
          <div class="row">
            <div class="col">
              <a href="https://bostoncompassnewspaper.com">
                <img src="img/bclogo.png" style="width: 50%;" align="right" />
              </a>
            </div>
            <div class="col">
              <a href="https://dorchesterartproject.org/">
                <img src="img/daplogo.png" style="width: 50%;" align="left" />
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm" align="center">
          <p class="m-0 text-center text-black"
            style="padding-right: 50px; padding-left: 50px; font-size: 16px; font-weight: 500;">
            The mission of Brain Arts Org is to realize creative independence in
            systematically undervalued communities, including BIPOC, ALAANA+,
            LGBTQIA+, emerging and experimental artists. Through adaptive
            methods and hyperlocal engagement, we foster a culture where
            individuals create their own power and opportunities.
            <a href="/about">MORE INFO</a>
          </p>
          <br />
          <p class="m-0 text-center text-black" style="font-size: 16px; font-weight: 500;">
            Copyright &copy; 2021 Brain Arts Org
          </p>
        </div>
      </div> 
    </div> 
  </div> 
      `;
  }
}

customElements.define('footer-component', Footer);