# JawaBS

Just a wicked awesome backtesting system.

This platform is designed to be a simple solution for backtesting python trading algorithms via zipline-live with Interactive Brokers integration. While the project is constantly evolving, click [here](https://github.com/orgs/three-02/projects/1) for insight into the status of the project.

It is also worth noting that this is only a command line interface. While there are probably more complex solutions elsewhere, this is as close to plug-and-play as you can get to test your trading algorithms without the hastle of setting up more complex infrastructure.

## Contents

- [A Brief Introduction](#so-what-is-backtesting)
- [What makes Jawa different?](#the-basics)
- [Uses and Functions](#usage)
- [Setup](#setup)
- [Credits](#credits)


## So What is Backtesting?

Backtesting is the research process of applying a trading strategy idea to historical data in order to ascertain past performance. In particular, a backtester makes no guarantee about the future performance of the strategy. They are however an essential component of the strategy pipeline research process, allowing strategies to be filtered out before being placed into production.

## The Basics

Jawa is simple. Quantitative trading is very secretive and exclusive, since people are trying to make money after all. Jawa, however, is a good way for anyone to get their toes wet by trading through Interactive Brokers. It's local, it's clean, and it's fast. Head down to the setup section to see just how little it takes to start backtesting your trading algorithms.

## Usage

The whole process revolves around user security. With Jawa, you can store as many algorithms as you want to backtest locally, so no one can tamper with your ideas (if you care about that sort of thing anyways). Build the backtesting environment you want from scratch, completely unique to you, and at the end of the day if you so desire, push it all to a github repository of your choice to keep your work safe in the cloud.

Jawa has a number of simple commands to make the backtesting process as painless as possible. Below are the currently supported commands.

- Add
    - add an algorithm to the database
- Remove
    - remove an algorithm from the database
- Update
    - update a specific _id in the database
- Find
    - find a specific algorithm by name
- List
    - list all current documents in the database
- Run
    - run the backtest on a specific algorithm
- Push
    - push your work to github (as of now, this functionality will only work if you have a git environment already set up)
- Ingest
    - ingest a new dataset to be used for backtesting
- Report
    - report a bug

## Setup

**Note:** This assumes you already have zipline-live installed on your computer, as well as mongoDB. The installs are quick, and links can be found [here](http://www.zipline-live.io/tutorial) and [here](https://docs.mongodb.com/manual/installation/) respectively.

1. It's probably important to download the file and unzip it if necessary
2. Make sure to have [yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable) installed, as well as the others mentioned above
3. Go to your command line of choice, cd to the JawaBS directory, and type 'yarn install'
4. type 'yarn link'
5. You are good to go! Type 'jawa --help' and all of jawa's capabilities are laid out before you.

## Credits

**Built by yours truly**

Quietly awaiting other contributors
