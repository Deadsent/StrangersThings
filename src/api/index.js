import axios from "axios";
import { getToken } from "../auth";

const BASE = "https://strangers-things.herokuapp.com/api/2106-UNF-RM-WEB-PT";

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
    const { data } = await axios.post(`${BASE}/users/register`, {
      user: {
        username: username,
        password: password,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/login`, {
      user: {
        username: username,
        password: password,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createPost(title, description, token) {
  console.log(token)
  try {
    const { data } = await axios.post(
      `${BASE}/posts`,
      {
        post: {
          title: title,
          description: description,
          price: '2'
        }
      },
      {
        headers: {
          // Not sure if it is application and token. (Please delete this comment if correct) -Daniel
          "Content-Type": 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      }
    );

    return data;
  } catch (error) {
    throw error;
  }
}

export async function deletePost(id){
  const myToken = getToken()
}