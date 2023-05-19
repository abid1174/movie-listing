import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}

  createUser() {
    const newUser = this.usersRepository.create({
      name: 'Abid',
      email: 'abid@gmail.com',
    });
    return this.usersRepository.save(newUser);
  }

  findUser() {
    return [];
  }
}
