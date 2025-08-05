//ce .js est lié à l'eperso

//variable pour les couleurs

let couleur2 = "#fd7e14"


//selection de 2 éléments

let poire = document.querySelector('.logo-ephec-eperso');




chrome.storage.local.get(["horaire","ancienlogoboul","randomname","cacher","modeProf"], function(data) {




        //redirection

        if(data.horaire == true && window.location.href === "https://eperso.ephec.be/"){

            if (data.modeProf == true){
                window.location.href = 'https://eperso.ephec.be/ProfHoraire/Horaire';
                return

            }else{
                window.location.href = 'https://eperso.ephec.be/HeHoraire/Horaire';
                return
            }


        }







        //changement logo

        if(data.ancienlogoboul != false && data.cacher == false){
            //poire.src = chrome.runtime.getURL('icon2.png');

            //poire.style.display = 'inline';


            //pour le favicon
            let newFaviconURL = chrome.runtime.getURL('favicon.ico');

            console.log(newFaviconURL)
            let favicon = document.querySelector("link[rel~='icon']");
            favicon.href = newFaviconURL;


            //favicon.href = 'https://portal.ephec.be/favicon.ico';

        }





        //changement de nom aléatoire


        let rand = data.randomname;

        if(rand == true){
            let customdiv = document.querySelector('.divwelcom');

            const personnages = [
                "POTTER Harry",
                "VADER Dark",
                "OURSON Winnie",
                "SUPER Mario",
                "BOND James",
                "SIMPSON Homer",
                "CROFT Lara",
                "MOUSE Mickey",
                "CRUCHOT Ludovic",
                "JOBS Steve",
                "MUSK Elon",
                "MR Bean",
                "EPONGE Bob",
                "OBAMA Barack",
                "VAN LAEKEN Angèle",
                "KALUBI MWAMBA William",
                "TESLA Nikola",
                "MONROE Marilyn",
                "DAMIENS François",
                "BREL Jacques",
                "GATES Bill",
                "TINTIN",
                "VAN DAMME Jean-Claude",
                "SCHTROUMPF Le grand",
                "MANNEKEN Pis",
                "CURIE Marie",
                "NIETZSCHE Friedrich",
                "EINSTEIN Albert",
                "JACKSON Michael",
                "SCOOBY-Doo",
                "DUCK Donald",
                "LUCKY Luke",


            ];

            let personnageaupif = personnages[Math.floor(Math.random() * personnages.length)];


            customdiv.innerHTML = "Bienvenue " + personnageaupif + " !"



            customdiv.style.display = 'inline';








            //poire.src = chrome.runtime.getURL('icon2.png');


        }



        //console.log(ancienlogo);



        //document.getElementById("sidebar").style.backgroundColor = couleur2;




        //fin de l'appel chrome
    }

);


if (window.location.href === "https://eperso.ephec.be/Error/ShowError"){

    document.querySelector('.container h3').innerHTML = "<span style=\"color:red;\">Erreur - Message extension Ephec retro color : Si vous utilisez l'affichage des horaires à la connexion, modifiez la configuration pour basculer entre le mode professeur et élève. Pour ce faire, ouvrez l'extension, allez dans les paramètres en haut à gauche, et cochez ou décochez le mode enseignant.</span>";


}






