import { Component } from "react";

class Info extends Component {
  render() {
    const { allTasks, compTasks } = this.props;
    return (
      <div className="info__box">
        <p className="text">Всього завдань: {allTasks}</p>
        <p className="text">Виконано завдань: {compTasks}</p>
      </div>
    );
  }
}
export default Info;
