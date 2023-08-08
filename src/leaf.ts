import {Node} from "./node";

export class Leaf extends Node {
    private keyword: string = '';
    private level: number = 0;

    constructor(keyword: string, level: number) {
        super();
        this.keyword = keyword;
        this.level = level;
    }

    public search(value: string): string {
        console.log(`Searching for value ${value} in ${this.keyword} Level ${this.level} \n`);
        if (this.keyword === value) {
            return `ELEMENT FOUND! Keyword ${this.keyword} Level ${this.level} \n`;
        } else {
            return `Element not found \n`;
        }
    }
}