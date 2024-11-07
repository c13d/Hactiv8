const pelanggan = [
    {
        idPelanggan: 1,
        namaPelanggan: 'John Doe',
        saldoAwal: 150000,
        riwayatTransaksi: [
            { type: 'debit', amount: 5000000},
            { type: 'kredit', amount: 100000},
        ]
    },
    {
        idPelanggan: 2,
        namaPelanggan: 'Davin',
        saldoAwal: 150000,
        riwayatTransaksi: [
            { type: 'debit', amount: 150000},
            { type: 'kredit', amount: 100000},
        ]
    },
    {
        idPelanggan: 3,
        namaPelanggan: 'Bob Smith',
        saldoAwal: 150000,
        riwayatTransaksi: [
            { type: 'debit', amount: 20000},
            { type: 'kredit', amount: 10000},
        ]
    },
]

function hitungSaldoAkhir(pelanggan) {
    // return pelanggan.map(p => [{
    //     nama_pelanggan: p.namaPelanggan,
    //     saldo_akhir: p.riwayatTransaksi.reduce((total, trx) => {
    //         return total + (trx.type === 'kredit' ? -trx.amount : trx.amount)
    //     }, 0)
    // }]).flatMap((x) => x)

    return pelanggan.map(p => {
        return {
                nama_pelanggan: p.namaPelanggan,
                saldo_akhir: p.riwayatTransaksi.reduce((total, trx) => {
                return total + (trx.type === 'kredit' ? -trx.amount : trx.amount)
            }, 0)
        }
    })
}

function fiterSaldoRendah(saldoAkhir) {
    return saldoAkhir.filter(p => {
        return p.saldo_akhir < 100_000
    })
}

function totalDebitSemuaPelanggan(pelanggan) {
    return pelanggan.reduce((total, p) => {
        // return total + p.riwayatTransaksi.filter((r) => r.type === 'debit')[0].amount

        // return total + p.riwayatTransaksi.reduce((tot, x) => {
        //     return tot + (x.type === 'debit' ? x.amount : 0)
        // }, 0)

        return total + p.riwayatTransaksi
                            .filter(f_pelanggan => f_pelanggan.type === 'debit')
                            .reduce((tot, x) => { return tot + x.amount }, 0)
    }, 0)
}

console.table(hitungSaldoAkhir(pelanggan))
console.table(fiterSaldoRendah(hitungSaldoAkhir(pelanggan)))
console.log(totalDebitSemuaPelanggan(pelanggan))