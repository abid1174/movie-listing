import { UserBaseEntity } from './user-base.entity';
export declare class UserEntity extends UserBaseEntity {
    name: string;
    email: string;
    password: string;
    hashPassword(): Promise<void>;
    createHash(textPassword: string): string;
    validatePassword(password: string): Promise<boolean>;
}
