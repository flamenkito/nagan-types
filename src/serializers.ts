import { custom, deserialize } from 'serializr';
import { Nagan } from './nagan';

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

  export const notify = Serializers.values(['bounce', 'none']);

  export const position = custom(Serializers.error, value => {
    switch (value.type) {
      case 'point':
        return deserialize(Nagan.Widget.Point, value);
      case 'latlng':
        return deserialize(Nagan.Widget.LatLng, value);
      case 'fixed':
        return deserialize(Nagan.Widget.Fixed, value);
      default:
        throw new Error('Invalid position type');
    }
  });
}
