export interface IArduinoDebug {
    /**
     * Resolve the children of `node`.
     *
     * @param node The node from which the provider resolves children.
     * @return Children of `node`.
     */
    // arduino --board arduino:avr:nano:cpu=atmega168 --port /dev/ttyACM0 --upload /path/to/sketch/sketch.ino


    Init(): Thenable<Array<string>>;

    Build(inoPath: string): Thenable<Array<string>>;

    Upload(inoPath: string): Thenable<Array<string>>;

    GetPreference(pref: string): Thenable<Array<any>>;

    InstallBoard(boardCmdParam: string): Thenable<Array<string>>;

    InstallLibrary(libarayCmdParam: string): Thenable<Array<string>>;

    Monitor(): Thenable<Array<string>>;

    Debug(): Thenable<Array<string>>;
}

export enum ExitStatus {
    Success = 1,
    BuildOrUploadFailed,
    SketchNotFound,
    InvalidArgumentCommandline,
    PreferenceNotExist
}

