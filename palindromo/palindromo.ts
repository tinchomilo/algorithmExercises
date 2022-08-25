// Un palindromo es una palabra que se lee igaul al derecho y al reves ej:
//323
//110011
//54322345


function palindrome(numero: number) {
    return Number(numero.toString().split('').reverse().join('')) === numero
}

console.log(palindrome(3357665))


// Esta funcion valida si el numero ingresado puede o no ser un palindromo

const num = 211

function palindromo(number: number): boolean {
   const map = String(number).split('').reduce( (acc, num) => ({
    ...acc,
    [num]: acc[num] === undefined ? false : !acc[num],
   }),
   {}
   );
   const valids: boolean[] = Object.values(map)
   console.log(valids)

   return valids.indexOf(false) === valids.lastIndexOf(false)
}


console.log( palindromo(num))