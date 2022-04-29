# React Component Library Starter

This repository aims to handle most of the setup required when creating a new component library. The setup of Storybook, ESLint, Prettier, Jest, Testing Library and Rollup has already been handled.

The editor of choice is VS Code, thus only the configuration for this code editor is provided.

It is opinionated providing a recommended folder structure.

## How to use?

Once cloned you will want to install the required dependencies using your package manager of choice.

```
npm install
pnpm install
yarn install
```

In `package.json` update the `"name"` property to match the name of your component library. Whilst the file is open make a mental note of the various scripts which can be run.

After installing the dependencies all you need to do is run `npm storybook` (or equivalent).

Don't forget to:

- Remove the old `.git` directory and reinitialise the repository.
- Update or delete `license.txt`.
- Update or delete `README.md`.

### VS Code Users

The following extensions should be installed for full functionality, and benefits of this project:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - picks ups any linting errors as you code.
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - automatically formats your code on save (in this particular configuration).
- [CSS Modules](https://marketplace.visualstudio.com/items?itemName=clinyong.vscode-css-modules) - autocompletes class names from `module.css` files when importing into a React component.

## What's included?

This project has already set-up the main tools you will need to write clean consistent code.

- ESLint with Airbnb style guide - start conforming to some form of style guide. This is highly configurable, rules which you do not need can be disabled. Additionally, the `.eslintignore` file contains any patterns which should be ignored by ESLint, in this case any `*.config.js` files.
- Prettier - to ensure consistency and less hassle from ESLint when writing code.
- Jest and Testing Library - allows testing to start happening outside the box.
- Rollup - build the library.

## Folder Structure

The project contains a simple `Button` component to showcase the expected structure of the project.

- `./src/components/[Component Name]` - a component `.tsx`, it's style `.module.css`, test files `.spec.tsx`, and stories `.stories.tsx`.
  - Type specific for the component can go in the `.tsx` file
- `./index.ts` - export components to allow consumers easy importing, e.g. `import { Button } from "my-lib"`.

## Output

The output are emitted to `./dist` with support for both CommonJS and ECMAScript. Type declarations are emitted to `./dist/lib`.

## Local Testing

It is possible to test the library before publishing to `npmjs` by using the [`npm link`](https://docs.npmjs.com/cli/v8/commands/npm-link) command.

## License

[MIT](license.txt)
