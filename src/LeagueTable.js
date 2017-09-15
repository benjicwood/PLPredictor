import React, { Component } from 'react';

export default class LeagueTable extends Component {
  render () {
    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th><abbr title='Position'>Pos</abbr></th>
              <th>Team</th>
              <th><abbr title='Played'>Pld</abbr></th>
              <th><abbr title='Won'>W</abbr></th>
              <th><abbr title='Drawn'>D</abbr></th>
              <th><abbr title='Lost'>L</abbr></th>
              <th><abbr title='Goals for'>GF</abbr></th>
              <th><abbr title='Goals against'>GA</abbr></th>
              <th><abbr title='Goal difference'>GD</abbr></th>
              <th><abbr title='Points'>Pts</abbr></th>
              <th />
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th><abbr title='Position'>Pos</abbr></th>
              <th>Team</th>
              <th><abbr title='Played'>Pld</abbr></th>
              <th><abbr title='Won'>W</abbr></th>
              <th><abbr title='Drawn'>D</abbr></th>
              <th><abbr title='Lost'>L</abbr></th>
              <th><abbr title='Goals for'>GF</abbr></th>
              <th><abbr title='Goals against'>GA</abbr></th>
              <th><abbr title='Goal difference'>GD</abbr></th>
              <th><abbr title='Points'>Pts</abbr></th>
              <th />
            </tr>
          </tfoot>
          <tbody>
            <tr>
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
            <tr>
              <th>2</th>
              <td><a title='Arsenal'>Arsenal</a></td>
              <td>38</td>
              <td>20</td>
              <td>11</td>
              <td>7</td>
              <td>65</td>
              <td>36</td>
              <td>+29</td>
              <td>71</td>
              <td />
            </tr>
            <tr>
              <th>3</th>
              <td><a title='Tottenham Hotspur'>Tottenham Hotspur</a></td>
              <td>38</td>
              <td>19</td>
              <td>13</td>
              <td>6</td>
              <td>69</td>
              <td>35</td>
              <td>+34</td>
              <td>70</td>
              <td />
            </tr>
            <th>4</th>
            <td><a title='Manchester City'>Manchester City</a></td>
            <td>38</td>
            <td>19</td>
            <td>9</td>
            <td>10</td>
            <td>71</td>
            <td>41</td>
            <td>+30</td>
            <td>66</td>
            <td />
            <tr>
              <th>5</th>
              <td><a title='Manchester United'>Manchester United</a></td>
              <td>38</td>
              <td>19</td>
              <td>9</td>
              <td>10</td>
              <td>49</td>
              <td>35</td>
              <td>+14</td>
              <td>66</td>
              <td />
            </tr>
            <tr>
              <th>6</th>
              <td><a title='Southampton F.C.'>Southampton</a></td>
              <td>38</td>
              <td>18</td>
              <td>9</td>
              <td>11</td>
              <td>59</td>
              <td>41</td>
              <td>+18</td>
              <td>63</td>
              <td />
            </tr>
            <tr>
              <th>7</th>
              <td><a title='West Ham United'>West Ham United</a></td>
              <td>38</td>
              <td>16</td>
              <td>14</td>
              <td>8</td>
              <td>65</td>
              <td>51</td>
              <td>+14</td>
              <td>62</td>
              <td />
            </tr>
            <tr>
              <th>8</th>
              <td><a title='Liverpool F.C.'>Liverpool</a></td>
              <td>38</td>
              <td>16</td>
              <td>12</td>
              <td>10</td>
              <td>63</td>
              <td>50</td>
              <td>+13</td>
              <td>60</td>
              <td />
            </tr>
            <tr>
              <th>9</th>
              <td><a title='Stoke City F.C.'>Stoke City</a></td>
              <td>38</td>
              <td>14</td>
              <td>9</td>
              <td>15</td>
              <td>41</td>
              <td>55</td>
              <td>−14</td>
              <td>51</td>
              <td />
            </tr>
            <tr>
              <th>10</th>
              <td><a title='Chelsea'>Chelsea</a></td>
              <td>38</td>
              <td>12</td>
              <td>14</td>
              <td>12</td>
              <td>59</td>
              <td>53</td>
              <td>+6</td>
              <td>50</td>
              <td />
            </tr>
            <tr>
              <th>11</th>
              <td><a title='Everton'>Everton</a></td>
              <td>38</td>
              <td>11</td>
              <td>14</td>
              <td>13</td>
              <td>59</td>
              <td>55</td>
              <td>+4</td>
              <td>47</td>
              <td />
            </tr>
            <tr>
              <th>12</th>
              <td><a title='Swansea City'>Swansea City</a></td>
              <td>38</td>
              <td>12</td>
              <td>11</td>
              <td>15</td>
              <td>42</td>
              <td>52</td>
              <td>−10</td>
              <td>47</td>
              <td />
            </tr>
            <tr>
              <th>13</th>
              <td><a title='Watford'>Watford</a></td>
              <td>38</td>
              <td>12</td>
              <td>9</td>
              <td>17</td>
              <td>40</td>
              <td>50</td>
              <td>−10</td>
              <td>45</td>
              <td />
            </tr>
            <tr>
              <th>14</th>
              <td><a title='West Bromwich Albion'>West Bromwich Albion</a></td>
              <td>38</td>
              <td>10</td>
              <td>13</td>
              <td>15</td>
              <td>34</td>
              <td>48</td>
              <td>−14</td>
              <td>43</td>
              <td />
            </tr>
            <tr>
              <th>15</th>
              <td><a title='Crystal Palace'>Crystal Palace</a></td>
              <td>38</td>
              <td>11</td>
              <td>9</td>
              <td>18</td>
              <td>39</td>
              <td>51</td>
              <td>−12</td>
              <td>42</td>
              <td />
            </tr>
            <tr>
              <th>16</th>
              <td><a title='Bournemouth'>Bournemouth</a></td>
              <td>38</td>
              <td>11</td>
              <td>9</td>
              <td>18</td>
              <td>45</td>
              <td>67</td>
              <td>−22</td>
              <td>42</td>
              <td />
            </tr>
            <tr>
              <th>17</th>
              <td><a title='Burnley'>Burnley</a></td>
              <td>38</td>
              <td>9</td>
              <td>12</td>
              <td>17</td>
              <td>48</td>
              <td>62</td>
              <td>−14</td>
              <td>39</td>
              <td />
            </tr>
            <tr>
              <th>18</th>
              <td><a title='Newcastle United'>Newcastle United</a>
              </td>
              <td>38</td>
              <td>9</td>
              <td>10</td>
              <td>19</td>
              <td>44</td>
              <td>65</td>
              <td>−21</td>
              <td>37</td>
              <td />
            </tr>
            <tr>
              <th>19</th>
              <td><a title='Huddersfield Town'>Huddersfield Town</a>
              </td>
              <td>38</td>
              <td>9</td>
              <td>7</td>
              <td>22</td>
              <td>39</td>
              <td>67</td>
              <td>−28</td>
              <td>34</td>
              <td />
            </tr>
            <tr>
              <th>20</th>
              <td><a title='Brighton and Hove Albion'>Brighton and Hove Albion</a>
              </td>
              <td>38</td>
              <td>3</td>
              <td>8</td>
              <td>27</td>
              <td>27</td>
              <td>76</td>
              <td>−49</td>
              <td>17</td>
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
