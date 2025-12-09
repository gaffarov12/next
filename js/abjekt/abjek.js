// const app = {
//     name: "mubasher",
//     age: 12,
//     scholl: "18 dimi"
// }

// const { name, ...data } = app
// console.log(name)
// console.log(data)
//  0   1  2  3   4          5
// const arr = [1, 2, 3, 4, "Mubasher", true, false, () => { }, { name: "Mubasher" }]

// console.log(arr[8].name)
//            0          1               2           3      4     5        6               7               8
// const arr = [2+3, 'kurs taraqior' ,   'mubasher ', '5 A', true , false, ()=>{}   , {nomer :"a555aa"} ,  "if else "]
//           console.log(arr[1] );


// =================================================================================================
// =================================================================================================

// let fruits = ['olma', 'anor', 'nok', 'kwi', 1, 2, 2, 3,  4, 5, 6, 7, 7, 'uzum', 'qulupnay'];
// console.log(fruits[fruits.length - 1]);
// console.log(fruits.length)

// console.log(fruits.at(-2))

// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]
// [1,2,3,4,5,6]
// console.log(arr1.concat(arr2))

// const arr = [2, ['salom', [1, 2, 3, 4], 'alik'], 4, 5, 6]
// // console.log(arr[1][1][3])
// console.log(arr.flat(2))

let fruits = ['olma', 'anor', 'nok', 'kwi', 'uzum', 'qulupnay', 's'];


const res = fruits.forEach((item) => item + " Sotildi")
console.log(res)


// const res =  fruits.map((item) => item + " Sotildi")
// console.log(res)