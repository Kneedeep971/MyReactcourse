function generateReport() {
    const formattedAllQuickPick3s = quickPick3s.map(function(quickPick3) {
        return `QuickPick3: [${quickPick3}] <br />`;
    }).join("");

    const evens = quickPick3s.filter(function(integer) {
        return integer.slice(-1) %2 == 0;
    } ) ;


outputFormattedAllQuickPick3s(formattedAllQuickPick3s);

}

function outputFormattedAllQuickPick3s(formattedAllQuickPick3s) {
    console.log(formattedAllQuickPick3s);
    document.getElementById("formattedAllQuickPick3s").innerHTML = formattedAllQuickPick3s;
}

function outputEvens(evens) {
    console.log(`evens: ${evens}`);

}
