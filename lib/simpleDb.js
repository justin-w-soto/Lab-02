

import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import shortid from 'shortid';

export class SimpleDb {
  constructor(rootDir){
    this.path = rootDir;

  }

  // THIS FUNCTION SAVES THE OBJECT AND GENERATES AN ID

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

  //THIS FUNCTION GETS THE ID 
  // THIS FUNCTION GETS ALL FILES BY THEIR ID
  
}
  


