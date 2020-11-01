import React from 'react'


class CustomizedAxisTick extends React.Component {
  render () {
    const {x, y, payload, width, maxChars, lineHeight, fontSize, fill} = this.props;
    //return <Text x={x} y={y} textAnchor="middle" verticalAnchor="start">{payload.value}</Text>;
    //return ( <Text x={x} y={y} textAnchor="end" verticalAnchor="start" angle={-45} fill="#333">{payload.value}</Text> );
    //return ( <g transform={`translate(${x},${y})`}><Text width={100} scaleToFit textAnchor="end" verticalAnchor="start" angle={-45} fill="#333">{payload.value}</Text></g> );
    //return ( <g transform={`translate(${x},${y})`}><Text width={50} scaleToFit textAnchor="middle" verticalAnchor="start" angle={0} fill="#333">{payload.value}</Text></g> );
    //const rx = new RegExp(`.{1,${maxChars}}`, 'g');
    const chunks = payload.value.replace(/-/g,' ').split(' ').flat();
    const tspans = chunks.map((s,i) => <tspan x={0} y={lineHeight} dy={(i*lineHeight)}>{s}</tspan>);
    return (
      <g transform={`translate(${x},${y})`}>
        <text width={width} height="auto" textAnchor="middle" fontSize={fontSize} fill={fill}>
          {tspans}
        </text>
      </g>
    );
  }
};

CustomizedAxisTick.defaultProps = {
  width: 50,
  maxChars: 10,
  fontSize: 12,
  lineHeight: 14,
  fill: "#333"
};


export default CustomizedAxisTick
