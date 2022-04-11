const path = require('path')
const fs = require('fs-plus')
const cheerio = require('cheerio')
const upperCamelCase = require('uppercamelcase')

const iconsComponentPath = path.join(process.cwd(), 'generated/icons')
const genereatedPath = path.join(process.cwd(), 'generated')
const iconsIndexPath = path.join(process.cwd(), 'generated/index.ts')
const uniconsConfig = require('@iconscout/unicons/json/line.json')

// Clear Directories
fs.removeSync(genereatedPath)
fs.mkdirSync(genereatedPath)
fs.removeSync(iconsComponentPath)
fs.mkdirSync(iconsComponentPath)

const indexTs = []

uniconsConfig.forEach(icon => {
  const baseName = `uil-${icon.name}`
  const location = path.join(iconsComponentPath, `${baseName}.tsx`)
  const name = upperCamelCase(baseName)
  const svgFile = fs.readFileSync(path.resolve('node_modules/@iconscout/unicons', icon.svg), 'utf-8')

  let data = svgFile.replace(/<svg[^>]+>/gi, '').replace(/<\/svg>/gi, '')
  // Get Path Content from SVG
  const $ = cheerio.load(data, {
    xmlMode: true
  })
  const svgPath = $('path').attr('d')

  const template = `import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import PropTypes from "prop-types";

export interface ${name}Props extends SvgProps {
  
  /**
   * The color of the icon.
   * 
   * @defaults "currentColor"
   */
  color?: string;
  
  /**
   * The size of the icon.
   * 
   * @defaults 24
   */
  size?: string | number;

}

const ${name}: React.FC<${name}Props> = props => {
  const { color, size, ...otherProps } = props;
  
  // @ts-ignore
  return (<Svg
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

${name}.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default ${name};
`
  fs.writeFileSync(location, template, 'utf-8')

  // Add it to index.js
  indexTs.push(`export { default as ${name} } from './icons/${baseName}'`)
})

fs.writeFileSync(iconsIndexPath, indexTs.join('\n'), 'utf-8')

console.log(`Generated ${uniconsConfig.length} icon components.`)