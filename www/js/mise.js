
 var createStatement1 = "CREATE TABLE IF NOT EXISTS personnel(id INTEGER(11) PRIMARY KEY ,sexe smallint(1),immatricule CHAR(500),nom CHAR(500),prenom CHAR(500),cin CHAR(100),phone CHAR(50),email CHAR(500),adresse CHAR(500),ville INTEGER(11),dateAffectation date,diplome CHAR(100),magasin smallint(3) , utilisateur INTEGER(11) ,  dateCreation datetime ,  etat CHAR(1),rib CHAR(500),banque smallint(4), fonction CHAR(500),dateNaissance date,login CHAR(100),passe CHAR(100),type smallint(1))";
  var createStatement2 = "CREATE TABLE IF NOT EXISTS famille(id INTEGER(11) PRIMARY KEY , libelle CHAR(500),dateCreation datetime ,ordre smallint(3),etat smallint(1))";
  var createStatement3 = "CREATE TABLE IF NOT EXISTS client(id INTEGER(11),code INTEGER(11), sexe smallint(2), nom CHAR(500), prenom CHAR(500), email CHAR(500), phone CHAR(500), adresse CHAR(500), dateNaissance date, magasin smallint(4),ville smallint(4),utilisateur INTEGER(11) ,dateCreation datetime,dateModification datetime,point FLOAT, etat smallint(1), avant float, PRIMARY KEY (id,magasin,utilisateur))";
  var createStatement4 = "CREATE TABLE IF NOT EXISTS encaissement(id INTEGER(11) ,date date, magasin smallint(3), client INTEGER(11), montant FLOAT, dateCreation datetime, vendeur INTEGER(11),commande INTEGER(11),PRIMARY KEY (id,magasin,vendeur))";
  var createStatement5 = "CREATE TABLE IF NOT EXISTS etatencaissement(id INTEGER(11) ,encaissement CHAR(500), modepaiement smallint(3), solde FLOAT, dateCreation datetime, magasin smallint(3), dateEncais date, vendeur INTEGER(11), PRIMARY KEY (id,magasin,vendeur))";  
  var createStatement6 = "CREATE TABLE IF NOT EXISTS magasin (id INTEGER(11) PRIMARY KEY ,  intitule CHAR(500),dateCreation datetime ,type smallint(1),etat smallint(1))";
  var createStatement7 = "CREATE TABLE IF NOT EXISTS modepaiement(id INTEGER(11) PRIMARY KEY , indice CHAR(500),intitule CHAR(500),dateCreation datetime ,etat smallint(1))";
  var createStatement8 = "CREATE TABLE IF NOT EXISTS sousfamille(id INTEGER(11) PRIMARY KEY ,libelle CHAR(500), famille INTEGER(11),parent INTEGER(11),prix float,tva float,tvabis float,ordre smallint(4),alerte smallint(4),dateCreation datetime )";
  var createStatement9 = "CREATE TABLE IF NOT EXISTS panier(id INTEGER(11) ,commande INTEGER(11) ,session CHAR(100) ,produit INTEGER(11) ,tva float ,libelle CHAR(500) , prix FLOAT, remise FLOAT, client INTEGER(11) ,vendeur INTEGER(11) ,qte INTEGER(11) ,etat smallint(1),dateCreation datetime,magasin smallint(4), PRIMARY KEY (id,magasin,vendeur))";
   var createStatement10 = "CREATE TABLE IF NOT EXISTS modelivraison (id smallint(4) PRIMARY KEY ,  intitule CHAR(500))"; 
  var createStatement11 = "CREATE TABLE IF NOT EXISTS commande(id INTEGER(11) ,vendeur INTEGER(11) ,client INTEGER(11) ,magasin smallint(4) ,encaissement INTEGER(11) ,montant FLOAT ,total FLOAT ,dateCreation datetime , livraison smallint(3) , recharge smallint(1), type smallint(1), PRIMARY KEY (id,magasin,vendeur))";
  var createStatement12 = "CREATE TABLE IF NOT EXISTS remise(id INTEGER(11) ,client INTEGER(11) ,vendeur INTEGER(11) ,pourcentage smallint(3) , magasin smallint(3) , montant FLOAT,commande INTEGER(11) ,etat smallint(1) , dateCreation datetime, type smallint(1), PRIMARY KEY (id,magasin,vendeur))";
   var createStatement13 = "CREATE TABLE IF NOT EXISTS caisse(id INTEGER(11) ,vendeur INTEGER(11) ,magasin smallint(3) , etat smallint(1) ,entree FLOAT,sortie FLOAT, dateCreation datetime, PRIMARY KEY (id,magasin,vendeur))";
   var createStatement14 = "CREATE TABLE IF NOT EXISTS fidelite(id INTEGER(11) ,vendeur INTEGER(11) ,magasin smallint(3) , client INTEGER(11) ,credit FLOAT,commande INTEGER(11), dateCreation datetime, PRIMARY KEY (id,magasin,vendeur))";
   var createStatement15 = "CREATE TABLE IF NOT EXISTS fournisseur(id INTEGER(11) ,raison CHAR(500) ,responsable CHAR(500) , phone CHAR(200) ,email CHAR(200),fax CHAR(200),ville smallint(4), adresse CHAR(2000), remarque CHAR(2000), dateCreation datetime, PRIMARY KEY (id))";
   var createStatement16 = "CREATE TABLE IF NOT EXISTS produit(id INTEGER(11) ,libelle CHAR(500) ,taille FLOAT , unite CHAR(100) ,magasin smallint(1) ,quantite FLOAT, quantitea FLOAT, dateCreation datetime ,cache smallint(1) ,portion FLOAT,PRIMARY KEY (id))";
   var createStatement17 = "CREATE TABLE IF NOT EXISTS produitfournisseur(id INTEGER(11) ,fournisseur INTEGER(11) ,produit INTEGER(11) , prix FLOAT ,dateCreation datetime, PRIMARY KEY (id))";
   var createStatement18 = "CREATE TABLE IF NOT EXISTS produittransforme(id INTEGER(11) ,libelle CHAR(100) ,sousfamille INTEGER(11) , magasin smallint(1) ,dateCreation datetime,unite CHAR(100) ,portion FLOAT, PRIMARY KEY (id))";
   var createStatement19 = "CREATE TABLE IF NOT EXISTS etat_entree(id INTEGER(11) ,fournisseur INTEGER(11) ,produit INTEGER(11) , quantite INTEGER(11) ,dateCreation datetime, vendeur INTEGER(11), etat CHAR(100) , commentaire CHAR(100) , PRIMARY KEY (id))";
   var createStatement20 = "CREATE TABLE IF NOT EXISTS produitbt(id INTEGER(11) ,produittransforme INTEGER(11) ,produitbrut INTEGER(11) , taille FLOAT ,dateCreation datetime, PRIMARY KEY (id))";
   var createStatement21 = "CREATE TABLE IF NOT EXISTS etat_be(id INTEGER(11) ,produit INTEGER(11) ,magasin INTEGER(11) ,type smallint(1) , quantite INTEGER(11) ,dateCreation datetime, vendeur INTEGER(11), commentaire CHAR(100) ,etat CHAR(10) ,statut smallint(1), PRIMARY KEY (id))";
   
 var selectAllStatement1 = "SELECT * FROM personnel";
 var selectAllStatement2 = "SELECT * FROM famille";
 var selectAllStatement3 = "SELECT * FROM client";
 var selectAllStatement4 = "SELECT * FROM encaissement";
 var selectAllStatement5 = "SELECT * FROM etatencaissement";
 var selectAllStatement6 = "SELECT * FROM magasin";
 var selectAllStatement7 = "SELECT * FROM modepaiement";
 var selectAllStatement8 = "SELECT * FROM sousfamille";
 var selectAllStatement9 = "SELECT * FROM panier";
 var selectAllStatement10 = "SELECT * FROM modelivraison";
 var selectAllStatement11 = "SELECT * FROM commande";
 var selectAllStatement12 = "SELECT * FROM remise";
 var selectAllStatement13 = "SELECT * FROM caisse";
 var selectAllStatement14 = "SELECT * FROM fidelite";
 var selectAllStatement15 = "SELECT * FROM fournisseur";
 var selectAllStatement16 = "SELECT * FROM produit";
 var selectAllStatement17 = "SELECT * FROM produitfournisseur";
 var selectAllStatement18 = "SELECT * FROM produittransforme";
 var selectAllStatement19 = "SELECT * FROM etat_entree";
 var selectAllStatement20 = "SELECT * FROM produitbt";
 var selectAllStatement21 = "SELECT * FROM etat_be";
 
 

 var insertStatement1 = "INSERT INTO personnel (id, sexe, immatricule, nom, prenom, cin, phone, email, adresse, ville, dateAffectation, diplome, magasin, utilisateur, dateCreation, etat, rib, banque, fonction, dateNaissance, login, passe, type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
 var insertStatement2 = "INSERT INTO famille (id, libelle, dateCreation, ordre, etat) VALUES (?, ?, ?, ?, ?)";
 var insertStatement3 = "INSERT INTO client (id, code, sexe, nom, prenom, email, phone, adresse, dateNaissance, magasin, ville, utilisateur, dateCreation, dateModification, point, etat, avant) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
 var insertStatement4 = "INSERT INTO encaissement (id, date, magasin, client, montant, dateCreation, vendeur, commande) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
 var insertStatement5 = "INSERT INTO etatencaissement (id, encaissement, modepaiement, solde, dateCreation, magasin, dateEncais,vendeur) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
 var insertStatement6 = "INSERT INTO magasin (id, intitule, dateCreation, type, etat) VALUES (?, ?, ?, ?, ?)";
 var insertStatement7 = "INSERT INTO modepaiement (id, indice,intitule, dateCreation, etat) VALUES (?, ?, ?, ?, ?)";
 var insertStatement8 = "INSERT INTO sousfamille (id,libelle, famille,parent,prix,tva,tvabis,ordre,alerte,dateCreation) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
 var insertStatement9 = "INSERT INTO panier (id, commande, session, produit, tva, libelle, prix, remise, client, vendeur, qte, etat, dateCreation, magasin) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
 var insertStatement10 = "INSERT INTO modelivraison (id, intitule) VALUES (?, ?)";
 var insertStatement11 = "INSERT INTO commande (id, vendeur, client, magasin, encaissement, montant, total, dateCreation,livraison,recharge,type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
 var insertStatement12 = "INSERT INTO remise (id, client, vendeur, pourcentage, montant, magasin, commande, etat, dateCreation, type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  var insertStatement13 = "INSERT INTO caisse (id, vendeur, magasin, etat, entree, sortie, dateCreation) VALUES (?, ?, ?, ?, ?, ?, ?)";
  var insertStatement14 = "INSERT INTO fidelite (  id ,  client ,  credit ,  commande ,  dateCreation ,  vendeur ,  magasin ) VALUES (?, ?, ?, ?, ?, ?, ?)";
  var insertStatement15 = "INSERT INTO fournisseur (id, raison, responsable, phone, email, fax, ville, adresse, remarque, dateCreation) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  var insertStatement16 = "INSERT INTO produit (id, libelle, taille, unite, quantite, quantitea, magasin, dateCreation, cache, portion) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  var insertStatement17 = "INSERT INTO produitfournisseur (id, fournisseur, produit, prix, dateCreation) VALUES (?, ?, ?, ?, ?)";
  var insertStatement18 = "INSERT INTO produittransforme (id, libelle, sousfamille, magasin, unite, dateCreation, portion) VALUES (?, ?, ?, ?, ?,? , ?)";
  var insertStatement19 = "INSERT INTO etat_entree (id ,  fournisseur ,  produit ,  quantite ,  dateCreation ,  vendeur, etat , commentaire ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  var insertStatement20 = "INSERT INTO produitbt (id ,  produittransforme ,  produitbrut ,  taille ,  dateCreation ) VALUES (?, ?, ?, ?, ?)";
  var insertStatement19 = "INSERT INTO etat_be (id ,  produit ,  type ,  magasin ,  quantite ,  dateCreation ,  vendeur, etat, statut, commentaire ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";



 var deleteStatement1 = "delete from personnel ";
 var deleteStatement2 = "delete from famille ";
 var deleteStatement3 = "delete from client ";
 var deleteStatement4 = "delete from encaissement ";
 var deleteStatement5 = "delete from etatencaissement ";
 var deleteStatement6 = "delete from magasin ";
 var deleteStatement7 = "delete from modepaiement ";
 var deleteStatement8 = "delete from sousfamille ";
 var deleteStatement9 = "delete from panier ";
 var deleteStatement10 = "delete from modelivraison ";
 var deleteStatement11 = "delete from commande ";
 var deleteStatement12 = "delete from remise ";
 var deleteStatement13 = "delete from caisse ";
 var deleteStatement14 = "delete from fidelite ";
 var deleteStatement15 = "delete from fournisseur ";
 var deleteStatement16 = "delete from produit ";
 var deleteStatement17 = "delete from produitfournisseur ";
 var deleteStatement18 = "delete from produittransforme ";
 var deleteStatement19 = "delete from etat_entree ";
 var deleteStatement20 = "delete from produitbt ";
 var deleteStatement21 = "delete from etat_be ";

 var dropStatement1 = "DROP TABLE personnel";
  var dropStatement2 = "DROP TABLE famille ";
  var dropStatement3 = "DROP TABLE client ";
  var dropStatement4 = "DROP TABLE encaissement ";
  var dropStatement5 = "DROP TABLE etatencaissement ";
   var dropStatement6 = "DROP TABLE magasin ";
  var dropStatement7 = "DROP TABLE modepaiement ";
  var dropStatement8 = "DROP TABLE sousfamille ";
  var dropStatement9 = "DROP TABLE panier ";
  var dropStatement10 = "DROP TABLE modelivraison ";
  var dropStatement11 = "DROP TABLE commande ";
  var dropStatement12 = "DROP TABLE remise ";
  var dropStatement13 = "DROP TABLE caisse ";
  var dropStatement14 = "DROP TABLE fidelite ";
  var dropStatement15 = "DROP TABLE fournisseur ";
  var dropStatement16 = "DROP TABLE produit ";
  var dropStatement17 = "DROP TABLE produitfournisseur ";
  var dropStatement18 = "DROP TABLE produittransforme ";
  var dropStatement19 = "DROP TABLE etat_entree ";
  var dropStatement20 = "DROP TABLE produitbt ";
  var dropStatement21 = "DROP TABLE etat_be ";
  
  var verifStatement3 = "select code from client where code=? ";

