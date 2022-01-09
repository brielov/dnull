type PlainObj = { [key: string]: any };

const isPlainObject = (value: unknown): value is PlainObj =>
  typeof value === "object" && value !== null && !Array.isArray(value);

export type DNull<T> = T extends null
  ? undefined
  : T extends { [key: string]: any }
  ? { [K in keyof T]: DNull<T[K]> }
  : T extends Array<any>
  ? DNull<T[number]>[]
  : T;

export const dnull = <T>(src: T): DNull<T> => {
  if (src === null) return undefined as any;
  if (isPlainObject(src))
    return Object.fromEntries(
      Object.entries(src).map(([key, value]) => [key, dnull(value)]),
    ) as any;
  if (Array.isArray(src)) return (src as any[]).map(dnull) as any;
  return src;
};
