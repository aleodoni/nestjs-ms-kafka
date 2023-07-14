import { IsNumber, IsString } from 'class-validator';

export class EnvironmentVariables {
  @IsString()
  NODE_ENV: string;

  @IsNumber()
  KAFKAJS_NO_PARTITIONER_WARNING: number;

  @IsString()
  KAFKA_BROKERS: string;

  @IsString()
  KAFKA_AUTH_GROUP_ID: string;

  @IsString()
  KAFKA_VOTING_GROUP_ID: string;
}
