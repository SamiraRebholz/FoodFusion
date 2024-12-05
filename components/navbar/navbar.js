class MyNavbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <nav>
          <ul>
            <li><a href="">Vegetables</a></li>
            <li><a href="">Fruits</a></li>
            <li><a href="">Meat, Fish and Eggs</a></li>
            <li><a href="">Dairy</a></li>
          </ul>
        </nav>
      `;
    }
  }
  
  customElements.define('my-navbar', MyNavbar);