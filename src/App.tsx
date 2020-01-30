import React from "react";
import { Navbar } from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import { TodosPage } from "./pages/todosPage";
import { AboutPage } from "./pages/aboutPage";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" component={TodosPage} exact />
          <Route path="/info" component={AboutPage} />
        </Switch>
      </div>
    </>
  );
};

export default App;
