<template>
    <div class="float">
        <div id="floatPanel">
            <div class="ctrolPanel">
            <a class="arrow" href="#"><span>顶部</span></a>
            <a class="contact" href="/feedback"><span>反馈</span></a>
            <a class="qrcode" href="#"><span>微信二维码</span></a>
            <a class="arrow" href="#"><span>底部</span></a>
            </div>    
            <div class="popPanel">
                <div class="popPanel-inner">
                    <div class="qrcodePanel"><img src="@/static/images/weixin.jpg" /><p>扫描二维码关注我为好友</p></div>
                    <div class="arrowPanel">
                    <div class="arrow01"></div>
                    <div class="arrow02"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head:{
        script:[
            {src:'js/jquery-1.7.2.min.js'},
        ],
        link: [
        ]
    }, 
    methods:{
        flaot(){
        $(function(){
        
            // 页面浮动面板
            $("#floatPanel > .ctrolPanel > a.arrow").eq(0).click(function(){
            $("html,body").animate({scrollTop :0}, 800);
            return false;
            });
            $("#floatPanel > .ctrolPanel > a.arrow").eq(1).click(function(){
            $("html,body").animate({scrollTop : $(document).height()}, 800);
            return false;
            });

            var objPopPanel = $("#floatPanel > .popPanel");	
            var w = objPopPanel.outerWidth();
            
            $("#floatPanel > .ctrolPanel > a.qrcode").bind({mouseover:function(){
            objPopPanel.css("width","0px").show();
            objPopPanel.animate({"width" : w + "px"},300);
            return false;
            },mouseout : function(){
                objPopPanel.animate({"width" : "0px"},300);
                return false;
                objPopPanel.css("width",w + "px");
            }	
            });
            
        });
        }
    },
    mounted:function(){
        this.flaot();
    },

}
</script>

<style>
@import '@/static/css/float.css';
</style>