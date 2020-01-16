import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';

import SQLite from "react-native-sqlite-2";
import firebase from 'react-native-firebase';


const db = SQLite.openDatabase("Jalilvand.db", "1.1", "", 2);
//const db = SQLite.openDatabase("test.db", "1.0", "", 1);


export default class RegisterScreen extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            email   : '',
            password: '',
            phone: '',
        }

    }


    componentDidMount() {




    }




    onClickListener = (viewId) => {
       // Alert.alert("Alert", "Button pressed "+viewId);



        var email=this.state.email;
        var phone=this.state.phone;



        firebase.auth().createUserWithEmailAndPassword(email,phone)
            .then((user)=> {

                Alert.alert("Firebase", "User created Successfully");


            })
            .catch((e)=> {
                Alert.alert("Firebase", "Failed registration");

            });



        firebase.auth().signInWithEmailAndPassword(email, phone)
            .then((user)=> {

            })
            .catch((error)=> {

            })




        db.transaction(function(txn){

            txn.executeSql("DROP TABLE IF EXISTS Users", []);

            txn.executeSql(
                "CREATE TABLE IF NOT EXISTS Users(id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(30)," +
                "phone VARCHAR(30))",
                []
            );

            txn.executeSql("INSERT INTO Users (name,phone) VALUES (:name,:phone)", [email,phone]);
//            txn.executeSql("INSERT INTO Users (name,phone) VALUES (:name,:phone)", ["jalilvand","091222"]);

        })


    };

    render() {

        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={{uri: 'https://png.icons8.com/google/color/120'}}/>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/user/ultraviolet/50/3498db'}}/>
                    <TextInput style={styles.inputs}
                               placeholder="email"
                               underlineColorAndroid='transparent'
                               onChangeText={(email) => this.setState({email})}/>
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
                    <TextInput style={styles.inputs}
                               placeholder="password"
                               underlineColorAndroid='transparent'
                               onChangeText={(password) => this.setState({password})}/>
                </View>


                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/speech-bubble/ultraviolet/50'}}/>
                    <TextInput style={[ styles.messageInput]}
                               placeholder="phone"
                               underlineColorAndroid='transparent'
                               onChangeText={(phone) => this.setState({phone})}/>
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.sendButton]} onPress={() => this.onClickListener('login')}>
                    <Text style={styles.buttonText}>Send</Text>
                </TouchableHighlight>
            </View>

        )

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
    },
    logo:{
        width:120,
        height:120,
        justifyContent: 'center',
        marginBottom:20,
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:100,
        borderRadius:30,
    },
    sendButton: {
        backgroundColor: "#FF4500",
    },
    buttonText: {
        color: 'white',
    }
});