import React from 'react';
import axios from 'axios';
// import Spacex from './apis/Spacex';
import './App.css';
import Filters from './Filters';
import CardListing from './CardListing';


class App extends React.Component{
    state = { thumbNailCard : [], launchYear:''};

    componentDidMount(){
      this.getAllDAta();
      // const url = `https://api.spacexdata.com/v3/launches?limit=100`;
      //   axios.get(url).then(response => response.data)
      //   .then((data) => {
      //     this.setState({ thumbNailCard: data })
      //   })
    }

    getAllDAta(){
      const url = `https://api.spacexdata.com/v3/launches?limit=100`;
      axios.get(url).then(response => response.data)
      .then((data) => {
        this.setState({ thumbNailCard: data })
      })
    }

    selectYear=(event)=>{
      const yearsLaunch = event.target.value;
      console.log(yearsLaunch);
    }


    // handleClick = event => {
    //   const byOrigin = event.target.value
    //   let filterCoffee = []
    //   if(event.target.value === 'all'){
    //     filterCoffee = this.state.coffees
    //   } else{
    //     filterCoffee = this.state.coffees.filter(coffee => coffee.origin === byOrigin)
    //   }
      
    //   this.setState({filterCoffee: filterCoffee})
  
    // }

    // successLaunch = (launchSuccess) =>{
    //   const url = `https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true`;
    //   axios.get(url).then(response => response.data)
    //   .then((data) => {
    //     this.setState({ thumbNailCard: data })
    //   })
    // }

    landSuccess=(successLanding)=>{
      alert(successLanding);
    }
      

    render(){
      return (
        <div className="App">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <h4>Space X Launch Programs</h4> 
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-12 col-sm-12 col-md-2 ">
                {/* <Filters successLaunch={this.successLaunch} /> */}

                <div className="card filters">
                    <div className="card-body">
                        <h5>Filters</h5>
                        <div className="filterContainer">
                            <h6>Launch Years</h6>
                            <ul>
                                <li>
                                    <button className="btn btn-primary" value="2006" onClick={this.selectYear}>2006</button>
                                </li>
                                <li>
                                    <button className="btn btn-primary" value="2007" onClick={this.selectYear}>2007</button>
                                </li>
                                <li>
                                    <button className="btn btn-primary" value="2008" onClick={this.selectYear}>2008</button>
                                </li>
                                <li>
                                    <button className="btn btn-primary" value="2009" onClick={this.selectYear}>2009</button>
                                </li>
                                <li>
                                    <button className="btn btn-primary" value="2010" onClick={this.selectYear}>2010</button>
                                </li>
                                <li>
                                    <button className="btn btn-primary" value="2011" onClick={this.selectYear}>2011</button>
                                </li>
                                <li>
                                    <button className="btn btn-primary" value="2012" onClick={this.selectYear}>2012</button>
                                </li>
                                <li>
                                    <button className="btn btn-primary" value="2013" onClick={this.selectYear}>2013</button>
                                </li>
                                <li>
                                    <button className="btn btn-primary" value="2014" onClick={this.selectYear}>2014</button>
                                </li>
                                <li>
                                    <button className="btn btn-primary" value="2015" onClick={this.selectYear}>2015</button>
                                </li>
                                <li>
                                    <button className="btn btn-primary" value="2016" onClick={this.selectYear}>2016</button>
                                </li>
                                <li>
                                    <button className="btn btn-primary" value="2017" onClick={this.selectYear}>2017</button>
                                </li>
                                <li>
                                    <button className="btn btn-primary" value="2018" onClick={this.selectYear}>2018</button>
                                </li>
                                <li>
                                    <button className="btn btn-primary" value="2019" onClick={this.selectYear}>2019</button>
                                </li>
                                 <li>
                                    <button className="btn btn-primary" value="2020" onClick={this.selectYear}>2020</button>
                                </li>

                            </ul>
                        </div>

                        <div className="filterContainer">
                            <h6>Successful Launch</h6>
                            <ul>
                                <li className="btn btn-primary">True</li>
                                <li className="btn btn-primary">False</li>
                            </ul>
                        </div>

                        <div className="filterContainer">
                            <h6>Successful Landing</h6>
                            <ul>
                                <li className="btn btn-primary">True</li>
                                <li className="btn btn-primary">False</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-10">
                <CardListing cards={this.state.thumbNailCard} />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 text-center ">
                <p ><b>Developed by</b> Hemraj Anuragi</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
}

export default App;
