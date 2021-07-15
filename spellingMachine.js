
    const spellChars = [
        {
            alphabet: 'A',
            imgFile: 'AlphabetData/Formal_A.JPG',
            aslPic: 'AlphabetData/ASL_A.svg'
        },
        {
            alphabet: 'B',
            imgFile: 'AlphabetData/Formal_B.JPG',
            aslPic: 'AlphabetData/ASL_B.svg'
        },
        {
            alphabet: 'C',
            imgFile: 'AlphabetData/Formal_C.JPG',
            aslPic: 'AlphabetData/ASL_C.svg'
        },
        {
            alphabet: 'D',
            imgFile: 'AlphabetData/Formal_D.JPG',
            aslPic: 'AlphabetData/ASL_D.svg'
        },
        {
            alphabet: 'E',
            imgFile: 'AlphabetData/Formal_E.JPG',
            aslPic: 'AlphabetData/ASL_E.svg'
        },
        {
            alphabet: 'F',
            imgFile: 'AlphabetData/Formal_F.JPG',
            aslPic: 'AlphabetData/ASL_F.svg'
        },
        {
            alphabet: 'G',
            imgFile: 'AlphabetData/Formal_G.JPG',
            aslPic: 'AlphabetData/ASL_G.svg'
        },
        {
            alphabet: 'H',
            imgFile: 'AlphabetData/Formal_H.JPG',
            aslPic: 'AlphabetData/ASL_H.svg'
        },
        {
            alphabet: 'I',
            imgFile: 'AlphabetData/Formal_I.JPG',
            aslPic: 'AlphabetData/ASL_I.svg'
        },
        {
            alphabet: 'J',
            imgFile: 'AlphabetData/Formal_J.JPG',
            aslPic: 'AlphabetData/ASL_J.svg'
        },
        {
            alphabet: 'K',
            imgFile: 'AlphabetData/Formal_K.JPG',
            aslPic: 'AlphabetData/ASL_K.svg'
        },
        {
            alphabet: 'L',
            imgFile: 'AlphabetData/Formal_L.JPG',
            aslPic: 'AlphabetData/ASL_L.svg'
        },
        {
            alphabet: 'M',
            imgFile: 'AlphabetData/Formal_M.JPG',
            aslPic: 'AlphabetData/ASL_M.svg'
        },
        {
            alphabet: 'N',
            imgFile: 'AlphabetData/Formal_N.JPG',
            aslPic: 'AlphabetData/ASL_N.svg'
        },
        {
            alphabet: 'O',
            imgFile: 'AlphabetData/Formal_O.JPG',
            aslPic: 'AlphabetData/ASL_O.svg'
        },
        {
            alphabet: 'P',
            imgFile: 'AlphabetData/Formal_P.JPG',
            aslPic: 'AlphabetData/ASL_P.svg'
        },
        {
            alphabet: 'Q',
            imgFile: 'AlphabetData/Formal_Q.JPG',
            aslPic: 'AlphabetData/ASL_Q.svg'
        },
        {
            alphabet: 'R',
            imgFile: 'AlphabetData/Formal_R.JPG',
            aslPic: 'AlphabetData/ASL_R.svg'
        },
        {
            alphabet: 'S',
            imgFile: 'AlphabetData/Formal_S.JPG',
            aslPic: 'AlphabetData/ASL_S.svg'
        },
        {
            alphabet: 'T',
            imgFile: 'AlphabetData/Formal_T.JPG',
            aslPic: 'AlphabetData/ASL_T.svg'
        },
        {
            alphabet: 'U',
            imgFile: 'AlphabetData/Formal_U.JPG',
            aslPic: 'AlphabetData/ASL_U.svg'
        },
        {
            alphabet: 'V',
            imgFile: 'AlphabetData/Formal_V.JPG',
            aslPic: 'AlphabetData/ASL_V.svg'
        },
        {
            alphabet: 'W',
            imgFile: 'AlphabetData/Formal_W.JPG',
            aslPic: 'AlphabetData/ASL_W.svg'
        },
        {
            alphabet: 'X',
            imgFile: 'AlphabetData/Formal_X.JPG',
            aslPic: 'AlphabetData/ASL_X.svg'
        },
        {
            alphabet: 'Y',
            imgFile: 'AlphabetData/Formal_Y.JPG',
            aslPic: 'AlphabetData/ASL_Y.svg'
        },
        {
            alphabet: 'Z',
            imgFile: 'AlphabetData/Formal_Z.JPG',
            aslPic: 'AlphabetData/ASL_Z.svg'
        }
    ];
    $("#readyButton").hide();
    $(".directionButton").hide();

    $("#name-entrybox").submit(e => {
        e.preventDefault();
        document.getElementById("result-container").style.height = "unset";
        const resultValue = $('#textName').val();
        console.log("Textbox value: " + resultValue);
        $(".wordInput").text(`English: ${resultValue}` + `. The American Sign Language will spelling out like this!`);
        // Pop the intro
        $("#intro-container").remove();
        $('#readyButton').attr("disabled", false);
        $(".spellingName").html(
            // empty the append part
            ``
            );
        $(".alphabetBlocks").html(
           // empty the append part
           ``
        )  
        $("#readyButton").show();
        $(".directionButton").hide();
        let characters = resultValue.split('');
        console.log(characters);
        // Second Part
        let i;
        let letter = {};
        for(i = 0; i < characters.length; i++){
            letter = characters[i];
            console.log("char " + i);
            // console.log(characters.length);
            let num = characters.length;
            localStorage.setItem('num' , num);
            console.log("Character: " + characters[i]);
            setUpPics(letter);
        }
        });

        function setUpPics(data){
            // console.log(data + " - testing the receiver");
            let capABC = data.toUpperCase();
            // console.log(capABC + " = Capitalize Completed");
            let test = spellChars.filter((obj => obj.alphabet === capABC));
            console.log("array received: " + JSON.stringify(test));
            let file = test.map(a => a.imgFile);
            console.log("url: " + file);
            let aslFile = test.map(b => b.aslPic);
            console.log("asl pic: " + aslFile);
            let num = 0;
            $(".spellingName").append(
                `<img src="${file}" class='alphabetPic' alt='Man spelling out'>`
                );
            $(".alphabetBlocks").append(`
                <img src="${aslFile}" class="blockBox" alt='alphabet letter box in ASL'>
            `);
            let perPic = $('.container img:first');
            $(perPic).show();
            $(".directionButton").show();
            $(".alphabetBlocks").show();
        }

        let slideIndex = 1;
        presentImg(slideIndex);
        function nextSlide(n){
            // console.log(n);
            presentImg(slideIndex += n);
        }
        function currentSlide(n){
            presentImg(slideIndex = n);
        }
        function presentImg(n){
            let i;
            const slides = document.getElementsByClassName("alphabetPic");
            if (n > slides.length){slideIndex = 1}
            if(n < 1){slideIndex = slides.length}
            for(i = 0; i < slides.length; i++){
                slides[i].style.display = "none";
            }
            slides[slideIndex-1].style.display = "block";

            const letterBoxs = document.getElementsByClassName("blockBox");
            let x;
            if (n > letterBoxs.length){slideIndex = 1}
            if(n < 1){slideIndex = letterBoxs.length}
            for(x = 0; x < letterBoxs.length; x++){
                letterBoxs[x].style.border = "2px solid black";
            }
            letterBoxs[slideIndex-1].style.border = "3px solid rgba(240,115,85,1)";
        }
nextSlide();
currentSlide();
presentImg();
setUpPics();