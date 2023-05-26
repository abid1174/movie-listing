import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { Repository } from 'typeorm';
import { IUser } from './interface/user.interface';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUserData: CreateUserDto) {
    try {
      const userExists = await this.usersRepository.findOne({
        where: { email: createUserData.email },
      });

      if (userExists) throw new BadRequestException('User already exists!');

      const newUser = this.usersRepository.create(createUserData);
      return await this.usersRepository.save(newUser);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findByEmail(email: string): Promise<IUser> {
    try {
      const user = await this.usersRepository.findOne({
        where: { email },
      });

      if (!user) {
        throw new NotFoundException('User not found!');
      }

      return user;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
