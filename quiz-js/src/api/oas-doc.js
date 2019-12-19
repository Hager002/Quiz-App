"use strict";
const fs = require("fs");
const path = require("path");
const spec = fs.readFileSync(path.join(__dirname, "./oas-doc.yaml"), "utf8"); // lies das file an diesem pfad
const jsyaml = require("js-yaml");
const oasDoc = jsyaml.safeLoad(spec);
module.exports = oasDoc;