var db = openDatabase("DOGAPP54", "54.0", "DOG APP IPAD 54", 200000);
  var dataset;


 function mise()
 {

document.getElementById('miseajour').innerHTML='<img src="pictures/loaderbis.gif" />';
  createTable();insertRecord1();insertRecord2();insertRecord3();insertRecord4();insertRecord5();insertRecord6();insertRecord7();insertRecord8();insertRecord9();insertRecord10();insertRecord11();insertRecord12();insertRecord13();insertRecord15();insertRecord16();insertRecord17();insertRecord18();insertRecord19();insertRecord20();insertRecord21();insertRecord14(); 
 
 
 }
      
           function onError(tx, error) {
     
      }
      
      function showRecords() {
	
      }
	  
	
	  
      	  	   function showRecords14() {
       
        db.transaction(function(tx) {
          tx.executeSql(selectAllStatement8, [], function(tx, result) {
dataset = result.rows;results14.innerHTML= dataset.length;
if(dataset.length=='') mise();else {document.getElementById('miseajour').innerHTML='Mise &agrave; jour effectu&eacute;e avec succ&egrave;s!';}
          }); });}
	  
      
             function createTable() { 
        db.transaction(function(tx) {
          tx.executeSql(createStatement1, [], showRecords, onError);
		  tx.executeSql(createStatement2, [], showRecords, onError);
		  tx.executeSql(createStatement3, [], showRecords, onError);
		   tx.executeSql(createStatement4, [], showRecords, onError);
		    tx.executeSql(createStatement5, [], showRecords, onError);
			 tx.executeSql(createStatement6, [], showRecords, onError);
			  tx.executeSql(createStatement7, [], showRecords, onError);
			   tx.executeSql(createStatement8, [], showRecords, onError);
			    tx.executeSql(createStatement9, [], showRecords, onError);
				tx.executeSql(createStatement10, [], showRecords, onError);
				tx.executeSql(createStatement11, [], showRecords, onError);
				tx.executeSql(createStatement12, [], showRecords, onError);
				tx.executeSql(createStatement13, [], showRecords, onError);
				tx.executeSql(createStatement15, [], showRecords, onError);
				tx.executeSql(createStatement16, [], showRecords, onError);
				tx.executeSql(createStatement17, [], showRecords, onError);
				tx.executeSql(createStatement18, [], showRecords, onError);
				tx.executeSql(createStatement19, [], showRecords, onError);
				tx.executeSql(createStatement20, [], showRecords, onError);
				tx.executeSql(createStatement21, [], showRecords, onError);
				tx.executeSql(createStatement14, [], showRecords14, onError);
        });
      }
      
      function insertRecord1() {
        db.transaction(function(tx) {
		tx.executeSql(deleteStatement1, [], loadAndReset, onError);
			
		
          tx.executeSql(insertStatement1, ["1","0","04000001","QSDQD","SOUFISN","HHHH","0999999999999","soufianbarakat@yahoo.fr","JJJJ","7","2013-02-14","kkkk","1","39","2013-02-20 11:34:03","1","99999999999","30","Ingénieur","2013-02-14","123","12c9ce50f0363db3efb38b63ff6065cd","1"], loadAndReset, onError);
       			 });
      }
	  
	  function insertRecord2() {
        db.transaction(function(tx) {
		tx.executeSql(deleteStatement2, [], loadAndReset, onError);
		          tx.executeSql(insertStatement2,  ["1", "Favoris", "2013-03-01 15:36:07", "1", "1"], loadAndReset, onError);
		          tx.executeSql(insertStatement2,  ["2", "Saucisses", "2013-02-15 23:04:51", "2", "1"], loadAndReset, onError);
		          tx.executeSql(insertStatement2,  ["3", "Condiments", "2013-02-15 23:05:07", "3", "1"], loadAndReset, onError);
		          tx.executeSql(insertStatement2,  ["4", "Sauces", "2013-02-15 23:05:18", "4", "1"], loadAndReset, onError);
		          tx.executeSql(insertStatement2,  ["5", "Accompagnement", "2013-02-15 23:05:43", "5", "1"], loadAndReset, onError);
		          tx.executeSql(insertStatement2,  ["6", "Salade", "2013-02-15 23:05:51", "6", "1"], loadAndReset, onError);
		          tx.executeSql(insertStatement2,  ["7", "Boisson", "2013-02-15 23:06:21", "7", "1"], loadAndReset, onError);
		          tx.executeSql(insertStatement2,  ["8", "Dessert", "2013-02-15 23:06:50", "8", "1"], loadAndReset, onError);
		          tx.executeSql(insertStatement2,  ["9", "Menu", "2013-02-15 23:28:59", "9", "1"], loadAndReset, onError);
		        });
      }
	  
	  	 function insertRecord3() {
        db.transaction(function(tx) {
		tx.executeSql(verifStatement3, [1], function(tx, resultaa) {
				dataset = resultaa.rows;
				if(dataset.length==0) {
		tx.executeSql(deleteStatement3, [], loadAndReset, onError);
				
          tx.executeSql(insertStatement3,  ["1", "1", "1", "Particulier", "", "soufianbarakat@yahoo.fr", "06445555", "rue%20garibaldi", "2013-01-16", "1", "0","1", "2013-01-31 11:33:04", "2013-02-26 15:48:10", "0" , "1","0"], loadAndReset, onError);
				
          tx.executeSql(insertStatement3,  ["2", "999", "0", "Tagemouati", "Zouhair", "z.tagemouati@thehotdogcompany.ma", "661107015", "48%20R%E9s.%20Sofia%20Route%20d%27azemmour", "1990-03-04", "1", "0","1", "2013-02-24 00:35:15", "2013-02-26 15:47:08", "1.28" , "1","1.28"], loadAndReset, onError);
				
          tx.executeSql(insertStatement3,  ["3", "5", "5", "5", "5", "5", "5", "5", "0000-00-00", "5", "0","5", "0000-00-00 00:00:00", "0000-00-00 00:00:00", "5" , "5","5"], loadAndReset, onError);
				
          tx.executeSql(insertStatement3,  ["4", "6", "0", "ddd", "sf", "sss@mail.com", "5646", "qsqS", "2013-02-19", "1", "0","1", "2013-02-26 15:38:59", "2013-02-26 15:48:40", "0" , "1","0"], loadAndReset, onError);
		      } }); 
				 }); 
      }
	  
	  	  	
	  
	  
	  
	  
	  
	   function insertRecord4() {
        db.transaction(function(tx) {
		        });
      }

	  
	  function insertRecord5() {
        db.transaction(function(tx) {
		        });
      }
	  
	   function insertRecord6() {
        db.transaction(function(tx) {
		tx.executeSql(deleteStatement6, [], loadAndReset, onError);
		          tx.executeSql(insertStatement6,  ["1", "Magasin Lyautey", "2013-03-02 11:29:14", "0", "1"], loadAndReset, onError);
		          tx.executeSql(insertStatement6,  ["4", "Charriot 1", "2013-03-03 00:45:15", "1", "1"], loadAndReset, onError);
		          tx.executeSql(insertStatement6,  ["5", "Charriot 2", "2013-03-03 14:47:47", "1", "1"], loadAndReset, onError);
		        });
      }
	  
	   function insertRecord7() {
        db.transaction(function(tx) {
		tx.executeSql(deleteStatement7, [], loadAndReset, onError);
		          tx.executeSql(insertStatement7,  ["1", "ESP", "Paiement Espèces", "2013-02-07 10:42:17", "1"], loadAndReset, onError);
		          tx.executeSql(insertStatement7,  ["2", "CB", "Paiement par CB", "0000-00-00 00:00:00", "1"], loadAndReset, onError);
		          tx.executeSql(insertStatement7,  ["3", "CH", "Paiement par Chèque", "0000-00-00 00:00:00", "1"], loadAndReset, onError);
		          tx.executeSql(insertStatement7,  ["4", "VIR", "Virement Bancaire", "0000-00-00 00:00:00", "1"], loadAndReset, onError);
		        });
      }
	  
	  
	  function insertRecord8() {
        db.transaction(function(tx) {
		tx.executeSql(deleteStatement8, [], loadAndReset, onError);
		          tx.executeSql(insertStatement8,  ["16", "Economical", "2", "1", "13", "10", "0", "1", "0", "2013-03-01 16:34:50"], loadAndReset, onError);
		          tx.executeSql(insertStatement8,  ["17", "Special", "2", "1", "20", "10", "0", "2", "0", "2013-03-01 16:35:16"], loadAndReset, onError);
		          tx.executeSql(insertStatement8,  ["18", "Cheesy", "2", "1", "22", "10", "0", "3", "0", "2013-03-01 16:35:24"], loadAndReset, onError);
		          tx.executeSql(insertStatement8,  ["20", "Ducky", "2", "0", "18", "10", "0", "5", "0", "0000-00-00 00:00:00"], loadAndReset, onError);
		          tx.executeSql(insertStatement8,  ["21", "Oignons frits", "3", "1", "3", "10", "0", "1", "0", "2013-03-01 16:35:32"], loadAndReset, onError);
		          tx.executeSql(insertStatement8,  ["22", "Cheddar", "3", "1", "5", "10", "0", "2", "0", "2013-03-01 16:35:44"], loadAndReset, onError);
		          tx.executeSql(insertStatement8,  ["23", "Relish", "3", "0", "5", "10", "0", "3", "0", "0000-00-00 00:00:00"], loadAndReset, onError);
		          tx.executeSql(insertStatement8,  ["24", "Bacon", "3", "0", "7", "10", "0", "4", "10", "2013-03-08 16:49:14"], loadAndReset, onError);
		          tx.executeSql(insertStatement8,  ["25", "Chili", "3", "0", "7", "10", "0", "5", "0", "0000-00-00 00:00:00"], loadAndReset, onError);
		          tx.executeSql(insertStatement8,  ["26", "Piments", "3", "0", "3", "10", "0", "6", "0", "0000-00-00 00:00:00"], loadAndReset, onError);
		          tx.executeSql(insertStatement8,  ["27", "Oignon caramelisé", "3", "0", "3", "10", "0", "7", "0", "0000-00-00 00:00:00"], loadAndReset, onError);
		          tx.executeSql(insertStatement8,  ["28", "Choucroute", "3", "0", "5", "10", "0", "8", "0", "0000-00-00 00:00:00"], loadAndReset, onError);
		          tx.executeSql(insertStatement8,  ["29", "Ketchup", "4", "0", "0", "10", "0", "1", "0", "0000-00-00 00:00:00"], loadAndReset, onError);
		          tx.executeSql(insertStatement8,  ["30", "Mustard sucré", "4", "0", "0", "10", "0", "2", "0", "0000-00-00 00:00:00"], loadAndReset, onError);
		          tx.executeSql(insertStatement8,  ["31", "Moutarde ancienne", "4", "0", "0", "10", "0", "3", "0", "0000-00-00 00:00:00"], loadAndReset, onError);
		          tx.executeSql(insertStatement8,  ["32", "Mayonnaise", "4", "0", "0", "10", "0", "4", "0", "0000-00-00 00:00:00"], loadAndReset, onError);
		          tx.executeSql(insertStatement8,  ["33", "Barbecue", "4", "0", "0", "10", "0", "5", "0", "0000-00-00 00:00:00"], loadAndReset, onError);
		          tx.executeSql(insertStatement8,  ["34", "Sauce spéciale 1", "4", "1", "3", "10", "0", "6", "0", "2013-03-01 16:35:56"], loadAndReset, onError);
		          tx.executeSql(insertStatement8,  ["35", "Sauce spéciale 2", "4", "1", "5", "10", "0", "7", "0", "2013-03-01 16:36:01"], loadAndReset, onError);
		          tx.executeSql(insertStatement8,  ["36", "Chili Con Carne", "5", "1", "10", "10", "0", "1", "0", "2013-03-01 16:36:32"], loadAndReset, onError);
		          tx.executeSql(insertStatement8,  ["37", "Pomme au four", "5", "1", "7", "10", "0", "2", "0", "2013-03-01 16:36:49"], loadAndReset, onError);
		          tx.executeSql(insertStatement8,  ["38", "Coleslow", "5", "1", "7", "10", "0", "3", "0", "2013-03-01 16:37:12"], loadAndReset, onError);
		          tx.executeSql(insertStatement8,  ["39", "César", "6", "0", "38", "10", "0", "1", "0", "0000-00-00 00:00:00"], loadAndReset, onError);
		          tx.executeSql(insertStatement8,  ["40", "Coleslow", "6", "0", "30", "10", "0", "2", "0", "0000-00-00 00:00:00"], loadAndReset, onError);
		          tx.executeSql(insertStatement8,  ["41", "Pression 33Cl", "7", "1", "6", "10", "0", "1", "0", "2013-03-01 16:36:09"], loadAndReset, onError);
		          tx.executeSql(insertStatement8,  ["42", "Pression 50Cl", "7", "1", "8", "10", "0", "2", "0", "2013-03-01 16:36:22"], loadAndReset, onError);
		          tx.executeSql(insertStatement8,  ["43", "Canette 33Cl", "7", "0", "8", "10", "0", "3", "0", "0000-00-00 00:00:00"], loadAndReset, onError);
		          tx.executeSql(insertStatement8,  ["44", "Bouteille 33Cl", "7", "0", "10", "10", "0", "4", "0", "0000-00-00 00:00:00"], loadAndReset, onError);
		          tx.executeSql(insertStatement8,  ["45", "Sidi Ali", "7", "0", "6", "10", "0", "5", "0", "0000-00-00 00:00:00"], loadAndReset, onError);
		          tx.executeSql(insertStatement8,  ["46", "Nespresso", "7", "0", "10", "10", "0", "6", "0", "0000-00-00 00:00:00"], loadAndReset, onError);
		          tx.executeSql(insertStatement8,  ["47", "Thé", "7", "0", "10", "10", "0", "7", "0", "0000-00-00 00:00:00"], loadAndReset, onError);
		          tx.executeSql(insertStatement8,  ["48", "Cupcake Mini", "8", "0", "6", "10", "0", "1", "0", "0000-00-00 00:00:00"], loadAndReset, onError);
		          tx.executeSql(insertStatement8,  ["49", "Cupcake Cream Cheese", "8", "0", "20", "10", "0", "2", "0", "0000-00-00 00:00:00"], loadAndReset, onError);
		          tx.executeSql(insertStatement8,  ["50", "Cupcake Classic", "8", "0", "18", "10", "0", "3", "0", "0000-00-00 00:00:00"], loadAndReset, onError);
		          tx.executeSql(insertStatement8,  ["51", "Menu 1", "9", "1", "-6", "10", "0", "1", "0", "2013-03-01 16:37:29"], loadAndReset, onError);
		          tx.executeSql(insertStatement8,  ["52", "Menu 2", "9", "1", "-7", "10", "0", "2", "0", "2013-03-01 16:37:39"], loadAndReset, onError);
		        });
      }
	  
	  
	  	  function insertRecord9() {
        db.transaction(function(tx) {
		        });
		
      }
	  
	  	   function insertRecord10() {
        db.transaction(function(tx) {
		tx.executeSql(deleteStatement10, [], loadAndReset, onError);
		          tx.executeSql(insertStatement10,  ["1", "A emporter"], loadAndReset, onError);
		          tx.executeSql(insertStatement10,  ["2", "Sur place"], loadAndReset, onError);
		        });
		
      }

	    function insertRecord11() {
        db.transaction(function(tx) {
		        });
		
      }
	  
	  
	  function insertRecord12() {
        db.transaction(function(tx) {
		        });
		
      }
	  
	  function insertRecord13() {
        db.transaction(function(tx) {
		tx.executeSql(deleteStatement13, [], loadAndReset, onError);
		          tx.executeSql(insertStatement13,  ["1", "1", "1", "0", "150", "0", "0000-00-00 00:00:00"], loadAndReset, onError);
		        });
		
      }
	  
	  	  function insertRecord14() {
        db.transaction(function(tx) {
		tx.executeSql(deleteStatement14, [], loadAndReset, onError);
		          tx.executeSql(insertStatement14,  ["1", "1", "1", "1", "0000-00-00 00:00:00", "1", "1"], loadAndReset, onError);
		        });
		
      }
	  
	  	  function insertRecord15() {
        db.transaction(function(tx) {
		tx.executeSql(deleteStatement15, [], loadAndReset, onError);
		          tx.executeSql(insertStatement15,  ["4", "Charcuterie Miami", "Soufiane", "","","","1","", "", "2013-03-01 11:32:23"], loadAndReset, onError);
		          tx.executeSql(insertStatement15,  ["5", "La Fonda", "", "","","","1","", "", "2013-03-01 11:32:35"], loadAndReset, onError);
		          tx.executeSql(insertStatement15,  ["6", "Koutoubia", "Zacharia", "0600000","zak@koutoubia.ma","052222","2","", "", "2013-03-01 11:33:02"], loadAndReset, onError);
		          tx.executeSql(insertStatement15,  ["7", "Le Fournil de Paris", "", "","","","14","", "", "2013-03-01 11:33:13"], loadAndReset, onError);
		          tx.executeSql(insertStatement15,  ["8", "Importation", "", "","","","3","", "", "2013-03-08 15:59:02"], loadAndReset, onError);
		          tx.executeSql(insertStatement15,  ["9", "Metro", "", "","","","26","", "", "2013-03-01 11:33:32"], loadAndReset, onError);
		          tx.executeSql(insertStatement15,  ["10", "King Generation", "", "","","","24","", "", "2013-03-01 11:33:45"], loadAndReset, onError);
		        });
		
      }
	  
	   	  function insertRecord16() {
        db.transaction(function(tx) {
		tx.executeSql(deleteStatement16, [], loadAndReset, onError);
		          tx.executeSql(insertStatement16,  ["3", "Pack 1kg Saucisse genial", "1000", "gr","0","0","0","2013-03-01 11:31:13","0","0"], loadAndReset, onError);
		          tx.executeSql(insertStatement16,  ["4", "pack Boisson coca 33cl", "100", "pack","0","0","0","2013-03-01 11:31:54","0","0"], loadAndReset, onError);
		          tx.executeSql(insertStatement16,  ["5", "Pack 250g Saucisse genial", "250", "gr","0","0","0","2013-03-01 11:31:26","0","0"], loadAndReset, onError);
		          tx.executeSql(insertStatement16,  ["6", "Pack 1kg Saucisse de vienne", "1000", "gr","0","0","0","2013-03-01 11:34:11","0","0"], loadAndReset, onError);
		          tx.executeSql(insertStatement16,  ["7", "Pack 250g Saucisse de vienne", "250", "gr","0","0","0","2013-03-01 11:34:18","0","0"], loadAndReset, onError);
		          tx.executeSql(insertStatement16,  ["8", "Pack 1kg Saucisse de Strasbourg", "1000", "gr","0","0","0","2013-03-01 11:34:37","0","0"], loadAndReset, onError);
		          tx.executeSql(insertStatement16,  ["9", "Pack 250 g Saucisse de Strasbourg", "250", "gr","0","0","0","2013-03-01 11:34:42","0","0"], loadAndReset, onError);
		          tx.executeSql(insertStatement16,  ["10", "Pack 1kg Poitrine de Buf", "1000", "gr","0","0","0","2013-03-01 11:35:15","0","0"], loadAndReset, onError);
		          tx.executeSql(insertStatement16,  ["11", "Pack 250 g Poitrine de buf", "250", "gr","0","0","0","2013-03-01 11:35:27","0","0"], loadAndReset, onError);
		          tx.executeSql(insertStatement16,  ["12", "Sauce tomate 250 g", "250", "gr","0","0","0","2013-03-01 11:35:43","0","0"], loadAndReset, onError);
		          tx.executeSql(insertStatement16,  ["13", "Feves 1KG", "1000", "gr","0","0","0","2013-03-08 16:42:04","1","0"], loadAndReset, onError);
		          tx.executeSql(insertStatement16,  ["14", "Huile 5L", "5000", "ml","0","0","0","2013-03-01 11:36:06","0","0"], loadAndReset, onError);
		          tx.executeSql(insertStatement16,  ["15", "Pack 4 pains", "4", "pack","0","0","0","2013-03-01 11:36:29","0","0"], loadAndReset, onError);
		          tx.executeSql(insertStatement16,  ["16", "Pack 16 pains", "16", "pack","0","0","0","2013-03-01 11:36:47","0","0"], loadAndReset, onError);
		          tx.executeSql(insertStatement16,  ["17", "Frites Surgelé 5KG", "5000", "gr","0","0","0","2013-03-01 11:45:52","0","0"], loadAndReset, onError);
		          tx.executeSql(insertStatement16,  ["19", "Pack 1kg Oignon frits", "1000", "g","0","0","0","2013-03-08 16:00:13","0","0"], loadAndReset, onError);
		          tx.executeSql(insertStatement16,  ["20", "Pack 250g Choucroute", "250", "gr","0","0","0","2013-03-08 16:00:29","0","0"], loadAndReset, onError);
		        });
		
      }
	


	  
	  
	   	  function insertRecord17() {
        db.transaction(function(tx) {
		tx.executeSql(deleteStatement17, [], loadAndReset, onError);
		          tx.executeSql(insertStatement17,  ["2", "4", "3", "65", "2013-03-01 11:39:27"], loadAndReset, onError);
		          tx.executeSql(insertStatement17,  ["3", "4", "5", "20", "2013-03-01 11:39:36"], loadAndReset, onError);
		          tx.executeSql(insertStatement17,  ["4", "5", "6", "95", "2013-03-01 11:39:56"], loadAndReset, onError);
		          tx.executeSql(insertStatement17,  ["5", "5", "7", "20", "2013-03-01 11:40:11"], loadAndReset, onError);
		          tx.executeSql(insertStatement17,  ["6", "6", "10", "65", "2013-03-01 11:40:39"], loadAndReset, onError);
		          tx.executeSql(insertStatement17,  ["7", "6", "11", "20", "2013-03-01 11:41:30"], loadAndReset, onError);
		          tx.executeSql(insertStatement17,  ["8", "7", "15", "8", "2013-03-01 11:41:46"], loadAndReset, onError);
		          tx.executeSql(insertStatement17,  ["9", "7", "16", "32", "2013-03-01 11:41:55"], loadAndReset, onError);
		          tx.executeSql(insertStatement17,  ["10", "9", "12", "20", "2013-03-01 11:42:11"], loadAndReset, onError);
		          tx.executeSql(insertStatement17,  ["11", "9", "14", "75", "2013-03-01 11:42:34"], loadAndReset, onError);
		          tx.executeSql(insertStatement17,  ["12", "9", "13", "15", "2013-03-01 11:42:49"], loadAndReset, onError);
		          tx.executeSql(insertStatement17,  ["13", "10", "17", "2", "2013-03-01 11:46:15"], loadAndReset, onError);
		          tx.executeSql(insertStatement17,  ["14", "8", "19", "200", "2013-03-08 16:01:11"], loadAndReset, onError);
		          tx.executeSql(insertStatement17,  ["15", "8", "20", "50", "2013-03-08 16:01:23"], loadAndReset, onError);
		        });
		
      }

	   	  function insertRecord18() {
        db.transaction(function(tx) {
		tx.executeSql(deleteStatement18, [], loadAndReset, onError);
		          tx.executeSql(insertStatement18,  ["10", "Chili Con Carne 1/2 GN", "36", "0", "gr","2013-03-03 13:01:37","0"], loadAndReset, onError);
		          tx.executeSql(insertStatement18,  ["11", "Frites", "21", "1", "gr","2013-03-03 13:01:53","0"], loadAndReset, onError);
		        });
		
      }
	  
	   	    function insertRecord19() {
        db.transaction(function(tx) {
		        });
		
      }
	 	   function insertRecord20() {
        db.transaction(function(tx) {
		tx.executeSql(deleteStatement20, [], loadAndReset, onError);
		          tx.executeSql(insertStatement20,  ["69", "10", "12", "1500", "2013-03-02 23:55:38"], loadAndReset, onError);
		          tx.executeSql(insertStatement20,  ["70", "10", "13", "500", "2013-03-02 23:55:42"], loadAndReset, onError);
		          tx.executeSql(insertStatement20,  ["71", "11", "17", "5000", "2013-03-03 00:00:19"], loadAndReset, onError);
		          tx.executeSql(insertStatement20,  ["72", "11", "14", "300", "2013-03-03 00:00:29"], loadAndReset, onError);
		        });
      }
	  
	   function insertRecord21() {
        db.transaction(function(tx) {
		        });
		
      }
	  
	  
       function loadRecord(i) {
var item = dataset.item(i); 
      }


      
      function deleteRecord() {
        db.transaction(function(tx) {
          tx.executeSql(deleteStatement1, [], loadAndReset, onError);
		  tx.executeSql(deleteStatement2, [], loadAndReset, onError);
		  tx.executeSql(deleteStatement3, [], loadAndReset, onError);
		   tx.executeSql(deleteStatement4, [], loadAndReset, onError);
		    tx.executeSql(deleteStatement5, [], loadAndReset, onError);
			 tx.executeSql(deleteStatement6, [], loadAndReset, onError);
			  tx.executeSql(deleteStatement7, [], loadAndReset, onError);
			  tx.executeSql(deleteStatement8, [], loadAndReset, onError);
			  tx.executeSql(deleteStatement9, [], loadAndReset, onError);
			  tx.executeSql(deleteStatement10, [], loadAndReset, onError);
			   tx.executeSql(deleteStatement11, [], loadAndReset, onError);
			    tx.executeSql(deleteStatement12, [], loadAndReset, onError);
				  tx.executeSql(deleteStatement13, [], loadAndReset, onError);				 
				  tx.executeSql(deleteStatement15, [], loadAndReset, onError);
				  tx.executeSql(deleteStatement16, [], loadAndReset, onError);
				  tx.executeSql(deleteStatement17, [], loadAndReset, onError);
				  tx.executeSql(deleteStatement18, [], loadAndReset, onError);
				  tx.executeSql(deleteStatement19, [], loadAndReset, onError);
				  tx.executeSql(deleteStatement20, [], loadAndReset, onError);
				  tx.executeSql(deleteStatement21, [], loadAndReset, onError);
				   tx.executeSql(deleteStatement14, [], loadAndReset, onError);
        });
resetForm();
      }
       
      function dropTable() {
        db.transaction(function(tx) {
          tx.executeSql(dropStatement1, [], showRecords1, onError);
		   tx.executeSql(dropStatement2, [], showRecords2, onError);
		    tx.executeSql(dropStatement3, [], showRecords3, onError);
			 tx.executeSql(dropStatement4, [], showRecords4, onError);
			  tx.executeSql(dropStatement5, [], showRecords5, onError);
			   tx.executeSql(dropStatement6, [], showRecords6, onError);
			    tx.executeSql(dropStatement7, [], showRecords7, onError);
				 tx.executeSql(dropStatement8, [], showRecords8, onError);
				  tx.executeSql(dropStatement9, [], showRecords9, onError);
				  tx.executeSql(dropStatement10, [], showRecords10, onError);
				  tx.executeSql(dropStatement11, [], showRecords11, onError);
				  tx.executeSql(dropStatement12, [], showRecords12, onError);
				   tx.executeSql(dropStatement13, [], showRecords13, onError);
				  tx.executeSql(dropStatement15, [], showRecords15, onError);
				  tx.executeSql(dropStatement16, [], showRecords16, onError);
				  tx.executeSql(dropStatement17, [], showRecords17, onError);
				  tx.executeSql(dropStatement18, [], showRecords18, onError);
				   tx.executeSql(dropStatement19, [], showRecords19, onError);
				   tx.executeSql(dropStatement20, [], showRecords20, onError);
				   tx.executeSql(dropStatement21, [], showRecords21, onError);
				    tx.executeSql(dropStatement14, [], showRecords14, onError);
        });
resetForm();
      }

 function loadAndReset(){
 }

 function resetForm(){
 }

