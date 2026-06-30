import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Keyboard } from 'react-native';
import { signOut } from 'firebase/auth';
import { addSearchToHistory, addFavorite, removeFavorite, checkIsFavorite } from '../../database/db';
import { auth } from '../../services/firebaseConfig';
import { fetchWeatherByCity } from '../../services/weatherService';
import { styles } from './styles';

export default function HomeScreen({ navigation }) {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Erreur lors de la déconnexion :', error);
    }
  };

  const handleSearch = async () => {
    if (!city.trim()) return;
    
    Keyboard.dismiss();
    setLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      const data = await fetchWeatherByCity(city);
      setWeatherData(data);
      await addSearchToHistory(data.cityName);
      console.log('${data.cityName} ajouté à l\'historique !');
      const favoriteStatus = await checkIsFavorite(data.cityName);
      setIsFavorite(favoriteStatus);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleFavorite = async () => {
    if (!weatherData) return;

    const cityName = weatherData.cityName;

    if (isFavorite) {
      await removeFavorite(cityName);
      setIsFavorite(false);
    } else {
      await addFavorite(cityName);
      setIsFavorite(true);
    }
  };

  return (
    <View style={styles.container}>
      {/* En-tête avec bouton de déconnexion */}
      <View style={styles.header}>
        <Text style={styles.title}>Météo Actuelle</Text>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.logoutText}>Déconnexion</Text>
        </TouchableOpacity>
      </View>

      {/* Barre de recherche */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Entrez une ville (ex: Paris)"
          value={city}
          onChangeText={setCity}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Chercher</Text>
        </TouchableOpacity>
      </View>

      {/* Gestion des états de chargement et d'erreur */}
      {loading && <ActivityIndicator size="large" color="#0056b3" />}
      {error && <Text style={styles.errorText}>{error}</Text>}

      {/* Affichage de la carte météo si les données sont présentes */}
      {weatherData && (
        <View style={styles.weatherCard}>
          <Text style={styles.cityName}>{weatherData.cityName}</Text>
          <Text style={styles.temperature}>{Math.round(weatherData.temperature)}°C</Text>
          <Text style={styles.conditions}>{weatherData.conditions}</Text>
          
          <View style={styles.detailsContainer}>
            <Text style={styles.detailText}>Humidité : {weatherData.humidity}%</Text>
            <Text style={styles.detailText}>Vent : {weatherData.windSpeed} m/s</Text>
          </View>

          <TouchableOpacity
            style={[styles.favoriteButton, isFavorite && styles.favoriteButtonActive]}
            onPress={handleToggleFavorite}
          >
            <Text style={isFavorite ? styles.favoriteButtonTextActive : styles.favoriteButtonText}>
              {isFavorite ? '★ Retirer des favoris' : '☆ Ajouter aux favoris'}
            </Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity 
        style={styles.navButton} 
        onPress={() => navigation.navigate('History')}
      >
        <Text style={styles.navButtonText}>Historique</Text>
      </TouchableOpacity>
    </View>
  );
}