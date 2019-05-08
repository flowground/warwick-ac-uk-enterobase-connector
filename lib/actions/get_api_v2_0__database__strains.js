/**
 * Auto-generated action file for "Enterobase-API" API.
 *
 * Generated at: 2019-05-07T14:44:49.361Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / warwick-ac-uk-enterobase-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: undefined
 * Endpoint Path: '/api/v2.0/{database}/strains'
 * Method: 'get'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "comment",
    "secondary_sample_accession",
    "antigenic_formulas",
    "my_strains",
    "serotype",
    "county",
    "only_fields",
    "postcode",
    "lab_contact",
    "substrains",
    "city",
    "strain_name",
    "collection_date",
    "collection_month",
    "reldate",
    "continent",
    "source_details",
    "version",
    "latitude",
    "assembly_barcode",
    "source_niche",
    "barcode",
    "uberstrain",
    "sortorder",
    "offset",
    "collection_year",
    "orderby",
    "return_all",
    "source_type",
    "country",
    "region",
    "longitude",
    "sample_accession",
    "limit",
    "collection_time",
    "database"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "comment": "comment",
    "secondary_sample_accession": "secondary_sample_accession",
    "antigenic_formulas": "antigenic_formulas",
    "my_strains": "my_strains",
    "serotype": "serotype",
    "county": "county",
    "only_fields": "only_fields",
    "postcode": "postcode",
    "lab_contact": "lab_contact",
    "substrains": "substrains",
    "city": "city",
    "strain_name": "strain_name",
    "collection_date": "collection_date",
    "collection_month": "collection_month",
    "reldate": "reldate",
    "continent": "continent",
    "source_details": "source_details",
    "version": "version",
    "latitude": "latitude",
    "assembly_barcode": "assembly_barcode",
    "source_niche": "source_niche",
    "barcode": "barcode",
    "uberstrain": "uberstrain",
    "sortorder": "sortorder",
    "offset": "offset",
    "collection_year": "collection_year",
    "orderby": "orderby",
    "return_all": "return_all",
    "source_type": "source_type",
    "country": "country",
    "region": "region",
    "longitude": "longitude",
    "sample_accession": "sample_accession",
    "limit": "limit",
    "collection_time": "collection_time",
    "database": "database"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['api_key'] = {username: cfg.username, password: cfg.password};;

    let callParams = {
        spec: spec,
        operationId: undefined,
        pathName: '/api/v2.0/{database}/strains',
        method: 'get',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}