import {useColorScheme} from 'react-native';
import {MD3LightTheme, MD3DarkTheme} from 'react-native-paper';
import {DefaultTheme, DarkTheme} from '@react-navigation/native';

export const lightTheme = {
  ...MD3LightTheme,
  myOwnProperty: true,
  colors: {
    ...MD3LightTheme.colors,
    main: 'white',
    tertiary: 'black',
    primary: 'grey',
    outline: '#d5d8de',
    blue: '#0f71f2',
    lightBlue: '#0f71f2',
    logoText: '#535a5c',
    inputBackgroud: 'white',
    error: '#fa0202',
  },
};

export const darkTheme = {
  ...MD3DarkTheme,
  myOwnProperty: true,
  colors: {
    ...MD3DarkTheme.colors,
    main: 'black',
    tertiary: 'white',
    primary: '#d5d8de',
    blue: '#0f71f2',
    lightBlue: '#40b2f5',
    logoText: 'white',
    inputBackgroud: '#1C2A34',
    error: '#f5515b',
  },
};

const useAppTheme = () => {
  const colorScheme = useColorScheme();

  const paperTheme = colorScheme === 'light' ? lightTheme : darkTheme;
  const navTheme = colorScheme === 'light' ? DefaultTheme : DarkTheme;

  const navigationTheme = {
    ...navTheme,
    myOwnProperty: true,
    colors: {
      ...navTheme.colors,
      ...paperTheme.colors,
    },
  };

  return {paperTheme, navigationTheme};
};

export default useAppTheme;
