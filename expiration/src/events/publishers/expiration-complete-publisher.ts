import { Subjects, Publisher, ExpirationCompleteEvent } from '@tiktix/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  readonly subject = Subjects.ExpirationComplete;
}
