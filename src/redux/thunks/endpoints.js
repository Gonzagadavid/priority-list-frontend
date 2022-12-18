// endpoints para produção, para rodar localmente comente o endpoints abaixo

export const LOGIN = 'https://priority-list-backend-production.up.railway.app/user/login';

export const SIGNUP = 'https://priority-list-backend-production.up.railway.app/user';

export const GET_TASKS = 'https://priority-list-backend-production.up.railway.app/task';

export const TASK_BY_ID = (id) => `https://priority-list-backend-production.up.railway.app/task/${id}`;

// para rodar a aplicação localmente descomente os endpoints abaixo

// export const LOGIN = 'http://localhost:3800/user/login';

// export const SIGNUP = 'http://localhost:3800/user';

// export const GET_TASKS = 'http://localhost:3800/task';

// export const TASK_BY_ID = (id) => `http://localhost:3800/task/${id}`;
