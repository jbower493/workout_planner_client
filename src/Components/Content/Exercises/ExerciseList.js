import React from 'react';

import Exercise from './Exercise';

import { ListGroup } from 'reactstrap';

import { connect } from 'react-redux';

const ExerciseList = (props) => {
  return (
    <ListGroup>
      {props.exercises.map(ex => <Exercise
        exercise={ex} 
        showEditExercise={props.showEditExercise}
        key={props.exercises.indexOf(ex)}
        showDeleteModal={props.showDeleteModal} />)}
    </ListGroup>
  )
};

const mapStateToProps = state => ({
  exercises: state.exercises.exercises,
  loading: state.exercises.loading
});

export default connect(mapStateToProps, null)(ExerciseList);