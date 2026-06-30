import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { getFavorites, removeFavorite } from '../../database/db';
import { styles } from './styles';

export default function FavoritesScreen() {
    const [favorites, setFavorites] = useState([]);

    const loadFavorites = async () => {
    const data = await getFavorites();
    setFavorites(data);
    };

    useFocusEffect(
        useCallback(() => {
            loadFavorites();
        }, [])
    );

    const handleDelete = async (cityName) => {
        Alert.alert(
            "Supprimer",
            `Voulez-vous vraiment retirer ${cityName} de vos favoris ?`,
            [
                { text: "Annuler", style: "cancel" },
                { 
                    text: "Oui", 
                    onPress: async () => {
                    await removeFavorite(cityName);
                    loadFavorites();
                    } 
                }
            ]
        );
    };

    const renderItem = ({ item }) => (
        <View style={styles.favoriteItem}>
            <Text style={styles.cityName}>{item.cityName}</Text>
            <TouchableOpacity 
                style={styles.deleteButton} 
                onPress={() => handleDelete(item.cityName)}
            >
                <Text style={styles.deleteText}>Retirer</Text>
            </TouchableOpacity>
        </View>
    );

    return (
    <View style={styles.container}>
        <Text style={styles.title}>Villes sauvegardées</Text>
        {favorites.length === 0 ? (
            <Text style={styles.emptyText}>Vous n'avez pas encore de villes favorites.</Text>
        ) : (
            <FlatList
                data={favorites}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />
        )
        }
    </View>
    );
}