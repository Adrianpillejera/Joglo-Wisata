function login(event){

event.preventDefault()

let username = document.getElementById("username").value.trim()
let password = document.getElementById("password").value.trim()

if(username === "" || password === ""){
alert("Username dan password harus diisi")
return
}

let akun = JSON.parse(localStorage.getItem("akun")) || []

let user = akun.find(function(u){
return u.username === username && u.password === password
})

if(!user){
alert("Username atau password salah")
return
} 

alert("Login berhasil")

localStorage.setItem("userLogin", JSON.stringify(user))

window.location.href="user.html"

}