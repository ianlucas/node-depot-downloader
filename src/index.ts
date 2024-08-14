/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Ian Lucas. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { exec } from "child_process";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { DepotDownloaderArgs } from "./interfaces/depot-downloader.js";
import { toKebabCase } from "./utils/to-kebab-case.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootPath = join(__dirname, "..");
const extractPath = join(rootPath, "DepotDownloader");
const executablePath = join(extractPath, "DepotDownloader");

export function depotDownloader({ debug, ...args }: DepotDownloaderArgs): Promise<string> {
    return new Promise((resolve, reject) => {
        const formattedArgs = Object.entries(args)
            .map(([key, value]) => {
                key = toKebabCase(key);
                return typeof value === "boolean" ? `-${key}` : `-${key} ${value}`;
            })
            .join(" ");
        const command = `${executablePath} ${formattedArgs}`;
        if (debug) {
            console.log(command);
        }
        exec(command, (error, stdout) => {
            if (error) return reject(error);
            resolve(stdout);
        });
    });
}

export function resolvePath(...paths: string[]): string {
    return join(rootPath, ...paths);
}
