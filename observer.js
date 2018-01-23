

const Observer = function() {
    return {
        notify: index => {
            console.log(`Observer ${index} has been notified.`);
        }
    }
}

module.exports = Observer;
