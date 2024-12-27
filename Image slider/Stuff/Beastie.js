const text = "Hey there cutie, Every day I spend thinking about you feels like a dream come true. Your smile, your laugh, and your love are everything I'm craving. Life's already amazing, but with you by my side, it's going to be incredible. I'm obsessed with our online conversations - they feel so natural and real. I love how we can be our true selves with each other, no judgments, no fears. It's an amazing feeling. Every time we talk, I fall more and more in love with your kindness, your empathy, and your beautiful heart. But it's not just your inner beauty that I adore - you're stunningly gorgeous, inside and out! Your eyes sparkle like diamonds, your hair shines like silk, and your smile lights up the whole world. Every photo you send me makes my heart skip a beat. I feel like the luckiest person alive to have you in my life. I love the way you make me laugh, the way you always know how to make me feel better when I'm down. Your love is a balm to my soul, a safe haven where I can always find peace. You're my best friend, my partner in crime, and my soulmate all rolled into one. I know we're still getting to know each other, but I'm all in. I promise to make this work, no matter what. I'll do everything I can to bring us closer, to make our love story one for the ages. I'll be patient, kind, and understanding. I'll be your rock, your confidant, and your forever home. I'm counting down the days until we can finally meet in person. I want to look into your eyes, hold your hand, and know that this love is real. I want to feel your touch, your kisses, and your warm embrace. I want to wake up every morning with you by my side and fall asleep every night with your love in my heart. Until then, you're always on my mind and in my heart. I love you more and more with each passing day. You're the missing piece I never knew I needed, the missing beat in my heart. You're my everything, my forever love.";

const paragraph = text.split("");
let i = 0;

function dashOut(arr) {
  const textContainer = document.querySelector(".textCont");
  if (!textContainer) {
    console.error("Error: .textCont element not found in the DOM.");
    return;
  }

  if (i < arr.length) {
    textContainer.textContent += arr[i];
    i++;
    setTimeout(() => dashOut(arr), interval(arr[i - 1]));
  }
}

function interval(letter) {
  if ([";", ".", ","].includes(letter)) {
    return 1000; // Longer delay for punctuation
  } else {
    return 100; // Standard delay for other letters
  }
}

document.addEventListener("DOMContentLoaded", () => {
  i = 0;
  dashOut(paragraph);
});
