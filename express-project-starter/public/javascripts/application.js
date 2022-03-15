window.addEventListener("load", (event)=>{
  console.log("hello from application ===> javascript")

  //* Add Task Functionality
  const logoutUser = document.getElementById("logoutBtn")

  logoutUser.addEventListener("click", e => {
    window.location.href = "/application/logout";
  });

  const addTaskButton = document.getElementById('addTaskBtn');
  addTaskButton.addEventListener('click', e => {
    //start with the div
    e.preventDefault();
    //append elements onto the div to make adding dynamic
    //Checkbox,  Edit Button, Trash Button
    const task = document.getElementById('addTaskInput');

    if (task.value) {
      const currTaskRow = document.createElement('li');
      const taskDisplay = document.querySelector('#taskDisplay');
      
      const checkbox = document.createElement('checkbox');
      checkbox.style.border = '3px'; //TODO FIX ME

      const editButton = document.createElement('button')
      const trashButton = document.createElement('button');
      trashButton.addEventListener('click', e => {
        currTaskRow.remove();
      })

      currTaskRow.appendChild(checkbox);
      currTaskRow.innerText = task.value;
      currTaskRow.appendChild(editButton).innerHTML = "Edit";
      currTaskRow.appendChild(trashButton).innerText = "Trash";
      taskDisplay.appendChild(currTaskRow);
      
      //* Top Line Spacer


      //* Bottom Line Spacer
      const line = document.createElement('div');
      line.style.padding = '4px';
      line.style.borderBottom = '1px solid black';
      currTaskRow.style.padding = '4px';
      currTaskRow.appendChild(line);


      task.value = "";
    } else {
      addTaskInput.placeholder = "A Task is Required";
    }
  })

  //!-------------------------------------------------------------------------------
  //* List Functionality
  const listLists = document.getElementById('listLists');
  const addListButton = document.getElementById('addListBtn');

  addListButton.addEventListener('click', e => {
    e.preventDefault();
    
    createElement
  })







}); //? End of application.js