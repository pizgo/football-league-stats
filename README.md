# Footbal League Statistics

Application displays detailed data about Ekstraklasa (polish footall league) matches: results, timeline, statistics and lineups.

The app is using the sportradar.com API. Due to CORS policy of Sportradar's API, the project cannot be deployed and hosted. I'm aware that I could work on some intermediary backend service to make it work, yet it's outside of scope of this project. 
## Features

On the main page the user is be able to:
-   see table with all matches from the selected season. User is provided with information about team names, match date, final scores and the stadium name
-   quickly identified who won and lost the match or whether the match ended with tie
-   if the match was finished (ergo not postponed or closed), the user is able to click on the match he/she is interested in and see it's details

After being redirected to the match details, the user is able to:
-   see the match summary (scores, half-scores, names of the players who scored goals)
-   see the match highlights in a form of a vertical timeline. After clicking (on mobile devices) or hovering (on wider screens) user is provided with information on the players who performed the highlighted events (scores, yellow/red cards, substitutions)
-   see the match statistics for both of the teams, presented in a way that make it easy to compare the teams results
-   see the teams lineups, where are provided information on field players and substitute players. If the player was engaged in important event (goal score, obtaning card, being substituted in/out), this information is also visible.

The app design is fully responsive and adjusted to mobile devices

  ## Still under development
  
-    migrating state management to React Query
-    code cleaning and refactoring (also in terms of accessibility)

  ## TechStack
  
-   React, TypeScript, TailwindCSS, MUI, React-router-dom

## Live Demo

Because of inability to host the project, I decided to record a short video, presenting how the app looks and behaves. It's available here:

https://github.com/pizgo/football-league-stats/assets/22580400/b67ba9fa-62e3-4ecf-a402-f3fce93f0d92

## Screenshots

-    Desktop\
  Home\
 ![HomePageDesktop](https://github.com/pizgo/football-league-stats/assets/22580400/13545014-c439-4e61-bb29-0dee1d1bf5f3)
Highlights\
![HighlightsDesktop](https://github.com/pizgo/football-league-stats/assets/22580400/d882b040-260c-446c-a452-2e48f8c84a19)
Statistics\
![StatisticsDesktop](https://github.com/pizgo/football-league-stats/assets/22580400/abcf67ea-0e10-4c56-807f-ace13f34b5b2)
Lineups\
![LineupsDesktop](https://github.com/pizgo/football-league-stats/assets/22580400/bcaa7587-495f-4c2b-9bfd-d0f2c744576a)

-    Mobile\
  Home\
![HomePageMobile (1)](https://github.com/pizgo/football-league-stats/assets/22580400/a83d83b1-6edd-42cb-96dc-e619b65d1079)\
Highlights\
![HighlightsMobile (1)](https://github.com/pizgo/football-league-stats/assets/22580400/88041a81-254f-47fe-81c6-9950dd509b20)\
Statistics\
![StatisticsMobile (1)](https://github.com/pizgo/football-league-stats/assets/22580400/794f9017-bf16-4139-b153-94aa6947d34b)\
Lineups\
![LineupsMobile (1)](https://github.com/pizgo/football-league-stats/assets/22580400/82ef40cb-345f-4fb0-9e38-9996b0050388)\

