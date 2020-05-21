export default {
    install(vue: any) {
        vue.prototype.successMsg = (str: string): void => {

        };

        vue.prototype.warningMsg = (str: string): void => {

        };
        vue.mixin({
            methods: {
                setBoState(key: string, val: any): void {
                    // @ts-ignore
                    this._.set(this.bo, key, val)
                },

                getBoState(key: string): any {
                    // @ts-ignore
                    return this._.get(this.bo, key)
                },

                setVoState(key: string, val: any): void {
                    // @ts-ignore
                    this._.set(this.vo, key, val)
                },

                getVoState(key: string): any {
                    // @ts-ignore
                    return this._.get(this.vo, key)
                },
            },
        })
    },
}
