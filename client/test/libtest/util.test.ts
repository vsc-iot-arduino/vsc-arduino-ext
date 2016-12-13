//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import PromiseFactory from '../../src/lib/utilities/promisefactory';
import {ArduinoUtil} from '../../src/lib/utilities/arduinoutil';

// Defines a Mocha test suite to group tests of similar kind together
suite("Utilities", () => {
    var factory = new PromiseFactory<string>();
    // Defines a Mocha unit test
    test("createPromise", () => {
        let r = factory.createPromise("utility test");
        r.then((val)=>{assert.equal("utility test", val);});
        });
    test("getArduinoCommand", () => {
        let r = ArduinoUtil.getArduinoCommand("C:\\Work\\VSIot\\arduinoIDE\\arduino-1.6.10");
        r.then((val)=>{assert.equal("C:\\Work\\VSIot\\arduinoIDE\\arduino-1.6.10\\arduino.exe", val);});
        });
    });