import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  pairContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginHorizontal: 10,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 100,
  },
  username: {
    fontWeight: '500',
  },
  postImage: {
    height: Dimensions.get('window').height / 2.2,
    marginVertical: 10,
  },
  postText: {
    fontWeight: '500',
    fontSize: 15,
  },
  inputOutline: {
    borderWidth: 0,
  },
  inputContent: {
    marginLeft: -15,
  },
  commentAvatar: {
    height: 35,
    width: 35,
    borderRadius: 100,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  iconButton: {
    margin: 0,
  },
  heartIconContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    position: 'absolute',
  },
  heartIcon: {
    width: 200,
    height: 200,
  },
});
