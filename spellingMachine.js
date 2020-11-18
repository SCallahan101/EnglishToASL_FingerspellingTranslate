
    const spellChars = [
        {
            alphabet: 'A',
            imgFile: 'AlphabetData/A.JPG',
            aslPic: 'AlphabetData/ASL_A.JPG'
        },
        {
            alphabet: 'B',
            imgFile: 'AlphabetData/B.JPG',
            aslPic: 'AlphabetData/ASL_B.JPG'
        },
        {
            alphabet: 'C',
            imgFile: 'AlphabetData/C.JPG',
            aslPic: 'AlphabetData/ASL_C.JPG'
        },
        {
            alphabet: 'D',
            imgFile: 'AlphabetData/D.JPG',
            aslPic: 'AlphabetData/ASL_D.JPG'
        },
        {
            alphabet: 'E',
            imgFile: 'AlphabetData/E.JPG',
            aslPic: 'AlphabetData/ASL_E.JPG'
        },
        {
            alphabet: 'F',
            imgFile: 'AlphabetData/F.JPG',
            aslPic: 'AlphabetData/ASL_F.JPG'
        },
        {
            alphabet: 'G',
            imgFile: 'AlphabetData/G.JPG',
            aslPic: 'AlphabetData/ASL_G.JPG'
        },
        {
            alphabet: 'H',
            imgFile: 'AlphabetData/H.JPG',
            aslPic: 'AlphabetData/ASL_H.JPG'
        },
        {
            alphabet: 'I',
            imgFile: 'AlphabetData/I.JPG',
            aslPic: 'AlphabetData/ASL_I.JPG'
        },
        {
            alphabet: 'J',
            imgFile: 'AlphabetData/J.JPG',
            aslPic: 'AlphabetData/ASL_J.JPG'
        },
        {
            alphabet: 'K',
            imgFile: 'AlphabetData/K.JPG',
            aslPic: 'AlphabetData/ASL_K.JPG'
        },
        {
            alphabet: 'L',
            imgFile: 'AlphabetData/L.JPG',
            aslPic: 'AlphabetData/ASL_L.JPG'
        },
        {
            alphabet: 'M',
            imgFile: 'AlphabetData/M.JPG',
            aslPic: 'AlphabetData/ASL_M.JPG'
        },
        {
            alphabet: 'N',
            imgFile: 'AlphabetData/N.JPG',
            aslPic: 'AlphabetData/ASL_N.JPG'
        },
        {
            alphabet: 'O',
            imgFile: 'AlphabetData/O.JPG',
            aslPic: 'AlphabetData/ASL_O.JPG'
        },
        {
            alphabet: 'P',
            imgFile: 'AlphabetData/P.JPG',
            aslPic: 'AlphabetData/ASL_P.JPG'
        },
        {
            alphabet: 'Q',
            imgFile: 'AlphabetData/Q.JPG',
            aslPic: 'AlphabetData/ASL_Q.JPG'
        },
        {
            alphabet: 'R',
            imgFile: 'AlphabetData/R.JPG',
            aslPic: 'AlphabetData/ASL_R.JPG'
        },
        {
            alphabet: 'S',
            imgFile: 'AlphabetData/S.JPG',
            aslPic: 'AlphabetData/ASL_S.JPG'
        },
        {
            alphabet: 'T',
            imgFile: 'AlphabetData/T.JPG',
            aslPic: 'AlphabetData/ASL_T.JPG'
        },
        {
            alphabet: 'U',
            imgFile: 'AlphabetData/U.JPG',
            aslPic: 'AlphabetData/ASL_U.JPG'
        },
        {
            alphabet: 'V',
            imgFile: 'AlphabetData/V.JPG',
            aslPic: 'AlphabetData/ASL_V.JPG'
        },
        {
            alphabet: 'W',
            imgFile: 'AlphabetData/W.JPG',
            aslPic: 'AlphabetData/ASL_W.JPG'
        },
        {
            alphabet: 'X',
            imgFile: 'AlphabetData/X.JPG',
            aslPic: 'AlphabetData/ASL_X.JPG'
        },
        {
            alphabet: 'Y',
            imgFile: 'AlphabetData/Y.JPG',
            aslPic: 'AlphabetData/ASL_Y.JPG'
        },
        {
            alphabet: 'Z',
            imgFile: 'AlphabetData/Z.JPG',
            aslPic: 'AlphabetData/ASL_Z.JPG'
        }
    ];
    
    
    $("#name-entrybox").submit(e => {
        e.preventDefault();
        const resultValue = $('#textName').val();
        console.log("Textbox value: " + resultValue);
        $(".personName").text(`The person's name is ${resultValue}` + ` in English. The American Sign Language will spelling out like this:`);
        // Pop the intro
        $(".videoArea").html("<source src='AlphabetData/Intro.mp4' type='video/mp4'>");
        $(".spellingName").html(
            // empty the append part
            ``
            );
        $(".alphabetBlocks").html(
           // empty the append part
           ``
        )    
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
            let aslFile = test.map(b => b.aslPic);
            console.log("asl pic: " + aslFile);

            $(".spellingName").append(
                `<img src="${file}" class='alphabetPic'><img src="AlphabetData/Blank.JPG" class="emptyImg">`
                );
            $(".alphabetBlocks").append(`
                <img src="${aslFile}" class="blockBox">
            `);
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