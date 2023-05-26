import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';
import { UserResponseDto } from './dto/userResponse.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(): void;
    signup(createUserDto: CreateUserDto): Promise<UserResponseDto>;
}
