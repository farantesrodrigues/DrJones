import React from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Landing from "../Landing";
import {SignIn, AuthLoading} from "../authentication";

const AppStack = createStackNavigator({ Landing: Landing });
const AuthStack = createStackNavigator({ SignIn: SignIn });

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
