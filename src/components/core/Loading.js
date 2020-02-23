import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Box } from '@material-ui/core';

function Loading({size}) {
  return (
    <Box textAlign="center" p={3}>
      <CircularProgress size={size || 50}/>
    </Box>

  )
}

export default Loading
