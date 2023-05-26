import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { plainToInstance } from 'class-transformer';
import { LoginResponseDto } from './dto/loginResponse.dto';
import { Public } from './decorator/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @Public()
  async login(@Body() loginDto: LoginDto) {
    return plainToInstance(
      LoginResponseDto,
      await this.authService.loginUser(loginDto),
    );
  }
}
