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
import {ActivityIndicator, Text} from 'react-native-paper';

import {TabScreenProps} from '../../../navigators/tabNavigator/TabNavigatorTypes';
import useAppTheme from '../../../hooks/theme/useApptheme';
import useFetchUserPosts from '../../../hooks/services/useFetchUserPosts';
import NoPostsTitle from './noPostsTitle/NoPostsTitle';
import InstagramWordLogo from '../../../components/logos/InstagramWordLogo';
import {renderItem} from '../../../utils/home/utils';

const Home: React.FC<TabScreenProps<'Home'>> = () => {
  const {
    data,
    isLoading,
    error,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useFetchUserPosts();

  const postsData = data?.pages
    ?.flatMap(el => el.data)
    .filter(el => typeof el !== 'number');

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

  const handleIncreasePage = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  if (isLoading) return <ActivityIndicator style={styles.container} />;

  if (error)
    return <Text style={{flex: 1, marginTop: 50}}>{error.message}</Text>;

  return (
    <SafeAreaView style={[styles.container, {backgroundColor}]}>
      <Animated.FlatList
        data={postsData}
        renderItem={renderItem}
        keyExtractor={item => item.timeStamp.toString()}
        scrollEventThrottle={16}
        // bounces={false}
        onScroll={handleScroll}
        onEndReached={handleIncreasePage}
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
