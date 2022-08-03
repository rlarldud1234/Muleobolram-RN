import {getRequest} from '../default';
import {uri} from '../uri';
import {AsyncStorage} from 'react-native';
import {LoginRequest} from '../../request/login-request';

const login = async ({username, password}: LoginRequest): Promise<boolean> => {
  try {
    const request = getRequest();
    const response = await request.post(uri.login, {
      username,
      password,
    });
    AsyncStorage.setItem('accessToken', response.data.accessToken);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
export default login;
