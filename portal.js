

    chrome.storage.local.get(['portalData'], function(result) {

        let data




            if (result.portalData) {data = result.portalData;}
            else{data = [


                {
                    "name": "Personnaliser Portal",
                    "enable": true,
                    "emoji": "✨",
                    "link": "",
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
                    "name": "Horaire cours",
                    "enable": true,
                    "emoji": "🕑",
                    "link": "https://eperso.ephec.be/HeHoraire/HoraireV2",
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
                    "name": "Ephec Stream",
                    "enable": true,
                    "emoji": "📺",
                    "link": "https://www.microsoft365.com/launch/stream",
                    "use": 0,
                    "luse": "2024-08-16T14:30:00",
                    "pined": false
                }
            ]


            }


        let tableau = document.getElementById("tableau")

        for (let i of data){

            if(i.enable && i.name !== "Personnaliser Portal" && i.name !== "Portal en plein écran" && i.name !== "Importer mes cours Moodle"){

                tableau.innerHTML += "<div class=\"col-xs-6 col-sm-6 col-md-4 boxgrid_small\"><a href=\"" + i.link + "\"><div class=\"h-100\"><p>" + i.name + "</p><div class='img2'>" + i.emoji +"</div></div></a></div>"


            }



        }


    });





