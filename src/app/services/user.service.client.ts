import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
  constructor() { }

  users = [
    {_id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder'},
    {_id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley'},
    {_id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia' },
    {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi' }
  ];

  createUser(user) {
    const new_user = {
      _id: (new Date()).getTime() + '',
      username: user.username,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName
    };

    this.users.push(new_user);
  }

  findUserById(userId) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        return this.users[x];
      }
    }
  }

  findUserByUsername(username) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].username === username) {
        return this.users[x];
      }
    }
  }

  findUserByCredentials(username, password) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].username === username && this.users[x].password === password) {
        return this.users[x];
      }
    }
  }

  updateUser(user) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === user._id) {
        this.users[x].firstName = user.firstName;
        this.users[x].lastName = user.lastName;
        return this.users[x];
      }
    }
  }

  deleteUser(userId) {
    for (const i in this.users) {
      if (this.users[i]._id === userId) {
        const j = +i;
        this.users.splice(j, 1);
      }
    }
  }

}
