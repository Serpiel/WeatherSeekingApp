*PRESENTATION DU PROJET*
---
Application de visualisation météorologique à l'échelle mondiale.


Technologies utilisées :
- React native => Framework
- React Navigation => feature
- Firebase => back-end
- JOI => data validation
- Expo Go => environnement
- VS Code => IDE
- OpenWeather => API
- SQLite => BDD locale
- git/github => mise en ligne


Fonctionnement :

Expo GO sert à rendre l'application utilisable sur mobile, React native permet de donner vie à l'appli.
L'application utilise Firebase pour la partie authentification (Connexion/Inscription), afin que les gens puissent avoir leur propre profil.
JOI permet de sécuriser les mots de passe en vérifiant la validité (conformité au REGEX -> 8 caractères minimum, majuscules, minuscules, chiffres, symboles).
L'API OpenWeather va chercher les informations météorologiques en direct sur leur base afin d'avoir toutes les données.
SQLite permet à l'utilisateur de sauvegarder localement son historique ou ses favoris afin de retrouver plus facilement les météos qu'il souhaite.
La combinaison de toute ça donne donc mon application : WeatherSeekingApp.


Illusatrations :

Inscription (RegisterScreen)

<img width="150" height="290" alt="image" src="https://github.com/user-attachments/assets/1bdb936e-c49f-4f21-93f6-7692702fb230" />

---

Connection (LoginScreen)

<img width="150" height="290" alt="image" src="https://github.com/user-attachments/assets/001499ea-1686-4598-b381-b7b544a81f65" />

---

Accueil (HomeScreen)

<img width="150" height="290" alt="image" src="https://github.com/user-attachments/assets/e5eae53a-264c-4a3d-8bdd-e628c896c3ad" />

---

Historique (HistoryScreen)

<img width="150" height="290" alt="image" src="https://github.com/user-attachments/assets/285374fa-addc-4392-b33e-6da2ee8ff425" />

---

Favoris (FavoritesScreen)

<img width="150" height="290" alt="image" src="https://github.com/user-attachments/assets/eee08a1d-ccad-49df-bfaa-6f68fe9c39aa" />

