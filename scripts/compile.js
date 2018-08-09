const path = require('path')
const fs = require('fs')

const nunjucks = require('nunjucks')
const { tags } = require('../src/svg-tags.json')

const templates = [
	[ path.resolve(__dirname, '..', 'src', 'template.js'), 'svg.js' ],
	[ path.resolve(__dirname, '..', 'src', 'template.d.ts'), 'svg.d.ts' ],
]

const dest_folder = path.resolve(__dirname, '..', 'dist')

templates.forEach(([ origin, dest ]) => {
	const result = nunjucks.render(origin, { tags })
	fs.writeFileSync(path.join(dest_folder, dest), result)
})
