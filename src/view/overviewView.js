class OverviewView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
    }

    render() {
        var content = /* template */ `
        <p class="text-center p-max-width">
            My dinner: <span class="value-num-guests">3</span> people.
        </p>
      </div>
    `;
        this.container.innerHTML = content;
        this.afterRender();
    }

    afterRender() {
    }
}
