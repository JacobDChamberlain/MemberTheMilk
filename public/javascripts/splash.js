window.addEventListener("load", (event) => {
  console.log("Member The Milk")

  const loginButton = document.getElementById("loginBtn")
  loginButton.addEventListener("click", e => {
    window.location.href = "/login"
  })

  const signUpButton = document.getElementById("signUpBtn")
  signUpButton.addEventListener("click", e => {
    window.location.href = "/signup"
  })



})