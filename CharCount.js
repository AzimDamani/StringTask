function charCount(str, s){
	const arr = str.split(' ');
	let cnt = 0;
	for(let w of arr){
		for(let c = 0 ; c < w.length ; c++){
			if(w.charAt(c) === s) cnt++;
		}
			
	}
	return cnt;
}

const ans = charCount("This is Ballu" , "s");
console.log(ans);