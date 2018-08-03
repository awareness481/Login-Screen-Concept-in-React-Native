import React from 'react';
import { 
  ImageBackground,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { Font } from 'expo';


const background = require('./assets/bg.jpeg');



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
    }
  }

  onButtonPress = () => {
  }

  async componentDidMount() {
    await Font.loadAsync({
      'source400': require('./assets/fonts/SourceSansPro-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={background}
          style={{width: '100%', height: '100%'}}
        >
        <TouchableHighlight 
          style={styles.button}
          onPress={this.onButtonPress}
        >
          { this.state.fontLoaded 
            ? (<Text style={styles.touchText}> Get Started ────────></Text>)
            : <Text> </Text>
          }
        </TouchableHighlight>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 40,
    marginRight: 20
  },
  touchText: {
    textAlign: 'right',
    color: 'white',
    fontFamily: 'source400',
    fontSize: 15,
    textShadowOffset: {
      width: 0,
      height: 2
    },
    textShadowColor: 'rgba(0, 0, 0, 0.2)'
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor:'black',
    margin:10,
  }
});
