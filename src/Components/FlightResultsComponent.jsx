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

        </div>
    )
}

const FlightResultsComponent = (props) => {
    const flights = props.flights.map((flight,index) =>{
        console.log('flight', flight);
        return(
            <Flight
                key={`flight-${index}`}
                cityFrom={flight.cityFrom}
                cityTo={flight.cityTo}
                dTime={flight.dTimeUTC}
                aTime={flight.aTimeUTC}
            />
        )
    })
    return (
        <div>
            <h1>Results!!!!</h1>

            {flights}
        </div>
    )
}

export default FlightResultsComponent;