import { Component } from "react";

class Filter extends Component {
  render() {
    const { filterValue, onFilterChange } = this.props;
    return (
      <div className="filter__form">
        <p className="text">Фільтр по імені</p>
        <input className="filter__input" name="text" placeholder="Введіть фільтр" value={filterValue} onChange={onFilterChange} />
      </div>
    );
  }
}

export default Filter;
