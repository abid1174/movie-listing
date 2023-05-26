import { UserResponseDto } from 'src/user/dto/userResponse.dto';
export declare class LoginResponseDto {
    accessToken: string;
    refreshToken: string;
    user: UserResponseDto;
}
