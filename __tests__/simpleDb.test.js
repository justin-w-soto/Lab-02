
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
    const simpleDataBase = new SimpleDb(rootDir);
    const blobject = { someData: 'some data', name: 'Blob' };

    return simpleDataBase
      .save(blobject)
      .then(() => {
        expect(blobject.id).toEqual(expect.any(String)); 
      });
  });
  
  it('should find an object by id and get it ', () => {
    const simpleDataBase = new SimpleDb(rootDir);
    const blobject = { someData: 'some data', name: 'Blob' };

    return simpleDataBase
      .save(blobject).then((id) => {
        return simpleDataBase.fetch(id).then((fetched) => {
          expect(fetched).toEqual({ id: expect.any(String), someData: 'some data', name: 'Blob' });
        });
      });
  });

  it('should get null objects', () => {
    const simpleDataBase = new SimpleDb(rootDir);
    const blobject = { someData: 'some data', name: 'Blob' };

    return simpleDataBase 
      .save(blobject).then(() => {
        return simpleDataBase.fetch().then((fetched) => {
          expect(fetched).toEqual(null);
        });
      });
  });

  it('should get all of the objects', () => {
    const simpleDataBase = new SimpleDb(rootDir);
    const blobject = { someData: 'some data', name: 'Blob' };
    return simpleDataBase
      .save(blobject).then(() => {
        expect(fetched).toEqual([{ id: expect.any(String), someData: 'some data', name: 'Blob' }]);
      });
  });

});
