// const a = 12 + 6 / 3 - 4 * 2
// // const b = 6/3 = 2;
// // const c = 4*2 = 8;
// // const itogo = 12 + 2 -8 = 6
// // console.log(a)
//
// // 2 + 3 = 5
// // 3 * 2 = 6
// // 2^2-1 = 3
// // 2 * 2 +1 = 5
//
// const aa = []
// let index = 0;
// for(let i =10; i<=190;i+=10){
//   index += i;
//   aa.push(i)
//
// }
// console.log(aa)
// console.log(aa.length)
// console.log(indexaa.length)


// const total = 78;
// const bac = 41;
// const front = 22;
// // bac + front = 9 fullstack
// const tochnoNOSpec = total - bac; // 37 no
// const tochnoNOSpecF = total - front; // 56
//
// console.log(tochnoNOSpecF)

// const a = 100;
// const t1 = 100/60
// const t2 = 100/120
// const total = t1 + t2
// const totalTime = 100 / total // 40 ответ
//
// console.log(t1, t2)
// console.log(totalTime)

// // находим все гласные слова
// const vowelWords = [];
//
// const arrVowel = arr.map((item) => {
//   for (let j = 0; j < vowelLetters.length; j++) {
//     if (item.includes(vowelLetters[j])) {
//       return item
//     }
//   }
// })


const words = [`potato `, `tomato `, `carrot `, `egg`, `pepper `, `cabbage`];
const getSortWords = (arr) => {
  const vowelLetters = [`a`, `e`, `i`, `o`, `u`, `y`]

  const getCountVowel = (str) => {
    let count = 0;
    for (let item of str.toLowerCase()) {
      for (let i = 0; i < item.length; i++) {
        for (let j = 0; j < vowelLetters.length; j++) {
          if (item[i] === vowelLetters[j]) {
            count++
          }
        }
      }
    }
    return count
  }

  const sortWords = arr.sort((a, b) => {
    return getCountVowel(b) - getCountVowel(a)
  })

  return sortWords.join(` `)
}

console.log(getSortWords(words)) // potato  tomato  cabbage carrot  pepper egg


// const ert = getSortWords(arr)
// console.log(ert)


// console.log(tt.join(' '))


// const bubbleSort = arr => {
//   for (let i = 0, endI = arr.length - 1; i < endI; i++) {
//     let wasSwap = false;
//     for (let j = 0, endJ = endI - i; j < endJ; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         wasSwap = true;
//       }
//     }
//     if (!wasSwap) break;
//   }
//   return arr;
// };
//
//
// console.log(bubbleSort(arrTotal))


// let count = 0;
// // console.log(
//
//   [`abye`].map((item)=>{
//     for (let j = 0; j < vowelLetters.length; j++) {
//       console.log(vowelLetters[j])
//       if (item.includes(vowelLetters[j])) {
//         count++
//       }
//
//     }
//       // return item
//
//
//     }
//   )
// console.log(count)
// // )


// for(const i of arr){
//
//   console.log(i)
// }

// const words = arr.map(word => {
//   for(let i = 0; i<arr.length;i++){
//     for(let j = 0; j<vowelLetters.length; j++){
//       if(i === j){
//         return word
//
//         // vowelWords.push(word)
//       }
//     }
//
//   }
//   // if(word){}
// })

// console.log(words)



