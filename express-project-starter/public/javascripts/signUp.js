window.addEventListener("load", (event) => {
  console.log("hello from signUp ===> javascript!")


  const loginButton = document.getElementById("loginBtn")
  loginButton.addEventListener("click", e => {
    window.location.href = "/login"
  })
  const demoUser = document.getElementById("demoBtn")
  demoUser.addEventListener("click", e => {
    window.location.href = "/application"
  })
})