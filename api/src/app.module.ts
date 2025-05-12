import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from './auth/guards/jwt.guard';
import { AppController } from './app.controller';
import { JwtService } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { BusinessesModule } from './businesses/businesses.module';
import { RefreshGuard } from './auth/guards/refresh.guard';
import { CountriesModule } from './countries/countries.module';
import { StatesModule } from './states/states.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        '.env',
        '.env.development.local'
      ]
    }),
    AuthModule,
    BusinessesModule,
    CountriesModule,
    StatesModule,
  ],
  controllers: [AppController],
  providers: [
    JwtService,
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    },
    RefreshGuard
  ],
})
export class AppModule { }
