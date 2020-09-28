import React from 'react'
import 'devicon'

const Devicon = (props) => {
  let style = {
    fontSize: '5rem'
  }

  if (props.style) {
    style = props.style 
  }
  if (props.color) {
    style.color = props.color 
  }
  if (props.size) {
    style.fontSize = props.size 
  }

  let format = `devicon-${props.name}-${props.logoStyle}`

  /* Wordmark Boolean */
  if (props.wordmark) {
    format += '-wordmark' 
  }
  if (!style.color) {
    format += ' colored' 
  }

  return (
    <div>
      <i className={`${format}`} style={style}></i>
    </div>
  )
}

export default Devicon