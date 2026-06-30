import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { loginSchema } from '../../utils/validationSchema';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebaseConfig';
import { styles } from './styles';

export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleLogin = async () => {
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
                await signInWithEmailAndPassword(auth, email, password);
                console.log('Formulaire valide ! Prêt pour Firebase.', payload);
            } catch (err) {
                setErrors({ email: 'Identifiants incorrects ou compte inexistant.'})
            }
        }
    };

return (
    <View style={styles.container}>
        <Text style={styles.title}>Weather Seeking App</Text>

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

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.linkText}>Pas de compte ? Créez-en un</Text>
        </TouchableOpacity>
    </View>
);
}