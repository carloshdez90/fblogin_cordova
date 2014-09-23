cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.chariotsolutions.toast.plugin/www/phonegap-toast.js",
        "id": "com.chariotsolutions.toast.plugin.Toasty",
        "clobbers": [
            "toast"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.inappbrowser/www/inappbrowser.js",
        "id": "org.apache.cordova.inappbrowser.inappbrowser",
        "clobbers": [
            "window.open"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.chariotsolutions.toast.plugin": "1.1.1",
    "org.apache.cordova.inappbrowser": "0.5.1"
}
// BOTTOM OF METADATA
});