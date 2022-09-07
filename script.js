const button = document.getElementById("card-button");
const adviceId = document.getElementById("advice-id");
const advice = document.getElementById("advice");

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function randomAdvice() {
  try {
    let randomId = getRandomIntInclusive(1, 224);
    let res = await fetch(`https://api.adviceslip.com/advice/${randomId}`);
    let data = await res.json();
    let id = data.slip.id;
    let text = data.slip.advice;
    adviceId.innerText = id;
    advice.innerText = text;
  } catch (err) {
    console.log(err);
  }
}

button.onclick = () => {
  randomAdvice();
};
