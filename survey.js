const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :)', (name) => {
  rl.question('What\'s an activity you like doing? ', (activity) => {
    rl.question(`What do you listen to while doing that? `, (music) => {
      rl.question(`Which meal of the day is your fav? Ya know, brunch, dinner..  `, (favMeal) => {
        rl.question(`What is your best skill? Don't be dirty  `, (skills) => {
          rl.question(`And, lastly, if you could have any superpower, what would it be?  `, (power) => {
            console.log(`Okay, so I'm going to call you ${name}, good so far? Cool. Now, you like doing ${activity}, while listening to ${music}. If you had to pick the best meal of the day you'd say it's ${favMeal}. I feel like we're really getting to know eachother. I guess to cap everything off that you told me your best skill would be ${skills} and your superpower would be ${power}? Did we just become best friends? `);
            rl.close();
          });
        });

      });

    });
  });
});