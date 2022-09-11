"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("vitest/config");
exports.default = (0, config_1.defineConfig)({
    test: {},
    resolve: {
        alias: {
            "@models": "./src/models/",
            "@repositories": "./src/repositories/",
            "@routers": "./src/routers/",
            "@use-cases": "./src/use-cases/",
            "@test": "./test/",
        },
    },
});
