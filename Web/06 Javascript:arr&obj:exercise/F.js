var eng = ['j', 'a', 'b' ,'c' ,'d' ,'e' ,'f' ,'g' ,'h', 'i'];

const transform = (number) => {
    var num = number.split('')
    var order = num.sort()
    var alphabet = order.map(i => {
        return eng[Number(i)]
    })
    return alphabet.join('');
}

console.log(transform('21312401283109'))