import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
<<<<<<< HEAD
import { SECRET } from 'src/config';
=======
>>>>>>> 082d2e93d5003affeb3efd51f81c4efae0fe7095

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
<<<<<<< HEAD
      secret: SECRET,
=======
      secret: 'rsvpkey666',
>>>>>>> 082d2e93d5003affeb3efd51f81c4efae0fe7095
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
