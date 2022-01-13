import { useEffect, useState , useMemo } from "react";
import"./app.css";
import Trivia from "./component/trivia";
import Timer from "./component/Timer";
import Start from "./component/Start";

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const data =[
    {
      id:1,
      question: "What is the largest cricket stadium in the world?",
      answers:[
        {
        text:"Eden Gardens",
        correct: false,
      },
      {
        text:"Melbourne Cricket Club",
        correct: false,
      },
      {
        text:"Lords",
        correct: false,
      },
      {
        text:"Narendra Modi Stadium",
        correct: true,
      },
    ],
    },

    {
      id:1,
      question: "Whene did the website 'Facebook' lanch?",
      answers:[
        {
        text:"2004",
        correct: true,
      },
      {
        text:"2005",
        correct: false,
      },
      {
        text:"2003",
        correct: false,
      },
      {
        text:"2006",
        correct: false,
      },
    ],
    },
  
    {
      id:1,
      question: "Who played the character of harry potter in movie?",
      answers:[
        {
        text:"manash sahu",
        correct: false,
      },
      {
        text:"Prabin Acharya",
        correct: false,
      },
      {
        text:"Ram Chandra Pattnayak",
        correct: false,
      },
      {
        text:"Daniel Clief",
        correct: true,
      },
    ],
    },



    {
      id:1,
      question: "React.js is written in which of the following language?",
      answers:[
        {
        text:" C ",
        correct: false,
      },
      {
        text:" C++ ",
        correct: false,
      },
      {
        text:" JavaScript ",
        correct: true,
      },
      {
        text:"Java",
        correct: false,
      },
    ],
    },


    {
      id:1,
      question: "Which of the following command is used to install create-react-app?",
      answers:[
        {
        text:"npm install create-react-app",
        correct: false,
      },
      {
        text:"npm install -f create0react-app",
        correct: false,
      },
      {
        text:"install -g create-react-app",
        correct: false,
      },
      {
        text:"npm install -g create-react-app",
        correct: true,
      },
    ],
    },

    {
      id:1,
      question: "which is used to pass to a component from outside in react?",
      answers:[
        {
        text:"props",
        correct: true,
      },
      {
        text:"render with arguments",
        correct: false,
      },
      {
        text:"setState",
        correct: false,
      },
      {
        text:"propType",
        correct: false,
      },
    ],
    },

    {
      id:1,
      question: "CSS property is used to control the elements font-size is?",
      answers:[
        {
        text:"text-style",
        correct: false,
      },
      {
        text:"text-size",
        correct: false,
      },
      {
        text:"font-size",
        correct: true,
      },
      {
        text:"None of the above",
        correct: false,
      },
    ],
    },

    {
      id:1,
      question: "The CSS property used to make the text bold is?",
      answers:[
        {
        text:"font-weight:bold",
        correct: true,
      },
      {
        text:"weight:bold",
        correct: false,
      },
      {
        text:"font:bold",
        correct: false,
      },
      {
        text:"style:bold",
        correct: false,
      },
    ],
    },

    {
      id:1,
      question: "Are the negative value allowed in padding property?",
      answers:[
        {
        text:"Yes",
        correct: false,
      },
      {
        text:"No",
        correct: true,
      },
      {
        text:"Can't say",
        correct: false,
      },
      {
        text:"May be",
        correct: false,
      },
    ],
    },

    {
      id:1,
      question: "CSS property used to specify the transparency of an element is?",
      answers:[
        {
        text:"opacity",
        correct: true,
      },
      {
        text:"filter",
        correct: false,
      },
      {
        text:"visibility",
        correct: false,
      },
      {
        text:"overlay",
        correct: false,
      },
    ],
    },

    {
      id:1,
      question: "Which is not a type of combination?",
      answers:[
        {
        text:">",
        correct: false,
      },
      {
        text:"~",
        correct: false,
      },
      {
        text:"+",
        correct: false,
      },
      {
        text:"*",
        correct: true,
      },
    ],
    },

    {
      id:1,
      question: "Which element is responsible for making the text italic in html?",
      answers:[
        {
        text:"<i>",
        correct: true,
      },
      {
        text:"<italic>",
        correct: false,
      },
      {
        text:"<it>",
        correct: false,
      },
      {
        text:"<pre>",
        correct: false,
      },
    ],
    },

    {
      id:1,
      question: "<input> is -?",
      answers:[
        {
        text:"a format tag",
        correct: false,
      },
      {
        text:"an empty tag",
        correct: true,
      },
      {
        text:"All of the above",
        correct: false,
      },
      {
        text:"None of the above",
        correct: false,
      },
    ],
    },

    {
      id:1,
      question: "Which tag is used to add rows in the table?",
      answers:[
        {
        text:"<td> and </td>",
        correct: false,
      },
      {
        text:"<th> and </th>",
        correct: false,
      },
      {
        text:"<tr> and </tr>",
        correct: true,
      },
      {
        text:"None of the above",
        correct: false,
      },
    ],
    },


    {
      id:1,
      question: "Which tag is used to display the text with scrolling effect?",
      answers:[
        {
        text:"<marquee>",
        correct: true,
      },
      {
        text:"<scroll>",
        correct: false,
      },
      {
        text:"<div>",
        correct: false,
      },
      {
        text:"None of the Above",
        correct: true,
      },
    ],
    },
];


  const moneyPyramid = useMemo(() => 

    [
      {id:1, amount:"$  100"},
      {id:2, amount:"$  200"},
      {id:3, amount:"$  300"},
      {id:4, amount:"$  500"},
      {id:5, amount:"$  1000"},
      {id:6, amount:"$  2000"},
      {id:7, amount:"$  4000"},
      {id:8, amount:"$  8000"},
      {id:9, amount:"$  16000"},
      {id:10, amount:"$ 32000"},
      {id:11, amount:"$  64000"},
      {id:12, amount:"$  125000"},
      {id:13, amount:"$  250000"},
      {id:14, amount:"$  500000"},
      {id:15, amount:"$  1000000"},
     
    ].reverse(),

  [])

  useEffect (() => {
    questionNumber > 1 &&
    setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

  return (
    <div className="app">
    {username ? (
    <>
    <div className="main">
     {
      stop ? <h1 className="endText">You earned: {earned}</h1> : (
        <>
       <div className="top">
       <div className="timer">
       <Timer setStop={setStop} questionNumber={questionNumber} />
       </div> 
       </div>
       <div className="bottom">
         <Trivia 
           data={data}
           setStop={setStop}
           questionNumber={questionNumber}
           setQuestionNumber={setQuestionNumber}
         />
       </div>
          </>
       ) }
     </div>
     <div className="pyramid">
      <ul className="moneyList">
      {moneyPyramid.map((m) => (
        <li className={questionNumber === m.id ? "moneyListItem active": "moneyListItem"}>
          <span className="moneyListItemNumber">{m.id}</span>
          <span className="moneyListItemAmount">{m.amount}</span>
        </li>
      ))}
        
        
   
      </ul>


     </div>

    </>
    ) : <Start setUsername={setUsername}/>
    }
     
      
    </div>
  );
}

export default App;
