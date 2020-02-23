import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { makeStyles, createStyles } from '@material-ui/core';
import Button from './core/Button'

const useStyles = makeStyles((theme) => createStyles({
  root: {
    // backgroundColor: theme.color.red,
  },
}));

const HomeLink = ({ to, title, icon, ...props }) => {
  const classes = useStyles()
  return (
    <Button to={to} className={classes.root}>
      {title}
      {icon || "noIcon"}
    </Button>
  )

}
HomeLink.propTypes = {
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

export default HomeLink
