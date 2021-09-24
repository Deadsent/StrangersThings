import axios from "axios";

const BASE = 'https://strangers-things.herokuapp.com/api/2106-UNF-RM-WEB-PT';

export async function getUsers() {
  try {
    const { data } = await axios.get(`${BASE}/users`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function registerUser(username, password) {

  try {
    const { data } = await axios.post(
      `${BASE}/users/register`,
      {},
      {
        username: username,
        password: password,
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(username, password) {
  try {
    const { data } = await axios.post(
      `${BASE}/users/login`,
      {},
      {
        username: username,
        password: password,
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
}
