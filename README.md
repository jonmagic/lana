# Lana

Graphical analyzer for timestamped binary data. Currently works with csv data that looks like this:

```
Time[s],Channel 0
0.000000000000000,1
1.813367583333333,0
1.814014083333333,1
1.814383916666667,0
1.815033500000000,1
1.815400416666667,0
1.815492333333333,1
```

The csv above was exported from the Logic software by [Saleae](https://www.saleae.com/). I have a Saleae  Logic 4 and I love it. Well built and easy to use hardware and software for recording and analyzing analog and digital signals. I highly recommend buying one.

Named after [Lana the research chimpanzee](https://en.wikipedia.org/wiki/Lana_(chimpanzee)) and short for logic analyzer.

![lana screenshot](http://f.cl.ly/items/3C2y15283D1d2c2H1S2U/2016-01-08%20at%209.56%20PM.png)

Lana doesn't really do much yet so I recommend checking out [Sigrok](http://sigrok.org/) and [Pulseview](https://sigrok.org/wiki/PulseView) if you want to get any real work done.

## Usage

```bash
$ git clone https://github.com/jonmagic/lana
$ cd lana
$ npm install && npm start
```

Click the **Open** button and choose a csv file to open.

## License

The MIT License (MIT)

Copyright (c) 2016 Jonathan Hoyt

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
