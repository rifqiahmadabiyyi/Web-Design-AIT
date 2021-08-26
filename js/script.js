window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $(".index .navbar").addClass('navbar-white');
    $(".index .navbar-brand .brand-2").addClass('d-block');
    $(".index .navbar-brand .brand-1").addClass('d-none');
    // $(".index .navbar-brand .brand-1").removeClass('d-none');
  } else {
    $(".index .navbar").removeClass('navbar-white');
    $(".index .navbar-brand .brand-2").removeClass('d-block');
    $(".index .navbar-brand .brand-1").removeClass('d-none');
  }
}

ScrollOut({
    targets: '.judul-1, .judul-2, .ml-n-4 img, .down, .slide, .animasi, .down-delay-1, .down-delay-2, .down-delay-3, .slide-delay-1, .slide-delay-2, .slide-delay-3'
});

const moveTo = new MoveTo();

const target = document.getElementById('target');

moveTo.move(target);

// Or register a trigger

const trigger = document.getElementsByClassName('js-trigger')[0];
const tentang = document.getElementsByClassName('tentang-nav')[0];
const tujuan = document.getElementsByClassName('tujuan-nav')[0];
const fitur = document.getElementsByClassName('fitur-nav')[0];
const manfaat = document.getElementsByClassName('manfaat-nav')[0];
const keunggulan = document.getElementsByClassName('keunggulan-nav')[0];
const kontak = document.getElementsByClassName('kontak-nav')[0];

moveTo.registerTrigger(trigger);
moveTo.registerTrigger(tentang);
moveTo.registerTrigger(tujuan);
moveTo.registerTrigger(fitur);
moveTo.registerTrigger(manfaat);
moveTo.registerTrigger(keunggulan);
moveTo.registerTrigger(kontak);


