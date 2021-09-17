

import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import shortid from 'shortid';

export class SimpleDb {
  constructor(rootDir){
    this.path = rootDir;

  }
  
  save(object) {
    object.id = shortid.generate();
    const newFile = `${object.id}.json`;
    const destination = path.join(this.path, newFile);

    return writeFile(destination, JSON.stringify(object.id));
  }
  
}

