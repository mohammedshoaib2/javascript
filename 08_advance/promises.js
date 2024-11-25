let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let userdata = { username: "shoaib", password: "123" };
    let error = false;
    if (!error) {
      resolve(userdata);
    } else {
      reject("Something Went Wrong");
    }
  }, 2000);
});

// promise
//   .then((userdata) => {
//     console.log(userdata);
//   })
//   .catch((error) => {
//     console.log(`E : ${error}`);
//   });

async function handlePromise() {
  try {
    let userdata = await promise;
    console.log(userdata);
  } catch (error) {
    console.log(`E : ${error}`);
  }
}

// handlePromise();

async function getAllUsers(api) {
  try {
    let userData = await fetch(api);
    let jsonData = await userData.json();
    console.log(jsonData);
  } catch (error) {
    console.log("ERROR");
  }
}

getAllUsers("https://apigithub.com/users/mohammedshoaib");
//
//
//
//
//
//
//

// let fetchedData;

// console.log("Task1");

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     fetchedData = 100;
//     resolve(fetchedData);
//   }, 5000);
// });
// console.log("Task2");
// async function updateDom() {
//   console.log(await promise);
// }

// updateDom();

// console.log("Task3");
