import { serializable, deserialize, list, object, custom } from 'serializr';

import { TypeDocument } from './type.document';
import { Serializers } from './serializers';

// models
const asType = Serializers.values(['map', 'url', 'script', 'collection']);

// export class MapTarget {
//   @serializable(Serializers.value('map')) type = 'map';
//   @serializable mapId: string;
// }

// export class URLTarget {
//   @serializable(Serializers.value('url')) type = 'url';
//   @serializable url: string;
// }

// const asTarget = custom(Serializers.error, value => {
//   switch (value.type) {
//     case 'map':
//       return deserialize(MapTarget, value);
//     case 'url':
//       return deserialize(URLTarget, value);
//     default:
//       throw new Error('Invalid target type');
//   }
// });

export class MenuRecord {
  @serializable id: number;
  @serializable title: string;
  @serializable(asType) type: string;
  @serializable routerLink: string;
  @serializable icon: string;
  // @serializable(asTarget) target: MapTarget | URLTarget;
  @serializable hasSubMenu: boolean;
  @serializable parentId: number;

  static from(data: Partial<MenuRecord>): MenuRecord {
    return deserialize(MenuRecord, data);
  }
}

export class MenusDocument implements TypeDocument {
  // TypeDocument
  @serializable _id: string;
  @serializable _rev: string;
  @serializable(Serializers.value('menus')) type = 'menus';

  // MenusDocument
  @serializable(list(object(MenuRecord))) menu: MenuRecord[];

  static from(data: Partial<MenusDocument>): MenusDocument {
    return deserialize(MenusDocument, data);
  }
}
