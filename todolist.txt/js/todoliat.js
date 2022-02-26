
$(function(){
//     alert(11);
// localStorage.setItem("todolist","abc");
load();
var list = []
$("#title").on("keydown", function(event) {
    if(event.keyCode===13){
        list=getDate(); 
        list.push({title:$(this).val(),done:false})
        console.log(JSON.stringify(list))
        localStorage.setItem("todolist",JSON.stringify(list));
        load();
        // var local=getDate();
        //  local.push({title:$(this).val(), done:false})
        //  savaDate(local);
    }
})
function getDate(){
    var data=localStorage.getItem("todolist");
    console.log(data)
    if(data !== null){
        return JSON.parse(data);
    }else{
        return[];
    }
}
function savaDate(data){
    localStorage.setItem("todolist",JSON.stringify(data));
}
function load(){
    var data=getDate();
    $("ol").empty();
    $.each(data,function(i,n){
        $("ol").prepend("<li><input type='checkbox'><p contentEditable >"+n.title+"</p><a href='javascript:;' id="+ i +"></a></li>");
    })
}
$("ol").on("click","a",function() {
    var date =getDate();
    var index=$(this).attr("id");
    date.splice(index,1);
    savaDate(date);
    load();
    
})
$(".ol").on("keydown","p" ,function(event){
    if(event.keyCode==13){
        /*阻止默认*/
        alert("13");
        event.preventDefault();
        /*失去焦点*/
        this.blur();
    }
})

$("ol").on("keydown", function(event) {
    if(event.keyCode===13){
        /*阻止默认*/
        event.preventDefault();
        /*失去焦点*/
        this.blur();
    }
})
$(".allclear").on("click",function(){
    var date =getDate();
    date=[];
    savaDate(date);
    load();
})

})

