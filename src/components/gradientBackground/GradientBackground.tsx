import {StyleSheet, useColorScheme, ColorSchemeName} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const lightGradientColors = ['#FFF9F1', '#FCF0F8', '#EDF5FF', '#FFF9F1'];
const darkGradientColors = ['#173027', '#201F27', '#10212F', '#173027'];

const GetgradientProps = (colorScheme: ColorSchemeName) => {
  return {
    colors: colorScheme === 'light' ? lightGradientColors : darkGradientColors,
    start: {x: 0, y: 0.01},
    end: {x: 1, y: 0.85},
    locations: [0.01, 0.15, 0.8, 1],
  };
};

const GradientBackground = ({children}: {children: JSX.Element}) => {
  const colorScheme = useColorScheme();

  const gradientProps = GetgradientProps(colorScheme);

  return (
    <LinearGradient style={styles.linearGradient} {...gradientProps}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});

export default GradientBackground;
