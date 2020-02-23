import React from 'react'
import PropTypes from 'prop-types'
import * as codingbarIconList from '../../design/icons'
import { Icon as MuiIcon, makeStyles } from '@material-ui/core'

const ICON_SET = {
  CODING_BAR: 'codingbar',
  MATERIAL: 'material'
}
const useStyles = makeStyles(theme => ({
  codingbarIcon: {
    verticalAlign: 'middle'
  }
}))
const CodingbarIcon = ({ name, ...props }) => {
  const classes = useStyles();
  return (
    <img src={codingbarIconList[name]} className={classes.codingbarIcon} {...props} />
  )
}

const Icon = ({ set, ...props }) => {
  if (set === ICON_SET.MATERIAL) {
    const { name, ...mdProps } = { ...props }
    return <MuiIcon {...mdProps}>{name}</MuiIcon>
  } else {
    return <CodingbarIcon {...props} />
  }
}

Icon.propTypes = {
  set: PropTypes.oneOf(Object.values(ICON_SET)).isRequired,
  name: PropTypes.string.isRequired
}

Icon.defaultProps = {
  set: ICON_SET.CODING_BAR
}

export default Icon
