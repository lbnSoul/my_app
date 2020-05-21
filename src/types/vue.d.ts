import Vue from 'vue';

declare module 'vue/types/vue' {
    interface Vue {
        $spaceUuid: string;
        /**
         * @param str tip message
         * @return void
         */
        successMsg(str: string): void;

        /**
         * @param str tip message
         * @return void
         */
        warningMsg(str: string): void;

        setBoState(key: string, val: any): void;

        getBoState(key: string): void;

        setVoState(key: string, val: any): void;

        getVoState(key: string) : void;
    }
}
