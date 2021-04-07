import React from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity, TextInput,  } from 'react-native';
import db from '../config' ;
import firebase from 'firebase';

export default class SignupLoginScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            uername: '',
            password: ''
    }
    
    userLogin = (emailId, password) => {
        firebase.auth().signInWithEmailAndPassword(emailId, password)
            .then(() => {
                return Alert.alert("sucusessfully login")

            })
            .catch(function (error) {
                var errorcode = error.code
                var errormessage = error.errormessage
                return Alert.alert(errormessage)
            })
    }
    userSignUp=(emailId,password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailId,password)
        .then((response)=>{
        return Alert.alert("user added sucusessfully")
       
        })
        .catch(function(error){
            var errorcode=error.code
            var errormessage=error.errormessage
            return Alert.alert(errormessage)
        })
    }}
    render(){
        return(
            <View>
                 <Text style={{color:'#ff5772',fontSize:18,fontWeight:'bold',marginLeft:55}}>USERNAME</Text>
                 <View style={{alignItems:'center'}}></View>
                 <TextInput
                 style={styles.loginBox}
                 keyboardType='email-address'
                 onChangeText={(text)=>{
                     this.setState({
                         username:text
                     })
                 }}
                 />
                 <TextInput
                    style={styles.loginBox}
                    placeholder="enter password"
                    secureTextEntry={true}
                    placeholderTextColor="#fff"
                    onChangeText={(text => {
                        this.setState({
                            password: text
                        })
                    })}
                />
                 <View style={{alignItems:'center'}}>
                     <TouchableOpacity 
                        style={[styles.button,{marginBottom:10}]}
                         onPress={()=>{this.userLogin(this.state.username,this.state.password)}}>
                             <Text style={{color:'#ff5722', fontSize:18, fontWeight:'bold'}}>LOGIN</Text>
                     </TouchableOpacity>

                 </View>
                 <View style={{alignItems:'center'}}>
                     <TouchableOpacity 
                        style={[styles.button,{marginBottom:10}]}
                         onPress={()=>{this.userSignup(this.state.username,this.state.password)}}>
                             <Text style={{color:'#ff5722', fontSize:18, fontWeight:'bold'}}>SIGNUP</Text>
                     </TouchableOpacity>

                 </View>
                </View>
                 
           
        )
    }
}
const styles = StyleSheet.create({
    loginBox: {
        width: 300,
        height: 40,
        borderBottomWidth: 1.5,
        borderColor: '#ff8a65',
        fontSize: 20,
        margin: 10,
        paddingLeft: 10,
    },
    button: {
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: "#ff9800",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8, },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
    },
    
})

