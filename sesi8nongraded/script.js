const namaLabel = document.querySelector("#namaLabel");
const roleLabel = document.querySelector("#roleLabel");
const availabilityLabel = document.querySelector("#availabilityLabel");
const usiaLabel = document.querySelector("#usiaLabel");
const lokasiLabel = document.querySelector("#lokasiLabel");
const experienceLabel = document.querySelector("#experienceLabel");
const emailLabel = document.querySelector("#emailLabel");

function toogleForm() {
  const formElement = document.querySelector("#iniform");
  if (formElement.style.display === "block") {
    formElement.style.display = "none";
  } else {
    formElement.style.display = "block";
  }

  const refs = [
    ...document.querySelectorAll(`[data-name*="funnel-chart-percent"]`),
  ];

  const namaField = document.querySelector("#nama");
  const roleField = document.querySelector("#role");
  const availabilityField = document.querySelector("#availability");
  const usiaField = document.querySelector("#usia");
  const lokasiField = document.querySelector("#lokasi");
  const experienceField = document.querySelector("#experience");
  const emailField = document.querySelector("#email");

  namaField.value = namaLabel.textContent;
  roleField.value = roleLabel.textContent;
  availabilityField.value = availabilityLabel.textContent;
  usiaField.value = usiaLabel.textContent;
  lokasiField.value = lokasiLabel.textContent;
  experienceField.value = parseInt(experienceLabel.textContent);
  emailField.value = emailLabel.textContent;
}

let submitForm = document.querySelector("#submitForm");
submitForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event);
  const form = event.target;

  const data = new FormData(form);
  for (const [name, value] of data) {
    console.log(name, ":", value);

    document.querySelector(`#${name}Label`).innerHTML = value;
  }
  // namaLabel.textContent = data.get("name");
  // roleLabel.textContent = data.get("role");
  // availabilityLabel.textContent = data.get("availability");
  // usiaLabel.textContent = data.get("availability");
  // lokasiLabel;
  // experienceLabel;
  // emailLabel;
});
