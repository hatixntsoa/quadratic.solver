function solve() {
    $("#c").blur();

    const a = parseFloat($("#a").val());
    const b = parseFloat($("#b").val());
    const c = parseFloat($("#c").val());
    const res = $("#result");

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        res.html("<h2>Please enter only numbers!</h2><br>");
        $(".card_container").focus();
        return;
    }

    if (a === 0 && b === 0 && c === 0) {
        res.html("<h2 style='text-decoration: underline;'> The equation</h2><br>"
            + "<h2> 0 = 0" + "</h2><br><br>"
            + "<h2 style='text-decoration: underline;'> Remark </h2><br>"
            + "<h2>There are infinitely many solutions!</h2><br><br>"
            + "<h2 style='text-decoration: underline;'>Conclusion</h2><br>"
            + "<h2>S = { R }</h2><br>");
        $(".card_container").focus();
        return;
    }

    if (a !== 0 && b === 0 && c === 0) {
        res.html("<h2 style='text-decoration: underline;'> The equation</h2><br>"
            + "<h2> " + (a === 1 ? '' : (a === -1 ? '-' : a)) + "x² = 0" + "</h2><br><br>"
            + "<h2 style='text-decoration: underline;'> Remark </h2><br>"
            + "<h2> Obvious solution!</h2><br><br><br>"
            + "<h2 style='text-decoration: underline;'>Conclusion</h2><br>"
            + "<h2>S = { 0 }</h2><br>");
        $(".card_container").focus();
        return;
    }

    // Add more conditions and outcomes here...

    // If none of the specific cases match
    // Perform the general quadratic equation solution
    const delta = b * b - 4 * a * c;
    if (delta > 0) {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        res.html("<h2 style='text-decoration: underline;'> The equation</h2><br>"
            + "<h2> " + (a === 1 ? '' : (a === -1 ? '-' : a)) + "x² " + (b >= 0 ? "+ " : "- ") + Math.abs(b) + "x " + (c >= 0 ? "+ " : "- ") + Math.abs(c) + " = 0" + "</h2><br><br>"
            + "<h2 style='text-decoration: underline;'> Remark </h2><br>"
            + "<h2> Δ = " + delta + " > 0 , there are 2 distinct solutions" + "</h2><br><br>"
            + "<h2 style='text-decoration: underline;'>Conclusion</h2><br>"
            + "<h2>S = { " + x1.toFixed(2) + " ; " + x2.toFixed(2) + " }</h2>");
    } else if (delta === 0) {
        const x = -b / (2 * a);
        res.html("<h2 style='text-decoration: underline;'> The equation</h2><br>"
            + "<h2> " + (a === 1 ? '' : (a === -1 ? '-' : a)) + "x² " + (b >= 0 ? "+ " : "- ") + Math.abs(b) + "x " + (c >= 0 ? "+ " : "- ") + Math.abs(c) + " = 0" + "</h2><br><br>"
            + "<h2 style='text-decoration: underline;'> Remark </h2><br>"
            + "<h2> Δ = 0, has a double root!</h2><br><br>"
            + "<h2 style='text-decoration: underline;'>Conclusion</h2><br>"
            + "<h2>S = { " + x.toFixed(2) + " }</h2>");
    } else {
        res.html("<h2 style='text-decoration: underline;'> The equation</h2><br>"
            + "<h2> " + (a === 1 ? '' : (a === -1 ? '-' : a)) + "x² " + (b >= 0 ? "+ " : "- ") + Math.abs(b) + "x " + (c >= 0 ? "+ " : "- ") + Math.abs(c) + " = 0" + "</h2><br><br>"
            + "<h2 style='text-decoration: underline;'> Remark </h2><br>"
            + "<h2> Δ = " + delta + " < 0" + "</h2><br><br>"
            + "<h2 style='text-decoration: underline;'>Conclusion</h2><br>"
            + "<h2>No solution in R!</h2>");
    }

    $(".card_container").focus();
    document.forms.data.reset();
}

$(".reset").click(function () {
    $("#result").html("<h1>Results</h1>");
});

function reset() {
    document.forms.data.reset();
    $("#a").focus();
}
