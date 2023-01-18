import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext();

//type: describes state change. payload: data needed to make change
//dispatch({type: 'SET_WORKOUTS'}, payload: [{}, {}])

// arg state: previous state
export const workoutReducer = (state, action) => {
  switch (action.type) {
    // set all workouts
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };
    // add new workout to existing workouts
    case "CREATE_WORKOUT":
      return {
        workouts: [action.payload, ...state.workouts],
      };
    case "DELETE_WORKOUT":
      return {
        workouts: state.workouts.filter(
          (workout) => workout._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export const WorkoutContextProvider = ({ children }) => {
  // args: function, initial value
  const [state, dispatch] = useReducer(workoutReducer, {
    workouts: null,
  });

  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};
