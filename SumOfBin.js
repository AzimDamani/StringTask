function stb(a, b){
    let s1 = parseInt(a , 2);
    let s2 = parseInt(b , 2);

    let sum = s1 + s2;

    return sum.toString(2);
}

console.log(stb("1010", "1011"));