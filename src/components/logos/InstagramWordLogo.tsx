import useAppTheme from '../../hooks/theme/useApptheme';
import Logo from '../../assets/instagram-wordmark.svg';

const InstagramWordLogo = ({
  width = 150,
  height = 50,
}: {
  width?: number;
  height?: number;
}) => {
  const {paperTheme} = useAppTheme();

  return (
    <Logo width={width} height={height} fill={paperTheme.colors.tertiary} />
  );
};

export default InstagramWordLogo;
