window.onload=function(){
    var aInp=document.querySelectorAll('.sec1 li input');
    var oA=document.querySelectorAll('section a');
    var userReg=/^1[3578]\d{9}$/;
    var yanReg=/^\d{4,6}$/;
    var passReg=/^[\d\w]{6,12}$/;

    aInp[0].onfocus=function(){
        aInp[0].value='';
        aInp[0].style.color='#000';
    };
    aInp[0].onblur=function(){
        var str1=aInp[0].value;
        if(str1){
            if(!userReg.test(str1)){
                alert('手机号错误')
            }
        }else{
            alert('请填写手机号')
        }
    };
    aInp[1].onfocus=function(){
        aInp[1].value='';
        aInp[1].style.color='#000';
    };
    aInp[1].onblur=function(){
        var str2=aInp[1].value;
        if(str2){
            if(!yanReg.test(str2)){
                alert('验证码错误')
            }
        }else{
            alert('请填写验证码')
        }
    };
    aInp[2].onfocus=function(){
        aInp[2].placeholder='';
        aInp[2].style.color='#000';
    };
    aInp[2].onblur=function(){
        var str3=aInp[2].value;
        if(str3){
            if(!passReg.test(str3)){
                alert('密码格式错误')
            }
        }else{
            alert('请填写密码')
        }
    };
    /*if(userReg.test(aInp[0]) && yanReg.test(aInp[1]) && passReg.test(aInp[2])){
        oA.style.background='#df3031';
    }*/
    /*oA.onclick=function(){
        if(!str1 & str2 & str3){
            alert('请填写内容')
        }
    };*/
};
