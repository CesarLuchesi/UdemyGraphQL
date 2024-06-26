/* eslint-disable prettier/prettier */
import fetch from 'node-fetch';

const API_URL = process.env.API_URL;

const get = (endPoint, urlParam, requestInit = {}) => {
  const url =
    API_URL + '/' + endPoint + '?' + new URLSearchParams(urlParam).toString();
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...requestInit,
  });
};

const post = (endPoint, body, requestInit = {}) => {
  const url = API_URL + '/' + endPoint;
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...requestInit,
  });
};

const put = (endPoint, body, requestInit = {}) => {
  const url = API_URL + '/' + endPoint;
  return fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...requestInit,
  });
};

const patch = (endPoint, body, requestInit = {}) => {
    const url = API_URL + '/' + endPoint;
    return fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      ...requestInit,
    });
  };

  const delet = (endPoint, body, requestInit = {}) => {
    const url = API_URL + '/' + endPoint;
    return fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      ...requestInit,
    });
  };

(async () => {
  //GET
  //   const userGetResponse = await get('users/502');
  //   const user = await userGetResponse.json();
  //   console.log(user);
  
//   Post
    // const userResponse = await post('users', {
    //   id: '6000',
    //   firstName: 'CRIADO - Márcia',
    //   lastName: 'CRIADO - Carvalho',
    //   userName: 'CRIADO - marcia_carvalho81',
    //   indexRef: 1,
    //   createdAt: '2016-12-08T00:49:39.870Z',
    // });
    // const user = await userResponse.json();
    // console.log(user);

  // PUT -> atualizar todo o objeto
  //   const userResponse = await put('users/6000', {
  //     firstName: 'EDITADO COM PUT - Márcia',
  //   });
  //   const user = await userResponse.json();
    //   console.log(user);

    //patch -> atualizar o objeto parcialmente 
//     const userResponse = await patch('users/6000', {
//     firstName: 'EDITADO COM PATCH - Márcia',
//   });
//   const user = await userResponse.json();
//   console.log(user);

//DELETE
const userResponse = await delet('users/6000');
  const user = await userResponse.json();
  console.log(user);
})();
