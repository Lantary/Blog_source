function category() {
  $("<div class='display' style='float: left'> &nbsp>&nbsp </div>").prependTo(".category-list-item");
  $(".category-list-child").css("display", "none");
  // .posts-expand .post-body ul li

  // $(".posts-expand .post-body ul  li .category-list-link ").first().css("font-weight","bold");
  $(".posts-expand .post-body ul .category-list-item ").first().children(".category-list-link").css("font-weight", "bold");
  $(".posts-expand .post-body ul .category-list-item ").first().siblings("li").children(".category-list-link").css("font-weight", "bold");
  // $(".category-list-child").css("list-style-type","none");
  // $(".category-list-item").css("list-style-type","none");
  $(".posts-expand .post-body ul li ").css("list-style-type", "none");
  $(".category-list-link ").css("border-bottom", "none");

  $(".display").click(function () {
    // $(this).siblings(".category-list-child").css("display")=="none"?
    // $(this).siblings(".category-list-child").css("display","block"):$(this).siblings(".category-list-child").css("display","none");
    $(this).siblings(".category-list-child").slideToggle();
    // $(this).siblings(".category-list-child").fadeToggle();



  })
}
