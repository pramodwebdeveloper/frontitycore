import { Configuration } from "webpack";
import { Target, BabelConfigs, Mode } from "../../../types";
/**
 * The options of the {@link moduleConf} function.
 */
interface ModuleOptions {
    /**
     * The target of the build: "server", "es5" or "module".
     */
    target: Target;
    /**
     * The mode of the build: "development" or "production".
     */
    mode: Mode;
    /**
     * The configurations of Babel, generated in a previous step.
     */
    babel: BabelConfigs;
}
/**
 * Generate the object for Webpack's entry configuration.
 *
 * Official Webpack docs: https://webpack.js.org/configuration/entry-context/.
 *
 * @param options - Defined in {@link EntryOptions}.
 *
 * @returns The configuration object for Webpack.
 */
declare const moduleConf: ({ target, babel, mode, }: ModuleOptions) => Configuration["module"];
export default moduleConf;
