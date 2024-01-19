//starting values
let energy = 60;
let favorability = 0;
let dollar = 100;

let flirting;

let datesFavor;
let inventory = [];

//text messages - each person has 26 messages
const Jayden = {
    name: "Jayden",
    image: "/icon-images/notebook.jpg",
    message: [
    "Oh yea.. Idk if I mentioned it but I'm vegan so.. I'm not sure about that place. Anywhere else you wanna try?", 
    "Hey, did you see my Fundamentals of Business book? I think I left it in your room.. 😥", 
    "Just saw your text. Sorry I lost time at the museum. What are you up to?", 
    "Ah, I see where the misconception came from. River and I actually were in the same business studies class, but we'd already been friends for awhile.",
    "just woke up. wWhere are you?",
    "Yea the museum was really interesting.  It was a good chance to learn more about the people who used to live here. I really enjoyed it.",
    "Haha sure I want to. When are you free? 🤭",
    "Actually pretty good. We were talking about international trade policies and that kind of thing. It was interesting, but also a bit boring.",
    "I'd love to, but I've got a lot of reading to catch up on. Maybe we could catch a movie together later? 😁",
    "No tell me. What were you going to say yesterday?", 
    "I know but I always get nervous before exams anyway. And this one is worth a big piece of my grade. I'm just feeling a little bit of pressure. 😔",
    "Oh...no, I didn't find it yet. I checked my room and everywhere. I remember having it with me yesterday, now nothing.",
    "Haha, that's okay. But actually, you might be right.",
    "Vegan chocolate is a thing. And honestly, it tastes pretty good.",
    "Uh, Kai is...nice. You know, we aren't really close or anything, but Kai is alright I guess?",
    "Um, I've got a lot going on. I'm kind of overwhelmed with everything. Between school and friends and everything else...but I'll be okay. It'll all work out.",
    "Well, as I'm sure you know, I'm not currently involved with anyone. But there is one person that I might be interested in.",
    "Can I be honest with you?",
    "Well, to be completely honest...it kind of made me a little upset.",
    "It's just hard not to feel that way. Maybe I'm just being insecure...but that's how I feel.",
    "Ideally I would love to work somewhere that helps to spread knowledge about sustainable practices, like organic farming and things like that. There are a lot of companies in that field, so I've got my fingers crossed.",
    "Umm, well, I'm really into organic vegetables right now. It's not an addiction or anything. I just buy organic whenever I can. It may be a little extreme, but I don't like pesticides.",
    "Okay, here's a random question - what's your favorite food? I mean, seriously, something you love to eat.",
    "You'd watch it with me? Just the two of us?",
    "Okay, I'll be Alex: 🙂😙✌️❤️👍😎",
    "Oh. Well, in that case...can I ask you one other question?",
],
    time: ["now", "4m ago", "5m ago", "7m ago", "4h ago", "now", "4m ago", "5m ago", "7m ago", "4h ago", "now", "4m ago", "5m ago", "7m ago", "4h ago", "now", "4m ago", "5m ago", "7m ago", "4h ago", "now", "4m ago", "5m ago", "7m ago", "4h ago", "3m ago"],

}


const Alex = {
    name: "Alex",
    image: "/icon-images/corgi.jpg",
    message: [
    "not so good!! 😭 my philo book is missing! maybe molly ate it?", 
    "lol ok, what's your favorite color? 🥲 or wait, how about this, what's your favorite animal!? 🥰", 
    "what am i saved as in your phone? i think it should be... Tall Alex 🕴", 
    "there's a podcast about dogs? umm that sounds.. 🤨 well send me the link first lol", 
    "ello~ 🥴 let me check my schedule i think i'll be free lol",
    "yeah i listened to it in my room. apparently it really is just dogs barking at each other.. but i mean, it's still really interesting. the dogs have different tones and pitches and you can kind of tell what they're feeling.",
    "yeah i did get a job recently! it's not much, i just take care of the dogs and clean up after them but it's actually kinda fun. 😄",
    "hmm, actually yeah i have been feeling kind of down lately. i'm just not sure if i'm making the right decisions or not you know? 😐",
    "oh man i totally forgot lol 🫠 yeah i'm free all day tomorrow, wanna hangout?",
    "hey i have a sophisticated palate ok!! 👿 plus what's better than french pastries? i love them!! way better than american pastries lol",
    "i know i know, but i'm just not feeling it right now...i'm sorry if it hurts your feelings i'm just not in the mood.",
    "thanks, i'm glad you think so. but i do feel like maybe i should be more mature sometimes...idk i mean i get it if people say i'm kind of ridiculous sometimes but at the same time i feel like i'd be unhappy and boring if i had to take life too seriously.",
    "i got it 😉 anyway, molly has been great lately. she's been keeping me company whenever i feel down and she especially loves to snuggle in bed. i don't know what i would do without her. 😭😭😭😭",
    "i always thought you loved me more than molly 😭😭😭",
    "just alex? that's it? damn that's so...unromantic. i was hoping i'd have a cute nickname or something. 😩",
    "excusez-moi! wait how tall are you? i'm like 5'10 i think that's pretty tall 😣",
    "hey now, that's not fair. i know i make some jokes once in a while but that doesn't make me a dummy. i may be a big dork but i'm a smart dork, ok? 🥺",
    "i mean you implied it....and you can't deny that you think i'm hot 🥳",
    "oh come on, you know you'd prefer cuddling with me over molly. no offense but i'm way softer and smell better than she does. 😚",
    "it's just who i am. it's hard for me to imagine what it must be like to have no food, and nowhere to call home. i just want to do whatever i can to make the world a little bit happier, you know? 😌",
    "uh yeah...she actually did. i thought i put it on a shelf out of her reach but she found a way to get to it somehow. she ompletely shred it up! i was pretty pissed when i found out. and worried, heh.",
    "haha well you know i'm on your side for real though right? 💕 you're always my #1. 💕",
    "oh man, that's tough...i love them both but if i had to choose one i'd probably go with jayden. i like chill laidback people. and friends who help me when i need them, will always have me as a friend.",
    "i'm just expressing my feelings, i've been holding it back for a while now but it's just too hard not to anymore. is that such a bad thing? 🧐",
    "well if you mean is there an easy way to become close to someone like kai, then i guess you could try to find something you have in common. for me with kai, we both love comics so i used that as a way to talk more and we became close.",
    "yeah maybe, but still. i mean i know jayden is a bit more serious and mature than me. but i feel like there's room in this world for both types of people. i mean if you can't laugh at the absurdity of life every once in a while, what's the point?",
],
    time: ["now", "5m ago", "1m ago", "2h ago", "3m ago", "now", "5m ago", "1m ago", "2h ago", "3m ago", "now", "5m ago", "1m ago", "2h ago", "3m ago", "now", "5m ago", "1m ago", "2h ago", "3m ago", "now", "5m ago", "1m ago", "2h ago", "3m ago", "4m ago"],

}

