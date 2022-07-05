# Supercharged CRA Typescript Template

## Supercharged CRA Typescript Template with Popular Packages, Redux RTK, Opinionated Linters, Incorporated Prettier, and Full REST API Server

Supercharged [Create React App](https://github.com/facebook/create-react-app) (CRA) Typescript template that includes:

- Pre-configured mock full REST API server based on JSON Server (global installation needed).
- Pre-configured Redux RTK Store, API Slices with Injections, Hooks and exported Types.
- Custom JEST render wrapper with BrowserRouter and Redux.

Basic Popular Packages:

- Lodash
- Axios
- React-Redux RTK
- Date-fns
- Eslint
- Classnames
- Stylelint
- Prettier
- UUID
- React Router Dom
- Source Map Explorer
- Testing Libraries
- Web Vitals

---

Opinionated Typescript/Javascript Linter based on:

- Airbnb Style Guide (JS & TS)
- Import
- Jest w/ Formatting and Dom
- JSX-a11y
- Lodash
- You-Dont-Need-Lodash (prefers native JS when possible)
- React Redux
- Promises
- ESLint Comments
- React w/ Hooks
- Security
- Testing Library
- Typescript Recommended + Type Checking
- Unicorn

---

Opinionated CSS Linter based on:

- Recommended base config Stylelint
- Standard config (Airbnb, Google, Idiomatic, @mdo), extended from Recommended
- Primer config GitHub CSS Style Guide, extended from Standard
- Block Ignored Properties add-on

---

Simple Common Scripts:

- analyze: "source-map-explorer 'build/static/js/\*.js'",
- coverage: "npm test -- --coverage",
- lint: "npx eslint 'src/**/*.{js,ts,jsx,tsx}'",
- lint:fix: "npm run lint -- --fix",
- stylelint: "npx stylelint 'src/**/*.{css,less,scss,sass}'",
- stylelint:fix: "npm run stylelint -- --fix",
- server:js: "json-server --watch server/db.js --port 3050 --delay 1000",
- server:json: "json-server --watch server/db.json --port 3050 --delay 1000"

---

IDE's Types for:

- Jest
- Lodash
- Node
- React w/ Dom
- Rect Redux
- React Router Dom
- UUID

---

## Usage

```bash
npx create-react-app your-project-name --template supercharged
```

Or;

```bash
yarn create react-app your-project-name --template supercharged
```

Cloning this repo pulls down the template only; not a bundled and configured Create React App.

For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.
