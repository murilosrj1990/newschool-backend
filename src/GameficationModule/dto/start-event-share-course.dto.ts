import { StartEventDTO } from './start-event.dto';

export class StartEventShareCourseRuleDTO {
  courseId: string;
  userId: string;
}

export class StartEventShareCourseDTO extends StartEventDTO {
  rule: StartEventShareCourseRuleDTO;
}
