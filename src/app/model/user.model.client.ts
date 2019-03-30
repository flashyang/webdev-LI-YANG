export class User {
  _id: String;
  username: String;
  password: String;
  email: String;
  firstName: String;
  lastName: String;

  constructor(username, password, firstName, lastName) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
  }

}
