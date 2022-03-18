window.addEventListener("load", (event) => {
  console.log("hello from login ===> javascript!")

  const loginButton = document.getElementById("login")
  signUpButton.addEventListener("click", e => {
    window.location.href = "/login"
  })

  const signUpButton = document.getElementById("signUpBtn")
  signUpButton.addEventListener("click", e => {
    window.location.href = "/signup"
  })

  const demoUser = document.getElementById("demoBtn")
  demoUser.addEventListener("click", e => {
    window.location.href = "/demo"
  })


})
