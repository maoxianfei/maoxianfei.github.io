function high_eat(){
var array = ["火锅","牛排","私房菜","烤鱼","烤肉","海鲜","吉祥排骨","串串","麻辣烫","日料","泰国菜","韩国菜",


];
var choice=Math.floor((Math.random()*array.length));
$("#high_price").text(array[choice]);
// alert(array[choice])
} 

function normal_eat(){
var array = [
"饺子","面条","汤圆","粽子","糯米糍","豆沙包","茶叶蛋","小笼包","叉烧包",
"汤包","醪糟","豆腐花",


];
var choice=Math.floor((Math.random()*array.length));
$("#normal_price").text(array[choice]);
// alert("aa")
} 
function stock(){
        // var xmlhttp_china;
        // xmlhttp_china=new XMLHttpRequest();
        // xmlhttp_china.onreadystatechange=function(){
        // if (xmlhttp_china.readyState==4 && xmlhttp_china.status==200)
        //         {
        //                 var result=xmlhttp_china.responseText;
        //                 alert(result)
        //         }
        // }
        // xmlhttp_china.open("GET","https://www.nihaowua.com/",true);
        // xmlhttp_china.send();
        // $.get("https://www.nihaowua.com/");
        $.ajax({
                type:"get",
                url:"http://flyis.top/php/get.php",
                success: function(data, status, xhr) { 
                    $("#msg").html(data); 
                    message=JSON.stringify($("#msg").children("section").children("div").children().html())
                    // alert(message)
                    
                    $("#superhead").text(message)
                   
                },
                error:function(data, status, xhr){
                
                        
                },
                complete:function(){
                       
                }
});
        
}
function giftChoice(){
var array = ["编织篮子包","小熊猫卡通造型硅胶杯",

];
var choice=Math.floor((Math.random()*array.length));
$("#gift").text(array[choice]);
}
function stock_ajax(){
        var money
        money=($("#liantong").html()-$("#liantong_data").html())*200
        $("#liantong_cost").text(parseInt(money))
        var money1
        money1=($("#gaoshu").html()-$("#gaoshu_data").html())*400
        $("#gaoshu_cost").text(parseInt(money1))
}
function query(){
        var xmlhttp_china;
        var xmlhttp;
        xmlhttp=new XMLHttpRequest();
        xmlhttp_china=new XMLHttpRequest();
        xmlhttp.onreadystatechange=function(){
                if (xmlhttp.readyState==4 && xmlhttp.status==200)
                {
                        var result=xmlhttp.responseText;
                        // {"stats":{"hashes":"2040339339","lastShare":"1527236818","balance":"8224019881","last_reward":"624813110","paid":"100000000000","hashrate":"216.67 H"},"payments":["5d6480d5ba9e72508ef61cf4e45f60fb8f4fbd2f909c5cb21ba0a75bb326d21c:100000000000:5000000000:6","1526781736"],"perWorkerStats":[{"workerId":"default","hashes":"139980548","lastShare":"1525956203"},{"workerId":"baidu107+bai107","hashrate":"216.67 H","hashes":"431052178","lastShare":"1527236818"},{"workerId":"baidu95","hashes":"160000","lastShare":"1526663815"}]}
                        var jsonstr;
                        jsonstr=JSON.parse(result);
                        // alert(JSON.stringify(jsonstr))
                        var out;
                        out=parseInt(jsonstr['stats']['balance'])+parseInt(jsonstr['stats']['paid']);
                        document.getElementById("xmr").innerHTML=out;


                }
        }
        xmlhttp_china.onreadystatechange=function(){
                if (xmlhttp_china.readyState==4 && xmlhttp_china.status==200)
                {
                        var result=xmlhttp_china.responseText;
                        // {"hash":90,"identifier":"global","lastHash":1527166285,"totalHashes":222289505,"validShares":39710,"invalidShares":null,"amtPaid":0,"amtDue":23171671600,"txnCount":0}
                        
                        var jsonstr;
                        jsonstr=JSON.parse(result);
                        document.getElementById("xmr_china").innerHTML=jsonstr['amtDue'];


                }
        }
        xmlhttp.open("GET","https://web.xmrpool.eu:8119/stats_address?address=45FR9eLCtL7bSMkswQEoBtCTMCAvXLMGAVXjvxH1ijLLZccLejisH4udmpNSiYosYH91KPyS5uotWHyjZhBX1WAALDvJuAH&longpoll=false",true);
        xmlhttp_china.open("GET","https://api.chinaenter.cn:888/miner/42CsiLC7kyqPN6tYD9wBUnTfhWzEgxmYeTwJuvpw5aWdUtYP5av6mmg6TSwj67L5zjbxpRz8gLZukL4AeeTuCMLB2cdNM1C/stats",true);
        xmlhttp.send();
        xmlhttp_china.send();
}
