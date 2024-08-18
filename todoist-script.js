let ctr = 1;
let mainBtnEl = document.querySelector(".main-btn");

function delete_task(counter){
  console.log(ctr);
  mainBtnEl.setAttribute('class','enable');
  const elm = document.querySelector(".task-"+counter);
  elm.parentElement.removeChild(elm);
}

function completed(counter){
  const tickEl = document.querySelector('.Tick-'+counter);
  tickEl.innerHTML = "✔️";
  delete_task(counter);
  
}
function addOnPage(counter){
  console.log(ctr);
  const inputEl = document.querySelector('.new-input');
  const taskName = inputEl.value;
  const descEl = document.querySelector('.new-desc');
  const desc = descEl.value;
  delete_task(counter);

  const tasklistEl = document.querySelector('.task-list');
  const newTaskEl = document.createElement('div');
  newTaskEl.setAttribute('class', 'newTask task-'+ctr+'');
  newTaskEl.innerHTML = `
        <div class="newTask-header">
          <h3 class="newTask-name">
            <button class="Tick Tick-`+ctr+`" onclick = "completed(`+ctr+`)"></button>`+taskName+`
            
          </h3>

          <p class="newTask-desc">`+desc+`

          </p>
        </div>
        <div class="newTask-footer">
        <button class="delete-task" onclick = delete_task(`+ctr+`)>
          Delete
        </button>
      </div>
      </div>`
  tasklistEl.appendChild(newTaskEl);
  ctr++;
}


function addTask(){
  mainBtnEl.setAttribute('class','disable');
  const newDivEl = document.createElement("div");
  newDivEl.innerHTML = `<div class="task-box task-`+(ctr)+`">
  <div class = "task-header">
    <div class="task-name">
      <input class = "new-input" type="text" placeholder="Task name">
    </div>
      
    <div class="description">
      <textarea class = "new-desc" name="des" placeholder="Description"></textarea>
    </div>
    <div class = "hor-line">
    </div>
  </div>
  <div class="task-footer">
    <button class = "cancel" onclick = "delete_task(`+ctr+`)">Cancel</button>
    <button class = "place-task" onclick = "addOnPage(`+ctr+`)">Add Task</button>
  </div>
</div>`;


const mainEl = document.querySelector(".popuptask");
mainEl.appendChild(newDivEl);


}

