const ApplicationContextScope = {

    /**
    * This function is register the scope
    * @returns the application context after resgiteration
    */
    register: function () {
        try {
            if (typeof window !== 'undefined') {
                if (!window.applicationContext) {
                    window.applicationContext = ApplicationContextScope;
                }
            }
            if (typeof globalThis !== 'undefined') {
                if (!globalThis.applicationContext) {
                    globalThis.applicationContext = ApplicationContextScope;
                }
            }
            if (typeof global !== 'undefined') {
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
            delete applicationContext[key];
        } catch (error) {
            throw new Error(error.message);
        }
    },
}

module.exports = ApplicationContextScope;