import "./App.css";
import "semantic-ui-css/semantic.min.css";
import EventDashboard from "./components/event/event-dashboard/EventDashboard";
import EventDetailedPage from "./components/event/event-detailed/EventDetailedPage";
import HomePage from "./components/home/HomePage";
import NavBar from "./components/nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";
import React, { Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import PeopleDashboard from "./components/user/people-dashboard/PeopleDashboard";
import { UserDetailedPage } from "./components/user/user-detailed/UserDetailedPage";
import SettingsDashboard from "./components/user/settings/SettingsDashboard";
import EventForm from "./components/event/event-form/EventForm";
import TestComponent from "./components/testarea/TestComponent";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <NavBar />
              <Container className="main">
                <Switch key={this.props.location.key}>
                  <Route exact path="/events" component={EventDashboard} />
                  <Route path="/events/:id" component={EventDetailedPage} />
                  <Route path="/people" component={PeopleDashboard} />
                  <Route path="/profile/:id" component={UserDetailedPage} />
                  <Route path="/settings" component={SettingsDashboard} />
                  <Route
                    path={["/createEvent", "/manage/:id"]}
                    component={EventForm}
                  />
                  <Route path="/test" component={TestComponent} />
                </Switch>
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default withRouter(App);
