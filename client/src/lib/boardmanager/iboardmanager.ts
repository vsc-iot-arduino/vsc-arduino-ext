import Package from './Package';

export interface IBoardManager {
    /**
     * Resolve the children of `node`.
     *
     * @param node The node from which the provider resolves children.
     * @return Children of `node`.
     */
    // arduino --board arduino:avr:nano:cpu=atmega168 --port /dev/ttyACM0 --upload /path/to/sketch/sketch.ino
    ListInstalled(packageName: string, architecture: string, version?: string): Thenable<Package[]>;

    Search(keyword?: string): Thenable<Package[]>;

    //--install-boards 'package name':'platform architecture'[:version]
    InstallPackage(packageName: string, architecture: string, version?: string): Thenable<Package[]>;

    //%USERPROFILE%\AppData\Local\Arduino15\packages\<arduino>\hardware\<avr>\<1.6.15>
    //%USERPROFILE%\AppData\Local\Arduino15\packages\<esp8266>\hardware\<esp8266>\<2.3.0>
    RemovePackage(packageName: string, architecture: string, version?: string): Thenable<Status>;
}

export enum Status {
    Success = 0,
    Error,
    PackageNotFound
}
