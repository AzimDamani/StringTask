const str = " HELLO this IS Azim";

const arr = str.split(" ");

const ans = arr.map(w => w.charAt(0).toLowerCase() + w.substring(1).toUpperCase());

console.log(ans.join(" "));