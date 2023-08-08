import {Node} from "./node";

export class Composite extends Node {

    private keyword: string = '';
    private level: number = 0;

    protected children: Node[] = [];

    constructor(keyword: string, level: number) {
        super();
        this.keyword = keyword;
        this.level = level;
    }

    public add(node: Node): void {
        this.children.push(node);
        node.setParent(this);
    }

    public remove(node: Node): void {
        const componentIndex = this.children.indexOf(node);
        this.children.splice(componentIndex, 1);

        node.setParent(null);
    }

    public isComposite(): boolean {
        return true;
    }

    public search(value: string): string {
        const results = [];
        results.push(this.searchOnItself(value));
        for (const child of this.children) {
            results.push(child.search(value));
        }

        return `Branch(\n ${results.join(' + ')})`;
    }

    private searchOnItself(value: string): string {
        console.log(`Searching for value ${value} in ${this.keyword} Level ${this.level} \n`);
        if (this.keyword === value) {
            return `ELEMENT FOUND! Keyword ${this.keyword} Level ${this.level} \n`;
        } else {
            return `Element not found \n`;
        }
    }
}