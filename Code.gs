function CRYPTO(symbol = "BTC") {
  try {
    const baseUrl = "https://rest.coinapi.io/v1/exchangerate";
    const apikey = "fakeapikey";
    const url = `${baseUrl}/${symbol}/USD?apikey=${apikey}`;

    const response = UrlFetchApp.fetch(url);
    const { rate } = JSON.parse(response);
    return rate;
  } catch (err) {
    return 0;
  }
}
