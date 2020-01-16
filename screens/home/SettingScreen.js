import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    Image,
    Alert,Linking
} from 'react-native';


import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Body,
    Button,
    Text,
    Right,
    Left,
    Thumbnail,
    Icon,
    Tab,
    Tabs,Footer,
} from 'native-base';

import call from 'react-native-phone-call'

const args = {
    number: '9093900003', // String value with the number to call
    prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call
}

export default class SettingScreen extends Component<Props> {


    render() {

        return(

            <Container>

                <Content>

                    <Card>

                        <CardItem>


                            <Body>

                            <Text style={{fontFamily:'IRANSans_Bold'}}>

                                آموزشگاه اندروید ایران با هدف ترویج برنامه نویسی و توسعه برنامه نویسی اندروید و همچنین پرورش متخصصین توسعه دهندگان موبایل تاسیس شد



                            </Text>

                            </Body>




                        </CardItem>

                    </Card>




                    <Card>

                        <CardItem>

                            <Left>

                                <Button iconLeft rounded danger onPress={()=> {


                                    call(args).catch(console.error)


                                }}>
                                    <Icon name='call' />
                                    <Text>تماس</Text>
                                </Button>


                            </Left>


                            <Right>

                                <Body>
                                <Text style={{marginTop: 4, fontFamily: "BYekan", fontSize: 24}} >

                                    88946636

                                </Text>

                                </Body>

                            </Right>


                        </CardItem>

                    </Card>



                    <Card>

                        <CardItem>

                            <Left>

                                <Button iconLeft rounded danger onPress={()=> {


                                    this.props.navigation.navigate('web')



                                }}>
                                    <Icon name='call' />
                                    <Text>مشاهده وب سایت</Text>
                                </Button>


                            </Left>


                            <Right>

                                <Body>
                                <Text style={{marginTop: 4, fontFamily: "BYekan", fontSize: 24}}>

                                    Android Learn

                                </Text>

                                </Body>

                            </Right>


                        </CardItem>

                    </Card>



                </Content>

                <Footer style={{ justifyContent: 'space-between',backgroundColor:'#ffffff'}}>




                            <TouchableOpacity onPress={()=> {

                                Linking.openURL('https://google.com')}

                            } >


                                <Thumbnail  source={require('../../assets/images/instagram.jpg')}/>
                            </TouchableOpacity>

                    <TouchableOpacity onPress={()=> {

                        Linking.openURL('https://google.com')}

                    } >

                        <Thumbnail  source={require('../../assets/images/facebook.png')}/>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={()=> {

                        Linking.openURL('https://google.com')}

                    } >

                        <Thumbnail  source={require('../../assets/images/twitter.jpg')}/>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={()=> {

                        Linking.openURL('https://google.com')}

                    } >

                        <Thumbnail  source={require('../../assets/images/telegram.png')}/>
                    </TouchableOpacity>







                </Footer>



            </Container>

        )

    }

}