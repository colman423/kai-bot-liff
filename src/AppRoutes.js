import React, { lazy, Fragment, Suspense } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import LoaderCentered from './components/LoaderCentered';

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

const MineSweeper = lazy(() => retry(() => import('./containers/MineSweeper')))
const Sudoku = lazy(() => retry(() => import('./containers/Sudoku')))


function AppRoutes() {
  return (
    <Fragment>
      <HashRouter basename='/'>

        <div>
          <ul>
            <li><Link to="/mine-sweeper">MineSweeper</Link></li>
            <li><Link to="/sudoku">Sudoku</Link></li>
          </ul>
          <hr />
        </div>

        <Suspense fallback={<LoaderCentered />}>
          <Route exact path="/mine-sweeper" component={MineSweeper} />
          <Route exact path="/sudoku" component={Sudoku} />
        </Suspense>

      </HashRouter>
    </Fragment>
  );
}

export default AppRoutes;
