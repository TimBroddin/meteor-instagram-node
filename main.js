ig = Npm.require('instagram-node').instagram();
if (keys = Meteor.settings['instagram-node']) {
    ig.use({
        client_id: keys.client_id,
        client_secret: keys.client_secret
    });
}
