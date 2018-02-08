import React from 'react'
import './index.css'

export default ({
  text,
  completed,
  onClick
}) => (
  <li
    className={`Todo${completed ? ' Todo--completed' : ''}`}
    onClick={onClick}>{text}</li>
)
