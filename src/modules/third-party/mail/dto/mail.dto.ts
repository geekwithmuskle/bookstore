import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class SendEmailDto {
  @ApiProperty({ description: 'Recipient emails' })
  @IsEmail({}, { each: true })
  recipients: string[];

  @ApiProperty({ description: 'Email subject' })
  @IsString()
  subject: string;

  @ApiProperty({ description: 'Email body' })
  @IsString()
  html: string;

  @ApiPropertyOptional({ description: 'description' })
  @IsOptional()
  @IsString()
  text?: string;
}
