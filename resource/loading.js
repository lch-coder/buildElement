/**
 * 初始化加载效果的svg格式logo
 * @param {string} id - 元素id
 */
function initSvgLogo(id) {
  const svgStr = `
  <svg t="1664290383372" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3949"
    width="128" height="128">
    <path
        d="M640 554.666667h213.333333a85.333333 85.333333 0 0 1 85.333334 85.333333v213.333333a85.333333 85.333333 0 0 1-85.333334 85.333334h-213.333333a85.333333 85.333333 0 0 1-85.333333-85.333334v-213.333333a85.333333 85.333333 0 0 1 85.333333-85.333333z m0 85.333333v213.333333h213.333333v-213.333333h-213.333333zM469.333333 170.666667v682.666666a85.333333 85.333333 0 0 1-85.333333 85.333334H170.666667a85.333333 85.333333 0 0 1-85.333334-85.333334V170.666667a85.333333 85.333333 0 0 1 85.333334-85.333334h213.333333a85.333333 85.333333 0 0 1 85.333333 85.333334zM384 170.666667H170.666667v682.666666h213.333333V170.666667z m256-85.333334h213.333333a85.333333 85.333333 0 0 1 85.333334 85.333334v213.333333a85.333333 85.333333 0 0 1-85.333334 85.333333h-213.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V170.666667a85.333333 85.333333 0 0 1 85.333333-85.333334z m0 85.333334v213.333333h213.333333V170.666667h-213.333333z"
        p-id="3950" fill="#409eff"></path>
  </svg>
  `
  const appEl = document.querySelector(id)
  const div = document.createElement('div')
  div.innerHTML = svgStr
  if (appEl) {
    appEl.appendChild(div)
  }
}

function addThemeColorCssVars() {
  const key = '__THEME_COLOR__'
  const defaultColor = '#1890ff'
  const themeColor = window.localStorage.getItem(key) || defaultColor
  const cssVars = `--primary-color: ${themeColor}`
  document.documentElement.style.cssText = cssVars
}

addThemeColorCssVars()

initSvgLogo('#loadingLogo')
