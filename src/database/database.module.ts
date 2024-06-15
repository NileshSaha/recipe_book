import { Module } from '@nestjs/common';
import { DatabaseProvider } from './database.providers';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from 'src/config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfig],
    }),
    DatabaseProvider,
  ],
  exports: [DatabaseProvider],
})
export class DatabaseModule {}
