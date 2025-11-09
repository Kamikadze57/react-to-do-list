import { Component } from "react";

class ToDoList extends Component {
  render() {
    const { todos, onToggle, onDelete } = this.props;
    return (
      <ul className="todo_list">
        {todos.map(({ id, text, completed }) => (
          <li key={id} className="todo_item">
            <input type="checkbox" className="check" checked={completed} onChange={() => onToggle(id)} />
            <p className={completed ? "completed" : ""}>{text}</p>
            <button onClick={() => onDelete(id)}>Видалити</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ToDoList;
