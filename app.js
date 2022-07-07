window.addEventListener("load", () => {
    const form = document.querySelector("#new-task-form")
    const input = document.querySelector("#new-task-input")
    const list_el = document.querySelector("#tasks")
    const del_all = document.querySelector("#deleteAll")

    del_all.addEventListener("click",function(item) {
        if(item.target.tagName="button") {
            list_el.style.display="none"
        }
    })

    // list_el.addEventListener("click",function(item){
    //     if(item.target.tagName="input"){
    //         item.target.classList.toggle("checked")
    //     }
    // })
    

    form.addEventListener("submit",(e) => {
        e.preventDefault()

        const task = input.value;

        if(!task) {
            alert("Please fill out the task")
            return;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");

        const dates = document.createElement("div");
        dates.classList.add("date");
        dates.style.display="none"

        const dates_content = document.createElement("div");
        dates_content.classList.add("date-content");

        dates.appendChild(dates_content);

        task_el.appendChild(task_content_el)

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly","readonly");
        task_content_el.appendChild(task_input_el);

        const date_input = document.createElement("input");
        date_input.classList.add("text");
        date_input.type = "text";
        date_input.value = "asd";
        date_input.setAttribute("readonly","readonly");
        dates_content.appendChild(date_input);

        const date_action = document.createElement("div");
        date_action.classList.add("actions1");


        const task_action_el = document.createElement("div");
        task_action_el.classList.add("actions");

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Edit";

        const date_edit = document.createElement("button");
        date_edit.classList.add("edit2");
        date_edit.innerHTML = "Edit";

        date_action.appendChild(date_edit)
        dates.appendChild(date_action);

        const task_date = document.createElement("button");
        task_date.classList.add("dates");
        task_date.innerHTML = "Dates";

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML ="Delete";

        task_action_el.appendChild(task_edit_el);
        task_action_el.appendChild(task_delete_el);
        task_action_el.appendChild(task_date);
        task_el.appendChild(task_action_el);

        list_el.appendChild(task_el)
        list_el.appendChild(dates)

        input.value="";

        task_date.addEventListener("click", (item) => {
            dates.style.display = ""
        })

        // dates.addEventListener("click", (item) => {
        //     if(item.target.tagName="div") {
        //         dates.style.display="none"
        //     }
        // })

        task_edit_el.addEventListener("click", () => {
            if(task_edit_el.innerHTML.toLowerCase() == "edit") {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerHTML="Save";
            }else {
                task_input_el.setAttribute("readonly","readonly");
                task_edit_el.innerHTML = "Edit";
            }
        })

            task_delete_el.addEventListener("click", () => {
                list_el.removeChild(task_el);   
            })
    });

        date_edit.addEventListener("click",() => {
            if(date_edit.innerHTML.toLowerCase()=="edit") {
                console.log("date_edit e tıkalndı")
                date_input.removeAttribute("readonly");
                dates_input.focus();
                date_edit.innerHTML="Ended";
            } else {
                date_input.setAttribute("readonly","readonly");
                date_edit.innerHTML="Edit"
            }
        })

});