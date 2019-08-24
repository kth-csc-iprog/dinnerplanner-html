class MainView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.childContainers = {
      errorBar: null,
      mobileBar: null,
      sideBar: null,
      dishDetail: null,
      dishSearch: null,
    }
  }

  render(dishId) {
    var content = /* template */ `
      <div id="errorBarView"></div>
      <div id="mobileBarView"></div>
      <div class="header d-flex align-items-center justify-content-center">
        <h1>Dinner Planner</h1>
      </div>
      <div class="container">
        <div class="row no-gutters">
          <div class="col-sm-12 col-md-3">
            <div id="sideBarView"></div>
          </div>
          <div class="col-sm-12 col-md-9">
            ${dishId ? '<div id="dishDetailView"></div>' : '<div id="dishSearchView"></div>'}  
          </div>      
        </div>
      </div>
    `;
    this.container.html(content);
  }
  
  afterRender() {
    this.childContainers.errorBar = this.container.find("#errorBarView");
    this.childContainers.mobileBar = this.container.find("#mobileBarView");
    this.childContainers.sideBar = this.container.find("#sideBarView");
    this.childContainers.dishSearch = this.container.find("#dishSearchView");
    this.childContainers.dishDetail = this.container.find("#dishDetailView");
  }
}