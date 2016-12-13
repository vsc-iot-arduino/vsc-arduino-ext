/*
{
          "name": "Arduino AVR Boards",
          "architecture": "avr",
          "version": "1.6.4",
          "category": "Arduino",
          "help": {
            "online": "http://www.arduino.cc/en/Reference/HomePage"
          },
          "url": "http://downloads.arduino.cc/cores/avr-1.6.4.tar.bz2",
          "archiveFileName": "avr-1.6.4.tar.bz2",
          "checksum": "SHA-256:8a243410aeded6dbcbc4b134ba10be5c2562d137bfcf3ac97abdc5844933b363",
          "size": "4780884",
          "boards": [
            {"name": "Arduino Yún"},
            {"name": "Arduino Uno"},
            {"name": "Arduino Diecimila"},
            {"name": "Arduino Nano"},
            {"name": "Arduino Mega"},
            {"name": "Arduino MegaADK"},
            {"name": "Arduino Leonardo"},
            {"name": "Arduino Micro"},
            {"name": "Arduino Esplora"},
            {"name": "Arduino Mini"},
            {"name": "Arduino Ethernet"},
            {"name": "Arduino Fio"},
            {"name": "Arduino BT"},
            {"name": "Arduino LilyPadUSB"},
            {"name": "Arduino Lilypad"},
            {"name": "Arduino Pro"},
            {"name": "Arduino ATMegaNG"},
            {"name": "Arduino Robot Control"},
            {"name": "Arduino Robot Motor"}
          ],
          "toolsDependencies": [
            {
              "packager": "arduino",
              "name": "avr-gcc",
              "version": "4.8.1-arduino5"
            },
            {
              "packager": "arduino",
              "name": "avrdude",
              "version": "6.0.1-arduino5"
            }
          ]
        },
*/

import Board from './board';
import ToolDependency from './toolsdep';

export default class Package {
    constructor(
        public packageName: string,
        public architecture: string,
        public version: string,
        public category: string,
        public url: string,
        public archiveFileName: string,
        public checksum: string,
        public size: string,
        public boards: Board[],
        public toolsDependencies: ToolDependency[]
        ) {
    }

}