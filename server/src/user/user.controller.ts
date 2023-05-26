import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { Public } from '../auth/decorator/public.decorator';
import { CreateUserDto } from './dto/createUser.dto';
import { plainToInstance } from 'class-transformer';
import { UserResponseDto } from './dto/userResponse.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    // return this.userService.findUser();
  }

  @Post()
  @Public()
  @UsePipes(new ValidationPipe({ transform: true }))
  async signup(@Body() createUserDto: CreateUserDto) {
    return plainToInstance(
      UserResponseDto,
      await this.userService.createUser(createUserDto)
    )
  }
}
