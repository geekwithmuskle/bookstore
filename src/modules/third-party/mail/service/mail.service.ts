import { Injectable } from '@nestjs/common';
import configuration from 'src/libs/configuration';
import * as nodemailer from 'nodemailer';
import { SendEmailDto } from '../dto';

const config = configuration();

@Injectable()
export class EmailService {
  emailTransport() {
    const transporter = nodemailer.createTransport({
      host: config.email.host,
      port: config.email.port,
      secure: false,
      auth: {
        user: config.email.user,
        pass: config.email.password,
      },
    });

    return transporter;
  }

  async sendEmail(dto: SendEmailDto) {
    const { recipients, subject, html } = dto;

    const transport = this.emailTransport();

    const options: nodemailer.SendEmailOptions = {
      from: config.email.user,
      to: recipients,
      subject: subject,
      html: html,
    };

    try {
      // const verify = await this.emailTransport().verify();
      // return verify;
      const response = await transport.sendMail(options);
      console.log(`Email successfully sent!`);
      return response;
    } catch (e) {
      console.log(`Error sending mail: `, e);
    }
  }
}
