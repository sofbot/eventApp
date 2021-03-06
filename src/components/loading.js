import React, { Component } from 'react';
import { View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
class Loading extends Component {

  constructor(props) {
    super(props);
    this.state = {
      animating: true,
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({animating: false});
      clearTimeout(this.timer);
    }, 3000);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
      <Spinner
        textContent={"Finding Events Near You"}
        visible={this.state.animating}
        textStyle={{color: '#FFF'}}
        cancelable={true}
        overlayColor={'#CDDC39'}/>
      </View>
    );
  }
}

export default Loading;
