import React from 'react'

const Placeholder = props => {
  return (<img onClick={props.onClick} src={`https://via.placeholder.com/${props.w}x${props.h}`} {...props} />)
}
export default Placeholder

