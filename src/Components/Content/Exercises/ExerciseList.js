import React, { useEffect } from 'react';

import Exercise from './Exercise';

import { ListGroup } from 'reactstrap';

import { connect } from 'react-redux';
import { getExercises } from '../../../redux/actions/exercisesActions.js';

const ExerciseList = (props) => {
  const { getExercises } = props;
  useEffect(() => {
    getExercises();
    console.log('use effect ran')
  }, [getExercises]);

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

export default connect(mapStateToProps, { getExercises })(ExerciseList);