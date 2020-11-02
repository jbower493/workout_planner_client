import React from 'react';
import Alert from '../../Alert';

import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input, Spinner } from 'reactstrap';

import { connect } from 'react-redux';
import { newWorkout } from '../../../redux/actions/workoutsActions.js';
import { closeModal } from '../../../redux/actions/displayActions.js';

class NewWorkoutModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      duration: '',
      type: 'Upper body'
    };
    this.setName = this.setName.bind(this);
    this.setDuration = this.setDuration.bind(this);
    this.setType = this.setType.bind(this);
    this.saveNewWorkout = this.saveNewWorkout.bind(this);
  }

  setName(e) {
    this.setState({ name: e.target.value });
  }

  setDuration(e) {
    this.setState({ duration: e.target.value });
  }

  setType(e) {
    this.setState({ type: e.target.value });
  }

  saveNewWorkout(e) {
    this.props.newWorkout(this.state.name, this.state.duration, this.state.type);
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
          <Button color="primary" onClick={this.saveNewWorkout}>Save</Button>
          <Button color="danger" onClick={this.props.closeModal}>Cancel</Button>
        </ModalFooter>;
    }

    return (
      <div className="page-cover">
        <Modal isOpen={true}>
          <ModalHeader>New Workout</ModalHeader>
          <ModalBody>
            {_alert}
            <Form>
              <FormGroup className="mb-2">
                <Label className="mb-0">Name</Label>
                <Input type="text" placeholder="Name" onChange={this.setName} />
              </FormGroup>
              <FormGroup className="mb-2">
                <Label className="mb-0">Duration</Label>
                <Input type="number" placeholder="Duration" onChange={this.setDuration} />
              </FormGroup>
              <FormGroup className="mb-2">
                <Label className="mb-0">Type</Label>
                <Input type="select" onChange={this.setType}>
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
  }
};

const mapStateToProps = state => ({
  fetching: state.util.fetching,
  _alert: state.util._alert
});

export default connect(mapStateToProps, { newWorkout, closeModal })(NewWorkoutModal);