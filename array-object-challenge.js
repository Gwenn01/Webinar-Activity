const quiz = [
    {
        "subject": "Sport",
        "quiz": [
            {
                "question": "Which one is correct team name in NBA?",
                "options": [
                    "New York Bulls",
                    "Los Angeles Kings",
                    "Golden State Warriros",
                    "Huston Rocket"
                ],
                "answer": "Huston Rocket"
            }
        ]
    },
    {
        "subject": "Math",
        "quiz": [
            {
                "question": "5 + 7 = ?",
                "options": [
                    "10",
                    "11",
                    "12",
                    "13"
                ],
                "answer": "12"
            },
            {
                "question": "12 - 8 = ?",
                "options": [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                "answer": "4"
            }
        ]
    }

]

/* 
    ARNEL GWEN NUQUI
    BS INFOTECH 2C
    Challenge: 30 mins
    Display all the subject, question and corresponding answers with the following format
    e.g.
    Subject:  Sport
    Question 1:  Which one is correct team name in NBA?
    Answer:  Huston Rocket
    -----------------------
    Subject:  Math
    Question 1:  5 + 7 = ?
    Answer:  12
    Question 2:  12 - 8 = ?
    Answer:  4
*/

// Write your answer here
console.log(`Subject: ${quiz[0].subject}`);
console.log(`Question 1: ${quiz[0].quiz[0].question}`);
console.log(`Answer: ${quiz[0].quiz[0].answer}`);
console.log(`-----------------------`);
console.log(`Subject: ${quiz[1].subject}`);
console.log(`Question 1: ${quiz[1].quiz[0].question}`);
console.log(`Answer: ${quiz[1].quiz[0].answer}`);
console.log(`Question 2: ${quiz[1].quiz[1].question}`);
console.log(`Answer: ${quiz[1].quiz[1].answer}`);
