const API_KEY = process.env.EXPO_PUBLIC_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherByCity = async (city) => {
    try {
        // units=metric permet d'avoir la température en Celsius et la vitesse en m/s
        // lang=fr permet d'avoir la description des conditions climatiques en français
        const response = await fetch(
            `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=fr`
        );

        if (!response.ok) {
            if (response.status === 404) {
            throw new Error("La ville saisie est introuvable.");
            }
            throw new Error("Erreur lors de la récupération des données météorologiques.");
        }

        const data = await response.json();
        
        // On formate les données pour ne renvoyer que ce dont on a besoin
        return {
            cityName: data.name,
            temperature: data.main.temp,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            conditions: data.weather[0].description,
        };
    } catch (error) {
    // Gestion spécifique de l'erreur réseau (si le fetch échoue totalement)
    if (error.message === "Failed to fetch" || error.message.includes("Network")) {
        throw new Error("Problème réseau. Vérifiez votre connexion internet.");
    }
    // Sinon on renvoie l'erreur générée au-dessus
    throw error;
    }
};