
const bgColor = prompt("Enter background color:");
document.body.style.backgroundColor = bgColor;

const textColor = prompt("Enter text color:");

function getRandomWord() {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const length = Math.floor(Math.random() * 8) + 3; 
    let word = "";
    for (let i = 0; i < length; i++) {
        word += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return word;
}

const words = Array.from({ length: 10000 }, getRandomWord).join(" ");

const container = document.getElementById("text-container");
container.textContent = words;
container.style.color = textColor;
