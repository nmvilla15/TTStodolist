let addItemButton = document.querySelector("#addItem");
let toDoContainer = document.querySelector("#toDoContainer");
let inputField = document.querySelector("#inputField");

//to add item
addItemButton.addEventListener("click", function(){
    let toDoItem = document.createElement("li");
    toDoItem.innerText = inputField.value;
    toDoContainer.appendChild(toDoItem);
    inputField.value = ""; 

//to remove item
// toDoItem.addEventListener("click", function () {
//   toDoContainer.removeChild(toDoItem);
// //     });
// need to figure out how to add interval and text decoration 

  });

  document.addEventListener('click', (event) => {
    if (
      event.target.nodeName === 'LI' 
    ) {
      setInterval(() => {
        event.target.remove();
      }, 1000);
      event.target.style.textDecoration = 'line-through';
    } else {
      console.log('No item clicked');
  }});