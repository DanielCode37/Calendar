import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Table from './components/Table';
import Calendar from './src/Calendar';



export default function App() {
	const calendar = new Calendar;
	const [data, setData] = useState(calendar.calcTable());

	return (
		<View style={styles.container}>
			<Table data={data}></Table>
			<StatusBar style="light" />
		</View>
	);
}

function al() {
	alert()
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#112',
		alignItems: 'center',
		justifyContent: 'center',
	},
});