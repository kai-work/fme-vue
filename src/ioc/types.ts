export type Type<T extends Object = Object> = new (...args: any[]) => T;

export type Provider = TypeProvider;
export type TypeProvider = Type;

export interface DependencyOption {
  token?: Object;
  notFoundValue?: any;
}

export interface DependencyOptions {
  [propertyKey: string]: DependencyOption;
}
