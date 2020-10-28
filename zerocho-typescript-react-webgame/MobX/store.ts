import { observable, action } from 'mobx';

const userStore = observable({
  isLoggingIn: false,
  data: null,
  logIn: action((data) => {
    userStore.isLoggingIn = true;
    setTimeout(action(() => {
      userStore.data = data;
      userStore.isLoggingIn = false;
      postStore.addPost('hello');
    }), 1000);
  }),
  logOut: action(() => {
    userStore.data = null;
  })
})

const postStore = observable({
  data: [],
  addPost: action((data) => {
    postStore.data.push(data);

  }),
});

export { userStore, postStore };