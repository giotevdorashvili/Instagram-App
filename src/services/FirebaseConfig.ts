import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getStorage} from 'firebase/storage';

// https://firebase.google.com/docs/web/setup#available-libraries

const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyB905lz7eoxAWtyLkGB4G7KCIBbWvhz0nc',
  authDomain: 'instagram-app-d2e25.firebaseapp.com',
  databaseURL: 'https://instagram-app-d2e25-default-rtdb.firebaseio.com',
  projectId: 'instagram-app-d2e25',
  storageBucket: 'instagram-app-d2e25.appspot.com',
  messagingSenderId: '73358836613',
  appId: '1:73358836613:web:1fdc9522afcf9a6e787aec',
};

export const FIREBASE_APP = initializeApp(FIREBASE_CONFIG);
export const FIREBASE_DATABASE = getDatabase(FIREBASE_APP);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const FIREBASE_SRORAGE = getStorage();
