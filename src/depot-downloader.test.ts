/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Ian Lucas. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ChildProcessWithoutNullStreams } from "child_process";
import { existsSync } from "fs";
import { rm } from "fs/promises";
import { resolve } from "path";
import { afterAll, beforeAll, expect, test } from "vitest";
import { postInstall } from "../scripts/postinstall.js";
import { depotDownloader } from "./depot-downloader.js";

const depotsPath = resolve(process.cwd(), "depots");
const depotDownloaderPath = resolve(process.cwd(), "DepotDownloader");
const depotDownloaderBinPath = resolve(depotDownloaderPath, "DepotDownloader");

function read(ps: ChildProcessWithoutNullStreams) {
    return new Promise((resolve, reject) => {
        let stdout = "";
        ps.stdout.on("data", (data) => {
            stdout += data.toString();
        });
        ps.stderr.on("data", (data) => {
            console.error(data.toString());
        });
        ps.on("close", (code) => {
            (code === 0 ? resolve : reject)(stdout);
        });
    });
}

beforeAll(() => postInstall());

test("npm run postinstall", () => {
    expect(existsSync(depotDownloaderBinPath)).toBe(true);
});

test("depot-downloader", async () => {
    expect(
        await read(
            depotDownloader({
                app: 730,
                depot: 2347773,
                manifestOnly: true,
                debug: true
            })
        )
    ).toMatch(/Manifest (\d+)/);
});

afterAll(async () => {
    if (existsSync(depotDownloaderPath)) {
        await rm(depotDownloaderPath, {
            recursive: true
        });
    }
    if (existsSync(depotsPath)) {
        await rm(depotsPath, {
            recursive: true
        });
    }
});
