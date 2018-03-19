import React, { Component } from 'react';
import './ShowDish.css';
import { Link } from 'react-router-dom';
//import {modelInstance} from '../data/DinnerModel';
import Sidebar from '../Sidebar/Sidebar';

class ShowDish extends Component {


  constructor(props) {
    super(props);
    // We create the state to store the various statuses
    // e.g. API data loading or error 
    //alert("inuti consructor");
    this.state = {
      status: 'INITIAL',
      numberOfGuests: this.props.model.getNumberOfGuests(),
    }

  }


  // this methods is called by React lifecycle when the 
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to setup model observer
  

  // this is called when component is removed from the DOM
  // good place to remove observer
  componentWillUnmount() {
     this.props.model.removeObserver(this)
  }

  // in our update function we modify the state which will
  // cause the component to re-render
  update() {
    this.setState({
      numberOfGuests: this.props.model.getNumberOfGuests()
    })
  }

  // componentDidUpdate borde kunna användas för att uppdatera listan. 

  // this methods is called by React lifecycle when the 
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to call the API and get the data
  componentDidMount = () => {
    // when data is retrieved we update the state
    // this will cause the component to re-render
    this.props.model.addObserver(this);
    this.props.model.getDish(this.props.id).then(dishResult => {   //this.state.search
      this.setState({
        status: 'LOADED',
        dish: dishResult,
      })
    }).catch(() => {
      this.setState({
        status: 'ERROR'
      })
    })
  }


  getIngredients = () => {
    //const noGuest = modelInstance.getNumberOfGuests();
    //alert("Gäster: " +this.state.numberOfGuests);
    const ingredients = this.state.dish.extendedIngredients.map((ingredient) => 
      <tr key={ingredient.id}>
        <td>
          {ingredient.amount * this.state.numberOfGuests + ' ' + ingredient.unit}
        </td>
        <td>
          {ingredient.name}
        </td>
      </tr>
      )
  return ingredients;
  }

  






  render() {
    let dishInfo = null;
    
    // depending on the state we either generate
    // useful message to the user or show the list
    // of returned dishes
    switch (this.state.status) {
      case 'INITIAL':
        dishInfo = <em>Loading...</em>
        break;
      case 'LOADED':
        dishInfo = 
        <div className="col-md-12">
          <div className="row">
            <div className="col-sm-8 col-xs-12 page-header">
              <h2 id="headlineDish">{this.state.dish.title}</h2>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="col-sm-6">
                <Link to="/search">
                  <button id="backButton" className="btn btn-default knapp">Back to search</button>
                </Link>
              </div>
              <div className="col-sm-6">
                <button id="add" className="btn btn-success">Add to menu</button>
              </div>
            </div>
          </div>

        
          <div className="row">

          <div className="col-sm-8 col-xs-12">
              <img src={this.state.dish.image} alt=""/>
          </div>

          <div className="col-sm-4 col-xs-12">
           
            <h3 id="ingrFor"></h3>
            <div id="table">

            <table className="table">
              <thead>
                <tr>
                <th>Amount</th>
                <th>Ingredient</th>
                </tr>
                
              </thead>
              <tbody>
                {this.getIngredients()}
              </tbody>
            </table>
              
            </div>
            
                
            <span id="td1" className="pull-right"></span>
          </div>
        </div> 
        <div className="row">
          <div className="col-lg-8 col-xs-12 text ">
            <h2>Preparation</h2>
            <p>{this.state.dish.instructions}</p>
          </div>
        </div>
        </div>



        


           
        
        break;


      default:
        dishInfo = <b>Failed to load data, please try again</b>
        break;
    }










    return (
      <div className="ShowDish">

        <div className="col-md-3">
              {/* We pass the model as property to the Sidebar component */}
              <Sidebar model={this.props.model}/>
        </div>
         
        <div className="col-md-9" id="oneDishView">
          {dishInfo}
          
        </div>
        



      </div>
    );
  }
}

export default ShowDish;
