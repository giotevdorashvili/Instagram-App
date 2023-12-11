import {useColorScheme} from 'react-native';

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

const useScheme = () => {
  const colorScheme = useColorScheme();

  const paperTheme = colorScheme === 'light' ? lightTheme : darkTheme;

  const navigationTheme = {
    ...(colorScheme === 'light' ? DefaultTheme : DarkTheme),
    myOwnProperty: true,
    colors: {
      ...(colorScheme === 'light' ? DefaultTheme : DarkTheme).colors,
      ...paperTheme.colors,
    },
  };

  return {paperTheme, navigationTheme};
};

export default useScheme;

// import {useColorScheme} from 'react-native';
// import {getPaperTheme} from '../../theme/theme';

// const useScheme = () => {
//   const colorScheme = useColorScheme();

//   return getPaperTheme(colorScheme!);
// };

// export default useScheme;
