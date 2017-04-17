window.onload=function(){
    var aInp=document.querySelectorAll('.sec2 li input');
    var oA=document.querySelector('footer a');
    var userReg=/^1[3578]\d{9}$/;
    var passReg=/^[\d\w]{6,12}$/;

    aInp[0].onfocus=function(){
        aInp[0].value='';
        aInp[0].style.color='#000';
    };
    aInp[0].onblur=function(){
        var str1=aInp[0].value;
        if(str1){
            if(!userReg.test(str1)){
                alert('手机号格式错误')
            }
        }else{
            alert('请填写手机号')
        }
    };
    aInp[1].onfocus=function(){
        aInp[1].placeholder='';
        aInp[1].style.color='#000';
    };
    aInp[1].onblur=function(){
        var str2=aInp[1].value;
        if(str2){
            if(!passReg.test(str2)){
                alert('密码格式错误')
            }
        }else{
            alert('请填写密码')
        }
    };
    oA.onclick=function(){
        if(!aInp[0].value && aInp[1].value){
            alert('账号或密码不能为空')
        }
    }
};
