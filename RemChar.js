function remchar(s , c){
    const arr = s.split('');
    const ans = [];
    for(let char of arr){
        if(char !== c){
            ans.push(char);
        }
    }

    console.log(ans.join(''));
}

remchar("hello my name ills lazlim", "l");