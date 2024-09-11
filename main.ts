const inputBox = document.getElementById("input-box") as HTMLInputElement;
const dateInput = document.getElementById("input-date") as HTMLInputElement;
const listContainer = document.getElementById("list-container")!;
const completedCounter = document.getElementById("completed-counter")!;
const uncompletedCounter = document.getElementById("uncompleted-counter")!;

function addTask() {
  const task = inputBox.value.trim();
  console.log(task);

  const date = dateInput.value

  if (!task || !date) {
    alert("Please complete all fields: task name and date");
    return;
  }

  const displayedDate = new Date(date)
    .toDateString().split(" ").slice(1).join(" ")
  
    console.log(displayedDate)

  const li = document.createElement("li");
  li.innerHTML = /* html */ `
    <label>
      <input type="checkbox">
      <span class="text">
        ${task} <br />
        ${displayedDate}
      </span>
      
    </label>
    <span class="edit-btn">Edit</span>
    <span class="delete-btn">Delete</span>
    `;

  listContainer.appendChild(li);

  inputBox.value = " ";

  const checkbox = li.querySelector("input")!;
  const editBtn = li.querySelector(".edit-btn")!;
  const taskSpan = li.querySelector("span")!;
  const deleteBtn = li.querySelector(".delete-btn")!;

  checkbox.addEventListener("click", function () {
    li.classList.toggle("completed", checkbox.checked);
  });

  editBtn.addEventListener("click", function () {



    const update = prompt("Edit task:", taskSpan.textContent || "");
    if (update !== null) {
      taskSpan.textContent = update;
      li.classList.remove("completed");
    }
  });

  deleteBtn.addEventListener("click", function () {
    {
      li.remove();
    }
  });
}

inputBox.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});