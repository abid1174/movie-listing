import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ILogin } from './interface/login.interface';
import { IUser } from 'src/user/interface/user.interface';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async loginUser(loginData: ILogin) {
    const user = await this.validateUser(loginData.email, loginData.password);
    return await this.generateTokenByUser(user);
  }

  private async generateTokenByUser(user: IUser) {
    const payload = {
      iat: new Date().getTime(),
      sub: user.id,
      userId: user.id,
    };

    return {
      accessToken: this.generateAccessToken(payload),
      refreshToken: this.generateRefreshToken(payload),
      user: user,
    };
  }

  private generateAccessToken(payload) {
    return this.jwtService.sign(payload, {
      secret: this.configService.get('ACCESS_TOKEN_SECRET'),
      expiresIn: this.configService.get('ACCESS_TOKEN_EXPIRE_TIME'),
    });
  }

  private generateRefreshToken(payload) {
    return this.jwtService.sign(payload, {
      secret: this.configService.get('REFRESH_TOKEN_SECRET'),
      expiresIn: this.configService.get('REFRESH_TOKEN_EXPIRE_TIME'),
    });
  }

  private async validateUser(email: string, password: string): Promise<IUser> {
    const user = await this.userService.findByEmail(email);
    if (!(await user.validatePassword(password))) {
      throw new UnauthorizedException('Invalid email or password!');
    }

    delete user.password;
    return user;
  }
}
