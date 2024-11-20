const inputText = document.getElementById("input-text");
const outputText = document.getElementById("output-text");
const translateBtn = document.getElementById("translate-btn");
const keyboard = document.querySelector(".keyboard");
const resetBtn = document.getElementById("reset-btn");

// Define the alien alphabet and its translations
const alienAlphabet = {
  a: "A",
  b: "B",
  c: "C",
  d: "D",
  e: "E",
  f: "F",
  g: "G",
  h: "H",
  i: "I",
  j: "J",
  k: "K",
  l: "L",
  m: "M",
  n: "N",
  o: "O",
  p: "P",
  q: "Q",
  r: "R",
  s: "S",
  t: "T",
  u: "U",
  v: "V",
  w: "W",
  x: "X",
  y: "Y",
  z: "Z",
  ___: " ",
};

resetBtn.addEventListener("click", () => {
  inputText.value = ""; // Clear the input text area
  outputText.value = ""; // Clear the output text area
});

// Create the alien keyboard
for (const alienChar in alienAlphabet) {
  const button = document.createElement("button");
  button.textContent = alienChar;
  button.addEventListener("click", () => {
    inputText.value += alienChar;
  });
  keyboard.appendChild(button);
}

translateBtn.addEventListener("click", () => {
  const alienText = inputText.value;
  let translatedText = "";

  for (let i = 0; i < alienText.length; i++) {
    const char = alienText[i];
    translatedText += alienAlphabet[char] || char;
  }

  outputText.value = translatedText;
});
