import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginInput, LoginOutput } from './login.dto';
import { PrismaService } from 'src/integrations/prismaService';

@Injectable()
export class LoginService {
  constructor(private jwtService: JwtService, private prisma: PrismaService) {}

  async execute(input: LoginInput): Promise<LoginOutput> {
    const user = await this.prisma.users.findFirst({
      where: {
        email: input.email,
        password: input.password,
      },
    });

    if (!user) throw new UnauthorizedException();

    const payload = {
      sub: user.id,
      email: user.email,
    };

    const token = await this.jwtService.signAsync(payload);

    return {
      accessToken: token,
      expiresAt: new Date(),
      refreshToken: ``,
    } as LoginOutput;
  }
}
