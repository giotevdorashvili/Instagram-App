import {MD3LightTheme, MD3DarkTheme} from 'react-native-paper';
import {DefaultTheme, DarkTheme} from '@react-navigation/native';

export const lightTheme = {
  ...MD3LightTheme,
  myOwnProperty: true,
  colors: {
    ...MD3LightTheme.colors,
  },
};

export const darkTheme = {
  ...MD3DarkTheme,
  myOwnProperty: true,
  colors: {
    ...MD3DarkTheme.colors,
  },
};

export const getPaperTheme = (mode: string) => {
  return mode === 'light' ? lightTheme : darkTheme;
};

export const getNavigationTheme = (mode: string) => {
  const NavigationTheme = mode === 'light' ? DefaultTheme : DarkTheme;

  return {
    ...NavigationTheme,
    myOwnProperty: true,
    colors: {
      ...NavigationTheme.colors,
      ...getPaperTheme(mode).colors,
    },
  };
};
