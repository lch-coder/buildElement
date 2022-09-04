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
  safelist: [...Object.keys(epIcons.icons.icons).map(name => `${iconPrefix}${epIcons.icons.prefix}-${name}`)],
  theme: {
    colors: {
      primary: 'var(--el-color-primary)',
      bgColor: 'var(--el-bg-color)',
    },
  },
})
