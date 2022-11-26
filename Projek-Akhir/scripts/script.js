const textElement = ["I'am", "Front End Developer", "UI/UX Designer"];
let count = 0;
let txtIndex = 0;
let currentTxt = "";
let words = "";

(function ngetik() {
  if (count == textElement.length) {
    count = 0;
  }
  currentTxt = textElement[count];

  words = currentTxt.slice(0, ++txtIndex);
  document.querySelector(".auto").textContent = words;

  if (words.length == currentTxt.length) {
    count++;
    txtIndex = 0;
  }

  setTimeout(ngetik, 500);
})();
