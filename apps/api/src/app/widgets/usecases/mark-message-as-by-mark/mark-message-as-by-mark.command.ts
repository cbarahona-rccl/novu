import { IsArray, IsDefined, IsEnum, IsString } from 'class-validator';
import { EnvironmentWithSubscriber } from '../../../shared/commands/project.command';
import { MarkMessagesAsEnum } from '@novu/shared';

export class MarkMessageAsByMarkCommand extends EnvironmentWithSubscriber {
  @IsArray()
  messageIds: string[];

  @IsDefined()
  @IsEnum(MarkMessagesAsEnum)
  markAs: MarkMessagesAsEnum;

  @IsDefined()
  @IsString()
  __source: 'notification_center' | 'api';
}
