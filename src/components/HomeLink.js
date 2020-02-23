import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { makeStyles, createStyles, Typography, Grid, Box } from '@material-ui/core';
import Button from './core/Button'
import Icon from './core/Icon';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    width: '100%',
    border: `2px solid ${theme.palette.secondary.light}`,
    borderRadius: 4,
    height: 150,
  },
  label: {
    textAlign: 'center',
    color: theme.palette.secondary.main
  },
  icon: {
    fontSize: 50,
    color: theme.palette.secondary.main
  }
}));

const HomeLink = ({ to, title, icon, ...props }) => {
  const classes = useStyles()
  const Icon = icon
  return (
    <Button to={to} className={classes.root} classes={{ label: classes.label }}>
      <Grid container justify="center" spacing={1}>
        <Grid item xs={12}>
          <Icon className={classes.icon} />
        </Grid>
        <Grid item xs={12}>
          {title}
        </Grid>
      </Grid>
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
