import * as bcrypt from 'bcryptjs';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private jwtService: JwtService
    ){}

    async sighUp(authCredentialsDto: AuthCredentialsDto): Promise<void>{
        return this.userRepository.createUser(authCredentialsDto);
    }

    async sighIn(authCredentialsDto : AuthCredentialsDto): Promise<{accessToken: string}>{
        const { username, password} = authCredentialsDto;
        const user = await this.userRepository.findOne({where: {username}});
        if(user && (await bcrypt.compare(password, user.password))){
            // 유저 토큰 생성(secret + payload)
            const payload = {username};
            const accessToken = await this.jwtService.sign(payload);

            return {accessToken: accessToken};
        }else{
            throw new UnauthorizedException('login failed');
        }
    }
}
