import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Event from './Event';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Events() {
    const [Events, setEvents] = useState([{ title: "String", description: "String", date: new Date }])

    const load = async () => {
        let items = await AsyncStorage.getItem("Events");
        console.log(items);
        if (items !== null) {
            setEvents([JSON.parse(items)]);
        }
    }

    useEffect(() => {
        load()
    }, [])

    return (
        <View style={styles.parent}>
            <ScrollView style={styles.container}>
                {Events.map(item => { return <Event title={item.title} description={item.description} date={item.date}></Event> })}
                {/* <Event title="Title" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr." date={new Date}></Event> */}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    parent: {
        width: '90%',
        height: 300,
        marginTop: 20,
    }
});