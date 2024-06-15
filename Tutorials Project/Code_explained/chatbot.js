//The Html for a chatbot will look similar to this:

/*

<!DOCTYPE html>
<!-- Coding By CodingNepal - www.codingnepalweb.com -->
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Chatbot in JavaScript | CodingNepal</title>
    <link rel="stylesheet" href="style.css">

The above refrences the style sheet so that were able to use it

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Google Fonts Link For Icons -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0" />
    <script src="script.js" defer></script>
  </head>
  <body>
    <button class="chatbot-toggler"> **switches between opening the chat and closing it
      <span class="material-symbols-rounded">mode_comment</span> **used to style icons
      <span class="material-symbols-outlined">close</span>
    </button>
    <div class="chatbot">
      <header>
        <h2>Chatbot</h2>
        <span class="close-btn material-symbols-outlined">close</span> **close button
      </header>
      <ul class="chatbox">
        <li class="chat incoming">
          <span class="material-symbols-outlined">smart_toy</span>
          <p>Hi there 👋<br>How can I help you today?</p> **for when the chat is opened
        </li>
      </ul>
      <div class="chat-input">
        <textarea placeholder="Enter a message..." spellcheck="false" required></textarea> **the text area for user input
        <span id="send-btn" class="material-symbols-rounded">send</span> **to send the message from user input for the chatbot to read
      </div>
    </div>
  </body>
</html>

*/

/*some good things to know about css and how it works we need to be familiar with how it talks to your js file and how that changes your web
pages appearence and this means to get comfortable with some of the basic styling tools

1. The diffrence between margins and padding 
    a. Margin is the space around the elements border, the order of a margin is top, right, bottom, and left, margin-direction respectfully
    b. Padding is the space between the elemnts border and the elements content, the order of padding is top, right, bottom, left
    c. To put this in more simple terms margin controls the space on the outside of the element,
       the padding controls the space on the inside of the element
    d. Also to consider how they interact with eachother, margins tend to push eachother away so the element becomes smaller, and if you put them
       with eachother they will be as far away as you set them
    e. Padding is not as clostrophoic as margins so they will make the contents as small as possible to get closer
    f. You will genrally use margins when you are trying to move elemnts away from eachother
    g. Padding is used to size the contents. 

2. position determines where in the document and element is and has the shorthand of left, right, top, bottom, and z-index.
   there are five values position can take;
    1.static, has no affect on the element, follows natural logic
    2.relative, has affect on the element, all indexes are able to be adjusted, allowing for the elemnt to be offset
    3.absolute, placed based on their parent, they are removed from the flow of the document, indexes determine the final position,
    the parent cant have the position:static
    4.fixed, like absolute, they are too removed from the natural flow of the document but they are positioned relative to the html,
    they arent affected by scrolling
    5.sticky, it's a combo of relative and fixed, it will stay on the screen until a certain point
   

3. z-index, it's called that because it orders all the elemnts on the z-axis, it controls the stacing order, if elemnts happen to 
overlap

4. Webkit is just a collection of animations

5. A little more on selectors,
  a. Universal selector*
  b. html tag <p> in html -> p in css
  c. Css class selector .
  d. ID Selector #

finally html serves as a bridge between css and javascript

//The CSS will look something like this:

/* 

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap'); **grabs styling info for fonts and other cutom requirements 
* {             **targets all of the styling code
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body {          **targets the background of the web page
  background: #E3F2FD;
}
.chatbot-toggler {  **targets the styling of the open and close chat
  position: fixed;
  bottom: 30px;
  right: 35px;
  outline: none;
  border: none;
  height: 50px;
  width: 50px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #724ae8;
  transition: all 0.2s ease;
}
body.show-chatbot .chatbot-toggler {   **the animation of the open and close chat
  transform: rotate(90deg);
}
.chatbot-toggler span {  
  color: #fff;
  position: absolute;
}

 <span> elements within elements with the class "chatbot-toggler" 
by making their text color white and positioning them absolutely within their closest positioned ancestor.

.chatbot-toggler span:last-child,
body.show-chatbot .chatbot-toggler span:first-child  {
  opacity: 0;
}

**control the visibility of specific span elements within elements with the class chatbot-toggler
 based on the presence of the show-chatbot class on the body element.

body.show-chatbot .chatbot-toggler span:last-child {
  opacity: 1;
}

** fully visible when the body element has the class "show-chatbot".

.chatbot {
  position: fixed;
  right: 35px;
  bottom: 90px;
  width: 420px;
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  transform: scale(0.5);
  transform-origin: bottom right;
  box-shadow: 0 0 128px 0 rgba(0,0,0,0.1),
              0 32px 64px -48px rgba(0,0,0,0.5);
  transition: all 0.1s ease;
}

body.show-chatbot .chatbot {
  opacity: 1;
  pointer-events: auto;
  transform: scale(1);
}

.chatbot header {
  padding: 16px 0;
  position: relative;
  text-align: center;
  color: #fff;
  background: #724ae8;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.chatbot header span {
  position: absolute;
  right: 15px;
  top: 50%;
  display: none;
  cursor: pointer;
  transform: translateY(-50%);
}

header h2 {
  font-size: 1.4rem;
}

.chatbot .chatbox {
  overflow-y: auto;
  height: 510px;
  padding: 30px 20px 100px;
}

.chatbot :where(.chatbox, textarea)::-webkit-scrollbar {
  width: 6px;
}

.chatbot :where(.chatbox, textarea)::-webkit-scrollbar-track {
  background: #fff;
  border-radius: 25px;
}

.chatbot :where(.chatbox, textarea)::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 25px;
}

.chatbox .chat {
  display: flex;
  list-style: none;
}

.chatbox .outgoing {
  margin: 20px 0;
  justify-content: flex-end;
}

.chatbox .incoming span {
  width: 32px;
  height: 32px;
  color: #fff;
  cursor: default;
  text-align: center;
  line-height: 32px;
  align-self: flex-end;
  background: #724ae8;
  border-radius: 4px;
  margin: 0 10px 7px 0;
}

.chatbox .chat p {
  white-space: pre-wrap;
  padding: 12px 16px;
  border-radius: 10px 10px 0 10px;
  max-width: 75%;
  color: #fff;
  font-size: 0.95rem;
  background: #724ae8;
}

.chatbox .incoming p {
  border-radius: 10px 10px 10px 0;
}

.chatbox .chat p.error {
  color: #721c24;
  background: #f8d7da;
}

.chatbox .incoming p {
  color: #000;
  background: #f2f2f2;
}

.chatbot .chat-input {
  display: flex;
  gap: 5px;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #fff;
  padding: 3px 20px;
  border-top: 1px solid #ddd;
}

.chat-input textarea {
  height: 55px;
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  max-height: 180px;
  padding: 15px 15px 15px 0;
  font-size: 0.95rem;
}

.chat-input span {
  align-self: flex-end;
  color: #724ae8;
  cursor: pointer;
  height: 55px;
  display: flex;
  align-items: center;
  visibility: hidden;
  font-size: 1.35rem;
}

.chat-input textarea:valid ~ span {
  visibility: visible;
}

@media (max-width: 490px) {
  .chatbot-toggler {
    right: 20px;
    bottom: 20px;
  }

  .chatbot {
    right: 0;
    bottom: 0;
    height: 100%;
    border-radius: 0;
    width: 100%;
  }

  .chatbot .chatbox {
    height: 90%;
    padding: 25px 15px 100px;
  }

  .chatbot .chat-input {
    padding: 5px 15px;
  }
   
  .chatbot header span {
    display: block;
  }
}

*/

