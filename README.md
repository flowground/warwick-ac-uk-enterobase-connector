# ![LOGO](logo.png) Enterobase-API **flow**ground Connector

## Description

A generated **flow**ground connector for the Enterobase-API API (version v2.0).

Generated from: https://api.apis.guru/v2/specs/warwick.ac.uk/enterobase/v2.0/swagger.json<br/>
Generated at: 2019-05-07T17:44:49+03:00

## API Description


API for EnteroBase (http://enterobase.warwick.ac.uk) 

EnteroBase is a user-friendly online resource, where users can upload their 
own sequencing data for de novo assembly by a stream-lined pipeline. The assemblies 
are used for calling MLST and wgMLST patterns, allowing users to compare their strains 
to publically available genotyping data from other EnteroBase users, GenBank and classical MLST databases.

Click here to find how to get and use an API token: http://bit.ly/1TKlaOU


## Authorization

Supported authorization schemes:
- Basic Authentication

## Actions

### Top level information about EnteroBase databases

*Tags:* `Info`

#### Input Parameters
* `prefix` - _optional_ - Database prefix, e.g. SAL for Salmonella
* `name` - _optional_ - Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively
* `description` - _optional_ - Database description

### Login endpoint, refresh your API token

*Tags:* `Login`

#### Input Parameters
* `username` - _optional_ - EnteroBase username
* `password` - _optional_ - EnteroBase Password

### Generic endpoint for lookup list of barcodes

*Tags:* `Lookup`

#### Input Parameters
* `barcode` - _optional_ - Unique barcode for Traces records, <database prefix>_<ID code>_<Table code> e.g. SAL_AA0001AA_ST

### Generic endpoint for lookup of barcodes

*Tags:* `Lookup`

#### Input Parameters
* `barcode` - _required_ - Unique barcode for Traces records, <database prefix>_<ID code>_<Table code> e.g. SAL_AA0001AA_ST

### Generic endpoint for lookup of barcodes

*Tags:* `Lookup`

#### Input Parameters
* `barcode` - _required_ - Unique barcode for Traces records, <database prefix>_<ID code>_<Table code> e.g. SAL_AA0001AA_ST

### Genome assemblies

*Tags:* `Assemblies`

#### Input Parameters
* `orderby` - _optional_ - Field to order by. Default: barcode
* `only_fields` - _optional_
* `barcode` - _optional_ - Unique barcode for Traces records, <database prefix>_<ID code>_AS e.g. SAL_AA0001AA_AS
* `n50` - _optional_
* `top_species` - _optional_
* `uberstrain` - _optional_
* `version` - _optional_
* `limit` - _optional_ - Number of results per page
* `reldate` - _optional_
* `offset` - _optional_ - Cursor position in results
* `assembly_status` - _optional_
* `sortorder` - _optional_ - Order of search results: asc or desc
* `database` - _required_ - Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

### Genome assemblies

*Tags:* `Assemblies`

#### Input Parameters
* `barcode` - _required_ - Unique barcode for Traces records, <database prefix>_<ID code>_AS e.g. SAL_AA0001AA_AS
* `database` - _required_ - Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

### Genome assemblies

*Tags:* `Assemblies`

#### Input Parameters
* `barcode` - _required_ - Unique barcode for Traces records, <database prefix>_<ID code>_AS e.g. SAL_AA0001AA_AS
* `database` - _required_ - Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

### Genome assemblies

*Tags:* `Assemblies`

#### Input Parameters
* `barcode` - _required_ - Unique barcode for Traces records, <database prefix>_<ID code>_AS e.g. SAL_AA0001AA_AS
* `database` - _required_ - Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

### Genotyping schemes

*Tags:* `Schemes`

#### Input Parameters
* `orderby` - _optional_ - Field to order by. Default: barcode
* `scheme_name` - _optional_
* `created` - _optional_
* `lastmodified` - _optional_
* `barcode` - _optional_ - Unique barcode for Strain records, <database prefix>_<ID code> e.g. SAL_AA0001AA
* `label` - _optional_
* `only_fields` - _optional_
* `version` - _optional_
* `limit` - _optional_ - Number of results per page
* `sortorder` - _optional_ - Order of search results: asc or desc
* `offset` - _optional_ - Cursor position in results
* `database` - _required_ - Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

### Genotyping schemes

*Tags:* `Schemes`

#### Input Parameters
* `barcode` - _required_ - Unique barcode for Strain records, <database prefix>_<ID code> e.g. SAL_AA0001AA
* `database` - _required_ - Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

### Genotyping schemes

*Tags:* `Schemes`

#### Input Parameters
* `barcode` - _required_ - Unique barcode for Strain records, <database prefix>_<ID code> e.g. SAL_AA0001AA
* `database` - _required_ - Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

### Genotyping schemes

*Tags:* `Schemes`

#### Input Parameters
* `barcode` - _required_ - Unique barcode for Strain records, <database prefix>_<ID code> e.g. SAL_AA0001AA
* `database` - _required_ - Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

### Strain data

*Tags:* `Straindata`

#### Input Parameters
* `comment` - _optional_
* `secondary_sample_accession` - _optional_
* `my_strains` - _optional_
* `offset` - _optional_ - Cursor position in results
* `serotype` - _optional_
* `n50` - _optional_
* `county` - _optional_
* `only_fields` - _optional_
* `postcode` - _optional_
* `lab_contact` - _optional_
* `substrains` - _optional_
* `custom_fields` - _optional_
* `city` - _optional_
* `strain_name` - _optional_
* `collection_date` - _optional_
* `collection_month` - _optional_
* `reldate` - _optional_
* `continent` - _optional_
* `source_details` - _optional_
* `version` - _optional_
* `latitude` - _optional_
* `email` - _optional_
* `source_niche` - _optional_
* `barcode` - _optional_ - Unique barcode for Traces records, <database prefix>_<ID code>_AS e.g. SAL_AA0001AA_AS
* `uberstrain` - _optional_
* `sortorder` - _optional_ - Order of search results: asc or desc
* `collection_year` - _optional_
* `orderby` - _optional_ - Field to order by. Default: strain barcode
* `assembly_status` - _optional_
* `source_type` - _optional_
* `country` - _optional_
* `region` - _optional_
* `longitude` - _optional_
* `sample_accession` - _optional_
* `limit` - _optional_ - Number of results per page
* `top_species` - _optional_
* `collection_time` - _optional_
* `database` - _required_ - Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

### Strain metadata

*Tags:* `Strains`

#### Input Parameters
* `comment` - _optional_
* `secondary_sample_accession` - _optional_
* `antigenic_formulas` - _optional_
* `my_strains` - _optional_
* `serotype` - _optional_
* `county` - _optional_
* `only_fields` - _optional_
* `postcode` - _optional_
* `lab_contact` - _optional_
* `substrains` - _optional_
* `city` - _optional_
* `strain_name` - _optional_
* `collection_date` - _optional_
* `collection_month` - _optional_
* `reldate` - _optional_
* `continent` - _optional_
* `source_details` - _optional_
* `version` - _optional_
* `latitude` - _optional_
* `assembly_barcode` - _optional_
* `source_niche` - _optional_
* `barcode` - _optional_ - Unique barcode for Strain records, <database prefix>_<ID code> e.g. SAL_AA0001AA
* `uberstrain` - _optional_
* `sortorder` - _optional_ - Order of search results: asc or desc
* `offset` - _optional_ - Cursor position in results
* `collection_year` - _optional_
* `orderby` - _optional_ - Field to order by. Default: barcode
* `return_all` - _optional_
* `source_type` - _optional_
* `country` - _optional_
* `region` - _optional_
* `longitude` - _optional_
* `sample_accession` - _optional_
* `limit` - _optional_ - Number of results per page
* `collection_time` - _optional_
* `database` - _required_ - Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

### Strain metadata

*Tags:* `Strains`

#### Input Parameters
* `barcode` - _required_ - Unique barcode for Strain records, <database prefix>_<ID code> e.g. SAL_AA0001AA
* `database` - _required_ - Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

### Strain metadata

*Tags:* `Strains`

#### Input Parameters
* `barcode` - _required_ - Unique barcode for Strain records, <database prefix>_<ID code> e.g. SAL_AA0001AA
* `database` - _required_ - Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

### Strain metadata

*Tags:* `Strains`

#### Input Parameters
* `barcode` - _required_ - Unique barcode for Strain records, <database prefix>_<ID code> e.g. SAL_AA0001AA
* `database` - _required_ - Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

### Strain previous metadata

*Tags:* `Strainsversion`

#### Input Parameters
* `comment` - _optional_
* `secondary_sample_accession` - _optional_
* `antigenic_formulas` - _optional_
* `my_strains` - _optional_
* `serotype` - _optional_
* `county` - _optional_
* `only_fields` - _optional_
* `postcode` - _optional_
* `lab_contact` - _optional_
* `substrains` - _optional_
* `city` - _optional_
* `strain_name` - _optional_
* `collection_date` - _optional_
* `collection_month` - _optional_
* `reldate` - _optional_
* `continent` - _optional_
* `source_details` - _optional_
* `version` - _optional_
* `latitude` - _optional_
* `assembly_barcode` - _optional_
* `source_niche` - _optional_
* `barcode` - _optional_ - Unique barcode for Strain records, <database prefix>_<ID code> e.g. SAL_AA0001AA
* `uberstrain` - _optional_
* `sortorder` - _optional_ - Order of search results: asc or desc
* `offset` - _optional_ - Cursor position in results
* `collection_year` - _optional_
* `orderby` - _optional_ - Field to order by. Default: barcode
* `return_all` - _optional_
* `source_type` - _optional_
* `country` - _optional_
* `region` - _optional_
* `longitude` - _optional_
* `sample_accession` - _optional_
* `limit` - _optional_ - Number of results per page
* `collection_time` - _optional_
* `database` - _required_ - Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

### Traces (sequence-reads) metadata

*Tags:* `Traces`

#### Input Parameters
* `orderby` - _optional_ - Field to order by. Default: barcode
* `barcode` - _optional_ - Unique barcode for Traces records, <database prefix>_<ID code>_TR e.g. SAL_AA0001AA_TR
* `only_fields` - _optional_
* `limit` - _optional_ - Number of results per page
* `sortorder` - _optional_ - Order of search results: asc or desc
* `offset` - _optional_ - Cursor position in results
* `database` - _required_ - Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

### Traces (sequence-reads) metadata

*Tags:* `Traces`

#### Input Parameters
* `barcode` - _required_ - Unique barcode for Traces records, <database prefix>_<ID code>_TR e.g. SAL_AA0001AA_TR
* `database` - _required_ - Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

### Traces (sequence-reads) metadata

*Tags:* `Traces`

#### Input Parameters
* `barcode` - _required_ - Unique barcode for Traces records, <database prefix>_<ID code>_TR e.g. SAL_AA0001AA_TR
* `database` - _required_ - Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

### Traces (sequence-reads) metadata

*Tags:* `Traces`

#### Input Parameters
* `barcode` - _required_ - Unique barcode for Traces records, <database prefix>_<ID code>_TR e.g. SAL_AA0001AA_TR
* `database` - _required_ - Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

### Alleles  data

*Tags:* `Alleles`

#### Input Parameters
* `allele_id` - _optional_
* `seq` - _optional_
* `barcode` - _optional_ - Unique barcode for Strain records, <database prefix>_<ID code> e.g. SAL_AA0001AA
* `reldate` - _optional_
* `locus` - _required_
* `only_fields` - _optional_
* `limit` - _optional_
* `offset` - _optional_
* `scheme` - _required_
* `database` - _required_ - Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

### Loci

*Tags:* `Loci`

#### Input Parameters
* `barcode` - _optional_ - Unique barcode for Strain records, <database prefix>_<ID code> e.g. SAL_AA0001AA
* `locus` - _optional_
* `only_fields` - _optional_
* `create_time` - _optional_
* `limit` - _optional_
* `offset` - _optional_
* `scheme` - _optional_
* `scheme` - _required_
* `database` - _required_ - Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

### ST profile data

*Tags:* `Sts`

#### Input Parameters
* `st_id` - _optional_
* `scheme` - _optional_
* `show_alleles` - _optional_
* `barcode` - _optional_ - Unique barcode for Strain records, <database prefix>_<ID code> e.g. SAL_AA0001AA
* `only_fields` - _optional_
* `limit` - _optional_
* `reldate` - _optional_
* `offset` - _optional_
* `scheme` - _required_
* `database` - _required_ - Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

## License

**flow**ground :- Telekom iPaaS / warwick-ac-uk-enterobase-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
