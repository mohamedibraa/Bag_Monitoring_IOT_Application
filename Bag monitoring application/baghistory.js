//************* Start Set Query Parameter Value  For Grid 3 ************ 

GROUP_Id = "GROUP_" + BagId
ExecuteQueryModified('SELECT  `TimeStamp`,`currentLuxValue`,`Lng`,`Lat` FROM ' + GROUP_Id + ' order by `TimeStamp` desc limit 100', Grid_3_callbackFunc, 'Grid 3');

function Grid_3_callbackFunc(error, xhr) {
  if (xhr.response) {
    Grid_3DataArr = JSON.parse(xhr.response);
    for (var i = 0; i < Grid_3DataArr.length; i++) {

      var Time = Grid_3DataArr[i].TimeStamp
      var Lat = Grid_3DataArr[i].Lat;
      var Lng = Grid_3DataArr[i].Lng;
      var Lux = Grid_3DataArr[i].currentLuxValue
      console.log("time is", Time)
      console.log("lat is", Lat)
      console.log("lng is", Lng)
      console.log("lux is", Lux)
      console.log("*****************************")
      if (Lux == '0.0') {
        SetPluginParameterValue('Map 1', 'Marker URL', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRujCv32yScdTBkN75_a16tYX0YV4ttFKkCVA&usqp=CAU');
        DrawPlugin('Map 1');
      } else {
        SetPluginParameterValue('Map 1', 'Marker URL', 'https://thumbs.dreamstime.com/b/textile-school-backpack-icon-cartoon-vector-bag-pack-rucksack-satchel-228899143.jpg');
        DrawPlugin('Map 1');
      }


    }
    //console.log("data", Grid_3DataArr)
    SetPluginParameterValue('Grid 3', 'SQL query statement', Grid_3DataArr);
    DrawPlugin('Grid 3');
  } //End If 
} //End CB function 



//***************** End Set Query Parameter  ************** 
