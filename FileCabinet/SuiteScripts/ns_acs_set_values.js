/**
 * Copyright (c) 1998-2017 NetSuite, Inc. 2955 Campus Drive, Suite 100, San
 * Mateo, CA, USA 94403-2511 All Rights Reserved.
 *
 * This software is the confidential and proprietary information of NetSuite,
 * Inc. ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the license
 * agreement you entered into with NetSuite.
 */

/**
 * Module Description:
 * Version      Date            Author          Remarks
 * 1.00         May 12, 2020    USHAH       Initial Version
 */

/**
 * @NApiVersion 2.0
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 */
define(['N/runtime', 'N/log', 'N/search', 'N/url', 'N/record'],
    function(runtime, log, search, url, record) {
        function beforeLoad(context) {
            var newRec = context.newRecord;
            if (context.type == context.UserEventType.CREATE) {
               newRec.setValue('custrecord_project_manager',runtime.getCurrentUser().id);
            }
        }
        return {
            beforeLoad: beforeLoad,
            //      beforeSubmit: beforeSubmit,
            //      afterSubmit: afterSubmit
        };

    });