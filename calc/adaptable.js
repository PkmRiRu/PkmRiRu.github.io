"use strict";
// By default, importing `@smogon/calc` provides a convenience wrapper that is roughly equivalent
// to importing `@smogon/calc/adaptable` and `import Generations from '@smogon/calc/data'` and
// using  `Generations` to populate the `Generation` param to these exports. Alternatively, an
// application may implement a different `@smogon/calc/data/interface` and pass a `Generation` from
// that to these exports.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.Stats = exports.Result = exports.Side = exports.Field = exports.Move = exports.Pokemon = exports.calculate = void 0;
var calc_1 = require("./calc");
__createBinding(exports, calc_1, "calculate");
var pokemon_1 = require("./pokemon");
__createBinding(exports, pokemon_1, "Pokemon");
var move_1 = require("./move");
__createBinding(exports, move_1, "Move");
var field_1 = require("./field");
__createBinding(exports, field_1, "Field");
__createBinding(exports, field_1, "Side");
var result_1 = require("./result");
__createBinding(exports, result_1, "Result");
var stats_1 = require("./stats");
__createBinding(exports, stats_1, "Stats");
