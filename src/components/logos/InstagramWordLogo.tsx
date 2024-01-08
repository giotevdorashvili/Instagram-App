import useAppTheme from '../../hooks/theme/useApptheme';
import Logo from '../../assets/instagram-wordmark.svg';

const InstagramWordLogo = () => {
  const {paperTheme} = useAppTheme();

  return <Logo width={150} height={50} fill={paperTheme.colors.tertiary} />;
};

export default InstagramWordLogo;
