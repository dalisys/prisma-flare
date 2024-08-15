# Nuxt 3 Minimal Starter with Prisma to deploy on Cloudflare pages

``` sh
C:\Users\username\AppData\Roaming\npm\node_modules\wrangler\wrangler-dist\cli.js:29765
            throw a;
            ^

TypeError [ERR_INVALID_FILE_URL_PATH]: File URL path must be absolute
    at getPathFromURLWin32 (node:internal/url:1364:11)
    at fileURLToPath (node:internal/url:1394:22)
    at tryFileURLToPath (C:\Users\username\AppData\Roaming\npm\node_modules\wrangler\node_modules\@cspotcode\source-map-support\source-map-support.js:133:12)
    at retrieveSourceMapURL (C:\Users\username\AppData\Roaming\npm\node_modules\wrangler\node_modules\@cspotcode\source-map-support\source-map-support.js:335:27)
    at Array.<anonymous> (C:\Users\username\AppData\Roaming\npm\node_modules\wrangler\node_modules\@cspotcode\source-map-support\source-map-support.js:353:26)
    at C:\Users\username\AppData\Roaming\npm\node_modules\wrangler\node_modules\@cspotcode\source-map-support\source-map-support.js:199:32
    at mapSourcePosition (C:\Users\username\AppData\Roaming\npm\node_modules\wrangler\node_modules\@cspotcode\source-map-support\source-map-support.js:383:21)
    at wrapCallSite (C:\Users\username\AppData\Roaming\npm\node_modules\wrangler\node_modules\@cspotcode\source-map-support\source-map-support.js:592:20)
    at prepareStackTrace (C:\Users\username\AppData\Roaming\npm\node_modules\wrangler\node_modules\@cspotcode\source-map-support\source-map-support.js:671:41)
    at getSourceMappedString (C:\Users\username\AppData\Roaming\npm\node_modules\wrangler\wrangler-dist\cli.js:161846:34) {
  code: 'ERR_INVALID_FILE_URL_PATH'
}
```