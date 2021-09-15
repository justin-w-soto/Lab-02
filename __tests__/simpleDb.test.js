//import some things
import { rm, mkdir } from 'fs/promises';
import { SimpleDb } from '../lib/simpleDb.js';


describe('simpleDb', () => {
  const rootDir = '../lib/simpleDb.js';

  beforeEach(() => {
    return rm(rootDir, { force: true, recursive: true }).then(() => {
      return mkdir(rootDir, { recursive: true });
    });
  });

  it('should give a unique id to an object and json stringify it', () => {
    const saveIt = new SimpleDb(rootDir);

    return saveIt;
      
  
  });
});
