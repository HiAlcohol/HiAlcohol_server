$(document).ready(function () {
    $("#list1>#btn1").click(function () {
        $("#modal").show();
        $("#modal-overlay").show();
    });
    $(".modal_close").click(function () {
        $("#modal").hide();
        $("#modal-overlay").hide();
    });
});