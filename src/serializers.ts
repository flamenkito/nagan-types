import { custom } from 'serializr';

const error = () => {
  throw new Error('Can not serialize');
};

const anyType = custom(error, v => v);

const value = (value: any) =>
  custom(error, v => {
    if (v !== value) {
      throw new Error('Invalid value');
    }
    return v;
  });

const values = (...values: any[]) =>
  custom(error, v => {
    if (values.includes(v)) {
      throw new Error('Invalid value');
    }
    return v;
  });

export const Serializers = {
  error,
  anyType,
  value,
  values
};
