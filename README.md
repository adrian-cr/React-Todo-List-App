# Project: To-Do List

This project is a simple and interactive task manager (to-do list) built using `React` components. This application, which allows users to add, update, save, and delete tasks, implements key `React` functionalities such as prop-sharing, state management, and side effects.

## Technologies Used
* `HTML`
* `CSS`
* `JavaScript`
* `React`

## React Components
The project uses three core React components:
### 1. `TodoApp`
Implements the main component for the application.

#### Features
* **State Management:**
  Uses React's `useState` to manage the list of tasks and the currently edited task.

* **Persistence:**
  Tasks are saved to and loaded from `localStorage`, so they persist across browser reloads.

* **Task Operations:**
  * **Add Task:** Add a new `Task` using the main `TaskInput` at the bottom.
  * **Edit Task:** Click the `Task` title to modify it inline. You can confirm the changes made by clicking on the ✅ symbol or cancel by clicking on the ❌ symbol.
  * **Delete Task:** Click on a `Task`'s ❌ icon to remove it from the list.
  * **Complete Task:** Click on a `Task`'s ✅ icon to mark it as `"completed"`.

### 2. `Task`
Displays an individual task item in the to-do list application.
#### Props
* `id`: The unique identifier for the task.
* `title`: The text/title of the task.
* `status`: The current status of the task (`"incomplete"` or `"completed"`).
* `onEdit`: Callback function to handle editing the task.
* `onDelete`: Callback function to handle deleting the task.
* `onComplete`: Callback function to mark the task as `"completed"`.

### 3. `TaskInput`
Renders an input field for adding or editing tasks in a todo list application.
#### Props
* `onSave`: Function called with the trimmed input value when the save button is clicked.
* `title`: The initial value for the input field (used when editing an existing task).
* `main`: Boolean indicating if this is the main input for adding new tasks (affects styling and placeholder).
* `onCancel`: Function called when the cancel button is clicked (only shown when not in main mode).
* `onClick`: Function called when the input is clicked (only for main `TaskInput`).



## Getting Started
1. **Clone the repository:**
```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager
```
2. **Install dependencies:**
```bash
npm install
```
3. **Start the development server:**
```bash
npm start
```
This will open the app at [http://localhost:3000](http://localhost:3000) in your browser.