const River = {
    name: "River",
    image: "/icon-images/night.jpg",
    message: [
    "Just watching Youtube. You?", 
    "Yes, I've been stuck in the lab for hours. 😒", 
    "I baked some cookies last night and can't finish them all. Would you like some?", 
    "I'm still stuck in the lab 😔", 
    "I can't hang out my bike broke down. I'll text you again later. 😊",
    "Yes but my research has kept me in the lab a lot lately so I had to quit.",
    "Yeah I've been trying to get it fixed but the repair shop said it might take a few days.",
    "I can text you again in a few hours when I finish this up. 😊",
    "Oh, Alex.. Alex is always joking around and is really annoying. I don't know how Jayden is friends with him.",
    "Quinn is another annoying person who always tries to get me to do stuff I don't feel like doing. I don't want to hang out after class, I want to go home.",
    "Yes, I'd love to hang out tomorrow. Are you free around 6PM?",
    "I can't right now but could we hang out later?",
    "Actually, yes. My lab research experiment didn't work out because the equipment malfunctioned. It was really frustrating and I spent hours trying to fix it.",
    "Let me be clear, I enjoy talking to you. 😊",
    "Sorry, that wasn't my intention. I actually do enjoy talking to you and I'm glad you texted me today. 😊",
    "Hmm. Some of my favorite bands are The National, Mumford and Sons, Florence + the Machine, Of Monsters and Men, and Lumineers. What about you?",
    "I was watching an episode of a cooking show called 'Binging with Babish'. He makes all kinds of dishes from movies, shows and video games. That's where I actually got the idea to make the cookies.",
    "I added some lemon zest and ground cardamom which gives them a little more depth of flavor. I'm glad you liked them.",
    "He's actually pretty chill. He lets us do our own research projects so I've been working on mine for a few weeks now but it's been hard to make progress with the equipment issues I've been having.",
    "Because if I can find a way to break down plastics into smaller chemical compounds, it can be used as a way to create new medical products like biodegradable medical implants, tissue grafting materials, and medical packaging.",
    "Sorry, I tend to be a little bit robotic at times. I'm actually laughing out loud right now. 😅",
    "Haha yeah, it's not really a secret though. To be honest, we've known each other since kindergarten but we weren't in the same class together back then, so technically we did 'meet' in business studies.. I didn't think you would remember that.",
    "It would not only address the environmental issues associated with plastic but also advance medicine. That's really why I'm interested in both biomedicine and artificial enzymes.",
    "I'm glad to hear that. 😊 As you can probably tell by now, I'm not the most talkative person. Sometimes it takes me a while to warm up to people.",
    "Yeah, chemistry is a great major but I feel like it's a little too abstract and theoretical for me. I want to work on something that has more real-world applications and can make a difference in people's lives.",
    "Well, I think people would be surprised to find out how much I enjoy being alone. I actually prefer spending time alone most of the time. Well actually maybe you wouldn't be surprised haha",
],
    time: ["now", "10m ago", "45m ago", "1h ago", "2h ago", "now", "10m ago", "45m ago", "1h ago", "2h ago", "now", "10m ago", "45m ago", "1h ago", "2h ago", "now", "10m ago", "45m ago", "1h ago", "2h ago", "now", "10m ago", "45m ago", "1h ago", "2h ago", "2m ago"],

}

const Quinn = {
    name: "Quinn",
    image: "/icon-images/skateboard.jpg",
    message: [
    "sry not now i've got a pick-up game today! but you can message me after 🧡", 
    "i'm out with river rn, why? wassup? 😎", 
    "sorry, can't.. studying for my poli sci test! 🥱", 
    "😽? hehe", 
    "hey are you hanging out with alex later? my wontons hav gone missing. i'm planning a murder need an accomplice 😼",
    "it was really fun! we won and i scored the winning point which was nice.🤩🤩 are you doing anything later?",
    "i mean not like permanently 😳 just maybe have a little 'talk' with him about what happens to people who take my wontons 😈 i'm sure he'll understand...",
    "oh well it's like this. sometimes river can be kind of moody, right? well alex can be a bit.. how to put it.. 'intensely joyful'? and sometimes mixing water and cement is bad. i think thats all it is. 😬",
    "my parents pushed me a little. they're big in local politics and they have lots of connections. they were like 'there's a really good college nearby where you can study political science, you should go there!' and so now i'm here. 🥲",
    "oh uhh..  its just supposed to be like.. 'oh i see. ok' or like 'oh no!' but in a cute, cat-like way? idk its supposed to convey my mood. 😸",
    "point guard 🥷 its fun to run around the court. i have really good stamina and can outrun everyone. also i like to shoot the ball a lot cuz im so accurate hehe",
    "maybe i should right? but im not an artist or a coder or whatever and my parents would kill me if i dropped uni to do that. plus i feel like game developers have to be super smart and talented and stuff... 😞",
    "river? well um.. i don't know.. just sort of a moody person? i do wonder why we're all friends actually 🤔 but the thing is river always says like 'we should hang out more' but then never texts me back 😒",
    "well yeah i mean my life isnt like, i mean im super lucky i know i can't really complain but... im just not happy idk. everyone just seems to be going through the motions and im not even sure why they want to hang out with me. 😔",
    "uh... so like... the other day i was walking along the sidewalk and i stopped to just feel the grass with my feet for no reason? i didnt even think about it i just did it and then i was like 'oh thats a weird thing to do what if someone sees me and thinks im weird' but idk. 🤔",
    "yeah but you're the good kind of weird, and im the sad kind. plus what if i drag you down and you're sad and annoyed with me all the time? i wouldnt want to do that to you. ☹️",
    "hmm alright then. i guess i wouldnt mind that at all 🤠 can we study at my place though? cuz it can get pretty noisy at the library sometimes.",
    "oh... well that would explain it. but i still have no idea where kai is! its been a few days... 🤔",
    "so you do have a crush on someone and im just not getting the hint? or you dont have a crush on anyone and im also not getting the hint? or you have a crush on me? i am so confused. 😭",
    "i really don't know 😔 im just awkward and nervous talking to you for some reason 😔 you're so... you're just. idk what to say haha",
    "uh... well we never got to finish our playthrough of the witcher so maybe we should just do that? or we could start a new campaign. or do you have something different in mind?",
    "you want me to teach you??? you're going to fall a lot you know...  😳",
    "i know but i always worry. i think too much. and i guess i dont want to disappoint anyone? i just dont have any confidence in myself. 😭",
    "well im not really good at relationships... im scared i would be too much for someone else to handle. i'd always be asking if theyre mad or thinking im annoying or boring them or if they even still want to spend time with me...  😕",
    "you think? hmm thats good to know. but still, even if thats true it doesnt make my fears go away. i mean i have all these insecurities for a reason. 😕",
    "well i used to eat doritos with chopsticks. that was pretty weird. i also used to take the crust off of all my sandwiches. i dont even know why i did that... 😳 its so much easier to eat sandwiches with the crust on. i guess i got obsessed with not having any crumbs on me when i ate?? 😅",
],
    time: ["now", "15m ago", "40m ago", "2h ago", "5h ago", "now", "15m ago", "40m ago", "2h ago", "5h ago", "now", "15m ago", "40m ago", "2h ago", "5h ago", "now", "15m ago", "40m ago", "2h ago", "5h ago", "now", "15m ago", "40m ago", "2h ago", "5h ago", "2m ago"],

}

const Kai = {
    name: "Kai",
    image: "/icon-images/sunset.jpg",
    message: [
    "I don't think so.",
    "Is that a yes?",
    "Do you want to tonight?",
    "Okay.", 
    "Well maybe I can. Later.",
    "Just pretending not to know you",
    "I'm joking. I'm just not in the mood for people right now.",
    "I'm just very tired. It's not you.",
    "It's not like that. You're actually very fun to talk to. And you make me think.",
    "Yeah, sorry. I'm not a very talkative person.",
    "Uh Quinn said you're chill and fun to hang around with?",
    "Why? Do you want me to say more?",
    "I'm just really into this conversation. And you're fun to talk to.",
    "I mean she seems a little jealous. But I think it's because she likes me, not because she doesn't like you.",
    "I am now.",
    "Maybe I'm trying too hard to keep everyone happy.",
    "Then say it.",
    "Well you're spending your time talking to me. That says enough.",
    "Yeah and I've been thinking about it, know what I realized?",
    "Then why reply?",
    "You're confusing me.",
    "You're replying, but you don't seem to have anything to say.",
    "I didn't say that.",
    "I gave you my number because you asked for it.",
    "And that's what we're doing right now.",
    "Well, you.",
],
    time: ["now", "2h ago", "3m ago", "10h ago", "4h ago", "now", "2h ago", "3m ago", "10h ago", "4h ago", "now", "2h ago", "3m ago", "10h ago", "4h ago", "now", "2h ago", "3m ago", "10h ago", "4h ago", "now", "2h ago", "3m ago", "10h ago", "4h ago", "5m ago"],

}


//nav buttons 
const cafeButton = document.querySelector("#goToCafe");
const loungeButton = document.querySelector("#goToLounge");
const storeButton = document.querySelector("#goToStore");
const unionButton = document.querySelector("#goToUnion");
const dormButton = document.querySelector("#goToDorm");
const dateButton = document.querySelector("#goToDate");

//user info
const favorText = document.querySelector("#favorText");

