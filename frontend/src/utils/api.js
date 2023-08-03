
class Api {
  constructor(userID, url) {
    this._user = userID;
    this._url = url;
  }

  _checkingTheServerResponse(res) {
    if (res.ok) {
      return res.json();
    }
    else return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._url}cards`, {
      method: "GET",
      headers: {
        authorization: this._user
      }
    })
      .then(this._checkingTheServerResponse)
  }

  setNewCard(cardData) {
    return fetch(`${this._url}cards`, {
      method: "POST",
      headers: {
        authorization: this._user,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: cardData.name,
        link: cardData.link
      })
    })
    .then(this._checkingTheServerResponse)
  }

  getUserInfo() {
    return fetch(`${this._url}users/me`, {
      method: "GET",
      headers: {
        authorization: this._user
      }
    })
    .then(this._checkingTheServerResponse)
  }

  setUserInfo(userInfo) {
    return fetch(`${this._url}users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._user,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: userInfo.name,
        about: userInfo.about
      })
    })
      .then(this._checkingTheServerResponse)
  }

  setAvatar(userInfo) {
    return fetch(`${this._url}users/me/avatar `, {
      method: "PATCH",
      headers: {
        authorization: this._user,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: userInfo.avatar
      })
    })
      .then(this._checkingTheServerResponse)
  }

  changeLikeCardStatus(cardId, isLiked) {
    return fetch(`${this._url}cards/${cardId}/likes`, {
      method: `${!isLiked ? 'DELETE' : 'PUT'}`,
      headers: {
        authorization: this._user,
        'Content-Type': 'application/json'
      }
    })
      .then(this._checkingTheServerResponse)
  }

  deleteCard(cardId) {
    return fetch(`${this._url}cards/${cardId} `, {
      method: "DELETE",
      headers: {
        authorization: this._user,
        'Content-Type': 'application/json'
      }
    })
      .then(this._checkingTheServerResponse)
  }
}

const api = new Api('06e18fd4-8469-488a-86d3-e71284eb84c0', 'https://mesto.nomoreparties.co/v1/cohort-65/');


export default api;