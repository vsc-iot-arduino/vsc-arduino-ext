import { IBoardManager } from './iboardmanager';
import { Status } from './iboardmanager';
import { ArduinoDebug } from '../arduinodebug/arduinodebug';
import Package from './Package';

export class BoardManager implements IBoardManager {
    readonly ArdDbgExe: ArduinoDebug;
    readonly Arduino15Path: string = '%USERPROFILE%\\AppData\\Local\\Arduino15';
    constructor(arddbg: ArduinoDebug) { }
    ListInstalled(packageName: string, architecture: string, version?: string): Thenable<Package[]> {
        return new Promise((resolve) => {
            resolve([
                new Package(
                    'testpackage',
                    'arduino',
                    '1.0',
                    'arduino',
                    'http://arduino.cc',
                    'archive',
                    'abcd',
                    '10000',
                    [],
                    [])
            ]);
        });

    }
    Search(keyword?: string): Thenable<Package[]> {
        return new Promise((resolve) => {
            resolve([
                new Package(
                    'testpackage',
                    'arduino',
                    '1.0',
                    'arduino',
                    'http://arduino.cc',
                    'archive',
                    'abcd',
                    '10000',
                    [],
                    [])
            ]);
        });
    }
    InstallPackage(packageName: string, architecture: string, version?: string): Thenable<Package[]> {
        return new Promise((resolve) => {
            resolve([
                new Package(
                    'testpackage',
                    'arduino',
                    '1.0',
                    'arduino',
                    'http://arduino.cc',
                    'archive',
                    'abcd',
                    '10000',
                    [],
                    [])
            ]);
        });
    }
    RemovePackage(packageName: string, architecture: string, version?: string): Thenable<Status> {
        return new Promise((resolve) => {
            resolve(Status.Success);
        });
    }



}