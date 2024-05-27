import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import MySpaceContext from '../context/MySpaceContext';

export default function MySpaceScreen() {
    const { likedCards } = useContext(MySpaceContext);

    return (
             <ScrollView style={styles.scrollView}>
            {likedCards.map((card, index) => (
                <View style={styles.cardContainer} key={index}>
                    <Text style={styles.cardTitle}>Title: {card.title}</Text>
                    <Text style={styles.cardText}>{card.genre}</Text>
                    <Image source={{ uri: card.posterURL }} style={styles.posterImage} />
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    cardContainer: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cardText: {
        fontSize: 16,
        marginBottom: 5,
    },
    posterImage: {
        width: 180,
        height: 280,
        borderRadius: 8,
    },
});
