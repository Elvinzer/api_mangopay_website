
  const app = new Vue({
    el: '#app',
    data :{
      responseApiBitcoin : null,
      responseApiMango : null,
      login : '11794591',
      password : '8kR7EUqO8rPL7LxavRJCi65Hq7aUmYzc5MAVBJW2zdSTGjrx7D',
      mango_url : 'https://api.sandbox.mangopay.com/v2.01',
      bitcoin_url : 'https://api.coindesk.com/v1/bpi/currentprice.json',
      token : null,
      monTest : Array
    },
    created() {
      // On lance le scrutage de l'api
      this.interval = setInterval(() => this.getApiBitcoin(), 3000);
      this.interval = setInterval(() => this.getApiMango(), 3000);

      this.getToken();
      //this.getApiMango();
    },
    methods: {
      getApiBitcoin(){
          axios
        .get(this.bitcoin_url)
        .then(response => (this.responseApiBitcoin = response.data.bpi))
        .catch(error => console.log(error))
        console.log(JSON.stringify(this.responseApiBitcoin));
        this.getMyAllArray();
      },

      getToken(){
        this.token = 'Basic ' + btoa(this.login + ':' + this.password)
      },
      getApiMango(){
        var config = {
          method: 'get',
          data : this.myBool,
          url: this.mango_url  + '/11794591/users/',
          headers: {
            'Page': 'last',
            'Authorization': this.token
          },
        };
      axios(config)
          .then(response => (
            this.responseApiMango = JSON.parse(JSON.stringify(response.data))
          )
        )

      },

    }
  })
