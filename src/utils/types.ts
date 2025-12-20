// types.ts

export interface EventPayload {
  eventName: string;
  timestamp: number;
  userId: string;
  properties?: Record<string, unknown>;
}

export interface ProcessedEvent extends EventPayload {
  processedAt: number;
  sessionId: string;
  deviceInfo: {
    os: string;
    browser: string;
    deviceType: string;
  };
}

export type EventHandler = (event: EventPayload) => Promise<ProcessedEvent>;

export enum EventType {
  PAGE_VIEW = 'page_view',
  CLICK = 'click',
  SCROLL = 'scroll',
  CUSTOM = 'custom',
}

export type EventQueue = {
  [key in EventType]?: EventPayload[];
};

export interface AnalyticsConfig {
  apiKey: string;
  endpoint: string;
  maxRetries: number;
  batchSize: number;
  flushInterval: number;
}

export interface WorkerMetrics {
  eventsProcessed: number;
  eventsFailed: number;
  lastFlushTime: number;
  uptime: number;
}