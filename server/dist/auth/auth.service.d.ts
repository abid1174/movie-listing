import { ILogin } from './interface/login.interface';
import { IUser } from 'src/user/interface/user.interface';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private userService;
    private jwtService;
    private configService;
    constructor(userService: UserService, jwtService: JwtService, configService: ConfigService);
    loginUser(loginData: ILogin): Promise<{
        accessToken: string;
        refreshToken: string;
        user: IUser;
    }>;
    private generateTokenByUser;
    private generateAccessToken;
    private generateRefreshToken;
    private validateUser;
}
