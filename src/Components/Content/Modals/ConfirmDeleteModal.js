import React from 'react';

import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Spinner } from 'reactstrap';

import { connect } from 'react-redux';
import { deleteExercise } from '../../../redux/actions/exercisesActions.js';
import { deleteWorkout } from '../../../redux/actions/workoutsActions.js';
import { closeModal } from '../../../redux/actions/displayActions.js';

const ConfirmDeleteModal = (props) => {
  let title;
  let message;
  let proceedFunc;

  if(props.exerciseToDelete === null) {
    title = 'Delete Workout';
    message = 'Are you sure you want to delete this workout? This action cannot be undone.';
    proceedFunc = props.deleteWorkout;
  } else {
    title = 'Delete Exercise';
    message = 'Are you sure you want to delete this exercise? This will also remove the exercise from any workout that you have added it to, and cannot be undone.';
    proceedFunc = props.deleteExercise;
  }

  let button;
  if(props.fetching) {
    button = <ModalFooter>
        <Spinner size="sm" color="secondary" />
      </ModalFooter>;
  } else {
    button = <ModalFooter>
        <Button color="danger" onClick={proceedFunc}>Delete</Button>
        <Button color="primary" onClick={props.closeModal}>No, go back</Button>
      </ModalFooter>;
  }

  return (
    <div className="page-cover">
      <Modal isOpen={true}>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>
          <p>{message}</p>
        </ModalBody>
        {button}
      </Modal>
    </div>
  )
};

const mapStateToProps = state => ({
  exercisesLoading: state.exercises.loading,
  workoutsLoading: state.workouts.loading
});

export default connect(mapStateToProps, { deleteExercise, deleteWorkout, closeModal })(ConfirmDeleteModal);