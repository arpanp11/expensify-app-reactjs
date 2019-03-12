import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STRORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database
//   .ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });

// database.ref('expenses').push({
//   description: 'Wash Honda',
//   note: 'do vaccume',
//   amount: 13.99,
//   createdAt: 1234
// });

// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 145000,
//   createdAt: 123472398412
// });

// database.ref('expenses').push({
//   description: 'Buy milk',
//   note: 'from walmart',
//   amount: 21900,
//   createdAt: 2379812
// });

// database.ref('notes').push({
//   title: 'Udemy Courses',
//   body: 'React, Node, Java'
// });

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// const onValueChnage = database.ref().on(
//   'value',
//   (snapshot) => {
//     console.log(snapshot.val());
//   },
//   (e) => {
//     console.log('Error with data fetching', e);
//   }
// );

// setTimeout(() => {
//   database.ref('age').set(31);
// }, 3500);

// setTimeout(() => {
//   database.ref().off('value', onValueChnage);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(32);
// }, 10500);

// database
//   .ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database
//   .ref()
//   .set({
//     name: 'Dizy Patel',
//     age: 30,
//     stressLevel: 7,
//     job: {
//       title: 'Software Developer',
//       company: 'Apple'
//     },
//     location: {
//       city: 'NewYork',
//       country: 'USA'
//     }
//   })
//   .then(() => {
//     console.log('Date saved.');
//   })
//   .catch((e) => {
//     console.log('Thid failed.', e);
//   });

//Update data
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

//Remove data
// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log('Removed data.');
//   })
//   .catch((e) => {
//     console.log('Unable to remove data.', e);
//   });
