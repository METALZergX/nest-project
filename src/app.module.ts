import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { UserModule } from './modules/user/user.module';
import { ProductModule } from './modules/product/product.module';

var url = 'mongodb+srv://metal_admin:z12201054@clustermetal-ptcxc.mongodb.net/test?retryWrites=true&w=majority';

@Module({
  imports: [MongooseModule.forRoot(url), ProductModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
