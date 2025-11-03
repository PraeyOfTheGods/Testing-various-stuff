# Testing-various-stuff

Just me testin stuff.

# nest-hello-app

Overview
--------

`nest-hello-app` is a minimal NestJS application that exposes a single endpoint:

- GET /hello — returns a JSON greeting.

Current behavior
----------------

The application currently implements a static greeting. When you request `GET /hello` the server responds with the following JSON (note the trailing space in the message):

```json
{ "message": "Hello World " }
```

Files of interest
-----------------

- `src/app.controller.ts` — contains the `GET /hello` handler.
- `src/app.module.ts` — application module wiring.
- `src/main.ts` — bootstraps the NestJS application.

Prerequisites
-------------

- Node.js and npm installed.

Installation
------------

1. Clone the repository:

   git clone <repository-url>

2. Change directory:

   cd nest-hello-app

3. Install dependencies:

   npm install

Build and run
-------------

Build TypeScript and start the server:

```powershell
npm run build
npm run start
```

By default the app listens on port 3000. Open `http://localhost:3000/hello` in a browser or call it from a tool like curl or Postman.

Quick test (PowerShell)
-----------------------

```powershell
curl http://localhost:3000/hello
```

You should see:

```json
{ "message": "Hello World " }
```

Notes
-----

- The README now reflects the current program behavior (static greeting). If you'd like the server to implement a different algorithm (for example: time-based or name-aware greetings), I can update `src/app.controller.ts` and add small tests.
- The `package.json` provides scripts: `build` (tsc) and `start` (run `dist/main.js`).

Contributing
------------

PRs and issues are welcome. If you ask me to implement a different greeting algorithm I can make a small code change and add tests.

License
-------

MIT

