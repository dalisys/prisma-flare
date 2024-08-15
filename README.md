# Nuxt 3 Minimal Starter with Prisma to deploy on Cloudflare pages

After running locally 
`npx nuxt build --preset cloudflare-pages ; npx wrangler pages dev dist/`

I get this Error
```sh
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

In Cloudflare after deploying it I get  this error:
![image](https://github.com/user-attachments/assets/85a054d9-dc9c-4375-a487-9a538ecc3bdb)

and in the logs:

```json
"logs": [
    {
      "message": [
        "[nuxt] [request error] [unhandled] [500]",
        "Cannot read properties of undefined (reading 'exec')\n  at chunks/build/server.mjs:1:76942"
      ],
      "level": "error",
      "timestamp": 1723727695746
    },
    {
      "message": [
        "[nuxt] [request error] [unhandled] [500]",
        "Cannot access 'default' before initialization\n  at chunks/routes/renderer.mjs:1:100942  \n  at async chunks/routes/renderer.mjs:1:100895  \n  at async chunks/routes/renderer.mjs:1:103350  \n  at async Object.handler (chunks/routes/renderer.mjs:1:102102)  \n  at async Object.handler (chunks/runtime.mjs:1:73771)  \n  at async chunks/runtime.mjs:1:76908  \n  at async chunks/runtime.mjs:1:108399  \n  at async errorHandler (chunks/runtime.mjs:1:104342)  \n  at async chunks/runtime.mjs:1:77060  \n  at async chunks/runtime.mjs:1:108399"
      ],
      "level": "error",
      "timestamp": 1723727695746
    }
  ],
```

I tried with a local DB, one in Supabase and one in aiven (aws).

### How to reproduce

<!--
1. Go to '...'
2. Change '....'
3. Run '....'
4. See error
-->

clone this repo
1. npm install
2. add .env file
3. npx nuxt build --preset cloudflare-pages 
4. npx wrangler pages dev dist/
