(function ($)
{
  $(window).on("load", function ()
  {
    $('#loader').hide();
    $("#left").on("scroll", function ()
    {
      var scrolledleft = parseInt($("#left").scrollTop()) * -1;
      $("#right").scrollTop(scrolledleft + scrolledright)
    })
    //Move right column to bottom initially
    $("#right").scrollTop($("#rightCells").height())
    //Get actual distance scrolled
    var scrolledright = parseInt($("#right").scrollTop())
  })
})(jQuery);