const orachi = document.getElementById('contaner')
const btn = document.getElementById('btn')
const ism = document.getElementById('ism')
const famila = document.getElementById('famila')
const parol = document.getElementById('parol')
const tastilash = document.getElementById('tastiqlash')



btn.onclick = () => {


  const foydalanuchi= {
  ims:ism.value,
    famila:famila.value,
      parol:parol.value,
        tastilash:tastilash .value
  }

  console.log(foydalanuchi);
  
}
