
function remSpace(s){
    const arr = s.split(" ");
    let ans ="";
    for(let w of arr){
        ans = ans.concat(w);   
    }
    console.log(ans);

    // console.log(str.trim(" ", ""));
}
const str = "Hello this is Azim";

remSpace(str);