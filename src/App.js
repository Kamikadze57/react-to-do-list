import "./App.css";
import { Component } from "react";
// import initialTodos from "./Data/todo.json";
import Info from "./Components/Info/Info";
import ToDoCreate from "./Components/ToDoCreate/ToDoCreate";
import Filter from "./Components/Filter/Filter";
import ToDoList from "./Components/ToDoList/ToDoList";

class App extends Component {
  state = {
    todos: [
      { id: "1", text: "Вивчити основи React", completed: true },
      { id: "2", text: "Розібратися з React Router", completed: false },
      { id: "3", text: "Пережити Redux", completed: false },
    ],
    filter: "",
  };
  filterTodos = (filterValue) => {
    this.setState({ filter: filterValue });
  };
  formChange = (value) => {
    this.filterTodos(value);
  };
  toggleTodo = (id) => {
    this.setState(({ todos }) => {
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return {
        todos: newTodos,
      };
    });
  };
  deleteTodo = (id) => {
    this.setState(({ todos }) => ({
      todos: todos.filter((todo) => todo.id !== id),
    }));
  };
  render() {
    console.log(this.state.todos);
    return (
      <div className="app">
        <h1 className="title">Список справ</h1>
        <Info allTasks={this.state.todos.length} compTasks={this.state.todos.filter((todo) => todo.completed).length} />
        <ToDoCreate />
        <Filter onChange={this.formChange} />
        <ToDoList todos={this.state.todos} onToggle={this.toggleTodo} onDelete={this.deleteTodo} />
      </div>
    );
  }
}
export default App;
