// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

/// <reference path="../../node/node.d.ts"/>

import VsoBaseInterfaces = require('../interfaces/common/VsoBaseInterfaces');

export class PersonalAccessTokenCredentialHandler implements VsoBaseInterfaces.IRequestHandler {
    token: string;

    constructor(token: string) {
        this.token = token;
    }

    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options:any): void {
        options.headers['Authorization'] = 'Basic ' + new Buffer(this.token + ':').toString('base64');
        options.headers['X-TFS-FedAuthRedirect'] = 'Suppress';
    }
}
