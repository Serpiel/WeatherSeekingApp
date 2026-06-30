import * as SQLite from 'expo-sqlite';

// Ouvre (ou crée) la base de données
const openDatabase = async () => {
    return await SQLite.openDatabaseAsync('weatherApp.db');
};

// Initialisation des tables
export const initDB = async () => {
    try {
        const db = await openDatabase();
        
        // Table pour l'historique des recherches
        await db.execAsync(`
        CREATE TABLE IF NOT EXISTS history (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            cityName TEXT NOT NULL,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        );
        `);

        // Table pour les villes favorites
        await db.execAsync(`
        CREATE TABLE IF NOT EXISTS favorites (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            cityName TEXT NOT NULL UNIQUE
        );
        `);
        
        console.log('Base de données SQLite initialisée avec succès.');
    } catch (error) {
        console.error('Erreur lors de l\'initialisation de la base de données :', error);
    }
};

// ==========================================
// FONCTIONS POUR L'HISTORIQUE
// ==========================================

export const addSearchToHistory = async (cityName) => {
    try {
        const db = await openDatabase();
        await db.runAsync('INSERT INTO history (cityName) VALUES (?)', cityName);
    } catch (error) {
    console.error('Erreur lors de l\'ajout à l\'historique :', error);
    }
};

export const getHistory = async () => {
    try {
        const db = await openDatabase();
        // On récupère les 10 dernières recherches
        const allRows = await db.getAllAsync('SELECT * FROM history ORDER BY timestamp DESC LIMIT 10');
        return allRows;
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'historique :', error);
        return [];
    }
};

// ==========================================
// FONCTIONS POUR LES FAVORIS
// ==========================================

export const checkIsFavorite = async (cityName) => {
    try {
        const db = await openDatabase();
        const result = await db.getFirtAsync('SELECT * FROM favorites WHERE cityName = ?', cityName);
        return result !== null;
    } catch (error) {
        console.error('Erreur lors de la vérification du favori :', error);
        return false;
    }
};
export const addFavorite = async (cityName) => {
    try {
        const db = await openDatabase();
        // INSERT OR IGNORE permet d'éviter les doublons grâce au paramètre UNIQUE de la table
        await db.runAsync('INSERT OR IGNORE INTO favorites (cityName) VALUES (?)', cityName);
    } catch (error) {
        console.error('Erreur lors de l\'ajout aux favoris :', error);
    }
};

export const removeFavorite = async (cityName) => {
    try {
        const db = await openDatabase();
        await db.runAsync('DELETE FROM favorites WHERE cityName = ?', cityName);
    } catch (error) {
        console.error('Erreur lors de la suppression du favori :', error);
    }
};

export const getFavorites = async () => {
    try {
        const db = await openDatabase();
        const allRows = await db.getAllAsync('SELECT * FROM favorites ORDER BY cityName ASC');
        return allRows;
    } catch (error) {
        console.error('Erreur lors de la récupération des favoris :', error);
        return [];
    }
};