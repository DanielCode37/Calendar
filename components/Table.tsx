import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import KeyGenerator from '../src/Key';

const keyGen = new KeyGenerator;

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
            {data.map(item => { return <Text style={styles.cell} key={keyGen.generateKey()} >{item}</Text> })}
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    cell: {
        padding: 10,
        textAlign: 'center',
        width: 50,
        fontSize: 20,
        color: 'whitesmoke'
    }
});