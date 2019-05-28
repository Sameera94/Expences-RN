import React from 'react';

import {Button, View} from 'react-native';

export default class DetailsScreen extends React.Component {
  
  static navigationOptions = ({ navigation }) => {
    const {state} = navigation;
    return {
      title: 'Details',
    };
  };

  render() {

    return (
      <View>
        <Button
          title="Details Screen"
        />
      </View>
     
    );
  }
}