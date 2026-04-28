import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

const KatRiskTheme = definePreset(Aura, {
  semantic: {
    primary: {
      50:  '#e9f7f0',
      100: '#e9f7f0',
      200: '#c8ecd9',
      300: '#a3dfc1',
      400: '#6fcfa3',
      500: '#2d9c67',
      600: '#248a59',
      700: '#1d6f48',
      800: '#155437',
      900: '#0d3825',
      950: '#0d3825',
    },
    colorScheme: {
      light: {
        primary: {
          color:          '#2d9c67',
          inverseColor:   '#ffffff',
          hoverColor:     '#248a59',
          activeColor:    '#1d6f48',
        },
        highlight: {
          background:     '#2d9c67',
          focusBackground:'#248a59',
          color:          '#ffffff',
          focusColor:     '#ffffff',
        },
        surface: {
          0:   '#ffffff',
          50:  '#f5f5f3',
          100: '#f5f5f3',
          200: '#e6e7e3',
          300: '#c4c5bb',
          400: '#a6a89f',
          500: '#84877b',
          600: '#66695f',
          700: '#50534b',
          800: '#3a3d37',
          900: '#2c2f2f',
          950: '#2c2f2f',
        },
      },
      dark: {
        primary: {
          color:          '#6fcfa3',
          inverseColor:   '#0d3825',
          hoverColor:     '#a3dfc1',
          activeColor:    '#c8ecd9',
        },
        highlight: {
          background:     'rgba(45, 156, 103, 0.2)',
          focusBackground:'rgba(45, 156, 103, 0.3)',
          color:          '#6fcfa3',
          focusColor:     '#a3dfc1',
        },
        surface: {
          0:   '#2c2f2f',
          50:  '#3a3d37',
          100: '#3a3d37',
          200: '#50534b',
          300: '#66695f',
          400: '#84877b',
          500: '#a6a89f',
          600: '#c4c5bb',
          700: '#e6e7e3',
          800: '#f5f5f3',
          900: '#ffffff',
          950: '#ffffff',
        },
      },
    },
  },

  // Tokens customizados KatRisk
  katrisk: {
    secondary: {
      100: '#e9eefa',
      200: '#c7d4f2',
      300: '#a2b8e9',
      400: '#6f94dd',
      500: '#234797',
      600: '#1b3e86',
      700: '#15326b',
      800: '#0f2651',
      900: '#091937',
    },
    tertiary: {
      100: '#fff6e5',
      200: '#ffe7b8',
      300: '#ffd98a',
      400: '#ffc85c',
      500: '#ffb00d',
      600: '#e69c0c',
      700: '#b87c09',
      800: '#8a5d07',
      900: '#5c3e04',
    },
  },
});

export default KatRiskTheme;