import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const configureSwagger = (app) => {
  const config = new DocumentBuilder()
    .setTitle('BookStore App')
    .setDescription('The BookStore API documentation')
    .setVersion('1.0')
    .addTag('bookstore')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'JWT',
    )
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/documentation', app, documentFactory);
};
