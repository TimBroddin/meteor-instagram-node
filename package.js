Package.describe({
    summary: "Instagram API Client"
});

Npm.depends({
    "instagram-node": "0.3.0"
});

Package.on_use(function(api) {
    api.export(['ig']);
    api.add_files("main.js", "server");
});