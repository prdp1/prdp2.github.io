function changecolor(){
    let hex_num=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    let hexcode="";

    for(i=0;i<6;i++){
        let random_index = Math.floor(Math.random()* hex_num.length);

        hexcode += hex_num[random_index]
    
    }

    document.getElementById("hex-code").innerhtml=hexcode;
    document.getElementsByTagName("body")[0].style.background = "#" +hexcode
};
