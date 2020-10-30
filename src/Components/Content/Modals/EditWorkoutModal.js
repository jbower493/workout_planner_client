import React, { useState } from 'react';

import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input, Spinner } from 'reactstrap';

import { connect } from 'react-redux';
import { editWorkout } from '../../../redux/actions/workoutsActions.js';
import { closeEditWorkoutModal } from '../../../redux/actions/displayActions.js';

const EditWorkoutModal = (props) => {
  const [name, setName] = useState(props.workoutToEdit.name);
  const [duration, setDuration] = useState(props.workoutToEdit.duration);
  const [type, setType] = useState(props.workoutToEdit.type);

  const editWorkout = e => {
    const id = props.workoutToEdit._id
    props.editWorkout(id, name, duration, type);
  };

  let button;
  if(props.fetching) {
    button = <ModalFooter>
        <Spinner size="sm" color="secondary" />
      </ModalFooter>;
  } else {
    button = <ModalFooter>
        <Button color="primary" onClick={editWorkout}>Save</Button>
        <Button color="danger" onClick={props.closeEditWorkoutModal}>Cancel</Button>
      </ModalFooter>;
  }

  return (
    <div className="page-cover">
      <Modal isOpen={true}>
        <ModalHeader>Edit Workout</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup className="mb-2">
              <Label className="mb-0">Name</Label>
              <Input type="text" value={name} onChange={e => setName(e.target.value)} />
            </FormGroup>
            <FormGroup className="mb-2">
              <Label className="mb-0">Duration</Label>
              <Input type="text" value={duration} onChange={e => setDuration(e.target.value)} />
            </FormGroup>
            <FormGroup className="mb-2">
              <Label className="mb-0">Type</Label>
              <Input type="select" onChange={e => setType(e.target.value)}>
                <option>Upper body</option>
                <option>Lower body</option>
                <option>Cardio</option>
                <option>Flexibility</option>
                <option>All round</option>
              </Input>
            </FormGroup>
          </Form>
        </ModalBody>
        {button}
      </Modal>
    </div>
  )
};

const mapStateToProps = state => ({
  workoutToEdit: state.details.workoutToEdit
});

export default connect(mapStateToProps, { editWorkout, closeEditWorkoutModal })(EditWorkoutModal);