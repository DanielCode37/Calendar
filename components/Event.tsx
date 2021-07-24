import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Modal } from 'react-native';

export default function Event(props: { title: String, description: String, date: Date }) {
	return (
		<TouchableHighlight onLongPress={() => alert()}>
			<View style={styles.comp}>
				<Text style={styles.title}>{props.title}</Text>
				<Text style={styles.date}>{props.date.getHours() + ":" + props.date.getMinutes() + "	 Today"}</Text>
			</View>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	comp: {
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderColor: '#aaa',
		borderRadius: 8,
		margin: 5,
		justifyContent: 'space-between',
		padding: 10
	},
	title: {
		color: 'whitesmoke',
		fontWeight: 'bold',
	},
	date: {
		color: 'whitesmoke'
	},
	description: {
		color: 'whitesmoke',
		flexShrink: 1
	}
});