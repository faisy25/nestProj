import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Module({
  providers: [DatabaseService],
  exports: [DatabaseService], // Important for using DatabaseService in other modules.
})
export class DatabaseModule {}
