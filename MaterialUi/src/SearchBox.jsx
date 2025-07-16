import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function SearchBox() {
    let [city, setCity]=useState("");
    const API_URL="http://api.openweathermap.org/geo/1.0/direct"
    const API_KEY="df8b920c476ddf9a81baced73562087c"


    let getWeather=async ()=>{
        let res=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonRes=await res.json()
        console.log(jsonRes)
    }

    let handleChange=(evt)=>{
        setCity(evt.target.value)
    }


    let handleSubmit=(e)=>{
        e.preventDefault();
        console.log(city);
        setCity("");
        getWeather()
        
     

    }

    return (
        <div>
            <p><b> Search the weather</b></p>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City" variant="outlined" required onChange={handleChange} />
                <br></br><br></br>
                <Button variant="text" type='submit'>Search</Button>




            </form>
        </div>
    )
}