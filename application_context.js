const ApplicationContextScope = {

    scope: 0,

    /**
    * This function is register the scope
    * @returns the application context after resgiteration
    */
    register: function () {
        try {
            if (typeof window !== 'undefined') {
                this.scope = 1;
                if (!window.applicationContext) {
                    window.applicationContext = ApplicationContextScope;
                }
            }
            if (typeof globalThis !== 'undefined') {
                this.scope = 2;
                if (!globalThis.applicationContext) {
                    globalThis.applicationContext = ApplicationContextScope;
                }
            }
            if (typeof global !== 'undefined') {
                this.scope = 3;
                if (!global.applicationContext) {
                    global.applicationContext = ApplicationContextScope;
                }
            }

            return applicationContext;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    /**
     * This function set your variable in application context
     * @param {String} key - key as string  
     * @param {String} value - value as string 
     * @returns the acknowledgement of the success
     * @throws error if scope is not registered
     */
    set: (key, value) => {
        try {
            switch (ApplicationContextScope.scope) {
                case 1:
                    window[key] = value;
                    break;
                case 2:
                    global[key] = value;
                    break;
                case 3:
                    globalThis[key] = value;
                    break;
                default:
                    break;
            }
            applicationContext[key] = value;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    /**
     * This function returns the value of given key in application context
     * @param {String} key - key as string  
     * @returns the value of given key
     * @throws error if scope is not registered
     */
    get: (key) => {
        try {
            return applicationContext[key];
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * This function deletes key in application context
     * @param {String} key - key as string  
     * @returns the value of given key
     * @throws error if scope is not registered
     */
    delete: (key) => {
        try {
            switch (ApplicationContextScope.scope) {
                case 1:
                    delete window[key];
                    break;
                case 2:
                    delete global[key];
                    break;
                case 3:
                    delete globalThis[key];
                    break;
                default:
                    break;
            }
            delete applicationContext[key];
        } catch (error) {
            throw new Error(error.message);
        }
    },
}

module.exports = ApplicationContextScope;