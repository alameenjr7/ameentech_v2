import { Injectable } from '@nestjs/common';
import sharp from 'sharp';
import { sharpConfig } from './sharp.config';
import { extname } from 'path';

@Injectable()
export class SharpService {
  async resizeImage(buffer: Buffer, originalName: string): Promise<string> {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const extension = extname(originalName) || '.jpg';
    const newFilename = `img-${uniqueSuffix}${extension}`;

    const outputPath = sharpConfig.getOutputPath(newFilename);

    await sharp(buffer)
      .resize(sharpConfig.resize.width, sharpConfig.resize.height)
      .toFormat(sharpConfig.resize.format, { quality: sharpConfig.resize.quality })
      .toFile(outputPath);

    return newFilename;
  }
}
