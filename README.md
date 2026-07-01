# 🌤️ WeatherSeekingApp

Application mobile de visualisation météorologique à l'échelle mondiale.

## 📑 Sommaire
1. [Présentation du projet](#1-présentation-du-projet)
2. [Technologies utilisées](#2-technologies-utilisées)
3. [Fonctionnement](#3-fonctionnement)
4. [Illustrations](#4-illustrations)
5. [Installation & Lancement](#5-installation--lancement)

---

## 1. Présentation du projet
**WeatherSeekingApp** est une application mobile développée en React Native permettant aux utilisateurs de consulter la météo en temps réel de n'importe quelle ville dans le monde. Elle intègre un système d'authentification complet et permet de sauvegarder localement un historique de recherche ainsi qu'une liste de villes favorites.

---

## 2. Technologies utilisées
* **[React Native](https://reactnative.dev/)** : Framework de développement mobile.
* **[Expo](https://expo.dev/)** : Environnement de développement et de test (via Expo Go).
* **[React Navigation](https://reactnavigation.org/)** : Gestion du routage et de la navigation entre les écrans.
* **[Firebase Authentication](https://firebase.google.com/products/auth)** : Backend pour la gestion sécurisée des utilisateurs (Connexion / Inscription / Réinitialisation).
* **[JOI](https://joi.dev/)** : Bibliothèque de validation de données (sécurisation des formulaires).
* **[OpenWeather API](https://openweathermap.org/api)** : API externe fournissant les données météorologiques en temps réel.
* **[Expo SQLite](https://docs.expo.dev/versions/latest/sdk/sqlite/)** : Base de données locale pour la persistance des données.

---

## 3. Fonctionnement
L'application repose sur une architecture combinant des services cloud et locaux :

* **Interface & Environnement :** React Native donne vie à l'application tandis qu'Expo Go permet de la rendre utilisable et testable facilement sur mobile.
* **Authentification sécurisée :** L'application utilise Firebase pour que les utilisateurs possèdent leur propre profil. Lors de l'inscription, la librairie **Joi** vérifie la validité du mot de passe (conformité aux règles strictes : 8 caractères minimum, majuscules, minuscules, chiffres, symboles).
* **Données Météo :** L'API OpenWeather est interrogée via des requêtes HTTP (`Fetch`) pour récupérer les informations climatiques en direct.
* **Stockage Local :** SQLite permet à l'utilisateur de sauvegarder localement sur son téléphone son historique de recherche et ses villes favorites afin d'y accéder plus rapidement.

---

## 4. Illustrations

| Inscription (Register) | Connexion (Login) | MDP (ResetPassword)
|:---:|:---:|:---:|
| <img width="150" height="290" alt="RegisterScreen" src="https://github.com/user-attachments/assets/1bdb936e-c49f-4f21-93f6-7692702fb230" /> | <img width="150" height="290" alt="LoginScreen" src="https://github.com/user-attachments/assets/001499ea-1686-4598-b381-b7b544a81f65" /> | <img width="150" height="290" alt="ResetPasswordScreen" src="https://github.com/user-attachments/assets/8be80b7c-c096-4b27-88c8-7cef344ab989" />


| Accueil (Home) | Historique (History) | Favoris (Favorites) |
|:---:|:---:|:---:|
| <img width="150" height="290" alt="HomeScreen" src="https://github.com/user-attachments/assets/e5eae53a-264c-4a3d-8bdd-e628c896c3ad" /> | <img width="150" height="290" alt="HistoryScreen" src="https://github.com/user-attachments/assets/285374fa-addc-4392-b33e-6da2ee8ff425" /> | <img width="150" height="290" alt="FavoritesScreen" src="https://github.com/user-attachments/assets/eee08a1d-ccad-49df-bfaa-6f68fe9c39aa" /> |

---

## 5. Installation & Lancement

### Pré-requis
* Avoir [Node.js](https://nodejs.org/) installé sur votre machine.
* Avoir installé l'application **Expo Go** sur votre smartphone (disponible sur iOS et Android) ou posséder un émulateur configuré.
* Posséder une clé API OpenWeather et un projet Firebase configuré.
* NPM installé avec les dépendances
* Avoir un fichier .env pour les infos d'API

### Étapes d'installation

**1. Cloner le dépôt et entrer dans le dossier :**
```bash
git clone [URL_DE_TON_REPO_GITHUB]
cd WeatherSeekingApp
```

**2. Démarrer le projet Expo GO :**
```bash
npx expo start
```
