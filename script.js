const input = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(input === ''){
        alert("Write Something")
    }else{
        const li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = '';
    storage();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        storage();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        storage();
    }
}, false);

function storage(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showstorage(){
listContainer.innerHTML = localStorage.getItem("data");
}
showstorage();

