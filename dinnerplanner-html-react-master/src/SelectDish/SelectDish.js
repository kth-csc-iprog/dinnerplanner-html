import React, { Component } from 'react';
import './SelectDish.css';
import Sidebar from '../Sidebar/Sidebar';
import Dishes from '../Dishes/Dishes';


class SelectDish extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      type: 'dessert'
    };



    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  

  handleInputChange(event){
    this.setState({filter: event.target.value})

  }

  handleSelectChange(event) {
    this.setState({type: event.target.value});
  }

  handleSubmit(event){
    const st = this.state.type + '&query=' + this.state.filter;
    alert("SearchTerm: " + st);
    event.preventDefault();
    

  }




  render() {
    //const searchTerm = this.state.type + '&query=' + this.state.filter;
    return (
      <div className="SelectDish">
        <div className="row">
          <div className="col-md-3">
            {/* We pass the model as property to the Sidebar component */}
            <Sidebar model={this.props.model}/>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div>
                <h2>Find a dish</h2>
                <form onSubmit={this.handleSubmit} className="form-inline">
                  <div className="form-group">
                    <input className="form-control" type="text" onChange={this.handleInputChange} value={this.state.filter} id="keywords" placeholder="Enter key words"/>
                  </div>
                  <div className="form-group">
                    <select id="selectOption" className="form-control" onChange={this.handleSelectChange} value={this.state.type}>
                      <option value="">All</option>
                      <option value="main+dish">Main Course</option>
                      <option value="side+dish">Side Dish</option>
                      <option value="dessert">Dessert</option>
                      <option value="appetizer">Appetizer</option>
                      <option value="salad">Salad</option>
                      <option value="bread">Bread</option>
                      <option value="breakfast">Breakfast</option>
                      <option value="soup">Soup</option>
                      <option value="beverage">Beverage</option>
                      <option value="sauce">Sauce</option>
                      <option value="drink">Drink</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <button type="submit" id="searchButton" value="submit" className="form-control btn btn-default">Search</button>
                  </div>                  
                </form>
              </div>
            </div>

            <div className="row">
              <h2>This is the Select Dish screen</h2>
              <Dishes/>
            </div>
          </div>
        </div>  
      </div>
    );
  }
}

export default SelectDish;
