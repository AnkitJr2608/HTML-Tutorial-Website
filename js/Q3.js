<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
      $(document).ready(function () {
        var count = 0;
        $("#Button1").click(function () {
          count++;
          $("p").text(
            `My name is Ankit Kumar Singh and i have clicked the button ${count} times`
          );
        });
        $("#Button2").click(function () {
          count = 0;
          $("p").text("Counter is reset");
        });
      });
    </script>
  </head>
  <body>
    <div><center>
      <button id="Button1">Count</button>
      <button id="Button2">Reset</button>
    </center></div>
<center><p></p></center>
  </body>
</html>