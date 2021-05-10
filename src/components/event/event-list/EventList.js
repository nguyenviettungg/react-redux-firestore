import React, { Component, Fragment } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    const { events,  deletedEvent } = this.props;
    return (
      <Fragment>
        {events.map((event) => (
          <EventListItem
            key={event.id}
            event={event}
            
            deletedEvent={deletedEvent}
          />
        ))}
      </Fragment>
    );
  }
}
export default EventList;
