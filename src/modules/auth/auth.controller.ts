import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { LoginPayloadDto } from '../auth/dto/login-payload.dto';
import { UserRegisterDto } from '../auth/dto/user-register.dto';
import { UserDto } from '../user/dto/user.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { AuthService } from './auth.service';
import { User } from '../user/model/user.entity';
import { AuthUser } from '../../common/decorators/auth-user.decorator';
import { CommonApiResponse } from '../../common/base/base-api-response.dto';
import { Auth } from '../../common/decorators/auth.decorator';
import { RoleType } from '../../common/constants';

@ApiTags('auth')
@Controller('auth')
@UseGuards(AuthGuard('api-key'))
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ) {}

    @Post('register')
    @ApiOkResponse({ 
        type: UserRegisterDto,
        description: "Successfully registered"
     })
    userRegister(@Body() userRegisterDto: UserRegisterDto): Promise<CommonApiResponse<UserDto>>{
        return this.authService.userRegister(userRegisterDto);
    }

    @Post('login')
    @ApiOkResponse({
        type: LoginPayloadDto,
        description: "User info with access token"
    })
    userLogin(@Body() userLoginDto: UserLoginDto): Promise<CommonApiResponse<LoginPayloadDto>> {
        return this.authService.userLogin(userLoginDto);
    }

    @Get("me")
    @HttpCode(HttpStatus.OK)
    @Auth([RoleType.USER, RoleType.ADMIN])
    @ApiOkResponse({ type: UserDto, description: 'current user info' })
    getCurrentUser(@AuthUser() user: User): CommonApiResponse<UserDto> {
        return this.authService.getCurrentUser(user);
    }
}
