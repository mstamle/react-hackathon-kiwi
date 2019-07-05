import React from 'react';

const FlightSearchingComponent = ({CitiesFrom, CitiesTo, citiesFromChange, citiesToChange, handleSearchClick, handleCheckbox, directRequired }) => {
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
            <div>
                <input type="checkbox" id="direct" onChange={handleCheckbox} checked={directRequired}/>
                <label htmlFor="direct">Direct Flights Only</label>

            </div>
            <button onClick={handleSearchClick} type="submit">Search</button>
        </div>
    )
}

export default FlightSearchingComponent;