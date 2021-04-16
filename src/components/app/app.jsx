import React from "react";
// импортируем Router как BrowserRouter это для history
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
// import Error404 from "../error-404/error-404";
import {connect} from "react-redux";
import browserHistory from "../../browser-history";
// import {ActionCreator} from "../../store/action";
// import PrivateRoute from "../private-route/private-route";
import PageMain from "../page-main/page-main";

const App = (props) => {
  // const {authorizationStatus, onPrivateRouteRequest} = props;
  const [film, setMovie] = React.useState({}); // фильм который хотим посмотреть

  const updateData = (value) => {
    setMovie(value);
  };

  return (
    // теперь вся знаю об экземпляре класса истории
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/">
          <PageMain updateData={updateData} />
        </Route>

        {/*<Route>*/}
        {/*  <Error404 />*/}
        {/*</Route>*/}
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {

};

export {App};

const mapStateToProps = (state)=>({
});

const mapDispatchToProps = (dispatch)=>({
  // onPrivateRouteRequest(route) {
  //   dispatch(ActionCreator.addRequestedRoute(route)); // закидываем роуте в диспач он закидывает в action и далее reducer поменяет вместо пути "/" на главную на путь route
  // }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
