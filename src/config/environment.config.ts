import { Logger, Injectable } from '@nestjs/common';

@Injectable()
export class EnvironmentConfig {
    private readonly logger = new Logger('EnvironmentConfig');

    get(key: string): string {
        const value = process.env[key];
        if (value == undefined) {
            this.logger.warn(`The requested environment variable ${value} is not defined.`);
        }
        return value;
    }
}
