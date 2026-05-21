function pesan(paket, biaya, durasi){

let user = JSON.parse(localStorage.getItem("userLogin"))

if(!user){
    alert("Harap login terlebih dahulu.")
    window.location.href="../index.html"
    return
}

let data = JSON.parse(localStorage.getItem("pesanan")) || []

let qty = prompt(
`Pesanan: ${paket}\nHarga: Rp ${biaya}\nDurasi: ${durasi}\n\nMasukkan jumlah orang:`
)

if(qty === null) return
    qty = parseInt(qty)

if(isNaN(qty) || qty <= 0){
    alert("Qty tidak valid")
    return
}

let hasil =
    alert(
    `Pesanan Berhasil!\n\nPaket: ${paket}\nHarga: Rp ${biaya}\nQty: ${qty}\nDurasi Perjalanan: ${durasi}`
)

data.push({
    paket:paket,
    biaya:biaya,
    durasi:durasi,
    qty:qty
})

localStorage.setItem("pesanan", JSON.stringify(data))

window.location.href="riwayat.html"

}