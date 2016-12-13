export interface IArduinoDebug {
    /**
     * Resolve the children of `node`.
     *
     * @param node The node from which the provider resolves children.
     * @return Children of `node`.
     */
    // arduino --board arduino:avr:nano:cpu=atmega168 --port /dev/ttyACM0 --upload /path/to/sketch/sketch.ino


    init(): Thenable<Array<string>>;

    build(inoPath: string): Thenable<Array<string>>;

    upload(inoPath: string): Thenable<Array<string>>;

    getPreference(pref: string): Thenable<Array<any>>;

    installBoard(boardCmdParam: string): Thenable<Array<string>>;

    installLibrary(libarayCmdParam: string): Thenable<Array<string>>;

    monitor(): Thenable<Array<string>>;

    debug(): Thenable<Array<string>>;
}

export enum ExitStatus {
    Success = 1,
    BuildOrUploadFailed,
    SketchNotFound,
    InvalidArgumentCommandline,
    PreferenceNotExist
}

