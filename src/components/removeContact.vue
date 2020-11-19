<template>
  <div>
    <button class="btn btn-danger" @click="removeContact(idContact)">
      <b-icon icon="trash-fill"></b-icon>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    idContact: Number,
  },
  data() {
    return {
      newObj: this.$store.state.searchContacts,
    };
  },
  methods: {
    removeContact(id) {
      this.$store.commit("removeItem", id);
    },
  },
};
</script>