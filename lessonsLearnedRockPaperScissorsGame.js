
    function sec1open () {
        let firstPartPara1= document.getElementById('para1sec1');
        let firstPartPara2= document.getElementById('para2sec1');
        let firstPartPara3= document.getElementById('para3sec1');
        let firstPartPara4= document.getElementById('para4sec1');
        let firstPartPara5= document.getElementById('para5sec1');
        let firstPartPara6= document.getElementById('para6sec1');
        let firstPartPara7= document.getElementById('para7sec1');
        let firstPartPara8= document.getElementById('para8sec1');
    
    
        firstPartPara1.textContent= 'There is a company with the $150 000 USD budget to hire a web developer for 3 years at $50 000 USD per year. The company needs the web dev to make their website and/or websites perform functions: X, Y and Z.';
        firstPartPara2.textContent= 'A web dev has to write instructions via HTML, CSS and JavaScript files that will reside in the company server and anyone accessing the sites will experience performance of the functions X, Y and Z.';
        firstPartPara3.textContent= 'The main question for the web dev to consider is:';
        firstPartPara4.textContent= 'What will, whoever accesses the sites, inputs be such that the output of them are the functions X, Y and Z?';
        firstPartPara5.textContent= 'The answer will dictate how and what instructions the web dev writes.';
        firstPartPara6.textContent= 'HTML instructions allow the dev to organize how the sites structure. CSS instructions allow the dev to dictate the appearances of the site. JavaScript instructions allow the dev to create the way whoever accesses the site will interact with it, such that it produces functions X, Y and Z.';
        firstPartPara7.textContent= 'The HTML, CSS and JS files are then kept in the companys\' server.';
        firstPartPara8.textContent= 'The web dev gets $150 000 USD for 3 years doing that.';
    }
    
    let infoOpen= document.getElementById('infoOpen');
    infoOpen.addEventListener('click', sec1open);
    
    function sec1close () {
        let firstPartPara1= document.getElementById('para1sec1');
        let firstPartPara2= document.getElementById('para2sec1');
        let firstPartPara3= document.getElementById('para3sec1');
        let firstPartPara4= document.getElementById('para4sec1');
        let firstPartPara5= document.getElementById('para5sec1');
        let firstPartPara6= document.getElementById('para6sec1');
        let firstPartPara7= document.getElementById('para7sec1');
        let firstPartPara8= document.getElementById('para8sec1');
    
    
        firstPartPara1.textContent= '';
        firstPartPara2.textContent= '';
        firstPartPara3.textContent= '';
        firstPartPara4.textContent= '';
        firstPartPara5.textContent= '';
        firstPartPara6.textContent= '';
        firstPartPara7.textContent= '';
        firstPartPara8.textContent= '';
    }
    
    let infoClose= document.getElementById('infoClose');
    infoClose.addEventListener('click', sec1close);
          
          
    //section 2
    
    
    function sec2open () {
        let firstPartPara1= document.getElementById('para1sec2');
        let firstPartPara2= document.getElementById('para2sec2');
        let firstPartPara3= document.getElementById('para3sec2');
        let firstPartPara4= document.getElementById('para4sec2');
        let firstPartPara5= document.getElementById('para5sec2');
        let firstPartPara6= document.getElementById('para6sec2');
        let firstPartPara7= document.getElementById('para7sec2');
        let firstPartPara8= document.getElementById('para8sec2');
        let firstPartPara9= document.getElementById('para9sec2');
        let firstPartPara10= document.getElementById('para10sec2');
        let firstPartPara11= document.getElementById('para11sec2');
        let firstPartPara12= document.getElementById('para12sec2');
        let firstPartPara13= document.getElementById('para13sec2');
        let firstPartPara14= document.getElementById('para14sec2');
        let firstPartPara15= document.getElementById('para15sec2');
        let firstPartPara16= document.getElementById('para16sec2');
        let firstPartPara17= document.getElementById('para17sec2');
        let firstPartPara18= document.getElementById('para18sec2');
        let firstPartPara19= document.getElementById('para19sec2');
    
        firstPartPara1.textContent= 'HTML- instructions include, possibly making content using tag elements. So banners, navigation menu, sections for things to occur.';
        firstPartPara2.textContent= 'CSS- instructions include targeting elements and anything else to make sure, on any computer, the site looks the same.';
        firstPartPara3.textContent= 'JavaScript- instructions include making sure any necessary data, words and numbers, are usable in logic conditions to produce a specific output.';
        firstPartPara4.textContent= 'The HTML, CSS and JS files are then sent to which ever server they\'ll reside in. And all together these files make up the website that will perform functions X, Y and Z.';
        firstPartPara5.textContent= 'What happens when a person wants to use a website for functions X, Y and Z';
        firstPartPara6.textContent= 'For anyone to access the files, they must have a computer device (Servers, desktop, laptops and cell/smart phones). Preferably a desktop, laptops or cell/smart phones, since servers are more specialized computers that just house the HTML, CSS and JavaScript files.';
        firstPartPara7.textContent= 'Context:';
        firstPartPara8.textContent= 'The persons\' computer device  to talks to other devices by use of wires on or under the ground that are all connected to each other, or by use of frequencies(wifi) that are all around us similarly to radio.';
        firstPartPara9.textContent= 'A router is a special small computer that connects other computers to each other allowing them to talk to each other. Routers can be connected to each other expand the number of computers that can talk to each other.';
        firstPartPara10.textContent= 'A modem is a piece of equipment that connects a router to telephone wires, which allows for connection to the internet (other groups of computers).';
        firstPartPara11.textContent= 'Internet Service Providers (ISP\'s) connect modems to special routers anywhere in the world.';
        firstPartPara12.textContent= 'The internet is basically computers talking to each other.';
        firstPartPara13.textContent= 'The Internet Protocol Address (IP address) is a label of numbers given to every computer on a network and on the internet. The IP addesses are given names because for a person to remember the numbers is more difficult. So Google.com and Facebook.com are names easier to remember as opposed to the label of numbers';
        firstPartPara14.textContent= 'Facebook.com and Google.com are the names of servers. Servers are special computers that store files of HTML, CSS and JavaScript that make up websites. Websites are a collection of web pages linked together in different ways.';
        firstPartPara15.textContent= 'A browser is a software program on a computer that, when connected to the internet, can display webpages from it. When a person types in the name of a webpage, if the browser doesn\'t have the location of the computer/server where the webpage is stored already, it looks to the Domain Name Server (address book of IP addresses) and other processes to find the computer where the files of the webpage are kept. Talking in a language called HTTP.';
        firstPartPara16.textContent= 'When the location of which computer/server holds the webpage the browser is looking for, it asks the specific computer/server for a copy of the webpage. When approved, the computer/server send a copy of the webpage in packets to the browser to assemble and display for the person.';
        firstPartPara17.textContent= 'A webpage is made up of information and usually presented to look a specific way, usually they have some level of interactivity and sometimes they have media information such as pictures, sounds and videos.';
        firstPartPara18.textContent= 'Conclusion:';
        firstPartPara19.textContent= 'A person uses their computers\' browser to search for the webpages the JavaScript, CSS and HTML files make and get the most out of what ever functions of X, Y and Z the computer performs.';
    }
    
    let infoOpen1= document.getElementById('infoOpen1');
    infoOpen1.addEventListener('click', sec2open);
    
    function sec2close () {
        let firstPartPara1= document.getElementById('para1sec2');
        let firstPartPara2= document.getElementById('para2sec2');
        let firstPartPara3= document.getElementById('para3sec2');
        let firstPartPara4= document.getElementById('para4sec2');
        let firstPartPara5= document.getElementById('para5sec2');
        let firstPartPara6= document.getElementById('para6sec2');
        let firstPartPara7= document.getElementById('para7sec2');
        let firstPartPara8= document.getElementById('para8sec2');
        let firstPartPara9= document.getElementById('para9sec2');
        let firstPartPara10= document.getElementById('para10sec2');
        let firstPartPara11= document.getElementById('para11sec2');
        let firstPartPara12= document.getElementById('para12sec2');
        let firstPartPara13= document.getElementById('para13sec2');
        let firstPartPara14= document.getElementById('para14sec2');
        let firstPartPara15= document.getElementById('para15sec2');
        let firstPartPara16= document.getElementById('para16sec2');
        let firstPartPara17= document.getElementById('para17sec2');
        let firstPartPara18= document.getElementById('para18sec2');
        let firstPartPara19= document.getElementById('para19sec2');
    
    
        firstPartPara1.textContent= '';
        firstPartPara2.textContent= '';
        firstPartPara3.textContent= '';
        firstPartPara4.textContent= '';
        firstPartPara5.textContent= '';
        firstPartPara6.textContent= '';
        firstPartPara7.textContent= '';
        firstPartPara8.textContent= '';
        firstPartPara9.textContent= '';
        firstPartPara10.textContent= '';
        firstPartPara11.textContent= '';
        firstPartPara12.textContent= '';
        firstPartPara13.textContent= '';
        firstPartPara14.textContent= '';
        firstPartPara15.textContent= '';
        firstPartPara16.textContent= '';
        firstPartPara17.textContent= '';
        firstPartPara18.textContent= '';
        firstPartPara19.textContent= '';
    }
    
    let infoClose1= document.getElementById('infoClose1');
    infoClose1.addEventListener('click', sec2close);
    
    
    //section 3
    
    function sec3open () {
        let firstPartPara1= document.getElementById('para1sec3');
        let firstPartPara2= document.getElementById('para2sec3');
        let firstPartPara3= document.getElementById('para3sec3');
        let firstPartPara4= document.getElementById('para4sec3');
        let firstPartPara5= document.getElementById('para5sec3');
        let firstPartPara6= document.getElementById('para6sec3');
        let firstPartPara7= document.getElementById('para7sec3');
        let firstPartPara8= document.getElementById('para8sec3');
        let firstPartPara9= document.getElementById('para9sec3');
        let firstPartPara10= document.getElementById('para10sec3');
        let firstPartPara11= document.getElementById('para11sec3');
        let firstPartPara12= document.getElementById('para12sec3');
        let firstPartPara13= document.getElementById('para13sec3');
        let firstPartPara14= document.getElementById('para14sec3');
        let firstPartPara15= document.getElementById('para15sec3');
        let firstPartPara16= document.getElementById('para16sec3');
    
    
        firstPartPara1.textContent= 'Writing Instructions For Programs';
        firstPartPara2.textContent= 'The following are questions that they must answer and write down to plan their workflow well:';
        firstPartPara3.textContent= 'What are the functions X, Y and Z, that a program or website must perform?';
        firstPartPara4.textContent= 'What are the inputs required from someone using the program or website that cause the output of performance of X, Y and Z from the program or website?';
        firstPartPara5.textContent= 'What are the instructions,in psuedo code, that need to be written in HTML, CSS and Javascript, that will allow the program to accept those inputs and produce the output of performing the X, Y and Z functions?';
        firstPartPara6.textContent= 'First programs to create:';
        firstPartPara7.textContent= 'A rock, paper,scissors game vs the computer as an example.';
        firstPartPara8.textContent= 'A writing work flow program to help with future projects.';
        firstPartPara9.textContent= 'Rock, paper, scissors game vs the computer (example):';
        firstPartPara10.textContent= 'What are the functions X, Y and Z, that a program or website must perform?';
        firstPartPara11.textContent= 'Answer: Allow a user to choose rock, paper or scissors and then compare what the computer chooses then announce a winner.';
        firstPartPara12.textContent= 'What are the inputs required from someone using the program or website that cause the output of performance of X, Y and Z from the program or website?';
        firstPartPara13.textContent= 'Answer: Just making a choice.';
        firstPartPara14.textContent= 'What are the instructions,in psuedo code, that need to be written in HTML, CSS and Javascript, that will allow the program to accept those inputs and produce the output of performing the X, Y and Z functions?';
        firstPartPara15.textContent= 'Answer: Buttons that represent the options of the game to be selected. Announcement of who won the game.';
        firstPartPara16.textContent= 'Below is the game. And under it, is the code written to make it.';
    }
    
    let infoOpen2= document.getElementById('infoOpen2');
    infoOpen2.addEventListener('click', sec3open);
    
    function sec3close () {
        let firstPartPara1= document.getElementById('para1sec3');
        let firstPartPara2= document.getElementById('para2sec3');
        let firstPartPara3= document.getElementById('para3sec3');
        let firstPartPara4= document.getElementById('para4sec3');
        let firstPartPara5= document.getElementById('para5sec3');
        let firstPartPara6= document.getElementById('para6sec3');
        let firstPartPara7= document.getElementById('para7sec3');
        let firstPartPara8= document.getElementById('para8sec3');
        let firstPartPara9= document.getElementById('para9sec3');
        let firstPartPara10= document.getElementById('para10sec3');
        let firstPartPara11= document.getElementById('para11sec3');
        let firstPartPara12= document.getElementById('para12sec3');
        let firstPartPara13= document.getElementById('para13sec3');
        let firstPartPara14= document.getElementById('para14sec3');
        let firstPartPara15= document.getElementById('para15sec3');
        let firstPartPara16= document.getElementById('para16sec3');
    
    
        firstPartPara1.textContent= '';
        firstPartPara2.textContent= '';
        firstPartPara3.textContent= '';
        firstPartPara4.textContent= '';
        firstPartPara5.textContent= '';
        firstPartPara6.textContent= '';
        firstPartPara7.textContent= '';
        firstPartPara8.textContent= '';
        firstPartPara9.textContent= '';
        firstPartPara10.textContent= '';
        firstPartPara11.textContent= '';
        firstPartPara12.textContent= '';
        firstPartPara13.textContent= '';
        firstPartPara14.textContent= '';
        firstPartPara15.textContent= '';
        firstPartPara16.textContent= '';
        firstPartPara17.textContent= '';
        firstPartPara18.textContent= '';
        firstPartPara19.textContent= '';
    }
    
    let infoClose2= document.getElementById('infoClose2');
    infoClose2.addEventListener('click', sec3close);
    
    
    //section 4
      
    function sec4open () {
        let firstPartPara1= document.getElementById('para1sec4');
        let firstPartPara2= document.getElementById('para2sec4');
        let firstPartPara3= document.getElementById('para3sec4');
        let firstPartPara4= document.getElementById('para4sec4');
        let firstPartPara5= document.getElementById('para5sec4');
        let firstPartPara6= document.getElementById('para6sec4');
        let firstPartPara7= document.getElementById('para7sec4');
        let firstPartPara8= document.getElementById('para8sec4');
        let firstPartPara9= document.getElementById('para9sec4');
        let firstPartPara10= document.getElementById('para10sec4');
    
    
        firstPartPara1.textContent= 'HTML code used below.';
    
        let img = document.createElement('img');
        img.src='a.png'
        img.setAttribute('id','img'); 
        img.height='400';
        img.width='400';
    
    
        firstPartPara2.appendChild(img);
    
     
        firstPartPara3.textContent= 'Below is the JavaScript code, where I created the variable of options the player and computer would choose from, then a way for the computer to randomly choose one.';
        firstPartPara4.textContent= 'I added the EvenListners to the buttons last, since I created the play function last.';
        firstPartPara5.textContent= ' I created the game function first after sorting how the computer would choose which option to play against the user.';
        
        let img1 = document.createElement('img');
        img1.src='b.png'
        img1.setAttribute('id','img1');
        img1.height='400';
        img1.width='400';
    
        firstPartPara6.appendChild(img1);
    
    
        firstPartPara7.textContent= 'I got stuck not realizing that the return function.. basically returned the results to the computers memory. ';
        
        let img2 = document.createElement('img');
        img2.src='c.png';
        img2.setAttribute('id','img2');
        img2.height='400';
        img2.width='400';
    
        firstPartPara8.appendChild(img2);
    
    
        firstPartPara9.textContent= 'So I created the play function that would take the result of the game function and conditionally cause it to announce the text of who one, as well as how many games were played.';
        let img3 = document.createElement('img');
        img3.src='d.png'
        img3.setAttribute('id','img3');
        img3.height='400';
        img3.width='400';
    
        firstPartPara10.appendChild(img3);
    }
    
    let infoOpen3= document.getElementById('infoOpen3');
    infoOpen3.addEventListener('click', sec4open);
    
    function sec4close () {
        let firstPartPara1= document.getElementById('para1sec4');
        let firstPartPara2= document.getElementById('para2sec4');
        let firstPartPara3= document.getElementById('para3sec4');
        let firstPartPara4= document.getElementById('para4sec4');
        let firstPartPara5= document.getElementById('para5sec4');
        let firstPartPara6= document.getElementById('para6sec4');
        let firstPartPara7= document.getElementById('para7sec4');
        let firstPartPara8= document.getElementById('para8sec4');
        let firstPartPara9= document.getElementById('para9sec4');
        let firstPartPara10= document.getElementById('para10sec4');
        let img =document.getElementById('img');
        let img1 =document.getElementById('img1');
        let img2 =document.getElementById('img2');
        let img3 =document.getElementById('img3');
    
    
        firstPartPara2.removeChild(img); 
    
        firstPartPara6.removeChild(img1);
    
        firstPartPara8.removeChild(img2);
    
        firstPartPara10.removeChild(img3);
    
    
        firstPartPara1.textContent= '';
        firstPartPara2.textContent= '';
        firstPartPara3.textContent= '';
        firstPartPara4.textContent= '';
        firstPartPara5.textContent= '';
        firstPartPara6.textContent= '';
        firstPartPara7.textContent= '';
        firstPartPara8.textContent= '';
        firstPartPara9.textContent= '';
    
    
    }
    
    let infoClose3= document.getElementById('infoClose3');
    infoClose3.addEventListener('click', sec4close);
    
    //section 5
    
    function sec5open () {
        let firstPartPara1= document.getElementById('para1sec5');
        let firstPartPara2= document.getElementById('para2sec5');
        let firstPartPara3= document.getElementById('para3sec5');
        let firstPartPara4= document.getElementById('para4sec5');
        let firstPartPara5= document.getElementById('para5sec5');
        let firstPartPara6= document.getElementById('para6sec5');
        let firstPartPara7= document.getElementById('para7sec5');
    
    
        firstPartPara1.textContent= 'What are the functions X, Y and Z, that a program or website must perform?';
        firstPartPara2.textContent= 'Answer: Provide a simple step by step process of what to do, to build any program.';
        firstPartPara3.textContent= 'What are the inputs required from someone using the program or website that cause the output of performance of X, Y and Z from the program or website?';
        firstPartPara4.textContent= 'Answer: The name of the program, an answers to questions- a)What are the functions X, Y and Z, that a program or website must perform? b)What are the inputs required from someone using the program or website that cause the output of performance of X, Y and Z from the program or website? c) What are the instructions,in psuedo code, that need to be written in HTML, CSS and Javascript, that will allow the program to accept those inputs and produce the output of performing the X, Y and Z functions? ';
        firstPartPara5.textContent= 'What are the instructions,in psuedo code, that need to be written in HTML, CSS and Javascript, that will allow the program to accept those inputs and produce the output of performing the X, Y and Z functions?';
        firstPartPara6.textContent= 'Answer: Initial display of first steps, then allowing user to enter answers, then the program needs to add those answers in a step by step form along side initial display.';
        firstPartPara7.textContent='Below is the program. And under it, is the code written to make it.'
    }
    
    let infoOpen4= document.getElementById('infoOpen4');
    infoOpen4.addEventListener('click', sec5open);
    
    function sec5close () {
        let firstPartPara1= document.getElementById('para1sec5');
        let firstPartPara2= document.getElementById('para2sec5');
        let firstPartPara3= document.getElementById('para3sec5');
        let firstPartPara4= document.getElementById('para4sec5');
        let firstPartPara5= document.getElementById('para5sec5');
        let firstPartPara6= document.getElementById('para6sec5');
        let firstPartPara7= document.getElementById('para7sec5');
    
    
        firstPartPara1.textContent= '';
        firstPartPara2.textContent= '';
        firstPartPara3.textContent= '';
        firstPartPara4.textContent= '';
        firstPartPara5.textContent= '';
        firstPartPara6.textContent= '';
        firstPartPara7.textContent= '';
    }
    
    let infoClose4= document.getElementById('infoClose4');
    infoClose4.addEventListener('click', sec5close);
    
    //section6
    //rock paper scissors game script      
    
    
          
          
          let options= ['rock', 'paper', 'scissors']
    
          function computerPlay(){
              
              let randChoice= options[Math.floor(Math.random()*options.length)];
              return randChoice;
              
          }
    
    
    
          document.getElementById('rock').addEventListener('click',play);
          document.getElementById('scissors').addEventListener('click',play);
          document.getElementById('paper').addEventListener('click',play);
         
    
    
    
    function game(playerSelection, computerSelection) {
    
    
        if (playerSelection==='rock' && computerSelection==='rock'){
            return 'You and the computer both chose rock, its a draw!';
        }
        else if (playerSelection==='rock' && computerSelection==='scissors'){
            return 'You win, the computer chose scissors!';
        }
        else if (playerSelection==='rock' && computerSelection==='paper'){
            return 'You lose, the computer chose paper!';
        }
    
    
        else if (playerSelection==='scissors' && computerSelection==='rock'){
            return 'You lose, the computer chose rock!';
        }
        else if (playerSelection==='scissors' && computerSelection==='scissors'){
            return 'You and the computer both chose scissors, its a draw!';
        }
        else if (playerSelection==='scissors' && computerSelection==='paper'){
            return 'You win, the computer chose paper!';
        }
    
    
    
        else if (playerSelection==='paper' && computerSelection==='rock'){
            return 'You win, the computer chose rock!';
        }
        else if (playerSelection==='paper' && computerSelection==='scissors'){
            return 'You lose, the computer chose scissors!';
        }
        else if (playerSelection==='paper' && computerSelection==='paper'){
            return 'You and the computer both chose paper, its a draw!';
        }
        
    }
    
    let gamesPlayed=0;
    
    function play (){
    
        gamesPlayed++
    
        let playerSelection = this.id;
        let computerSelection = computerPlay();
        announce = document.getElementById('announcement');
        games = document.getElementById('gamesPlayed');
    
    
         result = game(playerSelection,computerSelection)
    
         if (result=== 'You win, the computer chose scissors!'||result==='You win, the computer chose rock!'||result=== 'You win, the computer chose paper!')
         {announce.textContent=result;}
          else if(result==='You lose, the computer chose scissors!'||result==='You lose, the computer chose paper!'||result==='You lose, the computer chose rock!')
         {announce.textContent= result;}
          else if(result=== 'You and the computer both chose paper, its a draw! Try again.'|| result==='You and the computer both chose scissors, its a draw! Try again.'||result=== 'You and the computer both chose rock, its a draw!Try again.')
         {announce.textContent= result;}; 
    
         games.textContent= `Games played: ${gamesPlayed}`;
    
    
    }
    
    //workflow program
    
    
    
    function newStep (){
    
        let newStep= document.createElement('LI');
        newStep.setAttribute('id','newAnswer');
        newStep.setAttribute('class','newIdeas');
    
        let thirdAns = document.getElementById('thirdAnswer').value;
    
        let nodeBiggerParen=document.getElementById('list');
    
        newStep.textContent= thirdAns;     
    
        nodeBiggerParen.appendChild(newStep);
    
    
    }
    
    
    let newAns=document.getElementById('newStep');
    
    newAns.addEventListener('click', newStep)
    
    function deleteStep (){
    
    
    
        let nodeBiggerParen=document.getElementById('list');
        
    
        nodeBiggerParen.removeChild(nodeBiggerParen.lastElementChild);
    
    
    
    }
    
    
    let delStep=document.getElementById('deleteLastStep');
    
    delStep.addEventListener('click', deleteStep)
    
    
    
    
    
    
    function integrate () {
    
     
        let publishedAnswer= document.getElementById('answerPublisher');
        let publishedAnswer0= document.getElementById('answerPublisher0');
        let publishedAnswer1= document.getElementById('answerPublisher1');
    
        
        let firstAnswer = document.getElementById('firstAnswer').value;
        let secondAnswer = document.getElementById('secondAnswer').value;
        let newAns= document.getElementById('list');
    
       
       
        publishedAnswer.textContent=` ${firstAnswer}`;
        publishedAnswer0.textContent=` ${secondAnswer}`;
    
        publishedAnswer1.appendChild(newAns)
      
        
      
    }
    
    
    let inte= document.getElementById('integrate');
    inte.addEventListener('click', integrate);
    