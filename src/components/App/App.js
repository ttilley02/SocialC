import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import PrivateRoute from "../utils/PrivateRoute";
import PublicOnlyRoute from "../utils/PublicOnlyRoute";
import PostListPage from "../../routes/PostListPage";
import LoginPage from "../../routes/LoginPage";
import RegistrationPage from "../../routes/RegistrationPage";
import PostPage from "../../routes/PostPage";
import NotFoundPage from "../../routes/NotFoundPage";
import "./App.css";

class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
    return (
      <div className='App'>
        <header className='App__header'>
          <Header />
        </header>
        <main className='App__main'>
          {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
          <Switch>
            <Route
              exact
              path={'/'}
              component={PostListPage}
            />
            <PublicOnlyRoute
              path={'/login'}
              component={LoginPage}
            />
            <PublicOnlyRoute
              path={'/register'}
              component={RegistrationPage}
            />
            <PrivateRoute
              path={'/post/:postId'}
              component={PostPage}
            />
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
