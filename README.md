# Kalabox Plugin Static Port

This plugin allows you to designate static ports for other Kalabox components. This is helpful for instances where you need to maintain reliable access to these components from the host machine, such as when using a database inspector like Sequel Pro or PHPMyAdmin to browse your Kalabox app's database.

## Installation

You can install this plugin by going into your app directory and running the normal

```
npm install kalabox-plugin-static-port --save
```

In order for your app to use the plugin you will also need to inform the app of its existence. This can be done in the `kalabox.json` file in your app root. Just add the plugin name to the `appPlugins` key.

```json
{
  "appName": "pressflow7",
  "appPlugins": [
    "my-hot-plugin",
    "kalabox-plugin-pressflow7-env",
    "kalabox-plugin-static-port"
  ],
}

```

## Configuration and Usage

Add a key that corresponds to the component that you want to give a static port
and a corresponding value representing the port to your "kalabox-plugin-static-port"
plugin configuration in kalabox.json. For example, to add a static port to your
DB component...

```json
  "pluginConf": {
    "kalabox-plugin-static-port": {
      "db": "60540",
    }
  }
```

Make sure to choose a port in the 60000s (and don't repeat ports) so it doesn't conflict with another port.

Now you should be able to access your app's db container using port 60540, instead
of the dynamically assigned port from Docker!

## Other Resources

* [API docs](http://api.kalabox.me/)
* [Test coverage reports](http://coverage.kalabox.me/)
* [Kalabox CI dash](http://ci.kalabox.me/)
* [Mountain climbing advice](https://www.youtube.com/watch?v=tkBVDh7my9Q)
* [Boot2Docker](https://github.com/boot2docker/boot2docker)
* [Syncthing](https://github.com/syncthing/syncthing)
* [Docker](https://github.com/docker/docker)

-------------------------------------------------------------------------------------
(C) 2015 Kalamuna and friends


