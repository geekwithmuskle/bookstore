import { Body, Controller, Post, Res } from '@nestjs/common';
import { EmailService } from '../service';
import { SendEmailDto } from '../dto';
import { ResponseFormat } from 'src/shared';

@Controller('mail-service')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  async sendMail(@Res() res, @Body() dto: SendEmailDto) {
    const response = await this.emailService.sendEmail(dto);

    if (!response) {
      return ResponseFormat.failureResponse(res, null, 'Email not send');
    }

    return ResponseFormat.successResponse(
      res,
      response,
      'Email sent successfully!!!',
    );
  }
}
