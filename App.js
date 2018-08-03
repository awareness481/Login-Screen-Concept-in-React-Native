import React from 'react';
import { 
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  onButtonPress = () => {
    console.log('hello');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight 
          style={styles.button}
          onPress={this.onButtonPress}
        >
          <Text style={styles.touchText}> Get Started </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
