import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilterLinks from "./components/FilterLinks";
import VisibleTodosList from "./containers/VisibleTodosList";
import AddTodo from "./components/AddTodo/";

class App extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <hr />
        <FilterLinks />
        <hr />
        <VisibleTodosList />
      </div>
    );
  }
}

export default App;
