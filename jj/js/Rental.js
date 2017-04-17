/**
 * Created by Administrator on 2017/4/4 0004.
 */
document.addEventListener('DOMContentLoaded',function(){
    var oUl = document.getElementById('tab');
    var aLi = oUl.children;
    var iNow = 1;
    var x = -iNow*aLi[0].offsetWidth;
    var bReady = true;
    oUl.addEventListener('touchstart',function(ev){
        if(bReady==false){return;}
        bReady = false;
        oUl.style.transition = 'none';
        var disX = ev.targetTouches[0].pageX - x;
        var downX = ev.targetTouches[0].pageX;
        function fnMove(ev){
            x = ev.targetTouches[0].pageX - disX;
            oUl.style.transform = 'translate3d('+x+'px,0,0)';
        }
        function fnEnd(ev){
            var upX = ev.changedTouches[0].pageX;
            //判断是否移动距离大于50
            if(Math.abs(upX - downX)>50){
                //左边移动
                if(upX - downX<0){
                    iNow++;
                    if(iNow==aLi.length){iNow=aLi.length-1;}
                }else{
                    //右边移动
                    iNow--;
                    if(iNow==-1){iNow=0;}
                }
            }
            x = -iNow*aLi[0].offsetWidth;
            oUl.style.transform = 'translate3d('+x+'px,0,0)';
            oUl.style.transition = '200ms all ease';
            function tEnd(){
                if(iNow==aLi.length-1){
                    iNow=1;
                }
                if(iNow==0){iNow=aLi.length-2;}
                oUl.style.transition = 'none';
                x = -iNow*aLi[0].offsetWidth;
                oUl.style.transform = 'translate3d('+x+'px,0,0)';
                bReady = true;
            }
            oUl.addEventListener('transitionend',tEnd,false);
            document.removeEventListener('touchend',fnEnd,false);
            document.removeEventListener('touchmove',fnMove,false);
        }
        document.addEventListener('touchmove',fnMove,false);
        document.addEventListener('touchend',fnEnd,false);
        ev.preventDefault();
    },false);
},false);