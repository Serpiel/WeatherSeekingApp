import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Keyboard } from 'react-native';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../services/firebaseConfig';
import { styles } from './styles';

export default function ForgotPasswordScreen({ navigation }) {
    const [email, setEmail] = useState('');

    const handleResetPassword = async () => {
        if (!email.trim()) {
            Alert.alert('Erreur', 'Veuillez entrer votre adresse email.');
            return;
        }

        Keyboard.dismiss();

        try {
            await sendPasswordResetEmail(auth, email);
            Alert.alert(
                'Email envoyé !', 
                'Vérifiez votre boîte de réception (et vos spams) pour réinitialiser votre mot de passe.',
                [{ text: 'OK', onPress: () => navigation.navigate('Login') }]
            );
        } catch (error) {
            console.error('Erreur réinitialisation :', error);
            if (error.code === 'auth/user-not-found') {
                Alert.alert('Erreur', 'Aucun compte ne correspond à cet email.');
            } else if (error.code === 'auth/invalid-email') {
                Alert.alert('Erreur', 'Le format de l\'email est invalide.');
            } else {
                Alert.alert('Erreur', 'Une erreur est survenue. Veuillez réessayer.');
            }
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mot de passe oublié ?</Text>
            <Text style={styles.subtitle}>
                Entrez votre adresse email et nous vous enverrons un lien pour réinitialiser votre mot de passe.
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Adresse email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />

            <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
                <Text style={styles.buttonText}>Envoyer le lien</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.linkText}>Retour à la connexion</Text>
            </TouchableOpacity>
        </View>
    );
}