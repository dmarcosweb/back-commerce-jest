import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';

@Controller('user')
export class UserController {

  @Post() // Dados vindos de createUser DTO
  async createUser(@Body() createUser: CreateUserDto)  { 
    return {
        ...createUser,
        password: undefined
    }
  }
}
