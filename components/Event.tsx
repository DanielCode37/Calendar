import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Modal } from 'react-native';
import EventModal from './EventModal';

export default function Event(props: { title: String, description: String, date: Date }) {
	const [modalVisibility, setModalVisibility] = useState(false);
	const date = new Date(props.date)
	return (
		<>
			<TouchableHighlight onLongPress={() => setModalVisibility(true)}>
				<View style={styles.comp}>
					<Text style={styles.title}>{props.title}</Text>
					<Text style={styles.date}>{date.getHours() + ":" + date.getMinutes() + "	 Today"}</Text>
				</View>
			</TouchableHighlight>
			<EventModal visible={modalVisibility} setVisible={setModalVisibility} content={props}></EventModal>
		</>
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