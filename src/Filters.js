import React from 'react';

const Filters =(successLaunch)=>{

        return(
            <React.Fragment>
                <div className="card filters">
                    <div className="card-body">
                        <h5>Filters</h5>
                        <div className="filterContainer">
                            <h6>Launch Years date</h6>
                            <ul>
                                <li className="btn btn-primary">
                                    <button value="2006" onclick={this.handleClick}>2006</button>
                                </li>
                                <li className="btn btn-primary">
                                    <button value="2007" onclick={this.handleClick}>2007</button>
                                </li>
                                <li className="btn btn-primary">
                                    <button value="2008" onclick={this.handleClick}>2008</button>
                                </li>
                                <li className="btn btn-primary">
                                    <button value="2009" onclick={this.handleClick}>2009</button>
                                </li>
                                <li className="btn btn-primary">
                                    <button value="2010" onclick={this.handleClick}>2010</button>
                                </li>
                                <li className="btn btn-primary">
                                    <button value="2011" onclick={this.handleClick}>2011</button>
                                </li>
                                <li className="btn btn-primary">
                                    <button value="2012" onclick={this.handleClick}>2012</button>
                                </li>
                                <li className="btn btn-primary">
                                    <button value="2013" onclick={this.handleClick}>2013</button>
                                </li>
                                <li className="btn btn-primary">
                                    <button value="2014" onclick={this.handleClick}>2014</button>
                                </li>
                                <li className="btn btn-primary">
                                    <button value="2015" onclick={this.handleClick}>2015</button>
                                </li>
                                <li className="btn btn-primary">
                                    <button value="2016" onclick={this.handleClick}>2016</button>
                                </li>
                                <li className="btn btn-primary">
                                    <button value="2017" onclick={this.handleClick}>2017</button>
                                </li>
                                <li className="btn btn-primary">
                                    <button value="2018" onclick={this.handleClick}>2018</button>
                                </li>
                                <li className="btn btn-primary">
                                    <button value="2019" onclick={this.handleClick}>2019</button>
                                </li>
                                 <li className="btn btn-primary">
                                    <button value="2020" onclick={this.handleClick}>2020</button>
                                </li>

                            </ul>
                        </div>

                        <div className="filterContainer">
                            <h6>Successful Launch</h6>
                            <ul>
                                <li onClick={()=>successLaunch} className="btn btn-primary">True</li>
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
            </React.Fragment>
        );
    
}

export default Filters;