import React from "react";
import { Link } from 'react-router-dom';


class RouteMap extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            distance: 0,
            duration: 0,
        };

        this.length = this.props.locations.length;
        this.start = this.props.locations[0];
        this.end = this.props.locations[this.length - 1];
        this.waypoints = this.props.locations.slice(1,this.length - 1).map( waypoint => {
            return { location: waypoint, stopover: true };
        });

        this.mapOptions = {
            center: this.end,
            zoom: 13,
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: true,
        }

        this.routeOptions = {
            origin: this.start,
            destination: this.end,
            waypoints: this.waypoints,
            optimizeWaypoints: false,
            travelMode: "WALKING",
        }

        this.renderOptions = {
            suppressMarkers: true,
        }
    };
    
    componentDidMount() {
        // console.log(this.length);
        // debugger
        this.map = new google.maps.Map(document.getElementById(`map-${this.props.route.id}`), this.mapOptions);

        let directionsService = new google.maps.DirectionsService();
        let directionsDisplay = new google.maps.DirectionsRenderer(this.renderOptions);

        directionsService.route(this.routeOptions, function (result, status) {
            console.log(status)
            if (status == 'OK') {
                directionsDisplay.setDirections(result);
                // debugger
                result.routes[0].legs.forEach(leg => {
                    let distance = this.state.distance;
                    let duration = this.state.duration;

                    distance += leg.distance.value;
                    duration += leg.duration.value;

                    this.setState({
                        distance: distance,
                        duration: duration,
                    })
                });
            }
        }.bind(this));

        directionsDisplay.setMap(this.map);
    }

    formatDate(dateString) {
        const months = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                        ];

        let day = dateString.getDate();
        let month = months[dateString.getMonth() - 1];
        let year = dateString.getFullYear();

        return `${day} ${month}, ${year}`;
    }


    render() {

        return (
            <div>
                <div className="map-index" id={`map-${this.props.route.id}`}>
                    MAP GOES HERE
                </div>
                <div className="route-stats">
                    <Link to={`athlete/route/${this.props.route.id}`} className="route-title">
                        {this.props.route.title}
                    </Link>
                    <p className="route-description">
                        {this.props.route.description}
                    </p>
                    <ul className="route-distance">
                        <li 
                            className="route-distance-length"
                            id={`${this.props.route.id}-distance`}>{this.state.distance/1000.00}km</li>
                        <li>Distance</li>
                    </ul>
                    <ul className="route-time" id={`${this.props.route.id}-duration`}>
                        <li>
                            Est. Moving Time
                        </li>
                        <li id="route-est-moving-time">
                            {Math.floor(this.state.duration / 60)}:{this.state.duration % 60}
                        </li>
                    </ul>
                    <div className="route-footer">Created on {this.formatDate(new Date(this.props.route.created_at))}
                    </div>
                </div>
            </div>
        )
    }
};

export default RouteMap;