// 1-  localStorage dan malumot oqish oddiy malumotlarni
// let getword = localStorage.getItem('name') || 'malumot mavjud emas'
// console.log(getword)

// // 2- malumotlar yozish
// localStorage.setItem('model','labo')
// localStorage.setItem('narxi','200000')
// localStorage.setItem('rangi','qora')

// 3 - malumotni delete qilish
// localStorage.removeItem('model')

// 4- barcha malumotlarni delete qilish
// localStorage.clear()


// ------------------------------------------------------
// localStorage.setItem('obj', JSON.stringify( {name:"Mubasher"}))

// let getObj = JSON.parse( localStorage.getItem('obj'))
// console.log(getObj

// )

// localStorage.setItem('arr', JSON.stringify( ['anor','olma','uzum']))

// let getarr = JSON.parse( localStorage.getItem('arr'))
// console.log(getarr)

// let obk={
//     ism:'mubosher',
//     famila:'gaffarov',
//     yosh:'11'
// }



// localStorage.setItem( 'ism','mubosher')

// localStorage.setItem('famila','gaffarov')

// localStorage.setItem('yosh','11')



// const ism = document.getElementById('ism')


// console.log(
//     obk.ism
// )

// ism.textContent = obk.ism

// -------------------------2 masala-------------------------//

                document.addEventListener("keydown", function(event) {
        // Bosilgan tugma nomini olamiz
        const key = event.key;

        // HTMLga chiqarish
        document.getElementById('keyName').textContent = key;
    });