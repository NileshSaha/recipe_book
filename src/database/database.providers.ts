// import * as mongoose from 'mongoose';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

// // import { Module } from "@nestjs/common";
// // import { MongooseModule } from "@nestjs/mongoose";

// export const databaseProviders = [
//   {
//     provide: 'DATABASE_CONNECTION',
//     useFactory: async (): Promise<typeof mongoose> =>
//       await mongoose.connect(process.env.MONGO_URI),
//   },
// ];

export const DatabaseProvider = MongooseModule.forRootAsync({
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => ({
    uri: configService.get<string>('database.uri'),
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }),
  inject: [ConfigService],
});
