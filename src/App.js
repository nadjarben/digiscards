import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from "./pages/homepage/Homepage";
import SuspenseUi from "./components/suspense/Suspense"

import Thecleaners from "./pages/client/thecleaners/Thecleaners"


function App() {
  return (
    <Suspense fallback={<SuspenseUi />}>
      <Router>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/thecleaners" component={Thecleaners}/>
      </Router>
    </Suspense>
  );
}

export default App;
