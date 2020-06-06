import { Publisher, Subjects, TicketCreatedEvent } from '@tiktix/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
