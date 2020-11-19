<template>
  <b-container class="bg-secondary" fluid>
    <div>
      <b-row
        class="justify-content-center d-flex flex-column align-items-start pt-5"
      >
        <b-col class="col-12 col-md-3 col-lg-3">
          <b-input-group size="sm" class="mb-2">
            <b-input-group-prepend is-text>
              <b-icon icon="search"></b-icon>
            </b-input-group-prepend>
            <b-form-input
              id="input-small"
              v-model="searchObj"
              type="search"
              :placeholder="
                this.$store.state.searchContacts.length + ' contacts'
              "
              @input="searchItem"
            ></b-form-input>
          </b-input-group>
          <add-form></add-form>
        </b-col>
        <b-col class="col-12 col-md-3 col-lg-3 pb-5">
          <b-list-group style="max-width: 400px">
            <b-list-group-item
              class="d-flex flex-column"
              @click="contact.shower = !contact.shower"
              v-for="contact in this.$store.state.searchContacts"
              :key="contact.id"
              ><div class="d-flex justify-content-start align-items-center">
                <b-avatar variant="secondary" class="mr-3"></b-avatar>
                <div class="mr-auto">
                  {{ contact.name }}
                </div>
              </div>
              <div class="pt-2 " :key="contact.id" v-if="contact.shower">
                <ul class="bg-info rounded py-3 text-white ">
                  <h6><strong>phone: </strong>{{ contact.number }}</h6>
                  <h6><strong>email: </strong>{{ contact.email }}</h6>
                  <div class="d-flex py-2">
                    <remove-contact :idContact="contact.id"></remove-contact>
                    <edit-contact></edit-contact>
                  </div>
                </ul>
              </div>
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import addForm from "./components/addForm";
import removeContact from "./components/removeContact";
import editContact from "./components/editContact";

export default {
  name: "app",
  components: {
    addForm,
    removeContact,
    editContact,
  },
  data() {
    return {
      icon: <b-icon icon="search"></b-icon>,
      searchObj: "",
    };
  },
  methods: {
    searchItem() {
      this.$store.commit("searchStr", this.searchObj);
    },
  },
};
</script>
