import {PostTypes} from '../../screens/tabScreens/home/HomeTypes';
import RenderItem from '../../screens/tabScreens/home/renderItem/RenderItem';

export const calculatePostAge = (milliseconds: number) => {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(weeks / 4);
  const years = Math.floor(months / 12);

  let postAge;

  if (seconds < 60) {
    postAge = seconds < 2 ? 'Just now' : `${seconds} seconds ago`;
  } else if (minutes < 60) {
    postAge = `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
  } else if (hours < 24) {
    postAge = `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
  } else if (days < 7) {
    postAge = `${days} ${days === 1 ? 'day' : 'days'} ago`;
  } else if (weeks < 4) {
    postAge = `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
  } else if (months < 12) {
    postAge = `${months} ${months === 1 ? 'month' : 'months'} ago`;
  } else {
    postAge = `${years} ${years === 1 ? 'year' : 'years'} ago`;
  }

  return postAge;
};

export const renderItem = ({item}: {item: PostTypes}) => (
  <RenderItem item={item} />
);
