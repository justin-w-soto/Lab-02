//import some things

import { rm, mkdir } from 'fs/promises';
import { SimpleDb } from '../lib/simpleDb.js';


describe('simpleDb', () => {
  const rootDir = '../lib/simpleDb.js';

  beforeEach(() => {
    return rm(rootDir, { force: true, recursive: true }).then(() => {
      return mkdir(rootDir);
    });
  });

  it('should give a unique id to an object and stringify it', () => {
    const simpleDb = new SimpleDb(rootDir);
    const blobject = simpleDb.save(
      {
        data: 'some data' 
      }
    ).catch((err) => {
      console.error(err.message());
    });
    expect(blobject).toBe(expect.any(String));
  });

  it('should get an object', () => {
    const simpleDb = new SimpleDb(rootDir);
    const blobject = 
    {
      data: 'some data' 
    };
    const gotIt = simpleDb.save(blobject).then((id) => {
      simpleDb.get(id);
    });

    expect(gotIt).toEqual(
      {
        id: expect.any(String),
        data: 'some data'
      });
  });
});

