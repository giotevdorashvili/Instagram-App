import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ActivityIndicator} from 'react-native-paper';
import Animated, {
  clamp,
  withSpring,
  interpolate,
  Extrapolation,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';

import {TabScreenProps} from '../../../navigators/tabNavigator/TabNavigatorTypes';
import useAppTheme from '../../../hooks/theme/useApptheme';
import useFetchUserPosts from '../../../hooks/services/useFetchUserPosts';
import NoPostsTitle from './noPostsTitle/NoPostsTitle';
import InstagramWordLogo from '../../../components/logos/InstagramWordLogo';
import {renderItem} from '../../../utils/home/utils';
import {useMemo} from 'react';
import StatusBar from '../../../components/statusBar/StatusBar';

const Home: React.FC<TabScreenProps<'Home'>> = () => {
  const {
    data,
    isLoading,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useFetchUserPosts();

  const postsData = useMemo(
    () =>
      data?.pages?.flatMap(el => el.data).filter(el => typeof el !== 'number'),
    [data?.pages],
  );

  const {paperTheme} = useAppTheme();

  const backgroundColor = paperTheme.colors.main;

  const scrollY = useSharedValue(0);

  const handleScroll = useAnimatedScrollHandler({
    onScroll: (event, ctx) => {
      let {y} = event.contentOffset;

      if (y < 0) y = 0;

      const diff = y - ((ctx?.prevY as number) ?? 0);

      scrollY.value = clamp(scrollY.value + diff, 0, 50);

      ctx.prevY = y;
    },
  });

  const handleIncreasePage = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

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
      <StatusBar />

      <Animated.FlatList
        data={postsData}
        renderItem={renderItem}
        keyExtractor={item => item.timeStamp.toString()}
        scrollEventThrottle={16}
        onScroll={handleScroll}
        onEndReached={handleIncreasePage}
        stickyHeaderIndices={[0]}
        ListEmptyComponent={<NoPostsTitle />}
        ListHeaderComponent={
          <Animated.View style={animatedStyle}>
            <InstagramWordLogo
              width={150}
              height={50}
              fill={paperTheme.colors.tertiary}
            />
          </Animated.View>
        }
        ListFooterComponent={isFetching ? <ActivityIndicator /> : null}
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
