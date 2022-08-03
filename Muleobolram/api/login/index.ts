import {getRequest} from '../default';
import {uri} from '../uri';
import {AsyncStorage} from 'react-native';
import {LoginRequest} from '../../request/login-request';

export const login = async (loginRequest: LoginRequest): Promise<boolean> => {
  try {
    const request = getRequest();
    const response = await request.post(uri.login, {loginRequest});
    AsyncStorage.setItem('access_token', response.data.access_token);
    AsyncStorage.setItem('refresh_token', response.data.refresh_token);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
