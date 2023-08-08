import {Node} from "./node";
import {Composite} from "./composite";
import {Leaf} from "./leaf";

/**
 * The client code works with all of the components via the base interface.
 */
function search(tree: Node, value: string) {
    console.log(`RESULT for search: ${tree.search(value)}`);
}


/**
 * Building a tree structure
 */
const tree = new Composite("root", 0);
const branch1 = new Composite("l1", 1);
branch1.add(new Leaf("l3", 2));
branch1.add(new Leaf("l4", 2));
tree.add(branch1);

const branch2 = new Composite("l2", 1);
branch2.add(new Leaf("l5", 2));
branch2.add(new Leaf("l6", 2));
tree.add(branch2);

console.log('Client: Now I\'ve got a composite tree: \n');
search(tree, 'l6');