import {readFileSync as file} from 'fs'
import {join} from 'path'
import unified from 'unified'
import reParse from 'remark-parse'
import stringify from 'rehype-stringify'
import remark2rehype from 'remark-rehype'

import plugin from '../src/'


const render = text => unified()
  .use(reParse)
  .use(plugin, {
    downloadImage: true,
    downloadDestination: './',
  })
  .use(remark2rehype)
  .use(stringify)
  .process(text)


test('download-image', () => {
  render(file(join(__dirname, 'download-image.fixture.md')))
  // TODO tests:
  // Mock!
  // + downloadImage = false => should not download any image.
  // + test the downloadDestination parameter (note, the directory must exists)
  // + test maxlength
})
