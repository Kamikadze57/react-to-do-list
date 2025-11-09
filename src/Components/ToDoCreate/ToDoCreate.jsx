import { Component } from "react";

class ToDoCreate extends Component {
  render() {
    const { text, onChange, onAdd } = this.props;
    return (
      <div className="create__form">
        <input className="create__input" placeholder="Нове завдання" value={text} name="text" onChange={onChange} />
        <button className="create_button" onClick={onAdd}>
          Додати
        </button>
      </div>
    );
  }
}

export default ToDoCreate;
