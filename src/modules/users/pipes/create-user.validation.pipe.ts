import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/createUserDto';

@Injectable()
export class CreateUserValidationPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    // if (Object.keys(value).some((v) => v == null || '')) {
    //   console.error('Validation Error');
    //   throw new HttpException('Deu erro', HttpStatus.UNPROCESSABLE_ENTITY);
    // }
    return value;
  }
}
