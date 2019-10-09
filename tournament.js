$(document).ready(function() {

    document.getElementById('btn0').onclick = function(){ generate("round0.csv", "round1.csv"); };
    document.getElementById('btn1').onclick = function(){ generate("round1.csv", "round2.csv"); };
    document.getElementById('btn2').onclick = function(){ generate("round2.csv", "round3.csv"); };
    document.getElementById('btn3').onclick = function(){ generate("round3.csv", "round4.csv"); };
    document.getElementById('btn4').onclick = function(){ generate("round4b.csv", "round5.csv"); };
    document.getElementById('btn5').onclick = function(){ generate("round5b.csv", "round6.csv"); };

    function generate(pairs, winners) {
        document.getElementById('round').innerHTML = "<div class=\"title\">Round " + pairs.substring(5, 6) + "</div>";
        document.getElementById('winners').innerHTML = "<div class=\"title\">Winners</div>";

        d3.csv(pairs, function(text) {
            for (var i = 0; i < text.length; i++) {
                document.getElementById('round').innerHTML += text[i]["Submissions"];
                if (i % 2 == 1) {
                    document.getElementById('round').innerHTML += "<br>";
                } else if (i < text.length - 1 && text[i]["Submissions"] != ""){
                    document.getElementById('round').innerHTML += " | ";
                }
            }
        });

        d3.csv(winners, function(text) {
            for (var i = 0; i < text.length; i++) {
                document.getElementById('winners').innerHTML += text[i]["Submissions"] + "<br>";
                if (i % 2 == 1) {
                    //document.getElementById('winners').innerHTML += "<br>";
                }
            }
        });

        document.getElementById('final').style.display = "none";
        if (pairs.substring(5, 6) == "5") {
            document.getElementById('final').style.display = "block";
        }

    }

    generate("round0.csv", "round1.csv");

    setTimeout(function() {
        //document.getElementById("winners").style.display = "inline";
        //document.getElementById("round0").style.display = "none";
    }, 5 * 1000);

});
