
Common issue with compiling the app


FOR ANDROID

1. after compile if the app stays on splash screen and the api is working
when you test on admin panel and your site has SSL
or yous api link starts with https://

do the following

open the file package.json  remove the following

"cordova-plugin-ionic-webview": "5.0.0",

and

"cordova-plugin-ionic-webview": {},


this plugin is mainly use for iOS to use wkwebview instead of uiwebview 
so make sure when compiling the app in iOS this plugin exists in your package.json



================================================================================================



FOR IOS / APPLE


common rejection in apple are  
ITMS-90809: UIWebView API Deprecation 


when compiling the app to iOS do the following

1. 

in package.json

remove the following plugin 

"cordova-plugin-insomnia": "4.3.0",
"cordova-plugin-dialogs": "git+https://github.com/dpa99c/cordova-plugin-dialogs.git",
"cordova-plugin-enable-multidex": "^0.2.0",

and

"cordova-plugin-insomnia": {},
"cordova-plugin-dialogs": {},
"cordova-plugin-enable-multidex": {},


make sure that the plugin  cordova-plugin-ionic-webview is in your package.json

"cordova-plugin-ionic-webview": "5.0.0",
and
"cordova-plugin-ionic-webview": {},


since we remove the plugin called cordova-plugin-insomnia
we need also to remove the code for this in the app else your app will not work

so please do the following www/js/app.js

look for code and remove the line setAppAwake(); 

setLast_tab();   
setAppAwake();  <--- remove this or commented the code by adding //  example //setAppAwake();

now we remove this in  app settings in www/index.html
remove the following

<ons-list-item>
  <div class="center">
    <span class="trn">Keep the app awake</span>
  </div>
  <div class="right">
    <ons-switch name="keep_app_awake" class="keep_app_awake" value="1" 
    modifier="material" onclick="KeepAwake();" ></ons-switch>
  </div>
</ons-list-item>


Note: the plugin cordova-plugin-insomnia was never yet tested in
apple submission so you may retain this one see if apple will approved or not.
not sure yet if this plugin contains code for uiwebeview


2. lastly make sure you choose IOS 5.1.1 and  Xcode 11.3 
under monaca build environment before compiling the app in iOS

this is needed cause apple will look for the app build
in there latest sdk

see screenshot 
https://imgur.com/a/VJAmA2B


