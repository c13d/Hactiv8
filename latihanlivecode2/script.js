const form = document.querySelector("#form")

let datas = [{
    nama: "Davin"
}]

function trigger() {    
    if(form.style.display == "none") {
        form.style.display = "block"
    } else {
        form.style.display = "none"
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault()

    datas.push({
        nama: document.querySelector("#nama").value
    })

    let temp = ""
    datas.forEach(element => {
        temp += `
        <tr>
            <td>${element.nama}</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
        `
    });

    document.querySelector("#tbody").innerHTML = temp
    document.querySelector("#nama").value = ""
})