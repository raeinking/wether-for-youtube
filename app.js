function weather(city){
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d55f81ebe5cf350cf6c6a33fc067cede`).then(response => response.json()).then(data => {
    const name = data.name
    const des = data.weather[0].description
    const temp = data.main.temp
    const icon = data.weather[0].icon
    const wind = data.wind.speed
    const deg = data.wind.deg
})
}

const search = document.getElementById('search')

search.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        weather(search.value)
    }
})


