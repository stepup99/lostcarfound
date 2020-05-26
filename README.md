# Welcome to Lost and Found case registory

there are three pages 
1. Admin - where we will see all the victims who lost their car .
2. police - there are 4 police who are working on victim case.
3. carwoner - where you can seee there case status and of that perticular victim and any one can also register an Fir there .

# Technical stuffs
0. npm install all the dependencies , 
1. using kue on node js to hold all the cases which are filing by the victims on their lost car and put them in queue .
2. queue is managed by redis so we need to start redis before starting the server.js file , so when police is not holding any case so redis is going to assign a new cases which is filled by the victim.
3. while clicking the "resolve" button police is going to update the status of its own and victim status to resolve simultaniously.
4. there are two files client reactjs running on 3000 and server nodejs running on 5000 and they are connected to each for api services
5. redis is connected on 6379 port number
6. all the data of police and victims are hosted on mongodb website
7. for starting the server need to run this command "npm run dev"
