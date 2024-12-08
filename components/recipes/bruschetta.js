class Bruschetta extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="recipe">
            <img src="./assets/images/bruschetta.png" alt="Bruschetta">
            <h3>Bruschetta</h3>
            <p>You need: Toasted bread with diced tomatoes, garlic, basil, and olive oil</p>
        </div>
      `;
    }
}

customElements.define('my-bruschetta', Bruschetta);