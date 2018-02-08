import React, { Component } from 'react'
import { addTodo } from "./../../actions";
import { connect } from "react-redux";
import './index.css';

class AddTodo extends Component {
  render() {
    const { onSubmit } = this.props;
    let input;
    return (
      <div>
        <input
          className="input input--text"
          type="text"
          ref={node => input = node}
          onKeyDown={e => {
            const todo = input.value.trim();
            if (!todo || e.keyCode !== 13) return;
            onSubmit(todo);
            input.value = '';
          }}/>
        <button
          type="submit"
          className="button button--submit"
          onClick={() => {
            const todo = input.value.trim();
            if (!todo) return;
            onSubmit(todo);
            input.value = '';
          }}>Add</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: text => dispatch(addTodo({ text }))
})

const ContainerAddTodo = connect(
  null,
  mapDispatchToProps
)(AddTodo)

export default ContainerAddTodo
