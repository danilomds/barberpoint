import { v4 as uuid_v4 } from 'uuid';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

import User from '../../infra/typeorm/entities/User';

class FakeUsersRepository implements IUsersRepository {
  private users: User[] = [];

  public async findById(id: string): Promise<User | undefined> {
    const userID = this.users.find(user => user.id === id);

    return userID;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const userMail = this.users.find(user => user.email === email);

    return userMail;
  }

  public async create(userData: ICreateUserDTO): Promise<User> {
    const user = new User();
    Object.assign(user, { id: uuid_v4() }, userData);

    this.users.push(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    const findIndex = this.users.findIndex(findUser => findUser.id === user.id);

    this.users[findIndex] = user;

    return user;
  }
}

export default FakeUsersRepository;
