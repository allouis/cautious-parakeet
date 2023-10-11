import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from '../../ghost/user/user.service';
import { CreateUserDto } from '../../ghost/user/dto/create-user.dto';
import { UpdateUserDto } from '../../ghost/user/dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
    this.userService = userService;
    console.log('UserController constructor');
    console.log(this.userService);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
