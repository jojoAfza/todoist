const inputbox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");

function addTask(){
    if(inputbox.value===''){
        alert("you must write something");
        }
    else
    {
        let li = document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);


        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }

    inputbox.value='';
    saveData();

}


listcontainer.addEventListener("click", function(e)
{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }

    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }

});


const listContainer = document.getElementById("listContainer");

function saveData()
{
    localStorage.setItem("data", listContainer.innerHTML); 
}

function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data" || "");
    addEventListenersToTask();
}

function addEventListenersToTasks() {
    listContainer.addEventListener("click", function (e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData(); // Save after toggling
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData(); // Save after removing
        }
    });
}


showTask();
