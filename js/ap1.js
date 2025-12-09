// function  bu  jsdagi   bu malum bir codeni bajarib beradigan block xisoblanadi

// function 3 xil turi bor

// 1 - function expression 


// salomber("omonhon")

// salomber("gambit")

// salomber("roro")

// salomber("artifak")


// function salomber(name) {
//     console.log(name, 'bloger')
// }
// console.log('----------------------------------------------------------------------------------------------------------------');


// // 2 - function DECLORATION 
// const sayhi = function (name){
//     console.log(name ,"kurs dosh")
// }

// sayhi("sardor oka")
// sayhi("nasim oka")

// 2 - arrow function 

// const sayhi = () => {
//     console.log('salom')

// }

// sayhi()
//---------------------------------------------------------------------------------masala1---------------------------------------------------------------------------------//
// function i(name) {
//     console.log("salom",name);

// }
// i( "ali")

//---------------------------------------------------------------------------------masala2---------------------------------------------------------------------------------//


// const parametrliFunksiya = (name, sinf) => {
//     console.log(`Salom ${name} siz ${sinf} -  sinda o'qiysiz`)
// }

// parametrliFunksiya('Mubasher', 5)

// function get(ism, yosh='ism kiriting iltimos') {
//     console.log("ism=>",ism)
//     console.log("yosh=>",yosh)
// }
// get('12 yosh',1)


// function name(h,o) {
//     console.log(h - o);

// }
// name(2025,2014);


// 2025 - 2014





function ism(uzername, passwort) {
    let ism = 'mubasher'
    let parol = 123456
    if (uzername == ism && passwort == parol) {
        console.log('tizimga kirildi');

    }
    else {
        console.log('uzername yoki passwort hato');

    }
}



ism(
    'mubasher', 12345
)