"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const webpack_plugin_1 = __importDefault(require("@loadable/webpack-plugin"));
const webpack_1 = require("webpack");
const webpack_bundle_analyzer_1 = require("webpack-bundle-analyzer");
exports.default = ({ target, mode, outDir, }) => {
    const config = [
        // Create HTML files for bundle analyzing.
        new webpack_bundle_analyzer_1.BundleAnalyzerPlugin({
            analyzerMode: "static",
            reportFilename: `${target !== "server" ? `../` : ""}analyze/${target}-${mode}.html`,
            openAnalyzer: false,
            logLevel: "silent",
        }),
        new webpack_1.WatchIgnorePlugin([new RegExp(outDir)]),
        new webpack_1.IgnorePlugin(/^encoding$/),
    ];
    // Support HMR in development. Only needed in client.
    if (target !== "server" && mode === "development")
        config.push(new webpack_1.HotModuleReplacementPlugin());
    // Needed for code splitting in client.
    if (target !== "server")
        config.push(new webpack_plugin_1.default({
            filename: `../bundling/chunks.${target}.json`,
        }));
    // Avoid code splitting in server.
    if (target === "server")
        config.push(new webpack_1.optimize.LimitChunkCountPlugin({ maxChunks: 1 }));
    return config;
};
