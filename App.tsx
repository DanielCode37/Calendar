import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Table from './components/Table';



export default function App() {
	const [data, setData] = useState([
		[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
		[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
		[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
		[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
		[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
		[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
		[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
		[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
		[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
	]);


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