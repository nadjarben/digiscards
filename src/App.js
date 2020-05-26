import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from "./pages/homepage/Homepage"


function App() {
  return (
    <Suspense fallback={<div>...Loading</div>}>
      <Router>
      <Route exact path="/" component={Homepage}/>
      </Router>
    </Suspense>
  );
}

export default App;
