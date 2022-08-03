import {LoginRequest} from '../../request/login-request';
import {getRequest} from '../default';
import {uri} from '../uri';

const signup = async ({username, password}: LoginRequest): Promise<boolean> => {
  try {
    const request = getRequest();
    await request.post(uri.signup, {username, password});
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default signup;
