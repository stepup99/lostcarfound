# Welcome to Lost and Found case registory

there are three pages 
1. Admin - where we will see all the victims who lost their car .
2. police - there are 4 police who are actually working on someone's victim case.
3. carwoner - where you can seee there case status and of that perticular victim and any one can also register an Fir there .

# Technical stuffs
0. npm install all the dependencies , 
1. using kue on node js to hold all the cases which are filing by the victims on their lost car and put them in queue .
2. queue is managed by redis so we need to start redis before starting the server.js file , so when police is not holding any case so redis is going to assign a new cases which is filled by the victim.
3. while resolving the "resolve" button police is updating the status of its own and victim status to resolve simultaniously.
4. there are two folder client running on 3000 and server running on 5000 and they are connected to each for api services
5. redis for queue is connected on 6379 port number
