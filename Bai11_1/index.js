
let sout, i, j;
sout = "<table border='5' width='300' cellspacing='5' cellpadding='10'>";

for (i = 2; i < 10; i++) {
    sout = sout + "<tr>";
    for (j = 2; j < 10; j++) {
        sout = sout + "<td>" + j + "x" + i + "=" + i * j + "</td>";
    }
    sout = sout + "</tr>";
    // j = 2;
}
sout = sout + "</table>";
document.write(sout);