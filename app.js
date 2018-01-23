
const Observer = require('./observer');
const Subject = require('./subject');

function main() {
    let subject = Subject();

    let ob1 = Observer();
    let ob2 = Observer();
    let ob3 = Observer();

    subject.subscribeAll([ob1, ob2, ob3]);

    subject.notifyAll();

    subject.unsubscribe(ob3);

    subject.notifyAll();

    subject.unsubscribeAll();

    subject.notifyAll();
}

main();
