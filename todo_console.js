let option = prompt("press any key to start");
let todos=[]
while (option !== "quit") {
    option = prompt("Choose an option('new','list','delete','quit')");
    option = option.toLowerCase();
    if (option === 'new') {
        let index = parseInt(prompt("Enter the index(starts from 0) where you want to insert a new todo"));
        if(isNaN(index)) {
            alert("Invalid input. Please enter a numeric index, try again.");
        } else if(index < 0){
            alert("Invalid input. Cannot accept negetive index, try again.");
        } else if (index > todos.length+1) {
            alert("index too large, try again.");
        } else {
            let todo = prompt("Enter the todo");
            todos.splice(index, 0, todo);
            console.log("Todo inserted successfully");
            console.log("Updated todos:", todos);
        }
    }
    else if (option === 'list') {
        if (todos.length === 0) {
            console.log('No todos to show');
        } else {
            for (let i = 0; i < todos.length;i++) {
                console.log(i + " : " + todos[i]);
            }
        } 
    }
    else if (option === 'delete') {
        let index = parseInt(prompt("Enter the index(starts from 0) of the item that you want to delete"));
        if (isNaN(index)) {
            alert("Invalid input. Please enter a numeric index, try again.");
        } else if (index < 0) {
            alert("Invalid input. Cannot accept negetive index, try again.");
        } else if (index > todos.length + 1) {
            alert("index too large, try again.");
        } else {
            todos.splice(index, 1);
            console.log("Todo deleted successfully");
            console.log("Updated todos:", todos);
        }
    }
}
console.log("Succesfully quitted!");