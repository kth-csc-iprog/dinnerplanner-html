class OverviewView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
    }

    // An example of creating HTML procedurally. Think about the pros and cons of this approach.
    render() {
      const paragraph = this.container.appendChild(document.createElement('P'))
      paragraph.innerHTML = "This dinner will be Awesome!";

      const num_people_val = 3;
      const paragraph2 = this.container.appendChild(document.createElement('P'))
      const num_people = paragraph2.appendChild(document.createElement('SPAN'))
      num_people.innerHTML = num_people_val;
      paragraph2.innerHTML += " people are coming!";

      const paragraph3 = this.container.appendChild(document.createElement('P'))
      paragraph3.innerHTML = "We will be eating the following:";

      const list = this.container.appendChild(document.createElement('UL'))

      for(const food of ["Bread!", "Ham!", "Pizza!"]) {
        list.appendChild(document.createElement('UL')).innerHTML = food;
      }

      this.afterRender();
    }

    afterRender() {
    }
}
