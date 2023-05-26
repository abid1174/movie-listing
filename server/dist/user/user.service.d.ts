import { UserEntity } from './entity/user.entity';
import { Repository } from 'typeorm';
import { IUser } from './interface/user.interface';
import { CreateUserDto } from './dto/createUser.dto';
export declare class UserService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<UserEntity>);
    createUser(createUserData: CreateUserDto): Promise<UserEntity>;
    findByEmail(email: string): Promise<IUser>;
}
