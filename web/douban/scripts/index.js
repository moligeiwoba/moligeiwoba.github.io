
function addEveOnload(func){
  var oLOnload = window.onload;
  if (typeof window.onload != "function") {
    window.onload = func;
  }else{
    oLOnload();
    func();
  }
}

$(document).ready(function(){ 
  function newMove(){
    $.ajax({
        type: "get",
        async: false,
        url: "https://api.douban.com/v2/movie/in_theaters",
        dataType: "jsonp",
        success: function(data){
          var str=" <ul class='clertfix'>",movearr;
          movearr = data.subjects.slice(0,8);
          $.each(movearr,function(i,n){
            str += "<li><a class='move-pic' href='"+n.alt+"'>  <img src='"+n.images.large+"' alt='一条狗的使命''></a> <a href='"+n.alt+"' class='move-tit'>"+n.title+"</a> <div class='rating'><span class='allstar40'></span><i>7.8</i></div> <a href='#' class='link-buy'>选票购座</a> </li>";
          }); 
          str += "</ul>"
          var r = $("#aony-move .content");
          r.append(str);
          $("#aony-move .content .donghua").hide();
        }
    });
  }

  function hotMove(){
    $.ajax({
        type: "get",
        async: false,
        url: "https://api.douban.com/v2/movie/top250",
        dataType: "jsonp",
        success: function(data){
          var str=" <ol>",movearr;
          movearr = data.subjects.slice(0,10);
          $.each(movearr,function(i,n){
            str += "<li><a href='"+n.alt+"''>"+n.title+"</a></li>";
          }); 
          str += "</ol>"
          var r = $("#aony-move .side");
          r.append(str);
          $("#aony-move .side .smalldonghua").hide();
        }
    });
  }

  
  hotMove();
  newMove();
});