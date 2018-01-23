

const Subject = function() {

    // Add subscribeAll and unsubscribeAll
    return {
        observers: [],

        subscribe: function(observer) {
            this.observers.push(observer);
        },

        subscribeAll: function(arrayOfObservers) {
            arrayOfObservers.forEach(observer => {
                this.observers.push(observer);
            });
        },

        unsubscribe: function(observer) {
            const index = this.observers.indexOf(observer);
            if (index > -1) {
                this.observers.splice(index, 1);
            }
        },

        unsubscribeAll: function() {
            this.observers = [];
        },

        notify: function(observer) {
            const index = this.observers.indexOf(observer);
            if (index > -1) {
                this.observers[index].notify(index);
            }
        },

        notifyAll: function() {
            console.log("Notifying all subscribers...")
            let index = 0;
            this.observers.forEach(observer => {
                observer.notify(index);
                index++
            });
        }
    };

};

module.exports = Subject;
