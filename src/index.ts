import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';

// const linkedList = new LinkedList();
// linkedList.add(500);
// linkedList.add(-10);
// linkedList.add(-3);
// linkedList.add(4);

// linkedList.sort();
// linkedList.print();

const numbersCollection = new NumbersCollection([4, -3, 76, -8, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
