import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavBar from "./navbar";
import { login, logout } from "../../actions/session_actions";

const mapStateToProps = (state) => {
    return ({
        currentUser: state.entities.athletes[state.session.id],
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        login: (athlete) => dispatch(login(athlete)),
        logout: () => dispatch(logout()),
    })
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NavBar));