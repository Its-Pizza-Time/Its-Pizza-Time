var imgId1;
var imgId2;
var imgsrc1;
var imgsrc2;
var click=1;

$(".img-fluid").click(function (){
    if(click===1) {
        imgId1 = $(this).attr("id");
        imgsrc1 = $(this).attr("src");
        click=2;
    }
    else if (click===2){
        imgId2 = $(this).attr("id");
        imgsrc2 = $(this).attr("src");

        $('#'+ imgId1).attr("src", imgsrc2);
        $('#'+imgId2).attr("src", imgsrc1);

        click=1;
    }
});


$('#boutonTricher').click(function (){
    for(var i = 0; i <= 9; i++){
        $('#image'+ i).attr("src", "images/"+ i +".jpg");
    }
});


$('#boutonRecommencer').click(function (){
    var tabRandom=["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg","images/7.jpg","images/8.jpg","images/9.jpg"];


    for (var j = 0; j < tabRandom.length; j++) {

        $('#image' + j).attr("src", );
    }
});





