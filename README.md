# Airport_Challenge_JS

This is my solution to the airport challenge from Makers Academy - written in JavaScript and test driven using Jest. The goal of this project is to improve upon my JavaScript based object orientated programming as well as my test driven development using a new testing framework - Jest.

![es19blueclouds](https://user-images.githubusercontent.com/75075773/118150940-023b1b00-b40b-11eb-899b-96c43fd494d5.png)

## Task

To create an object orientated programme that meets the following user stories.

```
As an air traffic controller
So I can get passengers to a destination
I want to instruct a plane to land at an airport

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct a plane to take off from an airport and confirm that it is
no longer in the airport

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy
```

## Code Example

<img width="935" alt="Screenshot 2021-05-14 at 17 27 00" src="https://user-images.githubusercontent.com/75075773/118300224-9a9fd100-b4d9-11eb-8e5a-c80daa598aac.png">

## Install

<em>Note - you must have node installed to run this project.</em>

In your command line, enter the following commands:

```
$ npm init
```

```
$ npm install --save-dev jest
```

add the following to your package.json

```
{
  "scripts": {
    "test": "jest"
  }
}

```

To run the tests:

```
$ npm test
```

To Operate:

```
const plane = new Plane();
const airport = new Airport();
airport.landPlane(plane);
airport.takeOff();
```
