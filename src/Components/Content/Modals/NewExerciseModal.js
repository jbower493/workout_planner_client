import React from 'react';
import Alert from '../../Alert';

import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input, Spinner } from 'reactstrap';

import { connect } from 'react-redux';
import { newExercise } from '../../../redux/actions/exercisesActions.js';
import { closeModal } from '../../../redux/actions/displayActions.js';

class NewExerciseModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      muscleGroup: ''
    };
    this.setName = this.setName.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.setMuscleGroup = this.setMuscleGroup.bind(this);
    this.saveNewExercise = this.saveNewExercise.bind(this);
  }

  setName(e) {
    this.setState({ name: e.target.value});
  }

  setDescription(e) {
    this.setState({ description: e.target.value });
  }

  setMuscleGroup(e) {
    this.setState({ muscleGroup: e.target.value });
  }

  saveNewExercise(e) {
    this.props.newExercise(this.state.name, this.state.description, this.state.muscleGroup);
  }

  render() {
    let _alert;
    if(this.props._alert) {
      _alert = <Alert color={this.props._alert.type} message={this.props._alert.message} />
    } else {
      _alert = null;
    }

    let button;
    if(this.props.fetching) {
      button = <ModalFooter>
          <Spinner size="sm" color="secondary" />
        </ModalFooter>;
    } else {
      button = <ModalFooter>
          <Button color="primary" onClick={this.saveNewExercise}>Save</Button>
          <Button color="danger" onClick={this.props.closeModal}>Cancel</Button>
        </ModalFooter>;
    }

    return (
      <div className="page-cover">
        <Modal isOpen={true}>
          <ModalHeader>New exercise</ModalHeader>
          <ModalBody>
            {_alert}
            <Form>
              <FormGroup className="mb-2">
                <Label className="mb-0">Name</Label>
                <Input type="text" placeholder="Name" onChange={this.setName} />
              </FormGroup>
              <FormGroup className="mb-2">
                <Label className="mb-0">Description</Label>
                <Input type="text" placeholder="Description" onChange={this.setDescription} />
              </FormGroup>
              <FormGroup className="mb-2">
                <Label className="mb-0">Muscle Group</Label>
                <Input type="text" placeholder="Muscle group" onChange={this.setMuscleGroup} />
              </FormGroup>
            </Form>
          </ModalBody>
          {button}
        </Modal>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  fetching: state.util.fetching,
  _alert: state.util._alert
});

export default connect(mapStateToProps, { newExercise, closeModal })(NewExerciseModal);