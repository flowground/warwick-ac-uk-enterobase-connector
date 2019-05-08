/**
 * Auto-generated action file for "Enterobase-API" API.
 *
 * Generated at: 2019-05-07T14:44:49.362Z
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
 * Endpoint Path: '/api/v2.0/{database}/strains/{barcode}'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "barcode",
    "database"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "barcode": "barcode",
    "database": "database",
    "antigenic_formulas": "antigenic_formulas",
    "assembly_barcode": "assembly_barcode",
    "city": "city",
    "collection_date": "collection_date",
    "collection_month": "collection_month",
    "collection_time": "collection_time",
    "collection_year": "collection_year",
    "comment": "comment",
    "continent": "continent",
    "country": "country",
    "county": "county",
    "lab_contact": "lab_contact",
    "latitude": "latitude",
    "limit": "limit",
    "longitude": "longitude",
    "my_strains": "my_strains",
    "offset": "offset",
    "only_fields": "only_fields",
    "orderby": "orderby",
    "postcode": "postcode",
    "region": "region",
    "reldate": "reldate",
    "return_all": "return_all",
    "sample_accession": "sample_accession",
    "secondary_sample_accession": "secondary_sample_accession",
    "serotype": "serotype",
    "sortorder": "sortorder",
    "source_details": "source_details",
    "source_niche": "source_niche",
    "source_type": "source_type",
    "strain_name": "strain_name",
    "substrains": "substrains",
    "uberstrain": "uberstrain",
    "version": "version",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

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
        pathName: '/api/v2.0/{database}/strains/{barcode}',
        method: 'post',
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