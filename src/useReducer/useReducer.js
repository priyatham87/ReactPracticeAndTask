import { useReducer } from "react";

const actionTypes = {
  BOOK_TICKETS: "BOOK_TICKETS",
  CANCEL_TICKETS: "CANCEL_TICKETS",
  CHANGE_TOTAL_TICKETS: "CHANGE_TOTAL_TICKETS",
  CHANGE_MOVIE: "CHANGE_MOVIE",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.BOOK_TICKETS: 
      return {
        ...state,
        bookedTickets: state.bookedTickets + action.payload,
        currentAvailableTickets: state.currentAvailableTickets - action.payload,
      };
    case actionTypes.CANCEL_TICKETS:
      return {
        ...state,
        bookedTickets: state.bookedTickets - action.payload,
        currentAvailableTickets: state.currentAvailableTickets + action.payload,
      };
    case actionTypes.CHANGE_TOTAL_TICKETS:
      return { ...state, totalTickets: state.totalTickets + action.payload };
    case actionTypes.CHANGE_MOVIE:
      return { ...state, movieName: action.payload };
    default:
      return state;
  }
};

const initialState = {
  movieTheater: "PVR",
  location: "LULU mall",
  movieName: "Rayaan",
  totalTickets: 100,
  bookedTickets: 26,
  currentAvailableTickets: 74,
};
const UseReducer = () => {
  const [currentState, dispatchFunction] = useReducer(reducer, initialState);

  const bookTicketHandler=()=>{
    dispatchFunction({
        type:actionTypes.BOOK_TICKETS,
        payload:10
    })
  }

  const cancelTickectHandler=()=>{
    dispatchFunction({
        type:actionTypes.CANCEL_TICKETS,
        payload:2,
    })
  }

  const changeMovie=()=>{
    dispatchFunction({
        type:actionTypes.CHANGE_MOVIE,
        payload:"kalki"
    })
  }
  return (
    <>
      <h2>UseReducers</h2>
      <h3>Number of Total Tickets : {currentState.totalTickets}</h3>
      <h3>Number of Booked Tickets : {currentState.bookedTickets}</h3>
      <h3>Number of available Tickets : {currentState.currentAvailableTickets}</h3>
      <h3>current movie : {currentState.movieName}</h3>

      <button onClick={bookTicketHandler}>Book Tickects</button>
      <button onClick={cancelTickectHandler}>Cancel Tickects</button>
      <button onClick={changeMovie}>Change Movie</button>
    </>
  );
};
export default UseReducer;
