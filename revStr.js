function rev(s){
    let i = 0;
    let j = s.length-1;
    const arr = s.split('');
    // console.log(arr);

    while(i < j){
        let t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
        i++;
        j--;
    }

    // console.log(arr);
    const ans = arr.join('');
    console.log(ans);
   
}

rev("Hello my name is Azim");