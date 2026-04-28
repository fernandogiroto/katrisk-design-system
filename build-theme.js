// build-theme.js
// Converte tokens.json → katrisk-theme.js (PrimeVue definePreset)
// Corre localmente: node build-theme.js
// Ou automaticamente via GitHub Action

import fs from "fs";

const tokens = JSON.parse(fs.readFileSync("./tokens.json", "utf8"));

// Extrai cores de um grupo de tokens
function extractColors(group) {
  const result = {};
  for (const [key, value] of Object.entries(group)) {
    if (value?.value) {
      result[key] = value.value;
    }
  }
  return result;
}

const color = tokens?.global?.color || {};
const semantic = tokens?.global?.semantic || {};
const spacing = tokens?.global?.spacing || {};
const radius = tokens?.global?.borderRadius || {};

const primary   = extractColors(color.primary   || {});
const secondary = extractColors(color.secondary || {});
const tertiary  = extractColors(color.tertiary  || {});
const neutral   = extractColors(color.neutral   || {});

// Gera o conteúdo do tema
const theme = `
import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

const KatRiskTheme = definePreset(Aura, {
  semantic: {
    primary: {
      50:  '${primary["100"] || "#e9f7f0"}',
      100: '${primary["100"] || "#e9f7f0"}',
      200: '${primary["200"] || "#c8ecd9"}',
      300: '${primary["300"] || "#a3dfc1"}',
      400: '${primary["400"] || "#6fcfa3"}',
      500: '${primary["500"] || "#2d9c67"}',
      600: '${primary["600"] || "#248a59"}',
      700: '${primary["700"] || "#1d6f48"}',
      800: '${primary["800"] || "#155437"}',
      900: '${primary["900"] || "#0d3825"}',
      950: '${primary["900"] || "#0d3825"}',
    },
    colorScheme: {
      light: {
        primary: {
          color:          '${primary["500"] || "#2d9c67"}',
          inverseColor:   '#ffffff',
          hoverColor:     '${primary["600"] || "#248a59"}',
          activeColor:    '${primary["700"] || "#1d6f48"}',
        },
        highlight: {
          background:     '${primary["500"] || "#2d9c67"}',
          focusBackground:'${primary["600"] || "#248a59"}',
          color:          '#ffffff',
          focusColor:     '#ffffff',
        },
        surface: {
          0:   '${neutral["0"]   || "#ffffff"}',
          50:  '${neutral["100"] || "#f5f5f3"}',
          100: '${neutral["100"] || "#f5f5f3"}',
          200: '${neutral["200"] || "#e6e7e3"}',
          300: '${neutral["300"] || "#c4c5bb"}',
          400: '${neutral["400"] || "#a6a89f"}',
          500: '${neutral["500"] || "#84877b"}',
          600: '${neutral["600"] || "#66695f"}',
          700: '${neutral["700"] || "#50534b"}',
          800: '${neutral["800"] || "#3a3d37"}',
          900: '${neutral["900"] || "#2c2f2f"}',
          950: '${neutral["900"] || "#2c2f2f"}',
        },
      },
      dark: {
        primary: {
          color:          '${primary["400"] || "#6fcfa3"}',
          inverseColor:   '${primary["900"] || "#0d3825"}',
          hoverColor:     '${primary["300"] || "#a3dfc1"}',
          activeColor:    '${primary["200"] || "#c8ecd9"}',
        },
        highlight: {
          background:     'rgba(45, 156, 103, 0.2)',
          focusBackground:'rgba(45, 156, 103, 0.3)',
          color:          '${primary["400"] || "#6fcfa3"}',
          focusColor:     '${primary["300"] || "#a3dfc1"}',
        },
        surface: {
          0:   '${neutral["900"] || "#2c2f2f"}',
          50:  '${neutral["800"] || "#3a3d37"}',
          100: '${neutral["800"] || "#3a3d37"}',
          200: '${neutral["700"] || "#50534b"}',
          300: '${neutral["600"] || "#66695f"}',
          400: '${neutral["500"] || "#84877b"}',
          500: '${neutral["400"] || "#a6a89f"}',
          600: '${neutral["300"] || "#c4c5bb"}',
          700: '${neutral["200"] || "#e6e7e3"}',
          800: '${neutral["100"] || "#f5f5f3"}',
          900: '${neutral["0"]   || "#ffffff"}',
          950: '${neutral["0"]   || "#ffffff"}',
        },
      },
    },
  },

  // Tokens customizados KatRisk
  katrisk: {
    secondary: {
      100: '${secondary["100"] || "#e9eefa"}',
      200: '${secondary["200"] || "#c7d4f2"}',
      300: '${secondary["300"] || "#a2b8e9"}',
      400: '${secondary["400"] || "#6f94dd"}',
      500: '${secondary["500"] || "#234797"}',
      600: '${secondary["600"] || "#1b3e86"}',
      700: '${secondary["700"] || "#15326b"}',
      800: '${secondary["800"] || "#0f2651"}',
      900: '${secondary["900"] || "#091937"}',
    },
    tertiary: {
      100: '${tertiary["100"] || "#fff6e5"}',
      200: '${tertiary["200"] || "#ffe7b8"}',
      300: '${tertiary["300"] || "#ffd98a"}',
      400: '${tertiary["400"] || "#ffc85c"}',
      500: '${tertiary["500"] || "#ffb00d"}',
      600: '${tertiary["600"] || "#e69c0c"}',
      700: '${tertiary["700"] || "#b87c09"}',
      800: '${tertiary["800"] || "#8a5d07"}',
      900: '${tertiary["900"] || "#5c3e04"}',
    },
  },
});

export default KatRiskTheme;
`.trim();

// Cria a pasta output se não existir
if (!fs.existsSync("./katrisk-theme")) {
  fs.mkdirSync("./katrisk-theme");
}

fs.writeFileSync("./katrisk-theme/index.js", theme, "utf8");
console.log("✅ katrisk-theme/index.js gerado com sucesso!");
console.log("\n👉 Como usar no teu projecto PrimeVue:");
console.log("   import KatRiskTheme from './katrisk-theme'");
console.log("   app.use(PrimeVue, { theme: { preset: KatRiskTheme } })");
