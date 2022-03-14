$(document).ready(function(){
    const novel = [
       {
         title:"The Great Cleric",link:"the-great-cleric-light-novel.html"
       }/* {
          title:"In Another World With My Smartphone", link:"in-another-world-with-smartphone-all-volumes-pdf.html"
        }*/,{
          title:"I'm Gonna Live with You Not Because My Parents Left Me Their Debt But Because I Like You",link:"im-gonna-live-with-you-not-because-my-parents-left-me-their-debt-but-because-i-like-you.html"
        },{
          title:"Date A Live - Date A Bullet", link:"date-a-bullet-light-novel.html"
        },{
          title:"Date A Live", link:"date-a-live-light-novel-epub.html"
        },{
          title:"My Plain-looking Fiance Is Secretly Sweet With Me", link:"my-plain-looking-fiance-is-secretly.html"
        },{
          title:"World Strongest Rearguard – Labyrinth Country and Dungeon Seekers",link:"world-strongest-rearguard-labyrinth-country-and-dungeon-seekers.html"
        },{
          title:"The Romcom Where The Childhood Friend Won't Lose!",link:"osananajimi-ga-zettai-ni-makenai-love-comedy-light-novel.html"
        },{
          title:"Goodbye Otherworld, See You Tomorrow",link:"goodbye-otherworld-see-you-tomorrow-light-novel.html"
        },{title:"The Neighboring Aarya-san who Sometimes Acts Affectionate and Murmuring in Russian",link:"the-neighboring-aarya-san-who-sometimes.html"},
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
        },{title:"Spy Classroom",link:"spy-classroom-light-novel.html"},
        {
            title:"Private Tutor to the Duke’s Daughter",link:"private-tutor-to-the-dukes-daughter-light-novel.html"
        },{
            title:"I’m Fine With Being the Second Girlfriend",link:"im-fine-with-being-the-second-girlfriend.html"
        },{
            title:"My Instant Death Ability is So Overpowered, No One in This Other World Stands a Chance Against Me!", link:"my-instant-death-ability-light-novel.html"
        },{
            title:"Even a ‘used goods’ wants to experience love",link:"chuuko-demo-koi-ga-shitai.html"
        },{title:"(86)Eighty Six",link:"eighty-six-light-novel.html"},
        {
            title:"My Seatmate Tries to Make Me Fall in Love with Her by Teasing Me Repeatedly, but Somehow She Was the One Who Fell", link:"my-seatmate-tries-to-make-me-fall-in.html"
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
