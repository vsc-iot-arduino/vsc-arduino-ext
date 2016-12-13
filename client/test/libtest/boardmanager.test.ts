//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import {BoardManager} from '../../src/lib/boardmanager/boardmanager';
import {ArduinoDebug} from '../../src/lib/arduinodebug/arduinodebug';

// Defines a Mocha test suite to group tests of similar kind together
suite("BoardManager", () => {
    var bdmgr: BoardManager = new BoardManager(new ArduinoDebug("ardexe_path", "ino_path", "bui_path"));
    // Defines a Mocha unit test
    test("ListInstalled", () => {
        let r = bdmgr.ListInstalled("testpackage", "arduino").then((ret) => {
            assert.equal("1.0", ret[0].version);
        });
    });
});