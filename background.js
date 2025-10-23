/*
 * Ce projet a été réalisé dans un but d'amusement et d'apprentissage personnel, 
 * sans objectif de performance ou de notation. 
 * Je suis conscient que le code est perfectible et qu'il contient des redondances. 
 * Il pourrait être optimisé et mieux structuré.
 * 
 * Ce projet a évolué au fur et à mesure de mon apprentissage de JavaScript et de la manipulation du DOM.
 * J'ai choisi de ne pas obfusquer le code pour garder une transparence totale, 
 * même si je reconnais que le code n'est pas parfaitement lisible car je suis le seul à l'utiliser.
 * 
 * Si je devais refaire ce projet, je m'efforcerais d'améliorer sa structure et son optimisation. 
 * En l'état, il représente avant tout un terrain d'expérimentation et de découverte.
 */




//fonction utile

function gid(id){
    return(document.getElementById(id))
}

function gcss(id){
    return(document.querySelector(id))
}








//affichage du logo

function affichageDuLogo(){

    document.getElementById('iconpop').src = chrome.runtime.getURL('icon.png');

    document.getElementById('iconpopset').src = chrome.runtime.getURL('icon3.png');



}

affichageDuLogo();




//affiche du portal



let portal = document.getElementById('Form33');

function makePortal(portalData){


    setBigPortal()






    //console.log("portal saved");




    document.querySelectorAll(".portalEditHTML").forEach(element => {
        element.removeEventListener("click", function() {

            makePortal(portalData);

        })
    })




    //gid("portalEditHTML").style.display = "none"
    document.querySelectorAll(".portalEditHTML").forEach(element => {
        element.style.display = "none";
    })

    portal.innerHTML = "";

    let temp99

    //console.log(portalData)

    portalData.sort((a, b) => {
        if (a.enable === b.enable) {
            return 0;
        }
        return a.enable ? -1 : 1;
    });





    for (let i of portalData) {

        if(i){


        if (i.name === "Personnaliser Portal" && i["enable"])
        {
            portal.innerHTML += "<a class=\"ElemPortal\" id='portalSetting'>" + "<h3>" + i.name + "</h3><h2>" + i.emoji + "</h2></a>"
        }else if (i.name === "Importer mes cours Moodle" && i["enable"]){


            portal.innerHTML += "<a class=\"ElemPortal\" id='portalImport'>" + "<h3>" + i.name + "</h3><h2>" + i.emoji + "</h2></a>"



        } else if (i["enable"]){

            if (i.name.length > 25) {
                temp99 = i.name.substring(0, 20) + "...";
            }else{
                temp99 = i.name
            }





            portal.innerHTML += "<a class=\"ElemPortal\" href=\'" + i["link"] + "\' target=\"_blank\">" + "<h3>" + temp99 + "</h3><h2>" + i.emoji + "</h2></a>"
        }
        }



    }

    if (gid("modeProf").checked && document.querySelector(".ElemPortal[href='https://eperso.ephec.be/HeHoraire/HoraireV2']")){

        document.querySelector(".ElemPortal[href='https://eperso.ephec.be/HeHoraire/HoraireV2']").href = "http://eperso.ephec.be/ProfHoraire/Horaire"

    }

    if (document.querySelector("#portalSetting")){

        document.querySelector("#portalSetting").addEventListener("click", function() {

            PortalEdit(portalData);


        })

    }


    if (document.querySelector("#portalImport")){

        document.querySelector("#portalImport").addEventListener("click", function() {
            portalImportWarning("Ephec Retro Color va importer vos cours depuis Moodle afin de créer des raccourcis directement accessibles depuis le portal pour les cours de votre choix. ⚠️ Assurez-vous d'être bien connecté à Moodle.","💡 Note : Si vous avez déjà importé vos cours depuis Moodle, les anciens cours seront remplacés par les nouveaux.","Annuler","Importer",function (){


                var emojiValue = gid("emojiSelector").value




                chrome.storage.local.set({
                    import: true,
                    emojiValue: emojiValue
                }, function() {

                    window.open('https://moodle.ephec.be/my/index.php', '_blank');


                });


            })
        })
    }

    function portalImportWarning(t,t2,b1,b2,fun){

        gid("popupPourFonction").style.display = "";
        gid("Popup2backscreen").style.display = "";
        gcss("#h3un").innerText = t;
        gcss("#h3deux").innerText = t2;
        gid("popupAnnuler").innerText = b1;
        gid("popupValider").innerText = b2;

        function hiddepop(){
            gid("popupPourFonction").style.display = "none";
            gid("Popup2backscreen").style.display = "none";

            gid("popupAnnuler").removeEventListener("click", hiddepop)

            gid("Popup2backscreen").removeEventListener("click", hiddepop)

            gid("popupValider").removeEventListener("click", fun)

        }

        gid("popupAnnuler").addEventListener("click", hiddepop)

        gid("Popup2backscreen").addEventListener("click", hiddepop)


        gid("popupValider").addEventListener("click", fun)



    }





    document.querySelectorAll('.ElemPortal').forEach(element => {
        element.addEventListener('dragstart', event => event.preventDefault());
    });

}



