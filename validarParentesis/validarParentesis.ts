const str = '(())((()())())'

function validarParentesis(parentesis: string) {
    const buffer = parentesis.replace(/\(\)/,'')

    if(buffer === '') {
        return true
    } else if( buffer === parentesis) {
        return false
    }

    return validarParentesis(buffer)
}

console.log(validarParentesis(str))