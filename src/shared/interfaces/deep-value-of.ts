export type DeepValueOf<T> = T extends object ? (T extends any[] ? never : DeepValueOf<T[keyof T]>) : T;
