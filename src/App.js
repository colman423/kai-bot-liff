import React from 'react';
import AppRoutes from './AppRoutes';
import { getVersion } from './utils/common'


function App() {
  return (
    <div>
      <AppRoutes>
      </AppRoutes>
      {getVersion()}
    </div>
  );
}

export default App;
