<!DOCTYPE html>

<head>
<meta charset="utf-8">
<title><?=$articles["title"]?> в Подольске</title>

<link rel="stylesheet" type="text/css" href="style.css">
<script src="jquery-1.6.1.min.js" type="text/javascript"></script>
    </head>
<body>
    <div class="bar">
       <a href="index.php" ><div id="M3"></div></a>
        <div id="M2"></div>
        <?php
    
        $articleses = articles_all_b($link);
        ?>
         <?php foreach($articleses as $b): ?>
        <a href="some.php?id=<?=$b["id"]?>" title="<?=$b["content"]?>"><div class="row">
           <?=$b['title']?>
        </div></a>
         <?php endforeach ?>
    </div>
    <img id="ii"src="img/<?=$articles['id']?>.jpg">
    <div class="bg" style="img/<?=$articles['id']?>.jpg"><div id="MM"><div id="nm">menu</div></div>
        <h1 id="logo">Подольск <div id="rr"><?=$articles["title"]?></div></h1>
        <div class="h-l"></div>
    <a href=""><div id="rrt" ></div></a>
        
    
        <div class="op">
            <div class="text"><?=$articles["content"]?></div>
            <img class="photo" id="f1" src="img/<?=$articles['id']?>a.jpg">
            <img class="photo" id="f2" src="img/<?=$articles['id']?>b.jpg">
            <img class="photo" id="f3" src="img/<?=$articles['id']?>c.jpg">
        </div>
        <div class="map">
        
           <?=$articles['map']?>


            
        </div>
        <div class="likes">
            <div class="LK"  title="Столько людей видили это место">
            
<?php
  $id = 1; // ID статьи
   $id=$articles['id']; 
  $data = parse_ini_file("likes.ini"); // Парсим INI-файл
  $likes = $data[$id]; // Получаем количество лайков у статьи
?>
<div id="like" data-id="<?=$id?>">#See it <?=$likes?></div>

<script type="text/javascript" src="js/jquery-1.6.1.min.js"></script>
<script type="text/javascript">
  $(document).ready(function() {
    $("#like").bind("click", function(event) {
        location.reload();
      $.ajax({
        url: "like.php",
        type: "POST",
        data: ("id=" + $("#like").attr("data-id")),
        dataType: "text",
        success: function(result) {
          if (result) {
            //$("#like").text(Number($("#like").text()) + 1);
              

          }
          else alert("Error");
        }
      });
    });
     

  });
</script>

<?php
    $_POST['id']=$id;
  $text = file_get_contents("likes.ini"); // Получаем содержимое файла
  $likes = explode("\n", $text); // Разбиваем строку на массив по разделителю в виде перехода на новую строку
  $new_likes = array(); // Массив лайков с новыми данными
  for ($i = 0; $i < count($likes); $i++) {
    $parts = explode("=", $likes[$i]); // Разбиваем строку вида "id_статьи=количество_лайков" по знаку равно
    if ($parts[0] == $_POST['id']) $parts[1] += 1; // Увеличиваем число лайков на 1 у статьи с переданным ID
    $new_likes[] = implode("=", $parts); // Формируем новую строку вида "id_статьи=количество_лайков" и добавляем в массив
  }
  $text = implode("\n", $new_likes); // Преобразуем массив с новыми данными в строку с разделителем в виде перехода на новую строку
   file_put_contents("likes.ini", $text); // Записываем строку в файл и выводим false в случае неудачи
?>
                
            </div>
            <div class="SO">
                <script type="text/javascript" src="//yastatic.net/es5-shims/0.0.2/es5-shims.min.js" charset="utf-8"></script>
                <script type="text/javascript" src="//yastatic.net/share2/share.js" charset="utf-8"></script>
                <div class="ya-share2" data-services="vkontakte,facebook,odnoklassniki,moimir,twitter,viber"></div>
            </div>
        </div>
    </div>
    
</body>
<script>
    $('.bg').css({"background-size":screen.width-530,"height":1080*(screen.width/1920)});
</script>

<script>
   $('#MM').click(
	function(){
	  $(".bar").css({"margin-left": "0px"});
    }
		);
    $('#M2').click(
	function(){
	  $(".bar").css({"margin-left": "-380px"});
    }
		);
    setTimeout(function(){$('#logo').css({ opacity:"1","margin-left": "20px"});},10)
    setTimeout(function(){$('.h-l').css({"width": "600px"});},500)
    setTimeout(function(){$('#ii').css({ opacity:"1","margin-left": "0px"});},50)
    setTimeout(function(){$('#rr').css({ opacity:"0.8"});},900)
    setTimeout(function(){$('.text').css({ opacity:"0.8","margin-top":" -60px"});},900)
    
    setTimeout(function(){$('#f1').css({ opacity:"0.6"});},1400)
    setTimeout(function(){$('#f2').css({ opacity:"0.6"});},1500)
    setTimeout(function(){$('#f3').css({ opacity:"0.6"});},1600)
    
    setTimeout(function(){$('.map').css({ opacity:"0.9"});},2000)
    
    setTimeout(function(){$('.SO').css({ opacity:"1","margin-left": "10px"});},2000)
    setTimeout(function(){$('.LK').css({ opacity:"1","margin-left": "0px"});},2000)
</script>
