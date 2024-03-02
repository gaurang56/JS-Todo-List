let todoList=['take out the trash', 'collect eggs']
while (true){
  let userInput=prompt("Enter your choice")
  if (userInput=='quit'){
    break
  }
  else if(userInput=='new'){
    let newEntry=prompt("Enter the new todo")
    todoList.push(newEntry)
  }
  else if(userInput=='list'){
    console.log("**************")
    for(let i=0;i<todoList.length;i++){
      console.log(`${i}:${todoList[i]}`)
    }
    console.log("**************")
  }
  else if(userInput=='delete'){
    let removeEntry=prompt("Enter the todo number to be removed")
    todoList.splice(removeEntry,1)
    
  }
}