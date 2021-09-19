

import { writeFile, readFile } from 'fs/promises';
import path from 'path';
import shortid from 'shortid';

export class SimpleDb {
  constructor(rootDir){
    this.path = rootDir;

  }

  // THIS FUNCTION SAVES THE OBJECT AND GENERATES AN ID

  save(object) {
    const newId = shortid.generate();
    const someFile = `${newId}.JSON`;

    object['id'] = newId;
    const strings = JSON.stringify(object);
    const writeIt = path.join(this.path, someFile);
    return writeFile(writeIt, strings).then(() => {
      return newId;
    });
  }

  //THIS FUNCTION GETS THE ID 

  fetch(id) {
    const someFile = `${id}.JSON`;
    const writeIt = path.join(this.path, someFile);
    return readFile(writeIt, 'utf-8').then((fetched) => {
      return JSON.parse(fetched); 
    }).catch(() => {
      return null;
    });
  }  
  // THIS FUNCTION GETS ALL FILES BY THEIR ID

}
  


