console.log("hehe");

function sum(a, b) {
  return a + b;
}

function sumVariadic(...b) {
  let total = 0;
  b.forEach((value) => (total += value));
  return total;
}

function sumVariadicReduce(...b) {
  const total = b.reduce((prev, current) => prev + current, 0);
  return total;
}

function testFunctional(...b) {
  const result = b
    .map((value) => value % 2 == 0)
    .reduce((prev, current) => prev + current, 0);

  return result;
}

const sumWithArrow = (...b) => {
  return b.reduce((prev, current) => prev - current, 0);
};

const sumWithArrowInline = (...b) =>
  b.reduce((prev, current) => prev - current, 0);

console.log(sumVariadic(10, 20, 30, 40, 50, 60));
console.log(sumVariadicReduce(10, 20, 30, 40, 50, 60));
console.log(sumVariadicReduce(1, 2, 3, 4, 5, 6, 7));
console.log(testFunctional(1, 2, 3, 4, 5, 6, 7));

function toogleImage() {
  const coffeeImage = document.getElementById("coffeeImage");

  if (coffeeImage.style.display === "") {
    coffeeImage.style.display = "none";
  } else {
    coffeeImage.style.display = "";
  }

  //   if (coffeeImage.classList.contains("hidden")) {
  //     coffeeImage.classList.remove("hidden");
  //   } else {
  //     coffeeImage.classList.add("hidden");
  //   }
}

const submitForm = document.querySelector("#submitForm");
const inputName = document.querySelector("#inputName");
const selectEdu = document.querySelector("#selectEdu");
const inputGender = document.querySelectorAll("[name='gender']");

inputGender.forEach((value) => {
  value.addEventListener("change", function (event) {
    const value = event.target.value;
    const displayName = document.querySelector("#displayGender");
    displayName.textContent = value;
  });
});

selectEdu.addEventListener("change", function (event) {
  const value = event.target.value;
  const displayName = document.querySelector("#displayEdu");
  displayName.textContent = value;
});

inputName.addEventListener("input", function (event) {
  const value = event.target.value;
  const displayName = document.querySelector("#displayName");
  displayName.textContent = value;
});

submitForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event);
  const form = event.target;

  const data = new FormData(form);
  for (const [name, value] of data) {
    console.log(name, ":", value);
  }

  console.log(data.get("gender"));
  console.log(event);

  // Cara capek
  const checkedGender = document.querySelector("[name='gender']:checked").value;
  console.log(checkedGender);
});

// Fungsi akan dijalankan ketika html sudah ke load
// document.onload(() => {});
