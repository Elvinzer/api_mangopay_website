<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>API Mangopay</title>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
</head>

<body>
<div id="app">
  <h1>Bitcoin Price Index</h1>
    <div>
      <div>Valeurs Bitcoins :</div>
    </div>
    <div
      v-for="currency in responseApiBitcoin"
      :key = "currency.code"
      class="currency">
        {{ currency.description }} : {{ currency.rate_float }}
    </div>
    <div class = "JSON_BRUT_Bitcoinn">
      JSON_BRUT_Bitcoin : {{ responseApiBitcoin }}
    </div>
    <div v-for ="person in responseApiMango"
    :key = "person.Id"
    >
      mon mail : {{ person.Email }}
    </div>
</div>

  <script src="inc/js/api_mango.js" type="text/javascript"></script> 

  <?php
  require_once('inc/mangoClass.php');

  $myMangoAction = new Mangopay;
  $myWallet = $myMangoAction->get_wallet(70934130);
  print_r($myWallet);
  ?>

</body>
</html>
