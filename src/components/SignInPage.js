import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import SignInForm from './SignIn-Form';

export function SignInPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="home">
            <h2>Welcome to Foo App</h2>
            <SignInForm />
            {/* <Link to="/register">Register</Link> */}
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SignInPage);