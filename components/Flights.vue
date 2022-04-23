<template>
  <section class="flights">
    <div>
      <p>Current local time in JFK is {{ getJFKLocalTime }}</p>
      <p v-if="flights && flights.length">
        There are
        <span @click="flightsShown = !flightsShown">{{ flights.length }}</span>
        flights from {{ flightsTimeRange }} .
      </p>
      <div v-if="flightsShown">
        <p v-for="(flight, index) in flights" :key="index">
          {{ flight.airline.iata }} --- Departure at
          {{ getTimeFromDateString(flight.departure.scheduled) }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "flights",
  data() {
    return {
      flightsShown: false,
    };
  },
  computed: {
    ...mapGetters({ flights: "getFlights" }),
    getJFKLocalTime() {
      return new Date().toLocaleTimeString("en-US", {
        timeZone: "America/New_York",
      });
    },
    flightsTimeRange() {
      return `${this.getTimeFromDateString(
        this.flights[0].departure.scheduled
      )} till ${this.getTimeFromDateString(
        this.flights[this.flights.length - 1].departure.scheduled
      )}`;
    },
  },
  methods: {
    getTimeFromDateString(dateStr) {
      return new Date(
        this.substringDepartureTime(dateStr)
      ).toLocaleTimeString();
    },
    substringDepartureTime(dateStr) {
      return dateStr.substring(0, dateStr.length - 6);
    },
  },
};
</script>

<style lang="scss"></style>
