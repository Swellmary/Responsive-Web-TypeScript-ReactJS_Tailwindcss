# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```


# Project Name
CodeFlow

## Description
Build and Deploy a Fully Responsive Modern Website using TypeScript-ReactJS and Tailwind CSS

## Installation
- npx create-vite@latest
- Project name: .
- Package name: responsive-web--reactjs-tailwind
- Select a framework: React
- Select a variant: TypeScript + React Compiler
- Use rolldown-vite (Experimental)?: No
- Install with npm and start now? Yes

# Tailwind Installation
- npm install tailwindcss @tailwindcss/vite
- go to vite.config.ts - setup tailwindcss plugin 
  - import tailwindcss from "@tailwindcss/vite";
  - in the list of the plugins, add --tailwindcss()-- https://prnt.sc/_baw5-LvLEhG

# setup the files
- removed App.css and we're gonna have only one css file which the index.css we also have
-  

# MY STORY
- Setup project with npx create-vite@latest
- setup tailwindcss
- removed some files: App.css and kept the index.css as the main css files
- Error_display:: App.tsx css wrong file - updated & imported active css file | enountered an error after just adding @import "tailwindcss"; my App.tsx has not been updated which css should run https://prnt.sc/bVM7_L1a9fyX - and since I removed the App.css, should be index.css and it worked: https://prnt.sc/vvTg_j5Ir5dd - https://prnt.sc/r5tSf3YuAk7T
- cleaned up the App.tsx boiler, the initial code that came with the setup.
- Added some default designs from class App.jsx <div>
- Added different parts of planned components of the website inside the return <div> 
- Added components folder with it added the component sections (NavBar, Hero, ..)
- add components section and scaffolded (empty structure) https://prnt.sc/Vbf14id0oyZb
- imported sections to App.jsx
- git push error | removed duplicate commit and pushed to master but error | used: (reset --soft & commit --amend) on updating the history and combining the commit | solution: -f --> git push origin master -f, merged the update

>> NAVBAR <<
- Components: Starting at NavBar (Logo & Navigation)
- Responsive NavBar: Get a Humberger Icon
  - Icon: Install: npm i lucide-react
  - added import: import { Menu } from "lucide-react";
  - set icon hidden in md-lg
- Create a @layer directives for an animation, when poped up it will appear slowly
- Mobile first responsive visual explaination with double sm added on oneline https://prnt.sc/RtmOAoSwQqIQ https://prnt.sc/0g5Jhy9t4LE5
- as I click on the menu links the navbar closes, added the condition set to original state from prev to false: onClick={() => setMobileMenuIsOpen(false)}
- the beginnin of the className is the sm part, added hidden for the header links display

>> HERO <<
- added useState
- added useEffect - the runtime of useState
- useState & useEffect do: added style for mouse pointer highlights the dark color, wherever the mouse goes.
- added 2 different glows (given) - adjustable // animate-pulse is a tailwind built-in
- added IDE, Header, tabs - useState/ternary expression/onClick
- setup code on each tabs
  - install: npm i react-syntax-highlighter
  - install react definition the first installation: npm i @types/react-syntax-highlighter
  - [import { codeExamples } from '../data/CodeExamples';] calling for code content https://prnt.sc/vwwkI_2gIoqD
  - added design (updated height from 100px to 180 and scroll(scrollbarWidth & css pre::-webkit-scrollbar ))
- Install Tailwind CSS IntelliSense extension to avoid warning yellow lines 
- IDE wrapped with 2 devs for section to stay smaller and not expand;  BEFORE: https://prnt.sc/NkPPVQVzFgop AFTER: https://prnt.sc/PXYjjJDa2j2r
- structure for 2 opposing section (Description/Info & IDE)
- Added a sparkle icon component on the top of the page little button looking "Introducing CodeFlow AI"


## Usage
How to run/use it
- npm run dev

## Contributing
Guidelines for contributors (if open source)
https://github.com/machadop1407/modern-ux-ui-website
https://www.youtube.com/watch?v=yS7B1W2SwaU

## License


