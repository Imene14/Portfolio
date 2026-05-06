
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 25004, hash: '605aa50973ccaa29134894b1b6b01ec78b686782ed97e9ce241dbefe1b276d6a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17210, hash: 'a5dedc8b353dd935769e4a8eb3302272b81fc356bb0f09ba1ffca64e88d57bb1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 33862, hash: 'cf8ddf72df5043dede84ffd71e5cef7d023008e4d2ec9dc7ff8812c19c823631', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-SNO7M224.css': {size: 22248, hash: 'ln6IlEvOUB8', text: () => import('./assets-chunks/styles-SNO7M224_css.mjs').then(m => m.default)}
  },
};
