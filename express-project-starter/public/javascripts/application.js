window.addEventListener("load", (event) => {
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
      editButton.addEventListener('click', e => {
        const editTaskForm = document.getElementById('editTaskForm')
        const inputField = document.getElementById('taskRenameInputField');
        const submitButton = document.createElement('button');
        const cancelButton = document.createElement('button');


        inputField.setAttribute('type', '');
        editTaskForm.setAttribute('type', '');
        submitButton.innerText = 'Submit';
        cancelButton.innerText = 'cancel';
        const secondDiv = document.createElement('div');
        const firstDiv = document.createElement('div');
        firstDiv.appendChild(inputField);
        secondDiv.appendChild(submitButton);
        secondDiv.appendChild(cancelButton);
        editTaskForm.appendChild(firstDiv);
        editTaskForm.appendChild(secondDiv);


        // ! submit rename button  //Current Work Space
        submitButton.addEventListener('click', e => {
          inputField.setAttribute('type', '');
          editTaskForm.setAttribute('type', 'hidden');

        })

        cancelButton.addEventListener
      })
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
      task.placeholder = "A Task is Required";
    }
  })

  //!-------------------------------------------------------------------------------
  //* List Functionality
  const listLists = document.getElementById('listLists');
  const addListButton = document.getElementById('addListBtn');

  addListButton.addEventListener('click', e => {
    e.preventDefault();
    const inputField = document.getElementById('addListInput');

    inputField.type = "";


    // addListButton




    // const blah = document.createElement('option')
    // listLists.appendChild(blah);
  })







}); //? End of application.js