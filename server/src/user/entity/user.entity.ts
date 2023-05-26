import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UserBaseEntity } from './user-base.entity';

@Entity('users')
export class UserEntity extends UserBaseEntity {
  @Column({ nullable: true, type: 'varchar' })
  name: string;

  @Column({ unique: true, nullable: false, type: 'varchar' })
  email: string;

  @Column({ nullable: false, type: 'varchar' })
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = this.createHash(this.password);
  }

  createHash(textPassword: string) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(textPassword, salt);
  }

  async validatePassword(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
  }
}
