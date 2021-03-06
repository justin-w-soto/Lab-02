

import { writeFile, readFile, readdir } from 'fs/promises';
import path from 'path';
import shortid from 'shortid';

export class SimpleDb {
  constructor(rootDir){
    this.path = rootDir;

  }

  /*THIS FUNCTION SAVES THE OBJECT AND GENERATES A UNIQUE ID*/

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

  /*THIS FUNCTION READS THE CONTENTS OF THE 
  JSON FILE AND PARSES IT IT RETURNS NULL IF 
  THE FILE DOES NOT EXIST*/

  fetch(id) {
    const someFile = `${id}.JSON`;
    const writeIt = path.join(this.path, someFile);
    return readFile(writeIt, 'utf-8').then((fetched) => {
      return JSON.parse(fetched); 
    }).catch(() => {
      return null;
    });
  } 
   
  /*THIS FUNCTION GETS ALL FILES BY 
  THEIR ID AND RETURNS AN ARRAY OF ALL OBJECTS
  IN THE DIRECTORY*/

  fetchAll(){
    return readdir(this.path).then((fetched) => {
      return Promise.all(fetched.map((theFile) => {
        const getFiles = theFile.split('.');
        return this.fetch(getFiles[0]);
      }));
    });
  }
}
  


