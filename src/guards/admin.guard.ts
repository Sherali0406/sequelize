import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Admin } from "../admin/model/admin.model";

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  canActivate(context: ExecutionContext) {
    // ExecutionContext orqali kelgan HTTP so'roq olingan
    const req = context.switchToHttp().getRequest();
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException("Admin unauthorized");
    }

    const bearer = authHeader.split(" ")[0];
    const token = authHeader.split(" ")[1];
    console.log(token);
    if (bearer != "Bearer" || !token) {
      throw new UnauthorizedException("Admin unauthorized");
    }

    async function verify(token: string, jwtService: JwtService) {
      const admin: Partial<Admin> = await jwtService.verify(token, {
        secret: process.env.ACCESS_TOKEN_KEY_AD,
      });

      console.log(admin);

      if (!admin) {
        throw new UnauthorizedException("Invalid token provided");
      }

      return true;
    }
    return verify(token, this.jwtService);  
  }
}
 