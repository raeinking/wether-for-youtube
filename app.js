const search = document.getElementById('search')
const day = document.getElementById('day')
const temp1 = document.getElementById('temp')
const icon1 = document.getElementById('icon')
const wind1 = document.getElementById('wind')
const name1 = document.getElementById('name')
const left = document.getElementById('left')

function weather(city){
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d55f81ebe5cf350cf6c6a33fc067cede`).then(response => response.json()).then(data => {
    const name = data.name
    const des = data.weather[0].description
    const temp = data.main.temp
    const icon = data.weather[0].icon
    const wind = data.wind.speed
    const deg = data.wind.deg


    day.textContent = des
    name1.textContent = name
    temp1.textContent = Math.floor(temp - 273) + ' °C'
    icon1.src = `http://openweathermap.org/img/wn/${icon}.png`
    wind1.textContent = wind + 'm/s °' + deg
    left.style.display = 'flex'
    document.body.style.backgroundImage = `url(https://source.unsplash.com/1600x900/?${city})`


})    
}
search.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        weather(search.value)
        
    }
})