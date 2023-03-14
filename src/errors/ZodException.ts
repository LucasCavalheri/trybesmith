import { ZodError, ZodIssue } from 'zod';

export default class ZodException extends ZodError {
  status: number;

  constructor(status: number, addIssue: ZodIssue[]) {
    super(addIssue);
    this.status = status;
  }
}
