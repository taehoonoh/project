var thum = document.querySelectorAll('.thum figure img');



var iff = document.querySelector('.left iframe')
var leImg= document.querySelector('.left .leImg')
var ifigcap =  document.querySelector('.left figcaption')
var ifp = document.querySelector('.left p')

var behind =[

    {
        link:'https://www.youtube.com/embed/3U241dzSonQ',
        txt1:'Rachel McAdams and Domhnall Gleeson interview',
        txt2:'A British romantic comedy science fiction film revolving around time travel where a young man tries to change his past to have a better futureWritten and directed by Richard Curtis, and starring Domhnall Gleeson, Rachel McAdams and Bill Nighy. The film was released in the UK on 4 September 2013 and is scheduled to be released in the US on 1 November 2013.'
    },
    {
        link:'https://www.youtube.com/embed/Lmjg6DYLQDE',
        txt1:"Rachel McAdams'sOfficial 'About Time' Interview",
        txt2:"Rachel McAdams and Billy Nighy About Time interviews with Deidre Behar about time travel, career milestones, Mean Girls reunion, Richard Curtis, and more!"
    },
    {
        link:'https://www.youtube.com/embed/FlTejR4bjbk',
        txt1:"About Time B Roll",
        txt2:"Rachel McAdams and Billy Nighy About Time interviews with Deidre Behar about time travel, career milestones, Mean Girls reunion, Richard Curtis, and more!"
    },
    {
        link:"https://www.youtube.com/embed/WOj7Ga6ql1k?list=PLkLDMQTGIjEvaVXnsHQniGS09MSARabyq",
        txt1:"About Time Premiere Interviews",
        txt2:'A British romantic comedy science fiction film revolving around time travel where a young man tries to change his past to have a better futureWritten and directed by Richard Curtis, and starring Domhnall Gleeson, Rachel McAdams and Bill Nighy. The film was released in the UK on 4 September 2013 and is scheduled to be released in the US on 1 November 2013.'
    },
]
console.log(ifp);

for(let i =0; i<4; i++){
    thum[i].addEventListener('click',function(){
        behindChange(i);
    })
}

function behindChange(num){
    leImg.style.display="none";
    iff.style.display ="block";
    iff.src = behind[num].link;
    ifigcap.textContent = behind[num].txt1;
    ifp.textContent =behind[num].txt2;
}


thum[4].addEventListener('click',function(e){
    imgBlock(e);
    ifigcap.textContent = "About Time photo1";
 
})

thum[5].addEventListener('click',function(e){
    imgBlock(e);
    ifigcap.textContent = "About Time photo2";
})

thum[6].addEventListener('click',function(e){
    imgBlock(e);
    ifigcap.textContent = "About Time photo3";
})

function imgBlock(e){
    leImg.src = e.target.src;
    iff.style.display ="none";
    leImg.style.display="block";
    ifp.textContent=null
    
}
