/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    Image, Button
} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import RegisterScreen from "./screens/RegisterScreen";
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from "./screens/home/HomeScreen";
import CategoryScreen from "./screens/home/CategoryScreen";
import SettingScreen from "./screens/home/SettingScreen";
import FacebookScreen from "./screens/FacebookScreen";
import LottiesScreen from "./screens/home/LottiesScreen";


import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded
} from 'react-native-admob'
import ProductDetail from "./screens/home/ProductDetail";
import VideoViewScreen from "./screens/home/VideoViewScreen";
import WebviewScreen from "./screens/home/WebviewScreen";
import MapViewScreen from "./screens/home/MapViewScreen";


class LoginScreen extends Component<Props> {


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Image style={[styles.icon, styles.inputIcon]}
                           source={{uri: 'https://png.icons8.com/password/androidL/40/3498db'}}/>
                    <TextInput style={styles.inputs}
                               placeholder="Email"
                               keyboardType="email-address"
                               underlineColorAndroid='transparent'/>
                </View>

                <View style={styles.inputContainer}>
                    <Image style={[styles.icon, styles.inputIcon]}
                           source={{uri: 'https://png.icons8.com/envelope/androidL/40/3498db'}}/>
                    <TextInput style={styles.inputs}
                               placeholder="Password"
                               secureTextEntry={true}
                               underlineColorAndroid='transparent'/>
                </View>

                <TouchableOpacity style={styles.restoreButtonContainer}>
                    <Text>Forgot?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => {

                    this.props.navigation.navigate('dashboard');

                }}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={() => {

                    this.props.navigation.navigate('register')

                }}>
                    <Text>Register</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonContainer, styles.fabookButton]} onPress={()=>{

                    this.props.navigation.navigate('facebook')


                }}>
                    <View style={styles.socialButtonContent}>
                        <Image style={styles.icon}
                               source={{uri: 'https://png.icons8.com/facebook/androidL/40/FFFFFF'}}/>
                        <Text style={styles.loginText}>Continue with facebook</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonContainer, styles.googleButton]}>
                    <View style={styles.socialButtonContent}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/google/androidL/40/FFFFFF'}}/>
                        <Text style={styles.loginText}>Sign in with google</Text>
                    </View>
                </TouchableOpacity>


                <AdMobBanner
                    adSize="banner"
                    bannerSize="smartBannerPortrait"
                    adUnitID="ca-app-pub-3940256099942544/6300978111"
                    testDeviceID={__DEV__ ? 'EMULATOR' : ''}
                />



            </View>

        )
    }

}


const bottoms_menu = createBottomTabNavigator({


    home: HomeScreen,
    category: CategoryScreen,
    setting: SettingScreen,


});

const AppContainer = createStackNavigator({

    login: {
        screen: LoginScreen
    },
    dashboard: {
        screen: bottoms_menu
    }
    ,

    lottie : {
        screen : LottiesScreen,
        navigationOptions: {
            header: null,
        }
    },

    facebook : {
        screen : FacebookScreen,
        navigationOptions: {
            header: null,
        }
    }
    ,
    register: {
        screen: RegisterScreen
    }
    ,
    detail : {
        screen : ProductDetail,
        navigationOptions: {
            header: null,
        }
    },
    video : {
        screen : VideoViewScreen,
        navigationOptions: {
            header: null,
        }
    },
    web : {
        screen : WebviewScreen,

    },
    map : {
        screen : MapViewScreen,
        navigationOptions: {
            header: null,
        }
    }


});

const App = createAppContainer(AppContainer);


export default App;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B0E0E6',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    icon: {
        width: 30,
        height: 30,
    },
    inputIcon: {
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: '#3498db',
    },
    fabookButton: {
        backgroundColor: "#3b5998",
    },
    googleButton: {
        backgroundColor: "#ff0000",
    },
    loginText: {
        color: 'white',
    },
    restoreButtonContainer: {
        width: 250,
        marginBottom: 15,
        alignItems: 'flex-end'
    },
    socialButtonContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialIcon: {
        color: "#FFFFFF",
        marginRight: 5
    }
});
