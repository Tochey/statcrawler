const AWS = require('aws-sdk')
const dotenv = require('dotenv')


var credentials = new AWS.SharedIniFileCredentials({profile: 'iamadmin-general'});
AWS.config.credentials = credentials;
AWS.config.update({region: 'us-east-1'});

// module.exports = publishMessage = (message) => {
    
//     // Create publish parameters
//     var params = {
//         Message: message, /* required */
//         TopicArn: process.env.SNS_TOPIC_ARN
//       };
      
//       // Create promise and SNS service object
//       var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();
      
//       // Handle promise's fulfilled/rejected states
//       publishTextPromise.then(
//         function(data) {
//           console.log(`Message ${params.Message} sent to the topic ${params.TopicArn}`);
//           console.log("MessageID is " + data.MessageId);
//         }).catch(
//           function(err) {
//           console.error(err, err.stack);
//         });

//         Create subscribe/email parameters
// var params = {
//   Protocol: 'EMAIL', /* required */
//   TopicArn: process.env.SNS_TOPIC_ARN, /* required */
//   Endpoint: 'amanzechiemeka@gmail.com'
// };

// // Create promise and SNS service object
// var subscribePromise = new AWS.SNS({apiVersion: '2010-03-31'}).subscribe(params).promise();

// // Handle promise's fulfilled/rejected states
// subscribePromise.then(
//    function(data) {
//     console.log("Subscription ARN is " + data.SubscriptionArn);
//   }).catch(
//     function(err) {
//     console.error(err, err.stack);
//   });

// }

 