# Webpack 5 addContextDependency issue

This is a minimal reproduction of an issue with `addContextDependency` in Webpack 5.  

https://github.com/webpack/webpack/issues/16886

## How to reproduce

```bash
npm i 
npm start 
# will output '[!!!] Running txt-loader.js at...'
# edit source/index.js and save it
# '[!!!] Running txt-loader.js at...' even though the file was not changed
# edit source/index.js and save it
# now webpack will use the cache and not run the loader
```