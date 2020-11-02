
    const spellChars = [
        {
            alphabet: "A",
            imgFile: 'AlphabetData/A.JPG'
        },
        {
            alphabet: "B",
            imgFile: 'AlphabetData/B.JPG'
        },
        {
            alphabet: "C",
            imgFile: 'AlphabetData/C.JPG'
        },
        {
            alphabet: "D",
            imgFile: 'AlphabetData/D.JPG'
        },
        {
            alphabet: "E",
            imgFile: 'AlphabetData/E.JPG'
        },
        {
            alphabet: "F",
            imgFile: 'AlphabetData/F.JPG'
        },
        {
            alphabet: "G",
            imgFile: 'AlphabetData/G.JPG'
        },
        {
            alphabet: "H",
            imgFile: 'AlphabetData/H.JPG'
        },
        {
            alphabet: "I",
            imgFile: 'AlphabetData/I.JPG'
        },
        {
            alphabet: "J",
            imgFile: 'AlphabetData/J.JPG'
        },
        {
            alphabet: "K",
            imgFile: 'AlphabetData/K.JPG'
        },
        {
            alphabet: "L",
            imgFile: 'AlphabetData/L.JPG'
        },
        {
            alphabet: "M",
            imgFile: 'AlphabetData/M.JPG'
        },
        {
            alphabet: "N",
            imgFile: 'AlphabetData/N.JPG'
        },
        {
            alphabet: "O",
            imgFile: 'AlphabetData/O.JPG'
        },
        {
            alphabet: "P",
            imgFile: 'AlphabetData/P.JPG'
        },
        {
            alphabet: "Q",
            imgFile: 'AlphabetData/Q.JPG'
        },
        {
            alphabet: "R",
            imgFile: 'AlphabetData/R.JPG'
        },
        {
            alphabet: "S",
            imgFile: 'AlphabetData/S.JPG'
        },
        {
            alphabet: "T",
            imgFile: 'AlphabetData/T.JPG'
        },
        {
            alphabet: "U",
            imgFile: 'AlphabetData/U.JPG'
        },
        {
            alphabet: "V",
            imgFile: 'AlphabetData/V.JPG'
        },
        {
            alphabet: "W",
            imgFile: 'AlphabetData/W.JPG'
        },
        {
            alphabet: "X",
            imgFile: 'AlphabetData/X.JPG'
        },
        {
            alphabet: "Y",
            imgFile: 'AlphabetData/Y.JPG'
        },
        {
            alphabet: "Z",
            imgFile: 'AlphabetData/Z.JPG'
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