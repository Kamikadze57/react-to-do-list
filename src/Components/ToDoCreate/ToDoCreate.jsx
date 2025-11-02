import { Component } from "react";

class ToDoCreate extends Component {
  render() {
    return (
      <div className="create__form">
        <input className="create__input" placeholder="Нове завдання" />
        <button className="button">Додати</button>
      </div>
    );
  }
}
export default ToDoCreate;
