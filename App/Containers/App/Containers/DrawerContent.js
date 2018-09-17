import React, { Component } from 'react';
import { ScrollView, Image, BackHandler } from 'react-native';
import { List, ListItem, Text, View, Content } from 'native-base';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { connect } from 'react-redux';
import styles from './Styles/DrawerContentStyles';

class DrawerContent extends Component {
	render() {
		const navigation = this.props.navigation;
		const items = this.props.items;
		const icon = this.props.icons;

		return (
			<View style={styles.container}>
				{/* Add your own icon or logo */}
				{/* <Image
					source={require('../../images/iconLarge.png')}
					style={styles.logo}
				/> */}
				<Text style={styles.title}>Example Application</Text>
				<Content>
					<List
						dataArray={items}
						renderRow={item => (
							<ListItem
								onPress={() =>
									{
										navigation.navigate(item.routeName);
									}
								}
							>
								<Icon
									style={{ color: '#f7f7f7', paddingRight: 10 }}
									size={25}
									name={icon[item.routeName]}
								/>
								<Text style={styles.text}>{item.routeName}</Text>
							</ListItem>
						)}
					/>
				</Content>
			</View>
		);
	}
}

const mapStateToProps = (state) => {

  return { };
};

export default connect(mapStateToProps, { })(DrawerContent);
