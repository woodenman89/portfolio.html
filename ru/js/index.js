

var classes = ['CAPTURE', 'YOUR', 'STORY',];
(function displayClass(i) {
    $('h1.fadetxt').text(classes[i]).fadeIn(1000).delay(1000).fadeOut(1000, function() {
        displayClass((i + 1) % classes.length);
    });
})(0);
