import React from 'react';

const CitiesFrom = [
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

const CitiesTo = [
    { code: "PRG",
        name: "Prague"},
    { code: "TXL",
        name: "Berlin"},
    { code: "MOW",
        name: "Warsaw"},
    { code: "PED",
        name: "Pardubice"}
]
const citiesFromChange = () => {
    console.log("CitiesFrom");
    // this.setState({ subject: event.target.value });
} 

const citiesToChange = () => {
    console.log("CitiesTo");
    // this.setState({ subject: event.target.value });
} 

const FlightSearchingComponent = () => {
    return (
        <div>
            <div>
                <label>From:</label>
                <select onChange={citiesFromChange}>
                    {CitiesFrom.map(city =>
                    <option value={city.code}>{city.name}</option>
                    )}
                </select>
            </div>

            <div>
            <label>To:</label>
            <select onChange={citiesToChange}>
                {CitiesTo.map(city =>
                <option value={city.code}>{city.name}</option>
                )}
            </select>
            </div>
        <button type="submit">Search</button>
        </div>
    )
}

export default FlightSearchingComponent;