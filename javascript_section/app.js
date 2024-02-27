let listtodo = [];
let prompttd = prompt("input command");

while(prompttd != "quit"){
    

    //new command
    if(prompttd === "new"){
        listtodo.push(prompt("in put todo in here"));

        //list command
    }else if( prompttd === "list"){
        console.log("******");
        for(let i = 0; i<= listtodo.length -1 ;i++){
            
            console.log(`${i}: ${listtodo[i]} `);

        }
        console.log("*******");

        //delete command
    }else if( prompttd === "delete"){
        let indexdel = parseInt(prompt("input a index you want to delete"));
        console.log(`You delete ${listtodo[indexdel]} from your list`);
        listtodo.splice(indexdel, 1); // use splice to remove the item
    }








    prompttd = prompt("input command");
}
console.log("hi");
