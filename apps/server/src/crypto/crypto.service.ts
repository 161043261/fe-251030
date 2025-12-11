import { Injectable } from '@nestjs/common';
import { createHmac } from 'crypto';

@Injectable()
export class CryptoService {
  encrypt(data: string) {
    const hmac = createHmac('sha256' /** algorithm */, 'secret' /** key */);
    return hmac.update(data).digest('hex');
  }

  verify(data: string, hash: string) {
    return this.encrypt(data) === hash;
  }
}
