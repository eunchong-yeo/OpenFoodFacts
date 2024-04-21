import { JwtStrategy } from './jswt.strategy';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { UserRepository } from './user.repository';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import * as config from 'config';

const jwtConfig = config.get('jwt');
@Module({
  imports:[
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({
      secret: jwtConfig.secret,
      signOptions:{
        expiresIn: jwtConfig.expiresIn
      }
    }),
    TypeOrmModule.forFeature([User])
  ],
  controllers: [AuthController],
  providers: [AuthService, UserRepository, JwtStrategy],
  exports: [JwtStrategy, PassportModule]
})
export class AuthModule {}
