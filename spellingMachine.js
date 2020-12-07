
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
    $("#readyButton").hide();
    $(".directionButton").hide();
    
    $("#name-entrybox").submit(e => {
        e.preventDefault();
        const resultValue = $('#textName').val();
        console.log("Textbox value: " + resultValue);
        $(".personName").text(`Your name ${resultValue}` + ` in English. The American Sign Language will spelling out like this!`);
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
        $("#readyButton").show();
        // $("#repeatLoopButton").show();  
        // resultValue;
        let characters = resultValue.split('');
        console.log(characters);
        // Second Part
        let i;
        let letter = {};
        for(i = 0; i < characters.length; i++){
            letter = characters[i];
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
                `<img src="${file}" class='alphabetPic'>`
                );
            $(".alphabetBlocks").append(`
                <img src="${aslFile}" class="blockBox">
            `);
            // $(".spellingName").prepend(`<img src="AlphabetData/Blank.JPG" class="emptyImg">`);
            // <img src="AlphabetData/Blank.JPG" class="emptyImg">
            $(".alphabetPic").hide();
            // $(".directionButton").hide();
            $(".alphabetBlocks").hide();
        }
        $("#readyButton").on('click', function(){
            console.log("Ready button clicked");
                $('#readyButton').attr("disabled", true);
                let perPic = $('.container img:first');
                $(perPic).show();
                $(".directionButton").show();
                $(".alphabetBlocks").show();
                // let perBlock = $('.alphabetBlocks img:first');
                // $(perBlock).style.boxShadow = "10px 10px 5px #888"; 
                // $('.alphabetBlocks .blockBox:first-child').style.boxShadow("10px 10px 5px #888");
        })


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
            // $('.container').append("img");
            let i;
            const slides = document.getElementsByClassName("alphabetPic");
            // const letterBox = document.getElementsByClassName("blockBox");
            if (n > slides.length){slideIndex = 1}
            if(n < 1){slideIndex = slides.length}
            for(i = 0; i < slides.length; i++){
                slides[i].style.display = "none";
            }
            slides[slideIndex-1].style.display = "block";

            const letterBoxs = document.getElementsByClassName("blockBox");
            // let currentLetter = letterBoxs[slideIndex-1];
            let x;
            if (n > letterBoxs.length){slideIndex = 1}
            if(n < 1){slideIndex = letterBoxs.length}
            for(x = 0; x < letterBoxs.length; x++){
                letterBoxs[x].style.boxShadow = "none";
            }
            letterBoxs[slideIndex-1].style.boxShadow = "0px 0px 10px 6px rgba(240,115,85,1)";
            // letterBoxs[0].style.boxShadow = "10px 10px 5px #888";

            // currentLetter.style.boxShadow = "10px 10px 5px #888";
            // $(currentLetter).css('box-shadow', '10px 10px 5px #888');
            // if (n > letterBoxs.length){slideIndex = 1}
            // if(n < 1){slideIndex = letterBoxs.length}
            // for(i = 0; i < letterBoxs.length; i++){
            //     letterBoxs[i].css("none");
            // }
            // letterBoxs[slideIndex-1].css('box-shadow', '10px 10px 5px #888');
            // let currentLetter = letterBoxs[slideIndex-1];
            // $(currentLetter).css('box-shadow', '10px 10px 5px #888');
        }
        nextSlide();
        currentSlide();
        presentImg();
        
        // $(".next").on('click', function(){
        //     console.log("Next button clicked");
        //     let perPic = $('.container img:first');
        //     $('.container').append(perPic);
        //     perPic.style.zIndex = '-1';
        //     // perPic.hide();
        // })
        // function loopButton(){
            // $("#loopButton").on('click', function(){
            //     console.log("clicked");
            //     $('#loopButton').attr("disabled", true);
            //     $(".alphabetBlocks").show(); 
            //     let theSetUp;
            //     function picturesAnimation() {
            //         let perPic = $('.container img:first');
            //         perPic.hide();
            //         $('.container').append(perPic);
            //         perPic.fadeIn();
            //     };
            //     theSetUp = setInterval(function(){
            //         picturesAnimation();
            //     }, 1000);
            //     // let stopGap = clearInterval(theSetUp);
            //     let numForLoop = localStorage.getItem('num');
            //     let mathForLoop = (numForLoop * 1000) * 2;
            //     console.log(mathForLoop);
            //     setTimeout(function(){
            //         console.log('time out');
            //         clearInterval(theSetUp);
            //         $('#loopButton').attr("disabled", false);
            //     }, mathForLoop);
            // });
            // removeEventListener('click', loopButton);
        // }
        // addEventListener('click', loopButton);
        // loopButton();

        // $("#loopButton").click(function(){
        //     console.log('testing settimer');
        //     let stopGap;
        //     let target = $('.container img:first');
        //     function stop(){
        //         target.stop();
        //     };
        //     stopGap = clearInterval(function(){
        //         stop();
        //     }, 7000);
        // });

//         function endTheLoop(){
//             let numForLoop = localStorage.getItem('num');
//             let mathForLoop = numForLoop * 1000;
//             // console.log(mathForLoop);
            
//             clearInterval(function(){picturesAnimation();}, mathForLoop);
//         }



// endTheLoop();
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