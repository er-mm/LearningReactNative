import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleText: true
    }
  }

  changeText = () => {
    this.setState({ toggleText: !this.state.toggleText })
  }

  render() {
    const { toggleText } = this.state;
    const originalText = 'Open up App.js to start working on your App';
    const changedText = 'The Text changed';
    return (
      <View style={styles.container}>
        <Text>{toggleText ? originalText : changedText}</Text>
        <Button title="Change Text" onPress={this.changeText} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
