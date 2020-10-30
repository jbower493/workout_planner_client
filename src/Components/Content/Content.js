import React from 'react';

import WorkoutList from './Workouts/WorkoutList';
import AddButtons from './AddButtons';
import NewExerciseModal from './Modals/NewExerciseModal';
import NewWorkoutModal from './Modals/NewWorkoutModal';
import AddToWorkout from './Modals/AddToWorkout';
import EditExerciseModal from './Modals/EditExerciseModal';
import ConfirmDeleteModal from './Modals/ConfirmDeleteModal';
import EditWorkoutModal from './Modals/EditWorkoutModal';
import EditWorkoutExerciseModal from './Modals/EditWorkoutExerciseModal';
import WorkoutDetails from './Workouts/WorkoutDetails';
import ExerciseList from './Exercises/ExerciseList';

import { connect } from 'react-redux';
import { getExercises } from '../../redux/actions/exercisesActions.js';
import { getWorkouts } from '../../redux/actions/workoutsActions.js';

class Content extends React.Component {
  componentDidMount() {
    this.props.getExercises();
    this.props.getWorkouts();
  }

  render() {
    let page = null;
    if(this.props.view === 'workouts') {
      page = <div>
        <AddButtons />
        <WorkoutList />
      </div>;
    } else if(this.props.view === 'workout details') {
      page = <WorkoutDetails />;
    } else if(this.props.view === 'exercises') {
      page = <div>
        <AddButtons />
        <ExerciseList />
      </div>;
    }

    let modal = null;
    if(this.props.modal === 'new exercise') {
      modal = <NewExerciseModal />;
    } else if(this.props.modal === 'new workout') {
      modal = <NewWorkoutModal />;
    } else if(this.props.modal === 'add to workout') {
      modal = <AddToWorkout />
    } else if(this.props.modal === 'edit exercise') {
      modal = <EditExerciseModal />
    } else if(this.props.modal === 'delete') {
      modal = <ConfirmDeleteModal />
    } else if(this.props.modal === 'edit workout') {
      modal = <EditWorkoutModal />;
    } else if(this.props.modal === 'edit workout exercise') {
      modal = <EditWorkoutExerciseModal />;
    }

    return (
      <div>
        {page}
        {modal}
      </div>
    )
  }
};

const mapStateToProps = state => ({
  view: state.display.view,
  modal: state.display.modal
});

export default connect(mapStateToProps, { getExercises, getWorkouts })(Content);