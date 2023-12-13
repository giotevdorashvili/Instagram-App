import {StatusBar as NativeStatusBar, useColorScheme} from 'react-native';
import useAppTheme from '../../hooks/theme/useApptheme';

const StatusBar = () => {
  const colorScheme = useColorScheme();

  const {paperTheme} = useAppTheme();

  return (
    <NativeStatusBar
      backgroundColor={paperTheme.colors.surface}
      barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'}
    />
  );
};

export default StatusBar;
