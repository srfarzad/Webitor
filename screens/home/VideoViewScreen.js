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

import Video from 'react-native-video';


export default class VideoViewScreen extends Component<Props> {


    render() {

        return(


            <Video source={{uri: "http://androidsupport.ir/video/Linux.mp4"}}   // Can be a URL or a local file.
                   ref={(ref) => {
                       this.player = ref
                   }}                                      // Store reference
                   onBuffer={this.onBuffer}                // Callback when remote video is buffering
                   onError={this.videoError}               // Callback when video cannot be loaded
                   style={styles.backgroundVideo} />

        )

    }

}

var styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});