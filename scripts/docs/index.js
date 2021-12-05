/*
 *  Dynamically renders the README.md using code.
 *  Created On 06 December 2021
 */

import dirname from 'es-dirname'
import fs from 'fs/promises'
import path from 'path'

// read the project information
const app = JSON.parse(
    await fs.readFile(
        path.join(dirname(), '..', '..', 'package.json'),
        'utf-8',
    ),
)

const username = path.parse(path.dirname(app.repository.url)).base

// read the template README.md file
const template = await fs.readFile(
    path.join(dirname(), '..', '..', 'README.template.md'),
    'utf-8',
)

// the path where we'll write our rendered README.md file
const dest = path.join(dirname(), '..', '..', 'README.md')

// read the basic config file
const config = await fs.readFile(
    path.join(dirname(), '..', '..', 'src', 'config.ts'),
    'utf-8',
)

// read the example file
const example = await fs.readFile(
    path.join(dirname(), '..', '..', 'examples', 'basic', 'index.js'),
    'utf-8',
)

const content = template
    .replace(/<!-- name -->/g, app.name)
    .replace(/<!-- description -->/g, app.description)
    .replace(/<!-- username -->/g, username)
    .replace(/<!-- config -->/g, config.substr(100))
    .replace(/<!-- example -->/g, example.substr(113))

// write the rendered file
await fs.writeFile(dest, content, 'utf-8')
