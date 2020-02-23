import React, { Fragment, useEffect, useState } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import { getVersion } from '../utils/common'
import { makeStyles, createStyles, Grid, Typography, Avatar, Box } from '@material-ui/core';
import HomeLink from '../components/HomeLink'
import liff from '../liff'
import Loading from '../components/core/Loading';
import { isEmptyStatement } from '@babel/types';
import { isEmpty } from 'lodash'

const useStyles = makeStyles((theme) => createStyles({
  avatar: {
    width: '50vw',
    height: '50vw'
  }
}));


function UserProfile() {
  const classes = useStyles()

  const [profile, setProfile] = useState({
    // userId: "Ua5f0e85ae8962d54fa554f58f3a9f8be",
    // displayName: "愷",
    // pictureUrl: "https://profile.line-scdn.net/0hEbRdyXPdGk1vHTJk-7llGlNYFCAYMxwFF3NQeRodQnxGeg0TBH9VKkgbRipBLw9LBH0Ff0JOFnRB"
  })

  useEffect(() => {
    liff.getProfile()
      .then(profile => {
        console.log("profile", profile)
        setProfile(profile)
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, [])

  console.log("UserProfile func", profile)
  return (
    <Fragment>
      {!isEmpty(profile) ?
        (
          <Box align="center">
            <Typography variant="h2" align="center">你是</Typography>
            <br />
            <br />
            <Avatar alt="顯示不出你的頭貼QQ" src={profile.pictureUrl} className={classes.avatar} />
            <br />
            <Typography variant="h3" align="center">{profile.displayName}</Typography>

          </Box>
        ) : (
          <Loading />
        )
      }
    </Fragment>
  );
}

export default UserProfile;
