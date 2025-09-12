import { TitleService } from './title.service';
import { UiService } from './ui.service';
import { AccordionService, Accordion } from './accordion.service';

export { TitleService } from './title.service';
export { UiService } from './ui.service';
export { AccordionService } from './accordion.service';
export type { Accordion } from './accordion.service';

export const CORE_SERVICES = [
  TitleService,
  UiService,
  AccordionService
];
