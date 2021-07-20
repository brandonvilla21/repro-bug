### Steps to repro

Just install dependencies using `npm install` and then `npm run test`

### Error in the logs
```sh
> repro-jest-issue@1.0.0 test
> jest

 PASS  src/app.test.js
  Test
    ✓ sessionStorage error (51 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.618 s, estimated 2 s
Ran all test suites.
(node:23524) UnhandledPromiseRejectionWarning: TypeError: Cannot read property '_origin' of null
    at Window.get sessionStorage [as sessionStorage] (/Users/brandonvilla/Documents/projects/repro-jest-issue/node_modules/jsdom/lib/jsdom/browser/Window.js:430:50)
    at _callee$ (/Users/brandonvilla/Documents/projects/repro-jest-issue/src/app.jsx:42:24)
    at tryCatch (/Users/brandonvilla/Documents/projects/repro-jest-issue/node_modules/regenerator-runtime/runtime.js:63:40)
    at Generator.invoke [as _invoke] (/Users/brandonvilla/Documents/projects/repro-jest-issue/node_modules/regenerator-runtime/runtime.js:293:22)
    at Generator.next (/Users/brandonvilla/Documents/projects/repro-jest-issue/node_modules/regenerator-runtime/runtime.js:118:21)
    at asyncGeneratorStep (/Users/brandonvilla/Documents/projects/repro-jest-issue/node_modules/@babel/runtime/helpers/asyncToGenerator.js:3:24)
    at _next (/Users/brandonvilla/Documents/projects/repro-jest-issue/node_modules/@babel/runtime/helpers/asyncToGenerator.js:25:9)
(Use `node --trace-warnings ...` to show where the warning was created)
(node:23524) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:23524) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```
