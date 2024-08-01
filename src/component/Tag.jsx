/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Tag.css';

export const Tag = ({tagName, selectTag, selected}) => {

  const tagStyle = {
    HTML: {backgroundColor: "#fda821"},
    CSS: {backgroundColor: "#15d4c8"},
    JavaScripts: {backgroundColor: "#ffd12c"},
    React: {backgroundColor: "#4cdafc"},
    Default: {backgroundColor: "#f9f9f9"}
  }
  return (
    // eslint-disable-next-line react/prop-types
    <button style={selected ? tagStyle.Default : tagStyle[tagName]} type='button' className='tag' onClick={() => selectTag(tagName)}>{tagName}</button>
  )
}
