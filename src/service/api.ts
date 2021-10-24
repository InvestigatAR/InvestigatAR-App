import axios from "axios";

import { API_URL } from "../constants";

export const signin = (props: any, username: string, password: string) => {
    const data = JSON.stringify({
        username: username,
        password: password
    });

    const config: any = {
        method: "post",
        url: `${API_URL}/api/v1/auth/signin`,
        headers: {
            "Content-Type": "application/json"
        },
        data: data
    };

    return axios(config);
};

export const signup = (
    props: any,
    username: string,
    name: string,
    email: string,
    password: string
) => {
    const data = JSON.stringify({
        username: username.trim(),
        name: name.trim(),
        email: email.trim(),
        password: password.trim(),
        roles: ["user"]
    });

    const url = `${API_URL}/api/v1/auth/signup`;

    console.log("made sign up request to ", url);
    console.log("data sent", data);

    const config: any = {
        method: "post",
        url: url,
        headers: {
            "Content-Type": "application/json"
        },
        data: data
    };

    return axios(config);
};

export const refresh = (props: any) => {
    const data = JSON.stringify({
        refreshToken: props.userSession.current.refreshToken.token
    });

    const config: any = {
        method: "post",
        url: `${API_URL}/api/v1/auth/refresh`,
        headers: {
            "Content-Type": "application/json"
        },
        data: data
    };

    return axios(config);
};

export const predict = (base64: string) => {
    const data = JSON.stringify({
        b64: base64
    });

    const config: any = {
        method: "post",
        url: `https://0247-2610-148-1f02-3000-d102-900a-186c-8bd9.ngrok.io/predict/`,
        headers: {
            "Content-Type": "application/json"
        },
        data: data
    };

    return axios(config);
};

export const getProduct = (props: any, queryParams: string) => {
    const url = `${API_URL}/api/v1/product/get` + queryParams;

    console.log("making get product request to ", url);
    console.log(
        "using access token",
        props.userSession.current.accessToken.token
    );

    const config: any = {
        method: "get",
        url: url,
        headers: {
            Authorization: `Bearer ${props.userSession.current.accessToken.token}`,
            "Content-Type": "application/json"
        }
    };

    return axios(config);
};

export const createReview = (
    props: any,
    rating: number,
    description: string,
    productId: string
) => {
    const data = JSON.stringify({
        rating: rating,
        description: description,
        productId: productId
    });

    const url = `${API_URL}/api/v1/review/set`;
    const accessToken = props.userSession.current.accessToken.token;

    console.log("making create review request to ", url);
    console.log("using access token", accessToken);

    console.log("data sent", data);

    const config: any = {
        method: "post",
        url: url,
        headers: {
            Authorization: `Bearer ${props.userSession.current.accessToken.token}`,
            "Content-Type": "application/json"
        },
        data: data
    };

    return axios(config);
};
