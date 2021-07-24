import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Table from './components/Table';
import Calendar from './src/Calendar';
import Events from './components/Events';
import Header from './components/Header';

export default function App() {
	const calendar = new Calendar;
	const [data, setData] = useState(calendar.calcTable());

	return (
		<View style={styles.container}>
			<Header></Header>
			<Table data={data}></Table>
			<Events></Events>
			<StatusBar style="light" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#112',
		alignItems: 'center',
		justifyContent: 'center',
	},
});