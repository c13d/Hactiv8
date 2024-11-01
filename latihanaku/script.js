const form = document.querySelector("#form")

const docLabel = [
    "namaLabel",
    "emailLabel",
]

const docForm = [
    "nama",
    "email"
]

let datas = [
    {
        nama: "Christophorus Davin",
        email: "christophorusdavin@gmail.com",
    }
]

form.addEventListener("submit", (event) => {
    event.preventDefault();

    docLabel.forEach((value, index) => {
        document.querySelector(`#${value}`).textContent = document.querySelector(`#${docForm[index]}`).value
    })

    datas.push({
        nama: document.querySelector(`#${docLabel[0]}`).textContent,
        email: document.querySelector(`#${docLabel[1]}`).textContent,
    })

    updateView()
})

function trigger() {
    if(form.style.display == "block" || form.style.display == "") {
        form.style.display = "none"
    } else {
        form.style.display = "block"
    }
}

function updateView() {
    const tbody = document.querySelector("#tbody")

    let temp = ""
    datas.forEach((value, index) => {
        temp += `
        <th>
            <td>${value.nama}</td>
            <td>${value.email}</td>
            <td><button>Delete</button><button>Update</button></td>
        </th>
        `
    })

    tbody.innerHTML = temp

    docForm.forEach((value, index) => {
        document.querySelector(`#${value}`).value = ""
    })
}