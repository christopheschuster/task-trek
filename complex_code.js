/* complex_code.js */

// This code demonstrates a complex implementation of a task management system using JavaScript.

// Define global variables
let tasks = [];
let taskID = 0;

// Define a Task class
class Task {
  constructor(title, description, priority) {
    this.id = ++taskID;
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.completed = false;
  }
  
  completeTask() {
    this.completed = true;
  }
  
  editTask(newTitle, newDescription, newPriority) {
    this.title = newTitle;
    this.description = newDescription;
    this.priority = newPriority;
  }
}

// Define the TaskManager class
class TaskManager {
  constructor() {
    this.tasks = [];
  }
  
  addTask(title, description, priority) {
    const task = new Task(title, description, priority);
    this.tasks.push(task);
  }
  
  deleteTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
  
  completeTask(id) {
    const task = this.tasks.find(task => task.id === id);
    
    if (task) {
      task.completeTask();
    }
  }
  
  editTask(id, newTitle, newDescription, newPriority) {
    const task = this.tasks.find(task => task.id === id);
    
    if (task) {
      task.editTask(newTitle, newDescription, newPriority);
    }
  }
  
  getTasks() {
    return this.tasks;
  }
}

// Instantiate a TaskManager
const taskManager = new TaskManager();

// Add tasks
taskManager.addTask('Implement login functionality', 'Add validation and error handling', 'High');
taskManager.addTask('Create user dashboard', 'Design and develop user interface', 'Medium');
taskManager.addTask('Integrate with external API', 'Retrieve data and update database', 'High');

// Complete tasks
taskManager.completeTask(1);
taskManager.completeTask(2);

// Edit task
taskManager.editTask(3, 'Integrate with payment gateway', 'Implement secure payment processing', 'High');

// Get tasks
const tasks = taskManager.getTasks();

// Output tasks
console.log('Tasks:');
tasks.forEach(task => {
  console.log(`- Task ${task.id}: ${task.title}`);
  console.log(`  Description: ${task.description}`);
  console.log(`  Priority: ${task.priority}`);
  console.log(`  Completed: ${task.completed}`);
});

// Output total number of tasks
console.log(`Total tasks: ${tasks.length}`);

// Output completed tasks
const completedTasks = tasks.filter(task => task.completed);
console.log(`Completed tasks: ${completedTasks.length}`);

// Output pending tasks
const pendingTasks = tasks.filter(task => !task.completed);
console.log(`Pending tasks: ${pendingTasks.length}`);

// Output the IDs of completed tasks
const completedTaskIDs = completedTasks.map(task => task.id);
console.log(`Completed task IDs: ${completedTaskIDs.join(', ')}`);

// Output the highest priority task
const highestPriorityTask = tasks.reduce((prev, current) => (prev.priority > current.priority) ? prev : current);
console.log(`Highest priority task: Task ${highestPriorityTask.id}`);

// ... continue with more complex code here ...
// Including additional classes, functions, error handling, etc.

// End of code