function run(){
const now = new Date();

let hours = now.getHours();     // 0–23
let minutes = now.getMinutes(); // 0–59
let seconds = now.getSeconds(); // 0–59

let med;

if(hours < 12){
    med = 'am';
}
else{
    med = 'pm';
}

hours = hours % 12;
hours = String(hours).padStart(2,0);
minutes = String(minutes).padStart(2,0);
seconds = String(seconds).padStart(2,0);

let time = `${hours} : ${minutes} : ${seconds} ` + med;

let output = document.getElementById("time");

output.textContent = time;

console.log(time);

setInterval(run,1000);
}

run();