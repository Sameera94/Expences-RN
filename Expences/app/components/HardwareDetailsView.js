import React from 'react';
import {Button, View, StyleSheet, FlatList, Text, TouchableOpacity, Alert, TextInput} from 'react-native';
import { Icon } from 'react-native-elements'
import { db } from '../config/config';
import Swipeout from 'react-native-swipeout';

let itemsRef = db.ref('/items');

export default class HardwareDetailsView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      filteredItems: []
    }
  }

  componentDidMount() {
    // Get data from Firebase
    itemsRef.on('value', snapshot => {
      const itemsObject = snapshot.val();
      if (itemsObject) {
        const itemsList = Object.keys(itemsObject).map(key => ({
          ...itemsObject[key],
          key: key,
        }));
        this.setState({
          items: itemsList,
          filteredItems: itemsList
        });
      } else {
        this.setState({ items: null });
      }
    });
  }

  static navigationOptions = ({ navigation }) => {
    const {state} = navigation;
    return {
      title: 'Hardware Records',
    };
  };

  removeItem = (key) => {
    itemsRef.child(key).remove();
  }

  searchBarChange = (keyword) => {
    let items = this.state.items
    let filteredItems = items.filter(item => item['selectedDate'].includes(keyword) || item['amount'].includes(keyword) || item['description'].toLowerCase().includes(keyword.toLowerCase()))

    if (filteredItems.length > 0) {
      this.setState({
        filteredItems: filteredItems
      })
    } else {
      this.setState({
        filteredItems: items
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <TextInput 
          style={styles.searcTextInput} 
          placeholder='Search...'
          onChangeText={(keyword) => this.searchBarChange(keyword)}
        >
        </TextInput>

        {this.state.filteredItems.length > 0 ? (
          <FlatList
            data={this.state.filteredItems}
            renderItem={({item, index}) => 
              <Swipeout 
                autoClose= {true}
                right = {[
                  {
                    onPress: () => {
                      Alert.alert(
                        'Warning',
                        'Are you sure want to delete?',
                        [
                          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                          {text: 'Delete', onPress: () => this.removeItem(item.key), style: 'destructive'},
                        ],
                        { 
                          cancelable: true 
                        }
                      )
                    },
                    text: 'Delete', 
                    type: 'delete'
                  }
                ]}
              >
                <View style={styles.itemView}>
                  <View style={{}}>
                    <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                      <Text style={styles.itemDate}>{item.selectedDate}</Text>
                      <Text style={styles.itemAmount}>Rs. {item.amount}</Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.itemDescription} maxNumberOfLines={3} >{item.description}</Text>
                  </View> 
                </View>
              </Swipeout>
            }
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 0
  },
  itemView: {
    flexDirection: 'column',
    borderWidth: 0.5,
    borderColor: 'gray',
    backgroundColor: 'white'
  },
  itemDescription: {
    padding: 5,
    fontSize: 16,
    paddingLeft: 13,
    marginBottom: 10
  },
  itemDate: {
    padding: 5,
    paddingLeft: 13,
    fontSize: 20,
    paddingTop: 10
  },
  itemAmount: {
    padding: 5,
    fontSize: 20,
    paddingRight: 13,
    paddingTop: 10
  },
  topRow: {
    
  },
  deleteButton: {
    backgroundColor: 'red'
  },
  searcTextInput: {
    padding: 10
  }
})