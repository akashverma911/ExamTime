/* This File defines the layout of the containers and elemnets in the web application */
import React from "react";
import {
   Container,
   Divider,
   Dropdown,
   Grid,
   Header,
   Image,
   List,
   Menu,
   Segment
} from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import { Redirect } from "react-router-dom";
import { message } from "antd";

class CustomLayout extends React.Component {

   handleClick() {
      message.warning("You have been successfully logged out")
      this.props.logout()
   }

   render() {
      const { authenticated } = this.props;
      return (
         <div>
            <Menu fixed="top">
               <Container>
                  <Link to="/">
                     <Menu.Item header>Home</Menu.Item>
                  </Link>

                  {authenticated ? (
                     <React.Fragment>
                        <Link to={`/profile/${this.props.userID}`}>
                           <Menu.Item header>Profile</Menu.Item>
                        </Link>
                        <Link to={`/list/`}>
                           <Menu.Item header>Lists</Menu.Item>
                        </Link>
                        {
                           this.props.is_teacher ? (
                              <Link to={`/create`}>
                                 <Menu.Item header>Create</Menu.Item>
                              </Link>
                           ) : null
                        }
                        <div class="right menu">
                           <Link to="/about/">
                              <Menu.Item header>About Us</Menu.Item>
                           </Link>
                           <Link to="/">
                              <Menu.Item header onClick={() => this.handleClick()}>
                                 Logout
                              </Menu.Item>
                           </Link>

                        </div>
                     </React.Fragment>
                  ) : (
                     <React.Fragment>
                        <Link to="/about/">
                           <Menu.Item header>About Us</Menu.Item>
                        </Link>
                        <div class="right menu">
                           <Link to="/login">
                              <Menu.Item header>Login</Menu.Item>
                           </Link>
                           <Link to="/signup">
                              <Menu.Item header>Signup</Menu.Item>
                           </Link>
                        </div>
                     </React.Fragment>
                  )}
               </Container>
            </Menu>



            <Container style={{ paddingTop: "90px" }}>
               {this.props.children}
            </Container>

         </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      authenticated: state.auth.token !== null,
      userID: state.auth.userId,
      is_teacher: state.auth.is_teacher
   };
};

const mapDispatchToProps = dispatch => {
   return {
      logout: () => dispatch(logout())
   };
};

export default withRouter(
   connect(
      mapStateToProps,
      mapDispatchToProps
   )(CustomLayout)
);
