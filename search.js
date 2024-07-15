document.getElementById('search-button').addEventListener('click', function() {
  var query = document.getElementById('search-bar').value.toLowerCase();
  var products = document.getElementsByClassName('product');

  Array.from(products).forEach(function(product) {
    var productName = product.textContent.toLowerCase();
    if (productName.includes(query)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});
