import * as fs from 'fs'
import { readCachedProjectGraph } from '@nx/devkit'
import { execSync } from 'node:child_process'
import { join } from 'node:path'

import { invariant, resolveRoot } from '../helpers'

const [, , name, tag = 'latest'] = process.argv

const publishLibrary = (name: string, tag: string) => {
  const graph = readCachedProjectGraph()
  const project = graph.nodes[name]
  const root = resolveRoot()

  invariant(
    project,
    `Could not find project "${name}" in the workspace. Is the project.json configured correctly?`
  )

  const outputPath = project.data.targets.build.options?.outputPath

  invariant(
    outputPath,
    `Could not find "build.options.outputPath" of project "${name}". Is project.json configured  correctly?`
  )
  console.log(outputPath)
  console.log(root)
  console.log(process.cwd())

  process.chdir(join(root, outputPath))

  execSync(`npm publish --access public --tag ${tag}`)
}

publishLibrary(name, tag)
