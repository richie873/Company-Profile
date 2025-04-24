// types/global.d.ts
declare global {
    interface Window {
      gtag: (command: string, eventNameOrConfig: string, config?: Record<string, unknown>) => void;
    }
  }
  
  export {};
  