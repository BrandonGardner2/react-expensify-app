import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').push({
//     description: 'Test',
//     note: '',
//     amount: 4730,
//     createdAt: 0
// });

// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     });

// //     console.log(expenses);
// //   });

// //   database.ref('expenses')
// //   .on('value',(snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     });
// //     console.log(expenses);
// //   });

  


// // database.ref('expenses').push({
// //     description: 'Rent',
// //     note: '',
// //     amount: 450,
// //     createdAt: 0
// // });


// // database.ref('notes').push({
// //     title: 'Course Topics',
// //     body: 'React Native, Angular, Python'
// // });

// // const firebaseNotes = {
// //     notes: {
// //         apoijasdf: {
// //             title: 'First note',
// //             body: 'This is my note'
// //         },
// //         adfsfsd: {
// //             title: 'Another note',
// //             body: 'This is my note'
// //         }
// //     }
// // };

// // const notes = [{
// //     id: '12',
// //     title: 'First note',
// //     body: 'This is my note'
// //     }, {
// //     id: '761ase',
// //     title: 'Another note',
// //     body: 'This is my note'
// // }];

// // database.ref('notes').set(notes);


// // const subscription = database.ref()
// //   .on('value', (snapshot) => {
// //     console.log(`${snapshot.val().name} is a ${snapshot.val().job.title} at ${snapshot.val().job.company}.`)
// //   }, () => {
// //       console.log('Error you screwed up', e)
// //   });

// //   setTimeout(() => {
// //     database.ref('job').set({
// //         title: 'Web Developer',
// //         company: 'Google'
// //     });
// //   }, 3500);


// // const onValueChange = database.ref()
// //     .on('value', (snapshot) => {
// //         console.log(snapshot.val());
// //     }, (e) => {
// //         console.log('Error', e);
// //     });

// //     setTimeout(() => {
// //         database.ref('age').set(29);
// //     }, 3500);

// //     setTimeout(() => {
// //         database.ref().off(onValueChange);
// //     }, 7000);

// //     setTimeout(() => {
// //         database.ref('age').set(30);
// //     }, 10500);

// // database.ref('location/city')
// //     .once('value')
// //     .then((snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val);
// //     }).catch((e) => {
// //         console.log('Error', e)
// //     })

// // database.ref().set({
// //     name: 'Brandon Gardner',
// //     age: 25,
// //     stressLevel: 6,
// //     job: {
// //         title: 'Software Developer',
// //         company: 'AirBnB'
// //     },
// //     location: {
// //         city: 'Houston',
// //         country: 'United States'
// //     }
// // }).then(() => {
// //     console.log('Data is saved on the server');
// // }).catch((e) => {
// //     console.log('This failed', e)
// // });

// // database.ref()
// //     .update({
// //         stressLevel: 9,
// //         'job/company': 'Amazon',
// //         'location/city': 'Seattle'
// //     });

// // database.ref('isSingle')
//     // .remove()
//     // .then(() => {
// //     console.log('This worked');
// //  }).catch((e) => {
// //     console.log("This didn't work", e);
// //  })

// // database.ref('isSingle')
// //     .set(null);
