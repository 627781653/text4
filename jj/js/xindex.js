document.addEventListener('DOMContentLoaded',function(ev){
    var oUl=document.querySelector('#tab div');
    var aLi=oUl.querySelectorAll('a');
    //console.log(aLi);
    var x=0;
    var iNow=0;

    oUl.addEventListener('touchstart',function(ev){

        var downX=ev.targetTouches[0].pageX;
        var disX=downX-x;
        oUl.style.WebkitTransition='none';

        function fnMove(ev){
            x=ev.targetTouches[0].pageX-disX;
            oUl.style.WebkitTransform='translateX('+x+'px)';

        }

        function fnEnd(ev){
            document.removeEventListener('touchmove',fnMove,false);
            document.removeEventListener('touchend',fnEnd,false);
            var upX=ev.changedTouches[0].pageX;

            if(Math.abs(upX-downX)>20){
                if(downX>upX){

                    iNow++;
                    if(iNow==aLi.length){
                        //alert(aLi.length);
                        iNow=aLi.length-1;
                    }
                }else{
                    iNow--;
                    if(iNow==-1){
                        iNow=0;
                    }
                }
            }
            x=-iNow*aLi[0].offsetWidth;
            oUl.style.WebkitTransition='.5s all ease';
            oUl.style.WebkitTransform='translate('+x+'px)';
        }

        document.addEventListener('touchmove',fnMove,false);
        document.addEventListener('touchend',fnEnd,false);
    },false);
    ev.preventDefault();

},false);