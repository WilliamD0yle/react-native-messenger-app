import React, { Component } from "react";
import { Image } from "react-native";
import { connect } from "react-redux";
import EvilIcons from 'react-native-vector-icons/dist/FontAwesome';
import {
  Container,
  Title,
  Content,
  Text,
  Button,
} from "native-base";
import Header from "../Components/Header";
import Images from "../Themes/Images";

class Example2 extends Component {
  render() {
    return (
      <Container
        style={{ backgroundColor: "rgb(41, 41, 41)"}}
      >
        <Header
          left={
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <EvilIcons
                name="navicon"
                size={25}
                color="rgb(255, 255, 255)"
              />
            </Button>
          }
          body={
            <Title
              style={{ color: "rgb(255, 255, 255)" }}
            >
              Example 2
            </Title>
          }
        />
        <Content
          padder={true}
        >
          <Text
            style={{color: "rgb(255, 255, 255)"}}
          >
            Hello there...
          </Text>
          <Image
            style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}
            resizeMode='cover'
            source={Images.scream}
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {

  return { };
};

export default connect(mapStateToProps, { })(Example2);
