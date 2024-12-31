
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/coleccion"
  },
  {
    "renderMode": 2,
    "route": "/home"
  }
],
  assets: {
    'index.csr.html': {size: 701, hash: '0539eb46fc70417902747946b17c71ce5e3a5de0faea712e94ad44f0e9ba44bf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1072, hash: '0d37a24616066c3958a8abbd9b2ec4220f3d90dfebc2ffb6b20af048d3587937', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 58598, hash: '12c3597148a02750efb6a613c8a86cb25ec371a23b5eab40b7c15d60ab8c217b', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'coleccion/index.html': {size: 136783, hash: '0fc872e003a25de6b5e7dda28a8835877b3e485a38613354f7c0453c417f06ca', text: () => import('./assets-chunks/coleccion_index_html.mjs').then(m => m.default)},
    'styles-HS3Q3VPW.css': {size: 341132, hash: 'HQGjT4j0Jvg', text: () => import('./assets-chunks/styles-HS3Q3VPW_css.mjs').then(m => m.default)}
  },
};
