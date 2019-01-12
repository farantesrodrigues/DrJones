import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';
import { SocialIcon, Input } from 'react-native-elements';
import firebase from 'react-native-firebase';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    const { user } = await firebase.auth().signInAnonymously();
    // console.warn('User -> ', user.toJSON());

    // await firebase.analytics().logEvent('foo', { bar: '123'});
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>
            DR JONES
          </Text>

          <Input
            placeholder='INPUT WITH CUSTOM ICON'
            leftIcon={
              <Icon
                name='user'
                size={24}
                color='black'
              />
            }
          />
          <Input
            placeholder='INPUT WITH ERROR MESSAGE'
            errorStyle={{ color: 'red' }}
            errorMessage='ENTER A VALID ERROR HERE'
          />

          <SocialIcon
            title='Sign In With Facebook'
            button
            type='facebook'
          />
          <SocialIcon
            title='Sign In With Google'
            button
            type='google-plus-official'
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    marginBottom: 16,
    marginTop: 64,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
