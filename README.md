# Accelerokey
Are you still playing web games with your keyboard? :worried: I bet you wish there were a cooler way than an regular old keyboard! Use Accelerokey to map your phone's accelerometer to your computer's keypad! :smile:

### Check out the Code
This repository is setup into two branches:
- [**android**](https://github.com/binitshah/accelerokey/tree/android) - contains all the android app code for capturing and interpreting accelerometer data.
- [**chrome-extension**](https://github.com/binitshah/accelerokey/tree/chrome-extension) - contains all the chrome extension code for reading and submitting keypress data to the browser.

### Progress
##### Android
- [x] Start app
- [x] Capture accelerometer data from the android device
- [x] interpret accelerometer data into **events** using defined thresholds
- [x] Send data to Firebase
- [ ] Implement users functionality
- [ ] Calibrate the sensor to your initial position
- [ ] Upload to Google Play Store

##### Chrome Extension
- [x] Start extension
- [ ] Read data from Firebase
- [ ] Setup UI to allow user to map **events** to **key presses**
- [x] Submit **key press** data to browser
- [ ] Implement users functionality
- [ ] Upload to Google Chrome App Store

##### House Keeping
- [x] Setup branches to organize projects
- [ ] Create landing page website to showcase project and download links

##### Future
- [ ] Capture accelerometer data from iPhone
- [ ] Create Mozilla and other browser extensions

### Updates
:clock10:
It's 10pm and we're just getting into the hackathon vibe. Hacking started 2 hours ago. I don't usually post updates on my projects, but I figured it'd be cool keep track of our progress. Aditya had already started to capture accelerometer data. He's working on the threshold stuff right now. Meanwhile, I'm messing around with github emojis... yeah, I'm going to get to work. My responsibility for this project is just everything on the chrome extension side. That's all for now, see you at the next commit.

:clock11:
Alright, it's 11pm and I spend half an hour eating paneer with a friend. Progress is slow but it's happening. In the last half hour, I've created the extension and figured out what chrome API I'll need to submit the keystrokes (hint: chrome.input.ime) (EDIT @ 3:30am: Stay away from this bastard. There's little documentation and many errors if you decide down this path). Aditya has four of the movements done and has already started implementing the Firebase realtime database. Things are going well.

:clock1230:
It's 12:30 and we just had insomnia cookies. Aditya realized that we cannot capture the z rotation because of the way that accelerometers work. So it looks like we're only grabbing four events as of now. It's enough for most games anyways. I'm making progress on firing virtual keystrokes as well.

:clock330:
Alright, it's 3:30am. I am in dire need of coffee, but I am very happy man. For the last two and half hours, I struggled with the chrome input API until I stumbled upon the glory that is the debugger. I've also learned a lot about content and background scripts. I'm starting to see why people like chrome extensions, but it definitely look a lot of existential and morally questioning moments to get here. Aditya finished his part more or less and went back to catch some sleep. I should probably follow suit, but I might just stay here and work on my website after I finished the extension. Shameless plug: [http://binitshah.com](http://binitshah.com). Hopefully by the time you see this, I'll have added a chat bot on the main page. It's pretty cool. Alright, until the next commit, my friend.