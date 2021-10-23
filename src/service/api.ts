import axios from 'axios';

import {API_URL} from '../constants';

export const signin = (props: any, username: string, password: string) => {
  const data = JSON.stringify({
    username: username,
    password: password,
  });

  const config: any = {
    method: 'post',
    url: `${API_URL}/api/v1/auth/signin`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };

  console.log(config);

  return axios(config);
};

export const signup = (
  props: any,
  username: string,
  name: string,
  email: string,
  password: string,
) => {
  const data = JSON.stringify({
    username: username,
    name: name,
    email: email,
    password: password,
    roles: ['user'],
  });

  const config: any = {
    method: 'post',
    url: `${API_URL}/api/v1/auth/signup`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };

  return axios(config);
};

export const refresh = (props: any) => {
  const data = JSON.stringify({
    refreshToken: props.userSession.refreshToken.token,
  });

  const config: any = {
    method: 'post',
    url: `${API_URL}/api/v1/auth/refresh`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };

  return axios(config);
};

export const getProduct = (
  props: any,
  id?: any,
  category?: any,
  sortBySus: boolean = true,
) => {
  const params: any = {
    sortBySus: sortBySus,
  };

  if (category !== undefined) {
    params.category = category;
  }

  if (id !== undefined) {
    params.id = id;
  }

  const data = JSON.stringify({
    query: '',
    variables: params,
  });

  const config: any = {
    method: 'get',
    url: `${API_URL}/api/v1/product/get`,
    headers: {
      Authorization: `Bearer ${props.userSession.accessToken.token}`,
      'Content-Type': 'application/json',
    },
    data: data,
  };

  return axios(config);
};

export const createReview = (
  props: any,
  rating: number,
  description: string,
  productId: string,
) => {
  const data = JSON.stringify({
    rating: rating,
    description: description,
    productId: productId,
  });

  const config: any = {
    method: 'post',
    url: `${API_URL}/api/v1/review/set`,
    headers: {
      Authorization: `Bearer ${props.userSession.accessToken.token}`,
      'Content-Type': 'application/json',
    },
    data: data,
  };

  return axios(config);
};
