import React, { useState } from 'react';

import { ListGroupItem, Collapse, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { MdMoreHoriz, MdExpandMore } from "react-icons/md";

import { connect } from 'react-redux';
import { showDeleteModal, showEditExercise } from '../../../redux/actions/displayActions.js';

const Exercise = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

  const showEditExercise = () => {
    props.showEditExercise(props.exercise._id);
  };

  const showDeleteModal = e => {
    props.showDeleteModal('exercise', props.exercise._id);
  };

  return (
    <div>
      <ListGroupItem className="bg-light">
        <div className="workout-title d-flex justify-content-between align-items-center">
          <div className="start-section d-flex">
            <div className="workout-name fs-large">{props.exercise.name}</div>
            <div className="workout-type-holder">
              <div>Muscle Group: <span className="workout-type text-primary">{props.exercise.muscleGroup}</span></div>
            </div>
            <div className="exercises-dropdown pointer mt-2-smallscreen" onClick={toggle}>Description <MdExpandMore className="scale-1-and-half" /></div>
          </div>
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle
              tag="span"
              data-toggle="dropdown"
              aria-expanded={dropdownOpen}>
              <MdMoreHoriz className="more-button scale-2 pointer" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={showEditExercise}>Edit exercise</DropdownItem>
              <DropdownItem divider/>
              <DropdownItem onClick={showDeleteModal}>Delete exercise</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>

        <Collapse isOpen={isOpen}>
          <div className="exercise-description text-muted">{props.exercise.description}</div>
        </Collapse>
      </ListGroupItem>
    </div>
  )
};

//const mapStateToProps = state => {};

export default connect(null, { showDeleteModal, showEditExercise })(Exercise);