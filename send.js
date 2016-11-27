'use strict';

module.exports.handler = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'This will receive the sending of events',
      input: event,
    }),
  };

  callback(null, response);
};
