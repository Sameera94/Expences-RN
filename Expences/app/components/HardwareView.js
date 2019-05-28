import React from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity, Text} from 'react-native';
import {insertHardwareItem} from '../firebase/HardwareHandler';
import DatePicker from 'react-native-datepicker'
import moment from "moment";

export default class HardwareView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedDate: moment().format('YYYY-MM-DD'),
      description: '',
      amount: ''
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Hardware'
    };
  };

  handleSubmit = () => {
    let selectedDate = this.state.selectedDate;
    let amount = this.state.amount;
    let description = this.state.description;

    this.setState({
      description: '',
      amount: '',
      selectedDate: moment().format('YYYY-MM-DD')
    })

    insertHardwareItem({
      selectedDate: selectedDate,
      description: description,
      amount: amount
    })
  };

  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.topCard}>
          <Text style={styles.topCardDescription}>Total Amount</Text>
          <Text style={styles.topCardAmount}>Rs. 35,000.00</Text>
        </View>

        <View style={styles.monthCard}>
          <Text style={styles.topCardDescription}>Monthly Total</Text>
          <Text style={styles.topCardAmount}>Rs. 10,000.00</Text>
        </View>
        
        <View style={{}}>

          <DatePicker
            style={{width: 454}}
            date={this.state.selectedDate}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            customStyles={{
              dateInput: {
                margin: 10,
                height: 45,
                borderColor: 'gray',
                borderWidth: 2
              }
            }}
            onDateChange={(selectedDate) => this.setState({selectedDate})}
          />
          
          <TextInput
            style={styles.descriptionInput}
            onChangeText={(description) => this.setState({description})}
            value={this.state.description}
            placeholder={'Description'}
          />

          <TextInput
            style={styles.amountInput}
            onChangeText={(amount) => this.setState({amount})}
            value={this.state.amount}
            placeholder={'Amount'}
          />

          <View style={{flex: 1,flexDirection: 'row', justifyContent: 'space-between', margin: 10, marginTop: 20}}>
            {/* <View style={{flex: 1 ,borderColor: 'red', borderWidth: 2, height: 20}}> */}
              <TouchableOpacity style={styles.addButton} onPress={this.handleSubmit}>
                <Text style={styles.addButtonText}> Insert </Text>
              </TouchableOpacity>
            {/* </View> */}
            {/* <View style={{flex: 1}}> */}
              <TouchableOpacity style={styles.viewAllButton} onPress={() => this.props.navigation.navigate('HardwareDetails')}>
                <Text style={styles.viewAllButtonText}> View All </Text>
              </TouchableOpacity>
            {/* </View> */}
          </View>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topCard: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    borderColor: '#000D4D',
    borderWidth: 2.0,
    backgroundColor: '#000D4D'
  },
  topCardDescription: {
    fontSize: 23,
    color: 'white'
  },
  topCardAmount: {
    fontSize: 23,
    color: 'white'
  },
  monthCard: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    borderColor: '#000D4D',
    borderWidth: 2.0,
    marginBottom: 25,
    backgroundColor: '#000D4D'
  },
  viewAllButton: {
    height: 45, 
    borderColor: '#000D4D', 
    borderWidth: 2,
    alignItems: 'center', 
    justifyContent: 'center',
    flex: 1,
    marginLeft: -1
  },
  addButton: {
    height: 45,
    backgroundColor: '#000D4D',
    borderWidth: 2, 
    borderColor: '#000D4D', 
    alignItems: 'center', 
    justifyContent: 'center',
    flex: 1,
  },
  descriptionInput: {
    height: 45, 
    borderColor: 'gray', 
    borderWidth: 2, 
    margin: 10, 
    marginTop: 15, 
    paddingLeft: 15,
    backgroundColor: 'white',
    fontSize: 18
  },
  addButtonText: {
    fontSize: 18,
    color: 'white'
  },
  viewAllButtonText: {
    fontSize: 18,
    color: '#000D4D'
  },
  amountInput: {
    height: 45, 
    borderColor: 'gray', 
    borderWidth: 2, 
    marginLeft: 10, 
    marginRight: 10, 
    marginTop: 5, 
    paddingLeft: 15,
    backgroundColor: 'white',
    fontSize: 18
  }
});