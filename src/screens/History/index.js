import React, { useState, useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { getHistory } from '../../database/db';
import { styles } from './styles';

export default function HistoryScreen() {
  const [history, setHistory] = useState([]);


  useFocusEffect(
    useCallback(() => {
      const loadHistory = async () => {
        const data = await getHistory();
        setHistory(data);
      };
      loadHistory();
    }, [])
  );

  const renderItem = ({ item }) => {
    // Formatage basique de la date renvoyée par SQLite
    const dateFormatted = new Date(item.timestamp + 'Z').toLocaleString('fr-FR', {
      day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit'
    });

    return (
      <View style={styles.historyItem}>
        <Text style={styles.cityName}>{item.cityName}</Text>
        <Text style={styles.date}>{dateFormatted}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dernières recherches</Text>
      
      {history.length === 0 ? (
        <Text style={styles.emptyText}>Aucune recherche récente.</Text>
      ) : (
        <FlatList
          data={history}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}