"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const guards_guard_1 = require("./guards/guards.guard");
const http_exception_filter_1 = require("./exception/http-exception.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    if (process.env.NODE_ENV !== 'production') {
        app.setGlobalPrefix('api');
    }
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.useGlobalGuards(new guards_guard_1.GuardsGuard());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('API hoctiengtrungmoingay')
        .setDescription('API hoctiengtrungmoingay')
        .setVersion('1.0')
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        in: 'header',
        name: 'Authorization',
    }, 'access-token')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/', app, document);
    await app.listen(process.env.PORT ?? 8888);
}
bootstrap();
//# sourceMappingURL=main.js.map