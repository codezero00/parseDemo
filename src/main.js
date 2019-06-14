import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Parse from 'parse'


//Parse.initialize("YOUR_APP_ID", "YOUR_JAVASCRIPT_KEY", "YOUR_MASTERKEY");  MASTERKEY 只能在安全的环境中使用

// Parse.initialize("test", "test","test");
Parse.initialize("test", "");
//javascriptKey is required only if you have it on server.
// Parse.serverURL = 'http://172.16.4.101:1337/parse';
Parse.serverURL = 'http://127.0.0.1:1337/parse';

// example 1 

// class Monster extends Parse.Object {
//   constructor() {
//     // Pass the ClassName to the Parse.Object constructor
//     super('Monster');
//     // All other initialization
//     this.sound = 'Rawr';
//   }

//   hasSuperHumanStrength() {
//     return this.get('strength') > 18;
//   }

//   static spawn(strength) {
//     var monster = new Monster();
//     monster.set('strength', strength);
//     monster.save()
//     return monster;
//   }
// }

// Parse.Object.registerSubclass('Monster', Monster);

// // const monster = new Monster()

// // monster.set("test", 1337);
// let y = Monster.spawn(99999);
// console.log(y);
// let x = monster.hasSuperHumanStrength();
// console.log(x);
// monster.set("score", 1337);
// monster.set("playerName", "Sean Plott");
// monster.set("cheatMode", false);

// monster.save()
// .then((monster) => {
//   // Execute any logic that should take place after the object is saved.
//   alert('New object created with objectId: ' + monster.id);
// }, (error) => {
//   // Execute any logic that should take place if the save fails.
//   // error is a Parse.Error with an error code and message.
//   alert('Failed to create new object, with error code: ' + error.message);
// });

// example 2 创建表 并切插入数据
// const GameScore = Parse.Object.extend("GameScore");
// const gameScore = new GameScore();

// gameScore.set("score", 1337);
// gameScore.set("playerName", "Sean Plott");
// gameScore.set("cheatMode", false);

// gameScore.save()
// .then((gameScore) => {
//   // Execute any logic that should take place after the object is saved.
//   alert('New object created with objectId: ' + gameScore.id);
// }, (error) => {
//   // Execute any logic that should take place if the save fails.
//   // error is a Parse.Error with an error code and message.
//   alert('Failed to create new object, with error code: ' + error.message);
// });


// example 3

// const Test = Parse.Object.extend("test");
// const query = new Parse.Query(Test);

// (async () => {
//   const results = await query.find();
//   console.log('resultes:', results);
// })()

// example 4 websocket
// let query = new Parse.Query('test');
// let subscription = query.subscribe();

// let query = new Parse.Query('test');
// let subscription = query.subscribe(); 

// console.log(subscription);

// (async ()=> {
//   let ssss = await subscription.on('create')
//   console.log(ssss)
// })()
 
// var Test = Parse.Object.extend('test');
// var t = new Test();
// t.set('name', 'sdgksfdgs');
// t.save();

// 实时查询

// let LiveQueryClient = Parse.LiveQueryClient;
// let client = new LiveQueryClient({
//   applicationId: 'test',
//   serverURL: 'ws://172.16.4.101:1339/parse', //'ws://127.0.0.1:1337/parse', //'ws://172.16.4.101:1339/parse',
//   javascriptKey: 'test',
//   masterKey: 'test'
// });

// client.on('open', () => {
//   console.log('subscription opened');
//  });

// client.on('close', () => {
//   console.log('connection closed');
// });

// client.on('error', (error) => {
//   console.log('connection error',error);
// });

// client.open();

// console.log(client)

// let query = new Parse.Query('test');
// let subscription = client.subscribe(query); 

// console.log(subscription)

// subscription.on('create', (object) => {
//   console.log('object',object);
//   console.log('object created');
//   console.log("current user", Parse.User.current())
// });

// subscription.on('update', (object) => {
//   console.log('object',object);
//   console.log('object updated');
//   console.log("current user", Parse.User.current())
// });

// subscription.on('enter', (object) => {
//   console.log('object',object);
//   console.log('object entered');
//   console.log("current user", Parse.User.current())
// });

// subscription.on('leave', (object) => {
//   console.log('object',object);
//   console.log('object left');
//   console.log("current user", Parse.User.current())
// });

// subscription.on('delete', (object) => {
//   console.log('object',object);
//   console.log('object deleted');
//   console.log("current user", Parse.User.current())
// });


// 用户注册

// var user = new Parse.User();
// user.set("username", "test111");
// user.set("password", "pwd222");
// user.set("email", "123456@example.com");

// // other fields can be set just like with Parse.Object
// user.set("phone", "415-392-0202");

// (async ()=>{
//   try {
//     await user.signUp();
//     // Hooray! Let them use the app now.
//   } catch (error) {
//     // Show the error message somewhere and let the user try again.
//     alert("Error: " + error.code + " " + error.message);
//   }
// })()

// 登陆 

// 账号密码登陆
// (async ()=>{
//   const user = await Parse.User.logIn("test111", "pwd222");
//   console.log(user)
// })()

// var currentUser = Parse.User.current();
// if (currentUser) {
//     // do stuff with the user
//     console.log('存在currentuser',currentUser)
// } else {
//     // show the signup or login page
//     console.log('不存在currentuser')
// }

// 连接用户

// const myAuthData = {
//     "id": "test",
//     "access_token": "1e781b8742950791d335c609c29992f61f5c728a"
// };


// (async ()=>{
//   const user = await Parse.User.logIn("test111", "pwd222");
//   console.log(user)
//   // const user = new Parse.User();
//   await user._linkWith("qq", { authData: myAuthData },{options:option});
// })()

var accessToken = "1e781b8742950791d335c609c29992f61f5c728a";
var id = 5226360;
var username="test"; // instagram username
let authData = {
    authData: {
        id: id,
        access_token: accessToken
    }
};
// var provider = {
//     authenticate(options) {
//         if (options.success) {
//             options.success(this, authData);
//         }
//     },
//     restoreAuthentication(authData) {},
//     getAuthType() {
//         return 'uaa';
//     },
//     deauthenticate() {}
// };

// (async ()=>{
//   let user = new Parse.User();
//   // user.set("username", username);
//   let res = await user._linkWith('github', authData)
//   console.log(res)
// })()


// var currentUser = Parse.User.current();
// if (currentUser) {
//     // do stuff with the user
//     console.log('存在currentuser',currentUser)
// } else {
//     // show the signup or login page
//     console.log('不存在currentuser')
// }


(async ()=>{
    let res = await Parse.User.logInWith('github', authData)
    console.log('res',res)
  })()
  
  
  var currentUser = Parse.User.current();
  if (currentUser) {
      // do stuff with the user
      console.log('存在currentuser',currentUser)
  } else {
      // show the signup or login page
      console.log('不存在currentuser')
  }


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')