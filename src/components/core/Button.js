import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button as MuiBtn } from '@material-ui/core'

const Button = ({ onClick, to, isExternal, ...props }) => {
  if (to) {
    return (
      <MuiBtn
        component={(isExternal ? 'a' : Link)}
        href={isExternal && to}
        to={!isExternal && to}
        {...props}
      />
    )
  } else {
    return (
      <MuiBtn
        onClick={onClick}
        {...props}
      />
    )
  }
}
Button.propTypes = {
  onClick: (props, propName, componentName) => {
    if (props.to && props.onClick) {
      return new Error('Choose at most one of `to` and `onClick`')
    }
  },
  isExternal: (props, propName, componentName) => {
    if (!props.to && props.isExternal) {
      return new Error('`isExternal` only work in Link')
    }
  }
}

export default Button
