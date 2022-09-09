import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  presetWind,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import epIcons from '@iconify-json/ep'

const iconPrefix = 'i-'

export default defineConfig({
  shortcuts: [],
  variants: [
    {
      match: s => {
        if (s.startsWith(iconPrefix)) {
          return {
            matcher: s,
            selector: s => {
              return s.startsWith('.') ? `${s.slice(1)},${s}` : s
            },
          }
        }
      },
    },
  ],
  presets: [
    presetUno(),
    presetWind(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      prefix: iconPrefix,
      extraProperties: {
        display: 'inline-block',
        height: '1.2em',
        width: '1.2em',
        'vertical-align': 'text-bottom',
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: [
    ...Object.keys(epIcons.icons.icons).map(name => `${iconPrefix}${epIcons.icons.prefix}-${name}`),
    'bg-purple-100',
    'bg-purple-200',
    'bg-purple-300',
    'bg-purple-400',
    'bg-purple-500',
    'bg-purple-600',
    'bg-purple-700',
    'bg-purple-800',
    'bg-purple-900',
  ],
  theme: {
    colors: {
      primary: 'var(--el-color-primary)',
      bgColor: 'var(--el-bg-color)',
    },
  },
})
