const BASE_URL = process.env.REACT_APP_BACKENDAPP || 'http://localhost:3800';

export const LOGIN = `${BASE_URL}/user/login`;

export const SIGNUP = `${BASE_URL}/user`;

export const GET_TASKS = `${BASE_URL}/task`;

export const TASK_BY_ID = (id) => `${BASE_URL}/task/${id}`;
