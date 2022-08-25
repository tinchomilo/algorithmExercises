// Escribir una función que tome un array de valores y retorne el mismo array pero con los ceros al final

//ejemplo: 

//moverCeros([false, 1, 0, 1, 3, 'a', 8, 0, 't', 0, 5]); // [flase, 1, 1, 3, 'a', 8, 't', 5, 0, 0, 0]

const ARR = [false, 'b', 1, 0, 1, 3, 'a', 8, 0, 't', 0, 5]


// function moverCeros(list: unknown[]): unknown[] {
//     const arrCeros: unknown[] = []
//     for(let i = list.length - 1; i >= 0; i--) {
//         if(list[i] === 0)
//            arrCeros.push( list.splice(i, 1))
//     }
//     return [...list, ...arrCeros].flat()
// }

function moverCeros(list: unknown[]): unknown[] {
    const { zeros, noZeros } = list.reduce<{zeros: unknown[], noZeros: unknown[]}>
    ( ({ zeros, noZeros }, elem) => {
        if( elem === 0 ){
            return { noZeros, zeros: zeros.concat(elem)}
        } else {
            return { zeros, noZeros: noZeros.concat(elem) }
        }
    }, { zeros: [], noZeros: [] })

    return [...noZeros, ...zeros]
    // const { zeros, noZeros } = list.reduce<{zeros: unknown[], noZeros: unknown[]}>
    // ( ({ zeros, noZeros }, elem) => {
    //     return elem === 0
    //     ? { noZeros, zeros: zeros.concat(elem)}
    //     : { zeros, noZeros: noZeros.concat(elem) }
    // }, { zeros: [], noZeros: [] })

    // return [...noZeros, ...zeros]

}
console.log( moverCeros(ARR) )