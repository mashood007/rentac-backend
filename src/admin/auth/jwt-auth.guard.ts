//src/auth/jwt-auth.guard.ts
import { Injectable } from '@nestjs/common';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    // getRequest(context: ExecutionContextHost) {
    //     console.log(context)
    //     // return context
    // }
}
