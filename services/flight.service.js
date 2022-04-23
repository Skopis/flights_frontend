import { httpService } from "./http.service";

export const flightService = {
  query,
};

const IATA_CODE = "JFK"; // Departure city or airport

async function query() {
  const res = await httpService.get("flight", {
    iataCode: IATA_CODE,
  });

  return res;
}