//energy bar
const energyBar = document.querySelector(".energy-bar");
const energyFill = document.querySelector(".energy-fill");
const dollarText = document.querySelector("#dollarText");

//date's info
const romanceStats = document.querySelector("#romanceStats");
const textMessagesShow = document.querySelector(".text-from-app");
const dateName = document.querySelector("#dateName");
const datesFavorText = document.querySelector("#dateCurrentFavor")
const dateMood = document.querySelector("#dateMood");

//cooldown system
let greetCooldown = 1; //can only greet someone twice, more than that is weird
let jokeCooldown = 4; //four jokes is enough
let hugCooldown = 3; //three hugs is enough
let chatCooldown = 5;
let sleepCooldown = 2;//only allowed to nap once
let jobCooldown = 1;
let studyCooldown = 8;

//adding in text messages
const messageName = document.querySelector(".message-name");
const messageTime = document.querySelector(".message-time");
const messageText = document.querySelector(".message-text"); 
const profileIcon = document.querySelector(".profile-icon");

//show a random message from a random person
const characters = [Jayden, Alex, River, Quinn, Kai];
let randomChar = Math.floor(Math.random() * characters.length);
let randomIndex = Math.floor(Math.random() * 26)

//display a random job
const oddJobsList = [
    {
        name: "Wayne Tingstrom",
        job: "Mr. Wayne thanks you greatly for helping him bring in his groceries.",
        paid: 90,
    },

    {
        name: "(´｡• ◡ •｡`) ♡ lindseyy",
        job: "Lindsey desperately needed a replacement grooming assistant for the weekend. She thanks you for your services!",
        paid: 60,
    },

    {
        name: "E. Potestio",
        job: "Etta, the RA, thanks you for helping her clean the student lounge.", 
        paid: 20,
    },

    {
        name: "JaviNeedsCashy",
        job: "Javier gave you an extra tip for bringing his delivery directly to study hall.", 
        paid: 50,
    },

    {
        name: "Alysha Zamor",
        job: "'Thanks for helping me study!'",
        paid: 27,
    },

    {
        name: "Nadia Stelmach",
        job: "You weren't able to complete the delivery without dropping Nadia's eggs. The gig company fines you the price of the eggs.",
        paid: 10,
    },

    {
        name: "??",
        job: "After completing the job, the anonymous lister couldn't be reached for payment...?",
        paid: 0,
    },

    {
        name: "Ciara ꒰ 🥥 ꒱ؘ ࿐ ࿔*:･ﾟ Landrie",
        job: "Professor Landrie's dog, Coconut, thoroughly enjoyed the walk.",
        paid: 100,
    },

    {
        name: "Dr. Moira Mayner",
        job: "'You did an excellent job cleaning up the lab. Are you interested in an internship?'",
        paid: 75,
    },

    {
        name: "River Forte",
        job: "'For cleaning the lab. Thank you.'",
        paid: 30,
    },

]

//recieving money from various sources
const getMoney = [
    {
        name: "your parents",
        for: "for your studies",
        sent: 30,
    },

    {
        name: "Liam",
        for: "to pay you back for last week's lunch",
        sent: 20,
    },

    {
        name: "Harper",
        for: "to reimburse you for groceries",
        sent: 60,
    },

    {
        name: "Ava",
        for: "as a thank you for picking up litter in the Quad",
        sent: 5,
    },

    {
        name: "Harry",
        for: "for agreeing to split the check at his birthday dinner",
        sent: 40,
    },

    {
        name: "your parents",
        for: "to help cover travel expenses over break",
        sent: 100,
    },

    {
        name: "Harper",
        for: "to replace the lamp she broke",
        sent: 35,
    },

    {
        name: "Quincy",
        for: "for watering her plant",
        sent: 10,
    },
]

let randomJobIndex = Math.floor(Math.random() * 10);
let randomMoneyIndex = Math.floor(Math.random() * 8);

//grab new values every time a new location is entered
function generateNew() {
    randomChar = Math.floor(Math.random() * characters.length);
    randomIndex = Math.floor(Math.random() * 26)
}

//function to update text message margin height
function updateDivContent() {
    const divContent = document.querySelector('.text-from-app');
    const contentHeight = divContent.scrollHeight;
  
    //minimum and maximum margins
    const minHeight = -270;
    const maxHeight = -289;
  
    //calculate the new margin based on content height
    const newMarginTop = Math.min(Math.max(minHeight - contentHeight, maxHeight), minHeight);
  
    //update margin-top
    divContent.style.marginTop = newMarginTop + 'px';
  }

//display the text messages onscreen
function textMessage() {
    textMessagesShow.style.display = "block";
    generateNew();

    updateDivContent();

    messageText.innerText = characters[randomChar].message[randomIndex];
    messageTime.innerText = characters[randomChar].time[randomIndex];
    messageName.innerText = characters[randomChar].name;
    profileIcon.src = characters[randomChar].image;

    textMessagesShow.classList.add("slideUp");

    setTimeout(function() {
        textMessagesShow.classList.remove("slideUp");
    }, 500);
};


//for adding hearts animation when game is won
const positions = [];
const minGap = 15;

//function to generate a random position
function getRandomPosition() {
  const maxWidth = window.innerWidth - minGap;
  const newPosition = Math.floor(Math.random() * maxWidth);
  return newPosition;
}

//function to check if a new position is valid
function isPositionValid(newPos) {
  for (const pos of positions) {
    if (Math.abs(newPos - pos) < minGap) {
      return false;
    }
  }
  return true;
}

//add positive hearts animation when game is won
function generateHeartsPlus(){
    while (positions.length < window.innerWidth / 30) {
        const newPosition = getRandomPosition();
        if (isPositionValid(newPosition)) {
          positions.push(newPosition);
        }
    }
    
      
    positions.forEach(position => {
        const img = document.createElement('img')
        img.src = 'https://i.pinimg.com/originals/cc/e9/14/cce914d27a0cb3554df1f05ce652d040.png'
        img.width = Math.round(Math.random() * (60 - 30) + 30)
      
        img.style.opacity = +(Math.random() * (1 - 0.5) + 0.5).toFixed(2)
        img.style.position = 'absolute'
        img.style.left = `${position}px`
        img.classList.add('heart-img')
      
        document.querySelector('body').append(img)
      
        const time = Math.round(Math.random() * (2000 - 1000))
        setTimeout(() => {
          img.classList.add('up')
        }, time)
    })
}


//add negative hearts animation when date fails
function generateHeartsMinus(){
    while (positions.length < window.innerWidth / 80) {
        const newPosition = getRandomPosition();
        if (isPositionValid(newPosition)) {
          positions.push(newPosition);
        }
    }
    
      
    positions.forEach(position => {
        const img = document.createElement('img')
        img.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcreazilla-store.fra1.digitaloceanspaces.com%2Femojis%2F58195%2Ffrowning-face-emoji-clipart-md.png&f=1&nofb=1&ipt=e85938b69b05f254de630491475adb08f6dc89bd5647314290ab3dfc6b891294&ipo=images'
        img.width = Math.round(Math.random() * (60 - 30) + 30)
      
        img.style.opacity = +(Math.random() * (1 - 0.5) + 0.5).toFixed(2)
        img.style.position = 'absolute'
        img.style.left = `${position}px`
        img.classList.add('negheart-img')
      
        document.querySelector('body').append(img)
      
        const time = Math.round(Math.random() * 1500)
        setTimeout(() => {
        img.classList.add('down')
        }, time)
    })
}


