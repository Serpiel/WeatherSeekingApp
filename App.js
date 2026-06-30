import React, { useEffect } from 'react';
import AppNavigator from './src/navigation/appNavigator';
import { initDB } from './src/database/db';

export default function App() {

  useEffect(() => {
    initDB();
  }, []);

  return <AppNavigator />;
}