# Star Wars Empire Dashboard

Imagine that your dream finnaly came true, you finally join the ranks of the Glorious Galactic empire, you pictured yourself as an hero of the Empire tracking down criminal, rebel scum
and even some unknown threat to the peace and prosperity of the Empire !!!!

Unfortunetely you are skinny, small, myopic, asthmatic, and end yourself at the bounty office encoding day after day thousand and thousand of profile targeted as ennemy of the empire with the constant watch
of the benevolant empire.

## The Tool at your Disposal

As a specialist of the Empire you were granted the Access to the Threat Management System (TMS) unfortunetely your user was not created yet so Lord Vador give you its credentials for perform your task

user: lordVador01
password: Ilovethedarkside123

## Welcome Pack (Setup)

Welcome trooper as a new recrue to the Glorious Galactic Empire you were granted the access to the TMS application and recieve a secure DataPad (ads free)
Please follow those step for install on your DataPad the TMS application.

1) Open a Terminal (you can use VScode dark theme only)
2) check that you have node installed ``node -v``
3) check that you have npm installed ``npm  -v``
4) If Not go Install them immediatly !!!
5) Now that you are ready please do ``npm install``
6) if you see at the end that everything is okay please move on to step 7 if not go on step 8
7) now type ``npm star`` please not follow to comply to the EMpira Policy and Long Live The Empire !!!!
8) its not working ? its not normal its should as Lord Vador always say "its worked on my machine" you can contact the Support Office but be aware of the long awaiting (as they are all currently trying to fix a glitch in the Emperor Meditation Room)

Thank You for This short Presentation and Long Live The Empire

N.B. This app can also be used with docker for development or production build

2 solution for that:

1) - If you not download the repo
   - `docker pull gge2705/sw-empire-dashboard:1.0` (DEV) || `docker pull gge2705/sw-empire-dashboard:latest` (PROD)
   - `docker run -p 3000:3000 -d --name sw-empire-dashboard-dev gge2705/sw-empire-dashboard:1.0` (DEV) || `docker run -p 80:80 -d --name sw-empire-dashboard-prod gge2705/sw-empire-dashboard:latest` (PROD)

2) - If you download the repo
   - `npm run dev` || `npm run prod` (Build image / Create container & network)
   - `npm run dev-down` || `npm run prod-down` (Stop & Remove container & network)
   - `docker images` (for list image)
   - `docker image rm IMAGEID` (remove image from machine replace IMAGEID by the id find with docker images command)