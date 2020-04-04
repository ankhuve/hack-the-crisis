import React from "react";
import "./styling/resources.scss";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Start from "./views/Start/Start";
import SignUp from "./views/SignUp/SignUp";
import Errands from "./views/Errands/Errands";
import CreateErrand from "./views/CreateErrand/CreateErrand";
import LocationInput from "./views/LocationInput/LocationInput";

function App() {
    return (
        <main>
            <div className="App">
                <Switch>
                    <Route path='/signup' component={SignUp} />
                    <Route path='/errands' component={Errands} />
                    <Route path='/create-errand' component={CreateErrand} />
                    <Route path='/input-location' component={LocationInput} />
                    <Route path='/' component={Start} />
                </Switch>
            </div>
        </main>
    );
}

export default App;