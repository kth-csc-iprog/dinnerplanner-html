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
            <h2>This is the Select Dish screen</h2>
            <Dishes/>
          </div>
        </div>  
      </div>
    );
  }
}

export default SelectDish;
