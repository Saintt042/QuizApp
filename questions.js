//Creating an array and passing the number, questions, options and answers

let questions = [
    {
        numb: 1,
        question: "What does HTML stand for?",
        answer:  "Hyper Text Markup Language",
        options: [
            "Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language"
    ]
    },

    {
        numb: 2,
        question: "What does CSS stand for?",
        answer:  "Cascading Style Sheet",
        options: [
            "Common Style Sheet",
            "Computer Style Sheet",
            "Cascading Style Sheet",
            "Colorful Style Sheet"
    ]
    },

    {
        numb: 3,
        question: "What does PHP stand for?",
        answer:  "Hyper-text Preprocessor",
        options: [
            "Hyper-text Preprocessor",
            "Hyper-text Markup Language",
            "Hyper-text Multiple Language",
            "Hyper-tool Multi Language"
    ]
    },
    
    {
        numb: 4,
        question: "What does SQL stand for?",
        answer:  "Structured Query Language",
        options: [
            "Stylish Question Language", 
            "Stylesheet Query Language",
            "Statement Question Language",
            "Structured Query Language"
    ]
    },

    {
        numb: 5,
        question: "What does XML stand for?",
        answer:  "eXtensible Markup Language",
        options: [
            "eXtensible Markup Language",
            "eXecutable Multiple language",
            "eXtra Multi-Program Language",
            "eXamine Multiple Language"
    ]
    },


    {
        numb: 6,
        question: "What are JavaScript types?",
        answer:  "Number, String, Boolean, Function, Object, Null, Undefined",
        options: [
            "Number, String, Boolean, Function, Object, Null, Undefined",
            "Number, String, Boolean, Function, Object, Null, Tailwind",
            "Number, String, Nemesis, Bongo, Object, Null, Undefined",
            "Alphabet, Stone, Boner, Keys, Object, Nut, Hope"
    ]
    },

    {
        numb: 7,
        question: "What boolean operators does JavaScript support?",
        answer:  "&&, || and !",
        options: [
            "&&, || and !!",
            "Strings and Numbers",
            "$ * () {} []",
            "&&, || and !"
    ]
    },
    
    {
        numb: 8,
        question: "What looping structures are there in JavaScript?",
        answer:  "for, while, do-while loops, but no foreach.",
        options: [
            "Hexadecimals, Untold, Structures, Boleans",
            "Strings and Numbers",
            "for, while, do-while loops, but no foreach.",
            "foryou, awhile, dloops, butts forme."
    ]
    },

    {
        numb: 9,
        question: "What is THIS keyword?",
        answer:  "It refers to the current object",
        options: [
            "Tether History In Science",
            "It refers to the current object",
            "Top History in Science",
            "It refers to the past boleans"
    ]
    },

    {
        numb: 10,
        question: "What does isNaN function do?",
        answer:  "Return true if the argument is not a number",
        options: [
            "It likes big things",
            "It is an ErrorMessage",
            "It does not do anything",
            "Return true if the argument is not a number"
    ]
    },

    {
        numb: 11,
        question: "What is negative infinity?",
        answer:  "A number in JavaScript, derived by dividing negative number by zero.",
        options: [
            "A number in JavaScript, derived by adding negative number by zero.",
            "A number in JavaScript, derived by multiplying negative number by zero.",
            "A number in JavaScript, derived by dividing negative number by zero.",
            "A number in JavaScript, derived by subtracting negative number by zero."
    ]
    },

    
    {
        numb: 12,
        question: "How to set a HTML document's background color?",
        answer:  "document.bgcolor property is set to any appropriate color.",
        options: [
            "document.bfcolor property can be set to relative.",
            "document.bgcolor property is set to any appropriate color.",
            "Using a brush and applying an oil paint",
            "Array equals colors of items/header"
    ]
    },

    
    {
        numb: 13,
        question: "Are Java and JavaScript the Same?",
        answer:  "No. java and javascript are two different languages",
        options: [
            "Yes, they are both same language",
            "No. java and javascript are two different languages",
            "I don't know please",
            "I will ask my mentor very soon please wait"
    ]
    },

    
    {
        numb: 14,
        question: "What is a prompt box?",
        answer:  "A prompt box allows the user to enter input by providing a text box.",
        options: [
            "A prompt box allows the user to enter input by providing a text box.",
            "A prompt box allows the user to enter into the metaverse.",
            "A prompt box allows the user to enter into sweet heavens.",
            "A prompt box allows the user to enter into pure bliss."
    ]
    },

    
    {
        numb: 15,
        question: "Name the numeric constants representing max,min values",
        answer:  "Number.MAX_VALUE, Number.MIN_VALUE",
        options: [
            "It is a universal font",
            "Bolean ++ string",
            "Has no defined value",
            "Number.MAX_VALUE, Number.MIN_VALUE"
    ]
    },

    
    {
        numb: 16,
        question: "What does javascript null mean?",
        answer:  "A Unique value representing no value or object",
        options: [
            "A universal donor in Bolean + string",
            "A constant value to be nullified in there",
            "A Unique value representing no value or object",
            "A value to be returned to others without value"
    ]
    },

    
    {
        numb: 17,
        question: "Does javascript have the concept level scope?",
        answer:  "No, it does not",
        options: [
            "Yes, it has very good scoping skills",
            "No, it does not",
            "Only in some situations",
            "Are you crazy? That does not exist in javaScript"
    ]
    },

    
    {
        numb: 18,
        question: "Where is ASP cache located on latest IIS ?",
        answer:  "On disk, as opposed to memory, as it used to be in older IIS",
        options: [
            "I think it doesnt make any sense",
            "Always located in the police station when on duty if not ..",
            "On disk, as opposed to memory, as it used to be in older IIS",
            "On the hard drive of every CPU"
    ]
    },

    
    {
        numb: 19,
        question: "Which company developed JavaScript?",
        answer:  "Netscape is the software company that developed JavaScript.",
        options: [
            "It has always been in existence",
            "Elon Musk and Bill Gates",
            "Netscape is the software company that developed JavaScript.",
            "Dangote Aliko Group of Companies"
    ]
    },

    
    {
        numb: 20,
        question: "Which symbol is used for comments in Javascript?",
        answer:  "// and /*  */ ",
        options: [
            "// and /*  */ ",
            "There is no such thing",
            "//// and /*/*/",
            "~/ ~/"
    ]
    },
    
    {
        numb: 21,
        question: "Does JavaScript support automatic type conversion?",
        answer:  "Yes, JavaScript does support automatic type conversion.",
        options: [
            "It will only break your heart as it does not",
            "I will ask Elon Musk when next we meet",
            "Yes, JavaScript does support automatic type conversion.",
            "Except on rare occassions"
    ]
    },

    
    {
        numb: 22,
        question: "How to read and write a file using JavaScript?",
        answer:  "Using javaScript extensions, Using a webpage/Active X objects",
        options: [
            "Using javaScript extensions, Using a webpage/Active X objects",
            "Using javaScript extensionse only",
            "Just read it out loud using a microphone",
            "Using a webpage/Active X objects only"
    ]
    },

    
    {
        numb: 23,
        question: "What are all the looping structures in JavaScript?",
        answer:  "Do-while loops, For, While",
        options: [
            "Jumping, skipping and forwarding",
            "Do-while loops, For, While",
            "Do-now loops, Foryou, WhileI",
            "Swingers, Bulleans, Spartan"
    ]
    },

    
    {
        numb: 24,
        question: "What would be the result of 3+2+”7″?",
        answer:  "57",
        options: [
            "12",
            "35",
            "57",
            "Would return 0"
    ]
    },

    
    {
        numb: 25,
        question: "What are all the types of Pop up boxes available in JavaScript?",
        answer:  "Alert, Confirm and Prompt",
        options: [
            "Alerters, Confirm and Prompting",
            "Alert, Confirming and Prompt",
            "Alert, Confirm and Prompters",
            "Alert, Confirm and Prompt"
    ]
    },

    
    {
        numb: 26,
        question: "What is the data type of variables in JavaScript?",
        answer:  "All variables in JavaScript are object data types.",
        options: [
            "Boleans and strings and nullified",
            "There are no variables with object data types",
            "All variables in JavaScript are object data types.",
            "Dancers, tailwind, CSS and CIA"
    ]
    },

    
    {
        numb: 27,
        question: "Is JavaScript case sensitive?",
        answer:  "Yes, it is",
        options: [
            "Let me ask my mentor next year",
            "Yes, it is",
            "I do not think so",
            "Sometimes it is like that."
    ]
    },


    {
        numb: 28,
        question: "How are JavaScript and ECMA Script related?",
        answer:  "ECMA Script is like rules and guidelines, while Javascript is a scripting language used for web development.",
        options: [
            "ECMA Script is for MLMNA, while Javascript is a scripting language used for web development.",
            "Give me 15 secs to ask my mentor please",
            "ECMA Script is like rules and guidelines, while Javascript is a scripting language used for web development.",
            "Lol, they are both the same thing."
    ]
    },

    
    {
        numb: 29,
        question: "Do all HTML tags have an end tag?",
        answer:  "No. There are some HTML tags that don't need a closing tag.",
        options: [
            "Yes, all HTML tags must be closed",
            "I think so",
            "No. There are some HTML tags that don't need a closing tag.",
            "Only when you are going on long futures."
    ]
    },

    
    {
        numb: 30,
        question: "How many types of heading does an HTML contain?",
        answer:  "Six types of headings",
        options: [
            "Six types of headings",
            "It can have as many headings as needed",
            "Can only have one heading",
            "It has 25 headings that can be fit into 0ne."
    ]
    },
    
    {
        numb: 31,
        question: "What is DOCTYPE?",
        answer:  "This is used to specify the version of HTML used in the given document.",
        options: [
            "It is what doctors use on surgery.",
            "Just go to W3schools and ask Jolah.",
            "This is used to specify the version of HTML used in the given document.",
            "It is a type of document used by doctors in advanced medicine"
    ]
    },

    
    {
        numb: 32,
        question: "Does a hyperlink only apply to text?",
        answer:  "No, you can use hyperlinks on text and images both.",
        options: [
            "It does not neccessarily apply to anything at all.",
            "No, you can use hyperlinks on text and images both.",
            "Yes, it applies to just texts.",
            "You can apply it on your body."
    ]
    },


];