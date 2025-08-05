function gid(id){
    return(document.getElementById(id))
}


chrome.storage.local.get(["colorchoice2","ancienlogoboul2", "autologin2","cacher2","timer2","timer22","ensemble","barresduhaut","barresduhaut1","barresduhaut3","barresduhaut4","import"], function(data) {





    if(data.import && window.location.href === 'https://moodle.ephec.be/my/index.php'){



        chrome.storage.local.get(['portalData','emojiValue'], function(result) {


            if (result.portalData){

                var temp = result.portalData

            }else {

                var temp =
                    [


                        {
                            "name": "Personnaliser Portal",
                            "enable": true,
                            "emoji": "✨",
                            "link": "personaliserPortal",
                            "use": 0,
                            "luse": "16/08/2024 14:30",
                            "pined": false
                        },
                        {
                            "name": "Importer mes cours Moodle",
                            "enable": true,
                            "emoji": "📥",
                            "link": "importMoodle",
                            "use": 0,
                            "luse": "16/08/2024 14:30",
                            "pined": false
                        },
                        {
                            "name": "Portal en plein écran",
                            "enable": true,
                            "emoji": "🪟",
                            "link": "portal.html",
                            "use": 0,
                            "luse": "16/08/2024 14:30",
                            "pined": false
                        },
                        {
                            "name": "Eperso",
                            "enable": true,
                            "emoji": "🏠",
                            "link": "https://eperso.ephec.be/",
                            "use": 0,
                            "luse": "16/08/2024 14:30",
                            "pined": false
                        },
                        {
                            "name": "Inscription PAE",
                            "enable": false,
                            "emoji": "📝",
                            "link": "https://eperso.ephec.be/HeInscriptionEnCours/Inscription",
                            "use": 0,
                            "luse": "16/08/2024 14:30",
                            "pined": false
                        },
                        {
                            "name": "Horaire cours",
                            "enable": true,
                            "emoji": "🕑",
                            "link": "https://eperso.ephec.be/HeHoraire/Horaire",
                            "use": 0,
                            "luse": "16/08/2024 14:30",
                            "pined": false
                        },
                        {
                            "name": "Horaire Examens",
                            "enable": false,
                            "emoji": "🏆",
                            "link": "https://eperso.ephec.be/HeInterrogationExamen/HoraireInterroExamen",
                            "use": 0,
                            "luse": "16/08/2024 14:30",
                            "pined": false
                        },
                        {
                            "name": "Fiches de Cours",
                            "enable": false,
                            "emoji": "📚",
                            "link": "https://eperso.ephec.be/HeFicheCours",
                            "use": 0,
                            "luse": "16/08/2024 14:30",
                            "pined": false
                        },
                        {
                            "name": "Presse",
                            "enable": false,
                            "emoji": "📰",
                            "link": "https://eperso.ephec.be/HePresse/Presse",
                            "use": 0,
                            "luse": "16/08/2024 14:30",
                            "pined": false
                        },
                        {
                            "name": "Calendrier Office",
                            "enable": true,
                            "emoji": "📅",
                            "link": "https://outlook.office.com/calendar/view/month",
                            "use": 0,
                            "luse": "2024-08-16T14:30:00",
                            "pined": false
                        },
                        {
                            "name": "Moodle",
                            "enable": true,
                            "emoji": "🧑‍🏫",
                            "link": "https://moodle.ephec.be/",
                            "use": 0,
                            "luse": "2024-08-16T14:30:00",
                            "pined": false
                        },
                        {
                            "name": "Moodle Calendar",
                            "enable": false,
                            "emoji": "📆",
                            "link": "https://moodle.ephec.be/calendar/view.php",
                            "use": 0,
                            "luse": "2024-08-16T14:30:00",
                            "pined": false
                        },
                        {
                            "name": "Ephec.be",
                            "enable": false,
                            "emoji": "🖥",
                            "link": "https://www.ephec.be/",
                            "use": 0,
                            "luse": "2024-08-16T14:30:00",
                            "pined": false
                        },
                        {
                            "name": "Mon mail",
                            "enable": true,
                            "emoji": "✉️",
                            "link": "https://outlook.office.com/mail/",
                            "use": 0,
                            "luse": "2024-08-16T14:30:00",
                            "pined": false
                        },
                        {
                            "name": "Mon OneDrive",
                            "enable": true,
                            "emoji": "☁️",
                            "link": "https://ephec-my.sharepoint.com/",
                            "use": 0,
                            "luse": "2024-08-16T14:30:00",
                            "pined": false
                        },
                        {
                            "name": "Teams",
                            "enable": true,
                            "emoji": "💬",
                            "link": "https://teams.microsoft.com/",
                            "use": 0,
                            "luse": "2024-08-16T14:30:00",
                            "pined": false
                        },
                        {
                            "name": "Bureaux Virtuels",
                            "enable": false,
                            "emoji": "💻",
                            "link": "https://vdi.ephec.be/uds/page/services",
                            "use": 0,
                            "luse": "2024-08-16T14:30:00",
                            "pined": false
                        },
                        {
                            "name": "Etat des services",
                            "enable": false,
                            "emoji": "📊",
                            "link": "https://status.ephec.be/",
                            "use": 0,
                            "luse": "2024-08-16T14:30:00",
                            "pined": false
                        },
                        {
                            "name": "Intranet prof. HE",
                            "enable": false,
                            "emoji": "🏫",
                            "link": "https://ephec.sharepoint.com/sites/Intranet",
                            "use": 0,
                            "luse": "2024-08-16T14:30:00",
                            "pined": false
                        },
                        {
                            "name": "Intranet prof. PS",
                            "enable": false,
                            "emoji": "🔐",
                            "link": "https://ephec.sharepoint.com/sites/Private/Intranetps/SitePages/Accueil.aspx",
                            "use": 0,
                            "luse": "2024-08-16T14:30:00",
                            "pined": false
                        },
                        {
                            "name": "Alumni",
                            "enable": false,
                            "emoji": "🎓",
                            "link": "https://ephec-alumni.be/",
                            "use": 0,
                            "luse": "2024-08-16T14:30:00",
                            "pined": false
                        },
                        {
                            "name": "Portail EPHEC",
                            "enable": false,
                            "emoji": "🔗",
                            "link": "https://portal.ephec.be/",
                            "use": 0,
                            "luse": "2024-08-16T14:30:00",
                            "pined": false
                        },
                        {
                            "name": "Quizlet",
                            "enable": false,
                            "emoji": "💯",
                            "link": "https://quizlet.com/",
                            "use": 0,
                            "luse": "2024-08-16T14:30:00",
                            "pined": false
                        },
                        {
                            "name": "Wallangues.be",
                            "enable": false,
                            "emoji": "🗣️",
                            "link": "https://www.wallangues.be/",
                            "use": 0,
                            "luse": "2024-08-16T14:30:00",
                            "pined": false
                        },
                        {
                            "name": "Wooclap",
                            "enable": false,
                            "emoji": "🎬",
                            "link": "https://app.wooclap.com/public",
                            "use": 0,
                            "luse": "2024-08-16T14:30:00",
                            "pined": false
                        },
                        {
                            "name": "Google Form",
                            "enable": false,
                            "emoji": "✍️",
                            "link": "https://docs.google.com/forms/",
                            "use": 0,
                            "luse": "2024-08-16T14:30:00",
                            "pined": false
                        },
                        {
                            "name": "Microsoft 365",
                            "enable": false,
                            "emoji": "🧩",
                            "link": "https://www.microsoft365.com/",
                            "use": 0,
                            "luse": "2024-08-16T14:30:00",
                            "pined": false
                        },
                        {
                            "name": "MS Form",
                            "enable": false,
                            "emoji": "✍️",
                            "link": "https://forms.office.com/",
                            "use": 0,
                            "luse": "2024-08-16T14:30:00",
                            "pined": false
                        },
                        {
                            "name": "Technofutur",
                            "enable": false,
                            "emoji": "🧮",
                            "link": "https://technofuturtic.be/login",
                            "use": 0,
                            "luse": "2024-08-16T14:30:00",
                            "pined": false
                        },
                        {
                            "name": "Ephec Stream",
                            "enable": true,
                            "emoji": "📺",
                            "link": "https://www.microsoft365.com/launch/stream",
                            "use": 0,
                            "luse": "2024-08-16T14:30:00",
                            "pined": false
                        },
                        {
                            "name": "MS Whiteboard",
                            "enable": false,
                            "emoji": "🪧",
                            "link": "https://whiteboard.office.com/",
                            "use": 0,
                            "luse": "2024-08-16T14:30:00",
                            "pined": false
                        },
                        {
                            "name": "Devweb",
                            "enable": false,
                            "emoji": "📟",
                            "link": "https://devweb.ephec.be/tp/",
                            "use": 0,
                            "luse": "2024-08-16T14:30:00",
                            "pined": false
                        }



                    ]

            }








            temp = temp.filter(item => item["pined"] === false)

            let carre = [ '🟥', '🟧', '🟨', '🟩', '🟦', '🟪']





            switch (result.emojiValue) {
                case "1":
                    //carre = [ '🟥', '🟧', '🟨', '🟩', '🟦', '🟪'];
                    break;

                case "2":
                    carre = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐸', '🐵', '🦄', '🦓', '🦒', '🦌', '🦬', '🦏', '🦛', '🦥', '🦦', '🦘', '🦚', '🦜', '🦢', '🦩', '🦤', '🦦', '🦖', '🐔', '🐧', '🦅', '🦆', '🦉', '🦜', '🦩', '🐦', '🐤', '🐓', '🐢', '🐍', '🐊', '🐸', '🐟', '🐠', '🐡', '🦈', '🐬', '🐳', '🐙', '🦑', '🦐', '🦞', '🐝', '🐛', '🦋', '🐌', '🐞', '🐉', '🐲'];
                    break;
                case "3":
                    carre = ['🍎', '🍏', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅'];
                    break;
                case "4":
                    carre = ['😀', '😂', '😊', '😍', '😎', '😡', '😱', '😭', '😴', '😜', '😇', '🤔', '🥳', '😞', '😤', '🤗', '😳', '🥶'];
                    break;
                case "5":
                    carre = ['🚗', '🚕', '🚙', '🚌', '🚎', '🏎️', '🚓', '🚑', '🚒', '🚐', '🚚', '🚛', '🚜', '🏍️', '🛵', '🚲', '🛺', '🚂', '✈️', '🚁', '🚤', '🛳️', '⛴️', '🚀'];
                    break;
                case "6":
                    carre = ['⚽', '🏀', '🏈', '⚾', '🎾', '🏐', '🏉', '🥏', '🏓', '🏸', '🏒', '🏑', '🏹', '🥊', '🥋', '🎳', '⛳', '🏌️', '🏇', '🧗', '🏂', '🧘', '🏄', '🚴', '🚵'];
                    break;
                case "7":
                    carre = ['🗺️', '🗽', '🗼', '🏰', '🏯', '🏝️', '🏜️', '🏞️', '🏖️', '🕌', '⛩️', '🛕', '🏛️', '🗿', '🏕️','🏢', '🏨', '🏦', '🏥', '✈️', '🚂', '🚢', '🚍', '🚌', '🚉'];
                    break;
                case "8":
                    carre = ['⭐', '🌟', '🌠', '🌌', '🌕', '🌙', '🌞', '🌈', '💫', '🪐', '🌍', '🌝', '🌑', '🌒', '🌓', '🌔', '🌕', '🌗', '🌘'];
                    break;
                case "9":
                    carre = ['🌹', '🌺', '🌻', '🌼', '🌷', '🌸', '🌼', '🌵', '🌴', '🌲', '🌳', '🌱', '🍀', '🍃', '🍂', '🍁', '🌿', '🎋'];
                    break;


                default: break;




            }







            //alert("importation")




            let compteur = 0
            let link,title,emoji
            let temp2 = {}

            document.querySelectorAll(".coursebox").forEach(element => {
                if(!element.parentNode.classList.contains("coc-hidden")){




                    link = (element.querySelector("a").href);
                    title = (element.querySelector("a").title);
                    title = title.split('[')[0].trim();




                    emoji = carre[compteur]
                    compteur++
                    if(compteur === carre.length-1){
                        compteur = 0
                    }



                    temp2 =             {
                        "name" : `${title}`,
                        "enable": true,
                        "emoji": `${emoji}`,
                        "link": `${link}`,
                        "use": 0,
                        "luse": "2024-08-16T14:30:00",
                        "pined": true
                    }

                    temp.push(temp2)




                }
            })


            chrome.storage.local.set({ import: false, portalData: temp }, function() {

                alert("L'importation des cours est terminée. Ils sont maintenant accessibles d'un clic à la suite de vos applications dans le portail de l'extension EPHEC Retro Color ! Personnalisez votre portal en masquant les cours dont vous n'avez pas besoin avec l'option 'Personnaliser Portal'.");

            });

        });


    }







    if (data.barresduhaut3 || data.barresduhaut){


                let bubbleDiv = document.createElement("div");


                bubbleDiv.id = "customBubble";

                bubbleDiv.innerText = "🏠";

                if(data.barresduhaut4 === false){bubbleDiv.style.display="block";}else{


                    document.addEventListener('mousemove', function(event) {



                        let bubble = document.getElementById('customBubble');


                        if (event.clientX < 100 && event.clientY < 200) {

                            bubble.style.display = 'block';
                        } else {

                            bubble.style.display = 'none';
                        }
                    });

                }




                document.body.appendChild(bubbleDiv);



                if(window.location.href == 'https://moodle.ephec.be/my/courses.php' || window.location.href == 'https://moodle.ephec.be/auth/oidc/' || window.location.href == 'https://moodle.ephec.be/my/'){

                    gid('customBubble').addEventListener("click", function () {

                        window.location.href = 'https://moodle.ephec.be/?redirect=0'

                    });

                }else{

                if(data.ensemble){

                    gid('customBubble').addEventListener("click", function () {

                        window.location.href = 'https://moodle.ephec.be/my/courses.php'

                    });



                }else{


                    gid('customBubble').addEventListener("click", function () {

                        window.location.href = 'https://moodle.ephec.be/auth/oidc/'

                    });




                }}




        }



        if(data.autologin2 != false && window.location.href === "https://moodle.ephec.be/login/index.php"){

            window.location.href = 'https://moodle.ephec.be/auth/oidc/';
            return

        }

        if (data.cacher2!=true){

            if (data.ancienlogoboul2==true){


                let newFaviconURL = chrome.runtime.getURL('favicon.ico');

                //console.log(newFaviconURL)
                let favicon = document.querySelector("link[rel~='icon']");
                favicon.href = newFaviconURL;
            }



        }else{


            if (window.location.href === "https://moodle.ephec.be/my/" || window.location.href === "https://moodle.ephec.be/my/index.php" || window.location.href === "https://moodle.ephec.be/my/courses.php"){
                let poire3 = document.getElementById("sitetitle");
                poire3.style.display = 'none';

            }
        }


    //redirection vers l'ensemble des cours

        if (window.location.href === "https://moodle.ephec.be/my/" || window.location.href === "https://moodle.ephec.be/my/index.php" && !data.import){


            if (data.ensemble){

                window.location.href = 'https://moodle.ephec.be/my/courses.php';


            }


        }






        if (data.barresduhaut1 || data.barresduhaut){

            let barre = document.getElementById("header1")
            //let barre2 = document.getElementById("adaptable-page-header-wrapper")

            if (window.location.href === "https://moodle.ephec.be/?redirect=0"){
                barre.style.display = 'inline'
            }

            //if (barre2){
                //barre2.style.display = 'none'
            //}

        }


        if (window.location.href === 'https://moodle.ephec.be/my/courses.php'){
            let temp = document.querySelector("img[title='Montrer le bloc Vue d’ensemble des cours']")

            if (temp){
                temp.click()
            }
        }


        if(data.timer22 && data.timer2 === false && gid("quiz-time-left")){

            let timer = gid("quiz-time-left")

            chrome.storage.local.get(["timer222"], function(data) {

                if (data.timer222){timer.style.display = 'none'}
            })


            gid("quiz-timer").addEventListener('click', function(){


                if(timer.style.display === 'none'){
                    timer.style.display = 'inline'
                    chrome.storage.local.set({ timer222: false }, function() {});
                }else{timer.style.display = 'none'
                    chrome.storage.local.set({ timer222: true }, function() {});}

            })

        }




})
