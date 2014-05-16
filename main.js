ig = Npm.require('instagram-node').instagram();
console.log(Meteor.settings);
if (keys = Meteor.settings['instagram-node']) {
    console.log(keys);
    ig.use({
        client_id: keys.client_id,
        client_secret: keys.client_secret
    });
}