/* 
Now to understand a bit how chat bots work, you have to understand that you get three types of chat bots,

1. Simple Chatbots which are also known as rule robots, like the name entails they are task specific, and those tasks are usually
having buttons for replies and predetermined messages depending on the button pushed by the user
2.Smart Chatbots simulate near human conversation, understand free form text and intent with language used
3.Hybrid Chatbots are a combination of the two, having some predetermined replies but still understands intent and 
context a good example for this would be a medical assisant

considering the following robot shares a lot of similarities with being a personal assistant it would be considered a smart chatbot as it's able 
to understand context and intent, though we have made implimenting the chat bot simpler with an api key which is an open source ai chat resource

with this in mind lets disect the code in blocks so we can see what everything is doing

*/

const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

//the above is calling objects from the html

let userMessage = null; // Variable to store user's message
const API_KEY = "PASTE-YOUR-API-KEY"; // Paste your API key here
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    // Create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; // return chat <li> element
}

/*First it generates a list element based on the parameters passed to it
the parameter message refers to the text message that will be displayed 
within the chat list item
className is to determine the styling of the chatlist item
Second it adds the classes"chat" and the classname to the function
depending on classname value is outgoing the content is an empty p
otherwise it has an icon and empty p
then finally contents of p is set to the message and passed to the 
function */

const generateResponse = (chatElement) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = chatElement.querySelector("p");

    // Define the properties and message for the API request
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: userMessage}],
        })
    }

/* after the api url it selects the parachraph element within chatElement
 it creates a request objects function with the method set to POST
 Generates a response using using openAI */

    // Send POST request to API, get response and set the reponse as paragraph text
    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        messageElement.textContent = data.choices[0].message.content.trim();
    }).catch(() => {
        messageElement.classList.add("error");
        messageElement.textContent = "Oops! Something went wrong. Please try again.";
    }).finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
}
/*uses async programming to generate a response from openAI, using async because we are
waiting on a server by using fetch, then catch to see if the promise is not being fullfilled
then a finally that even if the promise was rejected to scroll down with the chat */

const handleChat = () => {
    userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
    if(!userMessage) return;

    // Clear the input textarea and set its height to default
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    // Append the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);
    
    setTimeout(() => {
        // Display "Thinking..." message while waiting for the response
        const incomingChatLi = createChatLi("Thinking...", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    }, 600);
}

/* first it retrives the users message, and trims any white space
then it checks if it was an empty message, if so it returns early
clears the input field
scrolls the chatbox to the bottom
it sets a timout for 0,6 seconds to print thinking... 
in the style of an incomming message
scrolls to the bottom again
then generates response */

chatInput.addEventListener("input", () => {
    // Adjust the height of the input textarea based on its content
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});
/* This will adjust the height of the user textarea making sure
the entire text stays visible without having to manually scroll */

chatInput.addEventListener("keydown", (e) => {
    // If Enter key is pressed without Shift key and the window 
    // width is greater than 800px, handle the chat
    if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

/* just adds an event listener that when you press enter it will send the
message in the text area*/

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));

/* opens and closes chatbot*/