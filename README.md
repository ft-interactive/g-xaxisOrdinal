# xaxisOrdinal

Pre styled ordinal x-axis for use with the FT's g-chartframe architecture as part of the Visual Vocabulary. As the name suggests it creates an ordinal y-axis that can be appended to the .plot obejct in the g-chartframe hopefully eliminating the need to code another standard y-axis.

Will also work with other builds where the axis is called into an svg.

### Prerequisites
The FT axis styles---add the folowwing link in your index file header

The [d3 library](https://d3js.org/) is already installed in the build

## Before starting

<b>Note</b> The <b>.range()</b> of the x-axis should be determind in part by the <b>.labelWidth()</b> of the y-axis, so it is advisable to ad your y-axis first. See the secton on positioning at [yaxisLinear](https://github.com/ft-interactive/g-yaxislinear).

## Installing
### Manually install

Add the following line to the header of you index.html file.

``` html
<script src="to come"> </script>

```
### NPM install
Not yet deployed

## Getting started
<b>Note</b> All examples shown are from the web frame style

Add the following code to your index.js to append a default x-axis to the .plot object (grey here but is not normally visible). Bye default there are no tick on an ordinal x-axis, these are set to zero.

```
const myXAxis = gAxis.xaxisOrdinal()
currentFrame.plot()
	.call(myXAxis);
```

![alt tag](https://github.com/ft-interactive/g-xaxisOrdinal/blob/master/images/default.png)

Set the <b>.rangeRound()</b> and the <b> .offset() </b> to the current frame width and height to make the axis correctly fit in the <b>.plot</b> object.

```
const myXAxis = gAxis.xaxisOrdinal()

myXAxis
	.rangeRound([0,currentFrame.dimension().width])
	.offset(currentFrame.dimension().height);

currentFrame.plot()
	.call(myXAxis);
```

![alt tag](https://github.com/ft-interactive/g-xaxisOrdinal/blob/master/images/position.png)








