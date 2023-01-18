import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();

  const BACKEND = import.meta.env.VITE_BACKEND;

  const handleClick = async () => {
    const res = await fetch(`${BACKEND}/workouts/${workout._id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    if (res.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: data });
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default WorkoutDetails;
