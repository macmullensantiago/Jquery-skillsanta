$(document).ready(function () {

    // var parent= $('span').parents();

    // var parent= $('span').parentsUntil('html');

    // var parent= $('span').parent();

    // console.log(parent);
    // parent[0].innerText ='This is modified text';

    // var children= $('body').children('div#div1');

    // console.log(children);


    // var children= $('div').find('span#span1');

    // console.log(children);


    // var sibling = $('div').siblings();

    // var sibling = $('div').siblings('button');
    // var sibling = $('div#div1').next();

    // var sibling = $('div#div1').next();
    //  var sibling = $('button#stop').nextAll();

    // var sibling = $('button#toggle').nextUntil('div');
    // var sibling = $('button#toggle').prevAll();

    // console.log(sibling);


    // var filter = $('button').first();

    // var filter = $('span').last();

    //  var filter = $('div').eq(1);

    //  var filter = $('div').filter('.test');

    var filter = $('div').not('#div1');

    console.log(filter);

    $('#div1').load('https://jsonplaceholder.typicode.com/posts', function (res, status, xhr) {
        console.log(res);
        console.log(status);
        console.log(xhr);
    });


    $.get('https://jsonplaceholder.typicode.com/posts', function (res, status) {
        console.log(res);
        console.log(status);
    });

    $.post('https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1
    }, function (res, status) {
        console.log(res);
        console.log(status);
    });

    // fetch('https://jsonplaceholder.typicode.com/posts/1')
    //     .then(response => response.json())
    //     .then(json => console.log(json))

    $('#toggle').click(function () {
        // $('div').hide("slow");
        // $('div').fadeTo(2000,0);
        //  $('div').slideDown(2000,function(){
        //      alert('Slidedown effct triggered');
        //  }).animate({ width: '100%', opacity: '0.5', borderRadius: '15px' });
        // $('div').animate({ width: '100%', opacity: '0.5', borderRadius: '15px' });
        // var div = $('div');

        // var div1Val = $('#div1').text();
        // console.log(div1Val);


        // var txtName = $('#name').val();
        // console.log(txtName);

        // var title = $('<div></div>').text('Title');

        // $('#title').after(title);

        // $('#title').empty();
        // var hrefAttr = $('#hrefAttr').attr("href");
        // console.log(hrefAttr);
        // $('#div1').text(function (i, orginalText) {
        //     console.log(orginalText);
        //     console.log(i);
        //     return "Hello  world!";
        // });

        // $('#name').val('Pune');
        // $('#hrefAttr').attr("href", "google.com");
        // div.animate({ width: '100%' });
        // div.animate({ borderRadius: '15px' });
        // div.animate({ opacity: '0.5' });
        // $('div').hide("slow",function(){
        //     alert('div is hidden now');
        // });
        // alert('div is hidden now');

        // $('div').toggleClass('title');
        console.log($('div').css('border-radius'));
        $('div').css('border-radius', '15px');

        console.log($(window).width());
        $('#title').outerWidth(500);

    });


    // $('#toggle').dblclick(function () {
    //     $('div').show("fast");
    // });
    $('#stop').focus(function () {
        // $('div').stop();
        $('div').removeClass('title');
    });


    $('#name').focus(function () {
        $('#title')[0].innerText = 'This is focus event';
    });

    $('#name').blur(function () {
        $('#title')[0].innerText = 'This is blur event';
    });


    $('#name').mouseenter(function () {
        $('#title')[0].innerText = 'This is mouseenter event';
    });

});