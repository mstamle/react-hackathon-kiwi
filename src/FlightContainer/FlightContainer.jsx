import React, {useEffect, useState} from 'react';


import FlightSearchingComponent from '../Components/FlightSearchingComponent.jsx';
import FlightResultsComponent from '../Components/FlightResultsComponent.jsx';


const FlightContainer = () => {

    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);

    const [departureCity, setDepartureCity] = useState('PRG');
    const [arrivalCity, setArrivalCity] = useState('VLC');
    const [directRequired, setDirectRequired] = useState(false);
    const [maxStops, setMaxStops] = useState(10);
    const [paginationPostition, setPaginationPostition] = useState(0);
    const paginationInterval = 5;

    const CitiesTo = [
        { code: "VLC",
            name: "Valencia"},
        { code: "BCN",
            name: "Barcelona"},
        { code: "MAD",
            name: "Madrid"},
        { code: "MXP",
            name: "Milano"},
        { code: "ATH",
            name: "Athens"}
    ]

    const CitiesFrom = [
        { code: "PRG",
            name: "Prague"},
        { code: "TXL",
            name: "Berlin"},
        { code: "WAW",
            name: "Warsaw"},
        { code: "PED",
            name: "Pardubice"}
    ]



    const citiesFromChange = (event) => {
        setDepartureCity(event.target.value);
    }

    const citiesToChange = (event) => {
        setArrivalCity(event.target.value);
    }

    useEffect(() => {
        fetch(
            `https://api.skypicker.com/flights?flyFrom=${departureCity}&to=${arrivalCity}&dateFrom=06/07/2019&max_stopovers=${maxStops}`
        )
            .then(response => response.json())
            .then(data => {
                setFlights(data.data);
                setLoading(false);
            })
    }, [paginationPostition])

    const handleCheckbox = () => {
        setDirectRequired(function (previousState) {
            if (!previousState === true) {
                setMaxStops(0);
            }
            return !previousState;
        });


    }

    const handleSearchClick = () => {
        fetch(
            `https://api.skypicker.com/flights?flyFrom=${departureCity}&to=${arrivalCity}&dateFrom=06/07/2019&max_stopovers=${maxStops}`
        )
            .then(response => response.json())
            .then(data => {
                console.log('you want only direct flights? ', directRequired);
                setFlights(data.data);
                // setFlights([]);
                setLoading(false);
            })
    };

    const handleGoNext = () => {
        setPaginationPostition(paginationPostition+5);
        console.log('You are now slicing from', paginationPostition, 'to ', paginationPostition + paginationInterval);
    }
    const handleGoBack = () => {
        setPaginationPostition(paginationPostition-5);
        console.log('You are now slicing from', paginationPostition, 'to ', paginationPostition + paginationInterval);
    }

    const Messages = {
        NoFlight: 'Sorry there is no flight found, go by bus!!',
        FlightsFound: 'Congrats, you can spend some money with us now! Here are your flights: ',
        Direct: 'You have selected only direct flights.',
        NoDirectNeeded: 'You have searched for flights regardless of the amount of stopovers.',
    }

    return (
        <div>
            <FlightSearchingComponent
                CitiesTo = {CitiesTo}
                CitiesFrom = {CitiesFrom}
                citiesFromChange = {citiesFromChange}
                citiesToChange = {citiesToChange}
                handleSearchClick = {handleSearchClick}
                handleCheckbox = {handleCheckbox}
                directRequired = {directRequired}

            />
            { loading ? 'Loading...' : ''}
            <FlightResultsComponent
                flights={flights}
                Messages = {Messages}
                directRequired = {directRequired}
                handleGoNext = {handleGoNext}
                handleGoBack={handleGoBack}
                paginationPostition = {paginationPostition}
                paginationInterval = {paginationInterval}
            />


        </div>
    )
}

export default FlightContainer;