//dates
const dates = [
    {
        name: "Jayden",
        level: 1, //level of difficulty compared to others
        favorability: 39,
        preferences: {
            "Grubhub Gift Card for $50": 3,
            "Pink Rose Bouquet": 8,
            "Box of Chocolate Truffles": -35,
            "College Basketball Game Tickets": 2,
            "Used Textbook": 14,
        },
        personality: "introvert", 
    },

    {
        name: "Alex",
        level: 2,
        favorability: 35,
        preferences: {
            "Grubhub Gift Card for $50": 3,
            "Pink Rose Bouquet": -5,
            "Box of Chocolate Truffles": 2,
            "College Basketball Game Tickets": 2,
            "Used Textbook": 18,
        },
        personality: "friendly",
    },

    {
        name: "River",
        level: 5,
        favorability: 20,
        preferences: {
            "Grubhub Gift Card for $50": 25,
            "Pink Rose Bouquet": 2,
            "Box of Chocolate Truffles": 2,
            "College Basketball Game Tickets": -20,
            "Used Textbook": 5,
        },
        personality: "robotic",
    },

    {
        name: "Quinn",
        level: 8,
        favorability: 20,
        preferences: {
            "Grubhub Gift Card for $50": 8,
            "Pink Rose Bouquet": 8,
            "Box of Chocolate Truffles": 10,
            "College Basketball Game Tickets": 30,
            "Used Textbook": -20,
        },
        personality: "energetic",
    },

    {
        name: "Kai",
        level: 10,
        favorability: 10,
        preferences: {
            "Grubhub Gift Card for $50": -5,
            "Pink Rose Bouquet": 2,
            "Box of Chocolate Truffles": 6,
            "College Basketball Game Tickets": 10,
            "Used Textbook": 5,
        },
        personality: "mysterious",
    }, 
]


//updating locations
const locations = [
    {
        name: "quad",
        "button text": 
        ["Go to Cafe", 
        "Go to Student Lounge",
        "Go to Campus Store",
        "Go to Student Union",
        "Go back to Dorm",
        "Head Downtown"],
        "button functions": [goCafe, goLounge, goStore, goUnion, goDorm, goFlirt],
        text: "Unity Square is such a great place to relax and enjoy the outdoors. It's a lot of student's favorite spot to study or hang out."
},

    {
        name: "cafe",
        "button text":
        ["Buy a Coffee ($7)",
        "Buy Tea ($4)",
        "Buy a Muffin ($3)",
        "Buy a Sandwich ($5)",
        "Buy a Cookie ($2)",
        "Return back to the Quad"],
        "button functions": [buyCoffee, buyTea, buyMuffin, buySandwich, buyCookie, goQuad],
        text: "Hey, welcome to The Study Grounds. Need a caffeine boost to get through your studies? There's all sorts of drinks to keep you going!",
 },

    { 
        name: "lounge",
        "button text":
        ["Study",
        "Chat with other Students",
        "Take Side Job",
        "Get Snack from Vending Machine ($1)",
        "Scroll through Socials",
        "Return back to the Quad"],
        "button functions": [study, chat, oddJobs, buySnack, usePhone, goQuad],
        text: "Need a quiet place to study? The Study Nook is the perfect spot. There's comfy chairs, good lighting, and plenty of outlets to keep your devices charged.",
},

    {
        name: "store",
        "button text":
        ["Buy a Slushie ($7)",
        "Buy Grubhub Gift Card ($75)",
        "Buy Rose Bouquet ($80)",
        "Buy Box of Milk Chocolates ($23)",
        "Buy slice of Pizza ($3)",
        "Walk back out to Quad"],
        "button functions": [buySlushie, buyGiftCard, buyRoses, buyChocolate, buyPizza, goQuad],
        text: "Welcome to the Campus Corner Market! There's a wide selection of items to choose from including drinks, snacks, gifts, and more.",
},

    {
        name: "union",
        "button text":
        ["Buy 2 College Basketball Game tickets ($290)",
        "Rent the Game Room for 1hr ($30)",
        "Buy a used Textbook ($220)",
        "Buy Lemonade ($3)",
        "Buy a Bagel ($4)",
        "Return back to the Quad"],
        "button functions": [buyCBTix, rentGameRoom, rentTextbook, buyLemonade, buyBagel, goQuad],
        text: "Welcome to the Everett Sancho Union Building, the heart of campus life. There's always something going on here, whether it's a club meeting, a gaming session, or just students hanging out with friends. This week the Student Union Building is hosting a bustling marketplace where students can buy, sell, and exchange all sorts of items. See if there's anything here you'd like!",
},

    {
        name: "dorm",
        "button text":
        ["Sleep",
        "Tidy Up",
        "Study",
        "Chat with Roommates",
        "Order Food for Delivery ($80)",
        "Head back out to the Quad"],
        "button functions": [sleep, tidyUp, study, chat, orderFood, goQuad],
        text: "Back to Olympus Commons, your home for the semester.",
},

    {
        name: "flirt",
        "button text":
        ["Ask Jayden out",
        "Ask Alex out",
        "Ask River out",
        "Ask Quinn out",
        "Ask Kai out",
        "Go back to Quad"],
        "button functions": [flirtJayden, flirtAlex, flirtRiver, flirtQuinn, flirtKai, goQuad],
        text: "Who do you want to invite out?",
},

    {
        name: "date",
        "button text": 
        ["Greet your date",
        "Give a Gift",
        "Tell a Joke",
        "Hug your date",
        "Ghost your date",
        "Head back to dorm"],
        "button functions": [greet, gift, joke, hug, endDate, goDorm],
        text: "What would you like to do?",
},

    {
        name: "date complete",
        "button text":
        ["Go to Cafe", 
        "Go to Student Lounge",
        "Go to Campus Store",
        "Go to Student Union",
        "Go back to Dorm",
        "Go down to the Quad"],
        "button functions": [goCafe, goLounge, goStore, goUnion, goDorm, goQuad],
        text: "The date went well but... Why does it seem like your mind is on someone else?",
},

    {
        name: "lose",
        "button text": 
        ["Replay?",
        " ",
        " ",
        " ",
        " ",
        " ",
        ],
        "button functions": [restart, restart, restart, restart, restart, restart],
        text: "You failed your date miserably. 💔",
},

    {
        name: "win",
        "button text": 
        ["Congratulations!",
        " ",
        " ",
        " ",
        " ",
        "Replay?",
        ],
        "button functions": [restart, restart, restart, restart, restart, restart],
        text: "Congrats on beating the game! 💕", 
},

];


//clicking the buttons
cafeButton.onclick = goCafe;
loungeButton.onclick = goLounge;
storeButton.onclick = goStore;
unionButton.onclick = goUnion;
dormButton.onclick = goDorm;
dateButton.onclick = goFlirt;

//pages
function update(location) {
    romanceStats.style.display = "none";
    textMessagesShow.style.display = "none";

    cafeButton.innerText = location["button text"][0];
    loungeButton.innerText = location["button text"][1];
    storeButton.innerText = location["button text"][2];
    unionButton.innerText = location["button text"][3];
    dormButton.innerText = location["button text"][4];
    dateButton.innerText = location["button text"][5];

    text.innerText = location.text;

    cafeButton.onclick = location["button functions"][0];
    loungeButton.onclick = location["button functions"][1];
    storeButton.onclick = location["button functions"][2];
    unionButton.onclick = location["button functions"][3];
    dormButton.onclick = location["button functions"][4];
    dateButton.onclick = location["button functions"][5];
};

//navigation 
function goQuad(){
    update(locations[0]);
};

// locations 
function goCafe() {
    update(locations[1]);
};

function goLounge() {
    update(locations[2]);
    textMessage();   
};

function goStore() {
    update(locations[3]);
    textMessage();
};

function goUnion() {
    update(locations[4]);
    textMessage();
};

function goDorm() {
    update(locations[5]);
    textMessage();   
};


//dynamically change energy fill
function changeEnergyFill(){
    //change color of fill if energy is increasing/decreasing
    if(energy >= 0 && energy <= 25 ){
        energyFill.style.backgroundColor = "#e54e50"; //red
        favorability += 0;
    }

    if(energy >= 26 && energy <= 40){
        energyFill.style.backgroundColor = "#f4b873"; //orange
        favorability += 0;
    }

    if(energy >= 41 && energy <= 59){
     energyFill.style.backgroundColor = "#f4f473"; //yellow
     favorability += 0;
    }

    if(energy >= 60 && energy <= 80){
        energyFill.style.backgroundColor = "#74f693"; //green
        favorability += 0;
    }

    if(energy >= 81){
        energyFill.style.backgroundColor = "#b3f473"; //bright green
        favorability += 0;
    }
}

