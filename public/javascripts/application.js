window.addEventListener("load", (event) => {
  console.log("hello from application ===> javascript")


  //* Add Task Functionality
  //Loggingout User
  // ! -------------------------------------------------------
  const logoutUser = document.getElementById("logoutBtn")

  logoutUser.addEventListener("click", e => {
    window.location.href = "/application/logout";
  });

  // !111111111!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //* Task Button CREATE AND ADD
  // const addTaskButton = document.getElementById('addTaskBtn');
  // //addTask Submit Button Event Listener
  // addTaskButton.addEventListener('click', e => {
  //   //start with the div
  //   e.preventDefault();
  //   //append elements onto the div to make adding dynamic
  //   //Checkbox,  Edit Button, Trash Button
  //   const task = document.getElementById('addTaskInput');
  //   const editTaskForm = document.getElementById('editTaskForm');

  //   //If 
  //   if (task.value) {
  //     const currTaskRow = document.createElement('li');
  //     const taskDisplay = document.querySelector('#taskDisplay');

  //     const checkbox = document.getElementById('checkbox');
  //     checkbox.style.border = '3px'; //TODO FIX ME

  //     const editButton = document.createElement('button')
  //     editButton.addEventListener('click', e => {

  //       editTaskForm.style.visibility = 'visible'
  //       const inputField = document.getElementById('taskRenameInputField');
  //       const submitButton = document.getElementById('cancelButton');
  //       const cancelButton = document.getElementById('submitButton');


  //       // inputField.setAttribute('type', '')
  //       //Submit Button
  //       submitButton.innerText = 'Submit';
  //       cancelButton.innerText = 'cancel';
  //       submitButton.addEventListener('click', e => {

  //         if (inputField.value) {
  //           editTaskForm.style.visibility = 'hidden';
  //           currTaskRow.appendChild(checkbox);
  //           currTaskRow.innerText = inputField.value;
  //           currTaskRow.appendChild(editButton).innerHTML = "Edit";
  //           currTaskRow.appendChild(trashButton).innerText = "Trash";
  //         } else {
  //           inputField.placeholder = 'Type an input to submit form'
  //         }

  //       })

  //       //Cancel Button
  //       cancelButton.addEventListener('click', e => {
  //         editTaskForm.style.visibility = 'hidden';
  //       })

  //     })
  //     const trashButton = document.createElement('button');
  //     trashButton.addEventListener('click', e => {
  //       editTaskForm.style.visibility = 'hidden';
  //       currTaskRow.remove();
  //     })

  //     currTaskRow.appendChild(checkbox);
  //     currTaskRow.innerText = task.value;
  //     currTaskRow.appendChild(editButton).innerHTML = "Edit";
  //     currTaskRow.appendChild(trashButton).innerText = "Trash";
  //     taskDisplay.appendChild(currTaskRow);

  //     //* Top Line Spacer


  //     //* Bottom Line Spacer
  //     const line = document.createElement('div');
  //     line.style.padding = '4px';
  //     line.style.borderBottom = '1px solid black';
  //     currTaskRow.style.padding = '4px';
  //     currTaskRow.appendChild(line);


  //     task.value = "";
  //   } else {
  //     task.placeholder = "A Task is Required";
  //   }
  // })

  // //!-------------------------------------------------------------------------------
  // //* List Functionality
  // const listLists = document.getElementById('listLists');
  // const addListButton = document.getElementById('addListBtn');

  // addListButton.addEventListener('click', e => {
  //   e.preventDefault();
  //   const inputField = document.getElementById('addListInput');

  //   inputField.type = "";
  // })







}); //? End of application.js