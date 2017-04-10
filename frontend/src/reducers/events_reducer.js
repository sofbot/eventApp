import {
  RECEIVE_EVENTS,
  REMOVE_EVENT
} from '../actions/event_actions';

const _defaultState = [
  {
    title: 'Dinner Party',
    imageUrl: 'http://whalebonemag.com/wp-content/uploads/2015/06/38589-Outdoor-Dinner-Party.jpg',
    venue: '',
    time: '',
    description: '',
  },
  {
    title: 'Dinner Party',
    imageUrl: 'http://whalebonemag.com/wp-content/uploads/2015/06/38589-Outdoor-Dinner-Party.jpg',
    venue: '',
    time: '',
    description: '',
  },
  {
    title: 'Dinner Party',
    imageUrl: 'http://whalebonemag.com/wp-content/uploads/2015/06/38589-Outdoor-Dinner-Party.jpg',
    venue: '',
    time: '',
    description: '',
  },
  {
    title: 'Dinner Party',
    imageUrl: 'http://whalebonemag.com/wp-content/uploads/2015/06/38589-Outdoor-Dinner-Party.jpg',
    venue: '',
    time: '',
    description: '',
  },
  {
    title: 'Dinner Party',
    imageUrl: 'http://whalebonemag.com/wp-content/uploads/2015/06/38589-Outdoor-Dinner-Party.jpg',
    venue: '',
    time: '',
    description: '',
  }
];

const EventsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = JSON.parse(JSON.stringify(state));
  switch(action.type) {
    case RECEIVE_EVENTS:
      if (newState[0].title === 'Dinner Party') {
        // replace entire slice with action.events on first load
        return action.events;
      } else {
        return newState.concat(action.events);
      }
    case REMOVE_EVENT:
      newState.shift(); // take it from the top
      return newState;
    default:
      return state;
  }
};

export default EventsReducer;