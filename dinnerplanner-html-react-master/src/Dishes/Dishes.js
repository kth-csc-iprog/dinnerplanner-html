import React, {Component} from 'react';
import './Dishes.css';
// Alternative to passing the moderl as the component property, 
// we can import the model instance directly
import {modelInstance} from '../data/DinnerModel';
import { Link } from 'react-router-dom';


class Dishes extends Component {
  constructor(props) {
    super(props);
    // We create the state to store the various statuses
    // e.g. API data loading or error 
    this.state = {
      status: 'INITIAL',
    }
  }

  // componentDidUpdate borde kunna användas för att uppdatera listan. 

  // this methods is called by React lifecycle when the 
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to call the API and get the data
  componentDidMount = () => {
    // when data is retrieved we update the state
    // this will cause the component to re-render
    modelInstance.getAllDishes().then(dishes => {   //this.state.search
      this.setState({
        status: 'LOADED',
        dishes: dishes.results
      })
    }).catch(() => {
      this.setState({
        status: 'ERROR'
      })
    })
  }

  render() {
    let dishesList = null;
    
    // depending on the state we either generate
    // useful message to the user or show the list
    // of returned dishes
    switch (this.state.status) {
      case 'INITIAL':
        dishesList = <em>Loading...</em>
        break;
      case 'LOADED':
        dishesList = this.state.dishes.map((dish) =>
          <a href={"/showdish/" + dish.id}>
            <div key={dish.id} className="col-md-3 col-sm-4">
              <div className="thumbnail">
                <img src={`https://spoonacular.com/recipeImages/${dish.image}`} alt=""/>
                <div className="caption">
                  <h3>{dish.title}</h3>
                </div>
              </div>
            </div>
          </a>
          
        )
        break;
      default:
        dishesList = <b>Failed to load data, please try again</b>
        break;
    }

    return (
      <div className="Dishes">
        <h4>här finns {this.props.searchTerm}</h4>
        <h3>Dishes</h3>
        <ul>
          {dishesList}
        </ul>
      </div>
    );
  }
}

export default Dishes;
