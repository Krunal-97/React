import React from 'react'

const DisplayData = (props) => {
    return (
        <div>
            {props.city && props.country && <p>City : {props.city}</p>}
            {props.city && props.country && <p>Country : {props.country}</p>}
            {props.city && props.country && <p>Temprature : {props.temprature} Degree Celcius</p>}
            {props.city && props.country &&  <p>Humidity : {props.humidity}%</p>}
            {props.error && <p>Error : {props.error}</p>}
        </div>
    )
}

export default DisplayData