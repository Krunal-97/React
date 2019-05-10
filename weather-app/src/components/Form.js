import React , {Component} from 'react'
import DisplayData from './DisplayData'

const API_Key = "70b0f4dfc668e5687ea7e45adfe4b665"

class Form extends Component {
    state = {
        city: undefined,
        country: undefined,
        temprature: undefined,
        humidity: undefined,
        error: undefined
      }
      
      onSubmitForm = (event) => {
        event.preventDefault()
        // const {name , value} = event.target
        const city = event.target.elements.city.value
        const country = event.target.elements.country.value
      
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_Key}&units=metric`)
        .then(response => response.json())
        .then(data => {
        if(city && country){
            this.setState({
                city: data.name,
                country: data.sys.country,
                temprature: data.main.temp,
                humidity: data.main.humidity,
                error: ""
                })
                console.log(data)
            } else {
                this.setState({
                error: "Please enter the Values..."
                })
            }
        })
      }  

render() {
    return (
        <div>
            <form onSubmit = {this.onSubmitForm}>
                <input type = "text"  name = "city" placeholder = "City Name..."/>
                <input type = "text"  name = "country" placeholder = "Country Name.." />
                <button type="submit">Get Weather</button>
            </form>
            <DisplayData 
                temprature = {this.state.temprature}
                country = {this.state.country}
                city = {this.state.city}
                humidity = {this.state.humidity}
                error = {this.state.error}
            />
        </div>
        )
    }
}

export default Form