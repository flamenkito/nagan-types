import { MapDocument } from '../index';

test('Map Document', () => {
  expect(MapDocument.from(doc as any)).toEqual(map);
});

const doc = {
  _id: 'map-city',
  _rev: '105-525fc244bd86b89edf596c86b29a36d8',
  type: 'map',
  name: 'Green City',
  icon: 'icon.svg',
  image: {
    url: '/assets/maps/map_city.png',
    style: {}
  },
  description: 'Green City',
  enabled: true,
  mapType: 'image',
  elements: [
    {
      name: 'Lights',
      description: 'Street light indicator',
      selector: 'element-state-map',
      url: '/assets/elements/element-state-map/main.js',
      icon: '/assets/elements/element-state-map/icon.png'
    },
    {
      name: 'map children',
      description: 'Indicator map children',
      selector: 'element-state-map',
      url: '/assets/elements/element-state-map/main.js',
      icon: '/assets/elements/element-state-map/assets/icons/icon.png'
    }
  ],
  widgets: [
    {
      id: 'widget-1',
      selector: 'map-state-element',
      layerId: 'layer-1',
      locked: true,
      style: {
        top: 0,
        left: 0,
        'transform-origin': 'top left',
        transform: 'scale(0.05) translate(3097.5px, 2200px)'
      },
      subscriptions: ['service-map-fount'],
      options: {
        routerMap: 'map-fount',
        titleMap: 'Map fount'
      }
    },
    {
      id: 'widget-2',
      selector: 'map-state-element',
      layerId: 'layer-1',
      locked: true,
      style: {
        top: 0,
        left: 0,
        'transform-origin': 'top left',
        transform: 'scale(0.05) translate(5537.5px, 4700px)'
      },
      subscriptions: ['service-map-street'],
      options: {
        routerMap: 'map-street',
        titleMap: 'Map street'
      }
    },
    {
      id: 'widget-3',
      selector: 'map-state-element',
      layerId: 'layer-1',
      locked: true,
      style: {
        top: 0,
        left: 0,
        'transform-origin': 'top left',
        transform: 'scale(0.05) translate(6577.5px, 2260px)'
      },
      subscriptions: ['service-map-house'],
      options: {
        routerMap: 'map-house',
        titleMap: 'Map house'
      }
    }
  ],
  availableLayerIds: ['layer-1', 'layer-2', 'layer-3'],
  visibleLayerIds: ['layer-1', 'layer-2', 'layer-3']
};

const map = {
  type: 'map',
  _id: 'map-city',
  _rev: '105-525fc244bd86b89edf596c86b29a36d8',
  enabled: true,
  name: 'Green City',
  description: 'Green City',
  icon: 'icon.svg',
  availableLayerIds: ['layer-1', 'layer-2', 'layer-3'],
  visibleLayerIds: ['layer-1', 'layer-2', 'layer-3'],
  widgets: [
    {
      notify: 'bounce',
      id: 'widget-1',
      layerId: 'layer-1',
      locked: true,
      selector: 'map-state-element',
      style: {
        top: 0,
        left: 0,
        'transform-origin': 'top left',
        transform: 'scale(0.05) translate(3097.5px, 2200px)'
      },
      options: { routerMap: 'map-fount', titleMap: 'Map fount' },
      subscriptions: ['service-map-fount']
    },
    {
      notify: 'bounce',
      id: 'widget-2',
      layerId: 'layer-1',
      locked: true,
      selector: 'map-state-element',
      style: {
        top: 0,
        left: 0,
        'transform-origin': 'top left',
        transform: 'scale(0.05) translate(5537.5px, 4700px)'
      },
      options: { routerMap: 'map-street', titleMap: 'Map street' },
      subscriptions: ['service-map-street']
    },
    {
      notify: 'bounce',
      id: 'widget-3',
      layerId: 'layer-1',
      locked: true,
      selector: 'map-state-element',
      style: {
        top: 0,
        left: 0,
        'transform-origin': 'top left',
        transform: 'scale(0.05) translate(6577.5px, 2260px)'
      },
      options: { routerMap: 'map-house', titleMap: 'Map house' },
      subscriptions: ['service-map-house']
    }
  ]
};
