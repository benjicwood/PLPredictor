import React, { Component } from 'react';

export default class Team extends Component {
  render () {
    return (
      <tr>
        <th>1</th>
        <td><a title={this.props.name}>{this.props.name}</a></td>
        <td>{this.props.played}</td>
        <td>{this.props.gd}</td>
        <td>{this.props.points}</td>
        <td />
      </tr>
    );
  }
}

/*
<th>1</th>
<td><a title='Leicester City'>Leicester City</a></td>
<td>38</td>
<td>23</td>
<td>12</td>
<td>3</td>
<td>68</td>
<td>36</td>
<td>+32</td>
<td>81</td>
<td />
</tr>

*/
