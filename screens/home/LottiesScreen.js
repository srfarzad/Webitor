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

import LottieView from 'lottie-react-native';


export default class LottiesScreen extends Component<Props> {


    render() {

        return(
            <View>
                <LottieView source={require('./../../assets/crab.json')} style={{width : 300 , height : 300}}
                            autoPlay loop
                />

            </View>
        )

    }

}