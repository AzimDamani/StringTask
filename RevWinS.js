function rev(str){
    const arr = str.split(" ");
    for(let i = 0 ; i < arr.length ; i++){
        let s = arr[i];
        let w = s.split('').reverse().join('');
        arr[i] = w;
    }

    console.log(arr.join(" "));
}

rev("Hello my name is Azim");