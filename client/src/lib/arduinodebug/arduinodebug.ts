import { IArduinoDebug } from './iarduinodebug';
import * as child from 'child_process';


// reference: https://github.com/PaulStoffregen/Arduino-1.6.7-Teensyduino/blob/master/build/shared/manpage.adoc
// normal use: arduino --board arduino:avr:nano:cpu=atmega168 --port /dev/ttyACM0 --upload /path/to/sketch/sketch.ino
export class ArduinoDebug implements IArduinoDebug {
    // The path where sketches are (usually) stored. This path can also contain some special subdirectories (see FILES below).
    public arduinoExePath: string;

    // The path where sketches are (usually) stored. This path can also contain some special subdirectories (see FILES below).
    public sketchbookPath: string;

    // The path to use for building. This is where things like the preprocessed .cpp file, compiled .o files and the final .hex file go.
    // If set, this directory should already exist before running the arduino command.
    // arduino --pref build.path=/path/to/sketch/build --verify /path/to/sketch/sketch.ino
    public buildPath: string;

    constructor(
        ardexepath: string,
        sketpath: string,
        buipath: string
    ) {
        if (!ardexepath) {
            throw "arduino_debug.exe path not empty";
        }
        this.arduinoExePath = ardexepath;
        this.sketchbookPath = sketpath;
        this.buildPath = buipath;
    }

    // run arduino_debug.exe --install-boards "arduino:avr" to init package_index.json under Arduino15
    init(): Thenable<string[]> {
        return new Promise((resolve) => { resolve("not implemented"); });
    }
    // return ExitStatus or output
    build(inoFilePath: string): Thenable<string[]> {
        return new Promise((resolve) => { resolve("not implemented"); });
    }

    // return ExitStatus or output
    upload(inoFilePath: string): Thenable<string[]> {
        return new Promise((resolve) => { resolve("not implemented"); });
    }

    // return ExitStatus or output
    getPreference(pref: string): Thenable<any[]> {
        return new Promise((resolve) => { resolve("not implemented"); });
    }

    installBoard(board: string): Thenable<string[]> {
        return new Promise((resolve) => { resolve("not implemented"); });
    }

    installLibrary(library: string): Thenable<string[]> {
        return new Promise((resolve) => { resolve("not implemented"); });
    }

    monitor(): Thenable<string[]> {
        return new Promise((resolve) => { resolve("not implemented"); });
    }

    debug(): Thenable<string[]> {
        return new Promise((resolve) => { resolve("not implemented"); });
    }
}

