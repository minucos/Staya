import React from "react";
import { Link } from 'react-router-dom';
import RouteMap from "./route_map";

class RouteShow extends React.Component {

    componentDidMount() {
        this.props.fetchRoute(this.props.routeId);
    };
    
    render() {
        const { route, athlete, locations } = this.props;

        if (route === undefined || athlete === undefined ) {
            return null;
        }

        return (
        <div className="route-show">
        <div className="route-index-link">
            <Link id="link-to-index" to="/athlete/routes">
                My Running Routes 
            </Link>
            / {route.title}
        </div>
            <h1 className="route-show-heading">{route.title}</h1>

            <RouteMap
                className="route-show-map"
                route={route}
                locations={locations}
                athlete={athlete}
                mapType="show" />
        </div>
        )
    };
}

export default RouteShow;