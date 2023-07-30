// Mock Server
const FAILURE_COUNT = 10;
const LATENCY = 200;

function getRandomBool(n) {
  const threshold = 1000;
  if (n > threshold) n = threshold;
  return Math.floor(Math.random() * threshold) % n === 0;
}

function getSuggestions(text) {
  var pre = "pre";
  var post = "post";
  var results = [];
  if (getRandomBool(2)) {
    results.push(pre + text);
  }
  if (getRandomBool(2)) {
    results.push(text);
  }
  if (getRandomBool(2)) {
    results.push(text + post);
  }
  if (getRandomBool(2)) {
    results.push(pre + text + post);
  }
  return new Promise((resolve, reject) => {
    const randomTimeout = Math.random() * LATENCY;
    setTimeout(() => {
      if (getRandomBool(FAILURE_COUNT)) {
        reject();
      } else {
        resolve(results);
      }
    }, randomTimeout);
  });
}

// Create an Auto Suggestion Box in Vanilla JS
// Create a suggestion area bottom to the input box that shows the suggestion list.
// The list is visible when the input box is in focus or when user types, it hides when the input box is blurred
// getSuggestions(text); method will act as mock server and will return random text based on the inputs with 0 - 200 millisceond latency and may fail.
// if a suggestion is clicked, populate the input box with its value and bring input box in focus

(function () {
  const input = document.getElementById("input-box");
  const suggestion = document.getElementById("suggestion-box");

  const onInputFocus = () => {
    suggestion.style.display = "block";
  };
  const onBlur = (e) => {
    if (e.target === input || e.target === suggestion) return;
    suggestion.style.display = "none";
  };

  const processData = async (value) => {
    suggestion.innerText = "";
    if (!value) {
      return;
    }
    try {
      const response = await getSuggestions(value);

      if (response.length > 0) {
        const uList = document.createElement("ul");

        response.forEach((res) => {
          const list = document.createElement("li");
          list.style.cursor = "pointer";
          list.innerText = res;
          uList.appendChild(list);
        });
        suggestion.innerText = "";
        suggestion.appendChild(uList);
      }
    } catch (e) {
      console.log("Error in API call", e);
    }
  };
  const onChange = (e) => {
    const { value } = e.target;

    processData(value);
  };

  const onSuggestionClick = (e) => {
    input.value = e.target.innerText;
    suggestion.style.display = "none";
    // console.log(e.target.innerText);
  };
  input.addEventListener("focus", onInputFocus);
  window.addEventListener("click", onBlur);
  input.addEventListener("keyup", onChange);
  suggestion.addEventListener("click", onSuggestionClick);
})();
