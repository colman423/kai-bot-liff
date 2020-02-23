import React, { lazy, Suspense } from 'react';
import { HashRouter, Route } from "react-router-dom";
import Loading from '../components/core/Loading';
import Home from '../containers/Home'
import UserProfile from '../containers/UserProfile'
import About from '../containers/About'

// Helper function to retry lazy import when failed
// Will try 5 times with 1 sec delay between each attempt
function retry(fn, retriesLeft = 5, interval = 1000) {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            // reject('maximum retries exceeded');
            reject(error)
            return
          }

          // Passing on "reject" is the important part
          retry(fn, retriesLeft - 1, interval).then(resolve, reject)
        }, interval)
      })
  })
}






function AppRoutes() {
  return (
    <HashRouter basename='/'>
      {/* <Suspense fallback={<Loading />}> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/user-profile" component={UserProfile} />
        <Route exact path="/about" component={About} />
      {/* </Suspense> */}
    </HashRouter>
  );
}

export default AppRoutes;
