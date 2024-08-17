const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];


const bgImage = document.createElement("img");
console.log(bgImage);
//html element를 js에서 생성
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);