import React, { Component } from 'react'
import FilterLink from "./../containers/FilterLink/";

class FilterLinks extends Component {
  render() {
    return (
      <div>
        { ['all', 'completed', 'active']
            .map(filter => (
              <FilterLink
                key={filter}
                filter={filter}>{filter.charAt(0).toUpperCase() + filter.slice(1)}</FilterLink>
              ))
        }
      </div>
    )
  }
}

export default FilterLinks
