import * as venues from "./venues";

export default class NoroffJobsAPI {
  constructor(private apiKey: string) {
    console.log(apiKey);
  }

  venues = {
    get: venues.getVenues
  }
}