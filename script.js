let u=document.querySelector(".list");
function del_element(item)
{
    item.remove();
}
function addTask()
{
    let task=document.getElementById("task").value;
    if(task!='')
    {
        let c=document.createElement("li");
        let del=document.createElement("input");
        c.innerText=task;
        del.setAttribute("type","image");
        del.setAttribute("src","img/orange-check-mark-correct-tick-16239.svg");
         
        del.setAttribute('onclick','del_element(this.parentElement)');
        u.append(c);
        c.append(del);
        
       
       
        
        document.getElementById('task').value="";
    }
    else
    {
        alert("Please Enter Task");
    }
}
