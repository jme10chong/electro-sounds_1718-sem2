## __"Shapeless Sounds" Project Proposal__

###### *Description*

"Shapeless Sounds" is a p5.js code that makes use of sound to interact with shapes drawn onto  a window canvas. The code will make use of pre-loaded audio files, which each occupy a dedicated frequency range. The different frequencies can then be interpreted using the Fast Fourier Transform by the user. The sounds influence the size, shape, speed, resolution and color of the existing shape on the window canvas.

Since each frequency band contains its own unique set of data, and each one can be controlled independently, they can be used together in many combinations to create a unique image on the screen.

Aspects: Geometric, Audio Reactive, GUI, Suspense

###### *Methodology*

The pre-loaded audio files will be divided into 5 frequency ranges: low (20-125Hz), low-mid (125-500Hz), mid (500-2000Hz), high-mid (2000-8000Hz), and high (8000-20000Hz). A Graphic User Interface (GUI) will be used to control the 5 audio files, where the speed and volume of the playback can be changed.

The Fast Fourier Transform (FFT) algorithm will then be used to translate the frequency information into data that can be used to modulate parameters such as size, shape, speed, resolution, color of the object on the screen. The shape drawn will make use of the supershape equation (x/a)^2 + (y/b)^2 = r^2.


###### *Visual sketches*

![alt text](https://github.com/jme10chong/ming-p5js/blob/master/sketch-diagram.jpeg?raw=true)

###### *Sound track details*
The sound track will consist of IDM / glitch type sounds, which are divided into 3 frequency ranges: high, mid, and low. Speed and Volume of each individual frequency bandwidth will be controlled by dedicated sliders on the GUI. The audio for each frequency bandwidth will be a pre-recorded 60-seconded loop which will be provided in the source code.

###### *References*
Visual Artists

1. United Visual Artists (Massive Attack):

![alt text](https://i.pinimg.com/originals/e9/cd/b9/e9cdb9d2b931b48f3a759544d93416d8.jpg)

![alt text](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD4hll96MUFxiLUBPozZ9fA4rwmQbRXFHpToE1-iDfMF2uhrUm)

2. Weirdcore (Aphex Twin, Radiohead, Tame Impala):

![alt text](https://3m84r11gpx1j11puas2g5wfl-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/weirdcore.jpg)

![alt text](http://dazedimg.dazedgroup.netdna-cdn.com/573/azure/dazed-prod/610/4/614271.jpg)

3. Strange Loop (Skrillex, The Weeknd, Kendrick Lamar)

![alt text](https://static1.squarespace.com/static/5934c22bff7c503b73aa6d26/593c65f9bebafb0e23216c91/5a483d909140b7ea14ee4941/1515132308943/Weeknd-NWY.png?format=2500w)

![alt text](https://static1.squarespace.com/static/5934c22bff7c503b73aa6d26/593c62e1e58c62c93bc291e9/5a0902f89140b7f3b7b2a13c/1510540038652/BONOBO_PIC3.JPG?format=2500w)

![alt text](https://static1.squarespace.com/static/5934c22bff7c503b73aa6d26/59e6ec6c268b9695b9560f98/5a0904a5085229359d94d430/1514687099276/nickMurphy-panoramaNYC-dundermator.jpg?format=2500w)

The aesthetic of these artists mainly revolves around geometry, repeating patterns, and 3D.
