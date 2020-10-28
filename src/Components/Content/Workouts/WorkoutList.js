import React from 'react';
import Workout from './Workout';

import { connect } from 'react-redux';
import { getWorkouts } from '../../../redux/actions/workoutsActions.js';

class WorkoutList extends React.Component {
  componentDidMount() {
    this.props.getWorkouts();
  }

  render() {
    return (
      <div>
        {this.props.workouts.map(workout => <Workout
          key={this.props.workouts.indexOf(workout)}
          workout={workout} />)
        }
      </div>
    )
  }
};

const mapStateToProps = state => ({
  workouts: state.workouts.workouts,
  loading: state.workouts.loading
});

export default connect(mapStateToProps, { getWorkouts })(WorkoutList);