import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import firebase from "react-native-firebase";

export default class Landing extends React.Component {

  async componentDidMount() {
    const {user} = await firebase.auth().signInAnonymously();
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
