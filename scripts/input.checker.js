$(function() {
    $(".equation_input").on("input", function() {
        let val = $(this).val();
        if (val === "-") return;
        val = val.replace(/(?!^)-|[^0-9.-]/g, "");
        val = val.replace(/(?!^)-/g, "");
        let parts = val.split(".");
        if (parts.length > 2) {
            val = parts.shift() + "." + parts.join("");
        }
        $(this).val(val);
    });
});