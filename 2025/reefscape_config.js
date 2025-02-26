var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2025",
  "page_title": "REEFSCAPE",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Nom de l'éclaireur",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Événement",
      "code": "e",
      "type": "event",
      "defaultValue": "frc-2025",
      "required": "true"
    },
    { "name": "Niveau de Compétition",
      "code": "l",
      "type": "level",
      "choices": {
        "q": "Qualifications<br>",
        "sf": "Demi-Finales<br>",
        "f": "Finales"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Ne rien faire",
      "code": "as",
      "type": "clickable_image",
      "filename": "2025/half_field.png",
      "clickRestriction": "one",
      "dimensions": "6 6",
      "allowableResponses": "1 7 13 19 25 31",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Quitte le départ",
      "code": "al",
      "type": "bool"
    },
    { "name": "Coral L1",
      "code": "ac1",
      "type": "counter"
    },
    { "name": "Coral L2",
      "code": "ac2",
      "type": "counter"
    },
    { "name": "Coral L3",
      "code": "ac3",
      "type": "counter"
    },
    { "name": "Coral L4",
      "code": "ac4",
      "type": "counter"
    },
    { "name": "Ne rien faire",
      "code": "asp",
      "type": "clickable_image",
      "filename": "2025/reef.png",
      "dimensions": "6 6",
      "allowableResponses": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 17 18 19 20 23 24 25 26 27 28 29 30 31 32 33 34 35 36",
      "shape": "circle 5 black red true"
    },
    { "name": "Pts Processeur",
      "code": "aps",
      "type": "counter"
    },
    { "name": "Pts Barge",
      "code": "ans",
      "type": "counter"
    }
  ],
  "teleop": [
    { "name": "Coral L1",
      "code": "tc1",
      "type": "counter"
    },
    { "name": "Coral L2",
      "code": "tc2",
      "type": "counter"
    },
    { "name": "Coral L3",
      "code": "tc3",
      "type": "counter"
    },
    { "name": "Coral L4",
      "code": "tc4",
      "type": "counter"
    },
    { "name": "Pts Processeur",
      "code": "tps",
      "type": "counter"
    },
    { "name": "Pts Barge",
      "code": "tns",
      "type": "counter"
    },
    { "name": "Emplacement recup corail",
      "code": "tpu",
      "type": "radio",
      "choices": {
        "s": "Coral Station<br>",
        "f": "Floor<br>",
        "b": "Both<br>",
        "x": "Pas essayé"
      },
      "defaultValue": "x"
    },
    { "name": "Scored in<br>Opponent<br>Processor",
      "code": "opp",
      "type": "bool"
    }
  ],
  "endgame": [
    { "name": "Timer Barge",
      "code": "ebt",
      "type": "timer"
    },
    { "name": "Status Final Robot",
      "code": "efs",
      "type":"radio",
      "choices": {
        "bp": "Immobile<br>",
        "ba": "Immobile/Fail<br>",
        "bs": "Shallow Cage<br>",
        "bd": "Deep Cage<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    }
  ],
  "postmatch": [
    { "name": "Pt coopétition",
      "code": "cop",
      "type": "bool"
    },
    { "name": "Algues restantes",
      "code": "alr",
      "type": "number",
      "min": 0,
      "max": 9,
      "defaultValue": 0
    },
    { "name": "Driver",
      "code": "ds",
      "type": "radio",
      "choices": {
        "n": "Pas bon<br>",
        "a": "Moyen<br>",
        "v": "Bon<br>",
        "x": "Pas observé"
      },
      "defaultValue": "x"
    },
    { "name": "Defense",
      "code": "dr",
      "type": "radio",
      "choices": {
        "b": "Pas bon<br>",
        "a": "Moyen<br>",
        "g": "Bon<br>",
        "e": "Excellent<br>",
        "x": "Pas joué défense"
      },
      "defaultValue": "x"
    },
    { "name": "Vitesse",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "1 (lent)<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5 (rapide)"
      },
      "defaultValue":"3"
    },
    { "name": "Mort/immobilisé",
      "code": "die",
      "type": "bool"
    },
    { "name": "Viré sur le côté",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Corail échappés (>2)",
      "code": "dc",
      "type": "bool"
    },
    { "name": "Algues échappées (>2)",
      "code": "da",
      "type": "bool"
    },
    { "name": "Bon partenaire d'alliance ?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "type": "bool"
    },
    { "name": "Commentaires",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 55
    }
  ]
}`;
