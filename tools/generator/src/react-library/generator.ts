import * as path                   from 'path'
import { addProjectConfiguration } from '@nx/devkit'
import { formatFiles }             from '@nx/devkit'
import { generateFiles }           from '@nx/devkit'
import { Tree }                    from '@nx/devkit'

import { LibraryGeneratorSchema }  from './schema'

export async function libraryGenerator(
  tree: Tree,
  options: LibraryGeneratorSchema
) {
  const projectRoot = `packages/${options.name}`
  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'library',
    sourceRoot: `${projectRoot}/src`,
    targets: {}
  })
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options)
  await formatFiles(tree)
}

export default libraryGenerator
