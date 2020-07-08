
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$(document).ready(function(){

    // nav

    $('.ianim').velocity(
        { transform: "rotateZ(30deg)" },
        { delay: 1000, duration: 1000 }
    );
    $('.tanim').velocity(
        { opacity: 0 , transform: "translateX(-8px)"},
        { duration: 1500 }
    );
    $('.ianim').velocity(
        { transform: "rotateZ(160deg)" },
        { duration: 700 }
    );
    $('.adr').velocity(
        { opacity: 0.5 },
        { delay: 2500, duration: 50 }
    );
    $('.adr').velocity(
        { opacity: 1 },
        { duration: 2000 }
    );
    $('.ianim').velocity(
        { transform: "rotateZ(190deg)" },
        { loop: true, duration: 500 }
    );

    // body
    ubah_mode();

    $('.awan').velocity(
        { transform: "translateX(-8px)" },
        { loop: true, duration: 1500 }
    );

    $('.saklar').click(function(){
        var mode = $('.mode').text();
        if (mode == "Gelap"){
            $('.w-gelap').velocity(
                { backgroundColor: "#ecfbfc" },
                { duration: 1000 }
            );
            $('.w-terang').velocity(
                { color: "#1b1b2f" },
                { duration: 500 }
            );
            $('.w-logo').velocity(
                { color: "#1b1b2f" },
                { duration: 500 }
            );
            $('.matahari').velocity(
                { opacity: 0.8, transform: "translateY(-50px)" },
                { duration: 1000 }
            );
            $('.bulan').velocity(
                { opacity: 0, transform: "translateY(180px)" },
                { duration: 1000 }
            );
            $('.gunung').velocity(
                { filter: "brightness(120%)" },
                { duration: 1000 }
            );
            $('.awan').velocity(
                { opacity: 1 },
                { duration: 2000 }
            );
            $('.note').text('Note: Click the Sun picture to change the Dark Mode');
            $('.mode').text('Terang');
        }else{
            $('.w-gelap').velocity(
                { backgroundColor: "#1b1b2f" },
                { duration: 1000 }
            );
            $('.w-terang').velocity(
                { color: "#ecfbfc" },
                { duration: 1000 }
            );
            $('.w-logo').velocity(
                { color: "#ecfbfc" },
                { duration: 1000 }
            );
            $('.bulan').velocity(
                { opacity: 1, transform: "translateY(-50px)" },
                { duration: 1000 }
            );
            $('.matahari').velocity(
                { opacity: 0, transform: "translateY(180px)" },
                { duration: 1000 }
            );
            $('.gunung').velocity(
                { filter: "brightness(60%)" },
                { duration: 1000 }
            );
            $('.awan').velocity(
                { opacity: 0.8 },
                { duration: 1000 }
            );
            $('.note').text('Note: Click the Moon picture to change the Bright Mode');
            $('.mode').text('Gelap');
        }
    });

    function ubah_mode(){
        var mode = $('.mode').text();
        if (mode != "Gelap"){
            $('.w-gelap').velocity(
                { backgroundColor: "#ecfbfc" },
                { duration: 1000 }
            );
            $('.w-terang').velocity(
                { color: "#1b1b2f" },
                { duration: 500 }
            );
            $('.w-logo').velocity(
                { color: "#1b1b2f" },
                { duration: 500 }
            );
            $('.matahari').velocity(
                { opacity: 0.8, transform: "translateY(-50px)" },
                { duration: 1000 }
            );
            $('.bulan').velocity(
                { opacity: 0, transform: "translateY(180px)" },
                { duration: 1000 }
            );
            $('.gunung').velocity(
                { filter: "brightness(120%)" },
                { duration: 1000 }
            );
            $('.awan').velocity(
                { opacity: 1 },
                { duration: 1000 }
            );
            $('.note').text('Note: Click the Sun picture to change the Dark Mode');
            $('.mode').text('Terang');
        }else{
            $('.w-gelap').velocity(
                { backgroundColor: "#1b1b2f" },
                { duration: 1000 }
            );
            $('.w-terang').velocity(
                { color: "#ecfbfc" },
                { duration: 1000 }
            );
            $('.w-logo').velocity(
                { color: "#ecfbfc" },
                { duration: 1000 }
            );
            $('.bulan').velocity(
                { opacity: 1, transform: "translateY(-50px)" },
                { duration: 1000 }
            );
            $('.matahari').velocity(
                { opacity: 0, transform: "translateY(180px)" },
                { duration: 1000 }
            );
            $('.gunung').velocity(
                { filter: "brightness(60%)" },
                { duration: 1000 }
            );
            $('.awan').velocity(
                { opacity: 0.8 },
                { duration: 1000 }
            );
            $('.note').text('Note: Click the moon picture to change the Bright Mode');
            $('.mode').text('Gelap');
        }
    }

});