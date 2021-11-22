let userLetter=prompt("Write the letter:")
function checkUserNameLetters(userLetter){
    users.filter(function(user){
        if(user.name.includes(userLetter)){
         console.log(`Hi ${user.name}`)
        }
    })
}
checkUserNameLetters(userLetter)

let intervalID=setInterval(function(){
   return checkUserNameLetters(userLetter),2000
})
clearInterval(intervalID)
let userId=Number(prompt("Write a user id:"))
function checkUserIncompletedToDo(userId){
    todos.filter(function(todo){
        if(todo.userId===userId &&todo.completed===false){
            console.log(`${todo.title}`)
        }
    })
}
checkUserIncompletedToDo(userId)