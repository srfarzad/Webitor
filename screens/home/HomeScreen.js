import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    Image,
    Alert,FlatList
} from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text ,Accordion,Badge,Card,CardItem} from 'native-base';


export default class HomeScreen extends Component<Props> {



    constructor(props){
        super(props);


        this.state = {

            best : null
            ,
            images: [
                "https://source.unsplash.com/1024x768/?nature",
                "https://source.unsplash.com/1024x768/?water",
                "https://source.unsplash.com/1024x768/?girl",
                "https://source.unsplash.com/1024x768/?tree", // Network image//

            ]
        }




    }


    getBestApplication () {

        fetch('http://androidsupport.ir/market/getBestApplications.php')
            .then((response)=>response.json())
            .then((responseJson)=> {

                this.setState({best : responseJson})
                console.log(responseJson)

            })
            .catch((e)=> {
                console.log(e.toString())
            })


    }


    componentDidMount () {
        this.getBestApplication()
    }






    render() {

        return(
            <View>

                <SliderBox


                    images={this.state.images}
                    dotColor="#FFEE58"
                    inactiveDotColor="#90A4AE"
                    paginationBoxVerticalPadding={20}
                    autoplay
                    circleLoop
                />



                <Text style={{margin:8,fontFamily: "IRANSans_Bold"}} > برترین محصولات </Text>



            <FlatList
                horizontal={true}
                data={this.state.best}
                keyExtractor={(item,index)=>index.toString()}
                renderItem={({item})=>

                    <TouchableOpacity onPress={()=> {

                        this.props.navigation.navigate('detail', {
                            id : 1,
                            items : item,
                        })


                    }}>
                    <Card>

                        <CardItem>

                            <Image
                                //uniform resource identifier
                                source={{uri : "http://androidsupport.ir/market/images/"+ item.icon }}

                                style={{width : 144 , height : 144}}

                                />


                        </CardItem>

                        <CardItem style={{justifyContent:'center', alignItems:'center', alignContent:'center'}}>
                            <Text style={{fontFamily: "BYekan"}} >{item.title}</Text>

                        </CardItem>


                    </Card>

                    </TouchableOpacity>

                 }

                />



            </View>
        )

    }

}