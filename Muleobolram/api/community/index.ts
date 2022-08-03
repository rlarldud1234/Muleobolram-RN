import {AsyncStorage} from 'react-native';
import {getRequestWithAccessToken} from '../default';
import {uri} from '../uri';

const community = async () => {
  try {
    const token = await AsyncStorage.getItem('accessToken');
    const request = getRequestWithAccessToken(token!);
    const response = await request.get(uri.posts);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default community;
