import React, { Component } from 'react'
import { Alert, Text, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'

export class Textinput extends Component {
    constructor(props){
        super(props)
        this.state={
            TextInputValueHolder:'',
            NumberHolder:'',
            EmailHolder:'',
            NameHolder:''
        }
    }
    GetValueFunction=()=>{
        const   {TextInputValueHolder,EmailHolder} = this.state;
        Alert.alert(TextInputValueHolder,EmailHolder)
    }

    render() {
        return (
            <View>
               
                 <TextInput 
                placeholder="Enter E-mail"
                onChangeText={EmailHolder=>this.setState({EmailHolder})}
                style={{textAlign:"center",marginBottom:7,height:50}}
                />
                 <TextInput 
                placeholder="Type Your Feedback Here... "
                onChangeText={TextInputValueHolder=>this.setState({TextInputValueHolder})}
                style={{textAlign:"center",marginBottom:7,height:50}}
                />
                <Button title="get text" onPress={this.GetValueFunction} color="#2196f3">Submit your feedback</Button>
            </View>
        )
    }
}

export default Textinput
