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
import { WebView } from 'react-native-webview';



export default class WebviewScreen extends Component<Props> {


    render() {

        return(
            <WebView source={{ uri: 'http://android-learn.ir' }} />

        )

    }

}