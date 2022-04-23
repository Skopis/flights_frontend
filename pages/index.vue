<template>
  <Flights />
</template>

<script>
export default {
  name: "IndexPage",
  beforeCreate() {
    this.$store.dispatch("loadFlights");
  },
};
</script>
