let todos = [];
let save=document.querySelector(".btnsave")
let Name=document.querySelector("#name")
let description=document.querySelector("#description");
let addtodo=document.querySelector(".btn-todo")
let pop=document.querySelector(".pop")
let dnone=document.querySelector(".d-none")
let reg=document.querySelector(".reg")
let Priority=document.querySelector("#Priority")
let blogs=document.querySelector(".inner-hp")
let cancel=document.querySelector(".btncancel")
let success=document.querySelector("#success")
// console.log(save);
// console.log(Name.value);
// console.log(description);
// console.log(addtodo);
// console.log(pop);
// console.log(dnone)
console.log(blogs)
addtodo.addEventListener("click",()=>
{
    
    reg.classList.remove("d-none");
});
cancel.addEventListener("click",()=>

{
    reg.classList.add("d-none");
})
// save.addEventListener("click",()=>
// {
//     reg.classList.add("d-none");
//     const nameValue = Name.value.trim();
//     const descriptionvalue = description.value.trim();
//   if (nameValue === " ") {
//       showToast("Please enter your username");
//     } else if (descriptionvalue === " ") {
//       showToast("Please enter your password");
//     } else {
//       showToast("To do List Successfully feeded !")
//     }
  
  
//   function showToast(message) {
//     Toastify({
//       text: message,
//       duration: 3000, // Duration in milliseconds
//       close: true,
//       gravity: "top", // Other gravity options: "bottom", "top-left", "top-right", "bottom-left", "bottom-right"
//       position: "center", // Other position options: "left", "center", "right"
//       backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
//       stopOnFocus: true, // Prevents dismissing when the user interacts with the page
//     }).showToast();
//   }
    
//     let detail=
//     {
//         name:Name.value,
//         Description:description.value,
//         priority:Priority.value,

//     }
 
//     localStorage.setItem("users", JSON.stringify(detail));
//     let list=localStorage.getItem(detail);
//     console.log(list)
   
// })
save.addEventListener("click", () => {
  // reg.classList.add("d-none");
  const nameValue = Name.value.trim();
    const descriptionvalue = description.value.trim();
  if (nameValue === "" || descriptionvalue === "") {
    // Display pop-up for empty fields
    showToast("Enter the value of the value of Name and descrription ");
} else {
  reg.classList.add("d-none");
    showToast("To do List Successfully fed!");
}
  
  function showToast(message) {
    Toastify({
      text: message,
      duration: 3000, 
      close: true,
      gravity: "top", 
      position: "center", 
      backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
      stopOnFocus: true,
    }).showToast();
  }
  let user = {
    name: Name.value,
    Description: description.value,
    priority: Priority.value,
};
      todos.push(user);   //created a function of array push that insert data 

      localStorage.setItem("users", JSON.stringify(todos));

      displayTodos(); 
  }
)
function displayTodos() {
  const todos = JSON.parse(localStorage.getItem("users"));

  if (Array.isArray(todos)) {
      const todoPage = document.querySelector(".todo-page");

      // Clear existing todos
      todoPage.innerHTML = '';

      todos.forEach(user => {
          const todoDiv = document.createElement("div");
          todoDiv.classList.add("inner-hp");

          todoDiv.innerHTML = `
              <h2 class="inner-heading">${user.name}</h2>
              <p class="inner-para">${user.Description}</p>
          `;

          todoPage.appendChild(todoDiv);
      });
  } else {
      console.error("Error: Todos is not an array.", todos);
  }
}

function deleteBlog(index) {
  let usertodo = localStorage.getItem("users");
  usertodo = JSON.parse(usertodo);

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      usertodo.splice(index, 1);
      localStorage.setItem("usertodo", JSON.stringify(users));
    
      Swal.fire({
        icon: "success",
        title: "Blog deleted successfully!",
      });
    }
  });
}
  