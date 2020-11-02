
    const spellChars = [
        {
            alphabet: "A",
            imgFile: 'database/A.JPG'
        },
        {
            alphabet: "B",
            imgFile: 'database/B.JPG'
        },
        {
            alphabet: "C",
            imgFile: 'database/C.JPG'
        },
        {
            alphabet: "D",
            imgFile: 'database/D.JPG'
        },
        {
            alphabet: "E",
            imgFile: 'database/E.JPG'
        },
        {
            alphabet: "F",
            imgFile: 'database/F.JPG'
        },
        {
            alphabet: "G",
            imgFile: 'database/G.JPG'
        },
        {
            alphabet: "H",
            imgFile: 'database/H.JPG'
        },
        {
            alphabet: "I",
            imgFile: 'database/I.JPG'
        },
        {
            alphabet: "J",
            imgFile: 'database/J.JPG'
        },
        {
            alphabet: "K",
            imgFile: 'database/K.JPG'
        },
        {
            alphabet: "L",
            imgFile: 'database/L.JPG'
        },
        {
            alphabet: "M",
            imgFile: 'database/M.JPG'
        },
        {
            alphabet: "N",
            imgFile: 'database/N.JPG'
        },
        {
            alphabet: "O",
            imgFile: 'database/O.JPG'
        },
        {
            alphabet: "P",
            imgFile: 'database/P.JPG'
        },
        {
            alphabet: "Q",
            imgFile: 'database/Q.JPG'
        },
        {
            alphabet: "R",
            imgFile: 'database/R.JPG'
        },
        {
            alphabet: "S",
            imgFile: 'database/S.JPG'
        },
        {
            alphabet: "T",
            imgFile: 'database/T.JPG'
        },
        {
            alphabet: "U",
            imgFile: 'database/U.JPG'
        },
        {
            alphabet: "V",
            imgFile: 'database/V.JPG'
        },
        {
            alphabet: "W",
            imgFile: 'database/W.JPG'
        },
        {
            alphabet: "X",
            imgFile: 'database/X.JPG'
        },
        {
            alphabet: "Y",
            imgFile: 'database/Y.JPG'
        },
        {
            alphabet: "Z",
            imgFile: 'database/Z.JPG'
        }
    ];
    
    
    $("#name-entrybox").submit(e => {
        e.preventDefault();
        const resultValue = $('#textName').val();
        console.log("Textbox value: " + resultValue);
        $(".personName").text(`The person's name is ${resultValue}` + ` in English. The American Sign Language will spelling out like this:`);
        // Pop the intro
        $(".videoArea").html("<source src='database/introVid2.0.mp4' type='video/mp4'>");
        $(".spellingName").html(
            // empty the append part
            ``
            );
        // resultValue;
        let characters = resultValue.split('');
        console.log(characters);
        // Second Part
        let i;
        let letter = {};
        for(i = 0; i < characters.length; i++){
            letter = characters[i];
            console.log("Character: " + characters[i]);
            setUpPics(letter);
        }
        });

        function setUpPics(data){
            // console.log(data + " - testing the receiver");
            let capABC = data.toUpperCase();
            // console.log(capABC + " = Capitalize Completed");
            let test = spellChars.filter(obj => obj.alphabet === capABC);
            console.log("array received: " + JSON.stringify(test));
            // let srcData = test.filter(url => {
            //     return url.imgFile;
            // })
            let file = test.map(a => a.imgFile);
            console.log("url: " + file);

            $(".spellingName").append(
                `<img src="${file}" class='alphabetPic'><img src="database/empty.JPG" class="emptyImg">`
                );
        }
        

        $("#readyButton").click(function(){
            console.log("clicked");
            let theSetUp;
            function picturesAnimation() {
                let perPic = $('.container img:first');
                perPic.hide();
                $('.container').append(perPic);
                perPic.fadeIn("slow")
            };
            theSetUp = setInterval(function(){
                picturesAnimation();
            }, 1000);
        });





setUpPics();
      
            // $("#readyButton").click(function(){
            //     console.log("clicked");
            // });

        

    
// console.log(characters[i] + " - test enact");
//         // let test = spellChars.map(characters[i]);
//         let test = spellChars.alphabet.filter(element === characters[i]);
//         console.log('evidence test: ' + test);
//         // if(spellChars.filter(characters[i])){
//         //     return spellChars.imgFile
//         // }

//         $(".spellingName").html(
//             `<img src=${test.imgFile}>`
//         );