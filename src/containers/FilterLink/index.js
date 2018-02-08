import React from 'react'
import { connect } from "react-redux";
import { setVisibilityFilter } from "./../../actions";
import "./index.css";

const FilterLink = ({
  children,
  onClick,
  className,
  filter,
  active
}) => {
  const activeClass = active ? ' active' : '';
  return (
    <a
      className={`filter-link${
        className
        ? ` ${className}`
        : ''}${activeClass}`}
      href=""
      onClick={e => {
        e.preventDefault()
        onClick(filter)
      }}>{children}</a>
  )
}

const mapStateToProps = (state, ownProps) => ({
  active: state.visibilityFilter === ownProps.filter
})

const mapDispatchToProps = dispatch => ({
  onClick: filter => dispatch(setVisibilityFilter(filter))
})

const ContainerFilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink)

export default ContainerFilterLink
