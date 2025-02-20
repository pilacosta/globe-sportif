"use strict";

var categories = ["Destination Surf", "Espaces sous-marins", "Snow attitude", "Randonnée et sac à dos"];
var forfaits = [
    {
        nom: "Tibau Do Sul (Brésil)",
        nb_forfait: "1",
        ref_forfait: "Une côte exposée aux grandes houles de l’Atlantique",
        info_cat: "Grâce à sa position houles de l’Atlantique. Nous sommes au \"paradis des surfeurs...",
        categorie: "Destination Surf",
        lieu: "<ul><li>Une côte exposée aux grandes houles de l’Atlantique. Nous sommes au \"paradis des surfeurs\". Grâce à sa position géographique, le littoral de Rio Grande do Norte reçoit des alizés constants de sud-est.</li></ul>",
        infos : "<ul><li>Sossego Surf Camp</li><li>Rua governador Aluizos Alves n°152</li><li>Tibau Do Sul – Brasil</li><li>Tél. mobile : 00 55 84 99 53 22 81</li><li>Courriel : <a href='mailto:info@globe-sportif.com'>info@globe-sportif.com</a></li><br/><li>Aéroport de Natal (transfert en bus de 1h30 à 2h)</li></ul>",
        hebergement : "<ul><li>Confort : Auberge</li><li>- Hostel Sossego Surf Camp (pension locale) : 60 lits.</li><li>- Chambres de 3 ou 4 personnes, équipées de ventilateurs et sanitaires.</li><li>- Bungalows spacieux de 2 personnes (avec supplément).</li><li>- Piscine avec vue sur la mer.</li><li>- Pension complète.</li><br/><li>Animations : découverte, kitesurf, surf, canoë, VTC, balade à cheval, massages, excursions.</li><li>Au village : de nombreux petits bars tropicaux \"ambiance brésilienne\"…</li></ul>",
        niveau : "<ul><li>Quel que soit votre niveau, il y a un spot adapté : \"Point Break\", \"Reef Break\", \"Beach Break\", de belles sessions en perspective…</li><br/><li>Nombre de séances : 5 demi-journées.</li><li>Niveau technique : Ouvert à tous.</li><li>Intensité physique : *</li><br/><li>L’intensité du programme est accessible au plus grand nombre. Le rythme est facile à suivre. Même si vous ne faites pas de sport régulièrement, votre motivation suffira.</li></ul>",
        duree: 14,
        debut_saison: "2016-09-01",
        fin_saison: "2017-05-31",
        prix: 850,
        places_dispo: 22,
        nbr_max_animaux_admis: 1,
        prix_animal: 99,
        img_catalogue: "images/surf_tibau_do_sul_cat.jpg",
        photo1: "<img src='images/surf_tibau_do_sul.jpg' alt='photo surf Tibau do Sul' id='image_forfait'/>",
        photo2: "<img src='images/surf_tibau_do_sul_2.jpg' alt='photo surf Tibau do Sul' id='image_forfait'/>",
        photo3: "<img src='images/surf_tibau_do_sul_3.jpg' alt='photo surf Tibau do Sul' id='image_forfait'/>",
        photo_cat: "images/categorie/nature.jpg"
    },
    {
        nom: "Le Vauclin (Martinique)",
        nb_forfait : "2",
        ref_forfait: "Du site de Tartane",
        info_cat: "Du site de Tartane, avec sa presqu’île exposée à la houle de l’Atlantique, aux plages du Sud entre Trabaud et le Diamand...",
        categorie: "Destination Surf",
        lieu: "<ul><li>Du site de Tartane, avec sa presqu’île exposée à la houle de l’Atlantique, aux plages du Sud entre Trabaud et le Diamand, la Martinique propose un grand nombre de spots pour les surfeurs de tous niveaux.</li><li>Le Surf Safari vous propose de partir tous les jours en minibus sur le spot le plus adapté aux conditions et à votre niveau pour surfer au bon endroit au bon moment… Une belle occasion de découvrir la Martinique, sa nature sauvage et inconnue du grand public.</li><br/><li>Cet immense lagon peu profond offre des zones de navigation pour chaque pratique. Vague de récif par longue houle de Nord-Est.</li></ul>",
        infos : "<ul><li>Château Paille</li><li>97280 Le Vauclin - Martinique</li><li>Tél. : 0 596 74 33 68 - Base nautique : 0 596 74 21 90 - Fax : 0 596 74 21 12 </li><br/><li>Courriel : <a href='mailto:info@globe-sportif.com'>info@globe-sportif.com</a></li></ul>",
        hebergement : "<ul><li>120 lits.</li><li>Chambres de 2 ou 3 personnes (chambres à 2 avec supplément) avec sanitaires et loggias.</li><li>Restauration : pension complète.</li><br/><li>Animations</li><li>Ping-pong, beach-volley, pétanque, baby-foot, vélos à disposition, excursions, windsurf, beach-kayak, wakeboard, catamaran.</li><br/><li>Au village</li><li>Commerces, location de voitures, marché, restaurants... Plus loin, plages de sable blanc du sud et forêt tropicale.</li></ul>",
        niveau : "<ul><li>Niveau technique :</li><li>Ouvert à tous</li><br/><li>Intensité physique : **</li><li>L’intensité du programme est un peu soutenue et une bonne forme physique est nécessaire.</li><li>Savoir nager est obligatoire.</li></ul>",
        duree: 18,
        debut_saison: "2016-04-01",
        fin_saison: "2016-10-31",
        prix: 820,
        places_dispo: 17,
        nbr_max_animaux_admis: 1,
        prix_animal: 156,
        img_catalogue: "images/surf_vauclin_cat.jpg",
        photo1: "<img src='images/surf_vauclin.jpg' alt='photo surf Le Vauclin' id='image_forfait'/>",
        photo2: "<img src='images/surf_vauclin_2.jpg' alt='photo surf Le Vauclin' id='image_forfait'/>",
        photo3: "<img src='images/surf_vauclin_3.jpg' alt='photo surf Le Vauclin' id='image_forfait'/>",
        photo_cat: "images/categorie/croisiere_01.jpg"
    },
    {
        nom: "Fuerteventura (Canaries)",
        nb_forfait : "3",
        ref_forfait: "Vent dominant Nord/Nord-est constant",
        info_cat: "Vent dominant Nord/Nord-est constant, régime de houle bien établit. Régularité et consistance des vagues lisses et tubulaires...",
        categorie: "Destination Surf",
        lieu: "<ul><li>Vent dominant Nord/Nord-est constant, régime de houle bien établit.</li><li>Régularité et consistance des vagues lisses et tubulaires, quelles que soient leur taille, garantissent un large choix de \"spots\" pour tous les niveaux.</li><li>Matériel Gamme complète de planches, d’ailes et de voiles les plus récentes.</li></ul>",
        infos : "<ul><li>Hotel Royal Suite</li><li>35 627 Costa Calma</li><li>Fuerteventura</li><br/><li>Courriel : <a href='mailto:info@globe-sportif.com'>info@globe-sportif.com</a></li></ul>",
        hebergement : "<ul><li>Confort : Hôtel 4 étoiles</li><li>Hôtel Drago Park (500 lits dont 50 UCPA) avec piscine</li><li>Chambre pour 2 à 3 personnes avec salle de bain</li><li>Pension Complète</li><br/><li>Animations</li><li>Surf, bodyboard, windsurf, kayak, plongée, V.T.T., excursions, tennis, golf, équitation.</li><li>À Costa Calma : boutiques, restaurants, bars et night-clubs.</li></ul>",
        niveau : "<ul><li>Nombre de séances :</li><li>5 sessions de 4 heures pour profiter des meilleures conditions qui sont à marée basse.</li><br/><li>Niveau technique : Ouvert à tous</li><br/><li>Intensité physique : **</li><li>L’intensité du programme est accessible au plus grand nombre. Le rythme est facile à suivre. Même si vous ne faites pas de sport régulièrement, votre motivation suffira.</li></ul>",
        duree: 16,
        debut_saison: "2016-04-01",
        fin_saison: "2016-12-31",
        prix: 930,
        places_dispo: 14,
        nbr_max_animaux_admis: 2,
        prix_animal: 90,
        img_catalogue: "images/surf_fuerteventura_cat.jpg",
        photo1: "<img src='images/surf_fuerteventura.jpg' alt='photo surf Fuerteventura' id='image_forfait'/>",
        photo2: "<img src='images/surf_fuerteventura_2.jpg' alt='photo surf Fuerteventura' id='image_forfait'/>",
        photo3: "<img src='images/surf_fuerteventura_3.jpg' alt='photo surf Fuerteventura' id='image_forfait'/>",
        photo_cat: "images/categorie/croisiere_02.jpg"
    },
    {
        nom: "Les Saintes (Guadeloupe)",
        nb_forfait : "4",
        ref_forfait: "En kayak, vous explorez les criques cachées de l’archipel",
        info_cat: "Un séjour idéal pour découvrir l’archipel des Saintes en douceur. En kayak, vous explorez les criques cachées de l’archipel : Plage de...",
        categorie: "Espaces sous-marins",
        lieu: "<ul><li>Un séjour idéal pour découvrir l’archipel des Saintes en douceur.</li><li>En kayak, vous explorez les criques cachées de l’archipel : Plage de sable blanc, baignades, observations sous-marines (masque, tuba) et pause sous les cocotiers.</li><li>Une demi-journée réservée à l’initiation et à la pratique du stand up paddle.</li><li>Un programme mi-temps pour un bon équilibre entre activité sportive et détente.</li><br/><li>Grande baie protégée bercée par l’Alizé.</li><li>Catamaran, windsurf et kitesurf disponibles sur de larges zones de pratiques.</li><li>Kayak de mer, stand up paddle et plongée permettent d’explorer les petites criques et de découvrir les fonds marins.</li></ul>",
        infos : "<ul><li>Baie Marigot</li><li>97137 Terre de Haut - Guadeloupe</li><li>Tél. : 05 90 99 54 94</li><br/><li>Courriel : <a href='mailto:info@globe-sportif.com'>info@globe-sportif.com</a></li></ul>",
        hebergement : "<ul><li>Bungalows UCPA : 150 lits.</li><li>Chambres de 2 ou 3 personnes (chambres à 2 avec supplément) avec balcon ou terrasse et sanitaires particuliers.<li>En pension complète.</li><br/><li>Animations</li><li>Masque et tuba (avec caution), windsurf, kayak de mer, catamaran, kitesurf, stand up paddle, journée en Guadeloupe, baptême de plongée.</li><li>Au village de Terre-de-Haut </li><li>Tous commerces, restaurants, bars, location de vélos et scooters pour visiter l’île...</li></ul>",
        niveau : "<ul><li>Nombre de séances :</li><li>5 demi-journées encadrées durant la semaine forfait activité (8 jours / 7 nuits) + 3 jours / 3 nuits en séjour libre (du vendredi au dimanche en début de séjour ou du lundi au mercredi en fin de séjour selon votre jour de départ). </li><br/><li>Niveau technique : Ouvert à tous </li><br/><li>Intensité physique : * </li><li>L’intensité du programme est accessible au plus grand nombre. Le rythme est facile à suivre. Même si vous ne faites pas de sport régulièrement, votre motivation suffira.</li><li>Etre capable de nager 50 m est obligatoire.</li></ul>",
        duree: 12,
        debut_saison: "2016-05-01",
        fin_saison: "2016-11-30",
        prix: 620,
        places_dispo: 5,
        nbr_max_animaux_admis: 0,
        prix_animal: 0,
        img_catalogue: "images/plongee_les_saintes_cat.jpg",
        photo1: "<img src='images/plongee_les_saintes.jpg' alt='photo plongée Les Saintes' id='image_forfait'/>",
        photo2: "<img src='images/plongee_les_saintes_2.jpg' alt='photo plongée Les Saintes' id='image_forfait'/>",
        photo3: "<img src='images/plongee_les_saintes_3.jpg' alt='photo plongée Les Saintes' id='image_forfait'/>",
        photo_cat: "images/categorie/ours_02.jpg"
    },
    {
        nom: "El Gouna (Egypte)",
        nb_forfait : "5",
        ref_forfait: "La plongée libre ou plongée en apnée",
        info_cat: "La plongée libre ou plongée en apnée vous permet de découvrir les fonds marins sans la lourdeur du matériel (bloc à air) avec des immersions de...",
        categorie: "Espaces sous-marins",
        lieu: "<ul><li>La plongée libre ou plongée en apnée vous permet de découvrir les fonds marins sans la lourdeur du matériel (bloc à air) avec des immersions de quelques minutes en harmonie avec le monde sous marin. Cette approche sportive de la plongée avec l’écoute de son corps sera prise en compte par votre moniteur. </li><li>Tout en progressivité vous apprendrez différentes techniques de respiration, de relaxation, de déplacement sous l’eau et de maitrise de soi. </li><li>Chacun à son rythme, chaque jour vous partez en bateau pour la journée, et alternez plongée et vie bord du bateau. </li><li>Au cœur d’un aquarium géant vous découvrirez les récifs coralliens et poissons multicolores de la Mer Rouge.</li><br/> <li>Sous l’eau, c’est la symphonie des couleurs… Récifs de coraux qui comptent plus de 9500 espèces de poissons… Plongée à la journée sur les nombreux sites : Fanadir: 2 plateaux l’un à 12 mètres, l’autre à 80 mètres, ou l’on évolue dans la zone des 20 mètres avec la sensation d’être dans le grand bleu.</li></ul>",
        infos : "<ul><li>Arena Inn Hotel </li><li>El Gouna - Red Sea - Egypte</li> <br/><li>Courriel : <a href='mailto:info@globe-sportif.com'>info@globe-sportif.com</a></li></ul>",
        hebergement : "<ul><li>Confort : Hôtel 3 étoiles normes locales </li><li>Hôtel “Arena inn” 180 lits dont 50 UCPA. </li><li>Chambres de 2 personnes, terrasse, piscine. </li><li>Pension Complète</li><br/><li>Animations </li><li>Excursion plongée, wake, sup, escapade dans le désert.</li></ul>",
        niveau : "<ul><li>Nombre de séances : 5 Jours d’activité.</li><br/><li>Niveau technique : Ouvert à tous </li><br/><li>Intensité physique : * </li><li>L’intensité du programme est accessible au plus grand nombre. Le rythme est facile à suivre. Même si vous ne faites pas de sport régulièrement, votre motivation suffira.</li></ul>",
        duree: 7,
        debut_saison: "2016-12-01",
        fin_saison: "2017-04-30",
        prix: 720,
        places_dispo: 6,
        nbr_max_animaux_admis: 0,
        prix_animal: 0,
        img_catalogue: "images/plongee_el_gouna_cat.jpg",
        photo1: "<img src='images/plongee_el_gouna.jpg' alt='photo plongée El Gouna' id='image_forfait'/>",
        photo2: "<img src='images/plongee_el_gouna_2.jpg' alt='photo plongée El Gouna' id='image_forfait'/>",
        photo3: "<img src='images/plongee_el_gouna_3.jpg' alt='photo plongée El Gouna' id='image_forfait'/>",
        photo_cat: "images/categorie/tente.jpg"
    },
    {
        nom: "Mer d'Andaman (Thaïlande)",
        nb_forfait : "6",
        ref_forfait: "À l’Ouest de la Thaïlande",
        info_cat: "l’archipel des Similan est un groupe de 9 îles tropicales inhabitées ourlées de sable blanc, classé Parc National Maritime...",
        categorie: "Espaces sous-marins",
        lieu: "<ul><li>À l’Ouest de la Thaïlande, à proximité de la Birmanie, l’archipel des Similan est un groupe de 9 îles tropicales inhabitées ourlées de sable blanc, classé Parc National Maritime. Avec les îles voisines de Surin et de Richelieu, c’est l’un des plus beaux sites de plongée d’Asie, par la limpidité de l’eau de la mer d’Andaman et la richesse de la vie. Dans un fantastique paysage sous-marin formé d’énormes blocs de granit recouverts de corail, la faune est au diapason du décor, vous aurez peut-être la chance d’observer raies mantas et pastenagues, thons et carangues, requins léopards et barracudas, et parfois requin-baleine.</li></ul>",
        infos : "<ul><li>Ambassade de Thaïlande </li><li>8, rue Greuze - 75116 Paris - Tél. : 01 56 26 50 50</li></ul>",
        hebergement : "<ul><li>En cabine de 2 ou 4 à bord du bateau de croisière. Le bateau d'une longueur de 22 m est équipé de 3 cabines doubles et de 2 cabines quadruples. Les cabines sont toutes climatisées, avec réglage indépendant, et couchettes individuelles (200 x 90 cm). Il y a 2 douches / toilettes à bord. Le bateau dispose de deux générateurs 220V (possibilité de recharge du matériel électrique dans la journée pendant les gonflages des bouteilles de plongée, et durant la nuit de 18h à 7h du matin) et d'un large pont supérieur pour les repas et la détente, avec une terrasse pour profiter du soleil. </li><li>Couverture légère et serviette de toilette fournis. Un \"sac à viande\" (drap-sac) peut être utile. </li><li>3 nuits à l’hôtel à Phuket (Baie de Chalong).</li><br/><li>Restauration </li><li>Petit-déjeuner américain </li><li>Les repas à bord sont servis en buffet. Le midi ce sont des plats traditionnels thaïlandais à base de poulet, porc, poisson, calamar et crevettes accompagnés de riz, légumes frais et fruits de saison en dessert. Le dîner est plus européen avec des plats français. Snacks servis après chaque plongée. Café, thé, chocolat et bouteilles d’eau sont à disposition gratuitement durant toute la croisière. Les bières et sodas sont payants (alcool à consommer avec modération après la dernière plongée).</li></ul>",
        niveau : "<ul><li>Intensité physique : ** </li><br/><li>Cette croisière plongée (17 plongées au total) est accessible aux plongeurs titulaires du Niveau 1, avec une expérience en mer de 20 plongées au minimum après le niveau 1. Une bonne maîtrise de son équilibre est nécessaire pour le respect des coraux. Lors des plongées, le courant peut être plus ou moins fort. </li><br/><li>Sécurité </li><li>Il est indispensable de savoir nager. Un certificat médical d'aptitude à la pratique de la plongée de moins d'un an est obligatoire, aussi nous vous recommandons de passer une visite médicale auprès d'un médecin spécialisé et de prendre connaissance des contre-indications liées à cette activité.</li></ul>",
        duree: 8,
        debut_saison: "2016-12-01",
        fin_saison: "2017-04-30",
        prix: 630,
        places_dispo: 10,
        nbr_max_animaux_admis: 0,
        prix_animal: 0,
        img_catalogue: "images/plongee_andaman_cat.jpg",
        photo1: "<img src='images/plongee_andaman.jpg' alt='photo plongée Mer d'Andaman id='image_forfait'/>",
        photo2: "<img src='images/plongee_andaman_2.jpg' alt='photo plongée Mer d'Andaman id='image_forfait'/>",
        photo3: "<img src='images/plongee_andaman_3.jpg' alt='photo plongée Mer d'Andaman id='image_forfait'/>",
        photo_cat: "images/categorie/station_ski.jpg"
    },
    {
        nom: "Ski freerando Val d'Isère (France)",
        nb_forfait : "7",
        ref_forfait: "Frontière italienne et le parc national de la Vanoise",
        info_cat: "Venez glisser sur un des domaines les plus prestigieux au monde bordé par la frontière italienne et le parc national de la Vanoise: l’espace Killy formé...",
        categorie: "Snow attitude",
        lieu: "<ul><li>Venez glisser sur un des domaines les plus prestigieux au monde bordé par la frontière italienne et le parc national de la Vanoise: l’espace Killy formé par les stations de Val d’Isère et de Tignes. Laissez-vous surprendre par le charme d’un village typique de Haute-Tarentaise et d’une station vivante pour des vacances pas comme les autres !</li><br/><li>152 Pistes : 1550 m / 3456 m</li><li>Domaine skiable commun à Val d’Isère et à Tignes : un terrain de jeu de 10 000 ha accessible à tous.</li><li>300 km de pistes, 2 glaciers, 79 remontées mécaniques, 2 snowparks, 900 canons à neige, un des plus beaux domaines hors-piste, une zone d’entrainement DVA, espace \"nature ride\" : pistes noires balisées, sécurisées et non damées.</li><li></li><li></li></ul>",
        infos : "<ul><li>Rue Nicolas Bazile</li><li>73151 Val d’Isère Cedex</li><li>Tél. : 04 79 06 03 80 - Fax : 04 79 06 11 82</li><br/><li>Courriel : <a href='mailto:info@globe-sportif.com'>info@globe-sportif.com</a></li></ul>",
        hebergement : "<ul><li>240 lits répartis en chambres de 4 à 8 personnes avec lavabo.</li><li>Possibilité de réserver un hébergement à deux (chambre twin avec un lit superposé) en contactant directement le centre.</li><li>Chaque module de chambres dispose de douches et sanitaires communs.</li><li>Restaurant, bar, discothèque…</li><br/><li>Animations</li>Découvrez nos après sports proposés par l’équipe de moniteurs pour prolonger votre journée d’activité (balade en raquettes, snowskate, stretching, topo neige et avalanches, jeux apéro…).<li><br/></li>Dans la station<li></li>Tous services et commerces, bars, discothèques, restaurants, Piscine, espaces wellness, médiathèque, musée de Val,…<li></li><li>De nombreuses animations sportives et culturelles sont proposées durant toute la saison par la station : Coupe du monde ski alpin avec le critérium de la première neige, festival du film d’aventure, festival musique classique avec la ClassicaVal,…</li></ul>",
        niveau : "<ul><li>Niveau technique :</li><li>De niveau \"Expert\" vous avez déjà une bonne expérience en hors-piste et vous souhaitez une pratique intensive pour réaliser des sorties de plus grandes envergures. Encadré par un moniteur diplômé, vous affinerez votre lecture du terrain et perfectionnerez votre technique pour être à l’aise dans toutes les neiges et toutes les pentes tant à la montée qu’à la descente.</li><br/><li>Intensité physique : **</li></ul>",
        duree: 9,
        debut_saison: "2016-12-15",
        fin_saison: "2017-04-05",
        prix: 450,
        places_dispo: 14,
        nbr_max_animaux_admis: 0,
        prix_animal: 0,
        img_catalogue: "images/snow_freerando_cat.jpg",
        photo1: "<img src='images/snow_freerando.jpg' alt='photo snow Freerando' id='image_forfait'/>",
        photo2: "<img src='images/snow_freerando_2.jpg' alt='photo snow Freerando' id='image_forfait'/>",
        photo3: "<img src='images/snow_freerando_3.jpg' alt='photo snow Freerando' id='image_forfait'/>",
        photo_cat: "images/categorie/ski.jpg"
    },
    {
        nom: "Hors piste Chamonix (France)",
        nb_forfait : "8",
        ref_forfait: "Loin des grands domaines ski au pied",
        info_cat: "Loin des grands domaines ski au pied, Chamonix est composé de plusieurs domaines skiables, reliés entre eux par bus ou train...",
        categorie: "Snow attitude",
        lieu: "<ul><li>Loin des grands domaines ski au pied, Chamonix est composé de plusieurs domaines skiables, reliés entre eux par bus ou train.</li><br/><li>Votre forfait donne accès à tous les domaines : la Flégère / le Brévent, Le Tour / Vallorcine, Lognan / les Grands Montets (accessible à pied depuis le centre), l’Aiguille du Midi, le train du Montenvers et plusieurs petits domaines de bas de vallée. </li></ul>",
        infos : "<ul><li>Adresse</li><li>170 rue Charlet Straton – Argentière</li><li>74400 Chamonix</li><li>Tél. : 04 50 54 07 11</li><br/><li>Courriel : <a href='mailto:info@globe-sportif.com'>info@globe-sportif.com</a></li></ul>",
        hebergement : "<ul><li>300 places.</li><li>Chambres de 4 personnes, quelques chambres de 5 et 6 personnes, sanitaires communs à chaque étage.</li><li>Repas de midi organisé sous forme de pique-nique pour profiter au mieux du domaine skiable (pensez à prendre un petit sac à dos et une bouteille d’eau). Possibilité sur inscription la veille de manger chaud sur centre tous les jours si vous le désirez. C’est un repas simple, et dans tous les cas, le repas chaud à midi n’est pas compatible avec certains programmes ou certains domaines de ski.</li><br/><li>Animations</li><li>Ambiance \"pub\" au bar (films de glisse, musique), concerts avec groupes \"live\" ou vidéo grand écran, soirées danse, animations montagne, stretching, billard, BD, jeux, diverses animations sportives extérieures dans une bonne ambiance \"montagne\".</li><li>Sauna : pensez à prendre maillot de bain et serviette de bain</li><li>Salle d’escalade (type salle de bloc) : pensez à prendre vos chaussons d’escalade.</li></ul>",
        niveau : "<ul><li>Niveau technique</li><li>De niveau \"Confirmé\" ou \"Expert\" vous avez déjà fait un stage découverte ou vous avez une expérience en hors-piste. Ce stage de niveau Hors-piste 2 vous permettra d’être à l'aise en toutes neiges, de réaliser des sorties encadrées par un moniteur diplômé ou un guide dans un groupe constitué de 9 participants au maximum et de maîtriser le maniement de différents D.V.A. et la démarche de l’activité hors-piste. </li><br/><li>Intensité physique : **</li><br/><li>Important</li><li>Pour des raisons de sécurité, de cohérence technique et pédagogique, et pour vous procurer le plus grand plaisir dans cette activité, nous nous attachons à créer des groupes homogènes. Alors assurez-vous bien que vous possédez bien les niveaux évoqués ci dessus car, si nous ne sommes pas en mesure de vous proposer un programme de remplacement, nous ne pourrons pas vous rembourser le prix du stage. Ne vous surestimez pas !</li></ul>",
        duree: 7,
        debut_saison: "2016-12-01",
        fin_saison: "2017-04-30",
        prix: 490,
        places_dispo: 24,
        nbr_max_animaux_admis: 1,
        prix_animal: 105,
        img_catalogue: "images/snow_hors_piste_cat.jpg",
        photo1: "<img src='images/snow_hors_piste.jpg' alt='photo snow hors piste' id='image_forfait'/>",
        photo2: "<img src='images/snow_hors_piste_2.jpg' alt='photo snow hors piste' id='image_forfait'/>",
        photo3: "<img src='images/snow_hors_piste_3.jpg' alt='photo snow hors piste' id='image_forfait'/>",
        photo_cat: "images/categorie/lac_louise.jpg"
    },
    {
        nom: "Chien de traineau Vanoise (France)",
        nb_forfait : "9",
        ref_forfait: "Au cœur du parc national de la Vanoise et du Beaufortain",
        info_cat: "Dans un espace préservé immense, ce séjour est une invitation à découvrir une région authentique par le biais d’activités originales et variées...",
        categorie: "Snow attitude",
        lieu: "<ul><li>Au cœur du parc national de la Vanoise et du Beaufortain, dans un espace préservé immense, ce séjour est une invitation à découvrir une région authentique par le biais d’activités originales et variées. </li><li>L'expérience avec les chiens de traîneau, la pratique de la randonnée en raquettes, la nuit sur les hauts plateaux de la vallée de Nave dans un refuge flambant neuf sont des loisirs qui sauront vous ravir. </li></ul>",
        infos : "<ul><li>Vous venez en train</li><li>TGV jusqu’à Moutiers.</li><li>Bus depuis la gare routière de Moutiers pour Champagny</li><br/><li> Vous venez en voiture</li><li>Autoroute A430 sortie Albertville puis N 90 sortie Moutiers puis D915 sortie Bozel et D91 b jusqu'à Champagny le Haut.</li></ul>",
        hebergement : "<ul><li>Dortoirs, divisés en cabines de 4 couchettes individuelles superposées équipées de couettes (il est conseillé d’apporter un drap-sac personnel – ou \"sac à viande\" en langage poétique).</li><li>Les sanitaires sont collectifs : lavabos, douches (linge de toilette non fourni).</li><li>Les petits-déjeuners et les repas du soir sont servis chauds dans les hébergements.</li><li>Les pique-niques sont consommés froids sur le terrain.</li></ul>",
        niveau : "<ul><li>Niveau technique : Débutant</li><li>Programme accessible à tous, aucune difficulté technique.</li><li>Intensité physique : **</li><li>Vous pratiquez un peu de jogging, de vélo ou tout autre sport.</li><li>Affaires personnelles pour 1 journée et pique nique (+ affaires de la nuit pendant 2 jours).</li></ul>",
        duree: 8,
        debut_saison: "2016-12-15",
        fin_saison: "2017-04-15",
        prix: 740,
        places_dispo: 3,
        nbr_max_animaux_admis: 2,
        prix_animal: 100,
        img_catalogue: "images/snow_chien_traineau_cat.jpg",
        photo1: "<img src='images/snow_chien_traineau.jpg' alt='photo snow Chiens de traineau' id='image_forfait'/>",
        photo2: "<img src='images/snow_chien_traineau_2.jpg' alt='photo snow Chiens de traineau' id='image_forfait'/>",
        photo3: "<img src='images/snow_chien_traineau_3.jpg' alt='photo snow Chiens de traineau' id='image_forfait'/>",
        photo_cat: "images/categorie/lac_moraine.jpg"
    },
    {
        nom: "Terre de feu (Patagonie)",
        nb_forfait : "10",
        ref_forfait: "À l’extrémité australe de l’Amérique",
        info_cat: "Un grand voyage au bout du monde : 2 000 km de Ushuaia à El Calafate à travers les vastes espaces de Patagonie balayés par les vents et parcourus...",
        categorie: "Randonnée et sac à dos",
        lieu: "<ul><li>Un grand voyage au bout du monde : 2 000 km de Ushuaia à El Calafate à travers les vastes espaces de Patagonie balayés par les vents et parcourus par les vigognes. À pied, vous découvrez la Terre de Feu, à l’extrémité australe de l’Amérique, puis les paysages sauvages des grands parcs nationaux des Andes chiliennes et argentines : lacs, fjords, glaciers et sommets mythiques aux formes pures comme les Torres del Paine, le Cerro Torre ou le Fitz Roy. </li></ul>",
        infos : "<ul><li>Consulat d'Argentine - 6 rue Cimarosa - 75116 Paris </li><li>Tél. : 01 44 34 22 00 </li><br/><li>Consulat du Chili - 64 bd de Latour-Maubourg - 75007 Paris </li><li>Tél. : 01 44 18 59 60</li></ul>",
        hebergement : "<ul></li><li>11 nuits en gîte, refuge ou hôtel simple en ville (chambres de 3 et plus). </li><li>2 nuits sous tente. Prévoir un bon duvet. </li><br/><li>Restauration </li><li>Pendant le circuit, pique-niques le midi et repas chauds le soir, variés et équilibrés. </li><li>Pour des raisons pratiques, 14 repas environ ne sont pas compris. </li><li>Prévoir un budget compris entre 250 et 300 euros (20 euros environ par repas).</li></ul>",
        niveau : "<ul><li>Intensité physique : ** </li><br/><li>Ce voyage s'adresse à toute personne en bonne santé souhaitant effectuer un effort physique modéré pour découvrir des paysages magnifiques, en alternant étapes en véhicule et randonnées pédestres. </li><li>Celles-ci sont accessibles à toute personne en bonne condition physique capable de marcher 5 à 7h par jour avec un sac à dos léger, dans des conditions météo parfois difficiles. </li><li>Vous porterez donc seulement dans un petit sac à dos le nécessaire de la journée (repas de midi, pull, anorak, appareil photo, soit 4 ou 5 kg). </li><li>Au cours de ce grand voyage, vous parcourrez environ 2000 km sur les routes et pistes de Patagonie.</li></ul>",
        duree: 7,
        debut_saison: "2016-10-01",
        fin_saison: "2017-05-31",
        prix: 940,
        places_dispo: 4,
        nbr_max_animaux_admis: 1,
        prix_animal: 90,
        img_catalogue: "images/rando_patagonie_cat.jpg",
        photo1: "<img src='images/rando_patagonie.jpg' alt='photo randonnée Patagonie' id='image_forfait'/>",
        photo2: "<img src='images/rando_patagonie_2.jpg' alt='photo randonnée Patagonie' id='image_forfait'/>",
        photo3: "<img src='images/rando_patagonie_3.jpg' alt='photo randonnée Patagonie' id='image_forfait'/>",
        photo_cat: "images/categorie/Caribou.jpg"
    },
    {
        nom: "La caravanne du Désert (Maroc)",
        nb_forfait : "11",
        ref_forfait: "Les caravanes de dromadaires",
        info_cat: "Jadis les caravanes de dromadaires étaient le seul moyen de communication entre le Maghreb et l’Afrique noire, à travers les étendues infinies du...",
        categorie: "Randonnée et sac à dos",
        lieu: "<ul><li>Jadis les caravanes de dromadaires étaient le seul moyen de communication entre le Maghreb et l’Afrique noire, à travers les étendues infinies du grand désert. </li><li>Au rythme de vos dromadaires de bât, partez à pied sur les traces des grandes caravanes des temps passés, au cœur du plus grand massif de dunes du Maroc. Dès les premiers pas de votre trek, vous serez imprégnés du charme particulier de ces régions et du grand mystère du Sahara. </li><br/><li>À la belle saison, les amplitudes thermiques sont importantes. Les journées peuvent être très chaudes, mais l’altitude atténue les températures qui deviennent fraîches, voire franchement froides dès que le soleil n’est plus là. Le temps est généralement sec, mais des périodes de mauvais temps et des orages parfois violents peuvent survenir. Tenez-en compte dans le choix de votre équipement (duvet, vêtements chauds particulièrement pour le soir et la nuit, cape de pluie). </li></ul>",
        infos : "<ul><li>Consulat du Maroc </li><li>12, rue de la Saïda - 75015 Paris </li><li>Tél. : 01 56 56 72 00</li></ul>",
        hebergement : "<ul></li><li>Bivouacs sous tentes igloos 2/3 places durant le trek. À l'hôtel les premier et dernier soirs (chambre double ou triple). </li><br/><li>Restauration </li><li>Petit-déjeuner copieux, le matin. </li><li>Pique-nique à midi (salades composées, omelettes...). </li><li>Le soir, notre cuisinier prépare des repas, la plupart du temps typiquement marocains. </li><li>Certains repas en ville ou pendant les transferts sont libres et à votre charge. </li></ul>",
        niveau : "<ul><li>Intensité physique : ** </li><br/><li>Ce trek est accessible à toute personne capable de marcher 4 à 5h par jour à travers un terrain désertique, souvent dans le sable. La végétation est très clairsemée : tamaris, acacias, lauriers-roses et palmiers. Les dénivelées sont faibles. Vos affaires personnelles, le matériel collectif et le ravitaillement sont transportés par des chameaux de bât que nous retrouvons chaque soir. </li><li>Vous porterez seulement le nécessaire de la journée dans un petit sac à dos (repas de midi, effets légers, appareil photo, soit 3 ou 4 kg).</li></ul>",
        duree: 14,
        debut_saison: "2016-01-01",
        fin_saison: "2016-12-31",
        prix: 750,
        places_dispo: 7,
        nbr_max_animaux_admis: 2,
        prix_animal: 80,
        img_catalogue: "images/rando_maroc_cat.jpg",
        photo1: "<img src='images/rando_maroc.jpg' alt='photo randonnée Maroc' id='image_forfait'/>",
        photo2: "<img src='images/rando_maroc_2.jpg' alt='photo randonnée Maroc' id='image_forfait'/>",
        photo3: "<img src='images/rando_maroc_3.jpg' alt='photo randonnée Maroc' id='image_forfait'/>",
        photo_cat: "images/categorie/aventure_01.jpg"
    },
    {
        nom: "Pyramides Mayas (Guatemala)",
        nb_forfait : "12",
        ref_forfait: "Le Guatemala est le pays le plus indien d’Amérique Centrale",
        info_cat: "Jadis cœur de la civilisation maya à son apogée, le Guatemala est le pays le plus indien d’Amérique Centrale. Cités coloniales et villages indigènes parsèment...",
        categorie: "Randonnée et sac à dos",
        lieu: "<ul><li>Jadis cœur de la civilisation maya à son apogée, le Guatemala est le pays le plus indien d’Amérique Centrale. Cités coloniales et villages indigènes parsèment les hautes terres de l’ouest, dont le joyau est le lac Atitlan dans son écrin de volcans aux cônes parfaits. Après avoir découvert les paysages grandioses de l’Altiplano et admiré les couleurs somptueuses des costumes traditionnels et des marchés locaux, vous prenez la route du plateau tropical du Peten. Les immenses pyramides mayas de Tikal, perdues au fin fond de la jungle, sont le point d’orgue de ce voyage.</li></ul>",
        infos : "<ul><li>Ambassade du Guatemala </li><li>2, rue Villebois-Mareuil - 75017 Paris - Tél. : 01 42 27 78 63 </li><li><a href='http://www.ambassadeduguatemala.com'>http://www.ambassadeduguatemala.com</a></li></ul>",
        hebergement : "<ul><li>12 nuits à l'hôtel ou auberge. Sac de couchage inutile. </li><br/><li>Restauration </li><li>En général, pique-nique le midi et repas chauds le soir. </li><li>Les repas au restaurant à Antigua J1 et Ciudad de Guatemala J12 et J13 ne sont pas compris (environ 3 repas, prévoir de l'ordre de 10 USD par repas).</li></ul>",
        niveau : "<ul><li>Intensité physique : ** </li><br/><li>Les randonnées et ascensions de volcans sont accessibles à toute personne en bonne condition physique capable de marcher 3 à 7h par jour sur des sentiers généralement sans difficulté technique, avec un sac à dos léger. </li><li>Les affaires personnelles, le matériel collectif et le ravitaillement sont transportés en véhicule ou en bateau. Vous porterez donc seulement dans un petit sac à dos le nécessaire de la journée (repas de midi, pull, vêtement imperméable, appareil photo, soit 4 ou 5 kg). Vous serez durant tout votre séjour à une altitude de plus de 1500 m (altitude maxima = 3800 m). </li><li>Au cours de ce voyage, nous parcourrons environ 1.000 km sur les routes guatémaltèques, à une vitesse moyenne de 50 km/h.</li></ul>",
        duree: 15,
        debut_saison: "2016-06-15",
        fin_saison: "2016-09-15",
        prix: 680,
        places_dispo: 8,
        nbr_max_animaux_admis: 0,
        prix_animal: 0,
        img_catalogue: "images/rando_pyramides_mayas_cat.jpg",
        photo1: "<img src='images/rando_pyramides_mayas.jpg' alt='photo randonnée pyramides Mayas' id='image_forfait'/>",
        photo2: "<img src='images/rando_pyramides_mayas_2.jpg' alt='photo randonnée pyramides Mayas' id='image_forfait'/>",
        photo3: "<img src='images/rando_pyramides_mayas_3.jpg' alt='photo randonnée pyramides Mayas' id='image_forfait'/>",
        photo_cat: "images/categorie/iceberg_02.jpg"
    }
];


