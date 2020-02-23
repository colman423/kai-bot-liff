import React from 'react'
// import PropTypes from 'prop-types'

// import CircularProgress from '@material-ui/core/CircularProgress'

// LoaderCentered.propTypes = {
//   noHeight: PropTypes.bool
// }

// LoaderCentered.defaultProps = {
//   noHeight: false
// }

function LoaderCentered (props) {
  return (
    <div style={{ height: props.noHeight ? 'auto' : '80vh', display: 'flex', justifyContent: 'center' }}>
      wait...
    </div>
  )
}

export default LoaderCentered
