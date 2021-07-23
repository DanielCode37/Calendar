export default class KeyGenerator {
    keysUsed: String[] = [];
    generateKey() {
        const source = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        let retry = false;
        do {
            let key = "";
            for (let i = 0; i < 20; i++) {
                key += source[Math.round(Math.random() * 61)];
                if (i % 5 === 0) key += '-';
            }

            for (let usedKey of this.keysUsed) {
                if (usedKey === key) {
                    retry = true;
                    continue;
                }
            }
            return key;
        } while (retry)
    }
}