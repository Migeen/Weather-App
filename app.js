
const getData = async () => {

    const name = document.querySelector('.name').value;
    const humidity = document.querySelector('.humidity');
    const wind = document.querySelector('.wind');
    const temp = document.querySelector('.temp');
    const image = document.querySelector('.weather-icon');
    
    try {
        let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${name}?unitGroup=metric&key=Q37J8R2XTZ8YWGXZUMHCW9SR2&contentType=json`;
        const response = await fetch(url, { mode: 'cors' });
        const data = await response.json();
                
        const city = document.querySelector('.city');
        city.innerHTML = name;

        humidity.innerHTML = data.currentConditions.humidity;
        wind.innerHTML = data.currentConditions.windspeed;
        temp.innerHTML = data.currentConditions.temp;
        condition = data.currentConditions.conditions;

        if(condition ==='Clear'){
            image.src = 'images/clear.png';
        }else if(condition==='Rain, Partially cloudy'){
            image.src = 'images/rain.png';
        }else if(condition==='Rain, Overcast'){
            image.src = 'images/drizzle.png';
        }else if(condition==='Partially cloudy'){
            image.src = 'images/clouds.png';
        }else if(condition==='Overcast'){
            image.src = 'images/drizzle.png';
        }else if(condition==='Rain'){
            image.src = 'images/rain.png';
        }

    } catch (error) {
        console.error('Error fetching data',error);
        alert('No data available for '+ name);
        throw error;
    }
    
}

// getApi()