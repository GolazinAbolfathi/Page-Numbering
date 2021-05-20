//get all the list items by class name: 
const contactList=document.querySelectorAll(`li`);
const ul=document.querySelector(`ul`);


//create Buttons
function createButtons()
{
    const div=document.createElement(`div`);
    div.setAttribute("class","pagination");
    
    for(var i=0;i<6;i++)
    {

        const link=document.createElement(`li`);
        const a=document.createElement(`a`);
        a.onclick=function(){
            var pageNum=parseInt(a.innerText);
            var k=0;
                    switch(pageNum)
                    {
                        case 1:
                            k=0;
                            createContactList(k);
                            break;
                        case 2:
                            k=10;
                            createContactList(k);
                            break;
                        case 3:
                            k=20;
                            createContactList(k);
                            break;
                        case 4:
                            k=30;
                            createContactList(k);
                            break;
                        case 5:
                            k=40;
                            createContactList(k);
                            break;
                        case 6:
                            k=50;
                            createContactList(k);
                            break;
                    }
        };

        a.appendChild(document.createTextNode(i+1));

        link.appendChild(a);
        div.appendChild(link);
    }
    
    document.querySelector(`body`).appendChild(div);
}

//create HTML
function createContactList(pageNumber)
{
    ul.innerHTML="";
    if(pageNumber==50)
    {
        maxNum=pageNumber+5;
        while(pageNumber<(maxNum))
        {
            ul.appendChild(contactList[pageNumber]);
            pageNumber++;
            
        }
    }
    else
    {
        maxNum=pageNumber+10;
        while(pageNumber<(maxNum))
        {
            ul.appendChild(contactList[pageNumber]);
            pageNumber++;
            
        }
    }

}

//create pages:

createContactList(0);
createButtons();

