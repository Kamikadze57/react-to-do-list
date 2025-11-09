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
    text: "",
    filter: "",
  };
  Change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  FilterChange = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };
  AddTodo = () => {
    if (!this.state.text.trim()) {
      console.log("Пусто((");
      return; 
  }
    const LastId = this.state.todos.reduce((max, todos) => Math.max(max, Number(todos.id)), 0);
    const newId = (LastId + 1).toString();

    const newTodo = {
      id: newId,
      text: this.state.text,
      completed: this.state.completed,
    };

    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
      text: "",
      completed: false,
    }));
  };

  getFilteredTodo = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = (filter || "").toLowerCase();
    return todos.filter((todo) => todo.text.toLowerCase().includes(normalizedFilter));
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
        <ToDoCreate text={this.state.text} onChange={this.Change} onAdd={this.AddTodo} />
        <Filter filterValue={this.state.filter} onFilterChange={this.FilterChange} />
        <ToDoList todos={this.getFilteredTodo()} onToggle={this.toggleTodo} onDelete={this.deleteTodo} />
      </div>
    );
  }
}
export default App;
