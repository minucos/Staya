import * as routesAPIUtil from "../utils/routes_api_util";

export const RECEIVE_ALL_ROUTES = "RECEIVE_ALL_ROUTES";
export const RECEIVE_ROUTE = "RECEIVE_ROUTE";
export const REMOVE_ROUTE = "REMOVE_ROUTE";
export const RECEIVE_ROUTE_ERRORS = "RECEIVE_ROUTE_ERRORS";

const receiveAllRoutes = (routes) => {
    return ({
        type: RECEIVE_ALL_ROUTES,
        routes: routes,
    })
}

const receiveRoute = (routeId) => {
    return ({
        type: RECEIVE_ROUTE,
        routeId: routeId,
    })
}

const removeRoute = (routeId) => {
    return ({
        type: REMOVE_ROUTE,
        routeId: routeId,
    })
}

const receiveErrors = (errors) => {
    return ({
        type: RECEIVE_ROUTE_ERRORS,
        errors: errors,
    })
}

export const fetchRoutes = () => dispatch => (
    routesAPIUtil.fetchRoutes()
    .then( routes => dispatch(receiveAllRoutes(routes)),
        errors => dispatch(receiveErrors(errors.responseJSON))
    )
)

export const fetchRoute = (id) => dispatch => (
    routesAPIUtil.fetchRoute(id)
        .then( route => dispatch(receiveRoute(route.id)),
            errors => dispatch(receiveErrors(errors.responseJSON))
    )
)

export const createRoute = (route) => dispatch => (
    routesAPIUtil.createRoute(route)
        .then(route => dispatch(receiveRoute(route)),
            errors => dispatch(receiveErrors(errors.responseJSON))
    )
)

export const updateRoute = (route) => dispatch => (
    routesAPIUtil.updateRoute(route)
        .then(route => dispatch(receiveRoute(route)),
            errors => dispatch(receiveErrors(errors.responseJSON))
    )
)

export const deleteRoute = (id) => dispatch => (
    routesAPIUtil.deleteRoute(id)
        .then(route => dispatch(removeRoute(route.id)),
            errors => dispatch(receiveErrors(errors.responseJSON))
    )
)

