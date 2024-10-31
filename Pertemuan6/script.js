let result = document.getElementById("result");
console.log(result);

let resultWithSelector = document.querySelector("#result2");
resultWithSelector.innerText = "<h1>Dapong</h1>";
console.log(resultWithSelector);

let a = 1;
setInterval(myTimer, 100);
function myTimer() {
  result.innerHTML = "<h1>Dapong " + a + "</h1>";
  a = a + 1;
}

const paragraphElement = document.createElement("p");
paragraphElement.innerText = "ini paragraphh";

resultWithSelector.appendChild(paragraphElement);
