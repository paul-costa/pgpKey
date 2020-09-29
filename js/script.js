var pgpKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: BCPG v1.56

mQMuBFzZfn8RCACuzEJpHs3WB5yZ0i6ekyo+l4rbKny2NJtHwB4QWfZWCfSjsGcw
jV7qWv09L2LCQkW+nUMAW0KQ5br8WZbfS/ozuvRFCRFqxkqQbLvZt1vR0ONEK6Cu
Oq3cVkZt0XKsya+L4QaUW+QtorRG6R3+5q+xE8ID8vyKhqXC5OPJ4EE910iGtz9I
3h/SXPHxDx8hHBCcT28/bCxJ2gk2K/LRtx/Tbdb6tl/EaHmXaxiqMrCMWZHK9zn2
7w7ZcfQv8geQPlswycSxI8ILbndyfkmSO4B0cSFbv0lyIxq/DlfuY3WG04rLxH0k
XemJa2IFgnPYUZfqC9nbFuy4uewEKYbZzPJ5AQDwUe/4yd+c/LLKDSnkzS09oaLQ
x/LEwJ1ptON0eMq9LQgAl7AnMCVR5PZuPn5rcebIkoF8PHEv/YgznrL3gSGVN9bC
7EhKqQdaa9aWJNBcyc4/eWM9adfvVcqpcmlxzO90TOtdoC206Mx06QAxm5o+V3o1
eQGWjG8Pswv+z+ataXwLhTT6PgUcQmCakkqlyZ02SCsV1QwdPAUXrsqibWnI+KTS
BlTmFW/mb0U0B0CDMYATh4b1u8PXFMyMViaLOknGx/bOHwtGWhNjr3Zmz0YlA7sk
1ZFSCrmiBBBSAE+felru0pk0lofSNN7QQ68vskvLVTHIo3W54oszktbRstgsRgJV
fwGulJaZd8OLFqp/+zKsOGwxiNrSflZajffIETB3hwgAjVCuq/LJH7Wo2mtP+qUX
2oQqYTpA3Xg092n4o9GT0936m6snG6VGU1PB79oGW4Latn/709xglozpTWU6X88i
PmNLbekkJ5nqo0j0LQetX9EaVRsVCPhrsM+whUdDIyEmtImc1X0/J2ZbEkLtkYjy
bPJTFsuQfJuhbOr94yaYnr1TLKEHnHnNXY93FTrVQdsCHoN6x0PHXXy2afILxFYX
JHyOflEKb5QsbTRWJ8Y/Uy+Ht8bml9ysMPdl2JlTy+tIvVk1h+1JN22Mp8pgJunm
Ngp/Gn4JbKvBDZcINyE9np2z/n4OSSoIRIgtPYnJYiyqaPDCzLypP2Lj0++oik0J
KbQhUGF1bCBDb3N0YSA8cGNjYy5jb3N0YUBnbWFpbC5jb20+iF4EExEIAAYFAlzZ
fn8ACgkQTdMBbfqhqGxtswD/dZZq8Q+zX4+7kH4nxyYKP4ZhAB+ymSn7ndspW7+O
08EBAKT7uGVIv2KPftNx5/eJjkpQwyNNTRZyxb1a2U7Y9YMbuMwEXNl+fxACAJSU
/sCV87he4oZUKzg2/IGl3QoDSbTCOd04dE1IjPjjHbi8t9M7Qau55aM8ypFEsc7z
MslL8Fc78EejrKmM3zsB/RU9XWFyrbQwRbaK6OHeEHC2E3AFaG0p09c6d0kZloHu
WyEsm5a/3PpbIM1eP9IESJXWCc+bQQt6DxLKHLmkKMwB/0RTjsIrQZFYV/iyrEW/
mik7bB3QXT4ZnZIDA4ngnh80s9yFLxHkfel05q9NjTkMS+OjsKcSdrfBlQxLDEZa
2g6IXgQYEQgABgUCXNl+fwAKCRBN0wFt+qGobN+rAQCfG52A85pU2FBdlC3AOkJN
8FCDBE7G0taXj2DpVh2DeAD/cJuIWiBTVtrjHtCUl2FuNttDHSXZNiNZUn/+k0/8
JQI=
=kLEe
-----END PGP PUBLIC KEY BLOCK-----
`;


$(document).ready(function()
{
    var pgpKeyArray = pgpKey.split('');
    
    
    var i=0;
    var intervalTypeWriter = setInterval (function()
    {
        document.getElementById('pgpKeyField').innerHTML += pgpKeyArray[i] + pgpKeyArray[i+1] + pgpKeyArray[i+2] + pgpKeyArray[i+3] + pgpKeyArray[i+4];
        i=i+5;
        autoHeight('pgpKeyField', i);

        if(i+4>=pgpKeyArray.length) 
            clearInterval(intervalTypeWriter);
    },1);

    
    
});
    
function autoHeight(field, heightI)
{
    var heightWindow=parseInt($(window).height());
    
    //parseInt($('#'+field).css('line-height')));
    
    $('#'+field).css('height',(heightWindow-300)*(heightI/1672/15)+'em');

}
