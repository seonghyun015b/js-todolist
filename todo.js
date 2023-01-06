const todoAdd = document.querySelector('.fa-plus');
const todoList = document.querySelector('.todo-list');
const todoInput = document.querySelector('.todo-content');
const todoDel = document.querySelector('.fa-trash');
const todoRequest = document.querySelector('.todo-request');
const clearAll = document.querySelector('.clear');
const delAll = document.querySelector('.alldelete');

function addTodo() {
  if (todoInput.value !== '') {
    const newTag = document.createElement('div');
    newTag.setAttribute('class', 'todo-request');

    const newCheck = document.createElement('div');
    newCheck.innerHTML = `<i class="fa-solid fa-check"></i>`;

    const newContent = document.createElement('h4');
    newContent.setAttribute('class', 'todo-text');
    newContent.innerText = todoInput.value;

    const newDel = document.createElement('div');
    newDel.innerHTML = `<i class="fa-sharp fa-solid fa-trash"></i>`;

    newTag.appendChild(newCheck);
    newTag.appendChild(newContent);
    newTag.appendChild(newDel);
    todoList.appendChild(newTag);

    let count = 1;
    newCheck.addEventListener('click', () => {
      count++;
      if (count % 2 === 0) {
        newContent.style.textDecoration = 'line-through';
        newContent.style.opacity = 0.5;
      } else if (count % 2 !== 0) {
        newContent.style.textDecoration = 'none';
        newContent.style.opacity = 1;
      }
    });

    let clearCount = 1;
    clearAll.addEventListener('click', () => {
      clearCount++;
      if (clearCount % 2 === 0) {
        newContent.style.textDecoration = 'line-through';
        newContent.style.opacity = 0.5;
      } else if (clearCount % 2 !== 0) {
        newContent.style.textDecoration = 'none';
        newContent.style.opacity = 1;
      }
    });

    delAll.addEventListener('click', () => {
      newTag.remove();
    });

    newDel.addEventListener('click', () => {
      newTag.remove();
    });

    todoInput.focus();
    todoInput.value = '';
  } else {
    todoInput.focus();
    todoInput.value = '';
  }
}

todoInput.addEventListener('keyup', (e) => {
  if (e.keyCode == 13) {
    addTodo();
  }
});

todoAdd.addEventListener('click', (e) => {
  addTodo();
});
