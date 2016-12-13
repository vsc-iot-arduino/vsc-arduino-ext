import PromiseFactory from './promisefactory';

export class ArduinoUtil {
    static readonly factory: PromiseFactory<string> = new PromiseFactory<string>();

    static getArduinoCommand(arduinoIDEFolder: string): Thenable<string> {
        switch (process.platform) {
            case 'win32':
                //C:\Work\arduino-1.6.13\arduino_debug.exe
                return ArduinoUtil.factory.createPromise(arduinoIDEFolder + '\arduino_debug.exe');
            case 'linux':
                //~/yaweiw/arduino-1.6.13/arduino
                return ArduinoUtil.factory.createPromise(arduinoIDEFolder + '/arduino');
            default:
                return ArduinoUtil.factory.createPromise('open ' + arduinoIDEFolder + '/Arduino.app --wait-apps --args');
        }
    }

    static getLibraryFolder(): Thenable<string> {
        switch (process.platform) {
            case 'win32':
                return ArduinoUtil.factory.createPromise(process.env['USERPROFILE'] + '/Documents/Arduino/libraries');
            case 'linux':
                // Use root folder to be consistent with arduino commands:
                if (process.getuid && process.getuid() === 0) {
                    return ArduinoUtil.factory.createPromise('/root/Arduino/libraries');
                }
                return ArduinoUtil.factory.createPromise(process.env['HOME'] + '/Arduino/libraries');
            default:
                return ArduinoUtil.factory.createPromise(process.env['HOME'] + '/Documents/Arduino/libraries');
        }
    }
}