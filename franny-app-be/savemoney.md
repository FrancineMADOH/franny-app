# SAVE MONEY API REQUIREMENT

Save money est une application mobile qui offre aux utilisateurs la possibilite d'epargner de l'argent directement depuis leur compte mobile money en
planifiant des projets, en les financant progressivement  et enfin de  voir cet épargne retourner à leur compte à la date qu'ils auront eux même choisi.


## API END-POINTS

### API administrateurs

- Cree un nouvel adminiistrateur 
- Modifie le mot de passe d'un utilisateur 
- Un administrateur  se connecte, se decconecte 
- createCollector:Cree un nouvel utilisateur collecteur d'epargne
- Modifie les donnes d'un collecteur d'epargne (desactive)
- Supprime un collecteur d'epargne
- Filtre les collecteurs d'epargne en fonction de certain criteres 
- Vire les epargnes d'urgence
- Modifie les informations des utilisateurs 
- Consulte la liste de tous les projets au sein de l'application
- Applique des filtres sur l'ensemble des epargnes disponible
- Genere un rapport des collecteurs 
- cree et modifie des villes
- cree et modifie des quartiers 
- Cree des periodes d'epargne 

### API Utilisateurs

- Cree son compte 
- Met a jour son mot se passe 
- Se connecte a l'application et se decconecte 
- Complete son profil
- Demande une modification de son profil
- Cree un projet(epargne)
- Modifie son projet (uniquement la date de debut et de fin)
- Demande un remboursement d'urgence(ce qui anulle le projet)
- Consulte la liste de tous ses projets 

### API Collecteurs 

- Se connecte et se decconnecte
- Cree des nouveau projets
- Consulte la liste des projets
- Filtre les projets en fonction de certain criteres
- Met a jour un projet (epargne journaliere)

## DATA SHAPE

### Admin

COLUMN
******************************************************
email 
mot de passe 
nom complet
numero de telephone
numero CNI
role
firebaseid 
******************************************************

### Collecteurs

COLUMN
******************************************************
email 
mot de passe 
nom complet
numero de telephone
numero CNI
role
date d'embauche
ville 
zone de travail
status
firebaseid 
******************************************************

### Utilisateurs 

COLUMN
******************************************************
email 
mot de passe 
nom complet
numero de telephone
numero CNI
ville
quartier
date d'enregistrement
role
firebaseid 
******************************************************

### Projet/Epargne

COLUMN
******************************************************
titre
description
Identification
date du projet
adresse
date de debut
date de fin
periode d'epargne
epargne minimal
compte beneficiaire
compte a debiter 
status

### periode d'epargne

COLUMN
******************************************************
nom 
duree

### Ville

COLUMN
******************************************************
nom
description

### Quartier 

COLUMN
******************************************************
nom
ville
description

### Acte d'dentification

COLUMN
******************************************************
nom
description
contrainte
