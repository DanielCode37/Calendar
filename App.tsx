import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Table from './components/Table';
import Calendar from './src/Calendar';



export default function App() {
	const calendar = new Calendar;
	const [data, setData] = useState(calendar.calcTable());

	return (
		<View style={styles.container}>
			<Table data={data}></Table>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});