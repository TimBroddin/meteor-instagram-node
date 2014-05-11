meteor-instagram-node
======================

A wrapper arround [instagram-node](https://www.npmjs.org/package/instagram-node). I find this NPM package to be more up-to-date than the normal Instagram package.

##Features
- Allows you to set client keys in settings.json

```{
    "instagram-node": {
        "client_id": "XXXXXXXXXXXXX",
        "client_secret": XXXXXXXXXXXXX"
    }
}
``

##Installation
```sh
mrt add instagram-node
```

##Example

```ig.tag_media_recent('football', function(err, medias, limit) { });
```

See [here](https://www.npmjs.org/package/instagram-node).