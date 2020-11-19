<template>
  <div>
    <div>
      <b-button v-b-toggle class="btn btn-success" href="#example-sidebar" @click.prevent="clickShow"
        ><b-icon icon="person-plus"></b-icon
      ></b-button>
    </div>
    <div class="px-3 py-2">
      <b-sidebar id="example-sidebar" shadow v-if="show">
        <b-card bg-variant="light">
          <b-form @submit.prevent="onSubmit" @reset="onReset">
            <b-form-group
              :label="titleState"
              label-cols-lg="12"
              label-size="xl"
              label-class="font-weight-bold pt-0"
              class="mb-0"
            > 
              <b-form-group
                id="input-group-1"
                label-cols-sm="3"
                label="Name:"
                label-for="input-1"
                label-align-sm=""
              >
                <b-form-input
                class="text-capitalize"
                  id="input-1"
                  type="text"
                  required
                  placeholder="Name"
                  v-model="name"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-2"
                label-cols-sm="3"
                label="Phone:"
                label-align-sm="left"
                label-for="input-2"
              >
                <b-form-input
                  v-model="phone"
                  type="tel"
                  id="type-tel"
                  required
                  placeholder="+992-00-000-0000"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-3"
                label-cols-sm="3"
                label="Email:"
                label-align-sm="left"
                label-for="input-3"
              >
                <b-form-input
                  v-model="email"
                  placeholder="test@mail.ru"
                  type="email"
                  id="input-3"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                label-cols-sm="3"
                label="Addres:"
                label-align-sm="left"
                label-for="nested-state"
              >
                <b-form-input
                  v-model="addres"
                  placeholder="test-addres"
                  type="text"
                  id="nested-state"
                ></b-form-input>
              </b-form-group>
              <b-button class="w-100 mb-3" type="submit"  variant="success">ADD</b-button>
              <b-button type="reset" class="w-100"  variant="danger">RESET</b-button>
            </b-form-group>
          </b-form>
        </b-card>
      </b-sidebar>
    </div>
  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      emptyContact: {
        id: "",
        name: "",
        number: "",
        email: "",
        addres: "",
        shower: false
      },
      name: "",
      phone: "",
      email: "",
      addres: "",
      show: false,
      titleState: 'NEW CONTACT'
    };
  },
  methods: {
    clickShow() {
      this.show = !this.show;
    },
    onSubmit(ev) {
      ev.preventDefault();
      this.$store.commit(
        "submitFunc",
        this.name,
        this.phone,
        this.email,
        this.addres,
        this.emptyContact
      );
      this.show = false;
      this.name = "";
      this.phone = "";
      this.email = "";
      this.addres = "";
    },
    onReset(ev) {
      ev.preventDefault();
      this.name = "";
      this.phone = "";
      this.email = "";
      this.addres = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
