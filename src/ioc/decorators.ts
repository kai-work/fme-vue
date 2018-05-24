import Vue from "vue";
import { createDecorator } from "vue-class-component";

type Constructor<T> = new (...args: any[]) => T;

export function injectable(): ClassDecorator {
  return target => target;
}

// export function injectable<T extends Constructor<object>>(constructor: T) {
//   return class extends constructor {
//     _is_injectable: boolean = true;
//   };
// }

export function inject(token?: Object): PropertyDecorator & ParameterDecorator {
  return (
    target: Object,
    propertyKey: string | symbol,
    parametetIndex?: number
  ) => {
    createDecorator((options, key) => {
      if (options.dependencies == null) {
        options.dependencies = {};
      }
      const dependency = options.dependencies[key] || {};
      dependency.token = token;
      options.dependencies[key] = dependency;
    })(target as Vue, propertyKey as string);
  };
}
