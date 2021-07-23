import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import KeyGenerator from '../src/Key';

const keyGen = new KeyGenerator;

export default function Table(props: { data: any[][] }) {
    return (
        <View>
            {props.data.map(row => { return Row(row, props.data.indexOf(row)) })}
        </View>
    );
}

function Row(data: any[], index: Number): JSX.Element {
    return (
        <View style={styles.row}>
            {data.map(item => { return <Text style={[styles.cell, { color: calcColor(index, item) }]} key={keyGen.generateKey()} >{item}</Text> })}
        </View>
    );
}

function calcColor(row: Number, value: Number): "whitesmoke" | "grey" {
    if (row == 0 && value > 10) return "grey";
    if ((row == 5 || row == 4) && value < 10) return "grey";
    return "whitesmoke";
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
    }
});