//buying items 
function buyCoffee(){
    if (dollar >= 7 && energy <= 99) {dollar -= 7;
    const dollarText = document.querySelector("#dollarText");
    dollarText.innerText = dollar;
    text.innerText = "Thank you for your purchase! Enjoy and have a good day!";}

    else {
        text.innerText = "You don't have enough money to buy any more items. Maybe try looking for a job?";
    };

    if (energy <= 94) {energy += 5;
    const fillPercentage = energy + "%";
    energyFill.style.width = fillPercentage;}

    else {
        text.innerText = "That's enough caffeine for today! Your energy is full."
    }

    changeEnergyFill();
}

function buyTea(){
    if (dollar >= 4 && energy <= 99) {dollar -= 4;
    const dollarText = document.querySelector("#dollarText");
    dollarText.innerText = dollar;
    text.innerText = "Thank you for your purchase! Enjoy and have a good day!";}

    else {
        text.innerText = "You don't have enough money to buy any more items. Maybe try looking for a job?";
    };

    if (energy <= 95) {energy += 4;
    const fillPercentage = energy + "%";
    energyFill.style.width = fillPercentage;}

    else {
        text.innerText = "That's enough caffeine for today! Your energy is full."
    }

    changeEnergyFill();
}

function buyMuffin(){
    if (dollar >= 3 && energy <= 99) {dollar -= 3;
    const dollarText = document.querySelector("#dollarText");
    dollarText.innerText = dollar;
    text.innerText = "Thank you for your purchase! Enjoy and have a good day!";}

    else {
        text.innerText = "You don't have enough money to buy any more items. Maybe try looking for a job?";
    };

    if (energy <= 96) {energy += 3;
    const fillPercentage = energy + "%";
    energyFill.style.width = fillPercentage;}

    else {
        text.innerText = "Woah... you cleaned out the whole display. Respect! 🫡 \nThe cafe is out of stock!";
    }

    changeEnergyFill();
}

function buySandwich(){
    if (dollar >= 5 && energy <= 99) {dollar -= 5;
    const dollarText = document.querySelector("#dollarText");
    dollarText.innerText = dollar;
    text.innerText = "Thank you for your purchase! Enjoy and have a good day!";}

    else {
        text.innerText = "You don't have enough money to buy any more items. Maybe try looking for a job?";
    };

    if (energy <= 97) {energy += 2;
    const fillPercentage = energy + "%";
    energyFill.style.width = fillPercentage;}

    else {
        text.innerText = "Woah... you must really like sandwiches 🤨 \nThe cafe is out of stock!";
    }

    changeEnergyFill();
}

function buyCookie(){
    if (dollar >= 2 && energy <= 99) {dollar -= 2;
    const dollarText = document.querySelector("#dollarText");
    dollarText.innerText = dollar;
    text.innerText = "Thank you for your purchase! Enjoy and have a good day!";}

    else {
        text.innerText = "You don't have enough money to buy any more items. Maybe try looking for a job?";
    };

    if (energy <= 96) {energy += 3;
    const fillPercentage = energy + "%";
    energyFill.style.width = fillPercentage;}

    else {
        text.innerText = "Woah... you cleaned out the whole display. Respect! 🫡 \nThe cafe is out of stock!";
    }

    changeEnergyFill();
}

function buySnack(){
    if (dollar >= 1 && energy <= 99) {dollar -= 1;
    const dollarText = document.querySelector("#dollarText");
    dollarText.innerText = dollar;
    text.innerText = "'Thank you. Please remove your purchase.";}

    else {
        text.innerText = "You don't have enough money to buy any more items. Maybe try looking for a job?";
    };

    if (energy <= 98) {energy += 1;
    const fillPercentage = energy + "%";
    energyFill.style.width = fillPercentage;}

    else {
        text.innerText = "The vending machine is out of service!";
    }

    changeEnergyFill();
}


function buySlushie(){
    if (dollar >= 7) {dollar -= 7;
    const dollarText = document.querySelector("#dollarText");
    dollarText.innerText = dollar;
    text.innerText = "Thanks for coming, have a good rest of your night!";}

    else {
        text.innerText = "You don't have enough money to buy any more items. Maybe try looking for a job?";
    };
}


function buyGiftCard() {
    if (dollar >= 75) {dollar -= 75;
      dollarText.innerText = dollar;
  
      inventory.push({
        name: "Grubhub Gift Card for $50",
        shorthand: "a gift card",
        quantity: 1,
        available: true,
        image: "/icon-images/gift card.png",
        
      });
  
      const inventoryBox = document.getElementById("inventoryList");
      const inventoryList = inventory.map(item => item.shorthand).join(", ");
  
      const inventoryItems = inventory.map(item => {
        const itemElem = document.createElement("li");
        itemElem.innerHTML = `<img src="${item.image}">`;
        return itemElem;
      }); //arrow function to create li element with item's img 
  
      inventoryBox.innerHTML = "";
      inventoryItems.forEach(item => inventoryBox.appendChild(item));
  
      text.innerText = `Thank you for your purchase! \n\nYou now have: ${inventoryList}.`;
    } else {
      text.innerText =
        "You don't have enough money to buy any more items. Maybe try looking for a job?";
    }
}

  
function buyRoses(){
    if (dollar >= 80) {dollar -= 80;
    dollarText.innerText = dollar;

    inventory.push({
        name: "Pink Rose Bouquet",
        shorthand: "a bouquet of roses",
        quantity: 1,
        available: true,
        image: "/icon-images/rose bouquet.png"
      });
  
      const inventoryBox = document.getElementById("inventoryList");
      const inventoryList = inventory.map(item => item.shorthand).join(", ");
  
      const inventoryItems = inventory.map(item => {
        const itemElem = document.createElement("li");
        itemElem.innerHTML = `<img src="${item.image}">`;
        return itemElem;
      });
  
      inventoryBox.innerHTML = "";
      inventoryItems.forEach(item => inventoryBox.appendChild(item));
  
      text.innerText = `Thank you for your purchase! \n\nYou now have: ${inventoryList}.`;
    } else {
      text.innerText =
        "You don't have enough money to buy any more items. Maybe try looking for a job?";
    }
}

function buyChocolate(){
    if(dollar >= 23) {dollar -= 23;
    dollarText.innerText = dollar;

    inventory.push({ 
        name: "Box of Chocolate Truffles", 
        shorthand: "box of chocolates", 
        quantity: 1, 
        available: true,
        image: "/icon-images/chocolates.png" });
    
    const inventoryBox = document.getElementById("inventoryList");
      const inventoryList = inventory.map(item => item.shorthand).join(", ");
  
      const inventoryItems = inventory.map(item => {
        const itemElem = document.createElement("li");
        itemElem.innerHTML = `<img src="${item.image}">`;
        return itemElem;
      });
  
      inventoryBox.innerHTML = "";
      inventoryItems.forEach(item => inventoryBox.appendChild(item));
  
      text.innerText = `Thank you for your purchase! \n\nYou now have: ${inventoryList}.`;
    } else {
      text.innerText =
        "You don't have enough money to buy any more items. Maybe try looking for a job?";
    }
}


function buyPizza(){
    if(dollar >= 3 && energy <= 99) {dollar -= 3;
    const dollarText = document.querySelector("#dollarText");
    dollarText.innerText = dollar;
    text.innerText = "Thanks for coming, have a good rest of your night!";}

    else {
        text.innerText = "You don't have enough money to buy any more items. Maybe try looking for a job?";
    };

    if (energy <= 99) {energy += 4;
    const fillPercentage = energy + "%";
    energyFill.style.width = fillPercentage;}

    else {
        text.innerText = "Wow! All out of pizza!! 😩";
    }

    changeEnergyFill();
}

function buyCBTix(){
    if(dollar >= 290) {dollar -= 290;
    dollarText.innerText = dollar;
         
    inventory.push({ 
        name: "College Basketball tickets", 
        shorthand: "2 tickets to a basketball game", 
        quantity: 1, 
        available: true,
        image: "/icon-images/tickets.png"});
    
        const inventoryBox = document.getElementById("inventoryList");
        const inventoryList = inventory.map(item => item.shorthand).join(", ");
    
        const inventoryItems = inventory.map(item => {
          const itemElem = document.createElement("li");
          itemElem.innerHTML = `<img src="${item.image}">`;
          return itemElem;
        });
    
        inventoryBox.innerHTML = "";
        inventoryItems.forEach(item => inventoryBox.appendChild(item));
    
        text.innerText = `Thanks for supporting the team! \n\nYou now have: ${inventoryList}.`;
      } else {
        text.innerText = "You don't have enough money to buy any more items. Maybe try looking for a job?";}
}


