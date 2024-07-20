const str = "HelLO this Is aZIM";
const arr = str.split(" ");

const ans = arr.map(w => w.charAt(0).toUpperCase() + w.substring(1).toLowerCase());

console.log(ans.join(" "));