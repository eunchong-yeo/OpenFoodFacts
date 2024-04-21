import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { AuthService } from './auth.service';
import { Controller, Post, Body, ValidationPipe, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'
@Controller('auth')
export class AuthController {
    constructor( private authService: AuthService){}

    @Post('/signup')
    signUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<void>{
        return this.authService.sighUp(authCredentialsDto);
    }
    @Post('/signin')
    signIn(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<{accessToken: string}>{
        return this.authService.sighIn(authCredentialsDto);
    }
    @Post('/test')
    @UseGuards(AuthGuard())
    test(@Req() req){
        console.log('req',req.user);
    }
}
