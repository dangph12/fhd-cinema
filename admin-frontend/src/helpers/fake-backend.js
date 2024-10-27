import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
const mock = new MockAdapter(axios);
export const fakeUsers = [{
  id: '1',
  email: 'user@demo.com',
  username: 'demo_user',
  password: '123456',
  firstName: 'Demo',
  lastName: 'Mannatthemes',
  role: 'User',
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtYW5uYXR0aGVtZXMiLCJpYXQiOjE1ODczNTY2NDksImV4cCI6MTkwMjg4OTQ0OSwiYXVkIjoibWFubmF0dGhlbWVzLmNvbSIsInN1YiI6InN1cHBvcnRAbWFubmF0dGhlbWVzLmNvbSIsImxhc3ROYW1lIjoiVGhlbWUiLCJFbWFpbCI6InN1cHBvcnRAbWFubmF0dGhlbWVzLmNvbSIsIlJvbGUiOiJBZG1pbiIsImZpcnN0TmFtZSI6Ik1hbm5hdCJ9.8f2Rh6LjOVLJnTCAYsMtKWpcieXQiEqPEe7o97r0P3M'
}, {
  id: '2',
  email: 'demo_admin@demo.com',
  username: 'demo_admin',
  password: '123456',
  firstName: 'Admin',
  lastName: 'Mannatthemes',
  role: 'Admin',
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtYW5uYXR0aGVtZXMiLCJpYXQiOjE1ODczNTY2NDksImV4cCI6MTkwMjg4OTQ0OSwiYXVkIjoibWFubmF0dGhlbWVzLmNvbSIsInN1YiI6InN1cHBvcnRAbWFubmF0dGhlbWVzLmNvbSIsImxhc3ROYW1lIjoiVGhlbWUiLCJFbWFpbCI6InN1cHBvcnRAbWFubmF0dGhlbWVzLmNvbSIsIlJvbGUiOiJBZG1pbiIsImZpcnN0TmFtZSI6Ik1hbm5hdCJ9.8f2Rh6LjOVLJnTCAYsMtKWpcieXQiEqPEe7o97r0P3M'
}];
export default function configureFakeBackend() {
  mock.onPost('/login').reply(function (config) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return new Promise(function (resolve, _reject) {
      setTimeout(function () {
        // get parameters from post request
        const params = JSON.parse(config.data);
        // find if any user matches login credentials
        const filteredUsers = fakeUsers.filter(user => {
          return user.username === params.email && user.password === params.password;
        });
        debugger
        if (filteredUsers.length) {
          // if login details are valid return user details and fake jwt token
          const user = filteredUsers[0];
          resolve([200, user]);
        } else {
          // else return error
          resolve([401, {
            error: 'Username or password is incorrect'
          }]);
        }
      }, 1000);
    });
  });
}