init()

function init(){

let user = JSON.parse(localStorage.getItem("userLogin"))

if(!user){
    alert("Harap login terlebih dahulu.")
    window.location.href="login.html"
    return
}

let data = JSON.parse(localStorage.getItem("pesanan")) || []
let tbody = document.getElementById("list")

let no = 1

data.forEach(function(item){

let tr = document.createElement("tr")

tr.innerHTML =
"<td>"+no+"</td>"+
"<td>"+item.paket+"</td>"+
"<td>"+item.biaya+"</td>"+
"<td>"+item.durasi+"</td>"+
"<td>"+item.qty+"</td>"

tbody.appendChild(tr)

})

}
