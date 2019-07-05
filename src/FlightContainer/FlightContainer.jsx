import React, {useEffect, useState} from 'react';


import FlightSearchingComponent from '../Components/FlightSearchingComponent.jsx';
import FlightResultsComponent from '../Components/FlightResultsComponent.jsx';

const FlightContainer = () => {

    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(
            'https://api.skypicker.com/flights?flyFrom=PRG&to=VLC&dateFrom=06/07/2019&limit=5'
        )
            .then(response => response.json())
            .then(data => {
                console.log(data.data);
                setFlights(data.data);
                setLoading(false);
            })
    }, []);

    return (
        <div>
            <FlightSearchingComponent/>
            { loading ? 'Loading...' : ''}
            <FlightResultsComponent flights={flights} />


        </div>
    )
}

export default FlightContainer;