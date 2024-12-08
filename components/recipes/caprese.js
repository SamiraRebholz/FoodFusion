class Caprese extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="recipe">
            <img src="./assets/images/caprese.png" alt="caprese salad">
            <h3>Caprese Salad</h3>
            <p>You need: Tomato slices, fresh mozzarella, basil, olive oil, balsamic vinegar, salt, and pepper</p>
        </div>
      `;
    }
}

customElements.define('my-caprese', Caprese);