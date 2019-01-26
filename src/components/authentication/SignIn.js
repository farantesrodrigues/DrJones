import React from 'react';
import {AsyncStorage, Button, StyleSheet, View} from 'react-native';
import firebase from "react-native-firebase";
import {Text} from "react-native-elements";

export class SignIn extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  async componentDidMount() {
    const {user} = await firebase.auth().signInAnonymously();
    // console.warn('User -> ', user.toJSON());

    // await firebase.analytics().logEvent('foo', { bar: '123'});
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign in!" onPress={this._signInAsync}/>
      </View>
    );
  }

  // render() {
  //   return (
  //     <ScrollView>
  //       <View style={styles.container}>
  //         <Text style={styles.title}>
  //           DR JONES
  //         </Text>
  //
  //         <Input
  //           placeholder='INPUT WITH CUSTOM ICON'
  //           leftIcon={
  //             <Icon
  //               name='user'
  //               size={24}
  //               color='black'
  //             />
  //           }
  //         />
  //         <Input
  //           placeholder='INPUT WITH ERROR MESSAGE'
  //           errorStyle={{color: 'red'}}
  //           errorMessage='ENTER A VALID ERROR HERE'
  //         />
  //
  //         <SocialIcon
  //           title='Sign In With Facebook'
  //           button
  //           type='facebook'
  //         />
  //         <SocialIcon
  //           title='Sign In With Google'
  //           button
  //           type='google-plus-official'
  //         />
  //       </View>
  //     </ScrollView>
  //   );
  // }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});
