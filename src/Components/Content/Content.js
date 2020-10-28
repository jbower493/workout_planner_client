import React from 'react';
//import Axios from 'axios';

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

//import { Spinner } from 'reactstrap';

import { connect } from 'react-redux';

//import { url } from '../../App';

class Content extends React.Component {
/*
  resetState(workoutBeingViewedId) {
    Axios({
      method: 'GET',
      withCredentials: true,
      url: `${url}/get-workouts`
    })
      .then(res => {
        if(workoutBeingViewedId) {
          const newWorkout = res.data.workouts.find(workout => workout._id === workoutBeingViewedId);
          this.setState({ workoutToView: newWorkout });
        }
        this.setState({ 
          workouts: res.data.workouts,
          loading: false
        });
      })
  }

  componentDidMount() {
    this.resetState();
  }*/
/*
  showNewExercise() {
    this.setState({ modal: 'new exercise' });
  }

  showNewWorkout() {
    this.setState({ modal: 'new workout' });
  }*/
/*
  showAddToWorkout(workout) {
    this.setState({
      modal: 'add to workout',
      workoutToAddTo: workout
    });
    console.log(workout)
  }*/
/*
  showEditExercise(exercise) {
    this.setState({
      modal: 'edit exercise',
      exerciseToEdit: exercise
    });
  }*/
/*
  saveNewExercise(name, description, muscleGroup) {
    this.setState({ fetching: true });
    Axios({
      method: 'POST',
      url: `${url}/new-exercise`,
      withCredentials: true,
      data: {
        name,
        description,
        muscleGroup
      }
    })
      .then(res => {
        console.log(res.data);
        if(res.data.success) {
          this.setState({ modal: false });
          this.resetState()
        }
        this.setState({ fetching: false });
      })
  }*/
/*
  saveNewWorkout(name, duration, type) {
    this.setState({ fetching: true });
    Axios({
      method: 'POST',
      url: `${url}/new-workout`,
      withCredentials: true,
      data: {
        name,
        duration,
        type
      }
    })
      .then(res => {
        console.log(res.data);
        if(res.data.success) {
          this.setState({ modal: false });
        }
        this.setState({ fetching: false });
        this.resetState()
      })
  }*/
/*
  addToWorkout(exercise) {
    this.setState({ fetching: true });
    Axios({
      method: 'POST',
      url: `${url}/add-to-workout/${this.state.workoutToAddTo._id}`,
      withCredentials: true,
      data: exercise
    })
      .then(res => {
        console.log(res.data);
        this.setState({
          modal: false,
          workoutToAddTo: null
        });
        this.setState({ fetching: false });
        this.resetState();
      })
  }*/
/*
  saveEditedExercise(id, name, description, muscleGroup) {
    this.setState({ fetching: true });
    Axios({
      method: 'POST',
      url: `${url}/edit-exercise/${id}`,
      withCredentials: true,
      data: {
        name,
        description,
        muscleGroup
      }
    })
      .then(res => {
        console.log(res.data);
        this.setState({
          modal: false,
          exerciseToEdit: null
        });
        this.setState({ fetching: false });
        this.resetState();
      })
  }*/
/*
  deleteWorkout() {
    this.setState({ fetching: true });
    Axios({
      method: 'DELETE',
      url: `${url}/workout/${this.state.workoutToDelete}`,
      withCredentials: true
    })
      .then(res => {
        if(res.data.success) {
          this.setState({
            modal: false,
            workoutToDelete: null
          });
          this.setState({ fetching: false });
          this.resetState();
        }
      })
  }*/
/*
  removeWorkoutExercise(workoutId, workoutExerciseId) {
    this.setState({ fetching: true });
    Axios({
      method: 'DELETE',
      url: `${url}/workout-exercise/${workoutExerciseId}/${workoutId}`,
      withCredentials: true
    })
      .then(res => {
        if(res.data.success) {
          this.resetState();
        }
        this.setState({ fetching: false });
      })
  }*/
/*
  closeModal() {
    this.setState({ modal: false });
  }*/
/*
  togglePage() {
    this.state.page === 'workout list' ? this.setState({ page: 'exercise list' }) : this.setState({ page: 'workout list' });
    console.log(this.state)
  }*/
/*
  viewWorkout(workout) {
    this.setState({
      workoutToView: workout,
      page: 'workout details'
    });
  }*/
/*
  backToDashboard() {
    this.setState({ page: 'workout list' });
  }*/
/*
  showDeleteModal(deleteWhat, idToDel) {
    if(deleteWhat === 'exercise') {
      this.setState({ exerciseToDelete: idToDel });
    } else {
      this.setState({ workoutToDelete: idToDel });
    }
    this.setState({
      modal: 'confirm delete'
    });
  }*/
/*
  deleteExercise() {
    this.setState({ fetching: true });
    Axios({
      method: 'DELETE',
      url: `${url}/exercise/${this.state.exerciseToDelete._id}`,
      withCredentials: true
    })
      .then(res => {
        if(res.data.success) {
          console.log(res.data)
          this.setState({
            modal: false,
            workoutToDelete: null
          });
          this.resetState();
        }
        this.setState({ fetching: false });
      })
  }*/
/*
  showEditWorkoutModal(workout) {
    this.setState({
      modal: 'edit workout',
      workoutToEdit: workout
    });
    console.log(workout)
  }*/
/*
  showEditWorkoutExerciseModal(workoutExercise) {
    // pass in workout exercise as an object with workoutExerciseId and workoutId as properties, so I dont have to set 2 different states
    this.setState({
      modal: 'edit workout exercise',
      workoutExerciseToEdit: workoutExercise
    });
    console.log(workoutExercise);
  }*/

  /*editWorkout(name, duration, type) {
    this.setState({ fetching: true });
    Axios({
      method: 'POST',
      withCredentials: true,
      url: `${url}/edit-workout/${this.state.workoutToEdit._id}`,
      data: {
        name,
        duration,
        type
      }
    })
      .then(res => {
        if(res.data.success) {
          console.log(res.data)
          const id = this.state.workoutToEdit._id;
          this.setState({
            modal: false,
            workoutToEdit: null
          });
          this.resetState(id);
        }
        this.setState({ fetching: false });
        console.log(res.data);
      })
  }*/
/*
  editWorkoutExercise(reps, sets, weight) {
    this.setState({ fetching: true });
    Axios({
      method: 'POST',
      withCredentials: true,
      url: `${url}/edit-workout-exercise/${this.state.workoutExerciseToEdit.workoutId}/${this.state.workoutExerciseToEdit.workoutExercise._id}`,
      data: {
        reps,
        sets,
        weight
      }
    })
      .then(res => {
        if(res.data.success) {
          console.log(res.data)
          const id = this.state.workoutExerciseToEdit.workoutId;
          this.setState({
            modal: false,
            workoutExerciseToEdit: null
          });
          this.resetState(id);
        }
        this.setState({ fetching: false });
        console.log(res.data);
      })
  }*/

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

export default connect(mapStateToProps, {})(Content);