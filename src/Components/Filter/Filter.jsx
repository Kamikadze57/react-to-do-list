import { Component } from "react";

class Filter extends Component {
  render() {
    const { value } = this.props;
    return (
      <div className="filter__form">
        <p className="text">Фільтр по імені</p>
        <input className="filter__inp" type="text" value={value} />
      </div>
    );
  }
}

export default Filter;
