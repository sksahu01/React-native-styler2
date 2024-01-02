import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.headingText}>ElevatedCards</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>me</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>to</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Scrool</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>More...</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>🥸🥸🥸</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        color:'#000000',

    },
    container: {
        padding: 8,
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,

    },
    cardElevated: {
        backgroundColor: "#3C40C6",
        elevation: 5,
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowColor: '#333',
        shadowOpacity: 1.5,
    },
})