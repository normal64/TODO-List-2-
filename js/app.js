let inputForm = document.querySelector('#itemInput');
let gotAddButton = document.querySelector('.input-group-append');
let items = document.querySelector('.item-list')
//event on click
gotAddButton.addEventListener('click', doThisToDo);
 document.addEventListener('click', functionsTodo);

//variable for making id
let idNumberForTodoDiv = 0;

function doThisToDo(event) {
  event.preventDefault();
  let todoText =  inputForm.value;
let toDo = document.createElement("div");
//make id + increment
toDo.id = 'id' + idNumberForTodoDiv;
idNumberForTodoDiv++;
 let x = document.createElement("h5");
 x.innerHTML = todoText;
toDo.insertAdjacentElement('afterbegin', x );

//div with buttons
let buttonsDiv = document.createElement("div");
buttonsDiv.classList.add('buttonsDiv');
//delete button
let buttonDelete = document.createElement('a');
buttonDelete.href = '#';
buttonDelete.innerHTML = "&#x2715";
buttonDelete.classList.add('delete-item');
buttonsDiv.insertAdjacentElement('afterbegin', buttonDelete);
toDo.insertAdjacentElement('beforeend', buttonsDiv );

//edit button
let buttonEdit = document.createElement('a');
buttonEdit.href = '#';
buttonEdit.insertAdjacentHTML('afterbegin', '<img width = 13px src= "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png ">');
buttonEdit.classList.add('edit-item');
buttonsDiv.insertAdjacentElement('beforeend', buttonEdit);

//add button Done
let buttonDone = document.createElement('a');
buttonDone.href = '#';
 buttonDone.insertAdjacentHTML('afterbegin', '<img width = 13px src= "https://cdn4.iconfinder.com/data/icons/colicon/24/checkmark_done_complete-512.png">');
buttonDone.classList.add('complete-item');
buttonsDiv.insertAdjacentElement('beforeend', buttonDone);


toDo.classList.add('item');

items.append(toDo);
}
//delete toDo function
function functionsTodo(event) {
  let itDivId = event.target.parentNode.parentNode.parentNode.id;
  if ( event.target.classList == 'delete-item') {
    event.target.parentNode.parentNode.remove();
  }
  if ( event.target.parentNode.classList == 'complete-item') {
    console.log('complete');
     let hot = event.target.parentNode.parentNode.parentNode;
     let myTag = hot.querySelector("h5");
     myTag.classList.add('completed');
  }
  if ( event.target.parentNode.classList == 'edit-item') {
     let userChangeToDo =  window.prompt("WHat do u want" , "nafin");
     switch(userChangeToDo) {
        case '':
        window.alert('Enter a todo or get out');
        break;

        default:
          
          let searchById = document.querySelector( '#' + itDivId +'  ' );
          let currentTodoText = searchById.querySelector('h5');
          currentTodoText.innerHTML  = userChangeToDo;

     }



  }

}

// //add an eventListener to the from
// const form = document.querySelector('#itemForm'); // select form
// const itemInput = document.querySelector('#itemInput'); // select input box from form
// const itemList = document.querySelector('.item-list');
// const feedback = document.querySelector('.feedback');
// const clearButton = document.querySelector('#clear-list');

// let todoItems = [];

// const handleItem = function(itemName){

//     const items = itemList.querySelectorAll('.item');
 
//     items.forEach(function(item){
        
//         if(item.querySelector('.item-name').textContent === itemName){
//             //complete event listener
//             item.querySelector('.complete-item').addEventListener('click', function(){
//                 item.querySelector('.item-name').classList.toggle('completed');
//                 this.classList.toggle('visibility');
//             });
//             //edit event listener
//             item.querySelector('.edit-item').addEventListener('click', function(){
//                 itemInput.value = itemName;
//                 itemList.removeChild(item);

//                 todoItems = todoItems.filter(function(item){
//                     return item !== itemName;
//                 });
//             });
//             // delete event listener
//             item.querySelector('.delete-item').addEventListener('click', function(){
//                 debugger;
//                 itemList.removeChild(item);

//                 todoItems = todoItems.filter(function(item){
//                     return item !== itemName;
//                 });

//                 showFeedback('item delete', 'success');
//             })
//         }
//     })
// }

// const removeItem = function(item){
//     console.log(item);
//     const removeIndex = (todoItems.indexOf(item));
//     console.log(removeIndex);
//     todoItems.splice(removeIndex, 1);
// }

// const getList = function(todoItems){
//     itemList.innerHTML = '';

//         todoItems.forEach(function(item){
//             itemList.insertAdjacentHTML('beforeend', `<div class="item my-3"><h5 class="item-name text-capitalize">${item}</h5><div class="item-icons"><a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a><a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a><a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a></div></div>` );

//             handleItem(item);
//         });
// }

// const getLocalStorage = function(){

//     const todoStorage = localStorage.getItem('todoItems');
//     if (todoStorage === 'undefined' || todoStorage === null){
//         todoItems = [];
//     } else {
//         todoItems = JSON.parse(todoStorage);
//         getList(todoItems);
//     }
// }

// const setLocalStorage = function(todoItems){
//     localStorage.setItem('todoItems', JSON.stringify(todoItems));
// }

// // get local storage from page
// getLocalStorage();

// //add an item to the List, including to local storage
// form.addEventListener('submit', function(e){ 
//     e.preventDefault();
//     const itemName = itemInput.value;
    
//     if (itemName.length === 0){
//         feedback.innerHTML = 'Please Enter Valid Value';
//         feedback.classList.add('showItem', 'alert-danger');
//         setTimeout(
//             function(){
//                 feedback.classList.remove('showItem');
//                 }, 3000);
//     } else {
//         todoItems.push(itemName);
//         setLocalStorage(todoItems);
//         getList(todoItems);
//         //add event listeners to icons;
//         //handleItem(itemName);
//     }
    
//     itemInput.value = '';

//     });

//     //clear all items from the list
// clearButton.addEventListener('click', function(){
//     todoItems = [];
//     localStorage.clear();
//     getList(todoItems);
// })



  

