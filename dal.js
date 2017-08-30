const data = require('./data.js');
var notCompleted = [];
var completed = [];

function getItems(){
  return data;
}
function filterCompleted(){
  let completed = data.filter(function(itm, idx, arr){
    return itm.completed =='true';
  })
  console.log(completed);
  return completed;
}

function filterNotCompleted(){
  let notCompleted = data.filter(function(itm, idx, arr){
    return itm.completed =='false';
  })
  console.log(notCompleted);
  return notCompleted;
}
function addTask(newTask){
  let taskNew = {id:(data.length + 1), task: newTask, completed: 'false'};
  data.push(taskNew)
  console.log('added new task', taskNew)
  return data;
}
function itemCompleted(itemId){
  for(let i = 0; i < data.length; i++){
    if(data[i].id == itemId){
      return data[i].completed = 'true'
    }
  }
}

function getItem(itemId){
  return data.find(function(itm,indx,arr){
    return itemId == data.id;
  })
}
module.exports = {
  getItems: getItems,
  filterNotCompleted: filterNotCompleted,
  filterCompleted: filterCompleted,
  addTask: addTask,
  itemCompleted: itemCompleted,
}
