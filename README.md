# LionBot

## What is LionBot?

[Twitch](https://www.twitch.tv) is one of the fastest growing social media platforms on the web. Focused around video games, users of the site stream gameplay of their favorite games, all while being watched by potentially thousands of people. The key to Twitch is its interactivity, with each streamer having their own chat channel, where viewers can ask questions of the streamer.

Once a stream grows to a certain size, a streamer might be asked by different users in their chat the same question multiple times. Automating some of this interactivity becomes necessary.

That's where LionBot comes in. Through a React dashboard, a streamer can customize automated responses based on the most common questions they can receive. This allows the streamer to focus primarily on unique, more meaningful questions to answer, while the need to answer more mundane questions is alleviated.

## Initial Thoughts on Structure

LionBot, at its core, is made up of two distinct components: the bot itself, which lives in a given Twitch channel's chatroom, and the dashboard, which pairs a React front-end with an Express back-end to provide CRUD functionality.

We will be attempting to use a new NPM module called [Twitch-Bot](https://www.npmjs.com/package/twitch-bot), which uses EventEmitters to listen to commands in Twitch's IRC based chatrooms.

We will also be using React to make API calls to our own custom Express back-end server, managing authentication and commands.

In addition, we look forward to the challenge of writing our own tests for our Express backend.

#### See [Project Board](https://github.com/k1bs/lionbot/projects/1) for Phases of Completion

## Links and Resources

(The NPM module that we plan to use.)[https://www.npmjs.com/package/twitch-bot]
