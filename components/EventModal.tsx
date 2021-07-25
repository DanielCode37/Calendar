import React from 'react';
import { Button, Text, Modal, StyleSheet, View } from 'react-native';

export default function EventModal(props: { visible: boolean, setVisible: React.Dispatch<React.SetStateAction<boolean>>, content: { title: String, date: Date, description: String } }) {
    const date = new Date(props.content.date)
    return (
        <Modal visible={props.visible} animationType="slide" transparent={true}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Button onPress={() => { props.setVisible(false) }} title="Close" ></Button>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{props.content.title}</Text>
                    <Text style={styles.date}>{date.toLocaleTimeString() + "  " + date.toLocaleDateString()}</Text>
                    <Text style={styles.description}>{props.content.description}</Text>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        height: '95%',
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 10,
        backgroundColor: '#111122',
    },
    header: {
        alignItems: 'flex-start',
    },
    title: {
        textAlign: 'center',
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white'
    },
    date: {
        textAlign: 'center',
        color: 'grey',

    },
    description: {
        textAlign: 'center',
        color: 'white',
        padding: 20
    },
    contentContainer: {
        // textAlign: 'center',
        // justifyContent: 'center',
        // marginHorizontal: 100,
    }
})