import { DependencyOption, Provider, Type } from "./types";

export class Injector {
  public static readonly NOT_FOUND = new Object();

  public readonly parent: Injector | null;
  private readonly _tokenProviderMap = new Map<Object, Provider>();
  private readonly _tokenInstanceMap = new Map<Object, any>();

  constructor(providers: Provider[], parent?: Injector | null) {
    providers.forEach(provider => {
      this._tokenProviderMap.set(provider, provider);
    });

    this.parent = parent || null;
  }

  public getByOption(option: DependencyOption): any {
    const { token, notFoundValue } = option;

    if (token == null) {
      throw new Error("Token cannot be null");
    }

    if (this._tokenInstanceMap.has(token)) {
      return this._tokenInstanceMap.get(token);
    }

    if (this._tokenProviderMap.has(token)) {
      const provider = this._tokenProviderMap.get(token)!;
      const instance = this.resolveInstance(provider);
      this._tokenInstanceMap.set(token, instance);
      return instance;
    }

    if (this.parent != null) {
      return this.parent.getByOption(option);
    }
  }

  private resolveInstance(provider: Provider): any {
    const test = typeof provider;
    if (typeof provider === "function") {
      return this.resolveTypeInstance(provider);
    }
  }

  private resolveTypeInstance(type: Type): any {
    const paramInstances: any[] = [];
    return new type(...paramInstances);
  }
}
