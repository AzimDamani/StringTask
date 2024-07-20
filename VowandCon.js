function Vow(s){
    let v = 0;
    let con = 0;

    const set = new Set(["a", "e", "i", "o", "u"]);
    const str = s.split('');
    for(let c of str){
        if(set.has(c)){
            v++;
        }
        else{
            con++;
        }
    }

    console.log(v + " " + con);
    
}

Vow("Baalu");