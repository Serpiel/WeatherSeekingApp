import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator, View } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebaseConfig';

import RegisterScreen from '../screens/Register';
import LoginScreen from '../screens/Login'; 
import HomeScreen from '../screens/Home';
import HistoryScreen from '../screens/History';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0056b3" />
            </View>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {user ? (
                    <>
                        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Météo Actuelle'}} />
                        <Stack.Screen name="History" component={HistoryScreen} options={{ title: 'Historique' }} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}