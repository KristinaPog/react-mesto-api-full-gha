export const BASE_URL = 'https://api.pogodina.nomoreparties.co';

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((res)=>{
    if (res.ok) {
      return res.json();
    }
    else return Promise.reject(`Ошибка: ${res.status}`);
  })
}; 

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((res)=>{
    if (res.ok) {
      return res.json();
    }
    else return Promise.reject(`Ошибка: ${res.status}`);
  })
}; 

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
  .then((res)=>{
    if (res.ok) {
      return res.json();
    }
    else return Promise.reject(`Ошибка: ${res.status}`);
  })
} 