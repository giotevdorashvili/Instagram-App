import {formatDistanceToNow} from 'date-fns';

import {PostTypes} from '../../screens/tabScreens/home/HomeTypes';
import RenderItem from '../../screens/tabScreens/home/renderItem/RenderItem';

export const calculatePostAge = (milliseconds: number) => {
  const postDate = new Date(milliseconds);

  return formatDistanceToNow(postDate, {addSuffix: true});
};

export const renderItem = ({item}: {item: PostTypes}) => (
  <RenderItem item={item} />
);
