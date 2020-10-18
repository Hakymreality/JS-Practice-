function taskUpdater(task,list) {
    list.push(task)
    return list
}
function urgentTask(task,list) {
    list.unshift(task)
    return list
}
function completeTask(list) {
    list.pop()
    return list
}
function completeUrgent(list) {
    list.shift()
    return list
}
let masterList = []

console.log(taskUpdater("cook", masterList))
console.log(taskUpdater("bath", masterList))
console.log(completeTask(masterList))
console.log(taskUpdater("stop playing Music", masterList))
console.log(urgentTask("Use the toilet", masterList))
console.log(completeUrgent(masterList))
console.log(completeTask(masterList))
console.log(completeTask(masterList))

let objectVar = {
    Belarus:"Minsk",
    Libya:'Tripoli'
}
console.log(Object.keys(objectVar) )
 if (typeof val1 === typeof val2) {
    return true
}