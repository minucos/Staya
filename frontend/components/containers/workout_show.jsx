import React from "react";
import { Link } from 'react-router-dom';

class WorkoutShow extends React.Component {
    
    componentDidMount() {
        this.props.fetchWorkout(this.props.workoutId);
    }

    formatDate(dateString) {
        const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
        let day = days[dateString.getDay()];
        let date = dateString.getDate();
        let month = dateString.getMonth() + 1;
        let year = dateString.getFullYear();

        return `${day}, ${month}/${date}/${year}`;
    }

    formatTime(duration) {
        let hrs = Math.floor(duration / 3600);
        duration = duration % 3600;
        let mins = Math.floor(duration / 60);
        duration = duration % 60;
        let secs = duration;

        return `${hrs}:${mins}:${secs}`;
    }

    remove() {
        this.props.deleteWorkout(this.props.workout.id);
    };

    avgSpeed(duration, distance) {
        let avgSecondsPerKm = Math.floor(duration / (distance / 1000));
        let avgMins = Math.floor(avgSecondsPerKm/60);
        let avgSecs = avgSecondsPerKm % 60;

        if (avgSecs < 10) {
            avgSecs = `0${avgSecs}`;
        }

        return `${avgMins}:${avgSecs}/km`;
    }

    render() {

        if (this.props.workout === undefined) {
            return null;
        }

        let workout = this.props.workout;
        
        return (
            <div className="workout-show">
                <div className="workout-actions">
                    <button className="workout-show-button">
                        ✎
                        </button>
                    <button className="workout-show-button" onClick={this.remove.bind(this)}>
                        ◦◦◦
                        </button>
                </div>
                <div className="workout-details">
                    <div className="workout-details-header">
                        <h2 id="workout-heading">
                            Tobias Dundridge - {workout.workout_type}
                        </h2>
                    </div>
                    <div className="workout-body">
                        <div className="workout-information">
                            <img id="workout-profile-pic" src={window.images.demo_profile_pic} alt="Profile Pic" />
                            <div className="workout-info">
                                <div id="workout-date">
                                    Completed on {this.formatDate(new Date(workout.created_at))}
                                </div>
                                <div id="workout-title">
                                    {workout.title}
                                </div>
                                <div id="workout-body">
                                    {workout.body}
                                </div>
                            </div>
                        </div> 
                        <div className="workout-details-stats">
                            <div className="workout-stats">
                                <div id="workout-distance">
                                    <div className="workout-stat">
                                        {((workout.distance / 1000.00).toFixed(2))}km
                                    </div>
                                    <div className="show-label">Distance</div>
                                </div>
                                <div id="workout-time">
                                    <div className="workout-stat">
                                        {Math.floor(workout.duration / 60)}:{workout.duration % 60}
                                    </div>
                                    <div className="show-label">Elapsed Time</div>
                                </div>
                            </div>
                            <div id="workout-avg-speed">
                                {`Avg Speed: ${this.avgSpeed(workout.duration, workout.distance)}`}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default WorkoutShow;