const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🔐 Passcode Page
  correctPasscode: "0303", // Change this to any 4-digit code (the passcode for access)
  passcodeTitle: "Enter Passcode here", // Title displayed on the passcode entry page
  successMessage: "Yayy!! :)", // Message shown upon successful passcode entry
  redirectMessage: "Redirecting...", // Message displayed while redirecting after success
  incorrectPasscodeMessage: "Incorrect passcode, hint: Our Anniversary", // Message shown for incorrect passcode
  cancelButtonText: "Cancel", // Text for the cancel button

  // 🔍 Question Page
  searchPlaceholder: "Search Google or type a URL", // Placeholder text in the search input
  trendingTitle: "Trending searches", // Title for the trending searches section
  trendingSearches: [
    "Why is Veronica angry at me?", // Example trending search query
    "Why can't girls go to the clinic?", // Another example query
    `How to ragebait girlfriend`, // A personalized trending search
  ],
  proTip: 'Pro tip: try searching "How long have we been together?"', // Helpful tip for users

  // ⏳ Timer Page
  anniversaryDate: "2024-03-03", // 📅 Set your anniversary date here (used for the timer)
  timerTitle: "We've been together for:", // Title displayed on the timer page
  timerMessage: "... and still counting", // Message shown alongside the timer
  timeUnits: {
    days: "Days", // Label for days in the timer
    hours: "Hours", // Label for hours in the timer
    minutes: "Minutes", // Label for minutes in the timer
    seconds: "Seconds", // Label for seconds in the timer
  },

  // 📸 Recap Page
  recapTitle: "Let's recap our time together", // Title for the recap page
  clickMeText: "Click me!", // Text prompting users to interact

  recapSections: [
    { label: "Moments", path: "/recap/message", icon: "Message" }, // Section for messages
    { label: "Pictures", path: "/recap/pictures", icon: "Image" }, // Section for pictures
    { label: "Music", path: "/recap/music", icon: "Music" }, // Section for music
  ],

  // 🎵 Music Page
  musicTitle: "Songs that remind me of you", // Title for the music page
  musicGallery: [
    {
      title: "Love", // Title of the song
      artist: "wave to earth", // Artist of the song
      left: "5%", // Positioning on the page
      top: "5%", // Positioning on the page
    },
    {
      title: "Paragraphs",
      artist: "Luke Chiang",
      left: "40%",
      top: "15%",
    },
    {
      title: "Ditto",
      artist: "NewJeans",
      left: "15%",
      top: "40%",
    },
    {
      title: "Last Night on Earth",
      artist: "Green Day",
      left: "30%",
      top: "75%",
    },
    {
      title: "American Boy",
      artist: "Estelle, Kanye West",
      left: "5%",
      top: "65%",
    },
    {
      title: "Sparks",
      artist: "Coldplay",
      left: "25%",
      top: "90%",
    },
    {
      title: "Doughnut",
      artist: "Twice",
      left: "35%",
      top: "50%",
    },
    {
      title: "Palette",
      artist: "IU, G-Dragon",
      left: "10%",
      top: "25%",
    },
  ],

    // 📝 Message Recap Page
    messageTitle: "Our Messages", // Title for the messages recap page
    messageGallery: [
      { title: "March 3, 2024", description: "Minutes before she said YES at w2e concert ❤️" }, // Message entry
      { title: "March 7, 2024", description: "First date ever after she said YES 🎉" },
      { title: "July 29, 2024", description: "Gangsta shitz at TCSC Gala" },
    ],
  
    // 📸 Picture Recap Page
    pictureTitle: "Our Pictures", // Title for the pictures recap page
    pictureGallery: [
      { title: "March 7, 2024", description: "First Photobooth picture at Sunway Pyramid" }, // Picture entry
      { title: "May 8, 2024", description: "Second Photobooth picture at URMU Date 💕" },
      { title: "July 29, 2024", description: "Third Photobooth picture at TCSC Gala" },
    ],
  

  // 💌 Love Letter Page
  loveLetterMessage: "I love you so much Veronica", // Message displayed on the love letter page

  // 🎇 Closing Page
  closingMessage: "Thank you for everything. I hope Papa and Mama accept us lol.", // Closing message displayed

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths (Only change if you are a developer or modifying routes)
  redirectPath: "/question", // Path to redirect after passcode entry
  timerRedirectPath: "/timer", // Path to redirect to the timer page
  questionRedirectPath: "/question", // Path to redirect to the question page
  recapRedirectPath: "/recap", // Path to redirect to the recap page
  recapPreviousPage: "/timer", // Path to the previous page in the recap
  recapNextPage: "/letter", // Path to the next page in the recap
  letterNextPage: "/closing", // Path to the next page after the letter
  letterPreviousPage: "/letter", // Path to the previous page before the letter
  previousPageText: "Previous page", // Text for the previous page button
  nextPageText: "Next page", // Text for the next page button

  // 🔍 Search Queries (Only change if modifying search functionality)
  correctSearchQueries: [
    "How long have we been together?", // Example of a correct search query
    "how long have we been together", // Another example of a correct search query
  ],
};

export default config;
