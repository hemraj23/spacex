import React from 'react';
import CardItem from './CardItem';

const CardListing = ({cards}) =>{
    //console.log(cards);
    const renderedList = cards.map(card =>{
        // return <CardItem key={card.flight_number} />;
        //console.log(card.mission_id);
        
        return(
            <div className="col-12 col-md-6 col-lg-3"  key={card.flight_number}>
                <div className="card" >
                    <div class="imgContainer">
                        <img src={card.links.mission_patch} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{card.mission_name} #{card.flight_number}</h5>
                        <p>Mission Ids: {card.mission_id}</p>
                      
                        <p>Launch Years : {card.launch_year}</p>
                        <p>Successful Launch  :  {card.launch_success}</p>
                    </div>
                </div>
            </div>
        )
    });

    return <div className="row">{renderedList}</div>;
}

export default CardListing;


