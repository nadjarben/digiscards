import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from "./pages/homepage/Homepage";

import Thecleaners from "./pages/client/Thecleaners"


function App() {
  return (
    <Suspense fallback={<div>...Loading</div>}>
      <Router>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/thecleaners" component={Thecleaners}/>
      </Router>
    </Suspense>
  );
}

export default App;
