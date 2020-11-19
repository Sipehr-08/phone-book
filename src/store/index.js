import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contact: {
      id: '',
      name: '',
      number: '',
      email: '',
      addres: '',
      shower: false
    },
    searchContacts: [{
        id: 1,
        name: "Sipehr",
        number: "+992-93-196-0666",
        email: "jurazoda-08@mail.ru",
        shower: false,
      },
      {
        id: 2,
        name: "Ahmad",
        number: "6546546465",
        email: "jurazoda-08@mail.ru",
        addres: "dushanbe",
        shower: false,
      },
      {
        id: 3,
        name: "Daler",
        number: "909199898",
        email: "jurazoda-08@mail.ru",
        shower: false,
      },
      {
        id: 4,
        name: "Muslim",
        number: "+6-196-0666",
        email: "muslim99@mail.com",
        shower: false,
      },
      {
        id: 5,
        name: "Alex",
        number: "+992-93-196-0666",
        email: "jurazoda-08@mail.ru",
        shower: false,
      }
    ].sort(function (a, b) {
      var nameA = a.name.toLowerCase(),
        nameB = b.name.toLowerCase()

      if (nameA < nameB) {
        return -1;
      }

      if (nameA > nameB) {
        return 1;
      }

      return 0;

    }),
    contacts: [{
        id: 1,
        name: "Sipehr",
        number: "+992-93-196-0666",
        email: "jurazoda-08@mail.ru",
        shower: false,
      },
      {
        id: 2,
        name: "Ahmad",
        number: "6546546465",
        email: "jurazoda-08@mail.ru",
        addres: "dushanbe",
        shower: false,
      },
      {
        id: 3,
        name: "Daler",
        number: "909199898",
        email: "jurazoda-08@mail.ru",
        shower: false,
      },
      {
        id: 4,
        name: "Muslim",
        number: "+6-196-0666",
        email: "muslim99@mail.com",
        shower: false,
      },
      {
        id: 5,
        name: "Alex",
        number: "+992-93-196-0666",
        email: "jurazoda-08@mail.ru",
        shower: false,
      }
    ].sort(function (a, b) {
      var nameA = a.name.toLowerCase(),
        nameB = b.name.toLowerCase()

      if (nameA < nameB) {
        return -1;
      }

      if (nameA > nameB) {
        return 1;
      }

      return 0;

    }),
  },
  mutations: {
    removeItem(state, id) {
      let newObj = state.contacts.filter(x => x.id !== id);
      state.searchContacts = newObj;
      state.contacts = newObj;
    },
    searchStr(state, str) {
      if (!str) {
        state.searchContacts = state.contacts;
        return;
      }
      let newObj = state.contacts.filter(x => x.name.includes(str));
      state.searchContacts = newObj;
      state.contacts.sort(function (a, b) {
        var nameA = a.name.toLowerCase(),
          nameB = b.name.toLowerCase()

        if (nameA < nameB) {
          return -1;
        }

        if (nameA > nameB) {
          return 1;
        }

        return 0;

      })
    },

    editItem(state, id) {
      let con = state.contacts.find(o => o.id === id);
      if (con === undefined) {
        return;
      }
    },
    submitFunc(state, name, phone, email, addres, emptyContact) {
      state.contact.name = name;
      state.contact.number = phone;
      state.contact.email = email;
      state.contact.addres = addres;
      state.contact.id = Date.now();
      state.contacts.push(state.contact);
      state.searchContacts.push(state.contact);
      state.contact = emptyContact;
      state.searchContacts.sort(function (a, b) {
        var nameA = a.name.toLowerCase(),
          nameB = b.name.toLowerCase()

        if (nameA < nameB) {
          return -1;
        }

        if (nameA > nameB) {
          return 1;
        }

        return 0;

      })
    }
  },
  actions: {},
  modules: {}
});