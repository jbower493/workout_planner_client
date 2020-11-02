import React, { useState } from 'react';
import Alert from '../../Alert';

import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input, Spinner } from 'reactstrap';

import { connect } from 'react-redux';
import { editWorkoutExercise } from "../../../redux/actions/workoutsActions.js";
import { closeEditWorkoutExerciseModal } from '../../../redux/actions/displayActions.js';

const EditWorkoutExerciseModal = (props) => {
  const [reps, setReps] = useState(props.workoutExerciseToEdit.reps);
  const [sets, setSets] = useState(props.workoutExerciseToEdit.sets);
  const [weight, setWeight] = useState(props.workoutExerciseToEdit.weight);

  const editWorkoutExercise = e => {
    // need to get last 2 arguments from somewhere!!
    const workoutId = props.workoutExerciseToEdit.workoutId;
    const workoutExerciseId = props.workoutExerciseToEdit._id;
    props.editWorkoutExercise(reps, sets, weight, workoutId, workoutExerciseId);
  };

  let _alert;
  if(props._alert) {
    _alert = <Alert color={props._alert.type} message={props._alert.message} />
  } else {
    _alert = null;
  }

  let button;
  if(props.fetching) {
    button = <ModalFooter>
        <Spinner size="sm" color="secondary" />
      </ModalFooter>;
  } else {
    button = <ModalFooter>
        <Button color="primary" onClick={editWorkoutExercise}>Save</Button>
        <Button color="danger" onClick={props.closeEditWorkoutExerciseModal}>Cancel</Button>
      </ModalFooter>;
  }

  return (
    <div className="page-cover">
      <Modal isOpen={true}>
        <ModalHeader>
          Edit Details for:<br/>
          <span className="text-primary">{props.workoutExerciseToEdit.exercise.name}</span>
        </ModalHeader>
        <ModalBody>
          {_alert}
          <Form>
            <FormGroup className="mb-2">
              <Label className="mb-0">Reps</Label>
              <Input type="number" value={reps} onChange={e => setReps(e.target.value)} />
            </FormGroup>
            <FormGroup className="mb-2">
              <Label className="mb-0">Sets</Label>
              <Input type="number" value={sets} onChange={e => setSets(e.target.value)} />
            </FormGroup>
            <FormGroup className="mb-2">
              <Label className="mb-0">Weight</Label>
              <Input type="text" value={weight} onChange={e => setWeight(e.target.value)} />
            </FormGroup>
          </Form>
        </ModalBody>
        {button}
      </Modal>
    </div>
  )
};

const mapStateToProps = state => ({
  workoutExerciseToEdit: state.details.workoutExerciseToEdit,
  fetching: state.util.fetching
});

export default connect(mapStateToProps, { editWorkoutExercise, closeEditWorkoutExerciseModal })(EditWorkoutExerciseModal);