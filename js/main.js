$(document).ready(function() {
    const audio = new Audio("./sound/sound.mp3");
    audio.play();
    // process bar
    setTimeout(function() {
        firstQuestion();
        $('.spinner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
        
    }, 5000);
})


function init(){
    $('#title').text(CONFIG.title)
    $('#desc').text(CONFIG.desc)
    $('#yes').text(CONFIG.btnYes)
    $('#no').text(CONFIG.btnNo)
}
init()
function firstQuestion(){
    $('.content1').hide();
    Swal.fire({
        title: CONFIG.introTitle,
        text: CONFIG.introDesc,
        imageUrl: 'img/lookMe2.webp',
        imageWidth: 300,
        imageHeight: 300,
        background: '#fff url("img/iput-bg.jpg")',
        imageAlt: 'Custom image',
        confirmButtonText: CONFIG.btnIntro
      }).then(function(){
        Swal.fire({
            title: '(◡‿◡✿)',
            text: '1 năm có 365 ngày và hành trình 365 ngày đó chắc hẳn có một ngày vui đặc biệt cho mỗi con người chúng ta. Ngày hôm nay chính là ngày vui đặc biệt cho bé Ngọc, bởi bé Ngọc sẽ đón nhận thêm một tuổi mới, niềm vui mới.',
            imageUrl: 'img/lookMe3.webp',
            imageWidth: 300,
            imageHeight: 300,
            background: '#fff url("img/iput-bg.jpg")',
            imageAlt: 'Custom image',
            confirmButtonText: CONFIG.btnIntro
            }).then(function(){
                Swal.fire({
                    title: '╚(•⌂•)╝',
                    text: 'Ngày bé Ngọc cất tiếng khóc chào đời cũng chính là ngày vui vô bờ bến của ba mẹ em, vì cũng chính từ giây phút đó gia đình đã đón nhận thêm một thành viên mới, một hy vọng mới và đó cũng chính là niềm động lực thúc đẩy cho cuộc sống của ba mẹ thêm phấn đấu hơn tới tương lai.',
                    imageUrl: 'img/lookMe4.webp',
                    imageWidth: 300,
                    imageHeight: 300,
                    background: '#fff url("img/iput-bg.jpg")',
                    imageAlt: 'Custom image',
                    confirmButtonText: CONFIG.btnIntro
                    }).then(function(){
                        Swal.fire({
                            title: '≧◔◡◔≦',
                            text: 'Và để kỷ niệm cho ngày vui đặc biệt này thì hôm nay anh tặng em món quà nhỏ.',
                            imageUrl: 'img/lookMe5.webp',
                            imageWidth: 300,
                            imageHeight: 300,
                            background: '#fff url("img/iput-bg.jpg")',
                            imageAlt: 'Custom image',
                            confirmButtonText: CONFIG.btnIntro
                            }).then(function(){
                                $('.content1').show(200);
                            })
                    })
            })
      })
}

 // switch button position
 function switchButton() {
    var audio = new Audio('sound/duck.mp3');
    audio.play();
    var leftNo = $('#no').css("left");
    var topNO = $('#no').css("top");
    var leftY = $('#yes').css("left");
    var topY = $('#yes').css("top");
    $('#no').css("left", leftY);
    $('#no').css("top", topY);
    $('#yes').css("left", leftNo);
    $('#yes').css("top", topNO);
}
// move random button position
function moveButton() {
    var audio = new Audio('sound/Swish1.mp3');
    audio.play();
    var x = Math.random() * ($(window).width() - $('#no').width()) * 0.9 ;
    var y = Math.random() * ($(window).height() - $('#no').height()) * 0.9;
    var left = x + 'px';
    var top = y + 'px';
    $('#no').css("left", left);
    $('#no').css("top", top);
}

// init()

var n = 0;
$('#no').mousemove(function() {
    if (n < 1)
        switchButton();
    if (n > 1)
        moveButton();
    n++;
});
$('#no').click(() => {
    if (screen.width>=900)
        switchButton();
})

// generate text in input
function textGenerate() {
    var n = "";
    var text = " " + CONFIG.reply;
    var a = Array.from(text);
    var textVal = $('#txtReason').val() ? $('#txtReason').val() : "";
    var count = textVal.length;
    if (count > 0) {
        for (let i = 1; i <= count; i++) {
            n = n + a[i];
            if (i == text.length + 1) {
                $('#txtReason').val("");
                n = "";
                break;
            }
        }
    }
    $('#txtReason').val(n);
    setTimeout("textGenerate()", 1);
}

// show popup
$('#yes').click(function() {
    var audio = new Audio('sound/tick.mp3');
    audio.play();
    Swal.fire({
        title: CONFIG.question,
        background: '#fff url("img/iput-bg.jpg")',
        backdrop: `
              rgba(0,0,123,0.4)
              url("img/giphy2.gif")
              left top
              no-repeat
            `,
        confirmButtonColor: '#3085d6',
        confirmButtonColor: '#fe8a71',
        confirmButtonText: 'Thui thì tặng em 1 địu nhảy'
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                width: 900,
                confirmButtonText: CONFIG.btnAccept,
                background: '#fff url("img/iput-bg.jpg")',
                title: CONFIG.mess,
                text: CONFIG.messDesc,
                confirmButtonColor: '#83d0c9',
                imageUrl: 'img/lookMe6.webp',
                imageWidth: 300,
                imageHeight: 300,
                onClose: () => {
                    window.location = CONFIG.messLink;
                  }
            })
        }
    })
})

