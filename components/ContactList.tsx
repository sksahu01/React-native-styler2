import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {

    const contacts = [
        {
            uid: 1,
            name: 'Suraj kumar sahu',
            status: 'Building Project',
            ImageUrl: 'https://avatars.githubusercontent.com/u/118847989?v=4',
        },
        {
            uid: 2,
            name: ' Rohan',
            status: 'AI Building Project',
            ImageUrl: 'https://media.licdn.com/dms/image/D5603AQHxwbfGcuRPQQ/profile-displayphoto-shrink_400_400/0/1697544717355?e=1709769600&v=beta&t=ia_f1O7HmJO4eJgVgXAMZSH3ezlEITDE32dwY820390',
        },
        {
            uid: 3,
            name: 'Ankit',
            status: 'Building Project DevOps',
            ImageUrl: 'https://media.licdn.com/dms/image/D4D03AQFV5vLG1yIX_A/profile-displayphoto-shrink_100_100/0/1696611474907?e=1709769600&v=beta&t=2YAIFzsuC3Ta0f6nca7WAhm5fFEngUmWuYW2k1Tdb4Y',
        },
        {
            uid: 4,
            name: 'Lucky',
            status: 'Building Project Flutter',
            ImageUrl: 'https://media.licdn.com/dms/image/D4D03AQFXPPodp4V6gg/profile-displayphoto-shrink_100_100/0/1697997019604?e=1709769600&v=beta&t=e3GfgT8mCEWMZM2oXR5uBS3br-UEju0bnzh-D0nIunE',
        },
        {
            uid: 5,
            name: 'Atharva',
            status: 'Building Project IoT',
            ImageUrl: 'https://media.licdn.com/dms/image/D4D03AQGQOdxPGBPNfQ/profile-displayphoto-shrink_100_100/0/1682721063494?e=1709769600&v=beta&t=LY58LoYOLvI95FA0plO9PEUptWFmGTMGjCvGwekOw58',
        },
    ];
    return (
        <View>
            <Text style={styles.headingText}>ContactList</Text>
            <ScrollView
                style={styles.container}
                scrollEnabled={false}
            >
                {contacts.map(({ uid, name, status, ImageUrl }) => (
                    <View key={uid} style={styles.userCard}>
                        <Image
                            source={{
                                uri: ImageUrl
                            }}
                            style={styles.userImage}
                        />
                        <View>
                            <Text style={styles.userName}>{name}</Text >
                            <Text style={styles.userStatus}>{status}</Text>
                        </View>

                    </View>
                ))}
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        color: '#000000',
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4,
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#45CE30',
        padding: 8,
        borderRadius: 10,

    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 14,
        // marginTop:12,

    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
    },
    userStatus: {
        fontSize: 12,
    },
})