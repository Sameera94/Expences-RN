import React from 'react';

import {View, StyleSheet, Text, Image} from 'react-native';

export default class PaymentsView extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Payments'
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{borderColor: 'black', borderWidth: 2, borderRadius: 10, justifyContent: 'center', alignItems: 'center', padding: 10}}>
              <Image style={{width: 160, height: 180}} source={{uri: 'https://www.nicepng.com/png/detail/63-633244_jungle-animals-free-to-copy-png-jungle-png.png'}} />
              <Text style={{fontSize: 30, color: 'red'}}>Animals</Text>
            </View>  
          </View>
          <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{borderColor: 'black', borderWidth: 2, borderRadius: 10, justifyContent: 'center', alignItems: 'center', padding: 10}}>
              <Image style={{width: 160, height: 180}} source={{uri: 'https://www.nicepng.com/png/detail/63-633244_jungle-animals-free-to-copy-png-jungle-png.png'}} />
              <Text style={{fontSize: 30, color: 'green'}}>Fruits</Text>
            </View>  
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{borderColor: 'black', borderWidth: 2, borderRadius: 10, justifyContent: 'center', alignItems: 'center', padding: 10}}>
              <Image style={{width: 160, height: 180}} source={{uri: 'https://www.nicepng.com/png/detail/63-633244_jungle-animals-free-to-copy-png-jungle-png.png'}} />
              <Text style={{fontSize: 30, color: 'brown'}}>Dogs</Text>
            </View>  
          </View>
          <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{borderColor: 'black', borderWidth: 2, borderRadius: 10, justifyContent: 'center', alignItems: 'center', padding: 10}}>
              <Image style={{width: 160, height: 180}} source={{uri: 'https://www.nicepng.com/png/detail/63-633244_jungle-animals-free-to-copy-png-jungle-png.png'}} />
              <Text style={{fontSize: 30, color: 'black'}}>Foods</Text>
            </View>  
          </View>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})