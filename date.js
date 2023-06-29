module.exports = getDate;
// this is called node module For more - https://nodejs.org/api/modules.html#the-module-object

function getDate() {

    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("en-US", options);

}