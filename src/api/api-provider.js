export class APIProvider {
  constructor() {
    this.url = "https://api.wheretheiss.at/v1/satellites/25544";
    this.msToApiCall = 30000;
    this.callApi();
    //setInterval(this.callApi, this.msToApiCall);
  }

  callApi() {
    fetch(this.url)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
}