let eventListerchecker = true





function PortalEdit(portalData){



    document.querySelectorAll('.ElemPortal').forEach(element => {
        element.removeEventListener('dragstart', event => event.preventDefault());
    });

    document.querySelectorAll(".portalEditHTML, #portalSettings").forEach(element => {
        element.style.display = "";
    })




    let temp, temp99

    portal.innerHTML = ""


    for (let i of portalData) {

        if(i){


        if(i.name == "Personnaliser Portal"){

            portal.innerHTML += "<a class=\"ElemPortal2\" data-link='personaliserPortal' data-nom='" + i.name + "' draggable=\"true\">" + "<h3>" + i.name + "</h3><h2>" + i.emoji + "</h2></a>";




        }else{


            if (i.name.length > 25) {
                temp99 = i.name.substring(0, 22) + "...";
            }else{
                temp99 = i.name
            }

            let safeName = i.name.replace(/'/g, "&#39;").replace(/"/g, "&quot;");






            if (i["enable"]){temp = "checked"}else{temp = ""}

            portal.innerHTML += "<a class=\"ElemPortal2\""  + " data-link='" + i.link +"'"  + " data-nom=\'" + safeName + "\' draggable=\"true\">" + "<h3>" + temp99 + "</h3><h2>" + i.emoji + "</h2><input type='checkbox' " + temp +"></a>"



        }
        }



    }

    if (eventListerchecker) {

        document.querySelectorAll(".portalEditHTML").forEach(element => {
            element.addEventListener("click", function() {

                chrome.storage.local.get(['portalData'], function(data) {
                    if (!data.portalData || data.portalData.length === 0) {
                        makePortal(portalData);
                    } else {
                        makePortal(data.portalData);
                    }
                });

                document.getElementById("portalSettings").style.display = "none"




            })


        })




    }


    function test3(){


        chrome.storage.local.get(['portalData'], function(data) {
            if (!data.portalData || data.portalData.length === 0) {
                makePortal(portalData);
            } else {
                makePortal(data.portalData);
            }
        });

        gid("iconpop").classList.remove('hide')
        gid("titre").classList.remove('hide')
        gid("radio").classList.remove('radio-inputs-small')

        gid("iconpopset").removeEventListener('click', test3)


    }

        gid("iconpopset").addEventListener('click', test3)





        function test2(){


            chrome.storage.local.get(['portalData'], function(data) {


                if (!data.portalData || data.portalData.length === 0) {
                    makePortal(portalData);
                } else {
                    makePortal(data.portalData);
                }
            });





            gid("radio").removeEventListener('click', test2)


        }



        gid("radio").addEventListener('click', test2)


        document.querySelectorAll('#Form33 .ElemPortal2').forEach(elem => {
            elem.addEventListener('dragstart', () => {
                elem.classList.add('dragging');
            });

            elem.addEventListener('dragend', () => {
                elem.classList.remove('dragging');
                saveAfterDrop()
            });
        });

        let container = document.getElementById('Form33');

        container.addEventListener('dragover', (e) => {
            e.preventDefault(); // Empêche le comportement par défaut pour permettre le drop

            let afterElement = getDragAfterElement(container, e.clientY);
            let draggingElement = document.querySelector('.dragging');

            if (afterElement == null) {
                container.appendChild(draggingElement);
            } else {
                container.insertBefore(draggingElement, afterElement);
            }
        });


    function saveAfterDrop() {

        let temp = document.querySelectorAll('.ElemPortal2');


        let newOrder = [];


        for (let i of temp) {
            newOrder.push(i.dataset.link);
        }

        portalData = portalData.filter(element => element !== null);


        portalData = newOrder.map(name => {
            return portalData.find(item => item.link === name);
        });



        chrome.storage.local.set({ portalData: portalData }, function() {

        });



    }








        function getDragAfterElement(container, y) {//utilisation de gpt 4 pour cette fonction
            const draggableElements = [...container.querySelectorAll('.ElemPortal2:not(.dragging)')];

            return draggableElements.reduce((closest, child) => {
                const box = child.getBoundingClientRect();
                const offset = y - box.top - box.height / 2;

                if (offset < 0 && offset > closest.offset) {
                    return { offset: offset, element: child };
                } else {
                    return closest;
                }
            }, { offset: Number.NEGATIVE_INFINITY }).element;
        }








    document.querySelectorAll("#Form33 input").forEach(e => {
            e.addEventListener("change", ee => {

                let temp = ee.target.parentElement.getAttribute('data-link');


                let temp2 = portalData.find(item => item.link === temp);
                //console.log(temp)
                if(temp2.enable){
                    temp2.enable = false

                }else{temp2.enable = true}

                print(temp2)

                //console.log(portalData)

                chrome.storage.local.set({ portalData: portalData }, function() {

                });


            })


        })



        eventListerchecker = false




}



//PortalEdit()






//sélection du titre pour s'en servir d'afficheur d'info psq pourquoi pas ?

let maintitle = document.getElementById("titre")

let lastradiobutton = "eperso"

let horairerac

//radio sélection de la session 
document.getElementById('radio').addEventListener('mouseover', function() {
    maintitle.innerText = "Recliquez pour accéder au site"

  });

  document.getElementById('radio').addEventListener('mouseout', function() {
    maintitle.innerText = "Ephec Retro Color"

  });


  document.getElementById('modeProfexplication').addEventListener('mouseover', function() {
    maintitle.innerText = "Adaptation des redirections"

  });

  document.getElementById('modeProfexplication').addEventListener('mouseout', function() {
    maintitle.innerText = "Ephec Retro Color"

  });

  let notifactif


  //radio sélection de la session 
document.getElementById('message').addEventListener('mouseover', function() {
    document.getElementById('notif2').style.display='block'

    notifactif = document.getElementById('notif').style.display;

    document.getElementById('notif').style.display='none'
    document.getElementById('refresh').style.display='none'

  });

  document.getElementById('message').addEventListener('mouseout', function() {
    document.getElementById('notif2').style.display ='none'
    document.getElementById('notif').style.display = notifactif
    document.getElementById('refresh').style.display = notifactif


  });

  function removeBigPortal(){

      gid("iconpop").classList.remove('hide')
      gid("titre").classList.remove('hide')
      gid("radio").classList.remove('radio-inputs-small')

  }

  function setBigPortal(){
      if (gid("hideLogoPortal").checked && document.querySelector('#radio input:checked').id === "portal"){
          gid("iconpop").classList.add('hide')
          gid("titre").classList.add('hide')
          gid("radio").classList.add('radio-inputs-small')
          gid("ascen2").classList.add('ascenseur2-big')

      }else{

          gid("iconpop").classList.remove('hide')
          gid("titre").classList.remove('hide')
          gid("radio").classList.remove('radio-inputs-small')
          gid("ascen2").classList.remove('ascenseur2-big')

      }
  }


  function setInterface() {
    //alert(this.id)
    if (this.id==lastradiobutton){
        switch(this.id){
            case "eperso":
                if (horairerac == true){
                    if(horaireracprof == true){
                        window.open('https://eperso.ephec.be/ProfHoraire/Horaire', '_blank');
                    }else{
                        window.open('https://eperso.ephec.be/HeHoraire/HoraireV2', '_blank');

                    }
        
                }else{
                    window.open('https://eperso.ephec.be/', '_blank');
                }

                break;
            case "moodle":
                if (horairerac2 == true){
                    window.open('https://moodle.ephec.be/my/courses.php', '_blank');
                }else{
                    window.open('https://moodle.ephec.be/my/', '_blank');
                }
                break;
            case "portal":
                window.open('portal.html', '_blank');
                break;
        }
        return
    }
    lastradiobutton = this.id
    if (this.id == "eperso"){
        gid("iconpop").classList.remove('hide')
        gid("titre").classList.remove('hide')
        document.body.style.backgroundColor = '#fd7e14'
        document.getElementById("Form1").style.display = 'inline'
        document.getElementById("Form2").style.display = 'none'
        document.getElementById("Form3").style.display = 'none'
        document.getElementById("style-1").style.display = ''
        document.getElementById("fullFormPortal").style.display = 'none'
        document.getElementById("link").href = "https://eperso.ephec.be/"
        gid("notifrefeshMain").style.display = 'flex'
        gid("portalSettings").style.display = 'none'
        gid("radio").classList.remove('radio-inputs-small')
    }else if(this.id == "moodle"){
        gid("iconpop").classList.remove('hide')
        gid("titre").classList.remove('hide')
        document.body.style.backgroundColor = '#31999a'
        document.getElementById("Form1").style.display = 'none'
        document.getElementById("Form2").style.display = 'inline'
        document.getElementById("Form3").style.display = 'none'
        document.getElementById("style-1").style.display = ''
        document.getElementById("fullFormPortal").style.display = 'none'
        document.getElementById("link").href = "https://moodle.ephec.be/my/"
        gid("notifrefeshMain").style.display = 'flex'
        gid("portalSettings").style.display = 'none'
        gid("radio").classList.remove('radio-inputs-small')
    }else if(this.id == "portal"){
        document.body.style.backgroundColor = '#7986b5'
        document.getElementById("Form1").style.display = 'none'
        document.getElementById("Form2").style.display = 'none'
        document.getElementById("style-1").style.display = 'none'
        document.getElementById("Form3").style.display = 'inline'
        document.getElementById("fullFormPortal").style.display = ''
        document.getElementById("link").href = "https://portal.ephec.be"
        gid("notifrefeshMain").style.display = 'none'

        setBigPortal()


    }
}
  
  


document.querySelectorAll('input[type="radio"][name="radio"]').forEach(radio => {
    radio.addEventListener('click', setInterface);
  });
  
  
//affichage des préférences
var settingMenu = false

document.getElementById("setting").addEventListener('click', showpreference);
document.getElementById("retour").addEventListener('click', showpreference);


function showpreference() {

    removeBigPortal()


    if (settingMenu == false){
        document.getElementById("style-1").style.display = ''
        document.getElementById("fullFormPortal").style.display = 'none'
        //document.body.style.backgroundColor = '#97B8A3';
        //document.body.style.backgroundColor = '#34a853';
        document.body.style.backgroundColor = '#fd7e14' //bon vieux orange
        document.getElementById("link").href = "https://eperso.ephec.be/"
        gid("notifrefeshMain").style.display = 'flex'
        gid("portalSettings").style.display = 'none'






        settingMenu=true
        

        document.getElementById("radio").style.display = 'none'
        document.getElementById("Form1").style.display = 'none'
        document.getElementById("Form2").style.display = 'none'
        document.getElementById("Form3").style.display = 'none'
        document.getElementById("Form4").style.display = 'inline'

    }else{
        settingMenu=false
        document.getElementById("radio").style.display = ''
        document.getElementById("Form4").style.display = 'none'
        


        document.body.style.backgroundColor = '#fd7e14'
        document.getElementById("Form1").style.display = 'inline'
        document.getElementById("Form2").style.display = 'none'
        document.getElementById("Form3").style.display = 'none'



        document.getElementById("eperso").checked = true;
        lastradiobutton="eperso"



        



    }
    
}







//check ou pas check dans le html ancien logo??

//restore dans le form les settings
//                      eperso                                                                          moodle
chrome.storage.local.get(["ancienlogoboul","randomname","colorchoice","menuu","horaire","cacher","dark","ancienlogoboul2","colorchoice2","cacher2","autologin2","timer2","timer22","ensemble","barresduhaut","barresduhaut1","barresduhaut2","barresduhaut3","barresduhaut4","modeProf","portalAuLancement","portalData","hideAcces","pied","hideLogoPortal","userVersion"], function(data) {


    if(!data.userVersion){

        function tuto1() {



        gid("welcomdiv").style.display = ''

        gid("tuto1").src = chrome.runtime.getURL('tuto1.gif')

        gid("tuto1").addEventListener('click', function() {
            alert("ceci est une image de démo et n'est pas cliquable!")

        });

        gid("tutob1").addEventListener('click', tuto2)

        function tuto2(){
            gid("tutob1").removeEventListener('click', tuto2)

            gid("tuto1").src = chrome.runtime.getURL('tuto4.gif')

            //gid("tuto1").style.width = 250;

            gid("tutoP1").style.display = 'none'

            gid("tutoTitle").classList.add("plusPetitTexte")
            gid("tutoP2").classList.add("plusPetitTexte")

            gid("tutoTitle").innerText = 'Le portal vous permet de lancer vos applications et vos cours Moodle en deux clics depuis un seul endroit.'

            gid("tutoP2").innerText = ' 💡 Pour afficher une application ou un cours, appuyez sur \'Personnaliser Portal\', faites défiler vers le bas, cochez ce qui vous intéresse, puis appuyez sur \'Terminer\'.'


            gid("tutob1").addEventListener('click', tuto3)


        }

        function tuto3(){

            gid("tutob1").removeEventListener('click', tuto3)
            gid("tuto1").src = chrome.runtime.getURL('tuto5.gif')

            gid("tutoP2").innerHTML = "Pour déplacer un élément du portail, appuyez sur 'Personnaliser Portal', cliquez et maintenez l'élément,  et faites-le glisser à l'endroit souhaité." + "<br><br>" + " 💡 Vous pouvez importer vos cours Moodle en cliquant sur 'Importer mes cours Moodle'."

            gid("tutoTitle").innerText = ""



            gid("tuto1").classList.add("tuto11")
            gid("tutoP2").classList.add("viveLeCss")


            gid("tutob1").addEventListener('click', tuto4)


        }


        function tuto4(){
            gid("tutob1").removeEventListener('click', tuto4)

            gid("tuto1").style.display = 'none'

            gid("tutob1").innerText = 'Allons-y 😊 !'


            gid("tutoP2").innerText = "Aucune donnée n'est collectée ; la sauvegarde se fait localement sur votre appareil. Tous les scripts qui modifient vos pages EPHEC sont visibles et lisibles."

            gid("tutob1").addEventListener('click', function () {

                gid("welcomdiv").style.display = 'none'


                chrome.storage.local.set({ userVersion: 1.4 }, function() {});



            })



        }

        }

        tuto1()


    }


    //changement ouverture par défautl

    if(data.portalAuLancement){
        gid("portal").click()
        setTimeout(function() {
            document.body.style.transition = "background-color 0.5s ease";
        }, 0);}else{document.body.style.transition = "background-color 0.5s ease";}




    if (data.ancienlogoboul) {
        document.getElementById('ancienlogobox').checked = true;
    }else{
        document.getElementById('ancienlogobox').checked = false;

    }

    if (data.portalData) {

        let portalData = data.portalData

        makePortal(portalData)






    } else {

        let portalData= [


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
                "link": "https://eperso.ephec.be/HeHoraire/HoraireV2",
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
        ;

        makePortal(portalData)


    }





    //la fonction ne fonctione pas car id dans le form différent

    if (data.ancienlogoboul2 == true) {
        document.getElementById('ancienlogobox2').checked = true;
    }else{
        document.getElementById('ancienlogobox2').checked = false;

    }

    horairerac = data.horaire
    horairerac2 = data.ensemble
    horaireracprof = data.modeProf


    //check ou pas check dans le html randomname

    if (data.randomname == true) {
        document.getElementById('randomname').checked = true;
    }else{
        document.getElementById('randomname').checked = false;

    }

    //couleur custom du color piker
    



    let pommes = data.colorchoice;

    if (data.colorchoice == undefined) {
    }else{
        document.getElementById('colorPicker').value = pommes;

    }


    let pommes2 = data.colorchoice2;

    if (data.colorchoice2 == undefined) {
    }else{
        document.getElementById('colorPicker2').value = pommes2;

    }





    //déclaration de la fonction pour ne plus copier coller


    function restore(element2){




            if (data[element2] == true) {
                document.getElementById(element2).checked = true;
                
            }else{
                document.getElementById(element2).checked = false;
                //console.log("coucou")
        
            }


    }
    //console.log(data)


    restore("menuu")
    restore("horaire")
    restore("cacher")
    //restore("ancienlogoboul2") erreur d'id car dans le form à un nom différent
    //restore("colorchoice2") même chose que la ligne au dessus
    restore("cacher2")
    restore("autologin2")


    //restore("colorchoice3")
    restore("timer2")
    restore("timer22")
    restore("barresduhaut")
    restore("barresduhaut1")
    restore("barresduhaut2")
    restore("barresduhaut3")
    restore("barresduhaut4")
    restore("ensemble")
    restore("modeProf")
    restore("portalAuLancement")
    restore("dark")

    restore("hideAcces")

    restore("pied")

    restore("hideLogoPortal")

    setBigPortal()

    if (gid("modeProf").checked && document.querySelector(".ElemPortal[href='https://eperso.ephec.be/HeHoraire/HoraireV2']")){

        document.querySelector(".ElemPortal[href='https://eperso.ephec.be/HeHoraire/HoraireV2']").href = "http://eperso.ephec.be/ProfHoraire/Horaire"

    }





    //désactivation/activation du ancien logo si le logo est caché
    if (data.cacher == true){
        document.getElementById('ancienlogobox').disabled = true;



    }else{
        document.getElementById('ancienlogobox').disabled = false;

    }

    disablerEnabler()


    function disablerEnabler(){

        if (data.timer2){
            document.getElementById('timer22').disabled = true;



        }else{
            document.getElementById('timer22').disabled = false;

        }


        if (data.barresduhaut) {
            document.getElementById('barresduhaut1').disabled = true;
            document.getElementById('barresduhaut2').disabled = true;
            document.getElementById('barresduhaut3').disabled = true;



        }else{
            document.getElementById('barresduhaut1').disabled = false;
            document.getElementById('barresduhaut2').disabled = false;
            document.getElementById('barresduhaut3').disabled = false;

        }


    }



    
    let cacher22 = document.getElementById('cacher2').checked;

    //désactivation/activation du ancien logo
    if (cacher22 == true){
        document.getElementById("ancienlogobox2").disabled = true;



    }else{
        document.getElementById("ancienlogobox2").disabled = false;

    }





    //fin de l'appel chrome
});
















//mise en fonction pour tenter de pas devoir faire 1000 copier coller





//la fonction fonctionne






//reset la valeur par default du color picker


document.getElementById('resetpicker').addEventListener('click', function() {
    
    document.getElementById('colorPicker').value = "#000000";
    test()
});


document.getElementById('resetpickerOld').addEventListener('click', function() {

    document.getElementById('colorPicker').value = "#fd7e14";
    test()
});


document.getElementById('resetpicker2').addEventListener('click', function() {
    
    document.getElementById('colorPicker2').value = "#0d3742";
    test()
});




document.getElementById('randompicker').addEventListener('click', function() {
    
    document.getElementById('colorPicker').value = generateRandomColor()
    test()
});

document.getElementById('randompicker2').addEventListener('click', function() {
    
    document.getElementById('colorPicker2').value = generateRandomColor()
    test()
});




//gestion du form du pop


//event listenver pour la sauvegarde automatique

function addAlleventListerForSave() {


    let inputs = document.querySelectorAll('#Form1 input');

    for (let i of inputs){
        i.addEventListener("change",test)
    }

    let inputs2 = document.querySelectorAll('#Form2 input');

    for (let i of inputs2){
        i.addEventListener("change",test)
    }

    let inputs3 = document.querySelectorAll('#portalSettings input');

    for (let i of inputs3){
        i.addEventListener("change",test)
    }



    let inputs4 = document.querySelectorAll('#Form4 input');

    for (let i of inputs4){
        i.addEventListener("change",test)
    }
}

addAlleventListerForSave()




//ces lignes ne sont plus nécessaire car je fais appel à test directement
//let pick =document.getElementById("resetpicker")
//pick.addEventListener("click",test)

//let randomcolor =document.getElementById("randompicker")
//randomcolor.addEventListener("click",mafonctionpourlacouleur())


//let pick2 =document.getElementById("resetpicker2")
//pick.addEventListener("click",test)


//la fonction en dessous vient d'internet
function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function saveCSS(css) {
    chrome.storage.local.set({ customCSS: css }, function() {//je sauvegarde le code css en local pour l'opti
    });
}


function saveCSS2(css) {
    chrome.storage.local.set({ customCSS2: css }, function() {//je sauvegarde le code css en local pour l'opti
    });
}




function test(){//fonction qui est en fait la fonction de sauvegarde


    //desable enable

    if (document.getElementById('timer2').checked){
        document.getElementById('timer22').disabled = true;



    }else{
        document.getElementById('timer22').disabled = false;

    }

    if (document.getElementById('barresduhaut').checked) {
        document.getElementById('barresduhaut1').disabled = true;
        document.getElementById('barresduhaut2').disabled = true;
        document.getElementById('barresduhaut3').disabled = true;



    }else{
        document.getElementById('barresduhaut1').disabled = false;
        document.getElementById('barresduhaut2').disabled = false;
        document.getElementById('barresduhaut3').disabled = false;

    }

    //console.log("aaaaaaaaaaa")
    //e.preventDefault(); // Empêche le rechargement de la page sinon le pop se barre

    //notification de sauvegarde & lien de refresh
    let aa = document.getElementById("notif");
    let aa2 = document.getElementById("refresh");
    aa.style.display='block'
    aa2.style.display='block'

    //fix conflix d'affichage

    document.getElementById('notif2').style.display='none'


    //!!!!!PARTIE EPERSO!!!!!!!!

    //logo
    let ancienlogoboul = document.getElementById('ancienlogobox').checked;
    //colorpick
    let colorchoice = document.getElementById('colorPicker').value;

    //menu
    let menuu = document.getElementById('menuu').checked;

    //save randomname value
    let randomname = document.getElementById('randomname').checked;


    //redirection horaire

    let horaire = document.getElementById('horaire').checked;

    //cacher le logo

    let cacher = document.getElementById('cacher').checked;

    //désactivation/activation du ancien logo
    if (cacher == true){
        document.getElementById('ancienlogobox').disabled = true;



    }else{
        document.getElementById('ancienlogobox').disabled = false;

    }


    let cacher22 = document.getElementById('cacher2').checked;

    //désactivation/activation du ancien logo
    if (cacher22 == true){
        document.getElementById("ancienlogobox2").disabled = true;



    }else{
        document.getElementById("ancienlogobox2").disabled = false;

    }







    let dark = document.getElementById('dark').checked;







    //!!!!!PARTIE MOODLE!!!!!!!!

        //logo
        let ancienlogoboul2 = document.getElementById('ancienlogobox2').checked;
        //colorpick
        let colorchoice2 = document.getElementById('colorPicker2').value;

        //cacher le logo

        let cacher2 = document.getElementById('cacher2').checked;

        //moodle autologin

        let autologin2 = document.getElementById('autologin2').checked;

        let timer2 = document.getElementById('timer2').checked;

    let timer22 = document.getElementById('timer22').checked;

        //moodle barre du haut & vue d'ensemble

        let ensemble = document.getElementById('ensemble').checked;

        let barresduhaut = document.getElementById('barresduhaut').checked;
        let barresduhaut1 = document.getElementById('barresduhaut1').checked;
        let barresduhaut2 = document.getElementById('barresduhaut2').checked;
        let barresduhaut3 = document.getElementById('barresduhaut3').checked;
    let barresduhaut4 = document.getElementById('barresduhaut4').checked;



    //!!!!!PARTIE PORTAL!!!!!


        //logo
        //colorpick


        //cacher le logo

    

    //!!!!!PARTIE SETTINGS!!!!!


    let modeProf = document.getElementById('modeProf').checked;



    let portalAuLancement = document.getElementById('portalAuLancement').checked;

    let hideAcces = document.getElementById('hideAcces').checked;

    let pied = document.getElementById('pied').checked;


    let hideLogoPortal = document.getElementById('hideLogoPortal').checked;






    
    // Sauvegarde
    chrome.storage.local.set({
         "ancienlogoboul": ancienlogoboul,//values for eperso
         "menuu": menuu,
         "colorchoice": colorchoice,
         "randomname": randomname,
         "horaire" : horaire,
         "cacher" : cacher,
        "dark" : dark,
         "ancienlogoboul2":ancienlogoboul2,//values for moodle
         "colorchoice2":colorchoice2,
         "cacher2":cacher2,
         "ensemble":ensemble,
         "barresduhaut":barresduhaut,
        "barresduhaut1":barresduhaut1,
        "barresduhaut2":barresduhaut2,
        "barresduhaut3":barresduhaut3,
        "barresduhaut4":barresduhaut4,
         "autologin2":autologin2,
         "timer2":timer2,
        "timer22":timer22,
        "hideAcces":hideAcces,
        "pied":pied,
        "hideLogoPortal":hideLogoPortal,
         "modeProf":modeProf,//values for settings
        "portalAuLancement":portalAuLancement

        }, function() {
        //console.log(cacher);
        
    });


    //Aout 2024 utilisation de la technique css + opti

    //CSS custom pour l'eperso

    let ancienlogoboultemp = ''

    let newImageURL = chrome.runtime.getURL('icon2.png');


    if (ancienlogoboul){

        ancienlogoboultemp = `

    
    #logo-ephec {
        data: url('${newImageURL}') !important;

    }
`;

    }


    let cacherTemp;//masquage du logo

    if (cacher) {
        cacherTemp = 'display: none;'
    } else {
        cacherTemp = 'display:inline';
    }


    let welcomTemp;

    if(randomname){
        welcomTemp = 'display:none';
    }else{
        welcomTemp = 'display:inline'
    }


    let menuTemp = '';

    if (menuu) {
        menuTemp = `
        body #heinscriptionsub li a,
        body #hehorairesub li a,
        body #hejuabs li a,
        body #hesarsub li a,
        body #hecososub li a {
            background-color: #1d5263;
        }

        #sidebar a, 
        body #sidebar {
            background-color: #013647;
        }
    `;
    }


    let darkTemp =''


    if (dark) {
        darkTemp = `
body {
    background-color: rgb(34, 36, 37);
    color: rgb(240, 234, 226) !important;
    height: 100%;
    width: 100%;
}



.wrapper, .container, table, tr, td, p, h3, footer {
    background-color: rgb(34, 36, 37) !important;
    color: rgb(240, 234, 226) !important;
}

::-webkit-scrollbar {
    background-color: #262a2b;
    color: #cdc5b8;
}

::-webkit-scrollbar-thumb {
    background-color: #53595c;
}


table {
    background-color: rgb(34, 36, 37) !important;
    color: #e0e0e0 !important;
}

table th, table td {
    background-color: rgb(34, 36, 37) !important;
    color: #e0e0e0 !important;
    border-color: #e0e0e0 !important;
}




h3 {
    color: #e0e0e0 !important;
}


   
    `;
    }







    let cssCode = `
    .navbar{
    background-color: ${colorchoice} !important;
}
    #logo-ephec{
    ${cacherTemp} !important;
    }
    
    div:has(> span.fas.fa-user-circle) {
    ${welcomTemp};
}
    ${menuTemp}
    ${darkTemp}
    ${ancienlogoboultemp}
    
    
`;


    saveCSS(cssCode);
    //console.log(cssCode)



    //!!!!!!CSS CUSTOM POUR LE MOODLE!!!!!


    let cacher2temp = ''


    if (cacher2){

        cacher2temp = "#sitetitle, #logo, #headertitle, .col-lg-8 p-0 {display:none;}"

    }

    let ancienlogoboul2temp = ''


    if (ancienlogoboul2){

        ancienlogoboul2temp = `

    
    #logo {content: url('${newImageURL}') !important;}
    
    
    #sitetitle{display:none;}
`;

    }


    let barresduhauttemp1 = ''
    let barresduhauttemp2 = ''
    let barresduhauttemp3 = ''







    if (barresduhaut){



        barresduhaut1 = true
        barresduhaut2 = true
        barresduhaut3 = true



    }




    if (barresduhaut1){
        barresduhauttemp1 = '#header1{display: none;}'
    }





    if (barresduhaut2){
        barresduhauttemp2 = '#page-header{display: none !important;}'
    }



    if (barresduhaut3){

        barresduhauttemp3 = `
    #main-navbar {
        display: none !important;
    }

    #customBubble {
        display: none;
        width: 30px;
        height: 30px;
        background-color: #3498db;
        border-radius: 50%;
        position: fixed;
        text-align: center;
        font-size: 20px;
        top: 100px;
        left: 5px;
        z-index: 1000;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        cursor: pointer;
    }

    #customBubble:hover {
        background-color: #2980b9;
    }
`;


    }








    let timer2temp =  ''

    if (timer2){

        timer2temp = '#quiz-timer{display: none !important;}'

    }

    let timer22temp = ''

    if(timer22 && timer2 === false){

        timer22temp = `#quiz-timer{cursor: pointer;}`

    }

    let hideAccestemp = ''


    if (hideAcces){
        hideAccestemp = '#local-accessibility-buttoncontainer{display: none;}'
    }


    let piedtemp = ''


    if (pied){
        piedtemp = '#page-footer{display: none !important;}'
    }



    let cssCode2 = `
    ${barresduhauttemp1}
    ${barresduhauttemp2}
    ${barresduhauttemp3}
    ${cacher2temp}
    ${timer2temp}
    ${timer22temp}
    ${ancienlogoboul2temp}
    ${hideAccestemp}
    ${piedtemp}
    `
    ;
    


    saveCSS2(cssCode2);


    //console.log(cssCode2);


};



function functionShowHideById(id){

    //console.log(id)

    let temp = document.getElementById(id);

    if (temp.style.display === "none"){
        temp.style.display = ""
        gid('ButmenuBarresDuHaut').innerHTML = 'Cacher options barres du haut'

    }else{
        temp.style.display = "none"
        gid('ButmenuBarresDuHaut').innerHTML = 'Afficher options barres du haut... ⤵️'
    }


}

gid("ButmenuBarresDuHaut").addEventListener('click', function (){

    functionShowHideById(menuBarresDuHaut.id)


})


gid("resetMemory").addEventListener('click', function (){

    gid("resetMemory3").style.display = ""


})


gid("resetMemory4").addEventListener('click', function (){cacherAlert()})

gid("resetMemory2").addEventListener('click', function (){


    chrome.storage.local.clear(function() {

        alert("Les paramètres ont été réinitialisés avec succès.")
        gid("resetMemory3").style.display = "none"
        gid("Form33").innerHTML = 'Les données du portal doivent être rechargées, relancez Ephec Retro Color'
    });
    chrome.storage.sync.clear(function() {


    });

    function removeAllEventListeners() {
        let inputs = document.querySelectorAll('#Form1 input');
        for (let i of inputs) {
            i.removeEventListener("change", test);
        }

        let inputs2 = document.querySelectorAll('#Form2 input');
        for (let i of inputs2) {
            i.removeEventListener("change", test);
        }

        let inputs4 = document.querySelectorAll('#Form4 input');
        for (let i of inputs4) {
            i.removeEventListener("change", test);
        }
    }


    removeAllEventListeners();



    document.querySelectorAll("input").forEach(function (elem){

        elem.checked = false
        elem.disabled = false
    })

    document.getElementById('colorPicker').value = "#000000";

    addAlleventListerForSave()

    window.location.reload();

})



function cacherAlert(){

    gid("resetMemory3").style.display = "none"}


gid("iconpopset").addEventListener('click', function (){cacherAlert()})




