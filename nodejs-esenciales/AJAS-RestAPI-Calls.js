$( document ).ready(function() {
      $.ajax({
          url: "https://jsonplaceholder.typicode.com/posts/50",
          contentType: "application/json",
          dataType: 'json',
          type: 'get',
          success: function(result){
              console.log(result.title);
          },
          error: function(result){
              console.log('La llamada no se pudo completar');
          }
      });

  });
