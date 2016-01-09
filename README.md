# Lana

Graphical logic analyzer. Currently works with csv data that looks like this:

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

Each row has the timestamp of the state change in the first column and the logic state in the second column. Since each row is a state change it just alternates one zero one zero one zero and so on.

Lana graphs two lines per state change (csv row) ┘

The horizontal line starts at the x/y coordinates where the previous state changed ends (where x is time and y is state) and ends at the new x coordinate and the previous y coordinate. The vertical line then goes from the that x and y coordinate to the same x and the new y coordinate representing the state change. Explained in code that would be:

```javascript
// horizontal line
[x1, y1, x2, y1]
// vertical line
[x2, y1, x2, y2]
```

The csv data above was exported from the app Logic by [Saleae](https://www.saleae.com/). I have a Saleae  Logic 4 and I love it. Well built and easy to use hardware and software for recording and analyzing analog and digital signals. I highly recommend buying one.

Named after [Lana the research chimpanzee](https://en.wikipedia.org/wiki/Lana_(chimpanzee)) and short for logic analyzer.

![lana screenshot](http://f.cl.ly/items/0w3u0K1n0h1e433W0V2P/2016-01-09%20at%2012.10%20AM.png)

Lana doesn't really do much yet so I recommend checking out [Sigrok](http://sigrok.org/) and [Pulseview](https://sigrok.org/wiki/PulseView) if you want to get any real work done.

## Usage

```bash
$ git clone https://github.com/jonmagic/lana
$ cd lana
$ npm install && npm start
```

Click the **Open** button and choose a csv file to open. You can find the `hello_world.csv` sample in the samples directory.

## Goals

- [x] Visualize csv in timestamp/state change format
- [ ] Zoom
- [ ] Auto-scaling timestamp markers in graph
- [ ] Hover over to get exact distances between state changes, duty cycle, etc
- [ ] First logic analyzer. Use hello_world.csv as example, should look something like [this](http://cl.ly/1f0u3l0P3q0v) and [this](http://cl.ly/1x0N2F2P2h17)

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
