export abstract class Node {
    protected parent: Node | null = null;

    public setParent(parent: Node | null) {
        this.parent = parent;
    }

    public getParent(): Node | null {
        return this.parent;
    }

    public add(node: Node): void {
    }

    public remove(node: Node): void {
    }

    public isComposite(): boolean {
        return false;
    }

    public abstract search(value: string): string;
}