import { Exclude, Expose } from 'class-transformer';
import { UserResponseDto } from 'src/user/dto/userResponse.dto';

@Exclude()
export class LoginResponseDto {
  @Expose()
  accessToken: string;

  @Expose()
  refreshToken: string;

  @Expose()
  user: UserResponseDto;
}
