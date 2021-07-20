import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Table(props: { data: any[][] }) {
    return (
        <View>
            {props.data.map(row => { return Row(row) })}
        </View>
    );
}

function Row(data: any[]): JSX.Element {
    return (
        <View style={styles.row}>
            {data.map(item => { return <Text style={styles.cell} key={Math.random().toString()} >{item}</Text> })}
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderColor: '#0f0',
        borderWidth: 3
    },
    cell: {
        padding: 10
    }
});