import { serializable, deserialize, list, object } from 'serializr';

import { TypeDocument } from './type.document';
import { Serializers } from './serializers';

// models
export class MenuRecord {
  @serializable title: string;
  @serializable routerLink: string;
  @serializable href: string;
  @serializable icon: string;
  @serializable target: string;
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
