import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import SuspenseUi from "./components/suspense/Suspense";

import Thecleaners from "./pages/client/thecleaners/Thecleaners";

function App() {
  return (
    <Suspense fallback={<SuspenseUi />}>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/thecleaners" component={Thecleaners} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
