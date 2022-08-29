function tableroAjedres(alto: number, ancho: number) {
    const rows: string[]  = new Array(ancho).fill('#')
    const rows1: string[] = new Array(ancho).fill(' #')

    for (let i = 0; i <= alto - 1 ; i++) {
        i === 0 || i % 2 === 0
        ? console.log(rows.join(' '))
        : console.log(rows1.join(''))
    }
}

tableroAjedres(9,9)