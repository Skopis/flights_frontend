import { flightService } from "../services/flight.service";

export const state = () => ({
  flights: [],
});

export const getters = {
  getFlights: (state) => state.flights,
};

export const mutations = {
  SET_FLIGHTS(state, payload) {
    state.flights = payload;
  },
};

export const actions = {
  async loadFlights({ commit }) {
    try {
      const flights = await flightService.query();

      console.log('res in fronend store', flights)
      commit("SET_FLIGHTS", flights);
    } catch (err) {
      console.log("Error is loadFlights", err);
      throw err;
    }
  },
};
