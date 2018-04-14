
$(document).ready(function() {


    //////////// Variables ////////////

    //Questions Objects
    var questions = [
        {
            question:'In his own words, who “started the whole responsive web design thing?"',
            choices:['Elon Musk', 'Celine Dion', 'Ethan Marcotte', 'Bill Gates'],
            answer: 'Ethan Marcotte'
        },

        {
            question: 'Who is the writer of one of the most popular CSS blogs on the web - “CSS-Tricks.',
            choices: ['Chris Coyier', 'Larry David', 'Jessica Alba', 'Owen Wilson'],
            answer: 'Chris Coyier'
        },

        {
            question: 'Who is the UX expert who’s motto is “on a good day, I make the web more awesome.  On a bad day, I make it suck less."',
            choices: ['Peter Jackson', 'Zooey Deschanel', 'Paul Newman', 'Karen McGrane'],
            answer: 'Karen McGrane'
        },

        {
            question: 'Best known for his book, Hardboiled Web Design, who combines the idea of progressive enhancement with responsive web design.',
            choices: ['Oprah Winfrey', 'Jason Biggs', 'Andy Clarke', 'Chuck Lorre'],
            answer: 'Andy Clarke'
        },

        {
            question: 'Name the founder of dribble.com - which is a show-and-tell website that allows designers to upload micro-shots of their work in progress.',
            choices: ['Dan Cederholm', 'Jack Nicholson', 'Jay Leno', 'Jean-Claude Van Damme'],
            answer: 'Dan Cederholm'
        },

        {
            question: 'Who is the owner of the design studio You Know Who, and co-host of the Happy Monday podcast.',
            choices: ['Sarah Parmenter', 'Edward Norton', 'Scarlett Johansson', 'Matt Damon'],
            answer: 'Sarah Parmeter'
        },

        {
            question: 'Famous for his CSS Zen Garden project, who helped spearhead the move from table-based web design layout to CSS-based layout.',
            choices: ['Natalya Rudakova', 'Dave Shea', 'Mark Wahlberg', 'Tom Hardy'],
            answer: 'Dave Shea'
        },

        {
            question: 'Name the author of the must-have book, Designing with Web Standards.',
            choices: ['Halle Berry', 'Ben Affleck', 'Mila Kunis', 'Jeffrey Zeldman'],
            answer: 'Jeffrey Zeldman'
        },

        {
            question: 'Who is known in the web design world for his web design blog, Smashing Magazine.',
            choices: ['Natalie Portman', 'Vitaly Friedman', 'Drake', 'Dwayne Johnson'],
            answer: 'Vitaly Friedman'
        },

        {
            question: 'Name the author of several books including titles for SitePoint, Apress and Five Simple Steps to cover PHP web development, CSS3 Layout Modules and Adobe Dreamweaver.',
            choices: ['Ann Hathaway', 'Ashton Kutcher', 'Rachel Andrew', 'Adele'],
            answer: 'Rachel Andrew'
        },

        {
            question: 'Who organizes the influential annual “New Adventures in Web Design” even in Nottingham UK.',
            choices: ['Simon Collison', 'Julia Roberts', 'Leonardo DiCaprio', 'Justin Timberlake'],
            answer: 'Simon Collison'
        },

        {
            question: 'Name the web designer most famous for co-founding the agency Duoh! alongside Geert Leyseele.',
            choices: ['Jennifer Lawrence', 'Veerle Pieters', 'Jennifer Aniston', 'Tom Hanks'],
            answer: 'Veerle Pieters'
        },

        {
            question: 'Responsible for the Authentic Jobs website, who is known in his book collaborations with Andy Budd and Simon Collison.',
            choices: ['Johnny Depp', 'Angelina Jolie', 'Cameron Moll', 'George Clooney'],
            answer: 'Cameron Moll'
        },
    ]


    //Number Values/Inputs
    var timeClock; 
    var arrayNumber = 0
    var questionNumber = 0;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var currentQuestion = 1;


    /////////// Functions ////////////


    //Gamestart Function
    function gameStart() {

        //Set Question Number
        questionNumber();
        //Set Question
        $('#question').text(questions[arrayNumber].question);
        //Set Choices 
        $('#choice-a').text(questions[arrayNumber].choices[0]);
        $('#choice-b').text(questions[arrayNumber].choices[1]);
        $('#choice-c').text(questions[arrayNumber].choices[2]);
        $('#choice-d').text(questions[arrayNumber].choices[3]);
    
        //Displaying the Timer
        timeClock = 5;
        setInterval(countdownTimer, 1000);
        $('#countdown-timer').text(timeClock);
    };


    //Timer Functions

    function countdownTimer() {
        timeClock--;
        $("#countdown-timer").text(timeClock);

        //Add 0 in front of single digit
        if (timeClock < 10){
            timeClock = "0" + timeClock;
        };
        $("#countdown-timer").text(timeClock);

        if (timeClock == "0" + 0) {
            incorrectAnswers++;
            arrayNumber++;
            stopInterval();
            gameStart();     
        }
    };

    //Clear Timer
    function stopInterval() {
        clearInterval(countdownTimer);
    };

    //Question Number Function
    function questionNumber() {
        $('#current-question').text(currentQuestion++);
        if (currentQuestion < 10) {
            currentQuestion = "0" + currentQuestion
        };

    }


    //Next Question Function
    function nextQuestion() {
        questionNumber++;
        if (questionNumber == questions.length){
            //Create Pop Up to Display Results
        }
        else {
            arrayNumber++;
            stopInterval();
            gameStart();    
        }

    };

    //Correct Answer
    function correctAnswer() {
        correctAnswers++;
        $('#correct').text(correctAnswers);

        if (correctAnswers < 10) {
            correctAnswers = "0" + correctAnswers;
        }
    }

    //Incorrect Answer
    function incorrectAnswer() {
        incorrectAnswers++;
        $('#incorrect').text(incorrectAnswers);
        
        if (incorrectAnswers < 10) {
            incorrectAnswers = "0" + incorrectAnswers;
        }
    }



    ///////// Event Listeners  //////////
    

    //Player starts the game
    $("#countdown").on("click", gameStart);


   //Click event listens for user answer
   $('.multiple-choice').on("click", function () {
        stopInterval();
        
        if ($(this).text() == questions[arrayNumber].answer){
            correctAnswers++;
            correctAnswer();
        }
        else {
            incorrectAnswers++;
            incorrectAnswer();
        }  

        nextQuestion();
    });


});