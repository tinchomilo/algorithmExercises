/*
 * Reto #7
 * CONTANDO PALABRAS
 * Fecha publicación enunciado: 14/02/22
 * Fecha publicación resolución: 21/02/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que cuente cuantas veces se repite cada palabra y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan automáticamente.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const palabra = 'cada Dia es un nuevo dia aprendizaje y es un desafio'

function contarPalbras( cadena ) {
    const newPalabra: string[] = cadena.replaceAll("[^A-Za-z0-9]","").toLowerCase().split(' ')
    // const result = {}

    // for( let palabra of newPalabra) {
    //     if( result.hasOwnProperty(palabra) ){
    //         result[palabra] += 1
    //     } else {
    //         result[palabra] = 1
    //     }
    // }

    // for( let salida in result) {
    //     console.log(`${salida}: ${result[salida]}`)
    // }

    const salida = newPalabra.reduce( (acc, palabra) => {
        acc.hasOwnProperty(palabra)
        ? acc[palabra] += 1
        : acc[palabra] = 1
        return acc
    }, {})

    for( let out in salida) {
            console.log(`${out}: ${salida[out]}`)
        }
}


console.log( contarPalbras(palabra) )