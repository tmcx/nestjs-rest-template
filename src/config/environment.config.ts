import { Injectable } from '@nestjs/common';

@Injectable()
export class EnvironmentConfig {
    get(key: string): string {
        return process.env[key];
    }
}
