import React from 'react'
import PropTypes from 'prop-types'
import * as IconList from '../../icons'
import { Icon as MuiIcon, makeStyles } from '@material-ui/core'

const ICON_SET = {
  KAI: 'kai',
  MATERIAL: 'material'
}

const useStyles = makeStyles(theme => ({
  root: {
    verticalAlign: 'middle'
  }
}))
const CustomIcon = ({ name, alt, ...props }) => {
  const classes = useStyles();
  return (
    <img src={IconList[name]} className={classes.root} alt={alt || ""} {...props} />
  )
}

const Icon = ({ set, ...props }) => {
  if (set === ICON_SET.MATERIAL) {
    const { name, ...mdProps } = { ...props }
    return <MuiIcon {...mdProps}>{name}</MuiIcon>
  } else {
    return <CustomIcon {...props} />
  }
}
Icon.propTypes = {
  set: PropTypes.oneOf(Object.values(ICON_SET)).isRequired,
  name: PropTypes.string.isRequired
}
Icon.defaultProps = {
  set: ICON_SET.KAI
}

export default Icon
