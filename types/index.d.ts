export {};

declare global {
  interface Toast {
    message: string;
    success: boolean;
    id?: number;
  }
}
