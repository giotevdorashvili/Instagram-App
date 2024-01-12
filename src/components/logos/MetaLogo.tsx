import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

import useAppTheme from '../../hooks/theme/useApptheme';
import Logo from '../../assets/meta-logo.svg';
import {LogoTypes} from './LogoTypes';

const MetaLogo = (props: LogoTypes) => {
  const {paperTheme} = useAppTheme();

  return (
    <View style={styles.metaLogoContainer}>
      <Logo {...props} />

      <Text style={[styles.metaText, {color: paperTheme.colors.logoText}]}>
        Meta
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  metaLogoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  metaText: {
    fontWeight: '500',
    fontSize: 19,
  },
});

export default MetaLogo;