function buyLemonade(){
    if(dollar >= 3 && favorability <= 99) {dollar -= 3;
    favorability += 4;
    const dollarText = document.querySelector("#dollarText");
    dollarText.innerText = dollar;

    const favorText = document.querySelector("#favorText");
    favorText.innerHTML = favorability;
    text.innerText = "Thank you for supporting the volleyball team!";}

    else {
        text.innerText = "You don't have enough money to buy any more items. Maybe try looking for a job?";
    };
}


function buyBagel(){
    if(dollar >= 4 && energy <= 99 && favorability <= 99) {dollar -= 4;
    favorability += 5;
    const dollarText = document.querySelector("#dollarText");
    dollarText.innerText = dollar;

    const favorText = document.querySelector("#favorText");
    favorText.innerHTML = favorability;
    text.innerText = "Thank you so much! All proceeds from sales today will be donated to the local animal shelter.";}

    else {
        text.innerText = "You don't have enough money to buy any more items. Maybe try looking for a job?";
    };

    if (energy <= 99) {energy += 2;
    const fillPercentage = energy + "%";
    energyFill.style.width = fillPercentage;}

    else {
        text.innerText = "Oh boy, that was the last bagel!";
    }

    changeEnergyFill();
}


function orderFood(){
    if(dollar >= 80 && energy <= 99) {dollar -= 80;
    const dollarText = document.querySelector("#dollarText");
    dollarText.innerText = dollar;
    text.innerText = "'thanks for the tip. the food is in front of the door.";}

    else {
        text.innerText = "You don't have enough money to pay for the delivery. Maybe your roommates wouldn't mind helping out...?";
    };

    if(energy <= 99 && dollar >= 80) {energy += 4;
    const fillPercentage = energy + "%";
    energyFill.style.width = fillPercentage;}

    changeEnergyFill();
}


//activities 
function study(){
    if(energy >= 20 && studyCooldown > 0) {energy -= 10;
    const fillPercentage = energy + "%";
    energyFill.style.width = fillPercentage;
    text.innerText = "Finals in a month... Gotta focus...";}

    else {
        text.innerText = "Looks like you're starting to get a headache.. Take a break!";
    }

    if(favorability <= 99 && studyCooldown > 0 && energy >= 0) {favorability += 2;
        const favorText = document.querySelector("#favorText");
        favorText.innerHTML = favorability;
    }

    changeEnergyFill();


    if(studyCooldown > 0){
        studyCooldown--;
    }

    if(studyCooldown === 0) {
        text.innerText = "Um.. You don't look so good. 😶 Get some rest!";
        favorability += 0;
        energy += 0;

        setTimeout(() => {studyCooldown = 8}, 180000);
    }
}


function chat(){
    if(energy >= 5 && chatCooldown > 0) {energy -= 5;
    const fillPercentage = energy + "%";
    energyFill.style.width = fillPercentage;
    text.innerText = "Feels nice to take a break to socialize!";}

    else {
        text.innerText = "Hmm, it seems you're too tired to do this right now. Try getting more sleep!";
    }


    if(favorability <= 99 && chatCooldown > 0) {favorability += 6;
    const favorText = document.querySelector("#favorText");
    favorText.innerHTML = favorability;}

    changeEnergyFill();

    if(chatCooldown > 0) {
        chatCooldown--;
    }

    if(chatCooldown === 0) {
        text.innerText = "Huh? Looks like there's no one else around to talk to.";
        favorability += 0;
        energy += 0;

        setTimeout(() => {chatCooldown = 5}, 120000) //2 minute cooldown  
    }
}


function sleep(){
    if(energy <= 30 && sleepCooldown > 0) {energy += 60;
    const fillPercentage = energy + "%";
    energyFill.style.width = fillPercentage;

    text.innerText = "Ahhhh... How refreshing!";
} else {
    text.innerText = "You're not tired enough to sleep right now!";}

    changeEnergyFill();

    if(sleepCooldown > 0) {
        sleepCooldown--;
    }

    if(sleepCooldown === 0) {
        text.innerText = "If you go to sleep now, you'll wake up in the middle of the night. Hang in there!";
        favorability += 0;
        energy += 0;

        setTimeout(() => {sleepCooldown = 2}, 120000) //2 minute cooldown  
    }
}


function tidyUp(){
    if(energy >= 4 && favorability <= 99) {
    energy -= 4;
    favorability += 2;
    const fillPercentage = energy + "%";
    energyFill.style.width = fillPercentage;

    const favorText = document.querySelector("#favorText");
    favorText.innerHTML = favorability;

    text.innerText = "Ah.. Much better!";}

    else {
        text.innerText = "Hmm, it seems you're too tired to do this right now. Try getting more sleep!";
    }

    changeEnergyFill();
}


function oddJobs(){
    if(energy >= 45 && dollar >= 0 && jobCooldown > 0) {
        dollar += Number(oddJobsList[randomJobIndex].paid);
        energy -= 40;
    const dollarText = document.querySelector("#dollarText");
    dollarText.innerText = dollar;

    const fillPercentage = energy + "%";
    energyFill.style.width = fillPercentage;

    text.innerText = oddJobsList[randomJobIndex].job; //random job listing
    text.innerText += "\n\n" + oddJobsList[randomJobIndex].name + " has sent you: $" + oddJobsList[randomJobIndex].paid;
} else {
    text.innerText = "Hmm, it seems you're too tired to do this right now. Try getting more sleep!";
}

    changeEnergyFill();

    if(jobCooldown > 0) {
        jobCooldown--;
    }

    if(jobCooldown === 0 && energy >= 45){
        text.innerText = "There are no available jobs listed at this time. Check back in a few hours!";
        setTimeout(() => {jobCooldown = 1}, 200000);
    }
}


function usePhone(){
    if(energy <= 97) {energy += 3;
    const fillPercentage = energy + "%";
    energyFill.style.width = fillPercentage;
    text.innerText = "Pelican trying to eat a capybara... Interesting...";}

    if(favorability <= 99 && energy <= 97) {favorability += 4;
    const favorText = document.querySelector("#favorText");
    favorText.innerHTML = favorability;}

    changeEnergyFill();
}

function rentGameRoom(){
    if(dollar >= 30 && energy >= 10) {dollar -= 30;
    const dollarText = document.querySelector("#dollarText");
    dollarText.innerText = dollar;

    energy -= 20;
    const fillPercentage = energy + "%";
    energyFill.style.width = fillPercentage;

    text.innerText = "00:58:59 left 🤓";}

    else {
        text.innerText = "You don't have enough money to buy any more items. Maybe try looking for a job?";
    };

    if(energy >= 10 && favorability <= 80) {energy -= 10;
    const fillPercentage = energy + "%";
    energyFill.style.width = fillPercentage;

    changeEnergyFill();

    favorability += 15;
    const favorText = document.querySelector("#favorText");
    favorText.innerHTML = favorability;}
}


function rentTextbook(){
    if (dollar >= 220) {dollar -= 220;
    dollarText.innerText = dollar;

    inventory.push({ 
        name: "Used Textbook", 
        shorthand: "a used textbook", 
        quantity: 1, 
        available: true,
        image: "icon-images/textbook.png" });
    
        const inventoryBox = document.getElementById("inventoryList");
        const inventoryList = inventory.map(item => item.shorthand).join(", ");
    
        const inventoryItems = inventory.map(item => {
          const itemElem = document.createElement("li");
          itemElem.innerHTML = `<img src="${item.image}">`;
          return itemElem;
        });
    
        inventoryBox.innerHTML = "";
        inventoryItems.forEach(item => inventoryBox.appendChild(item));
    
        text.innerText = `'thanks for taking this off me i could really use the extra money' \n\nYou now have: ${inventoryList}.`;
      } else {
        text.innerText =
          "You don't have enough money to buy any more items. Maybe try looking for a job?";
      }

    if(dollar >= 150 && favorability <= 99) {favorability += 8;
    const favorText = document.querySelector("#favorText");
    favorText.innerHTML = favorability;}
}



