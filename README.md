# Test project

This is just a test / throwaway project to track an issue using wasm with snowpack.

[Info about this issue](https://github.com/pikapkg/snowpack/pull/426)

To recompile the wasm files you need emscripten, then run:

```
$ emcc index.c -o index.js -s MODULARIZE=1
```

in the submod directory.