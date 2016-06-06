#!/usr/bin/env node

import yargs from "yargs";

import gemfuryPublish from "../gemfury-publish";

const argv = yargs
    .help("help")
    .wrap(100)
    .usage("Usage: $0 <options>")
    .env()
    .option("gemfuryUser", {
        demand: true,
        describe: "Gemfury username",
        type: "string"
    })
    .option("gemfuryApiKey", {
        demand: true,
        describe: "Gemfury API key",
        type: "string"
    })
    .argv;

gemfuryPublish(argv);
