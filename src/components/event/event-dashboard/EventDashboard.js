import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

import EventList from "../event-list/EventList";

import { connect } from "react-redux";
import { createEvent, updateEvent, deleteEvent } from "../eventActions";

class EventDashboard extends Component {
  handleDeleteEvent = (id) => {
    this.props.deleteEvent(id);
  };
  render() {
    const { events } = this.props;
    return (
      <div>
        <Grid>
          <Grid.Column width={10}>
            <EventList events={events} deletedEvent={this.handleDeleteEvent} />
          </Grid.Column>
          <Grid.Column width={6}>
            <h2>Activity Feed</h2>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ events: state.events });
const mapDispatchToProps = {
  createEvent,
  updateEvent,
  deleteEvent,
};
export default connect(mapStateToProps, mapDispatchToProps)(EventDashboard);
