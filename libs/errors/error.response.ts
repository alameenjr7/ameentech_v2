import { ApiProperty } from '@nestjs/swagger';

export class ErrorResponse {
  @ApiProperty({ example: 400, description: 'HTTP status code' })
  statusCode: number;

  @ApiProperty({ example: 'Bad Request', description: 'Error message' })
  message: string;

  @ApiProperty({ example: 'Bad Request', description: 'Error type' })
  error: string;

  @ApiProperty({
    example: new Date().toISOString(),
    description: 'Timestamp of the error',
  })
  timestamp: string;

  @ApiProperty({ example: '/api/resource', description: 'Request path' })
  path: string;
}
