import React, { Suspense } from 'react';
import Appbar from './components/navbar/Appbar';

function App() {
  return (
    <Suspense fallback={<div>...Loading</div>}>
<Appbar />
    </Suspense>
  );
}

export default App;
