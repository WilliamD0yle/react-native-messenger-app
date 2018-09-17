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

class Example1 extends Component {
  render() {
    return (
      <Container
        style={styles.container}
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
              style={styles.title}
            >
              Example 1
            </Title>
          }
        />
        <Content
          padder={true}
        >
          <Text
            style={{color: "rgb(255, 255, 255)"}}
          >
            Create Something Great . . .
          </Text>
          <Image
            style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}
            resizeMode='cover'
            source={Images.great}
          />
        </Content>
      </Container>
    );
  }
}

const styles = {
  container: {
    backgroundColor: "rgb(41, 41, 41)",
  },
  title: {
    color: "rgb(255, 255, 255)",
  }
}

const mapStateToProps = (state) => {

  return { };
};

export default connect(mapStateToProps, {})(Example1);
