import React from 'react';
import Workout from './Workout';

import { Spinner } from 'reactstrap';

import { connect } from 'react-redux';

class WorkoutList extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.loading
            ? <div className="loading"><Spinner size="md" color="secondary" /></div>
            : this.props.workouts.map(workout => <Workout
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

export default connect(mapStateToProps, null)(WorkoutList);