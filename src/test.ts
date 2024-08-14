/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Ian Lucas. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { depotDownloader } from "./index.js";

(async () => {
    console.log(
        await depotDownloader({
            app: 730,
            depot: 2347773,
            manifestOnly: true,
            debug: true
        })
    );
})();
