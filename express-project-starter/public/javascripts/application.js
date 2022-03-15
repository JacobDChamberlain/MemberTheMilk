window.addEventListener("load", (event)=>{
  console.log("hello from application ===> javascript")
  const logoutUser = document.getElementById("logoutBtn")
  logoutUser.addEventListener("click", e => {
    window.location.href = "/application/logout";
  });
})
