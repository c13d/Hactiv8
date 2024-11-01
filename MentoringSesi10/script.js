function pengaturanTempatDuduk(karyawan, kolom) {
    if (kolom === 0) {
        console.log("Invalid number");
        return
    }

    let result = []
    let temp = []
    let counter = 0
    karyawan.forEach((element, index) => {
        // if(counter >= kolom) {
        //     result.push(temp)
        //     temp = []
        //     counter = 0
        // }

        if(index % kolom == 0) {
            result.push(temp)
            temp = []
            counter = 0
        }

        temp.push(element)
        counter++
    });

    if(temp.length > 0){
        while(temp.length != kolom) {
            temp.push("Kursi Kosong")
        }
        result.push(temp)
    }

    console.log(result);
}

console.log(pengaturanTempatDuduk(['John', 'Mary', 'Sarah'], 0))

console.log(pengaturanTempatDuduk(['John', 'Mary', 'Sarah', 'jake', 'Anna'], 2))

console.log(pengaturanTempatDuduk(['John', 'Mary', 'Sarah'], 3))

console.log(pengaturanTempatDuduk(['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank'], 4))


function daftarNasabahLolos(nasabah) {
    nasabah = nasabah.filter((value) => { return value.nilaiKredit >= 75 })
    let result = {
        Platinum: {
            ...nasabah
                .filter((value) => { return value.kelasKredit == 'Platinum' })
                .map((x) => {
                    return {nama: x.nama, nilaiKredit: x.nilaiKredit} 
                })   
        },
        Gold: {
            ...nasabah
                .filter((value) => { return value.kelasKredit == 'Gold' })
                .map((x) => {
                    return {nama: x.nama, nilaiKredit: x.nilaiKredit} 
                })   
        },
        Silver: {
            ...nasabah
                .filter((value) => { return value.kelasKredit == 'Silver' })
                .map((x) => {
                    return {nama: x.nama, nilaiKredit: x.nilaiKredit} 
                })   
        }
    }
    console.log(result)
}

daftarNasabahLolos(nasabah = [
    {nama: 'John', nilaiKredit: 80, kelasKredit: 'Platinum'},
    {nama: 'Jane', nilaiKredit: 60, kelasKredit: 'Gold'},
    {nama: 'Doe', nilaiKredit: 85, kelasKredit: 'Platinum'},
    {nama: 'Smith', nilaiKredit: 77, kelasKredit: 'Silver'},
])

