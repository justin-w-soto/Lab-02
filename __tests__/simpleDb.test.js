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

  it('should save created objects', () => {
    const simpleDb = new SimpleDb(rootDir);
    const blobject = simpleDb.save({ someData: 'some data', name: 'Blob' });

    return simpleDb
      .save(blobject)
      .then(() => {
        expect(blobject.id).toEqual(expect.any(String)); 
      });
  });
  
  it('should find an object by id and get it ', () => {
    const simpleDb = new simpleDb(rootDir);
    const blobject = simpleDb.save({ someData: 'some data', name: 'Blob' });

    return simpleDb
      .save(blobject).then((id) => {
        return simpleDb.get(id).then((fetched) => {
          expect(fetched).toEqual({ id: expect.any(String), someData: 'some data', name: 'Blob' });
        });
      });
  });
});
