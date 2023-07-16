import plugin from "../plugin.json";

const appSettings = acode.require('settings');
const loader = acode.require('loader');

class PyFormatX {
    #worker = null;

    async init() {
        acode.registerFormatter(plugin.id, ["py"], async () => {
            const { editor, activeFile } = editorManager;
            const code = editor.getValue();
            this.formateCode(code);
        })
        this.initWorker();
    }

    async initWorker() {
        if(this.#worker) return;
        this.#worker = new Worker(this.baseUrl + 'worker.js');
        this.#worker.postMessage({
            action: 'init',
            baseUrl: this.baseUrl,
        });
        this.#worker.onmessage = this.#workerOnMessage.bind(this);
    }

    async #workerOnMessage(e) {
        const {
            action,
            success,
            error,
            output,
        } = e.data;

        switch(action) {
            case 'init':
                if(success) {
                    window.toast("loaded required modules 🎉",3000);
                } else {
                    acode.alert("PyFormatX Error",error);
                }
                break;

            case 'formatCode':
                if(success) {
                    this.formattedCode(output);
                } else {
                    acode.alert("PyFormatX Error",error);
                }
                loader.removeTitleLoader();
                break;
            default:
                loader.removeTitleLoader();
                break;
        }
    }

    async formateCode(sourceCode) {
        await this.initWorker();
        this.#worker.postMessage({
            action: "formatCode",
            sourceCode: sourceCode
        })
        loader.showTitleLoader();
    }
    
    async formattedCode(res){
        const { activeFile } = editorManager;
        const { session } = activeFile;
        
        if (res.get("formatted")) {
            this.setValueToEditor(session, res.get("formatted"));
        } else if (res.get("message")) {
            acode.alert("PyFormatX Error",res.get("message"))
        } else {
            acode.alert("PyFormatX Error","Something went wrong! Report it Developer.")
        }
    }

    setValueToEditor(session, formattedCode) {
        const { $undoStack, $redoStack, $rev, $mark } = Object.assign({}, session.getUndoManager());
        session.setValue(formattedCode);
        const undoManager = session.getUndoManager();
        undoManager.$undoStack = $undoStack;
        undoManager.$redoStack = $redoStack;
        undoManager.$rev = $rev;
        undoManager.$mark = $mark;
    }

    async destroy() {
        acode.unregisterFormatter(plugin.id);
        this.#worker?.terminate();
    }
}

if(window.acode) {
    const acodePlugin = new PyFormatX();
    acode.setPluginInit(
        plugin.id,
        (baseUrl, $page, { cacheFileUrl, cacheFile }) => {
            if(!baseUrl.endsWith("/")) {
                baseUrl += "/";
            }
            acodePlugin.baseUrl = baseUrl;
            acodePlugin.init($page, cacheFile, cacheFileUrl);
        }
    );
    acode.setPluginUnmount(plugin.id, () => {
        acodePlugin.destroy();
    });
}
