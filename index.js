exports.handler = (event, context, callback) => {
    try {
        event.body = JSON.parse(event.body);
    } catch (e) {
    }
    console.log(JSON.stringify(event, null, 4));
    callback(null, {statusCode: 200});
};
