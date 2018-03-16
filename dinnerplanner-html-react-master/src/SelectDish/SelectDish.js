import React, { Component } from 'react';
import './SelectDish.css';
import Sidebar from '../Sidebar/Sidebar';
import Dishes from '../Dishes/Dishes';

class SelectDish extends Component {
  render() {
    return (
      <div className="SelectDish">
        <div class="row">
          <div class="col-md-3">
            {/* We pass the model as property to the Sidebar component */}
            <Sidebar model={this.props.model}/>
          </div>
          <div class="col-md-9">
            <div class="row">
              <div>
                <h2>Find a dish</h2>
              
              
                <form class="form-inline">
                  <div class="form-group">
                    <input class="form-control" type="text" id="keywords" placeholder="Enter key words" value=""/>
                  </div>
                  <div class="form-group">
                    <select id="selectOption" class="form-control">
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

                  <div class="form-group">
                    <button type="button" id="searchButton" class="form-control btn btn-default">Search</button>
                  </div>                  
                </form>
              </div>
            </div>

            <div class="row">
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
