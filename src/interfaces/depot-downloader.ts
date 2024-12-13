/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Ian Lucas. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export interface DepotDownloaderArgs {
    /**
     * -debug enables debug output.
     */
    debug?: boolean;

    /**
     * -app <#> the AppID to download.
     */
    app?: number;

    /**
     * -depot <#> the DepotID to download.
     */
    depot?: number;

    /**
     * -manifest <id> manifest id of content to download (requires -depot, default: current for branch).
     */
    manifest?: string;

    /**
     * -ugc <#> the UGC ID to download.
     */
    ugc?: number;

    /**
     * -beta <branchname> download from specified branch if available (default: Public).
     */
    beta?: string;

    /**
     * -betapassword <pass> branch password if applicable.
     */
    betapassword?: string;

    /**
     * -all-platforms downloads all platform-specific depots when -app is used.
     */
    allPlatforms?: boolean;

    /**
     * -os <os> the operating system for which to download the game (windows, macos or linux, default: OS the program is currently running on).
     */
    os?: string;

    /**
     * -osarch <arch> the architecture for which to download the game (32 or 64, default: the host's architecture).
     */
    osarch?: string;

    /**
     * -all-languages download all language-specific depots when -app is used.
     */
    allLanguages?: boolean;

    /**
     * -language <lang> the language for which to download the game (default: english).
     */
    language?: string;

    /**
     * -lowviolence download low violence depots when -app is used.
     */
    lowviolence?: boolean;

    /**
     * -pubfile <#> the PublishedFileId to download. (Will automatically resolve to UGC id).
     */
    pubfile?: number;

    /**
     * -username <user> the username of the account to login to for restricted content.
     */
    username?: string;

    /**
     * -password <pass> the password of the account to login to for restricted content.
     */
    password?: string;

    /**
     * -remember-password if set, remember the password for subsequent logins of this user.
     */
    rememberPassword?: boolean;

    /**
     * -dir <installdir> the directory in which to place downloaded files.
     */
    dir?: string;

    /**
     * -filelist <file.txt> a list of files to download (from the manifest).
     */
    filelist?: string;

    /**
     * -validate Include checksum verification of files already downloaded.
     */
    validate?: boolean;

    /**
     * -manifest-only downloads a human readable manifest for any depots that would be downloaded.
     */
    manifestOnly?: boolean;

    /**
     * -cellid <#> the overridden CellID of the content server to download from.
     */
    cellid?: number;

    /**
     * -max-servers <#> maximum number of content servers to use. (default: 20).
     */
    maxServers?: number;

    /**
     * -max-downloads <#> maximum number of chunks to download concurrently. (default: 8).
     */
    maxDownloads?: number;

    /**
     * -loginid <#> a unique 32-bit integer Steam LogonID in decimal, required if running multiple instances of DepotDownloader concurrently.
     */
    loginid?: number;

    /**
     * -all-archs download all architecture-specific depots when -app is used.
     */
    allArchs?: boolean;
}
