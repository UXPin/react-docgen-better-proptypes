"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colorPropsResult_1 = require("./colorPropsResult");
const sizePropsResult_1 = require("./sizePropsResult");
exports.stylePropsResult = Object.assign({}, colorPropsResult_1.colorPropsResult, sizePropsResult_1.sizePropsResult, { stylePropLocal: {
        description: '',
        required: true,
        type: {
            name: 'boolean',
        },
    } });
//# sourceMappingURL=stylePropsResult.js.map