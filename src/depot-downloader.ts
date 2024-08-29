/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Ian Lucas. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ChildProcessWithoutNullStreams, spawn } from "child_process";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { DepotDownloaderArgs } from "./interfaces/depot-downloader.js";
import { toKebabCase } from "./utils/to-kebab-case.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootPath = join(__dirname, "..");
const extractPath = join(rootPath, "DepotDownloader");
const executablePath = join(extractPath, "DepotDownloader");

export function depotDownloader({ debug, ...args }: DepotDownloaderArgs): ChildProcessWithoutNullStreams {
    const formattedArgs = Object.entries(args).flatMap(([key, value]) => {
        key = toKebabCase(key);
        return typeof value === "boolean" ? [`-${key}`] : [`-${key}`, value.toString()];
    });
    if (debug) {
        console.log(`${executablePath} ${formattedArgs.join(" ")}`);
    }
    return spawn(executablePath, formattedArgs);
}
