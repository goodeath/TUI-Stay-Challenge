import fs from 'fs';

const readFiles = async (path: string): Promise<Buffer> => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, {}, (err: NodeJS.ErrnoException, data: Buffer) => {
            if (err) reject(err);
            resolve(data);
        });
    });
};

const readDir = async (
    path: string,
    ignoreFiles?: string[]
): Promise<string[]> => {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err: NodeJS.ErrnoException, files: string[]) => {
            if (err) reject(err);
            files = files.filter((file) => ignoreFiles.indexOf(file) === -1);
            resolve(files);
        });
    });
};

const writeFile = async (path: string, data: any): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if (err) reject(err);
            resolve(true);
        });
    });
};

export { readDir, readFiles, writeFile };
