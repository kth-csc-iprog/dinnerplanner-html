class SidebarView {
  constructor(container) {
    this.container = container;
    this.guestsInput = null;
  }
  
  render() {
    var content = /* template */ `
    <div class="container text-center full-vh d-flex align-items-center justify-content-center flex-column">
      <input type="number" class="input-num-guests" value="1">
        Guests
      </inut>
    </div>
    `;
    this.container.innerHTML = content;
    this.afterRender();
  }

  afterRender() {
    this.startBtn = this.container.getElementsByClassName("value-num-guests");
  }
}
