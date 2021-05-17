async function CRYPTO(symbol = 'BTC') {
  try {
    const baseUrl = 'https://rest.coinapi.io/v1/exchangerate';
    const apikey = '5527EC73-E5EB-46C0-B726-6A1B3032978A';
    const url = `${baseUrl}/${symbol}/USD?apikey=${apikey}`;
    
    const response = await UrlFetchApp.fetch(url);
    const { rate } = JSON.parse(response);
    return rate;
  } catch(err) {
    return 0;
  }
}
