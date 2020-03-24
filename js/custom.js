jQuery(document).ready(function() {
  //   jQuery(".delivery").height(
  //     jQuery(".accordian-body .delivery:first-child").height()
  //   );
  jQuery(".main-cat").click(function(e) {
    e.preventDefault();
    var activeid = jQuery(this).attr("id");
    jQuery(".main-cat").removeClass("active");
    jQuery(this).addClass("active");
    jQuery(".accordian-body").removeClass("show");
    jQuery(".accordian-body").addClass("hide");
    jQuery(".accordian-body").each(function() {
      var check = jQuery(this).data("delivery");
      if (check == activeid) {
        jQuery(this).removeClass("hide");
        jQuery(this).addClass("show");
      }
    });
  });
});
