import { Module, forwardRef } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './providers';
import { AuthModule } from '../auth/auth.module';
@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // Export UsersService if needed in other modules
  imports: [forwardRef(() => AuthModule)],
})
export class UsersModule {}
