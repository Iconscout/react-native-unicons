const path = require('path')
const fs = require('fs-plus')
const cheerio = require('cheerio')
const upperCamelCase = require('uppercamelcase')

const iconsComponentPath = path.join(process.cwd(), 'icons')
const iconsIndexPath = path.join(process.cwd(), 'index.js')
const uniconsConfig = require('@iconscout/unicons/json/line.json')

// Clear Directories
fs.removeSync(iconsComponentPath)
fs.mkdirSync(iconsComponentPath)

const indexJs = []

uniconsConfig.forEach(icon => {
  const baseName = `uil-${icon.name}`
  const location = path.join(iconsComponentPath, `${baseName}.js`)
  const name = upperCamelCase(baseName)
  const svgFile = fs.readFileSync(path.resolve('node_modules/@iconscout/unicons', icon.svg), 'utf-8')

  let data = svgFile.replace(/<svg[^>]+>/gi, '').replace(/<\/svg>/gi, '')
  // Get Path Content from SVG
  const $ = cheerio.load(data, {
    xmlMode: true
  })
  const svgPath = $('path').attr('d')

  const template = `import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const ${name} = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="${svgPath}" />
    </Svg>
  );
};

${name}.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default ${name};
`
  fs.writeFileSync(location, template, 'utf-8')

  // Add it to index.js
  indexJs.push(`export { default as ${name} } from './icons/${baseName}'`)
})

fs.writeFileSync(iconsIndexPath, indexJs.join('\n'), 'utf-8')

console.log(`Generated ${uniconsConfig.length} icon components.`)
