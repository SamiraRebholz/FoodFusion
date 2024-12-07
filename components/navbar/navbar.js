class MyNavbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <nav>
          <ul>
            <li><a id="vegetables" href="./index.html">Vegetables</a></li>
            <li><a id="fruits" href="">Fruits</a></li>
            <li><a id="meat" href="">Meat, Fish and Eggs</a></li>
            <li><a id="dairy" href="">Dairy</a></li>
          </ul>
        </nav>
      `;
    }
  }
  
  customElements.define('my-navbar', MyNavbar);