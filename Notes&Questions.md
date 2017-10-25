|   | Problem Occuring When...? | Fix...? | 
| --- | --- | --- |
|@cp7 | 1)Play->correct action & switch to pause buttom 2)Pause-> correct action & switch to play button 3)Play (same number) -> Doesn't pause song, Doesnt show pause button |   |
| 



___________________________________________________

|   ng-__ | What to Show	|   When...	|  
|---	|---	|---|
| ng-show | Song number	|  song != playing && mouse != ngMouseover V mouse == ngMouseleave |
|       | Play button	|   song != playing && mouse == ngMouseover  V mouse != ngMouseleave |
|       | Pause button 	|  song == playing |

	



