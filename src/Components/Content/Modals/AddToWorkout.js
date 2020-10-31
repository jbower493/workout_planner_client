import React, { useState } from 'react';

import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input, Spinner } from 'reactstrap';

import { connect } from 'react-redux';
import { addToWorkout } from '../../../redux/actions/workoutsActions.js';
import { closeModal } from '../../../redux/actions/displayActions.js';

const AddToWorkout = (props) => {
  const [reps, setReps] = useState(10);
  const [sets, setSets] = useState(3);
  const [weight, setWeight] = useState('');
  const [exerciseToAdd, setExerciseToAdd] = useState('');

  const addToWorkout = (e) => {
    const exercise = {
      exercise: exerciseToAdd,
      reps,
      sets,
      weight 
    };
    const workoutId = props.workoutToAddTo;
    props.addToWorkout(exercise, workoutId);
  };

  let button;
  if(props.fetching) {
    button = <ModalFooter>
        <Spinner size="sm" color="secondary" />
      </ModalFooter>;
  } else {
    button = <ModalFooter>
        <Button color="primary" onClick={addToWorkout}>Save</Button>
        <Button color="danger" onClick={props.closeModal}>Cancel</Button>
      </ModalFooter>;
  }

  return (
    <div className="page-cover">
      <Modal isOpen={true}>
        <ModalHeader>Choose an exercise to add</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup className="list-to-add" tag="fieldset">
              {props.exercises.map(ex => {
                return (
                  <FormGroup key={props.exercises.indexOf(ex)} check>
                    <Label key={props.exercises.indexOf(ex)} check>
                      <Input
                        type="radio"
                        name="radio1"
                        data-id={ex._id}
                        key={props.exercises.indexOf(ex)}
                        onChange={e => {
                          setExerciseToAdd(e.target.dataset.id);
                        }} />
                      {ex.name}
                    </Label>
                  </FormGroup>
                )
                })
              }
            </FormGroup>
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
  exercises: state.exercises.exercises,
  workoutToAddTo: state.details.workoutToAddTo
});

export default connect(mapStateToProps, { addToWorkout, closeModal })(AddToWorkout);