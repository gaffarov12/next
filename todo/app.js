const garus = document.getElementById('garus')
const loc = document.getElementById('loc')



function name(muloc) {
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${muloc}&appid=19aed87ec1f25ac55099a95326ccbee4&units=metric`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        garus.textContent = Math.trunc(data.main.temp) + ' C'
        loc.textContent = data.name
    })
}

const muloc = 'toshkent'
name(muloc)



const ism = document.getElementById('ism')
const input = document.getElementById('input')
const musr = document.getElementById('musr')



musr.onclick = () => {
    name(input.value)

    input.value = ''
    ism.textContent = ''
}