// https://webpack.js.org/concepts/plugins
// https://webpack.js.org/contribute/writing-a-plugin
const plugin = 'WebpackCompilationCompletedPlugin';;

class WebpackCompilationCompletedPlugin {
    // A webpack plugin is a JavaScript object that has an apply method.
    // This apply method is called by the webpack compiler, giving access to the entire compilation lifecycle.
    apply(compiler) {
        // https://webpack.js.org/api/compiler-hooks ('done' is one of the hook)
        compiler.hooks.done.tap(plugin, (stats) => {
            console.log("+++++++++++++++++++++++++++++++++++++++ Compilation Completed ++++++++++++++++++++++++++++++++++++++++++");
        });
    }
}

module.exports = WebpackCompilationCompletedPlugin;
