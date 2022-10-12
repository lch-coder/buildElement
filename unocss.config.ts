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
import { compareColors, stringToColor } from '@iconify/utils/lib/colors'
import { importDirectory, parseColors, runSVGO, deOptimisePaths } from '@iconify/tools'
import epIcons from '@iconify-json/ep'

const iconPrefix = 'i-'

export default defineConfig({
  shortcuts: [],
  variants: [
    // 以下配置是为了可以直接使用标签 <i-ep-edit />
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
      collections: {
        // Loading icon set
        'custom-svg': async () => {
          // Load icons
          const iconSet = await importDirectory('src/icons/svg', {
            prefix: 'svg',
          })

          // Clean up each icon
          await iconSet.forEach(async name => {
            const svg = iconSet.toSVG(name)!

            // Change color to `currentColor`
            const blackColor = stringToColor('black')!

            await parseColors(svg, {
              defaultColor: 'currentColor',
              callback: (attr, colorStr, color) => {
                // Change black to 'currentColor'
                if (color && compareColors(color, blackColor)) {
                  return 'currentColor'
                }

                switch (color?.type) {
                  case 'none':
                  case 'current':
                    return color
                }

                throw new Error(`Unexpected color "${colorStr}" in attribute ${attr}`)
              },
            })

            // Optimise
            runSVGO(svg)

            // Update paths for compatibility with old software
            await deOptimisePaths(svg)

            // Update icon in icon set
            iconSet.fromSVG(name, svg)
          })

          // Export as IconifyJSON
          return iconSet.export()
        },
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
  // 添加以下配置, safelist 是预生成 i-ep-xxx 的样式,不管代码有没有使用这个图标
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
    'i-icon-park-outline-workbench',
    'i-ri-function-line',
    'i-material-symbols-tab-outline',
    'i-icon-park-twotone-monitor-camera',
    'i-material-symbols-bookmarks-outline',
    'i-tabler-table',
    'i-tabler-table-alias',
    'i-tabler-table-export',
  ],
  theme: {
    colors: {
      primary: 'var(--el-color-primary)',
      bgColor: 'var(--el-bg-color)',
    },
  },
})
