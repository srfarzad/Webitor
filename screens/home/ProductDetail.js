import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableHighlight,
    Image,
    Alert
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
    Tabs
} from 'native-base';
import {Rating, AirbnbRating} from 'react-native-ratings';
import DetailTab from "../tabs/DetailTab";
import CommentsTab from "../tabs/CommentsTab";
import RelatedTab from "../tabs/RelatedTab";


export default class ProductDetail extends Component<Props> {

    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }

    render() {

        const {navigation} = this.props;

        console.log(navigation.getParam('items', '0'));

        const items = navigation.getParam('items', '0');

        return (

            <Container>


                <Header>

                </Header>

                <Content>


                    <Card>

                        <CardItem>

                            <Left>
                                {/*  <Rating
                                  type='custom'
                                  ratingColor='#3498db'
                                  ratingBackgroundColor='#c8c7c8'
                                  ratingCount={5}
                                  imageSize={40}
                                  onFinishRating={this.ratingCompleted}
                                  style={{ paddingVertical: 10 }}
                              />*/}

                                <AirbnbRating
                                    count={7}
                                    reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow"]}
                                    defaultRating={items.rate}
                                    size={20}
                                />

                            </Left>

                            <Body>
                            <Text style={{marginTop: 16, fontFamily: "BYekan", fontSize: 24}}> {items.title}</Text>


                            </Body>


                            <Right>
                                <Image source={{uri: "http://androidsupport.ir/market/images/" + items.icon}}
                                       style={{width: 144, height: 144}}/>

                            </Right>

                        </CardItem>


                        <CardItem style={{flex: 1, justifyContent: 'space-between'}}>


                            <Button iconLeft success rounded onPress={()=> {


                                this.props.navigation.navigate('map')


                            }}>
                                <Icon name='map'/>
                                <Text>موقعیت یابی</Text>
                            </Button>

                            <Button iconLeft danger rounded onPress={()=> {


                                this.props.navigation.navigate('video')


                            }}>
                                <Icon name='play'/>
                                <Text>پخش ویدیو</Text>
                            </Button>


                        </CardItem>

                    </Card>


                    <Tabs tabBarUnderlineStyle={{borderBottomWidth:2}}>

                        <Tab heading="توضیحات" >
                            <DetailTab/>
                        </Tab>

                        <Tab heading="نظرات">
                            <CommentsTab/>
                        </Tab>
                        <Tab heading="مرتبط">

                            <RelatedTab/>
                        </Tab>

                    </Tabs>


                </Content>


            </Container>

        )

    }

}