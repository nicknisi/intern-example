# Intern Example

Running Intern functional tests in a mobile simulator.

First, install dependencies (Intern and Grunt) `npm install`

## iOS Instructions

1. Install [ios-driver-standalone-0.6.6-SNAPSHOT.jar](http://ios-driver.github.io/ios-driver/?page=home)
1. start ios-driver `java -jar ios-server-standalone-0.6.6-SNAPSHOT.jar -port 4444`
1. `grunt intern:ios`

## Anrdoid Instructions

1. Install [selendroid](http://selendroid.io/setup.html)
1. Start selendroid `java -jar selendroid-standalone-0.13.0-with-dependencies.jar -port 4444`
1. `grunt intern:android`
