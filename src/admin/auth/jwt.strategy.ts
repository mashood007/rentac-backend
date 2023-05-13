//src/auth/jwt.strategy.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtSecret } from './auth.module';
import { AdminUsersService } from '../admin_users/admin_users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(private adminUsersService: AdminUsersService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreEXpiration: false,
            secretOrKey: jwtSecret,
        });
    }

    async validate(payload: { userId: number }) {
        const user = await this.adminUsersService.findOne(payload.userId);
        if (!user) {
            throw new UnauthorizedException();
        }

        return user;
    }
}
