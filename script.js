const API_URL =
  "https://script.google.com/macros/s/AKfycbz7cUnK4efhfYEdvlYpaxWB4yxzCpTAaBCkbL0oEW17nP4FHeTglAbnU7Yo6jYvWsINDQ/exec";

async function login() {

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const response = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      action: "login",
      username: username,
      password: password
    })
  });

  const result = await response.json();

  if(result.status){

    localStorage.setItem("nama", result.nama);
    localStorage.setItem("role", result.role);

    if(result.role == "admin"){
      window.location.href = "dashboard-admin.html";
    }else{
      window.location.href = "dashboard-user.html";
    }

  }else{
    document.getElementById("message").innerHTML =
      "Username atau password salah";
  }

}