//asking the characters out
function flirtJayden(){
    flirting = 0;

    const datesHeartsText = document.querySelector("#dateCurrentFavor");
    datesHeartsText.innerHTML = dates[flirting].favorability;

    dateName.innerText = dates[flirting].name;
    let datesFavor = dates[flirting].favorability;

    //barrier for the player
    if(favorability <= 15){
        text.innerText = dates[0].name + ": 'Uh, I'm sorry but have we met?'\n\n";
        text.innerText += dates[0].name + " requires 15+ hearts to accept your invitation."
    }

    else{goFlirt();
        update(locations[7]); 
        romanceStats.style.display = "block";
    };
}


function flirtAlex(){
    flirting = 1;

    const datesHeartsText = document.querySelector("#dateCurrentFavor");
    datesHeartsText.innerHTML = dates[flirting].favorability;

    dateName.innerText = dates[flirting].name;
    let datesFavor = dates[flirting].favorability;
    
    //barrier for the player
    if(favorability <= 20){
        text.innerText = dates[1].name + ": 'so sorry i'm busy for the rest of today! maybe some other time!'\n\n";
        text.innerText += dates[1].name + " requires 20+ hearts to accept your invitation.";
    }

    else{goFlirt();
        update(locations[7]); 
        romanceStats.style.display = "block";
    };
}

function flirtRiver(){
    flirting = 2;

    const datesHeartsText = document.querySelector("#dateCurrentFavor");
    datesHeartsText.innerHTML = dates[flirting].favorability;

    dateName.innerText = dates[flirting].name;
    let datesFavor = dates[flirting].favorability;
    
    //barrier for the player
    if(favorability <= 30){
        text.innerText = dates[2].name + ": 'At the lab.'\n\n";
        text.innerText += dates[2].name + " requires 30+ hearts to accept your invitation."

    }

    else{goFlirt();
        update(locations[7]); 
        romanceStats.style.display = "block";
    };
}


function flirtQuinn(){
    flirting = 3;

    const datesHeartsText = document.querySelector("#dateCurrentFavor");
    datesHeartsText.innerHTML = dates[flirting].favorability;

    dateName.innerText = dates[flirting].name;
    let datesFavor = dates[flirting].favorability;
    
    //barrier for the player
    if(favorability <= 45){
        text.innerText = dates[3].name + ": 'can't sry, i've got a thing later'\n\n";
        text.innerText += dates[3].name + " requires 45+ hearts to accept your invitation."

    }

    else{goFlirt();
        update(locations[7]); 
        romanceStats.style.display = "block";
    };
}


function flirtKai(){
    flirting = 4;

    const datesHeartsText = document.querySelector("#dateCurrentFavor");
    datesHeartsText.innerHTML = dates[flirting].favorability;

    dateName.innerText = dates[flirting].name;
    let datesFavor = dates[flirting].favorability;
    
    //barrier for the player
    if(favorability <= 60){
        text.innerText = dates[4].name + ": 'No.'\n\n";
        text.innerText += dates[4].name + " requires 60+ hearts to accept your invitation."

    }

    else{goFlirt();
        update(locations[7]); 
        romanceStats.style.display = "block";
    }
}


//flirting mechanics
function goFlirt() {
    update(locations[6]);
    romanceStats.style.display = "none";
}


//lose the game
function lose(){
    update(locations[9]);
    generateHeartsMinus();
}

//win the game
function winGame(){
    update(locations[10]);
    generateHeartsPlus();
}

//complete a date to progress, reward is money
function dateComplete() {
update(locations[8]);

let dollarAmount = Math.floor(getMoney[randomMoneyIndex].sent * dates[flirting].level)

dollar += dollarAmount;
dollarText.innerText = dollar;
text.innerText += " \n\nOn your way back, you recieve $" + dollarAmount + " from " + getMoney[randomMoneyIndex].name + " " + getMoney[randomMoneyIndex].for + ". ";
};


//actions on a date
function greet(){
    if(greetCooldown > 0) {
        greetCooldown--; //decrement by 1

    text.innerText = "You smile and say hello to " + dates[flirting].name + ". They smile back brightly.";
    dateName.innerText = dates[flirting].name;
    dateMood.innerText = "Happy 😄";

    dates[flirting].favorability += 7;
    
    const datesHeartsText = document.querySelector("#dateCurrentFavor");
    datesHeartsText.innerHTML = dates[flirting].favorability;

     //checking the user's value
     if(favorability >= 2){favorability -= 2
        const favorText = document.querySelector("#favorText");
        favorText.innerHTML = favorability;}
    } 
    
    else {
        text.innerText = "Um, it's a little odd to greet someone more than once. Try a different action!"
        setTimeout(() => {greetCooldown = 1}, 120000) //2 minute cooldown  
    } 
        
    //check if date is complete or a flop
    //jayden 
    if(dates[0].favorability >= 45 && dates[flirting].name === "Jayden"){
        dateComplete();
    }

    //alex
    if(dates[1].favorability >= 45 && dates[flirting].name === "Alex"){
        dateComplete();
    }

    //river
    if(dates[2].favorability >= 60 && dates[flirting].name === "River"){
        dateComplete();
    }

    //quinn
    if(dates[3].favorability >= 75 && dates[flirting].name === "Quinn"){
        dateComplete();
    }

    //kai
    if(dates[4].favorability >= 100 && dates[flirting].name === "Kai"){
        winGame();
    }
}


//prompt user to pick an item from the inventory
function chooseItemFromInventory(inventory) {
    const itemNames = inventory.map(item => item.name);
    let selectedItem;

    //check if inventory is empty before prompting user
     if (itemNames === undefined || itemNames.length == 0){
        text.innerText = "Huh? Looks like your inventory is empty.";
        dateMood.innerText = "Confused ❓";
        return null;
    }

    do {
      const userInput = prompt(`Choose an item from the inventory:\n${itemNames.join("\n")}`);

      //check if user gives null output (clicks cancel or enters nothing)
      if (userInput === null || userInput.trim() === ""){
        alert(`You decided not to gift anything. Inventory: ${itemNames.join(", ")}`);
        return null;
    }

      selectedItem = inventory.find(item => item.name === userInput); //checks if userinput matches an item's name in the inventory
    } while (!selectedItem);

    return selectedItem;
}
//arrow function acts like a for loop but is an anonymous callback function, find method is iterating over each item in inventory 


