# jsdom-se (jsdom silent errors)

This is a fork of the original [jsdom](https://github.com/tmpvar/jsdom) with modifications to disable crashes caused by giving string arguments to timer functions. If original jsdom will someday provide this functionality, this package will be removed from npm. New changes towards silencing runtime errors may be introduced in this package in the future. Contributions/suggestions/criticism are accepted.

Modified behavior only effects client scripts executed by jsdom engine on page load or parse.

[Official jsdom documentation](https://www.npmjs.com/package/jsdom)
