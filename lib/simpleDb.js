

import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import shortid from 'shortid';

export class SimpleDb {
  constructor(rootDir){
    this.path = rootDir;

  }
  
  save(object) {
    const newId = shortid.generate();
    const newFile = `${newId}.json`;

    object['id'] = newId;
    const strings = JSON.stringify(object);
    const writeIt = path.join(this.path, newFile);
    return writeFile(writeIt, strings).then(() => {
      return newId;
    });

  }

}
  


