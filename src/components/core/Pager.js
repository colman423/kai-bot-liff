import React from 'react'
import ReactPaginate from "react-paginate";
import cx from 'classnames';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button as MuiBtn, makeStyles } from '@material-ui/core'
import Icon from './Icon';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'inline-block',
    paddingLeft: 0,
    margin: 0,
    '& li': {
      display: 'inline',
      marginLeft: 8,
      marginRight: 8,
      verticalAlign: 'top'
    },
    '& a': {
      cursor: 'pointer',
      '&:focus, &:hover': {
        outline: 'none',
        color: theme.palette.secondary.main
      }
    }
  },
  page: {
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 20,
    color: theme.palette.text.secondary
  },
  active: {
    color: theme.palette.secondary.main,
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
  },
}))

const Pager = ({ ...props }) => {
  const classes = useStyles()
  return (
    <ReactPaginate
      previousLabel={<Icon name="arrowBack" width={32} height={32} />}
      nextLabel={<Icon name="arrowFuther" width={32} height={32} />}
      breakLabel={<Icon name="more" width={32} height={32} />}
      pageCount={30}
      marginPagesDisplayed={1}
      pageRangeDisplayed={5}
      // onPageChange={this.handlePageClick}
      containerClassName={classes.container}
      pageClassName={classes.page}
      subContainerClassName={classes.subContainer}
      activeClassName={classes.active}
      {...props}
    />
  )
}
Pager.propTypes = {
  onPageChange: PropTypes.func.isRequired
}

export default Pager
