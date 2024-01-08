import {StyleSheet} from 'react-native';
import Animated, {
  clamp,
  withSpring,
  interpolate,
  Extrapolation,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ActivityIndicator} from 'react-native-paper';

import {HomePropTypes} from '../../../navigators/tabNavigator/TabNavigatorTypes';
import useAppTheme from '../../../hooks/theme/useApptheme';
import useFetchPosts from '../../../hooks/services/useFetchPosts';
import NoPostsTitle from './noPostsTitle/NoPostsTitle';
import InstagramWordLogo from '../../../components/logos/InstagramWordLogo';
import {PostTypes} from './HomeTypes';
import {renderItem} from '../../../utils/home/utils';

const Home: React.FC<HomePropTypes> = () => {
  const {data: posts, isLoading} = useFetchPosts();

  const {paperTheme} = useAppTheme();

  const backgroundColor = paperTheme.colors.main;

  const scrollY = useSharedValue(0);

  const handleScroll = useAnimatedScrollHandler({
    onBeginDrag: (event, ctx) => {
      ctx.prevY = event.contentOffset.y;
    },
    onScroll: (event, ctx) => {
      let {y} = event.contentOffset;

      if (y < 0) y = 0;

      const diff = y - ((ctx?.prevY as number) ?? 0);

      scrollY.value = clamp(scrollY.value + diff, 0, 50);

      ctx.prevY = y;
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(scrollY.value, [0, 50], [1, 0.5], Extrapolation.CLAMP),
    transform: [
      {
        translateY: withSpring(
          interpolate(scrollY.value, [0, 50], [0, -50], Extrapolation.CLAMP),
          {overshootClamping: true},
        ),
      },
    ],
    backgroundColor,
  }));

  if (isLoading) return <ActivityIndicator style={styles.container} />;

  return (
    <SafeAreaView style={[styles.container, {backgroundColor}]}>
      <Animated.FlatList
        data={Object.values(posts || {}) as PostTypes[]}
        renderItem={renderItem}
        keyExtractor={item => item.timeStamp.toString()}
        scrollEventThrottle={16}
        // bounces={false}
        onScroll={handleScroll}
        stickyHeaderIndices={[0]}
        ListEmptyComponent={<NoPostsTitle />}
        ListHeaderComponent={
          <Animated.View style={animatedStyle}>
            <InstagramWordLogo />
          </Animated.View>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
