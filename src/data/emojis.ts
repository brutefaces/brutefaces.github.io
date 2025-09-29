export interface Emoji {
  emoji: string;
  name: string;
  category: string;
}

export const emojiData: Emoji[] = [
  // Bruh & Meme Faces
  { emoji: "😐", name: "Bruh Face", category: "Meme" },
  { emoji: "🗿", name: "Moai", category: "Meme" },
  { emoji: "💀", name: "Skull", category: "Meme" },
  { emoji: "🤡", name: "Clown", category: "Meme" },
  { emoji: "🤨", name: "Raised Eyebrow", category: "Meme" },
  { emoji: "😶", name: "No Mouth", category: "Meme" },
  { emoji: "🫥", name: "Dotted Line Face", category: "Meme" },
  { emoji: "😑", name: "Expressionless", category: "Meme" },
  
  // Happy Faces
  { emoji: "😀", name: "Grinning Face", category: "Happy" },
  { emoji: "😃", name: "Grinning Face with Big Eyes", category: "Happy" },
  { emoji: "😄", name: "Grinning Face with Smiling Eyes", category: "Happy" },
  { emoji: "😁", name: "Beaming Face", category: "Happy" },
  { emoji: "😆", name: "Grinning Squinting Face", category: "Happy" },
  { emoji: "😅", name: "Grinning Face with Sweat", category: "Happy" },
  { emoji: "🤣", name: "Rolling on Floor Laughing", category: "Happy" },
  { emoji: "😂", name: "Face with Tears of Joy", category: "Happy" },
  { emoji: "🙂", name: "Slightly Smiling Face", category: "Happy" },
  { emoji: "😊", name: "Smiling Face with Smiling Eyes", category: "Happy" },
  { emoji: "😇", name: "Smiling Face with Halo", category: "Happy" },
  { emoji: "🥰", name: "Smiling Face with Hearts", category: "Happy" },
  
  // Love & Heart Eyes
  { emoji: "😍", name: "Heart Eyes", category: "Love" },
  { emoji: "🤩", name: "Star-Struck", category: "Love" },
  { emoji: "😘", name: "Face Blowing Kiss", category: "Love" },
  { emoji: "😗", name: "Kissing Face", category: "Love" },
  { emoji: "😚", name: "Kissing Face with Closed Eyes", category: "Love" },
  { emoji: "😙", name: "Kissing Face with Smiling Eyes", category: "Love" },
  { emoji: "🥲", name: "Smiling Face with Tear", category: "Love" },
  
  // Playful & Silly
  { emoji: "😋", name: "Face Savoring Food", category: "Playful" },
  { emoji: "😛", name: "Face with Tongue", category: "Playful" },
  { emoji: "😜", name: "Winking Face with Tongue", category: "Playful" },
  { emoji: "🤪", name: "Zany Face", category: "Playful" },
  { emoji: "😝", name: "Squinting Face with Tongue", category: "Playful" },
  { emoji: "🤑", name: "Money-Mouth Face", category: "Playful" },
  { emoji: "🤗", name: "Smiling Face with Open Hands", category: "Playful" },
  
  // Cool & Confident
  { emoji: "😎", name: "Smiling Face with Sunglasses", category: "Cool" },
  { emoji: "🤓", name: "Nerd Face", category: "Cool" },
  { emoji: "🧐", name: "Face with Monocle", category: "Cool" },
  
  // Neutral & Skeptical
  { emoji: "😏", name: "Smirking Face", category: "Skeptical" },
  { emoji: "😒", name: "Unamused Face", category: "Skeptical" },
  { emoji: "🙄", name: "Face with Rolling Eyes", category: "Skeptical" },
  { emoji: "😬", name: "Grimacing Face", category: "Skeptical" },
  { emoji: "😮‍💨", name: "Face Exhaling", category: "Skeptical" },
  { emoji: "🤥", name: "Lying Face", category: "Skeptical" },
  
  // Sad & Concerned
  { emoji: "😔", name: "Pensive Face", category: "Sad" },
  { emoji: "😟", name: "Worried Face", category: "Sad" },
  { emoji: "☹️", name: "Frowning Face", category: "Sad" },
  { emoji: "🙁", name: "Slightly Frowning Face", category: "Sad" },
  { emoji: "😕", name: "Confused Face", category: "Sad" },
  { emoji: "😞", name: "Disappointed Face", category: "Sad" },
  { emoji: "😓", name: "Downcast Face with Sweat", category: "Sad" },
  { emoji: "😩", name: "Weary Face", category: "Sad" },
  { emoji: "😫", name: "Tired Face", category: "Sad" },
  { emoji: "🥱", name: "Yawning Face", category: "Sad" },
  { emoji: "😢", name: "Crying Face", category: "Sad" },
  { emoji: "😭", name: "Loudly Crying Face", category: "Sad" },
  
  // Angry & Frustrated
  { emoji: "😤", name: "Face with Steam", category: "Angry" },
  { emoji: "😠", name: "Angry Face", category: "Angry" },
  { emoji: "😡", name: "Enraged Face", category: "Angry" },
  { emoji: "🤬", name: "Face with Symbols", category: "Angry" },
  { emoji: "👿", name: "Angry Face with Horns", category: "Angry" },
  
  // Surprised & Shocked
  { emoji: "😳", name: "Flushed Face", category: "Surprised" },
  { emoji: "😱", name: "Face Screaming in Fear", category: "Surprised" },
  { emoji: "😨", name: "Fearful Face", category: "Surprised" },
  { emoji: "😰", name: "Anxious Face with Sweat", category: "Surprised" },
  { emoji: "😥", name: "Sad but Relieved Face", category: "Surprised" },
  { emoji: "😮", name: "Face with Open Mouth", category: "Surprised" },
  { emoji: "😯", name: "Hushed Face", category: "Surprised" },
  { emoji: "😲", name: "Astonished Face", category: "Surprised" },
  
  // Sick & Unwell
  { emoji: "🤢", name: "Nauseated Face", category: "Sick" },
  { emoji: "🤮", name: "Face Vomiting", category: "Sick" },
  { emoji: "🤧", name: "Sneezing Face", category: "Sick" },
  { emoji: "🥵", name: "Hot Face", category: "Sick" },
  { emoji: "🥶", name: "Cold Face", category: "Sick" },
  { emoji: "😵", name: "Face with Crossed-Out Eyes", category: "Sick" },
  { emoji: "🤯", name: "Exploding Head", category: "Sick" },
  
  // Costume & Fantasy
  { emoji: "🤠", name: "Cowboy Hat Face", category: "Fantasy" },
  { emoji: "🥳", name: "Partying Face", category: "Fantasy" },
  { emoji: "🥸", name: "Disguised Face", category: "Fantasy" },
  { emoji: "😈", name: "Smiling Face with Horns", category: "Fantasy" },
  { emoji: "👹", name: "Ogre", category: "Fantasy" },
  { emoji: "👺", name: "Goblin", category: "Fantasy" },
  { emoji: "👻", name: "Ghost", category: "Fantasy" },
  { emoji: "👽", name: "Alien", category: "Fantasy" },
  { emoji: "👾", name: "Alien Monster", category: "Fantasy" },
  { emoji: "🤖", name: "Robot", category: "Fantasy" },
];

export const categories = [
  "All",
  "Meme",
  "Happy",
  "Love",
  "Playful",
  "Cool",
  "Skeptical",
  "Sad",
  "Angry",
  "Surprised",
  "Sick",
  "Fantasy",
];
