import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Event from './Event';

export default function Events() {
    return (
        <View style={styles.parent}>
            <ScrollView style={styles.container}>
                <Event title="Title" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr." date={new Date}></Event>
                <Event title="Title" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr." date={new Date}></Event>
                <Event title="Title" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr." date={new Date}></Event>
                <Event title="Title" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr." date={new Date}></Event>
                <Event title="Title" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr." date={new Date}></Event>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: "lime",
        borderWidth: 3,
    },
    parent: {
        width: '90%',
        height: 300,
        marginTop: 20,
    }
})