### Type Document

```ts
interface TypeDocument {
  _id: string;
  _rev: string;
  type: string;
}
```

## Services Collection

{{couchdb}}/services

### Service document

```ts
interface Last {
  timestamp: number;
  state: string;
}

interface Center {
  lat: number;
  lng: number;
}

interface ServiceDocument extends TypeDocument {
  type: 'service';
  center?: Center;
  state: string;
  lasts: Last[];
}
```

## Nagan Collection

{{couchdb}}/nagan

### Elements Document

```ts
interface Element {
  selector: string;
  script: string;
  icon: string;
  name: string;
  description: string;
}
```

```ts
interface ElementsDocument extends TypeDocument {
  type: 'elements';
  elements: Element[];
}
```

### Layer Document

```ts
interface LayerDocument extends TypeDocument {
  type: 'layer';
  enabled: boolean;
  name: string;
  description: string;
  icon: string;
}
```

### Map Document

```ts
interface MapDocument extends TypeDocument {
  type: 'map';
  mapType: 'leaflet' | 'image';
  enabled: boolean;
  name: string;
  description: string;
  icon: string;
  availableLayerIds: string[];
  widgets: Widget[];
}
```

```ts
interface LeafletMapDocument extends MapDocument {
  mapType: 'leaflet';
  options: {
    center: Center;
    zoom: number;
  };
}
```

```ts
interface ImageMapDocument extends MapDocument {
  mapType: 'image';
  options: {
    image: string;
  };
}
```

```ts
interface Widget {
  id: string;
  layerId: string;
  locked: boolean;
  selector: string;
  style: Object;
  options: Object;
  center?: Center | (subs: ServiceDocument[]) => Center,
  mapper?: (subs: ServiceDocument[]) => any,
  subscriptions: string[]
}
```

## Users

{{couchdb}}/\_users

### User Document

```ts
interface UserDocument extends TypeDocument {
  type: 'user';
  name: string;
  roles: string[];
  allowedInstances: number;
  description: string;
  avatar: string;
  nagan: Nagan;
}
```

```ts
interface Nagan {
  state: string;
  defaultMap: string;
  maps: string[];
  layers: string[];
  services: string[];
}
```
