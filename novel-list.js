$(document).ready(function(){
    const novel = [
        {title:"The Neighboring Aarya-san who Sometimes Acts Affectionate and Murmuring in Russian",link:"the-neighboring-aarya-san-who-sometimes.html"},
        {
          title:"Full Clearing Another World under a Goddess with Zero Believers",link:"full-clearing-another-world-with-a-goddess-with-zero-believer.html"
        },{
          title:"Dreaming Boy Turned Realist",link:"Yumemiru-Danshi-wa-Genjitsushugisha-Light-Novel.html"
        },{
           title:"For Some Reason, The School Goddess Likes to Hang Out at My House",link:"For-Some-Reason-The-School-Goddess-Likes to-Hang-Out-at-My-House.html"
        },{
            title:"I Know That After School, The Saint is More Than Just Noble Light Novel",link:"I-Know-That-After-School-The-Saint-is-More-Than-Just-Noble.html"
        },{title:"Villainess: Reloaded! Blowing Away Bad Ends with Modern Weapons",link:"Villainess-Reloaded-Blowing-Away-Bad-Ends-with-Modern-Weapons.html"},
        {
            title:"In The Land Of Leadale",link:"in-the-land-of-leadale.html"
        },{
            title:"The World Of Otome Games Is Tough For Mobs",link:"in-the-land-of-leadale.html"
        },{
            title:"Fake Marriage With My Ex-Girlfriend",link:"fake-marriage-with-my-ex-girlfriend.html"
        }
        ,{
            title:"Majo No Tabitabi",link:"majo-no-tabitabi.html"
        },{
            title:"My and Her Game War",link:"my-and-her-game-war.html"
        },{
            title:"For Some Reason, a Gal in My Class Became Friends With My Step-sister",link:"For-Some-Reason-a-Gal-in-My-Class-Became-Friends-With-My-Step-sister.html"
        }
    ]
    
    let ul = document.getElementById("novelList");
    
    for(let obj = 0;obj < novel.length;obj++){
        let li = document.createElement("li");
        let a = document.createElement("a");
        
        a.setAttribute("href","");
        
        let txt = novel[obj].title;
        a.href = novel[obj].link;
        a.innerHTML = txt;
        li.append(a);
        ul.append(li);
    }
    
    $(".list li").sort(sortList).appendTo(".list");
    
    function sortList(a,b){
        return ($(b).text()) < ($(a).text()) ? 1:-1;
    }
});