function gift(){
    const selectedDate = dates[flirting];

    text.innerText = selectedDate.name + " giggles when they notice you holding something behind your back. ";
    dateName.innerText = selectedDate.name;
  
    const datesFavorText = document.querySelector("#dateCurrentFavor");
    datesFavorText.innerHTML = selectedDate.favorability;
  
    let receivedGift = false;
  
      
 //importing the gift selected from prompt
 const selectedItem = chooseItemFromInventory(inventory);

 if (selectedItem) {
   //removing the gift from the inventory if it's chosen
   const selectedItemIndex = inventory.findIndex(item => item.name === selectedItem.name);
   inventory.splice(selectedItemIndex, 1); //splice method removes

    //removing the icon's image from the dom after the gift is gifted
    const inventoryList = document.getElementById("inventoryList");
    const itemElem = inventoryList.querySelector(`li img[src="${selectedItem.image}"]`).parentElement;
    itemElem.innerHTML = `<img src="/icon-images/default.png">`; //changes the icon back to the default

   //give the gift but check if it's available in the inventory first
   if (selectedDate.preferences.hasOwnProperty(selectedItem.name) && selectedItem.available) 
   {
        receivedGift = true;
        const favorabilityChange = selectedDate.preferences[selectedItem.name];

        selectedDate.favorability += favorabilityChange;
        const datesFavorText = document.querySelector("#dateCurrentFavor");
        datesFavorText.innerHTML = selectedDate.favorability;

        //updating date's favorability 
        selectedDate.favorability += favorabilityChange;
        if (favorabilityChange < 0) {
            dateMood.innerText = "Disappointed 😥";
        }
    
        if (favorabilityChange < -10) {
            dateMood.innerText = "Hurt 😰";
        }

        if (favorabilityChange > 0) {
            dateMood.innerText = "Thankful 😇";
        }
    
        if (favorabilityChange > 5) {
            dateMood.innerText = "Thrilled 🥳";
        }

        //show character's reaction based on personality and type of gift
        text.innerText = getCharacterText(selectedDate, selectedItem.name, favorabilityChange);

        if (receivedGift) {
        datesFavorText.innerText = selectedDate.favorability;}
    }

    //if their hearts drop to zero, you lose
    let datesFavor = dates[flirting].favorability;
    if(datesFavor <= 0){
        lose();
    }

    //updates user's favorability
    if(favorability >= 2){favorability -= dates[flirting].level;
        const favorText = document.querySelector("#favorText");
        favorText.innerHTML = favorability;}
   }

   //if no gift is given, don't add or subtract favor
    if (selectedItem === undefined || selectedItem.length == 0){
        favorability += 0;
        selectedDate.favorability += 0;
    }

 //check if date is complete or a flop
    //jayden 
    if(dates[0].favorability >= 45 && dates[flirting].name === "Jayden"){
        dateComplete();
    }

    //alex
    if(dates[1].favorability >= 45 && dates[flirting].name === "Alex"){
        dateComplete();
    }

    //river
    if(dates[2].favorability >= 60 && dates[flirting].name === "River"){
        dateComplete();
    }

    //quinn
    if(dates[3].favorability >= 75 && dates[flirting].name === "Quinn"){
        dateComplete();
    }

    //kai
    if(dates[4].favorability >= 100 && dates[flirting].name === "Kai"){
        winGame();
    }

 // display updated inventory to the user
 const availableItems = inventory.filter(item => item.available);
 const inventoryList = availableItems.map(item => item.name).join(", ");


 //only display inventory if there's something in there
 if(inventory.length > 0){
    text.innerText += `\n\nIn your inventory you now have: ${inventoryList}`;
 }
}


//inject personality into gift functiom
function getCharacterText(character, itemName, favorabilityChange) {
    //if favor change is negative
    if (favorabilityChange < 0) {
      switch (character.personality) { //using switch to replace messy if else/else if statements
        case "friendly": //case represents a specific condition code is checking for
          return `Alex is mildly allergic to ${itemName} but graciously accepts the flowers anyway.`;
        case "introvert":
          return "Jayden is hurt you seemed to have forgotten about his milk allergy. He declines your gift.";
        case "robotic":
          return `River is annoyed by your gift. They dont know what you expect them to do with ${itemName}.`;
        case "energetic":
          return "Quinn can't hide how offended they are. They don't think you've been paying any attention to their worries lately.";
        case "mysterious":
          return "Kai's expression doesn't change much. It's hard to tell how they're feeling.";
        default:
          return "This is the default text."; //break is not needed here because a value is returned each time
      }
    } else {
      switch (character.personality) {
        case "friendly":
          return "Alex smiles brightly as you hand them the gift. It's really brightened their mood.";
        case "introvert":
          return "Jayden is pleasantly surprised by your gift. They grin when your hand brushes by.";
        case "robotic":
          return "River kindly accepts your gift. Their face is hard to read but you notice a slight smile.";
        case "energetic":
          return `Quinn jumps up and down in excitement! They love the ${itemName} and happily show it off to others.`;
        case "mysterious":
          return `Kai stares down at ${itemName}. It's hard to tell if they like it or not.`;
        default:
          return "This is also the default text.";
      }
    }
}


function joke(){
    if(jokeCooldown > 0) {
    jokeCooldown--; //decrement by 1
    
    text.innerText = dates[flirting].name + " cracks a smile, but their reaction is hard to read.";
    dateMood.innerText = "Neutral 😐";

    dates[flirting].favorability += 3;
    const datesHeartsText = document.querySelector("#dateCurrentFavor");
    datesHeartsText.innerHTML = dates[flirting].favorability;

    //throw a message if user starts telling too many jokes
    if(jokeCooldown === 2){
        text.innerText = dates[flirting].name + "'s smile sarts to stiffen. They're getting more and confused.";
        dateMood.innerText = "Confused 🤨"; 
    }

    if(jokeCooldown === 1){
        text.innerText = dates[flirting].name + " is starting to wonder if you're alright...";
        dateMood.innerText = "Awkward 🫥"; 
    }

    if (jokeCooldown === 0) {
        text.innerText = "Um, you've made things a little awkward with your incessant jokes. Try doing something different!"
        dateMood.innerText = "Embarrassed 😶‍🌫️"; 
        setTimeout(() => {jokeCooldown = 4}, 120000) //2 minute cooldown
    }
    
    //checking the user's value
    if(favorability >= 2){favorability -= 2;
        favorability -= dates[flirting].level;
        const favorText = document.querySelector("#favorText");
        favorText.innerHTML = favorability;}
    } 

    //check if date is complete or a flop
    //jayden 
    if(dates[0].favorability >= 45 && dates[flirting].name === "Jayden"){
        dateComplete();
    }

    //alex
    if(dates[1].favorability >= 45 && dates[flirting].name === "Alex"){
        dateComplete();
    }

    //river
    if(dates[2].favorability >= 60 && dates[flirting].name === "River"){
        dateComplete();
    }

    //quinn
    if(dates[3].favorability >= 75 && dates[flirting].name === "Quinn"){
        dateComplete();
    }

    //kai
    if(dates[4].favorability >= 100 && dates[flirting].name === "Kai"){
        winGame();
    }
}


function hug(){
    if(hugCooldown > 0) {
        hugCooldown--; //decrement by 1

    text.innerText = "You go straight in for a hug and " + dates[flirting].name + " returns it kindly.";
    dateName.innerText = dates[flirting].name;
    dateMood.innerText = "Warm 🤗";

    dates[flirting].favorability += 7;
    const datesHeartsText = document.querySelector("#dateCurrentFavor");
    datesHeartsText.innerHTML = dates[flirting].favorability;

     //checking the user's value
     if(favorability >= 2){favorability -= 2
        const favorText = document.querySelector("#favorText");
        favorText.innerHTML = favorability;}
    } 

    if(hugCooldown === 1){
        text.innerText = dates[flirting].name + ": 'Huh? Another hug..? Um, alright... Okay...'";
        dateMood.innerText = "Awkward 😶"; 
    }

    if (hugCooldown === 0) {
        text.innerText = "Your date is uncomfortable with your constant touching... You should stop now!"
        dateMood.innerHTML = "<small>Uncomfortable</small> 😫";
        setTimeout(() => {hugCooldown = 3}, 60000) //1 minute cooldown
    }

    //check if date is complete or a flop
    //jayden 
    if(dates[0].favorability >= 45 && dates[flirting].name === "Jayden"){
        dateComplete();
    }

    //alex
    if(dates[1].favorability >= 45 && dates[flirting].name === "Alex"){
        dateComplete();
    }

    //river
    if(dates[2].favorability >= 60 && dates[flirting].name === "River"){
        dateComplete();
    }

    //quinn
    if(dates[3].favorability >= 75 && dates[flirting].name === "Quinn"){
        dateComplete();
    }

    //kai
    if(dates[4].favorability >= 100 && dates[flirting].name === "Kai"){
        winGame();
    }  
}

function endDate(){
    text.innerText = dates[flirting].name + ": 'Huh? You have to water your plants..? Right now..?'";
    dateMood.innerText = "Provoked 🤬";

    dates[flirting].favorability -= 50;

    const datesHeartsText = document.querySelector("#dateCurrentFavor");
    datesHeartsText.innerHTML = dates[flirting].favorability;

    if(dates[flirting].favorability <= 0){
        lose();
    }

    //only adjust favorability if dates favor isn't 0
    if(dates[flirting].favorability >= 39){
    favorability -= dates[flirting].level; //subtract favorability from user
    let favorText = document.querySelector("#favorText");
    favorText.innerHTML = favorability;}
};

// restart the game
function restart() {
    energy = 60;
    favorability = 0;
    dollar = 100;

    inventory = [];

    const fillPercentage = energy + "%";
    energyFill.style.width = fillPercentage;
    favorText.innerText = favorability;
    dollarText.innerText = dollar;

    goQuad();
}