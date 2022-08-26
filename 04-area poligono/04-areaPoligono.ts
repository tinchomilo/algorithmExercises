function calculateArea(polygon: string, param1: number, param2: number): string {
    let area: number
    switch (polygon.toLowerCase()) {
        case 'triangle':
            area = (param1 * param2) / 2
            break;

        case 'square':
            area = param1 * 4
            break;

        case 'rectangle':
            area = param1 * param2
        break;

        default:
            return 'Invalid Polygon'
    }
    return `El area del ${polygon} es de ${area}`
}

console.log( calculateArea('Square', 2, 4) )