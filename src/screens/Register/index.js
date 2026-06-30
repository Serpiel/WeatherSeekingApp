import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebaseConfig';
import { loginSchema } from '../../utils/validationSchema';
import { styles } from './styles';

export default function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

const handleRegister = async () => {
    const payload = { email, password };
    const { error } = loginSchema.validate(payload, { abortEarly: false });

    if (error) {
        const formattedErrors = {};
        error.details.forEach((err) => {
            formattedErrors[err.path[0]] = err.message;
        });
        setErrors(formattedErrors);
    } else {
        setErrors({});
        try {
            // Création du compte Firebase
            await createUserWithEmailAndPassword(auth, email, password);
            console.log('Compte créé avec succès !');
            // Redirection automatique gérée par onAuthStateChanged dans AppNavigator
        } catch (err) {
            setErrors({ email: 'Erreur lors de la création. Cet email est peut-être déjà utilisé.' });
        }
    }
};

return (
    <View style={styles.container}>
    <Text style={styles.title}>Créer un compte</Text>

    <TextInput
        style={styles.input}
        placeholder="Adresse email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => {
            setEmail(text);
            setErrors({ ...errors, email: null });
        }}
    />
    {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

    <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry
        value={password}
        onChangeText={(text) => {
            setPassword(text);
            setErrors({ ...errors, password: null });
        }}
    />
    {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

    <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>S'inscrire</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Déjà un compte ? Se connecter</Text>
    </TouchableOpacity>
    </View>
);
}
