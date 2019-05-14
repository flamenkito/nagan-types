import { custom } from 'serializr';

export namespace Serializers {
  export const error = () => {
    throw new Error('Can not serialize');
  };

  export const anyType = custom(error, v => v);

  export const value = (value: any) =>
    custom(error, v => {
      if (v !== value) {
        throw new Error('Invalid value');
      }
      return v;
    });

  export const values = (...values: any[]) =>
    custom(error, v => {
      if (values.includes(v)) {
        throw new Error('Invalid value');
      }
      return v;
    });
}
