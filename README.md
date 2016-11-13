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
- [ ] interpret accelerometer data into **events** using defined thresholds
- [ ] Setup UI to allow user to map **events** to **key presses**
- [ ] Send data to Firebase
- [ ] Implement users functionality
- [ ] Upload to Google Play Store

##### Chrome Extension
- [x] Start extension
- [ ] Read data from Firebase
- [ ] Submit **key press** data to browser
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
Alright, it's 11pm and I spend half an hour eating paneer with a friend. Progress is slow but it's happening. In the last half hour, I've created the extension and figured out what chrome API I'll need to submit the keystrokes (hint: chrome.input.ime). Aditya has four of the movements done and has already started implementing the Firebase realtime database. Things are going well.