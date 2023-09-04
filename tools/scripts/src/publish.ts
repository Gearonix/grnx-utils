import { execSync } from 'node:child_process';
import { join } from 'node:path'

import {readCachedProjectGraph} from '@nx/devkit';
import {resolveRoot} from './../helpers'
import {invariant} from './../helpers'

const [, , name, tag = 'next'] = process.argv;

const publishLibrary = (name: string, tag: string) => {
  const graph = readCachedProjectGraph();
  const project = graph.nodes[name];
  const root = resolveRoot()

  invariant(
    project,
    `Could not find project "${name}" in the workspace. Is the project.json configured correctly?`
  );

  const outputPath = project.data?.targets?.build?.options?.outputPath;

  invariant(
    outputPath,
    `Could not find "build.options.outputPath" of project "${name}". Is project.json configured  correctly?`
  );

  process.chdir(join(root, outputPath));

  execSync('npm version patch');
  execSync(`npm publish --access public --tag ${tag}`);
}

publishLibrary(name, tag)
