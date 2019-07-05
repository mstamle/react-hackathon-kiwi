import React from 'react';

import { DateTime } from 'luxon';

const Flight = (props) => {
    return (
        <div>
            <strong> {props.cityFrom} </strong>
            <strong> {props.cityTo} </strong>
            <strong> {
                DateTime.fromMillis(props.dTime * 1000).toFormat('hh:mm')
            } </strong>
            <strong> {
                DateTime.fromMillis(props.aTime * 1000).toFormat('hh:mm')
            } </strong>

            <strong> {props.price} EUR </strong>

            <p> Stopovers: {props.numberOfStopOver}</p>

        </div>
        
    )
}

const FlightResultsComponent = (props) => {


    const flights = props.flights.slice(props.paginationPostition , props.paginationPostition + props.paginationInterval).map((flight,index) =>{
        console.log(flight);
        return(
            <Flight
                key={`flight-${index}`}
                cityFrom={flight.cityFrom}
                cityTo={flight.cityTo}
                dTime={flight.dTimeUTC}
                aTime={flight.aTimeUTC}
                price={flight.price}
                numberOfStopOver = {flight.route.length}
            />
        )
    })
    return (
        <div>
            <h1>Results!!!!</h1>
            <div>
                {flights !== [] ? props.Messages.FlightsFound : props.Messages.NoFlight}
            </div>

            <div>
                {flights}
            </div>

            {props.directRequired ? props.Messages.Direct : props.Messages.NoDirectNeeded }


            <div>
                <button onClick={props.handleGoBack} disabled={props.paginationPostition <= 0 }>Back</button>
                <button onClick={props.handleGoNext} disabled={props.paginationPostition + props.paginationInterval > flights.length }>Next</button>
            </div>
        </div>
    )
}

export default FlightResultsComponent;



//        setShownFlights(flights.slice(paginationPostition , paginationPostition + paginationInterval));