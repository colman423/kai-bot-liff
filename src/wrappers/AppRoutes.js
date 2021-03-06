import React, { lazy, Suspense, useMemo } from 'react';
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Loading from '../components/core/Loading';

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

const Home = lazy(() => retry(() => import('../containers/Home')))
const UserProfile = lazy(() => retry(() => import('../containers/UserProfile')))
const About = lazy(() => retry(() => import('../containers/About')))


function AppRoutes() {
  console.log("AppRoutes")
  return (
    <HashRouter basename='/'>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user-profile" component={UserProfile} />
          <Route exact path="/about" component={About} />
          <Redirect from="*" to="/" />
        </Switch>
      </Suspense>
    </HashRouter>
  );
}

export default AppRoutes;
