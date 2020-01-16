import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';


import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text ,Accordion,Badge} from 'native-base';

const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

export default class FacebookScreen extends Component<React> {





    render() {

        return(

            <Container>

                <Header>

                    <Left>
                        
                        <Icon name='menu'/>

                    </Left>

                    <Body>

                    <Title>فیسبوک</Title>

                    </Body>

                    <Right>


                            <Icon name='menu'/>


                    </Right>

                </Header>


                <Content>

                    <Accordion dataArray={dataArray} expanded={0}/>

                    <Button block success  onPress={()=> {

                        this.props.navigation.navigate('lottie')

                    }}>
                        <Text>Play Animation</Text>
                    </Button>

                    



                </Content>


                <Footer>



                    <FooterTab>
                        <Button vertical>
                            <Icon name="apps" />
                            <Text>Apps</Text>
                        </Button>
                        <Button>
                            <Text>Camera</Text>
                        </Button>
                        <Button active>
                            <Text>Navigate</Text>
                        </Button>
                        <Button badge vertical>
                            <Badge><Text>2</Text></Badge>
                            <Icon name="apps" />
                            <Text>Apps</Text>
                        </Button>
                    </FooterTab>




                </Footer>



            </Container>


        )

    }

}