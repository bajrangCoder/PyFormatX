async function loadPyodideAndPackages(baseUrl = '') {
    importScripts(`${baseUrl}/lib/pyodide.js`);
    self.pyodide = await loadPyodide();
    await self.pyodide.loadPackage(`${baseUrl}/lib/packaging-23.0-py3-none-any.whl`);
    await self.pyodide.loadPackage(`${baseUrl}/lib/black-23.7.0-py3-none-any.whl`);
    await self.pyodide.loadPackage(`${baseUrl}/lib/platformdirs-3.8.1-py3-none-any.whl`);
    await self.pyodide.loadPackage(`${baseUrl}/lib/mypy_extensions-1.0.0-py3-none-any.whl`);
    await self.pyodide.loadPackage(`${baseUrl}/lib/pathspec-0.11.1-py3-none-any.whl`);
    await self.pyodide.loadPackage(`${baseUrl}/lib/click-8.1.3-py3-none-any.whl`);
    console.log("Loaded all required modules 🎉");
}

const actions = {
    async init(data) {
        const { baseUrl } = data;
        try {
            await loadPyodideAndPackages(baseUrl);
            self.postMessage({
                action: 'init',
                success: true,
            });
        } catch(error) {
            self.postMessage({
                action: 'init',
                success: false,
                error,
            });
        }
    },
    async formatCode(data) {
        const { sourceCode } = data;
        globalThis.sourceCode = sourceCode || "";
        try {
            await self.pyodide.runPythonAsync(`
                import black
                from js import sourceCode
                result = {}
                print(sourceCode)
                if sourceCode == "":
                    result["message"] = "No source code provided"
                else:
                    try:
                        mode = black.FileMode()
                        result["formatted"] = black.format_file_contents(sourceCode, fast=False, mode=mode)
                    except black.NothingChanged:
                        result["formatted"] = sourceCode
                    except Exception as exc:
                        result["message"] = str(exc)
            `);
            let res = await self.pyodide.globals.get("result").toJs();
            self.postMessage({
                action: 'formatCode',
                success: true,
                output: res,
            });
        } catch(error) {
            self.postMessage({
                action: 'formatCode',
                success: false,
                error: error?.message ?? error?.toString(),
            });
        }
    }
}

self.onmessage = async function(e) {
    const { action } = e.data;

    if(actions[action]) {
        await actions[action](e.data);
    }
};