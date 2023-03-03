import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
console.log(IS_DEV, API);
export const $api = axios.create({
  baseURL: API,
  headers: {
    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) ?? ''
  }
});
