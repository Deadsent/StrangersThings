import axios from 'axios';

const BASE = 'https://jsonplace-univclone.herokuapp.com'
/*Example With Axios*/
export async function getUsers() {
  try {
    const { data } = await axios.get(`${ BASE }/users`);
    return data;
  } catch (error) {
    throw error;
  }
}