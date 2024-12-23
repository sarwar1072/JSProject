


const getWeatherApp=()=>{

    const apiKey='eaed64d65b83117aec0c1a525cadf592';
    const city=document.getElementById('cityInput').value;
    const apiURL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
    fetch(apiURL)
    .then(res=>res.json())
    .then(data=>{

      const weatherInfo=document.getElementById('weatherInfo');

       const description=data.weather[0].description;
       const temperature=data.main.temp;
       const humidity=data.main.humidity;
       const windspeed=data.wind.speed;
       weatherInfo.innerHTML=`
        <p> Description: ${description}</p>
        <h4>Temperature: ${temperature}</h4>
        <p>Humidity:${humidity} </p>
       <p>windspeed:${windspeed} </p>

       `;
    }).catch(error=>{
      console.log('opps,sorry error',error);
      document.getElementById('weatherInfo').textContent='City not found';
    })
 }