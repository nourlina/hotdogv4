var login = document.getElementById('login_username').value;
var passe = document.getElementById('login_passwd').value;
var selectFamilles = "SELECT * FROM famille where etat=? order by ordre asc";
var verifStatement = "SELECT personnel.id,personnel.magasin,personnel.type,personnel.nom,personnel.prenom,personnel.login,magasin.intitule, magasin.type as typemagasin FROM personnel inner join magasin on magasin.id=personnel.magasin where ( personnel.login = ?  and personnel.passe=? and personnel.etat = ? )";
var selectVendeur = "SELECT nom,prenom FROM personnel where id=? ";
var selectSousFamille = "SELECT * FROM sousfamille where famille = ? and id != ? order by ordre asc";
var selectSousFamillebis = "SELECT * FROM sousfamille where parent = ? and id != ? order by ordre asc ";
var selectProduit = "SELECT * FROM sousfamille where id = ? ";
var selectPaniers = "SELECT * FROM panier where vendeur = ? and magasin = ? and etat = ?  order by id desc";
var selectPanierse = "SELECT * FROM panier where commande=? and vendeur = ? and magasin = ? and etat = ?  order by id desc";
var selectPanierss = "SELECT * FROM panier where vendeur = ? and magasin = ? and etat = ? and commande=?  order by id desc";
var selectPanier = "SELECT id FROM panier where vendeur = ? and magasin = ? and produit = ? and etat = ?  ";
var selectPaniersss = "SELECT * FROM panier where vendeur = ? and magasin = ? and etat = ? and commande=? and famille!=? order by id desc";
var selectSumPani = "SELECT sum(qte) as qti FROM panier where commande=? and vendeur = ? and magasin = ? and etat = ?  and famille = ? order by id desc";
var maxPanier = "SELECT MAX(id) as maxi FROM panier ";
var insertPanier = "INSERT INTO panier (commande, session, produit, tva, remise, libelle, prix, client, vendeur, qte, etat, dateCreation,magasin,famille) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
var insertPaniera = "INSERT INTO panier (commande, session, produit, tva, remise, libelle, prix, client, vendeur, qte, etat, dateCreation,magasin,famille) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
var insertPanierecharge = "INSERT INTO panier (commande, session, produit, tva, remise, libelle, prix, client, vendeur, qte, etat, dateCreation,magasin) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
var updatePanier = "UPDATE panier SET qte = ?, remise = ? where (vendeur = ? and produit = ? and etat = ?)";
var deletePanier = "DELETE from panier where (vendeur = ? and produit = ? and etat = ?)";
var maxEncaissement = "SELECT MAX(id) as maxis FROM encaissement where (vendeur=? and magasin=?)";
var insertEncaissement = "INSERT INTO encaissement  ( id , date , magasin , client , montant , dateCreation,vendeur,commande ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
var insertEtatencaissement = "INSERT INTO etatencaissement ( id , encaissement , modepaiement , solde , dateCreation, magasin, dateEncais, vendeur )  VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
var sumEtatencaissement = "SELECT SUM(solde) as soldex FROM etatencaissement where encaissement = ? and magasin = ? and vendeur = ?";
var maxEtatencaissement = "SELECT MAX(id) as maxiss FROM etatencaissement ";
var selectMagasin = "SELECT * FROM magasin  ";
var selectMagasins = "SELECT * FROM magasin where id=? ";
var insertClient = "INSERT INTO client (  id ,  code ,  sexe ,  nom ,  prenom ,  email ,  phone ,  adresse ,  dateNaissance ,  magasin ,  utilisateur ,  dateCreation ,  dateModification,etat )  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
var maxClient = "SELECT MAX(id) as maxisss FROM client where (utilisateur=? and magasin=?) ";
var verifClient = "SELECT code FROM client where code=?";
//var VerifClient = "SELECT id FROM client where code=? ";
var ListeClient = "SELECT client.id,client.point,client.nom,client.prenom,client.code,client.email,client.phone,client.sexe,client.magasin,magasin.intitule FROM client inner join magasin on magasin.id=client.magasin where utilisateur=? ";
var maListeClient = "SELECT * FROM client ";
var InfoClient = "SELECT * FROM client where code=? ";
var updateClient = "update client set sexe=? ,  nom=? ,  prenom=? ,  email=? ,  phone=? ,  adresse=? ,  dateNaissance=? ,  magasin=? ,  utilisateur=? , dateModification=?  where code=? ";
var deleteClient = "delete from client where code=? ";
var ListeClientauto = "SELECT * FROM client where code=? ";
var searchClient = "SELECT * FROM client where utilisateur=? and (nom=? or prenom=? or phone=? or code=?)";
var monMagasin = "SELECT intitule FROM magasin where id=? ";
var nosEtatencaissement = "SELECT etatencaissement.id,etatencaissement.solde,etatencaissement.encaissement,modepaiement.intitule FROM etatencaissement inner join modepaiement on modepaiement.id=etatencaissement.modepaiement where etatencaissement.encaissement=?";
var deleteEtatencaissement = "delete from etatencaissement where id=?";
var maxCommande = "SELECT MAX(id) as maxis FROM commande where (vendeur=? and magasin=?)";
var insertCommande = "INSERT INTO commande (  id ,  vendeur ,  client ,  magasin ,  encaissement ,  montant ,  dateCreation, livraison , recharge, type )  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
var updateCommande = "update commande  set total=? where ( id=? and vendeur=? and magasin=?)";
var updatePaniers = "UPDATE panier SET etat = ?, commande = ? where (vendeur = ? and etat = ?)";
var sumRemise = "SELECT sum(montant) as some,sum(pourcentage) as poure FROM remise where (vendeur = ? and magasin = ? and etat = ?)";
var insertRemise = "INSERT INTO remise (id, commande, montant, pourcentage, vendeur, client, magasin, dateCreation,etat,type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
var deleteRemises = "delete from remise where (client=? and vendeur=? and magasin=? and etat=? and type=?)";
var updateRemisen = "UPDATE remise set etat = ?, commande = ? where (vendeur=? and magasin=? and etat=?)";
var maxRemise = "SELECT MAX(id) as maxis FROM remise where (vendeur=? and magasin=?)";
var selectRemise = "SELECT * FROM remise where (vendeur=? and magasin=? and etat=? and type=?)";
var deleteRemise = "delete from remise where (id=? and vendeur=? and magasin=? and etat=?)";
var maxCaisse = "SELECT MAX(id) as maxis FROM caisse where (vendeur=? and magasin=?)";
var insertCaisse = "INSERT INTO caisse (id, vendeur, magasin, etat, entree, sortie, dateCreation) VALUES (?, ?, ?, ?, ?, ?, ?)";
var deleteCaisse = "delete FROM caisse where (vendeur=? and magasin=? and etat=?)";
var selectCaisse = "select * FROM caisse where (vendeur=? and magasin=? and etat=?)";
var updateCredit = "UPDATE client set point = ? where code=?";
var insertFidelite = "INSERT INTO fidelite (  id ,  client ,  credit ,  commande ,  dateCreation ,  vendeur ,  magasin ) VALUES (?, ?, ?, ?, ?, ?, ?)";
var maxFidelite = "SELECT MAX(id) as maxis FROM fidelite where (vendeur=? and magasin=?)";
var selectFidelite = "SELECT * FROM client where code=? and etat=? ";
var sumRemiseFide = "SELECT SUM(montant) as sume FROM remise where (vendeur=? and magasin=? and client=? and type=? and commande=?)";
var selectCommande = "SELECT * FROM commande where vendeur=? order by id desc";
var selectMaCommande = "SELECT * FROM commande where (id=? and vendeur=? and magasin=?)";
var selectLivraison = "SELECT * FROM modelivraison where id=?";
var selectEtatencaissements =  "SELECT * FROM etatencaissement where encaissement=? and vendeur=? and magasin=?";
var selectModePaiement = "SELECT * FROM modepaiement where id=?";
var selectModePaiements = "SELECT * FROM modepaiement ";
var selectMaRemise = "SELECT * FROM remise where (commande=? and vendeur=? and magasin=?)";
var selectMaRemises = "SELECT * FROM remise where (client=? and vendeur=? and magasin=? and type=? and commande=?)";
var selectMesRemises = "SELECT * FROM remise where (client=? and type=?)";
var selectProduits = "SELECT * FROM sousfamille order by famille";
var selectFamille = "SELECT * FROM famille where id=?";
var selectClient = "SELECT nom,prenom FROM client where code=?";
var modepayencais= "SELECT modepaiement.intitule from modepaiement inner join etatencaissement on etatencaissement.modepaiement=modepaiement.id inner join encaissement on etatencaissement.encaissement=encaissement.id where (encaissement.id=? and encaissement.magasin=? and encaissement.vendeur=?)";
var maremisex= "SELECT * FROM remise where (commande=? and vendeur=? and magasin=? and etat=?)";
var selectCommandeClient= "SELECT * FROM commande where (client=?) order by id desc";
var selectListFournisseur = "SELECT * FROM fournisseur order by raison";
var produitFournisseur= "select produit.libelle,produit.id,produit.unite,produit.quantite,produit.taille,produitfournisseur.prix from produit inner join produitfournisseur on produit.id=produitfournisseur.produit where produitfournisseur.fournisseur=? order by produit.libelle";
var inserttableau1 = "INSERT INTO etat_entree (fournisseur ,  produit ,  quantite ,  dateCreation ,  vendeur  ,  etat ,  commentaire) VALUES (?, ?, ?, ?, ?, ?, ?)";
var inserttableau2 = "INSERT INTO etat_be (produit ,  type ,  quantite ,magasin ,  dateCreation ,  vendeur  ,  commentaire,  etat,  statut) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
var deletetableau1 = " delete from etat_entree where fournisseur=? and produit=? ";
var deletetableau2 = " delete from etat_be where produit=? and magasin=? and type=? and etat=? and statut=?";
var produitMagasine= "select produittransforme.libelle,produittransforme.unite,produittransforme.id,produittransforme.magasin,sum(produitbt.taille) as somes from produittransforme inner join produitbt on produittransforme.id=produitbt.produittransforme where (produittransforme.magasin=? or produittransforme.magasin=?) group by produittransforme.id";
var produitMagasines= "select * from produit where ((magasin=? or magasin=?) and cache=?)";
var typeMagasins = "SELECT type from magasin where id=?";
var sumQteEtatEntree = "SELECT sum(quantite) as some FROM etat_entree where produit=? and fournisseur=?";
var selectQteEtatBE = "SELECT quantite FROM etat_be where produit=? and magasin=? and type=? and etat=? and statut=?";
var affichtableau1 = " select * from etat_entree where produit=? and fournisseur=? ";
var affichtableau2 = " select * from etat_be where produit=? and magasin=? and type=? and etat=? and statut=?";
var produitStocks = " select * from produit order by libelle ";
var selectStockI = " select sum(quantite) as some from etat_entree where produit=? ";
var selectStockE = " select sum(etat_be.quantite) as some from etat_be inner join produit on etat_be.produit=produit.id where etat_be.produit=? and etat_be.type=? and etat_be.etat=? and etat_be.statut=? ";
var selectStockEE = " select etat_be.id,etat_be.quantite,produittransforme.libelle,produitbt.produitbrut,produitbt.taille,produit.taille as tailli from etat_be inner join produittransforme on etat_be.produit=produittransforme.id inner join produitbt on produitbt.produittransforme=produittransforme.id inner join produit on produit.id=produitbt.produitbrut where etat_be.produit=? and etat_be.type=? and etat_be.etat=? and etat_be.statut=? ";
var selectStockEES = "select etat_be.id,etat_be.quantite,produittransforme.libelle,produitbt.produitbrut,produitbt.taille,produit.taille as tailli from etat_be inner join produittransforme on etat_be.produit=produittransforme.id inner join produitbt on produitbt.produittransforme=produittransforme.id inner join produit on produit.id=produitbt.produitbrut where produitbt.produitbrut=? and etat_be.etat=? and etat_be.statut=? ";
var selectProduitbt = "SELECT * FROM produit where id = ? ";
var selectProduitbts = "SELECT * FROM produit order by libelle";
var selectProduitStockMagbts = "SELECT produit.id,produit.libelle,produit.taille,produit.portion,produitstockmagasin.quantite,produitstockmagasin.nbPortion,produitstockmagasin.nbPortionV FROM produit inner join produitstockmagasin on produitstockmagasin.produit=produit.id where produitstockmagasin.type=? and produitstockmagasin.magasin=? and produit.cache=? order by produit.libelle";
var selectProduitPrincbts = "SELECT produit.id,produit.libelle,produit.taille,produit.portion,produitstockprincipal.quantite,produitstockprincipal.quantitesb,produitstockprincipal.quantitest,produitstockprincipal.quantiter FROM produit inner join produitstockprincipal on produitstockprincipal.produit=produit.id where produitstockprincipal.statut=? order by produit.libelle";
var selectsome1="SELECT sum(quantite) as some FROM etat_entree where produit=? ";
var selectsome2="SELECT sum(quantite) as some4 FROM etat_be where produit=? and etat=? and type=?";
var selectsome3="SELECT sum(quantite) as some5 FROM etat_be inner join produitbt on produitbt.produittransforme=etat_be.produit WHERE produitbt.produitbrut=? and etat=? and type=?";
var selectsome4="SELECT sum(quantite) as some4 FROM etat_be WHERE produit=? and etat=? and type=?";
var selecTransf="SELECT produittransforme.id,produittransforme.libelle,produittransforme.portion,produitstockmagasin.quantite,produitstockmagasin.nbPortion,produitstockmagasin.nbPortionV FROM  produittransforme inner join produitstockmagasin on produitstockmagasin.produit=produittransforme.id where produitstockmagasin.type=? and produitstockmagasin.magasin=? order by  produittransforme.libelle";
var selectsome1maga="SELECT sum(quantite) as some FROM etat_be where produit=? and type=? and etat=? and magasin=?";
var sumTaillFourni="SELECT sum(taille) as somes FROM produitbt WHERE produittransforme=?";


var db = openDatabase("DOGAPP64", "64.0", "DOG APP IPAD 64", 200000);


var dataset;
//produitpanier();
idencaissement();
mesmagasins();
mesreductions();
//listeclients();
//indispensables();

ticketcaisse(0,sessionStorage.getItem('userdoglina'),sessionStorage.getItem('magasinuserdoglina'));


function opens()
{
    //alert('ok');
    /*var openss=document.getElementById('openss').value;
     if(openss==0) { menu.open();document.getElementById('openss').value=1;}
     else { menu.close();document.getElementById('openss').value=0;}*/
}


function ticketvente(commande,vendeur,magasin,client,livraison,encaissement,total)
{
    ticketcaisser(commande,vendeur,magasin,client,livraison,encaissement,total);
}


function validerrecharge()
{
    
    var clientre=document.getElementById('nomclientauto').value;
    
    var rechargecf=parseFloat(document.getElementById('rechargecf').value);
    if(isNaN(rechargecf)) rechargecf=0;else if(rechargecf=='' || rechargecf==null) rechargecf=0;
    if(rechargecf==0)
    {
       
		 navigator.notification.alert("Attention, Valeur nulle",null,'HOT DOG V1.0','OK');
        document.getElementById('rechargecf').value='';
    }
    else if(rechargecf<0)
    {
       
		 navigator.notification.alert("Attention, Valeur negative",null,'HOT DOG V1.0','OK');
        document.getElementById('rechargecf').value='';
    }
    else if(rechargecf!=0)
    {
        
        
        db.transaction(function(tx) {
                       
                       db.transaction(function(tx) {tx.executeSql(maxCommande, [sessionStorage.getItem('userdoglina'),sessionStorage.getItem('magasinuserdoglina')], function(tx, result) {
                                                                  dataset = result.rows;
                                                                  item = dataset.item(0);
                                                                  if(!isNaN(item['maxis'])) nanes=item['maxis']; else nanes=0;
                                                                  if(nanes==null) nanes=0;
                                                                  var commande=parseInt(parseInt(nanes)+1);
                                                                  
                                                                  db.transaction(function(tx) {
                                                                                 
                                                                                 Today = new Date;
                                                                                 Jour = Today.getDate();if(Jour<10) Jour='0'+Jour;
                                                                                 Mois = (Today.getMonth())+1;if(Mois<10) Mois='0'+Mois;
                                                                                 Annee = Today.getFullYear();
                                                                                 Heure = Today.getHours();if(Heure<10) Heure='0'+Heure;
                                                                                 Minutes = Today.getMinutes();if(Minutes<10) Minutes='0'+Minutes;
                                                                                 Secondes = Today.getSeconds();if(Secondes<10) Secondes='0'+Secondes;
                                                                                 
                                                                                 if(document.getElementById('dateeencais').value=='') document.getElementById('dateeencais').value=Annee + "-" + Mois + "-" + Jour;
                                                                                 dateeencaiss = document.getElementById('dateeencais').value+" "+Heure+":"+Minutes+":"+Secondes;
                                                                                 
                                                                                 var mdlivrer=document.getElementById('mdlivrer').options[document.getElementById('mdlivrer').selectedIndex].value;
                                                                                 
                                                                                 //alert('commande : '+commande+'<>'+sessionStorage.getItem('userdoglina')+'<>'+clientre+'<>'+sessionStorage.getItem('magasinuserdoglina')+'<>'+document.getElementById('neencais').value+'<>'+rechargecf+'<>'+dateeencaiss+'<>'+mdlivrer);
                                                                                 tx.executeSql(insertCommande, [commande,sessionStorage.getItem('userdoglina'),clientre,sessionStorage.getItem('magasinuserdoglina'),document.getElementById('neencais').value,rechargecf,dateeencaiss,mdlivrer,1,0], loadAndReset, onError);
                                                                                 var toti=document.getElementById('duencais').value;
                                                                                 monclient(sessionStorage.getItem('clientdoglina'));
                                                                                 document.getElementById('duencais').value='0.00';
                                                                                 document.getElementById('montantdus').value=document.getElementById('duencais').value;
                                                                                 var dudu=number_format(parseFloat(document.getElementById('montantdus').value), 2, '.', '');
                                                                                 document.getElementById('dudus').innerHTML='<a class="super monaiex pink" href="#" style="font-size:30px;font-weight:bold;color:#000;letter-spacing:5px;" onclick="regler(0,'+dudu+');">'+dudu+'</a>';
                                                                                 document.getElementById('encais').value='0.00';
                                                                                 document.getElementById('montantencaie').value=document.getElementById('encais').value;
                                                                                 document.getElementById('soldeencais').value='0.00';
                                                                                 //document.getElementById('montantencaie').value='0
                                                                                 
                                                                                 tx.executeSql(maxPanier, [], function(tx, result) {
                                                                                               dataset = result.rows;
                                                                                               item = dataset.item(0);
                                                                                               if(!isNaN(item['maxi'])) nanes=item['maxi']; else nanes=0;
                                                                                               if(nanes==null) nanes=0;
                                                                                               var maxi=parseInt(parseInt(nanes)+1);
                                                                                               document.getElementById('mamaxi').value=maxi;
                                                                                               });
                                                                                 
                                                                                 db.transaction(function(tx) {
                                                                                                
                                                                                                tx.executeSql(insertPanierecharge, [commande,sessionStorage.getItem('userdoglina'),'0','0','0','Recharger CF',rechargecf,clientre,sessionStorage.getItem('userdoglina'),'1','1',dateeencaiss,sessionStorage.getItem('magasinuserdoglina')], loadAndReset, onError);
                                                                                                totalavecremise(0,0);
                                                                                                });
                                                                                 
                                                                                 db.transaction(function(tx) {
                                                                                                var acture=document.getElementById('ptfidd').value;
                                                                                                var rechargecfnew=parseFloat(parseFloat(rechargecf)+parseFloat(acture));
                                                                                                tx.executeSql(updateCredit, [rechargecfnew,clientre], loadAndReset, onError);
                                                                                                });
                                                                                 
                                                                                 db.transaction(function(tx) {
                                                                                                
                                                                                                tx.executeSql(insertEncaissement, [document.getElementById('neencais').value,document.getElementById('dateeencais').value,sessionStorage.getItem('magasinuserdoglina'),clientre,rechargecf,dateeencaiss,sessionStorage.getItem('userdoglina'),commande], loadAndReset, onError);});
                                                                                 
                                                                                 db.transaction(function(tx) {tx.executeSql(maxEtatencaissement, [], function(tx, result) {
                                                                                                                            dataset = result.rows;
                                                                                                                            item = dataset.item(0);
                                                                                                                            if(!isNaN(item['maxiss'])) nanes=item['maxiss']; else nanes=0;
                                                                                                                            if(nanes==null) nanes=0;
                                                                                                                            var maxis=parseInt(parseInt(nanes)+1);
                                                                                                                            //alert('max : '+maxis);
                                                                                                                            Today = new Date;
                                                                                                                            Jour = Today.getDate();if(Jour<10) Jour='0'+Jour;
                                                                                                                            Mois = (Today.getMonth())+1;if(Mois<10) Mois='0'+Mois;
                                                                                                                            Annee = Today.getFullYear();
                                                                                                                            Heure = Today.getHours();if(Heure<10) Heure='0'+Heure;
                                                                                                                            Minutes = Today.getMinutes();if(Minutes<10) Minutes='0'+Minutes;
                                                                                                                            Secondes = Today.getSeconds();if(Secondes<10) Secondes='0'+Secondes;
                                                                                                                            dateCreation = Annee + "-" + Mois + "-" + Jour+" "+Heure+":"+Minutes+":"+Secondes;
                                                                                                                            
                                                                                                                            db.transaction(function(tx) {
                                                                                                                                           var mdencaissement=document.getElementById('mdpencaiss').options[document.getElementById('mdpencaiss').selectedIndex].value;
                                                                                                                                           tx.executeSql(insertEtatencaissement, [maxis,document.getElementById('neencais').value,mdencaissement,rechargecf,dateCreation,sessionStorage.getItem('magasinuserdoglina'),document.getElementById('dateeencais').value,sessionStorage.getItem('userdoglina')], loadAndReset, onError);
                                                                                                                                           idencaissement();
                                                                                                                                           produitpanier();
                                                                                                                                           sessionStorage.setItem('idcommandeuserdoglina', commande);
                                                                                                                                           document.getElementById('montotalre').value=parseFloat(rechargecf);
                                                                                                                                           
                                                                                                                                           //ticketcaisse(commande,sessionStorage.getItem('userdoglina'),sessionStorage.getItem('magasinuserdoglina'));
                                                                                                                                           
                                                                                                                                           $("#poverticket").click();
                                                                                                                                           ticketcaisses(commande,sessionStorage.getItem('userdoglina'),sessionStorage.getItem('magasinuserdoglina'),1);
                                                                                                                                           });
                                                                                                                            });});
                                                                                 
                                                                                 
                                                                                 
                                                                                 });
                                                                  
                                                                  
                                                                  
                                                                  
                                                                  });
                                      });
                       
                       
                       
                       
                       
                       });
        
        
    }
    hotdog(1);produitpanier();
}

function paiementtte(encaissement,magasin,vendeur)
{
    
    db.transaction(function(tx) {
                   tx.executeSql(modepayencais, [encaissement,magasin,vendeur], function(tx, resultaa) {
                                 datasetaa = resultaa.rows;
                                 itemaa = datasetaa.item(0);
                                 document.getElementById('paiementtk').innerHTML='<b>MP</b> : '+itemaa['intitule'];
                                 
                                 });});
}


function mdpp()
{
    
    db.transaction(function(tx) {
                   tx.executeSql(selectModePaiements, [], function(tx, resultaa) {
                                 datasetaa = resultaa.rows;
                                 document.getElementById('mdpencais').innerHTML='';
                                 document.getElementById('mdpencaiss').innerHTML='';
                                 for (i = 0, item = null; i < datasetaa.length; i++) {
                                 item = datasetaa.item(i);
                                 
                                 document.getElementById('mdpencais').innerHTML +='<option value='+item['id']+'>'+item['intitule']+'</option>';
                                 document.getElementById('mdpencaiss').innerHTML +='<option value='+item['id']+'>'+item['intitule']+'</option>';
                                 
                                 
                                 }
                                 
                                 
                                 });});
}

function etatbon(etat)
{
    document.getElementById('etatbon').value=etat;
    if(etat==0)
    {
        document.getElementById('boes').innerHTML='BONS DE SORTIE ';
        document.getElementById('bonsorr').innerHTML='<select onchange="produitmagasin();" name="statutstock" id="statutstock"  style="width:100px;text-align:center;font-size:20px;height:30px;color:#2d0909"><option value="99" selected>Type</option><option value="0" >Stock</option><option value="1">Annexe</option></select>';
    }
    else
    {
        document.getElementById('boes').innerHTML='BONS DE RETOUR ';
        document.getElementById('bonsorr').innerHTML='<select onchange="produitmagasin();" name="statutstock" id="statutstock"  style="width:100px;text-align:center;font-size:20px;height:30px;color:#2d0909"><option value="99" selected>Type</option><option value="0" >Stock</option><option value="1">Annexe</option><option value="2">Perte</option></select>';
    }
}

function listfournisseur()
{
    
    db.transaction(function(tx) {
                   tx.executeSql(selectListFournisseur, [], function(tx, resultaa) {
                                 datasetaa = resultaa.rows;
                                 document.getElementById('listfournisseur').innerHTML='<option value="0">S&eacute;lectionnez votre fournisseur</select>';
                                 for (i = 0, item = null; i < datasetaa.length; i++) {
                                 item = datasetaa.item(i);
                                 
                                 document.getElementById('listfournisseur').innerHTML +='<option value='+item['id']+'>'+item['raison']+'</option>';
                                 
                                 
                                 }
                                 
                                 
                                 });});
}

function produitfournisseur(fournisseur)
{
    db.transaction(function(tx) {
                   tx.executeSql(produitFournisseur, [fournisseur], function(tx, result) {
                                 dataset = result.rows;
                                 
                                 var produitfournisseur='<table style="width:883px;height:auto;background-color:white;border-collapse:collapse;border-left:2px solid #f35828;border-right:2px solid #f35828;border-bottom:2px solid #f35828;" border="0" >';
                                 
                                 for (i = 0, item = null; i < dataset.length; i++) {
                                 item = dataset.item(i);if(i%2==0) var coli='#dfdfdf';else var coli='#fff';
                                 var id=item['id'];nomproduit=item['libelle'];unite=item['unite'];taille=item['taille'];quantite=item['quantite'];
                                 prix=number_format(item['prix'], 2, '.', '');
                                 
                                 if(i%2==0) var colo='#ffffff';else var colo='#eae7e7';
                                 produitfournisseur += '<tr bgcolor="'+colo+'" style="height:25px;"><td class="texte10" style="width:360px">&nbsp;&nbsp;'+nomproduit+'</td><td class="texte12" style="width:78px;" >'+quantite+'</td><td class="texte8" style="width:102px;" align="center" ><select name="qtt_'+i+'" id="qtt_'+i+'" style="width:80px;text-align:center;font-size:22px;height:23px;color:green">';
                                 for(a=0;a<=100;a++) {
                                 produitfournisseur += '<option value="'+a+'">'+a+'</option>';
                                 }
                                 produitfournisseur += '</select></td><td class="texte12" style="width:78px;" >'+unite+'</td><td class="texte12" style="width:78px;">'+prix+'<input type="hidden" id="prixtt_'+i+'" value="'+prix+'"><input type="hidden" id="produitt_'+i+'" value="'+id+'"></td><td  style="width:185px;" align="center" ><input type="text" id="qttpi_'+i+'" value="'+prix+'" style="width:160px;text-align:center;font-size:20px;height:10px;color:red" READONLY></td></tr>';
                                 qutttableau1(id,fournisseur,i);
                                 
                                 }
                                 produitfournisseur +='<input type="hidden" id="cpttableau1" name="cpttableau1" value="'+dataset.length+'">';
                                 if(dataset.length!=0)
                                 {
                                 produitfournisseur +='<TR ><td colspan="2" style="font-size:17px;color:black;font-family:arial;letter-spacing:3px;font-weight:bold;padding-left:30px;" rowspan="5"  valign="top"><br />Commentaire:<br /><br /><textarea style="width:400px;height:180px;font-family:arial;font-size:15px;color:black" id="commentairetablo1" ></textarea></td><td  align="center"><input type="checkbox" id="cdtablo1" value="1" style="width:30px;"></td><td colspan="3" style="font-size:15px;color:black;font-family:arial;letter-spacing:1px;font-weight:bold;text-align:left" >J\'\ai compt&eacute; le stock livr&eacute;</td></tr>';
                                 produitfournisseur +='<tr><td  align="center"><input type="checkbox" id="cdtablo2" value="2" style="width:30px;"></td><td colspan="3" style="font-size:15px;color:black;font-family:arial;letter-spacing:1px;font-weight:bold;text-align:left" >J\'\ai v&eacute;rifi&eacute; que l\'\emballage est en bon &eacute;tat</td></tr>';
                                 produitfournisseur +='<tr><td  align="center"><input type="checkbox" id="cdtablo3" value="3" style="width:30px;"></td><td colspan="3" style="font-size:15px;color:black;font-family:arial;letter-spacing:1px;font-weight:bold;text-align:left" >le stock a &eacute;t&eacute; rang&eacute; correctement </td></tr>';
                                 produitfournisseur +='<tr><td  align="center"><input type="checkbox" id="cdtablo4" value="4" style="width:30px;"></td><td colspan="3" style="font-size:15px;color:black;font-family:arial;letter-spacing:1px;font-weight:bold;text-align:left" >Retard</td></tr>';
                                 produitfournisseur +='<tr><td  align="center"><input type="checkbox" id="cdtablo5" value="5" style="width:30px;"></td><td colspan="3" style="font-size:15px;color:black;font-family:arial;letter-spacing:1px;font-weight:bold;text-align:left" >Norme qualit&eacute; non respect&eacute;</td></tr>';
                                 
                                 }
                                 document.getElementById('scroller77').innerHTML=produitfournisseur+'<TR style="height:40px;" ><td colspan="4" style="font-size:20px;color:red;font-family:arial;letter-spacing:3px;font-weight:bold;" align="right">&nbsp;TOTAL : </td><td colspan="2" style="font-size:22px;color:green;font-family:arial;letter-spacing:3px;font-weight:bold;" align="center" id="totaltableau1">0.00 DHs</td></tr><TR style="height:40px;" bgcolor="black"><td colspan="6"></td></tr></table>';
                                 
                                 });
                   
                   });
}


function produitmagasin()
{
    var statutstock=document.getElementById('statutstock').options[document.getElementById('statutstock').selectedIndex].value;
    var magasin=document.getElementById('listmagasin').options[document.getElementById('listmagasin').selectedIndex].value;
    
    
    
    if(magasin==99)
    {
        //var statutstock=2;alert(statutstock);
        //var statutstock=2;
        var typemagasin=1;var typemagasine=typemagasin; //itemaa['type'];
        //alert(typemagasin);
        var cpt=0;
        var produitMagasin='<table style="width:883px;height:auto;background-color:white;border-collapse:collapse;border-left:2px solid #f35828;border-right:2px solid #f35828;border-bottom:2px solid #f35828;" border="0" >';
        db.transaction(function(tx) {
                       
                       tx.executeSql(produitMagasine, [typemagasin,2], function(tx, result) {
                                     dataset = result.rows;
                                     
                                     
                                     //alert(dataset.length);
                                     for (i = 0, item = null; i < dataset.length; i++) {
                                     
                                     item = dataset.item(i);if(i%2==0) var coli='#dfdfdf';else var coli='#fff';
                                     var id=item['id'];taille=item['somes'];unite=item['unite'];nomproduit=item['libelle'];
                                     //taille=item['taille'];quantite=item['quantite'];prix=number_format(item['prix'], 2, '.', '');
                                     if(i%2==0) var colo='#ffffff';else var colo='#eae7e7';
                                     produitMagasin += '<tr bgcolor="'+colo+'" style="height:30px;"><td class="texte10" style="width:352px;">&nbsp;&nbsp;'+nomproduit+'</td><td class="texte12" style="width:177px;font-size:17px" >'+taille+'</td><td class="texte12" style="width:177px;font-size:17px" >'+unite+'</td><td style="width:177px;" align="center" ><input type="hidden" id="typs_'+cpt+'" value="0"><input type="hidden" id="prdttt_'+cpt+'" value="'+id+'">';
                                     if(statutstock==0) {
                                     
                                     produitMagasin += '<select name="qttt_'+cpt+'" id="qttt_'+cpt+'" style="width:80px;text-align:center;font-size:17px;height:25px;color:green">';
                                     for(a=0;a<=100;a++) {
                                     produitMagasin += '<option value="'+a+'">'+a+'</option>';
                                     }
                                     produitMagasin += '</select>';
                                     }
                                     else
                                     {
                                     produitMagasin += '<input type="number" name="qttt_'+cpt+'" id="qttt_'+cpt+'" style="width:140px;text-align:center;font-size:17px;height:25px;color:green">';
                                     }
                                     
                                     
                                     produitMagasin += '</td></tr>';
                                     
                                     qutttableau2(id,magasin,0,document.getElementById('etatbon').value,statutstock,cpt);
                                     cpt++;
                                     }
                                     
                                     
                                     //document.getElementById('scroller88').innerHTML=produitMagasin+'<TR style="height:40px;" bgcolor="black"><td colspan="4"></td></tr></table>';
                                     
                                     });
                       
                       tx.executeSql(produitMagasines, [typemagasine,2,0], function(tx, result) {
                                     dataset = result.rows;
                                     
                                     //var produitMagasin ='<table style="width:97%;height:auto;background-color:white;border-collapse:collapse;border-left:2px solid #f35828;border-right:2px solid #f35828;border-bottom:2px solid #f35828;" border="0" >';
                                     //alert(dataset.length);
                                     for (i = 0, item = null; i < dataset.length; i++) {
                                     
                                     item = dataset.item(i);if(i%2==0) var coli='#dfdfdf';else var coli='#fff';
                                     var id=item['id'];taille=item['taille'];unite=item['unite'];nomproduit=item['libelle'];
                                     //taille=item['taille'];quantite=item['quantite'];prix=number_format(item['prix'], 2, '.', '');
                                     if(i%2==0) var colo='#ffffff';else var colo='#eae7e7';
                                     produitMagasin += '<tr bgcolor="'+colo+'" style="height:30px;"><td class="texte10" style="width:352px;">&nbsp;&nbsp;'+nomproduit+'</td><td class="texte8" style="width:177px;font-size:17px" >'+taille+'</td><td class="texte8" style="width:177px;font-size:17px" >'+unite+'</td><td style="width:177px;" align="center" ><input type="hidden" id="prdttt_'+cpt+'" value="'+id+'"><input type="hidden" id="typs_'+cpt+'" value="1">';
                                     if(statutstock==0) {
                                     produitMagasin += '<select name="qttt_'+cpt+'" id="qttt_'+cpt+'" style="width:80px;text-align:center;font-size:17px;height:25px;color:green">';
                                     for(a=0;a<=100;a++) {
                                     produitMagasin += '<option value="'+a+'">'+a+'</option>';
                                     }
                                     produitMagasin += '</select>';
                                     }
                                     else {
                                     produitMagasin += '<input type="number" name="qttt_'+cpt+'" id="qttt_'+cpt+'" style="width:140px;text-align:center;font-size:17px;height:25px;color:green">';
                                     }
                                     produitMagasin += '</select>';
                                     qutttableau2(id,magasin,1,document.getElementById('etatbon').value,statutstock,cpt);
                                     cpt++;
                                     }
                                     produitMagasin +='<input type="hidden" id="cpttableau2" name="cpttableau2" value="'+cpt+'">';
                                     
                                     document.getElementById('scroller88').innerHTML=produitMagasin+'<tr><td colspan="4" style="font-size:17px;color:black;font-family:arial;letter-spacing:3px;font-weight:bold;padding-left:30px;" valign="top"><br />Commentaire:<br /><br /><textarea style="width:800px;height:80px;font-family:arial;font-size:15px;color:black" id="commentairetablo2" ></textarea></td></tr><TR style="height:40px;" bgcolor="black"><td colspan="4"></td></tr></table>';
                                     
                                     });
                       
                       });
        
    }
    
    db.transaction(function(tx) {
                   tx.executeSql(typeMagasins, [magasin], function(tx, resultaa) {
                                 
                                 datasetaa = resultaa.rows;
                                 itemaa = datasetaa.item(0);
                                 if(itemaa['type']==0) var typemagasin=1;else var typemagasin=0;var typemagasine=typemagasin; //itemaa['type'];
                                 //alert(typemagasin);
                                 var cpt=0;
                                 var produitMagasin='<table style="width:883px;height:auto;background-color:white;border-collapse:collapse;border-left:2px solid #f35828;border-right:2px solid #f35828;border-bottom:2px solid #f35828;" border="0" >';
                                 db.transaction(function(tx) {
                                                
                                                tx.executeSql(produitMagasine, [typemagasin,2], function(tx, result) {
                                                              dataset = result.rows;
                                                              
                                                              
                                                              //alert(dataset.length);
                                                              for (i = 0, item = null; i < dataset.length; i++) {
                                                              
                                                              item = dataset.item(i);if(i%2==0) var coli='#dfdfdf';else var coli='#fff';
                                                              var id=item['id'];taille=item['somes'];unite=item['unite'];nomproduit=item['libelle'];
                                                              //taille=item['taille'];quantite=item['quantite'];prix=number_format(item['prix'], 2, '.', '');
                                                              if(i%2==0) var colo='#ffffff';else var colo='#eae7e7';
                                                              produitMagasin += '<tr bgcolor="'+colo+'" style="height:30px;"><td class="texte10" style="width:352px;">&nbsp;&nbsp;'+nomproduit+'</td><td class="texte12" style="width:177px;font-size:17px" >'+taille+'</td><td class="texte12" style="width:177px;font-size:17px" >'+unite+'</td><td style="width:177px;" align="center" ><input type="hidden" id="typs_'+cpt+'" value="0"><input type="hidden" id="prdttt_'+cpt+'" value="'+id+'">';
                                                              if(statutstock==0) {
                                                              
                                                              produitMagasin += '<select name="qttt_'+cpt+'" id="qttt_'+cpt+'" style="width:80px;text-align:center;font-size:17px;height:25px;color:green">';
                                                              for(a=0;a<=100;a++) {
                                                              produitMagasin += '<option value="'+a+'">'+a+'</option>';
                                                              }
                                                              produitMagasin += '</select>';
                                                              }
                                                              else
                                                              {
                                                              produitMagasin += '<input type="number" name="qttt_'+cpt+'" id="qttt_'+cpt+'" style="width:140px;text-align:center;font-size:17px;height:25px;color:green">';
                                                              }
                                                              
                                                              
                                                              produitMagasin += '</td></tr>';
                                                              
                                                              qutttableau2(id,magasin,0,document.getElementById('etatbon').value,statutstock,cpt);
                                                              cpt++;
                                                              }
                                                              
                                                              
                                                              //document.getElementById('scroller88').innerHTML=produitMagasin+'<TR style="height:40px;" bgcolor="black"><td colspan="4"></td></tr></table>';
                                                              
                                                              });
                                                
                                                tx.executeSql(produitMagasines, [typemagasine,2,0], function(tx, result) {
                                                              dataset = result.rows;
                                                              
                                                              //var produitMagasin ='<table style="width:97%;height:auto;background-color:white;border-collapse:collapse;border-left:2px solid #f35828;border-right:2px solid #f35828;border-bottom:2px solid #f35828;" border="0" >';
                                                              //alert(dataset.length);
                                                              for (i = 0, item = null; i < dataset.length; i++) {
                                                              
                                                              item = dataset.item(i);if(i%2==0) var coli='#dfdfdf';else var coli='#fff';
                                                              var id=item['id'];taille=item['taille'];unite=item['unite'];nomproduit=item['libelle'];
                                                              //taille=item['taille'];quantite=item['quantite'];prix=number_format(item['prix'], 2, '.', '');
                                                              if(i%2==0) var colo='#ffffff';else var colo='#eae7e7';
                                                              produitMagasin += '<tr bgcolor="'+colo+'" style="height:30px;"><td class="texte10" style="width:352px;">&nbsp;&nbsp;'+nomproduit+'</td><td class="texte8" style="width:177px;font-size:17px" >'+taille+'</td><td class="texte8" style="width:177px;font-size:17px" >'+unite+'</td><td style="width:177px;" align="center" ><input type="hidden" id="prdttt_'+cpt+'" value="'+id+'"><input type="hidden" id="typs_'+cpt+'" value="1">';
                                                              if(statutstock==0) {
                                                              produitMagasin += '<select name="qttt_'+cpt+'" id="qttt_'+cpt+'" style="width:80px;text-align:center;font-size:17px;height:25px;color:green">';
                                                              for(a=0;a<=100;a++) {
                                                              produitMagasin += '<option value="'+a+'">'+a+'</option>';
                                                              }
                                                              produitMagasin += '</select>';
                                                              }
                                                              else {
                                                              produitMagasin += '<input type="number" name="qttt_'+cpt+'" id="qttt_'+cpt+'" style="width:140px;text-align:center;font-size:17px;height:25px;color:green">';
                                                              }
                                                              produitMagasin += '</select>';
                                                              qutttableau2(id,magasin,1,document.getElementById('etatbon').value,statutstock,cpt);
                                                              cpt++;
                                                              }
                                                              produitMagasin +='<input type="hidden" id="cpttableau2" name="cpttableau2" value="'+cpt+'">';
                                                              
                                                              document.getElementById('scroller88').innerHTML=produitMagasin+'<tr><td colspan="4" style="font-size:17px;color:black;font-family:arial;letter-spacing:3px;font-weight:bold;padding-left:30px;" valign="top"><br />Commentaire:<br /><br /><textarea style="width:800px;height:80px;font-family:arial;font-size:15px;color:black" id="commentairetablo2" ></textarea></td></tr><TR style="height:40px;" bgcolor="black"><td colspan="4"></td></tr></table>';
                                                              
                                                              });
                                                
                                                });
                                 });});
}


function selectsome1s(produit,i,quantite)
{
    
    db.transaction(function(tx) {
                   tx.executeSql(selectsome1, [produit], function(tx, resultaa) {
                                 datasetaa = resultaa.rows;
                                 itemaa = datasetaa.item(0);
                                 if(itemaa['some']==null) var somes=0;else var somes=itemaa['some'];
                                 somes=parseFloat(parseFloat(somes)+parseFloat(quantite));
                                 document.getElementById('princ1_'+i).innerHTML=somes;
                                 document.getElementById('princ1s_'+i).value=somes;
                                 document.getElementById('princ5_'+i).innerHTML = parseFloat(somes);
                                 });});
}



function selectsome2s(produit,etat,type,i,quantitesb)
{
    
    db.transaction(function(tx) {
                   tx.executeSql(selectsome2, [produit,etat,type], function(tx, resultaa) {
                                 datasetaa = resultaa.rows;
                                 itemaa = datasetaa.item(0);
                                 if(itemaa['some4']==null) var some4=0;else var some4=itemaa['some4'];
                                 some4=parseFloat(parseFloat(some4)+parseFloat(quantitesb));
                                 document.getElementById('princ2_'+i).innerHTML=some4;
                                 document.getElementById('princ2s_'+i).value=some4;
                                 document.getElementById('princ5_'+i).innerHTML -= parseFloat(some4);
                                 });});
}




function selectsome3s(produit,etat,type,i,quantitest)
{
    
    db.transaction(function(tx) {
                   tx.executeSql(selectsome3, [produit,etat,type], function(tx, resultaa) {
                                 datasetaa = resultaa.rows;
                                 itemaa = datasetaa.item(0);
                                 if(itemaa['some5']==null) var some5=0;else var some5=itemaa['some5'];
                                 some5=parseFloat(parseFloat(some5)+parseFloat(quantitest));
                                 document.getElementById('princ3_'+i).innerHTML=some5;
                                 document.getElementById('princ3s_'+i).value=some5;
                                 document.getElementById('princ5_'+i).innerHTML -= parseFloat(some5);
                                 });});
}



function selectsome4s(produit,etat,type,i,taille,quantiter)
{
    
    db.transaction(function(tx) {
                   tx.executeSql(selectsome4, [produit,etat,type], function(tx, resultaa) {
                                 datasetaa = resultaa.rows;
                                 itemaa = datasetaa.item(0);
                                 if(itemaa['some4']==null) var some4=0;else var some4=itemaa['some4'];
                                 some4=parseFloat(parseFloat(some4)+parseFloat(quantiter));
                                 document.getElementById('princ4_'+i).innerHTML=some4;
                                 document.getElementById('princ4s_'+i).value=some4;
                                 document.getElementById('princ5_'+i).innerHTML -= -parseFloat(some4);
                                 document.getElementById('princ6_'+i).innerHTML = parseFloat(parseFloat(document.getElementById('princ5_'+i).innerHTML)*parseFloat(taille));
                                 });});
}



function stockprincipal(statut)
{
    
    
    var statut=document.getElementById('typsokss').options[document.getElementById('typsokss').selectedIndex].value;
    
    db.transaction(function(tx) {
                   tx.executeSql(selectProduitPrincbts, [statut], function(tx, resultaa) {
                                 
                                 dataset = resultaa.rows;
                                 
                                 var stockprincipale ='<table style="width:97%;height:auto;background-color:white;border-collapse:collapse;border-left:2px solid #f35828;border-right:2px solid #f35828;border-bottom:2px solid #f35828;" border="0" >';
                                 
                                 for (i = 0, item = null; i < dataset.length; i++) {
                                 
                                 item = dataset.item(i);if(i%2==0) var coli='#dfdfdf';else var coli='#fff';
                                 var produit=item['id'];var taille=item['taille'];var libelle=item['libelle'];
                                 
                                 var quantite=item['quantite'];
                                 var quantitesb=item['quantitesb'];
                                 var quantitest=item['quantitest'];
                                 var quantiter=item['quantiter'];
                                 
                                 
                                 
                                 if(i%2==0) var colo='#ffffff';else var colo='#eae7e7';
                                 stockprincipale += '<tr bgcolor="'+colo+'" style="height:30px;">';
                                 stockprincipale += '<input type="hidden" value="0" id="princ1s_'+i+'"><input type="hidden" value="0" id="princ2s_'+i+'"><input type="hidden" value="0" id="princ3s_'+i+'"><input type="hidden" value="0" id="princ4s_'+i+'">';
                                 stockprincipale += '<td  style="width:20%;font-size:13px;font-family:arial">&nbsp;&nbsp;'+libelle+'</td><td class="texte8" style="width:10%;font-size:17px" >'+taille+'</td><td class="texte8" style="width:10%;font-size:17px" id="princ1_'+i+'" >0</td><td class="texte8" style="width:10%;font-size:17px" id="princ2_'+i+'" >0</td><td class="texte8" style="width:15%;font-size:17px" id="princ3_'+i+'" >0</td><td class="texte8" style="width:10%;font-size:17px" id="princ4_'+i+'" >0</td><td class="texte8" style="width:10%;font-size:17px" id="princ5_'+i+'" >0</td><td class="texte8" style="width:10%;font-size:17px" id="princ6_'+i+'" >0</td></tr>';
                                 selectsome1s(produit,i,quantite);
                                 selectsome2s(produit,0,1,i,quantitesb);
                                 selectsome3s(produit,0,0,i,quantitest);
                                 selectsome4s(produit,1,1,i,taille,quantiter);
                                 
                                 }
                                 document.getElementById('scroller100').innerHTML = stockprincipale+'</table>';
                                 
                                 });});
}




function selectsome4s1(produit,type,etat,magasin,taille,portion,i,quantite)
{
    
    db.transaction(function(tx) {
                   tx.executeSql(selectsome1maga, [produit,etat,type,magasin], function(tx, resultaa) {
                                 datasetaa = resultaa.rows;
                                 itemaa = datasetaa.item(0);
                                 if(itemaa['some']==null) var some=0;else var some=itemaa['some'];
                                 some=parseFloat(parseFloat(some)+parseFloat(quantite));
                                 document.getElementById('princ1mag_'+i).innerHTML=some;
                                 document.getElementById('princ2mag_'+i).innerHTML=parseFloat(taille*some);
                                 if(portion==0) document.getElementById('princ3mag_'+i).innerHTML='0';
                                 else document.getElementById('princ3mag_'+i).innerHTML=Math.floor(parseFloat(parseFloat(taille*some)/parseFloat(portion)));
                                 //number_format(parseFloat(parseFloat(taille*some)/parseFloat(portion)), 2, '.', '');
                                 
                                 });});
}

function selectsome4s2(produit,type,etat,magasin,portion,i,quantite)
{
    
    db.transaction(function(tx) {
                   tx.executeSql(selectsome1maga, [produit,etat,type,magasin], function(tx, resultaa) {
                                 
                                 
                                 db.transaction(function(tx) {
                                                tx.executeSql(sumTaillFourni, [produit], function(tx, resultaae) {
                                                              datasetaae = resultaae.rows;
                                                              itemaae = datasetaae.item(0);
                                                              var taille=itemaae['somes'];
                                                              if(taille==null) var taille=0;
                                                              document.getElementById('princ0mags_'+i).innerHTML=taille;
                                                              datasetaa = resultaa.rows;
                                                              itemaa = datasetaa.item(0);
                                                              if(itemaa['some']==null) var some=0;else var some=itemaa['some'];
                                                              some=parseFloat(parseFloat(some)+parseFloat(quantite));
                                                              document.getElementById('princ1mags_'+i).innerHTML=some;
                                                              //document.getElementById('cs_'+i).innerHTML=some;
                                                              document.getElementById('princ2mags_'+i).innerHTML=parseFloat(taille*some);
                                                              if(portion==0) document.getElementById('princ3mags_'+i).innerHTML='0';
                                                              else document.getElementById('princ3mags_'+i).innerHTML=parseFloat(parseFloat(taille*some)/parseFloat(portion));
                                                              
                                                              });});});});
}




function typsokss(vals)
{
    
    if(vals==0)
    {
        document.getElementById('tabame1').style.visibility='visible';
        document.getElementById('tabame1').style.height='auto';
        stockmagasin();
    }
    else
    {
        document.getElementById('tabame1').style.visibility='hidden';
        document.getElementById('tabame1').style.height='0px';
        stockmagasinsex();
    }
}



function produittranf()
{
    
    var magasin=sessionStorage.getItem('magasinuserdoglina');
    //document.getElementById('produittranfe').innerHTML = magasin;
    db.transaction(function(tx) {
                   tx.executeSql(selecTransf, [1,magasin], function(tx, resultaa) {
                                 
                                 dataset = resultaa.rows;
                                 
                                 var produittranfe ='<table style="width:100%;height:auto;background-color:white;border-collapse:collapse;border-left:0px solid #f35828;border-right:0px solid #f35828;border-bottom:0px solid #f35828;" border="0" >';
                                 
                                 
                                 for (i = 0, item = null; i < dataset.length; i++) {
                                 
                                 item = dataset.item(i);if(i%2==0) var coli='#dfdfdf';else var coli='#fff';
                                 var produit=item['id'];var libelle=item['libelle'];var portion=item['portion'];
                                 if(i%2==0) var colo='#ffffff';else var colo='#eae7e7';
                                 
                                 var quantite=item['quantite'];
                                 var nbPortion=item['nbPortion'];
                                 var nbPortionV=item['nbPortionV'];
                                 
                                 produittranfe += '<tr bgcolor="'+colo+'" style="height:30px;">';
                                 produittranfe += '<td  style="width:40%;font-size:13px;font-family:arial">&nbsp;&nbsp;'+libelle+'</td><td class="texte8" style="width:10%;font-size:17px" id="princ0mags_'+i+'"></td><td class="texte8" style="width:10%;font-size:17px" id="princ1mags_'+i+'" ></td><td class="texte8" style="width:10%;font-size:17px" id="princ2mags_'+i+'" ></td><td class="texte8" style="width:15%;font-size:17px">'+portion+'</td><td class="texte8" style="width:15%;font-size:17px" id="princ3mags_'+i+'" ></td></tr>';
                                 selectsome4s2(produit,0,0,magasin,portion,i,quantite);
                                 }
                                 
                                 document.getElementById('produittranfe').innerHTML = produittranfe;
                                 
                                 });});
    
    
    
}

var selectsousfamilimaga="SELECT sousfamille.id,sousfamille.alerte,sousfamille.libelle as libelle1,famille.libelle as libelle2,produitstockmagasin.quantite,produitstockmagasin.nbPortion,produitstockmagasin.nbPortionV FROM  sousfamille inner join produitstockmagasin on produitstockmagasin.produit=sousfamille.id inner join famille on famille.id=sousfamille.famille where (produitstockmagasin.type=? and produitstockmagasin.magasin=? and famille.parent=? ) order by  sousfamille.libelle";


var requere1s03 = " SELECT sum(etat_be.quantite) as some,sum(produitbt.taille) as somes,produit.portion FROM etat_be inner join produit on etat_be.produit=produit.sousfamille inner join produitbt on produitbt.produittransforme=produit.sousfamille WHERE etat_be.magasin=? and etat_be.produit=? and etat_be.type=? and etat_be.etat=? group by etat_be.produit ";
function selectsome1s03(magasin,produit,type,etat,j)
{
    
    db.transaction(function(tx) {
                   tx.executeSql(requere1s3, [magasin,produit,type,etat], function(tx, resultaa) {
                                 dataset = resultaa.rows;var some2=0;
                                 for (i = 0, item = null; i < dataset.length; i++) {
                                 itemaa = dataset.item(i);
                                 if(itemaa['some']==null) var some=0;else var some=itemaa['some'];
                                 if(itemaa['somes']==null) var taille=0;else var taille=itemaa['somes'];
                                 var tailleportion=parsFloat(parsFloat(taille)*parsFloat(some));
                                 if(itemaa['portion']==null) var portion=0;else var portion=itemaa['portion'];
                                 if(portion==0) var nbrportion=0;else var nbrportion=Math.ceil(tailleportion/portion);
                                 some2+=parseFloat(nbrportion);
                                 }
                                 document.getElementById('princ1magh_'+j).innerHTML=parseFloat(parseFloat(document.getElementById('princ1magh_'+j).innerHTML)+parseFloat(some2));
                                 
                                 document.getElementById('princ3magh_'+j).innerHTML=parseFloat(document.getElementById('princ1magh_'+j).innerHTML);
                                 });});
}


var requere1s3 = " SELECT sum(etat_be.quantite) as some,produit.taille,produit.portion FROM etat_be inner join produit on etat_be.produit=produit.sousfamille WHERE etat_be.magasin=? and etat_be.produit=? and etat_be.type=? and etat_be.etat=? group by etat_be.produit ";
function selectsome1s3(magasin,produit,type,etat,j,portions)
{
    
    db.transaction(function(tx) {
                   tx.executeSql(requere1s3, [magasin,produit,type,etat], function(tx, resultaa) {
                                 datasetaa = resultaa.rows;var some=0;
                                 for (i = 0, item = null; i < datasetaa.length; i++) {
                                 itemaa = datasetaa.item(i);
                                 if(itemaa['some']==null) var somes=0;else var somes=itemaa['some'];
                                 if(itemaa['taille']==null) var taille=0;else var taille=itemaa['taille'];
                                 var tailleportion=parseFloat(parseFloat(taille)*parseFloat(somes));
                                 
                                 if(itemaa['portion']==null) var portion=0;else var portion=itemaa['portion'];
                                 
                                 if(portion==0) var nbrportion=0;else var nbrportion=Math.ceil(tailleportion/nbrportion);
                                 some +=parseFloat(parseFloat(nbrportion)+parseFloat(portions));
                                 }
                                 document.getElementById('princ1magh_'+j).innerHTML=some;
                                 selectsome1s03(magasin,produit,0,0,j);
                                 });});
}

var requere2s3 = " SELECT sum(qte) as qtes FROM panier WHERE commande!=? and produit=? ";
function selectsome2s3(produit,j,nbPortionV)
{
    
    db.transaction(function(tx) {
                   tx.executeSql(requere2s3, [0,produit], function(tx, resultaa) {
                                 datasetaa = resultaa.rows;var qtes=0;
                                 for (i = 0, item = null; i < datasetaa.length; i++) {
                                 itemaa = datasetaa.item(i);
                                 if(itemaa['qtes']==null) var qtes=0;else var qtes=itemaa['some'];
                                 qtes +=parseFloat(parseFloat(qtes)+parseFloat(nbPortionV));
                                 }
                                 if(!isNaN(qtes)) qtes=qtes;else qtes=0;//qtes=parseFloat(nbPortionV);
                                 document.getElementById('princ2magh_'+j).innerHTML=qtes;
                                 document.getElementById('princ3magh_'+j).innerHTML = parseFloat(parseFloat(document.getElementById('princ3magh_'+j).innerHTML)-parseFloat(qtes));
                                 });});
}



function stockmagasinsex()
{
    
    var magasin=sessionStorage.getItem('magasinuserdoglina');
    db.transaction(function(tx) {
                   tx.executeSql(selectsousfamilimaga, [2,magasin,0], function(tx, resultaa) {
                                 
                                 dataset = resultaa.rows;
                                 
                                 var stockmagasinsx ='<table style="width:97%;height:auto;background-color:white;border-collapse:collapse;border-left:2px solid #f35828;border-right:2px solid #f35828;border-bottom:2px solid #f35828;" border="1" ><tr bgcolor="black" style="height:45px;"><td  style="width:20%;font-size:13px;font-family:arial;font-weight:bold;color:white;">&nbsp;&nbsp;&nbsp;Famille</td><td  style="width:30%;font-size:13px;font-family:arial;font-weight:bold;color:white;">&nbsp;&nbsp;&nbsp;Produit</td><td  style="width:10%;font-size:13px;font-family:arial;font-weight:bold;color:white;">Nbre Portions</td><td  style="width:15%;font-size:13px;font-family:arial;font-weight:bold;color:white;text-align:center">Nbre Portions Vd.</td><td  style="width:15%;font-size:13px;font-family:arial;font-weight:bold;color:white;text-align:center">Nbre Portions St.</td><td  style="width:10%;font-size:13px;font-family:arial;font-weight:bold;color:white;text-align:center">Seuil</td></tr>';
                                 
                                 stockmagasinsx += '<tr bgcolor="#631314" style="height:30px;"><td style="font-size:18px;color:white;font-weight:bold;font-family:arial;" colspan="6">&nbsp;&nbsp;Produits HOT DOG</td></tr>';
                                 for (i = 0, item = null; i < dataset.length; i++) {
                                 
                                 item = dataset.item(i);if(i%2==0) var coli='#dfdfdf';else var coli='#fff';
                                 var produit=item['id'];var libelle1=item['libelle1'];
                                 var libelle2=item['libelle2'];var seuil=item['alerte'];
                                 var nbPortion=item['nbPortion'];var nbPortionV=item['nbPortionV'];
                                 if(i%2==0) var colo='#ffffff';else var colo='#eae7e7';
                                 
                                 stockmagasinsx += '<td  style="width:20%;font-size:13px;font-family:arial;background-color:orange;color:black;font-weight:bold;">&nbsp;&nbsp;'+libelle2+'</td><td class="texte8" style="width:30%;font-size:17px;text-align:left" >&nbsp;&nbsp;&nbsp;'+libelle1+'</td><td class="texte8" style="width:10%;font-size:17px" id="princ1magh_'+i+'" >0</td><td class="texte8" style="width:15%;font-size:17px" id="princ2magh_'+i+'" >eee0</td><td class="texte8" style="width:15%;font-size:17px" id="princ3magh_'+i+'" >0</td><td class="texte8" style="width:10%;font-size:17px">'+seuil+'</td></tr>';
                                 
                                 selectsome1s3(magasin,produit,1,0,i,nbPortion);
                                 selectsome2s3(produit,i,nbPortionV);
                                 
                                 
                                 }
                                 
                                 
                                 document.getElementById('scroller99').innerHTML = stockmagasinsx+'</table>';
                                 
                                 });});
}


function stockmagasin(etat)
{
    
    var magasin=sessionStorage.getItem('magasinuserdoglina');
    db.transaction(function(tx) {
                   tx.executeSql(selectProduitStockMagbts, [0,magasin,0], function(tx, resultaa) {
                                 
                                 dataset = resultaa.rows;
                                 
                                 stockmagasinx ='<table style="width:97%;height:auto;background-color:white;border-collapse:collapse;border-left:2px solid #f35828;border-right:2px solid #f35828;border-bottom:2px solid #f35828;" border="0" >';
                                 
                                 stockmagasinx += '<tr bgcolor="#631314" style="height:30px;"><td style="font-size:18px;color:white;font-weight:bold;font-family:arial;" colspan="6">&nbsp;&nbsp;Produits Bruts</td></tr>';
                                 for (i = 0, item = null; i < dataset.length; i++) {
                                 
                                 item = dataset.item(i);if(i%2==0) var coli='#dfdfdf';else var coli='#fff';
                                 var produit=item['id'];var taille=item['taille'];var libelle=item['libelle'];var portion=item['portion'];
                                 if(i%2==0) var colo='#ffffff';else var colo='#eae7e7';
                                 
                                 var quantite=item['quantite'];
                                 var nbPortion=item['nbPortion'];
                                 var nbPortionV=item['nbPortionV'];
                                 
                                 stockmagasinx += '<tr bgcolor="'+colo+'" style="height:30px;">';
                                 stockmagasinx += '<td  style="width:40%;font-size:13px;font-family:arial">&nbsp;&nbsp;'+libelle+'</td><td class="texte8" style="width:10%;font-size:17px" >'+taille+'</td><td class="texte8" style="width:10%;font-size:17px" id="princ1mag_'+i+'" ></td><td class="texte8" style="width:10%;font-size:17px" id="princ2mag_'+i+'" ></td><td class="texte8" style="width:15%;font-size:17px">'+portion+'</td><td class="texte8" style="width:15%;font-size:17px" id="princ3mag_'+i+'" ></td></tr>';
                                 selectsome4s1(produit,1,0,magasin,taille,portion,i,quantite);
                                 
                                 }
                                 
                                 stockmagasinbis = '<tr bgcolor="#631314" style="height:30px;"><td style="font-size:18px;color:white;font-weight:bold;font-family:arial;" colspan="6">&nbsp;&nbsp;Produits Transform&eacute;s</td></tr><tr><td colspan="6" id="produittranfe">...</td></tr>';
                                 
                                 document.getElementById('scroller99').innerHTML = stockmagasinx+stockmagasinbis+'</table>';
                                 produittranf();
                                 
                                 });});
}




function produitstock()
{
    db.transaction(function(tx) {
                   tx.executeSql(produitStocks, [], function(tx, result) {
                                 dataset = result.rows;
                                 
                                 var produitstock='<table style="width:97%;height:auto;background-color:white;border-collapse:collapse;border-left:2px solid #f35828;border-right:2px solid #f35828;border-bottom:2px solid #f35828;" border="0" >';
                                 
                                 for (i = 0, item = null; i < dataset.length; i++) {
                                 item = dataset.item(i);if(i%2==0) var coli='#dfdfdf';else var coli='#fff';
                                 var id=item['id'];nomproduit=item['libelle'];unite=item['unite'];taille=item['taille'];
                                 //quantite=item['quantite'];prix=number_format(item['prix'], 2, '.', '');
                                 
                                 if(i%2==0) var colo='#ffffff';else var colo='#eae7e7';
                                 produitstock += '<tr bgcolor="'+colo+'" style="height:30px;"><input type="hidden" id="hqtee_'+i+'" value="0"><input type="hidden" id="hqts_'+i+'" value="0"><input type="hidden" id="hqtaee_'+i+'" value="0"><input type="hidden" id="hqtas_'+i+'" value="0"><td class="texte10" style="width:31%;">&nbsp;&nbsp;'+nomproduit+'</td><td class="texte8" style="width:10%;font-size:15px" >'+taille+'</td><td style="width:5%;font-size:15px" align="center" >'+unite+'</td><td class="texte8" style="width:7%;font-size:15px;" id="qti_'+i+'"></td><td class="texte8" style="width:7%;font-size:15px;" id="qtee_'+i+'"></td><td class="texte8" style="width:7%;font-size:15px;" id="qts_'+i+'"></td><td class="texte8" style="width:7%;font-size:15px;" id="qtd_'+i+'"></td><td class="texte8" style="width:7%;font-size:15px;" id="qtae_'+i+'"></td><td class="texte8" style="width:7%;font-size:15px;" id="qtas_'+i+'"></td><td class="texte8" style="width:7%;font-size:15px;" id="qtad_'+i+'"></td><td class="texte8" style="width:7%;font-size:15px;"><a class="super vente1 pink" href="#infoproduitbts" onclick="infoproduitbt('+item['id']+','+i+');" style="font-size:18px;font-weight:bold;color:#fff;letter-spacing:2px;" >IF</a></td></tr>';
                                 qutttableau3(id,i);
                                 
                                 }
                                 produitstock +='<input type="hidden" id="cpttableau1" name="cpttableau1" value="'+dataset.length+'">';
                                 document.getElementById('scroller99').innerHTML=produitstock+'</tr><TR style="height:40px;" bgcolor="black"><td colspan="11"></td></tr></table><br />';
                                 
                                 });
                   
                   });
}



function qutttableau1(produit,fournisseur,a)
{
    
    db.transaction(function(tx) {
                   tx.executeSql(sumQteEtatEntree, [produit,fournisseur], function(tx, resultaa) {
                                 datasetaa = resultaa.rows;
                                 itemaa = datasetaa.item(0);//alert(itemaa['some']);
                                 document.getElementById('qtt_'+a).innerHTML = '';
                                 for(av=0;av<=100;av++)
                                 {
                                 if(itemaa['some']==av) var selectt='selected';else var selectt='';
                                 document.getElementById('qtt_'+a).innerHTML += '<option value="'+av+'"   '+selectt+'>'+av+'</option>';
                                 }
                                 affichtableau1s(produit,fournisseur);
                                 calculertableau1();
                                 });});
    
    
    
}

function qutttableau2(produit,magasin,type,etat,statutstock,a)
{
    //alert(statutstock);
    db.transaction(function(tx) {
                   tx.executeSql(selectQteEtatBE, [produit,magasin,type,etat,statutstock], function(tx, resultaa) {
                                 datasetaa = resultaa.rows;
                                 itemaa = datasetaa.item(0);
                                 if(statutstock==0)
                                 {
                                 document.getElementById('qttt_'+a).innerHTML = '';
                                 for(av=0;av<=100;av++)
                                 {
                                 if(itemaa['quantite']==av) var selectt='selected';else var selectt='';
                                 document.getElementById('qttt_'+a).innerHTML += '<option value="'+av+'"   '+selectt+'>'+av+'</option>';
                                 }
                                 }
                                 else document.getElementById('qttt_'+a).value=itemaa['quantite'];
                                 affichtableau2s(produit,magasin,type,etat,statutstock);
                                 });});
}

function qutttableau3(produit,a)
{
    
    db.transaction(function(tx) {
                   tx.executeSql(selectStockI, [produit], function(tx, resultaa) {
                                 datasetaa = resultaa.rows;
                                 itemaa = datasetaa.item(0);
                                 if(itemaa['some']==null) var somes=0;else var somes=itemaa['some'];
                                 document.getElementById('qti_'+a).innerHTML = somes;
                                 });});
    db.transaction(function(tx) {
                   tx.executeSql(selectStockE, [produit,1,'0',0], function(tx, resultaa) {
                                 datasetaa = resultaa.rows;;
                                 itemaa = datasetaa.item(0);
                                 if(itemaa['some']==null) var somes=0;else var somes=itemaa['some'];
                                 
                                 db.transaction(function(tx) {
                                                tx.executeSql(selectStockEE, [produit,0,'0',0], function(tx, resultaas) {
                                                              datasetaas = resultaas.rows;
                                                              if(datasetaas.length==0) { var qtee = parseFloat(somes);}
                                                              else {
                                                              itemaas = datasetaas.item(0);
                                                              if(itemaas['taille']==null) var taille=0;else var taille=itemaas['taille'];
                                                              if(itemaas['tailli']==null) var tailli=0;else var tailli=itemaas['tailli'];
                                                              if(tailli==0) var qts=0;else qts=parseFloat(taille/tailli);
                                                              var qtee = parseFloat(parseFloat(qts)+parseFloat(somes));
                                                              }
                                                              
                                                              db.transaction(function(tx) {
                                                                             tx.executeSql(selectStockEES, [produit,'0',0], function(tx, resultaas) {
                                                                                           datasetaas = resultaas.rows;
                                                                                           if(datasetaas.length==0) { var qteeb = 0;}
                                                                                           else {
                                                                                           //itemaas = datasetaas.item(0);
                                                                                           var qteeb=0;
                                                                                           for (is = 0, item = null; is < datasetaas.length; is++) {
                                                                                           itemaas = datasetaas.item(is);
                                                                                           if(itemaas['taille']==null) var taille=0;else var taille=itemaas['taille'];
                                                                                           if(itemaas['tailli']==null) var tailli=0;else var tailli=itemaas['tailli'];
                                                                                           if(tailli==0) var qts=0;else var qts=parseFloat(parseFloat(taille/tailli)*itemaas['quantite']);
                                                                                           qteeb +=qts;
                                                                                           }
                                                                                           }
                                                                                           
                                                                                           
                                                                                           document.getElementById('qtee_'+a).innerHTML = qtee+qteeb;//number_format(qts, 2, '.', '');
                                                                                           document.getElementById('hqtee_'+a).value = qtee+qteeb;
                                                                                           });});
                                                              
                                                              });});});});
    db.transaction(function(tx) {
                   tx.executeSql(selectStockE, [produit,1,'1',0], function(tx, resultaa) {
                                 datasetaa = resultaa.rows;;
                                 itemaa = datasetaa.item(0);
                                 if(itemaa['some']==null) var somes=0;else var somes=itemaa['some'];
                                 
                                 db.transaction(function(tx) {
                                                tx.executeSql(selectStockEE, [produit,0,'1',0], function(tx, resultaa) {
                                                              datasetaa = resultaa.rows;
                                                              if(datasetaa.length==0) { var qtee = parseFloat(somes);}
                                                              else {
                                                              itemaa = datasetaa.item(0);
                                                              if(itemaa['taille']==null) var taille=0;else var taille=itemaa['taille'];
                                                              if(itemaa['tailli']==null) var tailli=0;else var tailli=itemaa['tailli'];
                                                              if(tailli==0) var qts=0;else qts=parseFloat(taille/tailli);
                                                              var qtee = parseFloat(parseFloat(qts)+parseFloat(somes));
                                                              }
                                                              
                                                              db.transaction(function(tx) {
                                                                             tx.executeSql(selectStockEES, [produit,'1',0], function(tx, resultaas) {
                                                                                           datasetaas = resultaas.rows;
                                                                                           if(datasetaas.length==0) { var qteeb = 0;}
                                                                                           else {
                                                                                           //itemaas = datasetaas.item(0);
                                                                                           var qteeb=0;
                                                                                           for (is = 0, item = null; is < datasetaas.length; is++) {
                                                                                           itemaas = datasetaas.item(is);
                                                                                           if(itemaas['taille']==null) var taille=0;else var taille=itemaas['taille'];
                                                                                           if(itemaas['tailli']==null) var tailli=0;else var tailli=itemaas['tailli'];
                                                                                           if(tailli==0) var qts=0;else var qts=parseFloat(parseFloat(taille/tailli)*itemaas['quantite']);
                                                                                           qteeb +=qts;
                                                                                           }
                                                                                           }
                                                                                           
                                                                                           document.getElementById('qts_'+a).innerHTML = qtee+qteeb;//number_format(qts, 2, '.', '');
                                                                                           document.getElementById('hqts_'+a).value = qtee+qteeb;
                                                                                           document.getElementById('qtd_'+a).innerHTML = parseFloat(parseFloat(document.getElementById('hqtee_'+a).value)-parseFloat(document.getElementById('hqts_'+a).value));
                                                                                           });});
                                                              
                                                              });});});});
    db.transaction(function(tx) {
                   tx.executeSql(selectStockE, [produit,1,'0',1], function(tx, resultaa) {
                                 datasetaa = resultaa.rows;;
                                 itemaa = datasetaa.item(0);
                                 if(itemaa['some']==null) var somes=0;else var somes=itemaa['some'];
                                 
                                 db.transaction(function(tx) {
                                                tx.executeSql(selectStockEE, [produit,0,'0',1], function(tx, resultaa) {
                                                              datasetaa = resultaa.rows;
                                                              if(datasetaa.length==0) { var qtee = parseFloat(somes);}
                                                              else {
                                                              itemaa = datasetaa.item(0);
                                                              if(itemaa['taille']==null) var taille=0;else var taille=itemaa['taille'];
                                                              if(itemaa['tailli']==null) var tailli=0;else var tailli=itemaa['tailli'];
                                                              if(tailli==0) var qts=0;else qts=parseFloat(taille/tailli);
                                                              var qtee = parseFloat(parseFloat(qts)+parseFloat(somes));
                                                              }
                                                              
                                                              db.transaction(function(tx) {
                                                                             tx.executeSql(selectStockEES, [produit,'0',1], function(tx, resultaas) {
                                                                                           datasetaas = resultaas.rows;
                                                                                           if(datasetaas.length==0) { var qteeb = 0;}
                                                                                           else {
                                                                                           //itemaas = datasetaas.item(0);
                                                                                           var qteeb=0;
                                                                                           for (is = 0, item = null; is < datasetaas.length; is++) {
                                                                                           itemaas = datasetaas.item(is);
                                                                                           if(itemaas['taille']==null) var taille=0;else var taille=itemaas['taille'];
                                                                                           if(itemaas['tailli']==null) var tailli=0;else var tailli=itemaas['tailli'];
                                                                                           if(tailli==0) var qts=0;else var qts=parseFloat(parseFloat(taille/tailli)*itemaas['quantite']);
                                                                                           qteeb +=qts;
                                                                                           }
                                                                                           }
                                                                                           
                                                                                           
                                                                                           document.getElementById('qtae_'+a).innerHTML = qtee+qteeb;//number_format(qts, 2, '.', '');
                                                                                           document.getElementById('hqtaee_'+a).value = qtee+qteeb;
                                                                                           });});
                                                              
                                                              });});});});
    db.transaction(function(tx) {
                   tx.executeSql(selectStockE, [produit,1,'1',1], function(tx, resultaa) {
                                 datasetaa = resultaa.rows;;
                                 itemaa = datasetaa.item(0);
                                 if(itemaa['some']==null) var somes=0;else var somes=itemaa['some'];
                                 
                                 db.transaction(function(tx) {
                                                tx.executeSql(selectStockEE, [produit,0,'1',1], function(tx, resultaa) {
                                                              datasetaa = resultaa.rows;
                                                              if(datasetaa.length==0) { var qtee = parseFloat(somes);}
                                                              else {
                                                              itemaa = datasetaa.item(0);
                                                              if(itemaa['taille']==null) var taille=0;else var taille=itemaa['taille'];
                                                              if(itemaa['tailli']==null) var tailli=0;else var tailli=itemaa['tailli'];
                                                              if(tailli==0) var qts=0;else qts=parseFloat(taille/tailli);
                                                              var qtee = parseFloat(parseFloat(qts)+parseFloat(somes));
                                                              }
                                                              
                                                              db.transaction(function(tx) {
                                                                             tx.executeSql(selectStockEES, [produit,'1',1], function(tx, resultaas) {
                                                                                           datasetaas = resultaas.rows;
                                                                                           if(datasetaas.length==0) { var qteeb = 0;}
                                                                                           else {
                                                                                           //itemaas = datasetaas.item(0);
                                                                                           var qteeb=0;
                                                                                           for (is = 0, item = null; is < datasetaas.length; is++) {
                                                                                           itemaas = datasetaas.item(is);
                                                                                           if(itemaas['taille']==null) var taille=0;else var taille=itemaas['taille'];
                                                                                           if(itemaas['tailli']==null) var tailli=0;else var tailli=itemaas['tailli'];
                                                                                           if(tailli==0) var qts=0;else var qts=parseFloat(parseFloat(taille/tailli)*itemaas['quantite']);
                                                                                           qteeb +=qts;
                                                                                           }
                                                                                           }
                                                                                           document.getElementById('qtas_'+a).innerHTML = qtee+qteeb;//number_format(qts, 2, '.', '');
                                                                                           document.getElementById('hqtas_'+a).value = qtee+qteeb;
                                                                                           document.getElementById('qtad_'+a).innerHTML = parseFloat(parseFloat(document.getElementById('hqtaee_'+a).value)-parseFloat(document.getElementById('hqtas_'+a).value));
                                                                                           });});
                                                              
                                                              });});});});
    
    
    
}

function affichtableau1s(produit,fournisseur)
{
    db.transaction(function(tx) {
                   tx.executeSql(affichtableau1, [produit,fournisseur], function(tx, resultaa) {
                                 datasetaa = resultaa.rows;
                                 itemaa = datasetaa.item(0);
                                 document.getElementById('commentairetablo1').innerHTML=itemaa['commentaire'];
                                 if(itemaa['etat'].substr(0,1)=='1') document.getElementById("cdtablo1").checked = true;
                                 if(itemaa['etat'].substr(2,1)=='1') document.getElementById("cdtablo2").checked = true;
                                 if(itemaa['etat'].substr(4,1)=='1') document.getElementById("cdtablo3").checked = true;
                                 if(itemaa['etat'].substr(6,1)=='1') document.getElementById("cdtablo4").checked = true;
                                 if(itemaa['etat'].substr(8,1)=='1') document.getElementById("cdtablo5").checked = true;
                                 });});
}

function affichtableau2s(produit,magasin,type,etat,statutstock)
{
    
    db.transaction(function(tx) {
                   tx.executeSql(affichtableau2, [produit,magasin,type,etat,statutstock], function(tx, resultaa) {
                                 datasetaa = resultaa.rows;
                                 itemaa = datasetaa.item(0);
                                 document.getElementById('commentairetablo2').innerHTML=itemaa['commentaire'];
                                 });});
}


function calculertableau1()
{
    var listfournisseur=document.getElementById('listfournisseur').options[document.getElementById('listfournisseur').selectedIndex].value;
    var compteur=document.getElementById('cpttableau1').value;
    if(!isNaN(compteur)) compteur=compteur; else compteur=0; if(compteur==null) compteur=0;var totalott=0;
    if(compteur!=0)
    {
        for(a=0;a<compteur;a++)
        {
            var qtesaisi=document.getElementById('qtt_'+a).options[document.getElementById('qtt_'+a).selectedIndex].value;
            var prit=document.getElementById('prixtt_'+a).value;
            var totalbil=parseFloat(parseFloat(qtesaisi)*parseFloat(prit));
            document.getElementById('qttpi_'+a).value=number_format(totalbil, 2, '.', '');
            totalott +=parseFloat(totalbil);
        }
        document.getElementById('totaltableau1').innerHTML=number_format(totalott, 2, '.', '')+' DHs';
    }
    
}


function validertableau1()
{
    
    if(document.getElementById("cdtablo1").checked == true) var etat1='1';else var etat1='0';
    if(document.getElementById("cdtablo2").checked == true) var etat2='1';else var etat2='0';
    if(document.getElementById("cdtablo3").checked == true) var etat3='1';else var etat3='0';
    if(document.getElementById("cdtablo4").checked == true) var etat4='1';else var etat4='0';
    if(document.getElementById("cdtablo5").checked == true) var etat5='1';else var etat5='0';
    var monetat=etat1+'-'+etat2+'-'+etat3+'-'+etat4+'-'+etat5;
    var commentairetablo1=document.getElementById("commentairetablo1").value;
    
    var listfournisseur=document.getElementById('listfournisseur').options[document.getElementById('listfournisseur').selectedIndex].value;
    var compteur=document.getElementById('cpttableau1').value;
    if(!isNaN(compteur)) compteur=compteur; else compteur=0; if(compteur==null) compteur=0;var totalott=0;
    if(compteur!=0)
    {
        db.transaction(function(tx) {
                       for(a=0;a<compteur;a++)
                       {
                       var produittt=document.getElementById('produitt_'+a).value;
                       var qtesaisi=document.getElementById('qtt_'+a).options[document.getElementById('qtt_'+a).selectedIndex].value;
                       if(!isNaN(qtesaisi)) qtesaisi=qtesaisi; else qtesaisi=0; if(qtesaisi==null) qtesaisi=0;
                       var prit=document.getElementById('prixtt_'+a).value;
                       var totalbil=parseFloat(parseFloat(qtesaisi)*parseFloat(prit));
                       Today = new Date;
                       Jour = Today.getDate();if(Jour<10) Jour='0'+Jour;
                       Mois = (Today.getMonth())+1;if(Mois<10) Mois='0'+Mois;
                       Annee = Today.getFullYear();
                       Heure = Today.getHours();if(Heure<10) Heure='0'+Heure;
                       Minutes = Today.getMinutes();if(Minutes<10) Minutes='0'+Minutes;
                       Secondes = Today.getSeconds();if(Secondes<10) Secondes='0'+Secondes;
                       dateCreation = Annee + "-" + Mois + "-" + Jour+" "+Heure+":"+Minutes+":"+Secondes;
                       
                       
                       if(qtesaisi>=0)
                       {
                       tx.executeSql(deletetableau1, [listfournisseur,produittt], loadAndReset, onError);
                       }
                       if(qtesaisi>0)
                       {
                       tx.executeSql(inserttableau1, [listfournisseur,produittt,qtesaisi,dateCreation,sessionStorage.getItem('userdoglina'),monetat,commentairetablo1], loadAndReset, onError);
                       }
                       }
                       document.getElementById('scroller77').innerHTML='<div style="font-size:18px;font-family:arial;font-weight:bold;color:green;text-align:center;padding-top:20px;">Les informations ont &eacute;t&eacute; enregistr&eacute;s avec succ&egrave;s</div>';
                       });
        
    }
    
}


function validertableau2(etat)
{
    
    var commentairetablo2=document.getElementById("commentairetablo2").value;
    var statutstock=document.getElementById('statutstock').options[document.getElementById('statutstock').selectedIndex].value;
    var listmagasin=document.getElementById('listmagasin').options[document.getElementById('listmagasin').selectedIndex].value;
    
    var compteur=document.getElementById('cpttableau2').value;
    if(!isNaN(compteur)) compteur=compteur; else compteur=0; if(compteur==null) compteur=0;var totalott=0;
    
    if(compteur!=0)
    {
        db.transaction(function(tx) {
                       for(a=0;a<compteur;a++)
                       {
                       var typeprod=document.getElementById('typs_'+a).value;
                       var produittt=document.getElementById('prdttt_'+a).value;
                       if(statutstock==0) var qtesaisi=document.getElementById('qttt_'+a).options[document.getElementById('qttt_'+a).selectedIndex].value;
                       else var qtesaisi=document.getElementById('qttt_'+a).value;
                       if(!isNaN(qtesaisi)) qtesaisi=qtesaisi; else qtesaisi=0; if(qtesaisi==null) qtesaisi=0;
                       Today = new Date;
                       Jour = Today.getDate();if(Jour<10) Jour='0'+Jour;
                       Mois = (Today.getMonth())+1;if(Mois<10) Mois='0'+Mois;
                       Annee = Today.getFullYear();
                       Heure = Today.getHours();if(Heure<10) Heure='0'+Heure;
                       Minutes = Today.getMinutes();if(Minutes<10) Minutes='0'+Minutes;
                       Secondes = Today.getSeconds();if(Secondes<10) Secondes='0'+Secondes;
                       dateCreation = Annee + "-" + Mois + "-" + Jour+" "+Heure+":"+Minutes+":"+Secondes;
                       
                       
                       if(qtesaisi>=0)
                       {
                       tx.executeSql(deletetableau2, [produittt,listmagasin,typeprod,document.getElementById('etatbon').value,statutstock], loadAndReset, onError);
                       //alert('supp'+produittt+'<>'+qtesaisi+'<>'+typeprod);
                       }
                       if(qtesaisi>0)
                       {
                       //alert(produittt+'<>'+typeprod+'<>'+qtesaisi+'<>'+listmagasin+'<>'+dateCreation+'<>'+sessionStorage.getItem('userdoglina')+'<>'+commentairetablo2+'<>'+document.getElementById('etatbon').value+'<>'+statutstock);
                       tx.executeSql(inserttableau2, [produittt,typeprod,qtesaisi,listmagasin,dateCreation,sessionStorage.getItem('userdoglina'),commentairetablo2,document.getElementById('etatbon').value,statutstock], loadAndReset, onError);
                       }
                       }
                       
                       document.getElementById('scroller88').innerHTML='<div style="font-size:18px;font-family:arial;font-weight:bold;color:green;text-align:center;padding-top:20px;">Les informations ont &eacute;t&eacute; enregistr&eacute;s avec succ&egrave;s</div>';
                       });
        
    }
    
}





function maremisett(commande,vendeur,magasin,total)
{
    
    db.transaction(function(tx) {
                   tx.executeSql(maremisex, [commande,vendeur,magasin,1], function(tx, resultaa) {
                                 dataset = resultaa.rows;
                                 var remise=0;
                                 if(dataset.length==0)
                                 {
                                 remise += total;
                                 }
                                 else
                                 {
                                 for (i = 0, item = null; i < dataset.length; i++) {
                                 item = dataset.item(i);
                                 
                                 var montantr=item['montant'];if(montantr=='') montantr=0;
                                 var pourcentager=item['pourcentage'];if(pourcentager=='') pourcentager=0;
                                 remise +=parseFloat(total-(parseFloat(montantr))-(parseFloat(total)*parseFloat(pourcentager/100)));
                                 
                                 }
                                 
                                 }
                                 var totalt=parseFloat(parseFloat(total)-parseFloat(remise));//alert('tot'+total+'hhh'+totalt);
                                 var totaloo=parseFloat(document.getElementById('totalooo').value);
                                 if(totaloo<totalt) { totalt=totaloo;remise=totaloo;}
                                 document.getElementById('remisetk').innerHTML='<b>'+number_format(totalt, 2, ',', '')+' DH</b>';
                                 document.getElementById('totaltk').innerHTML='<b>'+number_format(remise, 2, ',', '')+' DH</b>';
                                 });});
}


function monmaga(magasin,i)
{
    
    db.transaction(function(tx) {
                   tx.executeSql(selectMagasins, [magasin], function(tx, resultaa) {
                                 datasetaa = resultaa.rows;
                                 itemaa = datasetaa.item(0);
                                 document.getElementById('magasin_'+i).innerHTML=itemaa['intitule'];
                                 
                                 });});
}


function monmagap()
{
    var magasin=sessionStorage.getItem('magasinuserdoglina');
    db.transaction(function(tx) {
                   tx.executeSql(selectMagasins, [magasin], function(tx, resultaa) {
                                 datasetaa = resultaa.rows;
                                 itemaa = datasetaa.item(0);
                                 document.getElementById('monmagapx').innerHTML='Stock Magasin : '+itemaa['intitule'];
                                 });});
}

function monclie(client,i)
{
    
    db.transaction(function(tx) {
                   tx.executeSql(InfoClient, [client], function(tx, resultaa) {
                                 datasetaa = resultaa.rows;
                                 itemaa = datasetaa.item(0);
                                 document.getElementById('client_'+i).innerHTML=itemaa['nom']+' '+itemaa['prenom'];
                                 
                                 });});
}
function monvend(vendeur,i)
{
    
    db.transaction(function(tx) {
                   tx.executeSql(selectVendeur, [vendeur], function(tx, resultaa) {
                                 datasetaa = resultaa.rows;
                                 itemaa = datasetaa.item(0);
                                 document.getElementById('vendeur_'+i).innerHTML=itemaa['nom']+' '+itemaa['prenom'];
                                 
                                 });});
}
function monclient(client)
{
    
    db.transaction(function(tx) {
                   tx.executeSql(selectClient, [client], function(tx, resultaa) {
                                 datasetaa = resultaa.rows;
                                 itemaa = datasetaa.item(0);
                                 var nomprenomclient=itemaa['nom']+' '+itemaa['prenom'];
                                 
                                 });});
}

function monclientt(client)
{
    
    db.transaction(function(tx) {
                   tx.executeSql(selectClient, [client], function(tx, resultaa) {
                                 datasetaa = resultaa.rows;
                                 itemaa = datasetaa.item(0);
                                 var nomprenomclient=itemaa['nom']+' '+itemaa['prenom'];
                                 document.getElementById('clienttk').innerHTML='<b>Client</b> : '+nomprenomclient;
                                 });});
}

function vendeurtt(vendeur)
{
    
    db.transaction(function(tx) {
                   tx.executeSql(selectVendeur, [vendeur], function(tx, resultaa) {
                                 datasetaa = resultaa.rows;
                                 itemaa = datasetaa.item(0);
                                 var nomprenomvendeur=itemaa['nom']+' '+itemaa['prenom'];
                                 document.getElementById('vendeurtk').innerHTML='<b>VD</b> : '+nomprenomvendeur;
                                 });});
}

function monmagasintt(magasin)
{
    db.transaction(function(tx) {
                   tx.executeSql(selectMagasins, [magasin], function(tx, resultaa) {
                                 datasetaa = resultaa.rows;
                                 itemaa = datasetaa.item(0);
                                 var magasin=itemaa['intitule'];
                                 document.getElementById('monmagasintk').innerHTML=magasin;
                                 });});
    
}

function livraisontt(livraison)
{
    
    db.transaction(function(tx) {
                   tx.executeSql(selectLivraison, [livraison], function(tx, resultaa) {
                                 datasetaa = resultaa.rows;
                                 itemaa = datasetaa.item(0);
                                 var mdlivrerr=itemaa['intitule'];
                                 document.getElementById('livraisontk').innerHTML='<b>TYPE</b> : '+mdlivrerr;
                                 });});
    
}

function paiementtt(paiement)
{
    db.transaction(function(tx) {
                   tx.executeSql(selectModePaiement, [paiement], function(tx, resultaa) {
                                 datasetaa = resultaa.rows;
                                 itemaa = datasetaa.item(0);
                                 var modepayer=itemaa['intitule'];
                                 document.getElementById('paiementtk').innerHTML='<b>MP</b> : '+modepayer;
                                 });});
    
}





function monlivre(livraison,i)
{
    db.transaction(function(tx) {
                   tx.executeSql(selectLivraison, [livraison], function(tx, resultaa) {
                                 datasetaa = resultaa.rows;
                                 itemaa = datasetaa.item(0);
                                 document.getElementById('livraison_'+i).innerHTML=itemaa['intitule'];
                                 
                                 });});
}

function monmodepaie(mode,i)
{
    db.transaction(function(tx) {
                   tx.executeSql(selectModePaiement, [mode], function(tx, resultaa) {
                                 datasetaa = resultaa.rows;
                                 itemaa = datasetaa.item(0);
                                 document.getElementById('modepaiement_'+i).innerHTML=itemaa['intitule'];
                                 
                                 });});
}

function monfamille(famille,i)
{
    db.transaction(function(tx) {
                   tx.executeSql(selectFamille, [famille], function(tx, resultaa) {
                                 datasetaa = resultaa.rows;
                                 itemaa = datasetaa.item(0);
                                 document.getElementById('famille_'+i).innerHTML=itemaa['libelle'];
                                 
                                 });});
}


function detailencaise(encaissement,vendeur,magasin)
{
    
    db.transaction(function(tx) {
                   tx.executeSql(selectEtatencaissements, [""+encaissement+"",vendeur,magasin], function(tx, resultaa) {
                                 dataset = resultaa.rows;
                                 
                                 var detailencaise = '<table style="width:500px;height:auto;background-color:white;border-collapse:collapse;border:2px solid #f35828;" border="0" cellpadding="2" cellspacing="2" ><tr bgcolor="#000" style="height:50px;"><td class="texte7" style="width:30%" >Mode de paiement</td><td class="texte7" style="width:20%" >Solde</td><td class="texte7" style="width:30%" >Date de cr&eacute;ation</td><td class="texte7" style="width:20%" >date Encais.</td></tr>';
                                 
                                 for (i = 0, item = null; i < dataset.length; i++) {
                                 item = dataset.item(i);
                                 monmodepaie(item['modepaiement'],i);
                                 detailencaise += '<tr bgcolor="#ffffff" style="height:30px;"><td class="texte8" id="modepaiement_'+i+'"></td><td class="texte8" >'+number_format(item['solde'], 2, ',', '')+'</td><td class="texte8" >'+item['dateCreation']+'</td><td class="texte8" >'+item['dateEncais']+'</td></tr>';
                                 
                                 }
                                 document.getElementById('detailencaise').innerHTML=detailencaise+'</table>';
                                 });});
}

function detailremise(commande,vendeur,magasin)
{
    db.transaction(function(tx) {
                   tx.executeSql(selectMaRemise, [commande,vendeur,magasin], function(tx, resultaa) {
                                 dataset = resultaa.rows;
                                 
                                 var detailremise = '<table style="width:500px;height:auto;background-color:white;border-collapse:collapse;border:2px solid #f35828;" border="0" cellpadding="2" cellspacing="2" ><tr bgcolor="#000" style="height:50px;"><td class="texte7" style="width:40%" >Type de remise</td><td class="texte7" style="width:30%" >Montant</td><td class="texte7" style="width:30%" >Pourcentage</td></tr>';
                                 if(dataset.length==0)
                                 {
                                 detailremise += '<tr bgcolor="#ffffff" style="height:30px;" ><td class="texte8" colspan="3">Aucune remise</td></tr>';
                                 }
                                 else
                                 {
                                 for (i = 0, item = null; i < dataset.length; i++) {
                                 item = dataset.item(i);
                                 if(item['type']==1) var typop="R&eacute;duction";else var typop="Carte de Fid&eacute;lit&eacute;";
                                 detailremise += '<tr bgcolor="#ffffff" style="height:30px;"><td class="texte8" >'+typop+'</td><td class="texte8" >'+number_format(item['montant'], 2, ',', '')+'</td><td class="texte8" >'+item['pourcentage']+'</td></tr>';
                                 
                                 }
                                 }
                                 document.getElementById('detailremise').innerHTML=detailremise+'</table>';
                                 });});
}

function mesremiseclient(client)
{
    db.transaction(function(tx) {
                   tx.executeSql(selectMesRemises, [client,2], function(tx, resultaa) {
                                 dataset = resultaa.rows;var detailcfclients = "";
                                 for (i = 0, item = null; i < dataset.length; i++) {
                                 item = dataset.item(i);
                                 
                                 detailcfclients += '<tr bgcolor="#ffffff" style="height:30px;"><td class="texte8" style="width:30%">'+item['commande']+'_'+item['magasin']+'_'+item['vendeur']+'</td><td class="texte8" style="width:30%">-'+number_format(item['montant'], 2, ',', '')+' DHs</td><td class="texte8" style="width:40%" >'+item['dateCreation']+'</td></tr>';
                                 }
                                 
                                 document.getElementById('detailcfclients').innerHTML=detailcfclients;
                                 
                                 });});
}


function mesrechargeclient(client)
{
    db.transaction(function(tx) {
                   tx.executeSql(selectCommandeClient, [client], function(tx, resultaa) {
                                 dataset = resultaa.rows;var rechargecfclient = "";
                                 for (i = 0, item = null; i < dataset.length; i++) {
                                 item = dataset.item(i);
                                 if(item['recharge']==0) { var pointh=parseFloat(item['montant']*0.1);var intu='Vente ';}
                                 else { var pointh=parseFloat(item['montant']);var intu='Recharge ';}
                                 rechargecfclient += '<tr bgcolor="#ffffff" style="height:30px;"><td class="texte10" style="width:30%">&nbsp;&nbsp;&nbsp;'+intu+' : '+item['id']+'_'+item['magasin']+'_'+item['vendeur']+'</td><td class="texte8" style="width:30%">+'+number_format(pointh, 2, ',', '')+' DHs</td><td class="texte8" style="width:40%" >'+item['dateCreation']+'</td></tr>';
                                 }
                                 
                                 document.getElementById('rechargecfclient').innerHTML=rechargecfclient;
                                 
                                 });});
    
}


function detailcfclient(client,vendeur,magasin,commande,total,dateCreation)
{
    db.transaction(function(tx) {
                   tx.executeSql(selectMaRemises, [client,vendeur,magasin,2,commande], function(tx, resultaa) {
                                 dataset = resultaa.rows;
                                 
                                 
                                 var detailcfclient = '<table style="width:700px;height:auto;background-color:white;border-collapse:collapse;border:2px solid #f35828;" border="0" cellpadding="2" cellspacing="2" ><tr bgcolor="#000" style="height:50px;"><td class="texte7" style="width:30%" >N&deg; de commande</td><td class="texte7" style="width:30%" >Montant</td><td class="texte7" style="width:40%" >Date de cr&eacute;ation</td></tr>';
                                 if(dataset.length==0)
                                 {
                                 //detailcfclient += '<tr bgcolor="#ffffff" style="height:30px;" ><td class="texte8" colspan="3">Aucun enregistrement</td></tr>';
                                 }
                                 else
                                 {
                                 for (i = 0, item = null; i < dataset.length; i++) {
                                 item = dataset.item(i);
                                 
                                 detailcfclient += '<tr bgcolor="#ffffff" style="height:30px;"><td class="texte8" >'+item['commande']+'</td><td class="texte8" >-'+number_format(item['montant'], 2, ',', '')+' DHs</td><td class="texte8" >'+item['dateCreation']+'</td></tr>';
                                 }
                                 }
                                 if(commande!=0 && total!=0)
                                 {
                                 var pointmont=parseFloat(total*0.1);
                                 detailcfclient += '<tr bgcolor="#ffffff" style="height:30px;"><td class="texte8" >'+commande+'</td><td class="texte8" >+'+number_format(pointmont, 2, ',', '')+' DHs</td><td class="texte8" >'+dateCreation+'</td></tr>';
                                 }
                                 else if(commande==0)
                                 {
                                 detailcfclient += '<table style="width:700px;height:auto;background-color:white;border-collapse:collapse;border:2px solid #f35828;" border="0" cellpadding="2" cellspacing="2"  id="detailcfclients">&nbsp;</table>';
                                 detailcfclient += '<table style="width:700px;height:auto;background-color:white;border-collapse:collapse;border:2px solid #f35828;" border="0" cellpadding="2" cellspacing="2"  id="rechargecfclient">&nbsp;</table>';
                                 mesremiseclient(client);
                                 mesrechargeclient(client);
                                 
                                 }
                                 
                                 
                                 
                                 document.getElementById('detailcfclient').innerHTML=detailcfclient+'</table>';
                                 });});
}



function infoproduitbt(produit,a)
{
    
    
    db.transaction(function(tx) {tx.executeSql(selectProduitbt, [produit], function(tx, result) {
                                               
                                               dataset = result.rows;
                                               var infoproduitbt = '<table style="width:500px;height:auto;background-color:white;border-collapse:collapse;border:2px solid #f35828;" border="0" cellpadding="2" cellspacing="2" ><tr bgcolor="#000" style="height:50px;"><td class="texte7" colspan="3">Information Produit N&deg;'+produit+'</td></tr>';
                                               
                                               item = dataset.item(0);
                                               
                                               var qteee=document.getElementById('hqtee_'+a).value;
                                               var qtree=document.getElementById('hqts_'+a).value;
                                               var qtres=parseFloat(parseFloat(qteee)-parseFloat(qtree));
                                               var qteeea=document.getElementById('hqtaee_'+a).value;
                                               var qtreea=document.getElementById('hqtas_'+a).value;
                                               var qtresa=parseFloat(parseFloat(qteeea)-parseFloat(qtreea));
                                               
                                               
                                               infoproduitbt += '<tr bgcolor="#ffffff" style="height:30px;"><td class="texte9" style="width:24%;" align="left">Libell&eacute;</td><td style="width:6%">&nbsp;</td><td class="texte10" style="width:70%;" align="left">'+item['libelle']+'</td></tr><tr bgcolor="#eae7e7" style="height:30px;"><td class="texte9" style="width:24%;" align="left">Taille</td><td style="width:6%">&nbsp;</td><td class="texte10" style="width:70%;" align="left">'+item['taille']+'</td></tr><tr bgcolor="#ffffff" style="height:30px;"><td class="texte9" style="width:24%;" align="left">Unit&eacute;</td><td style="width:6%">&nbsp;</td><td class="texte10" style="width:70%;" align="left">'+item['unite']+'</td></tr><tr bgcolor="#eae7e7" style="height:30px;"><td class="texte9" style="width:24%;" align="left">Quantite</td><td style="width:6%">&nbsp;</td><td class="texte10" style="width:70%;"  align="left">'+item['quantite']+'</td></tr>';
                                               
                                               infoproduitbt += '<tr bgcolor="#303030" style="height:40px;"><td class="texte7" colspan="3">Mouvement quantit&eacute;</td></tr>';
                                               
                                               infoproduitbt += '<tr><td colspan="3"><table style="width:100%"><tr><td style="width:33%" class="texte9">Qt&eacute; entr&eacute;e&nbsp;:&nbsp;<b>'+qteee+'</b></td><td style="width:33%" class="texte9">Qt&eacute; retourn&eacute;e&nbsp;:&nbsp;<b>'+qtree+'</b></td><td style="width:34%" class="texte9">Qt&eacute; Restante&nbsp;:&nbsp;<b>'+qtres+'</b></td></tr><tr><td colspan="3">&nbsp;</td></tr><tr><td style="width:33%" class="texte9">Qt&eacute; A.entr&eacute;e&nbsp;:&nbsp;<b>'+qteeea+'</b></td><td style="width:33%" class="texte9">Qt&eacute; A.retourn&eacute;e&nbsp;:&nbsp;<b>'+qtreea+'</b></td><td style="width:34%" class="texte9">Qt&eacute; A.Restante&nbsp;:&nbsp;<b>'+qtresa+'</b></td></tr></table></td></tr>';
                                               
                                               //infoproduitbt += '<tr bgcolor="#303030" style="height:40px;"><td class="texte7" colspan="3">D&eacute;tail Remise</td></tr><tr><td colspan="3" id="detailremise"></td></tr>';*/
                                               infoproduitbt += '</table>';
                                               
                                               //detailencaise(item['encaissement'],vendeur,magasin);
                                               //detailremise(commande,vendeur,magasin);
                                               
                                               
                                               
                                               document.getElementById('infoproduitbt').innerHTML=infoproduitbt;
                                               
                                               
                                               
                                               });
                   });}



function infovente(commande,vendeur,magasin)
{
    
    
    db.transaction(function(tx) {tx.executeSql(selectMaCommande, [commande,vendeur,magasin], function(tx, result) {
                                               
                                               dataset = result.rows;
                                               var infovente = '<table style="width:500px;height:auto;background-color:white;border-collapse:collapse;border:2px solid #f35828;" border="0" cellpadding="2" cellspacing="2" ><tr bgcolor="#000" style="height:50px;"><td class="texte7" colspan="3">Information Vente N&deg;'+commande+'_'+vendeur+'_'+magasin+'</td></tr>';
                                               
                                               item = dataset.item(0);
                                               
                                               
                                               monmaga(magasin,-1);
                                               monclie(client,-1);
                                               monvend(vendeur,-1);
                                               monlivre(item['livraison'],-1);
                                               
                                               
                                               
                                               
                                               infovente += '<tr bgcolor="#ffffff" style="height:30px;"><td class="texte9" style="width:47%;" align="left">Vendeur</td><td style="width:6%">&nbsp;</td><td class="texte10" style="width:47%;" id="vendeur_-1" align="left"></td></tr><tr bgcolor="#eae7e7" style="height:30px;"><td class="texte9" style="width:47%;" align="left">Magasin</td><td style="width:6%">&nbsp;</td><td class="texte10" style="width:47%;" id="magasin_-1" align="left"></td></tr><tr bgcolor="#ffffff" style="height:30px;"><td class="texte9" style="width:47%;" align="left">Client</td><td style="width:6%">&nbsp;</td><td class="texte10" style="width:47%;" id="client_-1" align="left"></td></tr><tr bgcolor="#eae7e7" style="height:30px;"><td class="texte9" style="width:47%;" align="left">Mode de livraison</td><td style="width:6%">&nbsp;</td><td class="texte10" style="width:47%;" id="livraison_-1" align="left"></td></tr><tr bgcolor="#ffffff" style="height:30px;"><td class="texte9" style="width:47%;" align="left">Montant</td><td style="width:6%">&nbsp;</td><td class="texte10" style="width:47%;"  align="left">'+number_format(item['montant'], 2, ',', '')+' DHs</td></tr><tr bgcolor="#eae7e7" style="height:30px;"><td class="texte9" style="width:47%;" align="left">Date de cr&eacute;ation</td><td style="width:6%">&nbsp;</td><td class="texte10" style="width:47%;"  align="left">'+item['dateCreation']+'</td></tr>';
                                               infovente += '<tr bgcolor="#303030" style="height:40px;"><td class="texte7" colspan="3">D&eacute;tail d\'\encaissement</td></tr><tr><td colspan="3" id="detailencaise"></td></tr>';
                                               infovente += '<tr bgcolor="#303030" style="height:40px;"><td class="texte7" colspan="3">D&eacute;tail Remise</td></tr><tr><td colspan="3" id="detailremise"></td></tr>';
                                               infovente += '</table>';
                                               
                                               detailencaise(item['encaissement'],vendeur,magasin);
                                               detailremise(commande,vendeur,magasin);
                                               
                                               
                                               
                                               document.getElementById('infovente').innerHTML=infovente;
                                               
                                               
                                               
                                               });
                   });}


function malisteclient() {
    db.transaction(function(tx) {
                   tx.executeSql(maListeClient, [], function(tx, result) {
                                 dataset = result.rows;
                                 
                                 var malisteclient='<table style="width:97%;height:auto;background-color:white;border-collapse:collapse;border-left:2px solid #f35828;border-right:2px solid #f35828;border-bottom:2px solid #f35828;" border="0" cellpadding="2" cellspacing="2" >';
                                 
                                 for (i = 0, item = null; i < dataset.length; i++) {
                                 item = dataset.item(i);if(i%2==0) var coli='#dfdfdf';else var coli='#fff';
                                 var id=item['id'];nom=item['nom'];prenom=item['prenom'];email=item['email'];phone=item['phone'];sexe=item['sexe'];code=item['code'];point=number_format(item['point'], 2, '.', '');//alert(point);
                                 magasin=item['intitule'];nomprenom=item['nom']+' '+item['prenom'];
                                 if(sexe==0) sexee='Mlle';else if(sexe==1) sexee='MMe';else sexee='Mr';
                                 
                                 if(i%2==0) var colo='#ffffff';else var colo='#eae7e7';
                                 malisteclient += '<tr bgcolor="'+colo+'" style="height:30px;"><td class="texte10" style="width:10%;">&nbsp;&nbsp;'+item['code']+'</td><td class="texte8" style="width:20%;" >'+item['nom']+'</td><td class="texte8" style="width:20%;" >'+item['prenom']+'</td><td class="texte8" style="width:5%;" >'+sexee+'</td><td class="texte8" style="width:10%;">'+item['email']+'</td><td class="texte8" style="width:10%;">'+item['phone']+'</td><td class="texte8" style="width:10%;">'+item['dateNaissance']+'</td>';
                                 
                                 malisteclient += '<td class="texte8" style="width:10%;"><a class="super vente3 pink" href="#ticketvente3s" onclick="clientvente('+item['code']+','+item['utilisateur']+','+item['magasin']+',0,0,0);" style="font-size:22px;font-weight:bold;color:#fff;letter-spacing:2px;" >CL</a></td></tr>';
                                 
                                 
                                 }
                                 
                                 document.getElementById('scroller55').innerHTML=malisteclient+'</table>';
                                 
                                 
                                 
                                 
                                 
                                 });
                   
                   });
}




function clientvente(client,vendeur,magasin,commande,total,dateCreation)
{
    
    
    
    db.transaction(function(tx) {tx.executeSql(InfoClient, [client], function(tx, result) {
                                               
                                               dataset = result.rows;item = dataset.item(0);
                                               var clientvente = '<table style="width:700px;height:auto;background-color:white;border-collapse:collapse;border:2px solid #f35828;" border="0" cellpadding="2" cellspacing="2" ><tr bgcolor="#000" style="height:50px;"><td class="texte7" colspan="3">Informations client N&deg; de code : '+item['code']+'</td></tr>';
                                               
                                               clientvente += '<tr bgcolor="#ffffff" style="height:30px;"><td class="texte11" style="width:47%;" align="left"><b>&nbsp;&nbsp;&nbsp;NP : </b>'+item['nom']+' '+item['prenom']+'</td><td style="width:6%">&nbsp;</td><td class="texte11" style="width:47%;"  align="left"><b>&nbsp;&nbsp;&nbsp;Cr&eacute;dit :</b> '+number_format(item['point'], 2, ',', '')+' DHs</td></tr><tr bgcolor="#ffffff" style="height:30px;"><td class="texte11" style="width:47%;" align="left"><b>&nbsp;&nbsp;&nbsp;Nais. : </b>'+item['dateNaissance']+'</td><td style="width:6%">&nbsp;</td><td class="texte11" style="width:47%;"  align="left"><b>&nbsp;&nbsp;&nbsp;Email :</b> '+item['email']+'</td></tr><tr bgcolor="#ffffff" style="height:30px;"><td class="texte11" style="width:47%;" align="left"><b>&nbsp;&nbsp;&nbsp;T&eacute;l. : </b>'+item['phone']+'</td><td style="width:6%">&nbsp;</td><td class="texte11" style="width:47%;"  align="left"><b>&nbsp;&nbsp;&nbsp;DC. :</b> '+item['dateCreation']+'</td></tr>';
                                               
                                               clientvente += '<tr bgcolor="#303030" style="height:40px;"><td class="texte7" colspan="3">D&eacute;tail Carte de fid&eacute;lit&eacute;</td></tr><tr><td colspan="3" id="detailcfclient"></td></tr>';
                                               clientvente += '</table>';
                                               
                                               detailcfclient(client,vendeur,magasin,commande,total,dateCreation);
                                               
                                               
                                               
                                               clientvente += '</table>';
                                               
                                               
                                               document.getElementById('clientvente').innerHTML=clientvente;
                                               
                                               });
                   });
    
    
}



function mesproduits()
{
    
    
    
    db.transaction(function(tx) {tx.executeSql(selectProduits, [], function(tx, result) {
                                               
                                               dataset = result.rows;
                                               var mesproduits='<table style="width:97%;height:auto;background-color:white;border-collapse:collapse;border-left:2px solid #f35828;border-right:2px solid #f35828;border-bottom:2px solid #f35828;" border="0" cellpadding="2" cellspacing="2" >';
                                               
                                               
                                               
                                               if(dataset.length!=0) {
                                               for (i = 0, item = null; i < dataset.length; i++) {
                                               item = dataset.item(i);
                                               
                                               
                                               monfamille(item['famille'],i);
                                               
                                               
                                               if(i%2==0) var colo='#ffffff';else var colo='#eae7e7';
                                               mesproduits += '<tr bgcolor="'+colo+'" style="height:30px;"><td class="texte10" style="width:25%;">&nbsp;&nbsp;'+item['libelle']+'</td><td class="texte8" style="width:20%;" id="famille_'+i+'"></td><td class="texte8" style="width:15%;" >'+number_format(item['prix'], 2, ',', '')+' DHs</td><td class="texte8" style="width:10%;" >'+item['tva']+' %</td><td class="texte8" style="width:10%;">'+item['tvabis']+' %</td><td class="texte8" style="width:10%;">'+item['ordre']+'</td>';
                                               
                                               mesproduits += '<td class="texte8" style="width:10%;"><a class="super vente1 pink" href="#ticketvente1s" onclick="infoproduit('+item['id']+');" style="font-size:18px;font-weight:bold;color:#fff;letter-spacing:2px;" >DE</a></td>';
                                               mesproduits += '</tr>';
                                               
                                               
                                               }
                                               
                                               
                                               }
                                               else
                                               {
                                               mesproduits += '<tr bgcolor="#fff" style="height:30px;"><td class="texte8" colspan="7">Aucun produit trouv&eacute;</td></tr>';
                                               
                                               }
                                               document.getElementById('scroller44').innerHTML=mesproduits+'</table>';
                                               
                                               
                                               
                                               });});
}




function mesventes()
{
    
    
    
    db.transaction(function(tx) {tx.executeSql(selectCommande, [sessionStorage.getItem('userdoglina')], function(tx, result) {
                                               
                                               dataset = result.rows;
                                               var mesventes='<table style="width:97%;height:auto;background-color:white;border-collapse:collapse;border-left:2px solid #f35828;border-right:2px solid #f35828;border-bottom:2px solid #f35828;" border="0" cellpadding="2" cellspacing="2" >';
                                               
                                               
                                               
                                               if(dataset.length!=0) {
                                               for (i = 0, item = null; i < dataset.length; i++) {
                                               item = dataset.item(i);
                                               
                                               
                                               
                                               
                                               
                                               
                                               monmaga(item['magasin'],i);
                                               monclie(item['client'],i);
                                               monvend(item['vendeur'],i);
                                               
                                               
                                               
                                               if(i%2==0) var colo='#ffffff';else var colo='#eae7e7';
                                               mesventes += '<tr bgcolor="'+colo+'" style="height:30px;"><td class="texte8" style="width:8%;">'+item['id']+'_'+item['magasin']+'_'+item['vendeur']+'</td><td class="texte8" style="width:15%;" id="vendeur_'+i+'"></td><td class="texte8" style="width:12%;" id="magasin_'+i+'"></td><td class="texte8" style="width:15%;" id="client_'+i+'"></td><td class="texte8" style="width:20%;">'+item['dateCreation']+'</td><td class="texte8" style="width:10%;">'+number_format(item['montant'], 2, ',', '')+' DHs</td>';
                                               mesventes += '<td class="texte8" style="width:20%;">&nbsp;&nbsp;<a class="super vente1 pink" href="#ticketvente1s" onclick="infovente('+item['id']+','+item['vendeur']+','+item['magasin']+');" style="font-size:18px;font-weight:bold;color:#fff;letter-spacing:2px;" >IF</a>&nbsp;<a class="super vente2 pink" href="#ticketvente2s" onclick="ticketvente('+item['id']+','+item['vendeur']+','+item['magasin']+','+item['client']+','+item['livraison']+','+item['encaissement']+','+item['montant']+');" style="font-size:18px;font-weight:bold;color:#fff;letter-spacing:2px;" >TK</a>&nbsp;<a class="super vente3 pink" href="#ticketvente3s" onclick="clientvente('+item['client']+','+item['vendeur']+','+item['magasin']+','+item['id']+','+item['montant']+',\''+item['dateCreation']+'\');" style="font-size:18px;font-weight:bold;color:#fff;letter-spacing:2px;" >CL</a>&nbsp;&nbsp;</td>';
                                               mesventes += '</tr>';
                                               
                                               
                                               
                                               
                                               }
                                               
                                               
                                               }
                                               else
                                               {
                                               mesventes += '<tr bgcolor="#fff" style="height:30px;"><td class="texte8" colspan="5">Aucune vente n\'\est enregistr&eacute;e</td></tr>';
                                               
                                               }
                                               document.getElementById('scroller22').innerHTML=mesventes+'</table>';
                                               
                                               
                                               
                                               });});
}
function verifpaye(var1)
{
    if(var1=='esp') {
        
        if(parseFloat(document.getElementById('montotal').value)<=0)
        {
            document.getElementById('valide1').innerHTML='';
        }
        else
        {
            document.getElementById('valide1').innerHTML='<a class="super button12 pink" href="javascript:regler(0,0);validerpaye(0,\'esp\',\'emp\')"  style="color:#fff;font-size:18px;font-weight:bold">VALIDER CE PAIEMENT</a>';
        }
    }
    else if(var1=='autre')
    {
        if(parseFloat(document.getElementById('montotal').value)<=0)
        {
            document.getElementById('valide2').innerHTML='';
        }
        else
        {
            document.getElementById('valide2').innerHTML='<a class="super button17 pink" href="javascript:validerpaye(0,\'autre\', \'emp\')"  style="color:#fff;font-size:30px;font-weight:bold"s>VALIDER CE PAIEMENT</a>';
        }
        
    }
    
    
}

function totalavecremise(var1,commande){
    
    
    db.transaction(function(tx) {
                   tx.executeSql(selectPanierse, [commande,sessionStorage.getItem('userdoglina'),sessionStorage.getItem('magasinuserdoglina'),var1], function(tx, result) {
                                 dataset = result.rows;var popis = '';var totalbis =0;var tvabis =0;
                                 for (i = 0, item = null; i < dataset.length; i++) {
                                 item = dataset.item(i);
                                 var price=item['prix'];qte=item['qte'];remise=item['remise'];
                                 var prixto=parseFloat(qte*price*parseFloat(100-remise)/100);
                                 var tvas=item['tva'];tva=parseFloat(tvas);
                                 var totalbiss = parseFloat(prixto);
                                 var multi=parseFloat(1+(parseFloat(tvas/100)));
                                 totalbis += totalbiss
                                 tvabis += parseFloat(parseFloat(totalbiss)-parseFloat(parseFloat(totalbiss)/multi));
                                 }
                                 
                                 total=parseFloat(totalbis);//alert('avant'+total);
                                 var tvae=tvabis;var tvabe=tvabis;
                                 db.transaction(function(tx) {tx.executeSql(selectRemise, [sessionStorage.getItem('userdoglina'),sessionStorage.getItem('magasinuserdoglina'),0,1], function(tx, result) {
                                                                            dataset = result.rows;
                                                                            
                                                                            var totals=0;var matvas=0;
                                                                            if(dataset.length==0) { totals=total;matvas=tvabis;}
                                                                            else {
                                                                            for (i = 0, item = null; i < dataset.length; i++) {
                                                                            item = dataset.item(i);
                                                                            var montantr=item['montant'];if(montantr=='') montantr=0;
                                                                            var pourcentager=item['pourcentage'];if(pourcentager=='') pourcentager=0;
                                                                            //alert('Avant'+total);
                                                                            totals +=parseFloat(total-(parseFloat(montantr))-(parseFloat(total)*parseFloat(pourcentager/100)));//alert('Apres'+totals);
                                                                            matvas +=parseFloat(tvae-(parseFloat(tvae)*parseFloat(pourcentager/100)));
                                                                            }
                                                                            }
                                                                            
                                                                            
                                                                            var totalfinal=totals;totalfinal=parseFloat(totalfinal);
                                                                            if(isNaN(sessionStorage.getItem('pointfidelitedoglina'))) sessionStorage.setItem('pointfidelitedoglina', 0);
                                                                            else if(sessionStorage.getItem('pointfidelitedoglina')=='' || sessionStorage.getItem('pointfidelitedoglina')==null)  sessionStorage.setItem('pointfidelitedoglina', 0);
                                                                            var credit=parseFloat(sessionStorage.getItem('pointfidelitedoglina'));
                                                                            //alert('total'+totalfinal+'credit'+credit);
                                                                            if(credit!=0 && totalfinal>0)
                                                                            {
                                                                            if(total>credit)
                                                                            {
                                                                            totalfinal=parseFloat(parseFloat(total)-parseFloat(credit));
                                                                            document.getElementById('creditfidel').value=parseFloat(totalfinal*0.1);
                                                                            }
                                                                            else if(total==credit)
                                                                            {
                                                                            totalfinal=0;
                                                                            document.getElementById('creditfidel').value=0;
                                                                            }
                                                                            else
                                                                            {
                                                                            totalfinal=0;//alert(total);alert(credit);
                                                                            document.getElementById('creditfidel').value=parseFloat(credit-total);
                                                                            }
                                                                            
                                                                            }
                                                                            else
                                                                            {
                                                                            totalfinal=parseFloat(totalfinal);
                                                                            document.getElementById('creditfidel').value=parseFloat(totalfinal*0.1);
                                                                            }
                                                                            
                                                                            document.getElementById('totalfinal').value=totalfinal;
                                                                            
                                                                            document.getElementById('montotal').value=totalfinal;
                                                                            document.getElementById('montva').value=matvas;
                                                                            document.getElementById('total').innerHTML=number_format(totalfinal, 2, ',', '')+' DHs';
                                                                            document.getElementById('duencais').value=number_format(totalfinal, 2, '.', '');
                                                                            document.getElementById('montantdus').value=document.getElementById('duencais').value;
                                                                            
                                                                            var dudu=number_format(parseFloat(document.getElementById('montantdus').value), 2, '.', '');
                                                                            document.getElementById('dudus').innerHTML='<a class="super monaiex pink" style="font-size:30px;font-weight:bold;color:#000;letter-spacing:5px;" href="javascript:regler(0,'+dudu+');">'+dudu+'</a>';
                                                                            document.getElementById('soldeencais').value=number_format(totalfinal, 2, '.', '');
                                                                            document.getElementById('totaleencais').value=totalfinal;
                                                                            var tvass=number_format(matvas, 2, ',', '');
                                                                            //document.getElementById('tva').innerHTML='dont '+tvass+' DHs TVA ';
                                                                            var poinfid=document.getElementById('mtfidelpoint').value;
                                                                            //document.getElementById('tva').innerHTML='CF : '+number_format(poinfid, 2, '.', '')+' DHs';
                                                                            
                                                                            
                                                                            db.transaction(function(tx) {tx.executeSql(sumEtatencaissement, [document.getElementById('neencais').value,sessionStorage.getItem('magasinuserdoglina'),sessionStorage.getItem('userdoglina')], function(tx, result) {
                                                                                                                       
                                                                                                                       dataset = result.rows;
                                                                                                                       item = dataset.item(0);
                                                                                                                       var soldex=item['soldex'];
                                                                                                                       if(soldex=='') montantencaisse=0;else montantencaisse=soldex;
                                                                                                                       document.getElementById('encais').value=number_format(parseFloat(montantencaisse), 2, '.', '');
                                                                                                                       
                                                                                                                       });
                                                                                           });
                                                                            
                                                                            
                                                                            });
                                                });
                                 
                                 
                                 
                                 
                                 
                                 
                                 
                                 
                                 
                                 });
                   
                   });
    
    
    
    
}


function rechargercf(var1)
{
    
    db.transaction(function(tx) {tx.executeSql(selectFidelite, [document.getElementById('ncarteff').value,1], function(tx, result) {
                                               
                                               dataset = result.rows;
                                               if(dataset.length==0)
                                               {
                                               document.getElementById('clientfidelere').innerHTML='<table style="width:100%"><tr><td style="text-align:center;color:red;font-size:22px" colspan="2"><b>Aucun client trouv&eacute;</b></td></tr></table>';
                                               }
                                               else
                                               {
                                               
                                               item = dataset.item(0);
                                               var nom=item['nom'];var prenom=item['prenom'];var dateNaissance=item['dateNaissance'];var point=item['point'];
                                               document.getElementById('nomclientauto').value=item['code'];nomprenom=nom+' '+prenom;
                                               var nomprenom=nom+' '+prenom;
                                               sessionStorage.setItem('nomuserclientdoglina', nomprenom);
                                               if(isNaN(point)) point=0;else if(point=='' || point==null) point=0;
                                               var pointt=number_format(parseFloat(point), 2, '.', '');
                                               //document.getElementById('ptfidreste').value=pointt;//alert(document.getElementById('ptfidreste').value);
                                               document.getElementById('clientfidelere').innerHTML='<table style="width:100%" border="0"><tr><td style="width:300px;text-align:left;color:black">&nbsp;&nbsp;&nbsp;&nbsp;<b>Nom & Pr&eacute;nom :</b>&nbsp;'+nom+' '+prenom+'</td><td style="width:300px;text-align:left;color:black" colspan="3">&nbsp;&nbsp;&nbsp;&nbsp;<b>Date de Naissance :</b>&nbsp;'+dateNaissance+'</td></tr><tr><td colspan="4">&nbsp;</td></tr><tr><td style="text-align:right;color:green;font-size:22px;padding-top:16px;" valign="top"><b>Vous avez&nbsp;&nbsp;&nbsp;</b></td><td style="text-align:center;width:140px;"><input type="number" id="ptfidd" id="ptfidd" value="'+pointt+'" style="width:130px;text-align:center;font-size:30px;height:40px;color:red" readonly></td><td style="text-align:left;color:green;font-size:22px;padding-top:16px;" valign="top" colspan="2"><b>&nbsp;DHs<b></tr><tr><td style="text-align:right;color:red;font-size:22px;padding-top:16px;" valign="top"><b>Vous souhaitez recharger&nbsp;&nbsp;&nbsp;</b></td><td style="text-align:center;width:140px;"><input type="number" id="rechargecf" id="rechargecf" value="" style="width:130px;text-align:center;font-size:30px;height:40px;color:green" ></td><td style="text-align:left;color:red;font-size:22px;padding-top:16px;" valign="top" ><b>&nbsp;DHs&nbsp;</td><td style="width:80px;"><a class="super button15ssss pink" href="#ticketvente2s" onclick="validerrecharge()" style="font-size:24px;font-weight:bold;color:#fff;letter-spacing:2px;" >VALIDER</a><b></td></tr></table>';
                                               
                                               
                                               
                                               }
                                               
                                               
                                               
                                               });
                   });
    
    
    
}



function verifiercf(var1)
{
    document.getElementById('usecredit').value=0;
    db.transaction(function(tx) {tx.executeSql(selectFidelite, [document.getElementById('ncartef').value,1], function(tx, result) {
                                               
                                               dataset = result.rows;
                                               if(dataset.length==0)
                                               {
                                               document.getElementById('clientfidele').innerHTML='<table style="width:100%"><tr><td style="text-align:center;color:red;font-size:22px" colspan="2"><b>Aucun client trouv&eacute;</b></td></tr></table>';
                                               document.getElementById('mtfidelpoint').value=0;
                                               document.getElementById('nomclientauto').value=0;
                                               document.getElementById('mtfidelpoint').value=0;
                                               //sessionStorage.setItem('pointfidelitedoglina', document.getElementById('mtfidelpoint').value);
                                               sessionStorage.setItem('pointfidelitedoglina',0);
                                               var point=sessionStorage.getItem('pointfidelitedoglina');
                                               totalavecremise(0,0);
                                               }
                                               else
                                               {
                                               
                                               item = dataset.item(0);
                                               var nom=item['nom'];var prenom=item['prenom'];var dateNaissance=item['dateNaissance'];var point=item['point'];
                                               document.getElementById('nomclientauto').value=item['code'];nomprenom=nom+' '+prenom;
                                               var nomprenom=nom+' '+prenom;
                                               sessionStorage.setItem('nomuserclientdoglina', nomprenom);
                                               if(isNaN(point)) point=0;else if(point=='' || point==null) point=0;
                                               var pointt=number_format(parseFloat(point), 2, '.', '');
                                               //document.getElementById('ptfidreste').value=pointt;//alert(document.getElementById('ptfidreste').value);
                                               document.getElementById('clientfidele').innerHTML='<table style="width:100%"><tr><td style="width:300px;text-align:left;color:black">&nbsp;&nbsp;&nbsp;&nbsp;<b>Nom & Pr&eacute;nom :</b>&nbsp;'+nom+' '+prenom+'</td><td style="width:300px;text-align:left;color:black" colspan="2">&nbsp;&nbsp;&nbsp;&nbsp;<b>Date de Naissance :</b>&nbsp;'+dateNaissance+'</td></tr><tr><td colspan="3">&nbsp;</td></tr><tr><td style="text-align:right;color:green;font-size:22px;padding-top:16px;" valign="top"><b>Vous avez&nbsp;&nbsp;&nbsp;</b></td><td style="text-align:center;width:140px;"><input type="text" id="ptfid" id="ptfid" value="'+pointt+'" style="width:130px;text-align:center;font-size:35px;height:40px;color:red" readonly></td><td style="text-align:left;color:green;font-size:22px;padding-top:16px;" valign="top" ><b>&nbsp;DHs<b></tr></table>';
                                               document.getElementById('ptfids').value=pointt;
                                               document.getElementById('mtfidelpoint').value=pointt;
                                               //document.getElementById('mtfidelpoint').value=0;
                                               //sessionStorage.setItem('pointfidelitedoglina', document.getElementById('mtfidelpoint').value);
                                               sessionStorage.setItem('pointfidelitedoglina',0);
                                               affectclient(document.getElementById('nomclientauto').value,0);
                                               totalavecremise(0,0);
                                               }
                                               
                                               
                                               
                                               });
                   });
    document.getElementById('tva').innerHTML='CF : 0 DHs';
    
    
}



function sumremise()
{
    db.transaction(function(tx) {tx.executeSql(sumRemise, [sessionStorage.getItem('userdoglina'),sessionStorage.getItem('magasinuserdoglina'),0], function(tx, result) {
                                               
                                               dataset = result.rows;
                                               item = dataset.item(0);
                                               var some=item['some'];if(some=='') some=0;
                                               var poure=item['poure'];if(poure=='') poure=0;
                                               
                                               document.getElementById('somedog').value=some;document.getElementById('pouredog').value=poure;
                                               
                                               
                                               });
                   });
	
	
}

function pointclient(point,commande){
	var pointt=parseFloat(point/10);
    
    
    db.transaction(function(tx) {tx.executeSql(sumRemiseFide, [sessionStorage.getItem('userdoglina'),sessionStorage.getItem('magasinuserdoglina'),document.getElementById("nomclientauto").value,2,commande], function(tx, result) {
                                               
                                               dataset = result.rows;
                                               item = dataset.item(0);
                                               var sume=item['sume'];if(sume=='' || sume==null) sume=0;
                                               
                                               db.transaction(function(tx) {
                                                              var pointfinale=parseFloat(parseFloat(pointt)+parseFloat(sessionStorage.getItem('clientpointdoglina'))-parseFloat(sume));
                                                              var pointfinales=parseFloat(parseFloat(pointfinale)-parseFloat(sume));
                                                              sessionStorage.setItem('clientpointdoglina', pointfinales);
                                                              //alert('poin'+document.getElementById('mtfidelpoint').value);alert('creditrst'+document.getElementById('creditfidel').value);
                                                              //var newcredit=parseFloat(parseFloat(document.getElementById('mtfidelpoint').value)+parseFloat(document.getElementById('creditfidel').value));
                                                              //alert('<>'+document.getElementById('ptfidreste').value);
                                                              if(document.getElementById('usecredit').value==1) var newcredit=parseFloat(document.getElementById('creditfidel').value+parseFloat(document.getElementById('ptfidreste').value));
                                                              else var newcredit=parseFloat(parseFloat(document.getElementById('mtfidelpoint').value)+parseFloat(document.getElementById('creditfidel').value)+parseFloat(document.getElementById('ptfidreste').value));
                                                              //alert(document.getElementById('usecredit').value+'kkk'+newcredit);
                                                              tx.executeSql(updateCredit, [newcredit,sessionStorage.getItem('clientcodedoglina')], loadAndReset, onError);
                                                              document.getElementById('creditfidel').value=0;
                                                              document.getElementById('mtfidelpoint').value=0;
                                                              });
                                               
                                               });
                   });
    
    
    
    
    
    
}

function validercf()
{
    window.location.href='#mapas';
	document.getElementById('usecredit').value=1;
    db.transaction(function(tx) {tx.executeSql(selectFidelite, [document.getElementById('ncartef').value,1], function(tx, result) {
                                               dataset = result.rows;
                                               if(dataset.length!=0)
                                               {
                                               item = dataset.item(0);
                                               var nom=item['nom'];var prenom=item['prenom'];var dateNaissance=item['dateNaissance'];var points=item['point'];
                                               var nomprenom=nom+' '+prenom;
                                               sessionStorage.setItem('nomuserclientdoglina', nomprenom);
                                               document.getElementById('nomclientauto').value=item['id'];
                                               if(isNaN(points)) points=0;else if(points=='' || points==null) points=0;
                                               point=document.getElementById('ptfid').value;
                                               if(isNaN(point)) point=0;else if(point=='' || point==null) point=0;
                                               if(point>points) {document.getElementById('ptfid').value=points;point=points;}
                                               
                                               document.getElementById('ptfidreste').value=parseFloat(parseFloat(points)-parseFloat(point));
                                               if(isNaN(point)) point=0;else if(point=='' || point==null) point=0;
                                               var pointt=number_format(parseFloat(point), 2, '.', '');
                                               document.getElementById('tva').innerHTML='CF : '+number_format(pointt, 2, '.', '')+' DHs';
                                               document.getElementById('clientfidele').innerHTML='<table style="width:100%"><tr><td style="width:300px;text-align:left;color:black">&nbsp;&nbsp;&nbsp;&nbsp;<b>Nom & Pr&eacute;nom :</b>&nbsp;'+nom+' '+prenom+'</td><td style="width:300px;text-align:left;color:black" colspan="2">&nbsp;&nbsp;&nbsp;&nbsp;<b>Date de Naissance :</b>&nbsp;'+dateNaissance+'</td></tr><tr><td colspan="3">&nbsp;</td></tr><tr><td style="text-align:right;color:green;font-size:22px;padding-top:16px;" valign="top"><b>Vous avez&nbsp;&nbsp;&nbsp;</b></td><td style="text-align:center;width:140px;"><input type="text" id="ptfid" id="ptfid" value="'+pointt+'" style="width:130px;text-align:center;font-size:35px;height:40px;color:red" ></td><td style="text-align:left;color:green;font-size:22px;padding-top:16px;" valign="top" ><b>&nbsp;DHs<b></tr></table>';
                                               document.getElementById('ptfids').value=pointt;
                                               document.getElementById('mtfidelpoint').value=pointt;
                                               affectclient(document.getElementById('nomclientauto').value,0);
                                               sessionStorage.setItem('pointfidelitedoglina', document.getElementById('mtfidelpoint').value);
                                               var point=sessionStorage.getItem('pointfidelitedoglina');
                                               var montantreduction=parseFloat(point);
                                               var pourcentagereduction=0;
                                               Today = new Date;
                                               Jour = Today.getDate();if(Jour<10) Jour='0'+Jour;
                                               Mois = (Today.getMonth())+1;if(Mois<10) Mois='0'+Mois;
                                               Annee = Today.getFullYear();
                                               Heure = Today.getHours();if(Heure<10) Heure='0'+Heure;
                                               Minutes = Today.getMinutes();if(Minutes<10) Minutes='0'+Minutes;
                                               Secondes = Today.getSeconds();if(Secondes<10) Secondes='0'+Secondes;
                                               dateCreation = Annee + "-" + Mois + "-" + Jour+" "+Heure+":"+Minutes+":"+Secondes;
                                               if(point!=0) {
                                               
                                               db.transaction(function(tx) {
                                                              
                                                              db.transaction(function(tx) {tx.executeSql(maxRemise, [sessionStorage.getItem('userdoglina'),sessionStorage.getItem('magasinuserdoglina')], function(tx, result) {
                                                                                                         dataset = result.rows;
                                                                                                         item = dataset.item(0);
                                                                                                         
                                                                                                         if(!isNaN(item['maxis'])) nanes=item['maxis']; else nanes=0;
                                                                                                         if(nanes==null) nanes=0;
                                                                                                         var remis=parseInt(parseInt(nanes)+1);
                                                                                                         sessionStorage.setItem('pointfidelitedoglina', montantreduction);
                                                                                                         document.getElementById('mtfidelpoint').value=montantreduction;
                                                                                                         if(montantreduction!=0 || pourcentagereduction!=0) {
                                                                                                         db.transaction(function(tx) {
                                                                                                                        //alert(document.getElementById("nomclientedit").value+'GGG'+sessionStorage.getItem('userdoglina')+'GGG'+sessionStorage.getItem('magasinuserdoglina')+'GGG'+0+'GGG'+2);
                                                                                                                        tx.executeSql(deleteRemises, [document.getElementById("nomclientauto").value,sessionStorage.getItem('userdoglina'),sessionStorage.getItem('magasinuserdoglina'),0,2], loadAndReset, onError);
                                                                                                                        document.getElementById("clientpointdoglina").value=montantreduction;
                                                                                                                        sessionStorage.setItem('clientpointdoglina', document.getElementById("clientpointdoglina").value);
                                                                                                                        
                                                                                                                        });
                                                                                                         
                                                                                                         
                                                                                                         if(montantreduction==null || (isNaN(montantreduction))) montantreduction=0;
                                                                                                         if(pourcentagereduction==null) pourcentagereduction=0;
                                                                                                         db.transaction(function(tx) {tx.executeSql(insertRemise, [remis,0,montantreduction,pourcentagereduction,sessionStorage.getItem('userdoglina'),sessionStorage.getItem('clientdoglina'),sessionStorage.getItem('magasinuserdoglina'),dateCreation,0,2], loadAndReset, onError);	});
                                                                                                         totalavecremise(0,0);
                                                                                                         
                                                                                                         //affectclient(document.getElementById('nomclientauto').value,0);
                                                                                                         
                                                                                                         
                                                                                                         }
                                                                                                         //alert('ok');
                                                                                                         //alert(document.getElementById('mtfidelpoint').value);
                                                                                                         totalavecremise(0,0);
                                                                                                         $("#fidelite").click();
                                                                                                         
                                                                                                         });
                                                                             
                                                                             
                                                                             
                                                                             
                                                                             });
                                                              });
                                               
                                               }
                                               else
                                               {
                                               //alert("Veuillez recharger votre carte!");
                                               affectclient(document.getElementById('nomclientauto').value,0);//alert('okd');
                                               //	alert(document.getElementById('mtfidelpoint').value);
                                               totalavecremise(0,0);
                                               $("#fidelite").click();
                                               
                                               }
                                               }
                                               else
                                               {
                                               document.getElementById('clientfidele').innerHTML='<table style="width:100%"><tr><td style="text-align:center;color:red;font-size:22px" colspan="2"><b>Aucun client trouv&eacute;</b></td></tr></table>';
                                               document.getElementById('mtfidelpoint').value=0;
                                               document.getElementById('nomclientauto').value=0;//alert('okss');
                                               totalavecremise(0,0);
                                               }
                                               
                                               }  );
                   
                   });
}

function regler(etat,somme)
{
	
    if(etat==0) {
        if(document.getElementById('montantencaie').value=='') document.getElementById('montantencaie').value=0;
        var restt=parseFloat(parseFloat(somme)+parseFloat(document.getElementById('montantencaie').value));
        restt=number_format(parseFloat(restt), 2, '.', '');
        document.getElementById('encais').value=restt;
        document.getElementById('montantencaie').value=number_format(restt, 2, '.', '');
        document.getElementById('montantencais').value=parseFloat(document.getElementById('montantencaie').value);
        document.getElementById('etatregle').value=0;
    }
    else if(etat==1 || etat==2){
        if(document.getElementById('etatregle').value=='0') document.getElementById('montantencaie').value='';
        var montanhehe=document.getElementById('montantencaie').value;
        if(isNaN(montanhehe)) montanhehe=0;else if(montanhehe=='' || montanhehe==null) montanhehe=0;
        //alert(montanhehe);alert(parseFloat(somme));
        //document.getElementById('montantencaie').value=number_format(parseFloat(parseFloat(montanhehe)+parseFloat(somme)), 2, '.', '');
        document.getElementById('montantencaie').value=document.getElementById('montantencaie').value+''+somme;
        document.getElementById('etatregle').value=1;
    }
    else if(etat==3){
		document.getElementById('etatregle').value=1;document.getElementById('montantencaie').value='';
    }
	//alert(document.getElementById('encais').value);
    
}

function maremisey()
{
    
    var montantreduction=document.getElementById('montantreduction').value;
    var pourcentagereduction=document.getElementById('pourcentagereduction').options[document.getElementById('pourcentagereduction').selectedIndex].value;
    Today = new Date;
    Jour = Today.getDate();if(Jour<10) Jour='0'+Jour;
    Mois = (Today.getMonth())+1;if(Mois<10) Mois='0'+Mois;
    Annee = Today.getFullYear();
    Heure = Today.getHours();if(Heure<10) Heure='0'+Heure;
    Minutes = Today.getMinutes();if(Minutes<10) Minutes='0'+Minutes;
    Secondes = Today.getSeconds();if(Secondes<10) Secondes='0'+Secondes;
    dateCreation = Annee + "-" + Mois + "-" + Jour+" "+Heure+":"+Minutes+":"+Secondes;
    
    db.transaction(function(tx) {
                   db.transaction(function(tx) {tx.executeSql(maxRemise, [sessionStorage.getItem('userdoglina'),sessionStorage.getItem('magasinuserdoglina')], function(tx, result) {
                                                              dataset = result.rows;
                                                              item = dataset.item(0);
                                                              
                                                              if(!isNaN(item['maxis'])) nanes=item['maxis']; else nanes=0;
                                                              if(nanes==null) nanes=0;
                                                              var remis=parseInt(parseInt(nanes)+1);
                                                              if(montantreduction!=0 || pourcentagereduction!=0) {
                                                              if(montantreduction==null) montantreduction=0;if(pourcentagereduction==null) pourcentagereduction=0;
                                                              db.transaction(function(tx) {tx.executeSql(insertRemise, [remis,0,montantreduction,pourcentagereduction,sessionStorage.getItem('userdoglina'),sessionStorage.getItem('clientdoglina'),sessionStorage.getItem('magasinuserdoglina'),dateCreation,0,1], loadAndReset, onError);	});
                                                              totalavecremise(0,0);
                                                              }
                                                              
                                                              $("#povermaremise").click();
                                                              
                                                              });
                                  
                                  
                                  
                                  
                                  });
                   });
	
	
}


function macaissey()
{
    //alert('ok');
    var fondecaisse=document.getElementById('fondecaisse').value;
    
    db.transaction(function(tx) {
                   db.transaction(function(tx) {tx.executeSql(maxCaisse, [sessionStorage.getItem('userdoglina'),sessionStorage.getItem('magasinuserdoglina')], function(tx, result) {
                                                              dataset = result.rows;
                                                              item = dataset.item(0);
                                                              
                                                              if(!isNaN(item['maxis'])) nanes=item['maxis']; else nanes=0;
                                                              if(nanes==null) nanes=0;
                                                              var remis=parseInt(parseInt(nanes)+1);
                                                              
                                                              
                                                              Today = new Date;
                                                              Jour = Today.getDate();if(Jour<10) Jour='0'+Jour;
                                                              Mois = (Today.getMonth())+1;if(Mois<10) Mois='0'+Mois;
                                                              Annee = Today.getFullYear();
                                                              Heure = Today.getHours();if(Heure<10) Heure='0'+Heure;
                                                              Minutes = Today.getMinutes();if(Minutes<10) Minutes='0'+Minutes;
                                                              Secondes = Today.getSeconds();if(Secondes<10) Secondes='0'+Secondes;
                                                              dateCreation = Annee + "-" + Mois + "-" + Jour+" "+Heure+":"+Minutes+":"+Secondes;
                                                              
                                                              db.transaction(function(tx) {tx.executeSql(deleteCaisse, [sessionStorage.getItem('userdoglina'),sessionStorage.getItem('magasinuserdoglina'),0], loadAndReset, onError);	});
                                                              
                                                              db.transaction(function(tx) {tx.executeSql(insertCaisse, [remis,sessionStorage.getItem('userdoglina'),sessionStorage.getItem('magasinuserdoglina'),0,fondecaisse,0,dateCreation], loadAndReset, onError);	});
                                                              
                                                              document.getElementById('fondecaisse').value=fondecaisse;
                                                              
                                                              
                                                              window.location.href = document.getElementById('closeax').href;
                                                              
                                                              });
                                  
                                  
                                  
                                  
                                  });
                   });
	
	
}





function ticketcaisse(commande,vendeur,magasin)
{
	var ticketcaisse='';
	if(commande==0) commande=sessionStorage.getItem('idcommandeuserdoglina');
	
	var nomclient=sessionStorage.getItem('nomuserdoglina');
	var magasins=sessionStorage.getItem('nommagasinuserdoglina');var vendeurs=sessionStorage.getItem('nomuserdoglina');
    Today = new Date;var totalbis =0;
    Jour = Today.getDate();if(Jour<10) Jour='0'+Jour;
    Mois = (Today.getMonth())+1;if(Mois<10) Mois='0'+Mois;
    Annee = Today.getFullYear();
    Heure = Today.getHours();if(Heure<10) Heure='0'+Heure;
    Minutes = Today.getMinutes();if(Minutes<10) Minutes='0'+Minutes;
    Secondes = Today.getSeconds();if(Secondes<10) Secondes='0'+Secondes;
    dateCreation = "Le "+Jour + "-" + Mois + "-" + Annee+" &#224; "+Heure+":"+Minutes+":"+Secondes;
    
    var mdlivrer=document.getElementById('mdlivrer').options[document.getElementById('mdlivrer').selectedIndex].value;
    if(mdlivrer==1) mdlivrerr='A emporter';else mdlivrerr='Sur place';
	
    var tvav=document.getElementById('tva').innerHTML;
	
	db.transaction(function(tx) {
                   
                   ticketcaisse += '<div style="width:auto;height:auto"><table style="width:257px;border:0px solid #000;" border="0"><tr><td colspan="4">********************************************************************************</td></tr><tr><td style="font-family:calibri;font-size:20px;color:black;font-weight:bold;text-align:center;" colspan="4">The HOT DOG Company<br />4 rue Mahmoud Al Akad Bourgogne, <br />Casablanca- Maroc<br />T&#233l : 05 22 32 32 32</td></tr><tr><td colspan="4">********************************************************************************</td></tr><tr><td style="font-family:calibri;font-size:12px;color:black;font-weight:light;text-align:center;" colspan="4">HOT DOG vous souhaite<br />un bon app&#233tit</td></tr><tr><td colspan="4">********************************************************************************</td></tr><tr><td style="font-family:calibri;font-size:12px;color:black;font-weight:light;text-align:center;" colspan="4">'+magasins+'</td></tr><tr><td style="font-family:calibri;font-size:12px;color:black;font-weight:light;text-align:center;" colspan="4">'+dateCreation+'</td></tr><tr><td colspan="4">********************************************************************************</td></tr><tr><td style="font-family:calibri;font-size:12px;color:black;font-weight:bold;text-align:center;" colspan="4">Bonjour&nbsp;&nbsp;Welcome&nbsp;&nbsp;&nbsp;<font size="3">&#1605;&#1614;&#1585;&#1618;&#1581;&#1614;&#1576;&#1611;&#1575;</font></td></tr><tr><td colspan="4">&nbsp;</td></tr><tr><td style="font-family:calibri;font-size:12px;color:black;font-weight:bold;text-align:center;width:30px;">QTE</td><td style="font-family:calibri;font-size:12px;color:black;font-weight:bold;text-align:left;padding-right:0px;width:90px;">ARTICLE</td><td style="font-family:calibri;font-size:12px;color:black;font-weight:bold;text-align:left;padding-right:0px;width:40px;">TVA</td><td style="font-family:calibri;font-size:12px;color:black;font-weight:bold;text-align:left;padding-right:0px;width:70px;">TOTAL</td></tr>';
                   
                   
                   tx.executeSql(selectPanierss, [vendeur,magasin,1,commande], function(tx, result) {
                                 dataset = result.rows;var popis = '';var totalbis =0;var commandebis = "";var matvax=0;
                                 for (i = 0, item = null; i < dataset.length; i++) {
                                 item = dataset.item(i);
                                 var price=item['prix'];libelle=item['libelle'];produit=item['produit'];qte=item['qte'];remise=item['remise'];	remise=0;
                                 var prixto=parseFloat(qte*price*parseFloat(100-remise)/100);
                                 var tvas=item['tva'];if(!isNaN(tvas)) tvas=item['tva']; else tvas=0;if(tvas==null) tvas=0;
                                 var tvass=item['tvabis'];if(!isNaN(tvass)) tvass=item['tvabis']; else tvass=0;if(tvass==null) tvass=0;
                                 if(mdlivrer==1) tvas=tvass;
                                 tva=parseFloat(tvas);
                                 
                                 totalbis += parseFloat(prixto);
                                 ticketcaisse += '<tr><td style="font-family:calibri;font-size:12px;color:black;font-weight:light;text-align:center;">'+qte+'</td><td style="font-family:calibri;font-size:12px;color:black;font-weight:light;text-align:left;padding-right:0px;">'+libelle+'</td><td style="font-family:calibri;font-size:12px;color:black;font-weight:light;text-align:left;padding-right:0px;">'+tva+' %</td><td style="font-family:calibri;font-size:12px;color:black;font-weight:light;text-align:left;padding-right:0px;">'+number_format(prixto, 2, ',', '')+'</td></tr>';
                                 matvax +=parseFloat(totalbis/6);
                                 }
                                 var matvar=parseFloat(document.getElementById('montva').value);
                                 var totalremise=parseFloat(document.getElementById('totalremise').value);
                                 //alert(totalbis+'GGG'+document.getElementById('montotal').value);
                                 var totalremise=parseFloat(parseFloat(totalbis)-parseFloat(document.getElementById('montotal').value));
                                 var totalbiss=parseFloat(document.getElementById('montotal').value);
                                 var matva=parseFloat(matvax);
                                 var modepayer=document.getElementById('modepayer').value;
                                 if(modepayer=='cb') modepayer='Carte Bancaire';else if(modepayer=='esp') modepayer='Esp&egrave;ces';else modepayer='Divers';
                                 ticketcaisse += '<tr><td colspan="4">&nbsp;</td></tr><tr><td style="font-family:calibri;font-size:14px;color:black;font-weight:light;text-align:right;padding-right:25px;" colspan="3"><b>Remise TTC</b></td><td style="font-family:calibri;font-size:16px;color:black;font-weight:light;text-align:left;padding-right:0px;"><b>'+number_format(totalremise, 2, ',', '')+' DH</b></font></td></tr><tr><td colspan="4">&nbsp;</td></tr><tr><td style="font-family:calibri;font-size:16px;color:black;font-weight:light;text-align:right;padding-right:25px;" colspan="3"><b>TOTAL TTC</b></td><td style="font-family:calibri;font-size:16px;color:black;font-weight:light;text-align:left;padding-right:0px;"><b>'+number_format(totalbiss, 2, ',', '')+' DH</b></font></td></tr><tr><td colspan="4">&nbsp;</td></tr><tr><td style="font-family:calibri;font-size:12px;color:black;font-weight:light;text-align:right;padding-right:20px;" colspan="4"><b>VD</b> : '+vendeurs+'</td></tr><tr><td style="font-family:calibri;font-size:12px;color:black;font-weight:light;text-align:right;padding-right:20px;" colspan="4" ><b>Client</b> : '+clienttk+'</td></tr><tr><td colspan="4">&nbsp;</td></tr><tr><td style="font-family:calibri;font-size:12px;color:black;font-weight:light;text-align:right;padding-right:20px;" colspan="4"><b>TYPE</b> : '+mdlivrerr+'</td></tr><tr><td style="font-family:calibri;font-size:12px;color:black;font-weight:light;text-align:right;padding-right:20px;" colspan="4"><b>MP</b> : '+modepayer+'</td></tr><tr><td colspan="4">&nbsp;</td></tr><tr><td colspan="4" style="font-family:calibri;font-size:12px;color:black;font-weight:light;text-align:center;">THE HOT DOG COMPANY vous remercie de votre visite.<br />Patente : 2344371<br />IF : 33449</td></tr><tr><td colspan="4">&nbsp;</td></tr><tr><td valign="top" style="padding-top:4px;" align="center" colspan="4"><a class="super button19 pink" href="javascript:ticketcaisse()"  style="color:#fff;font-size:22px;font-weight:bold">IMPRIMER CE TICKET</a></td></tr></table></div>';
                                 
                                 document.getElementById('tototo').value=parseFloat(parseFloat(totalremise)+parseFloat(totalbiss));
                                 document.getElementById('ncartef').value=1;
                                 //verifiercf(0);
                                 
                                 db.transaction(function(tx) {
                                                
                                                tx.executeSql(updateCommande, [document.getElementById('tototo').value,commande,vendeur,magasin], loadAndReset, onError);});
                                 
                                 
                                 
                                 
                                 document.getElementById("ticketcaisse").innerHTML=ticketcaisse;
                                 //if(commande!=0) imprimer_ticket(commande,'Ticket de caisse', 'ticketcaisse');
                                 document.getElementById("ticketvente").innerHTML=ticketcaisse;
                                 
                                 
                                 
                                 })});
	
	
	
	
}


function ticketcaisses(commande,vendeur,magasin,recharge)
{
	var ticketcaisse='';
	if(commande==0) commande=sessionStorage.getItem('idcommandeuserdoglina');
	var clienttk=sessionStorage.getItem('nomuserclientdoglina');
	if(clienttk==null) clienttk='Particulier';
	var magasins=sessionStorage.getItem('nommagasinuserdoglina');var vendeurs=sessionStorage.getItem('nomuserdoglina');
    Today = new Date;var totalbis =0;
    Jour = Today.getDate();if(Jour<10) Jour='0'+Jour;
    Mois = (Today.getMonth())+1;if(Mois<10) Mois='0'+Mois;
    Annee = Today.getFullYear();
    Heure = Today.getHours();if(Heure<10) Heure='0'+Heure;
    Minutes = Today.getMinutes();if(Minutes<10) Minutes='0'+Minutes;
    Secondes = Today.getSeconds();if(Secondes<10) Secondes='0'+Secondes;
    dateCreation = "Le "+Jour + "-" + Mois + "-" + Annee+" &#224; "+Heure+":"+Minutes+":"+Secondes;
    
    var mdlivrer=document.getElementById('mdlivrer').options[document.getElementById('mdlivrer').selectedIndex].value;
    if(mdlivrer==1) mdlivrerr='A emporter';else mdlivrerr='Sur place';
    
    var tvav=document.getElementById('tva').innerHTML;
	
	db.transaction(function(tx) {
                   
                   ticketcaisse += '<div style="width:auto;height:auto"><table style="width:257px;border:0px solid #000;" border="0"><tr><td colspan="4">********************************************************************************</td></tr><tr><td style="font-family:calibri;font-size:20px;color:black;font-weight:bold;text-align:center;" colspan="4">The HOT DOG Company<br />4 rue Mahmoud Al Akad Bourgogne, <br />Casablanca- Maroc<br />T&#233l : 05 22 32 32 32</td></tr><tr><td colspan="4">********************************************************************************</td></tr><tr><td style="font-family:calibri;font-size:12px;color:black;font-weight:light;text-align:center;" colspan="4">HOT DOG vous souhaite<br />un bon app&#233tit</td></tr><tr><td colspan="4">********************************************************************************</td></tr><tr><td style="font-family:calibri;font-size:12px;color:black;font-weight:light;text-align:center;" colspan="4">'+magasins+'</td></tr><tr><td style="font-family:calibri;font-size:12px;color:black;font-weight:light;text-align:center;" colspan="4">'+dateCreation+'</td></tr><tr><td colspan="4">********************************************************************************</td></tr><tr><td style="font-family:calibri;font-size:12px;color:black;font-weight:bold;text-align:center;" colspan="4">Bonjour&nbsp;&nbsp;Welcome&nbsp;&nbsp;&nbsp;<font size="3">&#1605;&#1614;&#1585;&#1618;&#1581;&#1614;&#1576;&#1611;&#1575;</font></td></tr><tr><td colspan="4">&nbsp;</td></tr><tr><td style="font-family:calibri;font-size:12px;color:black;font-weight:bold;text-align:center;width:30px;">QTE</td><td style="font-family:calibri;font-size:12px;color:black;font-weight:bold;text-align:left;padding-right:0px;width:90px;">ARTICLE</td><td style="font-family:calibri;font-size:12px;color:black;font-weight:bold;text-align:left;padding-right:0px;width:40px;">TVA</td><td style="font-family:calibri;font-size:12px;color:black;font-weight:bold;text-align:left;padding-right:0px;width:70px;">TOTAL</td></tr>';
                   
                   
                   tx.executeSql(selectPaniersss, [vendeur,magasin,1,commande,0], function(tx, result) {
                                 dataset = result.rows;var popis = '';var totalbis =0;var commandebis = "";var matvax=0;//alert('taille:'+dataset.length);
                                 for (i = 0, item = null; i < dataset.length; i++) {
                                 item = dataset.item(i);
                                 var price=item['prix'];libelle=item['libelle'];produit=item['produit'];qte=item['qte'];remise=item['remise'];	remise=0;
                                 var prixto=parseFloat(qte*price*parseFloat(100-remise)/100);
                                 var tvas=item['tva'];if(!isNaN(tvas)) tvas=item['tva']; else tvas=0;if(tvas==null) tvas=0;
                                 var tvass=item['tvabis'];if(!isNaN(tvass)) tvass=item['tvabis']; else tvass=0;if(tvass==null) tvass=0;
                                 if(mdlivrer==1) tvas=tvass;
                                 tva=parseFloat(tvas);
                                 
                                 totalbis += parseFloat(prixto);
                                 ticketcaisse += '<tr><td style="font-family:calibri;font-size:12px;color:black;font-weight:light;text-align:center;">'+qte+'</td><td style="font-family:calibri;font-size:12px;color:black;font-weight:light;text-align:left;padding-right:0px;">'+libelle+'</td><td style="font-family:calibri;font-size:12px;color:black;font-weight:light;text-align:left;padding-right:0px;">'+tva+' %</td><td style="font-family:calibri;font-size:12px;color:black;font-weight:light;text-align:left;padding-right:0px;">'+number_format(prixto, 2, ',', '')+'</td></tr>';
                                 matvax +=parseFloat(totalbis/6);
                                 }
                                 //alert(totalbis);
                                 var matvar=parseFloat(document.getElementById('montva').value);
                                 var totalremise=parseFloat(document.getElementById('totalremise').value);
                                 //alert(totalbis+'GGG'+document.getElementById('montotal').value);
                                 if(recharge==1) document.getElementById('montotal').value=document.getElementById('montotalre').value;
                                 
                                 var totalremise=parseFloat(parseFloat(totalbis)-parseFloat(document.getElementById('montotal').value));
                                 var totalbiss=parseFloat(document.getElementById('montotal').value);
                                 var matva=parseFloat(matvax);
                                 var modepayer=document.getElementById('modepayer').value;
                                 if(modepayer=='cb') modepayer='Carte Bancaire';else if(modepayer=='esp') modepayer='Esp&egrave;ces';else modepayer='Divers';
                                 if(recharge==1) modepayer='Divers';
                                 ticketcaisse += '<tr><td colspan="4">&nbsp;</td></tr><tr><td style="font-family:calibri;font-size:14px;color:black;font-weight:light;text-align:right;padding-right:25px;" colspan="3"><b>Remise TTC</b></td><td style="font-family:calibri;font-size:16px;color:black;font-weight:light;text-align:left;padding-right:0px;"><b>'+number_format(totalremise, 2, ',', '')+' DH</b></font></td></tr><tr><td colspan="4">&nbsp;</td></tr><tr><td style="font-family:calibri;font-size:16px;color:black;font-weight:light;text-align:right;padding-right:25px;" colspan="3"><b>TOTAL TTC</b></td><td style="font-family:calibri;font-size:16px;color:black;font-weight:light;text-align:left;padding-right:0px;"><b>'+number_format(totalbiss, 2, ',', '')+' DH</b></font></td></tr><tr><td colspan="4">&nbsp;</td></tr><tr><td style="font-family:calibri;font-size:12px;color:black;font-weight:light;text-align:right;padding-right:20px;" colspan="4"><b>VD</b> : '+vendeurs+'</td></tr><tr><td style="font-family:calibri;font-size:12px;color:black;font-weight:light;text-align:right;padding-right:20px;" colspan="4" ><b>Client</b> : '+clienttk+'</td></tr><tr><td colspan="4">&nbsp;</td></tr>';
                                 if(recharge==0) ticketcaisse += '<tr><td style="font-family:calibri;font-size:12px;color:black;font-weight:light;text-align:right;padding-right:20px;" colspan="4"><b>TYPE</b> : '+mdlivrerr+'</td></tr>';
                                 ticketcaisse += '<tr><td style="font-family:calibri;font-size:12px;color:black;font-weight:light;text-align:right;padding-right:20px;" colspan="4"><b>MP</b> : '+modepayer+'</td></tr><tr><td colspan="4">&nbsp;</td></tr><tr><td colspan="4" style="font-family:calibri;font-size:12px;color:black;font-weight:light;text-align:center;">THE HOT DOG COMPANY vous remercie de votre visite.<br />Patente : 2344371<br />IF : 33449</td></tr><tr><td colspan="4">&nbsp;</td></tr><tr><td valign="top" style="padding-top:4px;" align="center" colspan="4"><a class="super button19 pink" href="javascript:ticketcaisse()"  style="color:#fff;font-size:22px;font-weight:bold">IMPRIMER CE TICKET</a></td></tr></table></div>';
                                 
                                 document.getElementById('tototo').value=parseFloat(parseFloat(totalremise)+parseFloat(totalbiss));
                                 document.getElementById('ncartef').value=1;
                                 //verifiercf(0);
                                 
                                 db.transaction(function(tx) {
                                                
                                                tx.executeSql(updateCommande, [document.getElementById('tototo').value,commande,vendeur,magasin], loadAndReset, onError);});
                                 
                                 
                                 //document.getElementById('listeproduit').style.visibility='hidden';
                                 document.getElementById('produits').innerHTML='';
                                 
                                 document.getElementById("ticketcaisse").innerHTML=ticketcaisse;
                                // imprimer_ticket(commande,'Ticket de caisse', 'ticketcaisse');
                                
                                 document.getElementById("ticketvente").innerHTML=ticketcaisse;
                                 document.getElementById("listeproduit").style.visibility='visible';
                                 document.getElementById("listeproduit").style.height='380px';
                                 document.getElementById("mee").innerHTML='ME : 0.00 DHs';
                                 produitpanier();
                                 
                                 
                                 
                                 
                                 })});
	
	
}


function ticketcaisser(commande,vendeur,magasin,client,livraison,encaissement,total)
{
	var ticketcaisse='';
	
    Today = new Date;var totalbis =0;
    Jour = Today.getDate();if(Jour<10) Jour='0'+Jour;
    Mois = (Today.getMonth())+1;if(Mois<10) Mois='0'+Mois;
    Annee = Today.getFullYear();
    Heure = Today.getHours();if(Heure<10) Heure='0'+Heure;
    Minutes = Today.getMinutes();if(Minutes<10) Minutes='0'+Minutes;
    Secondes = Today.getSeconds();if(Secondes<10) Secondes='0'+Secondes;
    dateCreation = "Le "+Jour + "-" + Mois + "-" + Annee+" &#224; "+Heure+":"+Minutes+":"+Secondes;
    
    
	db.transaction(function(tx) {
                   
                   ticketcaisse += '<div style="width:auto;height:auto"><table style="width:257px;border:0px solid #000;" border="0"><tr><td colspan="4">********************************************************************************</td></tr><tr><td style="font-family:calibri;font-size:20px;color:black;font-weight:bold;text-align:center;" colspan="4">The HOT DOG Company<br />4 rue Mahmoud Al Akad Bourgogne, <br />Casablanca- Maroc<br />T&#233l : 05 22 32 32 32</td></tr><tr><td colspan="4">********************************************************************************</td></tr><tr><td style="font-family:calibri;font-size:12px;color:black;font-weight:light;text-align:center;" colspan="4">HOT DOG vous souhaite<br />un bon app&#233tit</td></tr><tr><td colspan="4">********************************************************************************</td></tr><tr><td style="font-family:calibri;font-size:12px;color:black;font-weight:light;text-align:center;" colspan="4" id="monmagasintk"></td></tr><tr><td style="font-family:calibri;font-size:12px;color:black;font-weight:light;text-align:center;" colspan="4">'+dateCreation+'</td></tr><tr><td colspan="4">********************************************************************************</td></tr><tr><td style="font-family:calibri;font-size:12px;color:black;font-weight:bold;text-align:center;" colspan="4">Bonjour&nbsp;&nbsp;Welcome&nbsp;&nbsp;&nbsp;<font size="3">&#1605;&#1614;&#1585;&#1618;&#1581;&#1614;&#1576;&#1611;&#1575;</font></td></tr><tr><td colspan="4">&nbsp;</td></tr><tr><td style="font-family:calibri;font-size:12px;color:black;font-weight:bold;text-align:center;width:30px;">QTE</td><td style="font-family:calibri;font-size:12px;color:black;font-weight:bold;text-align:left;padding-right:0px;width:90px;">ARTICLE</td><td style="font-family:calibri;font-size:12px;color:black;font-weight:bold;text-align:left;padding-right:0px;width:40px;">TVA</td><td style="font-family:calibri;font-size:12px;color:black;font-weight:bold;text-align:left;padding-right:0px;width:70px;">TOTAL</td></tr>';
                   
                   
                   tx.executeSql(selectPaniersss, [vendeur,magasin,1,commande,0], function(tx, result) {
                                 dataset = result.rows;var popis = '';var totalbis =0;var commandebis = "";var matvax=0;
                                 for (i = 0, item = null; i < dataset.length; i++) {
                                 item = dataset.item(i);
                                 var price=item['prix'];libelle=item['libelle'];produit=item['produit'];qte=item['qte'];remise=item['remise'];	remise=0;
                                 var prixto=parseFloat(qte*price*parseFloat(100-remise)/100);
                                 var tvas=item['tva'];if(!isNaN(tvas)) tvas=item['tva']; else tvas=0;if(tvas==null) tvas=0;
                                 var tvass=item['tvabis'];if(!isNaN(tvass)) tvass=item['tvabis']; else tvass=0;if(tvass==null) tvass=0;
                                 if(livraison==1) tvas=tvass;
                                 tva=parseFloat(tvas);
                                 
                                 totalbis += parseFloat(prixto);
                                 ticketcaisse += '<tr><td style="font-family:calibri;font-size:12px;color:black;font-weight:light;text-align:center;">'+qte+'</td><td style="font-family:calibri;font-size:12px;color:black;font-weight:light;text-align:left;padding-right:0px;">'+libelle+'</td><td style="font-family:calibri;font-size:12px;color:black;font-weight:light;text-align:left;padding-right:0px;">'+tva+' %</td><td style="font-family:calibri;font-size:12px;color:black;font-weight:light;text-align:left;padding-right:0px;">'+number_format(prixto, 2, ',', '')+'</td></tr>';
                                 matvax +=parseFloat(totalbis/6);
                                 }
                                 document.getElementById('totalooo').value=totalbis;
                                 //var totalremise=30;var totalbiss=100;
                                 ticketcaisse += '<tr><td colspan="4">&nbsp;</td></tr><tr><td style="font-family:calibri;font-size:14px;color:black;font-weight:light;text-align:right;padding-right:25px;" colspan="3"><b>Remise TTC</b></td><td style="font-family:calibri;font-size:16px;color:black;font-weight:light;text-align:left;padding-right:0px;" id="remisetk">&nbsp;</td></tr><tr><td colspan="4">&nbsp;</td></tr><tr><td style="font-family:calibri;font-size:16px;color:black;font-weight:light;text-align:right;padding-right:25px;" colspan="3"><b>TOTAL TTC</b></td><td style="font-family:calibri;font-size:16px;color:black;font-weight:light;text-align:left;padding-right:0px;" id="totaltk">&nbsp;</td></tr><tr><td colspan="4">&nbsp;</td></tr><tr><td style="font-family:calibri;font-size:12px;color:black;font-weight:light;text-align:right;padding-right:20px;" colspan="4" id="vendeurtk"></td></tr><tr><td style="font-family:calibri;font-size:12px;color:black;font-weight:light;text-align:right;padding-right:20px;" colspan="4" id="clienttk"></td></tr><tr><td colspan="4">&nbsp;</td></tr><tr><td style="font-family:calibri;font-size:12px;color:black;font-weight:light;text-align:right;padding-right:20px;" colspan="4" id="livraisontk"></td></tr><tr><td style="font-family:calibri;font-size:12px;color:black;font-weight:light;text-align:right;padding-right:20px;" colspan="4" id="paiementtk"></td></tr><tr><td colspan="4">&nbsp;</td></tr><tr><td colspan="4" style="font-family:calibri;font-size:12px;color:black;font-weight:light;text-align:center;">THE HOT DOG COMPANY vous remercie de votre visite.<br />Patente : 2344371<br />IF : 33449</td></tr><tr><td colspan="4">&nbsp;</td></tr><tr><td valign="top" style="padding-top:4px;" align="center" colspan="4"><a class="super button19 pink" href="javascript:ticketcaisse()"  style="color:#fff;font-size:22px;font-weight:bold">IMPRIMER CE TICKET</a></td></tr></table></div>';
                                 
                                 
                                 
                                 document.getElementById("ticketvente").innerHTML=ticketcaisse;
                                 
                                 monclientt(client);
                                 vendeurtt(vendeur);
                                 monmagasintt(magasin);
                                 livraisontt(livraison);
                                 paiementtte(encaissement,magasin,vendeur);
                                 maremisett(commande,vendeur,magasin,total);
                                 
                                 
                                 })});
	
	
}

function indispensables()
{
    
    mdpp();
    if(sessionStorage.getItem('typedoglina')==0) document.getElementById("dateeencais").readOnly=true;else document.getElementById("dateeencais").readOnly=false;
    //alert(sessionStorage.getItem('typedoglina'));
    if(sessionStorage.getItem('typedoglina')==1)
    {
        document.getElementById("parametress").innerHTML='<li><a href="#" id="menu-btn" onclick="hotdog(1);produitpanier();">Votre caisse</a></li><li><a href="#" id="menu-btn" onclick="hotdog(2);mesventes();">Liste des ventes</a></li><li><a href="#" id="menu-btn" onclick="hotdog(3);mesproduits();">Liste des produits</a></li><li><a href="#" id="menu-btn" onclick="hotdog(4);mesproduits();">Commandes en ligne</a></li><li><a href="#" id="menu-btn" onclick="hotdog(5);">G&eacute;olocalisation</a></li><li><a href="#" id="menu-btn" onclick="hotdog(6);malisteclient();">Liste des clients</a></li><li><a href="#" id="menu-btn" onclick="hotdog(7);rechargercf(0);">Recharger une CF</a></li><li><a href="#" id="menu-btn" onclick="hotdog(8);listfournisseur();">Saisi des entr&eacute;es</a></li><li><a href="#" id="menu-btn" onclick="etatbon(0);hotdog(9);mesmagasinss(0);">Saisi des B.S.</a></li><li><a href="#" id="menu-btn" onclick="etatbon(1);hotdog(9);mesmagasinss(1);">Saisi des B.R.</a></li><li><a href="#" id="menu-btn" onclick="hotdog(11);stockprincipal(0);">Stock Principal</a></li><li><a href="#" id="menu-btn" onclick="hotdog(10);monmagap();stockmagasin();">Stock Magasin</a></li><li><a id="menu-btn" href="javascript:deconnexionverifuser()" onclick="deconnexionverifuser();" >Se d&eacute;connecter</a></li>';
    }
    else
    {
        document.getElementById("parametress").innerHTML='<li><a href="#" id="menu-btn" onclick="hotdog(1);produitpanier();">Votre caisse</a></li><li><a href="#" id="menu-btn" onclick="hotdog(2);mesventes();">Liste des ventes</a></li><li><a href="#" id="menu-btn" onclick="hotdog(3);mesproduits();">Liste des produits</a></li><li><a href="#" id="menu-btn" onclick="hotdog(4);mesproduits();">Commandes en ligne</a></li><li><a href="#" id="menu-btn" onclick="hotdog(5);">G&eacute;olocalisation</a></li><li><a href="#" id="menu-btn" onclick="hotdog(6);malisteclient();">Liste des clients</a></li><li><a href="#" id="menu-btn" onclick="hotdog(7);rechargercf(0);">Recharger une CF</a></li><li><a href="#" id="menu-btn" onclick="hotdog(10);monmagap();stockmagasin();">Stock Magasin</a></li><li><a id="menu-btn" href="javascript:deconnexionverifuser()" onclick="deconnexionverifuser();" >Se d&eacute;connecter</a></li>';
        
    }
    client=1;
    document.getElementById("caissiere").innerHTML='Caissier : '+sessionStorage.getItem('nomuserdoglina');
    //document.getElementById("mee").innerHTML='MEE : '+document.getElementById('encais').value;
    document.getElementById("nomclientedit").value=client;
    document.getElementById("clienteencais").value=client;
    
    Today = new Date;
    Jour = Today.getDate();if(Jour<10) Jour='0'+Jour;
    Mois = (Today.getMonth())+1;if(Mois<10) Mois='0'+Mois;
    Annee = Today.getFullYear();
    dateCreation = Annee + "-" + Mois + "-" + Jour;
    document.getElementById("dateeencais").value=dateCreation;
    
    
    db.transaction(function(tx) {
                   tx.executeSql(InfoClient, [document.getElementById("nomclientedit").value], function(tx, result) {
                                 dataset = result.rows;
                                 
                                 item = dataset.item(0);
                                 var id=item['id'];nom=item['nom'];prenom=item['prenom'];email=item['email'];phone=item['phone'];
                                 sexe=item['sexe'];code=item['code'];magasin=item['magasin'];
                                 
                                 sessionStorage.setItem('clientdoglina', client);
                                 sessionStorage.setItem('clientcodedoglina', code);
                                 sessionStorage.setItem('clientpointdoglina', document.getElementById("clientpointdoglina").value);
                                 
                                 document.getElementById("clientcommande").innerHTML='Client: '+nom;
                                 
                                 
                                 });
                   
                   });
    
    db.transaction(function(tx) {
                   tx.executeSql(selectCaisse, [sessionStorage.getItem('userdoglina'),sessionStorage.getItem('magasinuserdoglina'),0], function(tx, result) {
                                 dataset = result.rows;
                                 
                                 if(dataset.length==0) var fond=0;else {item = dataset.item(0);var fond=item['entree'];}
                                 
                                 document.getElementById("fondecaisse").value=fond;
                                 
                                 
                                 });
                   
                   });
    
    
}



//showRecordsss(); createTable();createFamille();insertFamille();showfamille();

function number_format (number, decimals, dec_point, thousands_sep) {
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function (n, prec) {
        var k = Math.pow(10, prec);
        return '' + Math.round(n * k) / k;
    };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}


function onError(tx, error) {
   
	 navigator.notification.alert(error.message,null,'HOT DOG V1.0','OK');
}

function idencaissement()
{
    
    db.transaction(function(tx) {tx.executeSql(maxEncaissement, [sessionStorage.getItem('userdoglina'),sessionStorage.getItem('magasinuserdoglina')], function(tx, result) {
                                               dataset = result.rows;
                                               item = dataset.item(0);var nane=item['maxis'];
                                               if(isNaN(nane)) nane=0;else if(nane=='' || nane==null) nane=0;
                                               var maxis=parseInt(parseInt(nane)+1);
                                               document.getElementById('neencais').value=maxis;//alert(maxis);
                                               nosetatsencaissements();
                                               
                                               });
                   });
    
    
}



function nosetatsencaissements() {
    
    document.getElementById('nosetatsencaissements').innerHTML='<div style="text-align:center;padding-top:10px;"><img src="icones/loadinfo.gif"></div>';
    
    db.transaction(function(tx) {
                   tx.executeSql(nosEtatencaissement, [document.getElementById('neencais').value], function(tx, result) {
                                 dataset = result.rows;
                                 var nosetatsencaissements = '';var encais=0;
                                 document.getElementById("mee").innerHTML='ME : 0.00 DHs';
                                 if(dataset.length!=0) {
                                 nosetatsencaissements += '<table style="width:70%;height:30px;" border="0"><tr bgcolor="black"><td style="text-align:center;font-size:18px;font-family:arial;color:white">Identifiant</td><td style="text-align:center;font-size:18px;font-family:arial;color:white">Mode de paiement</td><td style="text-align:center;font-size:18px;font-family:arial;color:white">Montant</td><td style="text-align:center;font-size:18px;font-family:arial;color:white;background-color:#e4e1d7">&nbsp;</td></tr>';
                                 
                                 for (i = 0, item = null; i < dataset.length; i++) {
                                 item = dataset.item(i);
                                 
                                 var id=item['id'];solde=item['solde'];encaissement=item['encaissement'];intitule=item['intitule'];
                                 encais+=parseFloat(solde);
                                 nosetatsencaissements += '<tr bgcolor="#c9c9c9"><td style="text-align:center;font-size:15px;font-family:arial;color:black">'+id+'</td><td style="text-align:left;padding-left:20px;font-size:15px;font-family:arial;color:black">'+intitule+'</td><td style="text-align:center;font-size:15px;font-family:arial;color:black">'+number_format(solde, 2, ',', '')+' DHs</td><td style="text-align:center;background-color:#e4e1d7"><img src="icones/delete.png" style="width:18px;" onclick="suppetatencaissmeent('+id+');"/></td></tr>';
                                 }
                                 nosetatsencaissements += '</table>';
                                 document.getElementById('nosetatsencaissements').innerHTML=nosetatsencaissements;
                                 document.getElementById('encais').value=encais;
                                 document.getElementById("mee").innerHTML='ME : '+number_format(encais, 2, ',', '')+' DHs';
                                 document.getElementById('montantencaie').value=document.getElementById('encais').value;
                                 reste=parseFloat(parseFloat(document.getElementById('duencais').value)-parseFloat(encais));
                                 document.getElementById('soldeencais').value=number_format(reste, 2, ',', '');
                                 
                                 
                                 Today = new Date;
                                 Jour = Today.getDate();if(Jour<10) Jour='0'+Jour;
                                 Mois = (Today.getMonth())+1;if(Mois<10) Mois='0'+Mois;
                                 Annee = Today.getFullYear();
                                 Heure = Today.getHours();if(Heure<10) Heure='0'+Heure;
                                 Minutes = Today.getMinutes();if(Minutes<10) Minutes='0'+Minutes;
                                 Secondes = Today.getSeconds();if(Secondes<10) Secondes='0'+Secondes;
                                 dateCreation = Annee + "-" + Mois + "-" + Jour;
                                 document.getElementById('dateeencais').value=dateCreation;
                                 
                                 }
                                 else document.getElementById('nosetatsencaissements').innerHTML='';
                                 
                                 
                                 });
                   
                   });
    
    
}

function suppetatencaissmeent(varr)
{
    if(confirm("Etes vous sur de vouloir supprimer cet encaissmenet"))
    {
        document.getElementById("nomclientedit").value=client;
        db.transaction(function(tx) {
                       tx.executeSql(deleteEtatencaissement, [varr], loadAndReset, onError);
                       listeclients();				
                       
                       nosetatsencaissements();
                       produitpanier();
                       });
    }
    
}



function showfamille() {
    
    var libellefamille=new Array;var idfamille=new Array;var parentfamille=new Array;				
    document.getElementById('familll').innerHTML = '';
    document.getElementById('familll').innerHTML='<div style="text-align:center;padding-top:100px;"><img src="icones/loadinfo.gif"></div>';
    db.transaction(function(tx) {
                   tx.executeSql(selectFamilles, [1], function(tx, result) {
                                 dataset = result.rows;
                                 for (i = 0, item = null; i < dataset.length; i++) {
                                 item = dataset.item(i);
                                 libellefamille[i] = item['libelle'];
                                 idfamille[i] = item['id'];
                                 parentfamille[i] = item['parent'];
                                 }
                                 var nbfamille=libellefamille.length;var nfam=8;
                                 var nbpage=Math.ceil(nbfamille/nfam);//alert(dataset.length);
                                 
                                 //famills += '<div id="slider" style="overflow: hidden;"><ul style="list-style: none; margin: 0px; width: 606px; -webkit-transition: 0ms; -webkit-transform: translate3d(0px, 0, 0);">';
                                 for(ax=1;ax<=nbpage;ax++) { 
                                 //if(ax==1) var bloks='block';else bloks='none';
                                 var famills='';
                                 //famills += ' <li style="display: table-cell; width: 303px; vertical-align: top;">';
                                 famills += ' <div style="padding:0px;"><table border="0"><tbody>';
                                 var debut=1+(Math.ceil(nfam*(ax-1))/2);
                                 var pare=parseFloat((nfam-2)/2);var fin=debut+pare;
                                 
                                 for(var a=debut;a<=fin;a++)
                                 {		
                                 famills +="<tr>";
                                 for(var b=1;b<=2;b++)									
                                 { 
                                 
                                 var c=(a*2)-1+b-1;
                                 var c=parseInt(c);var nbfamille=parseInt(nbfamille);
                                 
                                 famills +='<td style="padding-left:2px;padding-right:5px;padding-bottom:2px;">';
                                 if(c>nbfamille) famills +="&nbsp;";else { 
                                 
                                 famills +='<p style="width:135px;height:35px;"><a class="super button10 pink" href="javascript:showsousfamille('+idfamille[c-1]+','+parentfamille[c-1]+')"  style="color:#fff;line-height:20pt" >'+libellefamille[c-1]+'</a></p>';	
                                 
                                 
                                 }
                                 famills +="</td>";
                                 } 
                                 
                                 famills +="</tr>";
                                 }
                                 
                                 famills +="</tbody></table></div>";
                                 //alert(famills);
                                 //alert(ax);
                                 //alert('liste0'+ax);
                                 document.getElementById('liste0'+ax).innerHTML=famills;
                                 
                                 }
                                 /*	famills += '</ul></div>';*/
                                 var famillees = '';
                                 famillees +=	'<a href="#" id="prev" onclick="slider.prev();return false;"><em>&nbsp;</em></a><span id="position">';
                                 for(ax=1;ax<=nbpage;ax++) { 
                                 if(ax==1) famillees += '<em class="on" >&bull;</em>';
                                 else famillees += '<em >&bull;</em>';
                                 } 
                                 famillees +=	'<a href="#" id="next" onclick="slider.next();return false;"><em>&nbsp;</em></a></span>';
                                 
                                 
                                 //	<span id="position"><em class="on">&#8226;</em><em>&#8226;</em><a href="#" id="next" onclick="slider.next();return false;"><em>&nbsp;</em></a></span>
                                 
                                 document.getElementById('navi').innerHTML = famillees;
                                 
                                 
                                 
                                 
                                 });
                   
                   });
    
    
    
    
    
    
    
    
    
}

function showsousfamille(famille,parent) {
    document.getElementById('mamafamille').value=famille;
    document.getElementById('sousfamille').innerHTML='<div style="text-align:center;padding-top:30px;"><img src="icones/loadinfo.gif"></div>';
    var libellesousfamille=new Array;var idsousfamille=new Array;var prixsousfamille=new Array;	
    var suggesousfamille=new Array;	
    var sousfamills='';
    
    if(parent==0) {
        db.transaction(function(tx) {
                       tx.executeSql(selectSousFamille, [document.getElementById('mamafamille').value,56], function(tx, result) {
                                     dataset = result.rows;
                                     for (i = 0, item = null; i < dataset.length; i++) {
                                     item = dataset.item(i);
                                     libellesousfamille[i] = item['libelle'];
                                     idsousfamille[i] = item['id'];
                                     prixsousfamille[i] = item['prix'];
                                     suggesousfamille[i] = item['suggestion'];
                                     }
                                     
                                     var sousfamills='';
                                     for(a=1;a<=libellesousfamille.length;a++)
                                     {	 
                                     if(suggesousfamille[a-1]=='') suggesousfamilles='0';else suggesousfamilles=suggesousfamille[a-1];
                                     sousfamills += '<div style="width:140px;float:left;" ><p style="width:140px;height:40px;"><a class="super button11 pink" href="javascript:addproduit('+idsousfamille[a-1]+','+prixsousfamille[a-1]+','+famille+',\''+suggesousfamilles+'\')" style="color:#fff;line-height:16pt">'+libellesousfamille[a-1]+'</a></p></div><div style="width:25px;float:left;height:50px;">&nbsp;</div>';
                                     
                                     }
                                     
                                     
                                     
                                     document.getElementById('sousfamille').innerHTML = sousfamills;
                                     
                                     
                                     });
                       
                       });
    } else {
		
		db.transaction(function(tx) {
                       tx.executeSql(selectSousFamillebis, [document.getElementById('mamafamille').value,56], function(tx, result) {
                                     dataset = result.rows;
                                     for (i = 0, item = null; i < dataset.length; i++) {
                                     item = dataset.item(i);
                                     libellesousfamille[i] = item['libelle'];
                                     idsousfamille[i] = item['id'];
                                     prixsousfamille[i] = item['prix'];
                                     suggesousfamille[i] = item['suggestion'];
                                     }
                                     
                                     var sousfamills='';
                                     for(a=1;a<=libellesousfamille.length;a++)
                                     {	 
                                     if(suggesousfamille[a-1]=='') suggesousfamilles='0';else suggesousfamilles=suggesousfamille[a-1];
                                     sousfamills += '<div style="width:140px;float:left;" ><p style="width:140px;height:40px;"><a class="super button11 pink" href="javascript:addproduit('+idsousfamille[a-1]+','+prixsousfamille[a-1]+','+famille+',\''+suggesousfamilles+'\')" style="color:#fff;line-height:16pt">'+libellesousfamille[a-1]+'</a></p></div><div style="width:25px;float:left;height:50px;">&nbsp;</div>';
                                     
                                     }
                                     
                                     document.getElementById('sousfamille').innerHTML = sousfamills;
                                     
                                     
                                     });
                       
                       });
		
    }
    
    
    
    
    
    
}


function mesmagasins() {
    
    var mesmagasins='<option value="0">Liste magasins</option>';
    db.transaction(function(tx) {
                   tx.executeSql(selectMagasin, [], function(tx, result) {
                                 dataset = result.rows;
                                 for (i = 0, item = null; i < dataset.length; i++) {
                                 item = dataset.item(i);
                                 idmagasin = item['id'];
                                 intitulemagasin = item['intitule'];
                                 mesmagasins += '<option value='+idmagasin+'>'+intitulemagasin+'</option>';
                                 }
                                 document.getElementById('magasinclient').innerHTML = mesmagasins;
                                 document.getElementById('listmagasin').innerHTML = mesmagasins			
                                 
                                 });
                   
                   });
    
}


function mesmagasinss(etat) {
    
    var mesmagasins='<option value="0">Liste magasins</option>';
    db.transaction(function(tx) {
                   tx.executeSql(selectMagasin, [], function(tx, result) {
                                 dataset = result.rows;
                                 for (i = 0, item = null; i < dataset.length; i++) {
                                 item = dataset.item(i);
                                 idmagasin = item['id'];
                                 intitulemagasin = item['intitule'];
                                 mesmagasins += '<option value='+idmagasin+'>'+intitulemagasin+'</option>';
                                 }
                                 if(etat==0) mesmagasins += '<option value="99">Perte</option>';
                                 document.getElementById('magasinclient').innerHTML = mesmagasins;
                                 document.getElementById('listmagasin').innerHTML = mesmagasins			
                                 
                                 });
                   
                   });
    
}




function mesreductions() {
    
    var mesreducts='';
    for (i = 0; i <=100; i++) {
        mesreducts += '<option value='+i+'>'+i+' %</option>';
    }
    document.getElementById('reductionarticle').innerHTML = mesreducts;	
    document.getElementById('pourcentagereduction').innerHTML = mesreducts;	
}


function mesreductionss(produitt) {
    
    var reduirr=document.getElementById('remise_'+produitt).innerHTML;
    reduirrs=reduirr.replace(" ","");reduirrs=reduirrs.replace("%","");
    
    var mesreducts='';
    for (i = 0; i <=100; i++) {
        if(i==reduirrs) mesreducts += '<option value='+i+' selected=selected>'+i+' %</option>';
        else mesreducts += '<option value='+i+'>'+i+' %</option>';
    }
    document.getElementById('reductionarticle').innerHTML = mesreducts;		
}




function ajouterproduit(produit,qte,etat,action,prix,reductionarticle,famille) {
    
    
    
    
    
    document.getElementById('maproduit1').value=produit;
    document.getElementById('maqte1').value=qte;
    document.getElementById('matetat1').value=etat;
    
    Today = new Date;
    Jour = Today.getDate();if(Jour<10) Jour='0'+Jour;
    Mois = (Today.getMonth())+1;if(Mois<10) Mois='0'+Mois;
    Annee = Today.getFullYear();
    joure = Annee + "-" + Mois + "-" + Jour;
    document.getElementById('matoday').value=joure;
    
    
    db.transaction(function(tx) {
                   tx.executeSql(selectProduit, [produit], function(tx, result) {
                                 dataset = result.rows;
                                 item = dataset.item(0);
                                 var price=item['prix'];libelle=item['libelle'];tva=item['tva'];
                                 document.getElementById('malibelle1').value=libelle;
                                 document.getElementById('maprix1').value=price;
                                 document.getElementById('matva1').value=tva;//alert(document.getElementById('malibelle1').value);				
                                 });
                   
                   
                   });
    db.transaction(function(tx) {
                   
                   tx.executeSql(maxPanier, [], function(tx, result) {
                                 dataset = result.rows;
                                 item = dataset.item(0);
                                 if(!isNaN(item['maxi'])) nanes=item['maxi']; else nanes=0;
                                 if(nanes==null) nanes=0;	
                                 var maxi=parseInt(parseInt(nanes)+1);
                                 document.getElementById('mamaxi').value=maxi;	
                                 });
                   tx.executeSql(selectPanier, [sessionStorage.getItem('userdoglina'),document.getElementById('maproduit1').value,sessionStorage.getItem('magasinuserdoglina'),'0'], function(tx, resultt) {
                                 datasett = resultt.rows;
                                 if(etat=='10')
                                 {
                                 
                                 document.getElementById('remise_'+produit).innerHTML=reductionarticle+' %';
                                 prixdeduire=parseFloat(document.getElementById('idarticles').value);
                                 reduction=parseInt(100-parseInt(reductionarticle));
                                 //alert(reduction);
                                 //alert('reste : '+prix*qte*reduction);
                                 document.getElementById('pt_'+produit).innerHTML=number_format(parseFloat(prix*qte*parseFloat(reduction/100)), 2, ',', '');
                                 //	alert(parseFloat(document.getElementById('montotal').value));
                                 //	alert(prixdeduire);
                                 //	alert(parseFloat(prix*qte*reduction));
                                 var total=parseFloat(document.getElementById('montotal').value)+parseFloat(prix*qte*reduction/100)-prixdeduire;
                                 //totalavecremise(total);	
                                 /*document.getElementById('montotal').value=total;
                                  document.getElementById('total').innerHTML=number_format(total, 2, ',', '')+' DHs';
                                  document.getElementById('duencais').value=number_format(total, 2, '.', '');
                                  document.getElementById('soldeencais').value=number_format(total, 2, '.', '');
                                  document.getElementById('totaleencais').value=total;
                                  var tva=number_format(total/6, 2, ',', '');
                                  document.getElementById('tva').innerHTML='dont '+tva+' DHs TVA ';*/
                                 
                                 
                                 
                                 db.transaction(function(tx) {
                                                //var maquant=document.getElementById('qte_'+document.getElementById('maproduit1').value).innerHTML;
                                                document.getElementById('maqte2').value=qte;//alert(sessionStorage.getItem('userdoglina'));
                                                document.getElementById('mareduction2').value=reductionarticle;
                                                tx.executeSql(updatePanier, [document.getElementById('maqte2').value,document.getElementById('mareduction2').value,sessionStorage.getItem('userdoglina'),document.getElementById('maproduit1').value,'0'], loadAndReset, onError);
                                                var strs=document.getElementById('pu_'+document.getElementById('maproduit1').value).innerHTML;
                                                var strss=strs.replace(",",".");
                                                var pritt=parseFloat(reductionarticle/100);
                                                //document.getElementById('pt_'+document.getElementById('maproduit1').value).innerHTML=number_format(parseFloat(strss)*parseFloat(qte*pritt), 2, ',', '');
                                                document.getElementById('qte_'+document.getElementById('maproduit1').value).innerHTML=qte;
                                                totalavecremise(0,0);
                                                });
                                 }
                                 else if(etat=='0')
                                 {
                                 //reductt=parseFloat(parseInt(100-parseInt(document.getElementById('remise_'+produit).innerHTML))/100);
                                 db.transaction(function(tx) {
                                                var maquant=document.getElementById('qte_'+produit).innerHTML;
                                                
                                                var reduirr=document.getElementById('remise_'+produit).innerHTML;
                                                reduirrs=reduirr.replace(" ","");reduirrs=reduirrs.replace("%","");
                                                document.getElementById('mareduction2').value=parseInt(reduirrs);
                                                reductt=parseFloat(parseInt(100-reduirrs)/100);
                                                //alert(document.getElementById('maqte2').value);
                                                document.getElementById('maqte2').value=parseInt(maquant)+parseInt(action);//alert('222'+document.getElementById('maqte2').value);
                                                tx.executeSql(updatePanier, [document.getElementById('maqte2').value,document.getElementById('mareduction2').value,sessionStorage.getItem('userdoglina'),produit,'0'], loadAndReset, onError);
                                                var strs=document.getElementById('pu_'+produit).innerHTML;
                                                var strss=strs.replace(",",".");
                                                document.getElementById('pt_'+produit).innerHTML=number_format(parseFloat(strss)*(parseInt(maquant)+parseInt(action))*reductt, 2, ',', '');
                                                document.getElementById('qte_'+produit).innerHTML=parseInt(maquant)+parseInt(action);
                                                totalavecremise(0,0);
                                                });
                                 }
                                 else {
                                 if(datasett.length==0) {
                                 //alert('affiche');
                                 
                                 /*var str=document.getElementById('commande').value;
                                  var n=str.replace("-"+document.getElementById('maproduit1').value+"-","");
                                  document.getElementById('commande').value=n+'-'+document.getElementById('maproduit1').value+'-';*/
                                 
                                 
                                 db.transaction(function(tx) {
                                                
                                                Today = new Date;
                                                Jour = Today.getDate();if(Jour<10) Jour='0'+Jour;
                                                Mois = (Today.getMonth())+1;if(Mois<10) Mois='0'+Mois;
                                                Annee = Today.getFullYear();
                                                Heure = Today.getHours();if(Heure<10) Heure='0'+Heure;
                                                Minutes = Today.getMinutes();if(Minutes<10) Minutes='0'+Minutes;
                                                Secondes = Today.getSeconds();if(Secondes<10) Secondes='0'+Secondes;
                                                document.getElementById('matodayheure').value=document.getElementById('matoday').value+' '+Heure+':'+Minutes+':'+Secondes;
                                                //alert('ppp'+produit);
                                                
                                                tx.executeSql(selectProduit, [produit], function(tx, result) {
                                                              dataset = result.rows;
                                                              item = dataset.item(0);
                                                              var price=item['prix'];libelle=item['libelle'];tva=item['tva'];
                                                              document.getElementById('malibelle1').value=libelle;
                                                              document.getElementById('maprix1').value=price;
                                                              document.getElementById('matva1').value=tva;//alert(libelle);				
                                                              
                                                              tx.executeSql(insertPanier, ['0',sessionStorage.getItem('userdoglina'),produit,document.getElementById('matva1').value,'0',libelle,document.getElementById('maprix1').value,sessionStorage.getItem('clientdoglina'),sessionStorage.getItem('userdoglina'),document.getElementById('maqte1').value,'0',document.getElementById('matodayheure').value,sessionStorage.getItem('magasinuserdoglina'),famille], loadAndReset, onError);
                                                              totalavecremise(0,0);
                                                              });
                                                });
                                 
                                 
                                 
                                 db.transaction(function(tx) {
                                                tx.executeSql(selectProduit, [produit], function(tx, result) {
                                                              //alert(produit);
                                                              dataset = result.rows;
                                                              item = dataset.item(0);
                                                              var price=item['prix'];libelle=item['libelle'];produit=item['id'];remise=0;famille=item['famille'];
                                                              document.getElementById('malibelle1').value=libelle;
                                                              document.getElementById('maprix1').value=price;
                                                              var tvas=item['tva'];tva=parseFloat(tvas);
                                                              var popi = '<li style="padding-bottom:5px;background:none;height:35px;visibility:visible;border-left:1px solid black;border-right:1px solid black;border-bottom:1px solid black;background-color:#fafafa;" id="produit_'+produit+'"><div style="width:100%;clear:both;border-bottom:1px solid #520f11;" ><div style="width:5%;float:left;">&nbsp;</div><div style="width:35%;float:left;font-weight:light;font-size:18px;padding-top:15px;">'+libelle+'</div><div style="width:3%;float:left;font-size:18px;font-weight:bold;padding-top:5px;"><a class="super moinsmoins pink" href="javascript:actionproduit('+produit+','+price+',-1,'+tvas+','+famille+');"  style="color:#fff;line-height:16pt" >-</a></div><div style="width:6%;float:left;font-size:18px;font-weight:bold;text-align:center;padding-top:16px;" id="qte_'+produit+'">1</div><div style="width:3%;float:left;font-size:18px;font-weight:bold;padding-top:5px;"><a class="super plusplus pink" href="javascript:actionproduit('+produit+','+price+',1,'+tvas+','+famille+');"  style="color:#fff;line-height:16pt" >+</a></div><div style="width:13%;float:left;font-weight:bold;font-size:18px;" ><div style="padding-top:16px;text-align:right;padding-right:5px;" id="pu_'+produit+'">'+number_format(price, 2, ',', '')+'</div></div><div style="width:10%;float:left;font-weight:bold;font-size:18px;" ><div style="padding-top:16px;text-align:right;" id="remise_'+produit+'">'+remise+' %</div></div><div style="width:15%;float:left;font-weight:bold;font-size:18px;" ><div style="padding-top:16px;text-align:right;padding-right:20px;" id="pt_'+produit+'">'+number_format(price, 2, ',', '')+'</div></div><div style="width:5%;float:left;padding-top:5px;"><a class="super suppsupp pink" href="javascript:actionproduit('+produit+','+price+',0,'+tvas+','+famille+');"  style="color:#fff;line-height:16pt" ><img src="icones/delete.png" style="border:0px;width:18px;" /></a></div><div style="width:5%;float:left;padding-top:5px;"><a class="super pourpour pink" href="javascript:produitreduction('+produit+','+price+');"  style="color:#fff;line-height:16pt" >%</a></div></div></li>';
                                                              
                                                              
                                                              
                                                              document.getElementById('produits').innerHTML=popi+document.getElementById('produits').innerHTML;
                                                              //alert(document.getElementById('produits').innerHTML);
                                                              
                                                              
                                                              
                                                              });
                                                
                                                });
                                 
                                 
                                 
                                 
                                 
                                 
                                 
                                 
                                 } else {
                                 db.transaction(function(tx) {
                                                var maquant=document.getElementById('qte_'+document.getElementById('maproduit1').value).innerHTML;
                                                document.getElementById('maqte2').value=parseInt(maquant)+1;
                                                var reduirr=document.getElementById('remise_'+document.getElementById('maproduit1').value).innerHTML;
                                                reduirrs=reduirr.replace(" ","");reduirrs=reduirrs.replace("%","");
                                                document.getElementById('mareduction2').value=parseInt(reduirrs);
                                                
                                                tx.executeSql(updatePanier, [document.getElementById('maqte2').value,document.getElementById('mareduction2').value,sessionStorage.getItem('userdoglina'),document.getElementById('maproduit1').value,'0'], loadAndReset, onError);
                                                var strs=document.getElementById('pu_'+document.getElementById('maproduit1').value).innerHTML;
                                                var strss=strs.replace(",",".");
                                                document.getElementById('pt_'+document.getElementById('maproduit1').value).innerHTML=number_format(parseFloat(strss)*(parseInt(maquant)+1), 2, ',', '');
                                                document.getElementById('qte_'+document.getElementById('maproduit1').value).innerHTML=parseInt(maquant)+1;
                                                });
                                 } }
                                 });
                   
                   });
    
    
    /*var total=parseFloat(document.getElementById('montotal').value)-parseFloat(prix*reductionv);
     var tvaproduit=parseFloat(prix*reductionv)*((parseFloat(tvaa/100)-1)+1);
     var ancientva=parseFloat(document.getElementById('montva').value);alert(ancientva);
     alert(parseFloat(prix*reductionv)*((parseFloat(tvaa/100)-1)+1));
     var tvat=parseFloat(ancientva-parseFloat(prix*reductionv)*((parseFloat(tvaa/100)-1)+1));*/
    
}


function addproduit(produit,prix,famille,suggestion) {
    //alert(suggestion);
    if(suggestion==0) {
		document.getElementById('maproduit').value=produit;document.getElementById('maprix').value=prix;
		
        
        
        
        
        var str=document.getElementById('commande').value;
        var var1=str.indexOf("-"+produit+'-',0);//alert(str);
        if(var1!=-1) 
        {
            var reduirr=document.getElementById('remise_'+produit).innerHTML;
            reduirrs=reduirr.replace(" ","");reduirrs=reduirrs.replace("%","");
            reductt=parseFloat(parseInt(100-parseInt(reduirrs))/100);//alert('no'+reductt);
        }
        else reductt=1;
        var qte=1;
        var total=parseFloat(document.getElementById('montotal').value)+parseFloat(prix*reductt);
        if(var1!=-1) {
            ajouterproduit(produit,qte,0,1,0,0,famille);
            
        }
        else { 
            if(str=='') { 
                document.getElementById('produits').style.border='1px solid black';	
                document.getElementById('produits').style.visibility='visible';
            }
            var n=str.replace("-"+produit+"-","");
            document.getElementById('commande').value=n+'-'+produit+'-';
            ajouterproduit(produit,qte,1,1,0,0,famille);
            
        }
        totalavecremise(0,0);							
    }
    else 
        
    {
        
        var myarray = suggestion.split(";");
        for (var i=0; i<myarray.length; i++) {
            
            addproduit(myarray[i],prix,famille,0)
        }
        
    }
}


function actionproduit(produit,prix,action,tvaa,famille) {
    
    reductionarticle=document.getElementById('remise_'+produit).innerHTML;
    reductionarticle=reductionarticle.replace(" ","");reductionarticle=reductionarticle.replace("%","");
    reductionv=parseFloat(parseInt(100-parseInt(reductionarticle))/100);
    document.getElementById('maproduit1').value=produit;
    document.getElementById('maprix').value=prix;
    if(action==0)
    {
        var str=document.getElementById('commande').value;
        document.getElementById('commande').value=str.replace("-"+produit+"-","");	
        
        var maquant=document.getElementById('qte_'+document.getElementById('maproduit1').value).innerHTML;
        var total=parseFloat(document.getElementById('montotal').value)-parseFloat(prix*maquant*reductionv);
        //totalavecremise();
        /*document.getElementById('montotal').value=total;
         document.getElementById('total').innerHTML=number_format(total, 2, ',', '')+' DHs';
         document.getElementById('duencais').value=number_format(total, 2, '.', '');
         document.getElementById('soldeencais').value=number_format(total, 2, '.', '');
         document.getElementById('totaleencais').value=total;
         var tva=number_format(total/6, 2, ',', '');*/
        var poinfid=document.getElementById('mtfidelpoint').value;
        /*function pointfi()
         {
         
         }*/
        document.getElementById('tva').innerHTML='CF : '+number_format(poinfid, 2, '.', '')+' DHs';
        db.transaction(function(tx) {
                       tx.executeSql(deletePanier, [sessionStorage.getItem('userdoglina'),document.getElementById('maproduit1').value,'0'], loadAndResets, onError);
                       totalavecremise(0,0);								
                       });
        document.getElementById('produit_'+produit).style.visibility='hidden';
        document.getElementById('produit_'+produit).style.height='0px';
        document.getElementById('produit_'+produit).style.paddingBottom ='0px';
        document.getElementById('produit_'+produit).innerHTML='';
        
    }
    else if(action==-1)
    {
        var total=parseFloat(document.getElementById('montotal').value)-parseFloat(prix*reductionv);
        var tvaproduit=parseFloat(prix*reductionv)*((parseFloat(tvaa/100)-1)+1);
        var ancientva=parseFloat(document.getElementById('montva').value);
        //alert(parseFloat(prix*reductionv)*((parseFloat(tvaa/100)-1)+1));
        var tvat=parseFloat(ancientva-parseFloat(prix*reductionv)*((parseFloat(tvaa/100)-1)+1));
        //totalavecremise(total,tvat);
        /*document.getElementById('montotal').value=total;
         document.getElementById('total').innerHTML=number_format(total, 2, ',', '')+' DHs';
         document.getElementById('duencais').value=number_format(total, 2, '.', '');
         document.getElementById('soldeencais').value=number_format(total, 2, '.', '');
         document.getElementById('totaleencais').value=total;
         var tva=number_format(total/6, 2, ',', '');
         document.getElementById('tva').innerHTML='dont '+tva+' DHs TVA ';*/
        ajouterproduit(produit,qte,0,action,0,0,famille);
    }
    else
    {
        var qte=1;
        var total=parseFloat(document.getElementById('montotal').value)+parseFloat(prix*reductionv);
        //totalavecremise(total);
        /*document.getElementById('montotal').value=total;
         document.getElementById('total').innerHTML=number_format(total, 2, ',', '')+' DHs';
         document.getElementById('duencais').value=number_format(total, 2, '.', '');
         document.getElementById('soldeencais').value=number_format(total, 2, '.', '');
         document.getElementById('totaleencais').value=total;
         var tva=number_format(total/6, 2, ',', '');
         document.getElementById('tva').innerHTML='dont '+tva+' DHs TVA ';*/
        ajouterproduit(produit,qte,0,action,0,0,famille);
    }
    
}

function adproduit(action) {
    document.getElementById('idarticle').value=parseInt(document.getElementById('idarticle').value)+parseInt(action);
}


function produitreduction(produit,prix)
{
    window.location.href = '#reductions';
    
    document.getElementById('idarticle').value=parseInt(document.getElementById('qte_'+produit).innerHTML);
    var pricv=document.getElementById('pt_'+produit).innerHTML;
    pricv=pricv.replace(",",".");						
    document.getElementById('idarticles').value=parseFloat(pricv);
    document.getElementById('prixarticle').value=prix;
    document.getElementById('produitarticle').value=produit;
    mesreductionss(produit);						
}

function editproduit(famille)
{
    produit=document.getElementById('produitarticle').value;
    prix=document.getElementById('prixarticle').value;
    qtt=document.getElementById('idarticle').value;
    var reductionarticle=document.getElementById('reductionarticle').options[document.getElementById('reductionarticle').selectedIndex].value;
    ajouterproduit(produit,qtt,10,1,prix,reductionarticle,famille);
    window.location.href = document.getElementById('closeaa').href;
}





function showRecords() {
    db.transaction(function(tx) { 
                   var passes=md5('caissier'+document.getElementById('login_passwd').value+'dog');
                   tx.executeSql(verifStatement,[document.getElementById('login_username').value,passes, '1'], function(tx, result) {
                                 dataset = result.rows;
                                 regler(3,111);
                                 if(dataset.length==1)
                                 {						
                                 for (var i = 0, item = null; i < dataset.length; i++) {
                                 item = dataset.item(i);
                                 var iduserdoglina=item['id'];var nomuserdoglina=item['prenom'];var magasinuserdoglina=item['magasin'];
                                 var nommagasinuserdoglina=item['intitule'];var typeuserdoglina=item['type'];var typemagasindoglina=item['typemagasin'];
                                 }
                                 hotdog(1);validercf();
                                 document.getElementById('userdog').value=iduserdoglina;
                                 sessionStorage.setItem('userdoglina', iduserdoglina);
                                 sessionStorage.setItem('typedoglina', typeuserdoglina); 						
                                 sessionStorage.setItem('nomuserdoglina', nomuserdoglina);
                                 sessionStorage.setItem('magasinuserdoglina', magasinuserdoglina);
                                 sessionStorage.setItem('nommagasinuserdoglina', nommagasinuserdoglina);
                                 sessionStorage.setItem('typemagasindoglina', typemagasindoglina);
                                 document.getElementById("bloc1").style.visibility='hidden';
                                 document.getElementById("bloc1").style.height='0px';
                                 document.getElementById("bloc1").style.width='0px';
                                 
                                 location.href='#';                                 
                                 document.getElementById("bloc2").style.visibility='visible';
                                 document.getElementById("bloc2").style.height='auto';
                                 document.getElementById("bloc2").style.width='auto';
                                 //document.getElementById("slidedownmenu").style.visibility='visible';
                                 document.getElementById("listeproduit").style.visibility='visible';
                                 
                                 /*document.getElementById("section1").style.visibility='hidden';
                                  document.getElementById("section1").style.height='0px';*/
                                 document.getElementById("section1").style.visibility='visible';
                                 document.getElementById("section1").style.height='auto';
                                 document.getElementById("section2").style.visibility='visible';
                                 document.getElementById("section2").style.height='auto';
                                 document.getElementById('login_passwd').value='';
                                 document.getElementById('login_username').value='';
                                 produitpanier();
                                 showfamille();
                                 listeclients();
                                 listeremises();
                                 indispensables();
                                 affectclient(1,0);
                                 validercf();
                                 }
                                 else
                                 {
                                 if(document.getElementById('login_passwd').value!='') document.getElementById('mahome').innerHTML='Echec de connexion';
                                 }
                                 
                                 });
                   });
}


function loadRecord(i) {
    var item = dataset.item(i); 
    firstName.value = item['firstName'];
    lastName.value = item['lastName'];
    phone.value = item['phone'];
    id.value = item['id']; 
}

function updateRecord() {
    db.transaction(function(tx) {
                   tx.executeSql(updateStatement, [firstName.value, lastName.value, phone.value, id.value], loadAndResets, onError);
                   }); 
}

function produitpanier() {
	
    db.transaction(function(tx) {
                   tx.executeSql(selectPaniers, [sessionStorage.getItem('userdoglina'),sessionStorage.getItem('magasinuserdoglina'),'0'], function(tx, result) {
                                 dataset = result.rows;var popis = '';var totalbis =0;var commandebis = "";var tvabis =0;
                                 for (i = 0, item = null; i < dataset.length; i++) {
                                 item = dataset.item(i);
                                 var price=item['prix'];libelle=item['libelle'];produit=item['produit'];qte=item['qte'];remise=item['remise'];
                                 document.getElementById('malibelle1').value=libelle;famille=item['famille'];
                                 document.getElementById('maprix1').value=price;//alert(remise);
                                 var prixto=parseFloat(qte*price*parseFloat(100-remise)/100);
                                 //var tvas=item['tva'];if(!isNaN(tvas)) tvas=item['tva']; else tvas=0;if(tvas==null) tvas=0;
                                 var tvas=item['tva'];tva=parseFloat(tvas);
                                 if(i==0) styles='padding-bottom:5px;background:none;height:35px;visibility:visible;border-left:1px solid black;border-right:1px solid black';
                                 else styles='padding-bottom:5px;background:none;height:35px;visibility:visible;border-left:1px solid black;border-right:1px solid black';
                                 popis += '<li style="'+styles+'" id="produit_'+produit+'"><div style="width:100%;clear:both;border-bottom:1px solid #520f11;" ><div style="width:5%;float:left;">&nbsp;</div><div style="width:35%;float:left;font-weight:light;font-size:18px;padding-top:15px;">'+libelle+'</div><div style="width:3%;float:left;font-size:18px;font-weight:bold;padding-top:5px;"><a class="super moinsmoins pink" href="javascript:actionproduit('+produit+','+price+',-1,'+tvas+','+famille+');"  style="color:#fff;line-height:16pt" >-</a></div><div style="width:6%;float:left;font-size:18px;font-weight:bold;text-align:center;padding-top:16px;" id="qte_'+produit+'">'+qte+'</div><div style="width:3%;float:left;font-size:18px;font-weight:bold;padding-top:5px;"><a class="super plusplus pink" href="javascript:actionproduit('+produit+','+price+',1,'+tvas+','+famille+');"  style="color:#fff;line-height:16pt" >+</a></div><div style="width:13%;float:left;font-weight:bold;font-size:18px;" ><div style="padding-top:16px;text-align:right;padding-right:5px;" id="pu_'+produit+'">'+number_format(price, 2, ',', '')+'</div></div><div style="width:10%;float:left;font-weight:bold;font-size:18px;" ><div style="padding-top:16px;text-align:right;" id="remise_'+produit+'">'+remise+' %</div></div><div style="width:15%;float:left;font-weight:bold;font-size:18px;" ><div style="padding-top:16px;text-align:right;padding-right:20px;" id="pt_'+produit+'">'+number_format(prixto, 2, ',', '')+'</div></div><div style="width:5%;float:left;padding-top:5px;"><a class="super suppsupp pink" href="javascript:actionproduit('+produit+','+price+',0,'+tvas+','+famille+');"  style="color:#fff;line-height:16pt" ><img src="icones/delete.png" style="border:0px;width:18px;" /></a></div><div style="width:5%;float:left;padding-top:5px;"><a class="super pourpour pink" href="javascript:produitreduction('+produit+','+price+');"  style="color:#fff;line-height:16pt" >%</a></div></div></li>';
                                 totalbis += parseFloat(prixto);//alert(tvas);
                                 //alert(parseFloat(parseFloat(prixto)/(1+(parseFloat(tvas/100)))));
                                 var multi=parseFloat(1+(parseFloat(tvas/100)));
                                 //tvabis += parseFloat(parseFloat(totalbis)-parseFloat(parseFloat(totalbis)*multi));
                                 commandebis += "-"+produit+"-";
                                 tvabis +=parseFloat(prixto)*((parseFloat(tva/100)-1)+1);
                                 }
                                 document.getElementById('commande').value=commandebis;
                                 
                                 //alert(tvabis);
                                 document.getElementById('produits').innerHTML=popis;
                                 total=totalbis;
                                 totalavecremise(0,0);	
                                 
                                 
                                 
                                 
                                 
                                 
                                 
                                 
                                 
                                 });
                   
                   });
    
}



function listeclients() {
    db.transaction(function(tx) {
                   tx.executeSql(ListeClient, [sessionStorage.getItem('userdoglina')], function(tx, result) {
                                 dataset = result.rows;
                                 var clientes = '';
                                 var listeclientbis = '<table  cellspacing="0" border="1" style="width:770px;font-size:16px;border-collapse:collapse;"><tr style="background-color:#370a0c;color:white;height:25px;"><td align="center" width="10%"><b>Code</b></td><td align="center" width="5%"><b>Sexe</b></td><td align="center" width="18%"><b>Nom</b></td><td align="center" width="15%"><b>Pr&eacute;nom</b></td><td align="center" width="10%"><b>Point</b></td><td align="center" width="12%"><b>T&eacute;l&eacute;phone</b></td><td align="center" width="15%"><b>Magasin</b></td><td align="center" width="15%"><b>&nbsp;</b></td></tr>';//alert(dataset.length);
                                 for (i = 0, item = null; i < dataset.length; i++) {
                                 item = dataset.item(i);if(i%2==0) var coli='#dfdfdf';else var coli='#fff';
                                 var id=item['id'];nom=item['nom'];prenom=item['prenom'];email=item['email'];phone=item['phone'];sexe=item['sexe'];code=item['code'];point=number_format(item['point'], 2, '.', '');//alert(point);
                                 magasin=item['intitule'];nomprenom=item['nom']+' '+item['prenom'];
                                 if(sexe==0) sexee='Mlle';else if(sexe==1) sexee='MMe';else sexee='Mr';
                                 
                                 
                                 
                                 clientes += '<option value='+nomprenom+' />';
                                 listeclientbis += '<tr style="font-size:14px;color:black" bgcolor="'+coli+'"><td align="center"><b>'+code+'</b></td><td align="center" ><b>'+sexee+'</b></td><td align="center" ><b>'+nom+'</b></td><td align="center"><b>'+prenom+'</b></td><td align="center"><b>'+point+'</b></td><td align="center"><b>'+phone+'</b></td><td align="center"><b>'+magasin+'</b></td><td align="center"><a href="#editclients"><img src="icones/editer.png" style="border:0px;width:18px;" onclick="editclient('+id+');"></a>&nbsp;';
                                 if(id!=1) listeclientbis += '<img src="icones/delete.png" style="border:0px;width:18px;" onclick="suppclientbis('+code+');">&nbsp;';
                                 listeclientbis += '<img src="icones/plus.png" style="border:0px;width:18px;" onclick="affectclient('+id+',1);"></td></tr>';
                                 }
                                 listeclientbis += '</table><br />';
                                 document.getElementById('mesclientbis').innerHTML=listeclientbis;
                                 //document.getElementById('clientes').innerHTML=clientes;
                                 
                                 
                                 
                                 
                                 
                                 });
                   
                   });
}




function listeremises() { 
    
    db.transaction(function(tx) {
                   tx.executeSql(selectRemise, [sessionStorage.getItem('userdoglina'),sessionStorage.getItem('magasinuserdoglina'),0,1], function(tx, result) {
                                 dataset = result.rows;
                                 
                                 var listeclientbis = '<table  cellspacing="0" border="1" style="width:770px;font-size:16px;border-collapse:collapse;" ><tr style="background-color:#370a0c;color:white;height:25px;"><td align="center" width="20%"><b>Identifiant</b></td><td align="center" width="30%"><b>Montant</b></td><td align="center" width="30%"><b>Pourcentage</b></td><td align="center" width="20%"><b>&nbsp;</b></td></tr>';
                                 for (i = 0, item = null; i < dataset.length; i++) {
                                 item = dataset.item(i);
                                 var code=item['id'];montant=item['montant'];pourcentage=item['pourcentage'];
                                 
                                 if(i%2==0) var coli='#dfdfdf';else var coli='#fff';
                                 
                                 
                                 listeclientbis += '<tr style="font-size:14px;color:black" bgcolor="'+coli+'"><td align="center"><b>'+code+'</b></td><td align="center" ><b>'+montant+'</b></td><td align="center" ><b>'+pourcentage+'</b></td><td align="center"><img src="icones/delete.png" style="border:0px;width:18px;" onclick="suppremisebis('+code+');"></td></tr>';
                                 }
                                 listeclientbis += '</table>';
                                 document.getElementById('mesremisesbis').innerHTML=listeclientbis;
                                 
                                 
                                 
                                 
                                 
                                 
                                 });
                   
                   });
}

function listeclientss(client) {
	
    document.getElementById('nomclientauto').value=client;					
    db.transaction(function(tx) {
                   tx.executeSql(ListeClientauto, [client], function(tx, result) {
                                 dataset = result.rows;
                                 var clientes = '';
                                 var listeclientbis = '<table  cellspacing="0" border="1" style="width:870px;font-size:16px;border-collapse:collapse;"><tr style="background-color:#370a0c;color:white;height:25px;"><td align="center" width="12%"><b>Code</b></td><td align="center" width="7%"><b>Sexe</b></td><td align="center" width="20%"><b>Nom</b></td><td align="center" width="20%"><b>Pr&eacute;nom</b></td><td align="center" width="18%"><b>T&eacute;l&eacute;phone</b></td><td align="center" width="15%"><b>Magasin</b></td><td align="center" width="8%"><b>&nbsp;</b></td></tr>';
                                 for (i = 0, item = null; i < dataset.length; i++) {
                                 item = dataset.item(i);	if(i%2==0) var coli='#dfdfdf';else var coli='#fff';
                                 var id=item['id'];nom=item['nom'];prenom=item['prenom'];email=item['email'];phone=item['phone'];sexe=item['sexe'];code=item['code'];
                                 magasin=item['intitule'];nomprenom=item['nom']+' '+item['prenom'];
                                 if(sexe==0) sexee='Mlle';else if(sexe==1) sexee='MMe';else sexee='Mr';
                                 clientes += '<option value='+nomprenom+' />';
                                 listeclientbis += '<tr style="font-size:14px;;color:black" bgcolor="'+coli+'"><td align="center"><b>'+code+'</b></td><td align="center" ><b>'+sexee+'</b></td><td align="center" ><b>'+nom+'</b></td><td align="center"><b>'+prenom+'</b></td><td align="center"><b>'+phone+'</b></td><td align="center"><b>'+magasin+'</b></td><td align="center"><a href="#editclients"><img src="icones/editer.png" style="border:0px;width:18px;" onclick="editclient('+id+');"></a>&nbsp;<img src="icones/delete.png" style="border:0px;width:18px;" onclick="suppclientbis('+id+');">&nbsp;<img src="icones/plus.png" style="border:0px;width:18px;" onclick="affectclient('+id+',1);"></td></tr>';
                                 }
                                 
                                 document.getElementById('mesclientbis').innerHTML=listeclientbis;
                                 //document.getElementById('clientes').innerHTML=clientes;
                                 
                                 });
                   
                   });
}




function searchclient() {
    
    
    db.transaction(function(tx) {
                   tx.executeSql(searchClient, [sessionStorage.getItem('userdoglina'),document.getElementById('search1').value,document.getElementById('search1').value,document.getElementById('search1').value,document.getElementById('search1').value], function(tx, result) {
                                 dataset = result.rows;
                                 var clientes = '';
                                 var listeclientbis = '<table  cellspacing="0" border="1" style="width:870px;font-size:16px;border-collapse:collapse;"><tr style="background-color:#370a0c;color:white;height:25px;"><td align="center" width="12%"><b>Code</b></td><td align="center" width="7%"><b>Sexe</b></td><td align="center" width="20%"><b>Nom</b></td><td align="center" width="20%"><b>Pr&eacute;nom</b></td><td align="center" width="18%"><b>T&eacute;l&eacute;phone</b></td><td align="center" width="15%"><b>Magasin</b></td><td align="center" width="8%"><b>&nbsp;</b></td></tr>';//alert(dataset.length);
                                 for (i = 0, item = null; i < dataset.length; i++) {
                                 item = dataset.item(i);if(i%2==0) var coli='#dfdfdf';else var coli='#fff';
                                 var id=item['id'];nom=item['nom'];prenom=item['prenom'];email=item['email'];phone=item['phone'];sexe=item['sexe'];code=item['code'];
                                 magasin=item['intitule'];nomprenom=item['nom']+' '+item['prenom'];
                                 if(sexe==0) sexee='Mlle';else if(sexe==1) sexee='MMe';else sexee='Mr';
                                 clientes += '<option value='+nomprenom+' />';
                                 listeclientbis += '<tr style="font-size:14px;;color:black" bgcolor="'+coli+'"><td align="center"><b>'+code+'</b></td><td align="center" ><b>'+sexee+'</b></td><td align="center" ><b>'+nom+'</b></td><td align="center"><b>'+prenom+'</b></td><td align="center"><b>'+phone+'</b></td><td align="center"><b>'+magasin+'</b></td><td align="center"><a href="#editclients"><img src="icones/editer.png" style="border:0px;width:18px;" onclick="editclient('+id+');"></a>&nbsp;<img src="icones/delete.png" style="border:0px;width:18px;" onclick="suppclientbis('+id+');">&nbsp;<img src="icones/plus.png" style="border:0px;width:18px;" onclick="affectclient('+id+',1);"></td></tr>';
                                 }
                                 listeclientbis += '</table>';
                                 document.getElementById('mesclientbis').innerHTML=listeclientbis;
                                 
                                 
                                 
                                 });
                   
                   });
}






function connecthome() {	
	document.getElementById('mahome').innerHTML='<div style="text-align:center;padding-top:0px;"><img src="pictures/loadinglargeur.gif"></div>';  
    db.transaction(function(tx) {
                   var passes=md5('caissier'+document.getElementById('login_passwd').value+'dog');
                   tx.executeSql(verifStatement, [document.getElementById('login_username').value,passes,'1'], loadAndResetss, onError);
                   }); 
}


function deleteRecord(id) {
    db.transaction(function(tx) {
                   tx.executeSql(deleteStatement, [id], showRecords, onError);
                   });
    resetForm();
}

function dropTable() {
    db.transaction(function(tx) {
                   tx.executeSql(dropStatement, [], showRecords, onError);
                   });
    resetForm();
}

function loadAndReset(){
    resetForm();
}

function loadAndResetss(){
    resetForm();
    setTimeout("showRecords()",2000);
}


function loadAndResets()
{
}

function resetForm(){
	
	
}

function verifuser()
{
    //sessionStorage.removeItem("userdoglina");
    regler(3,111);
    if(sessionStorage.getItem('userdoglina')==1){
        document.getElementById('userdog').value=sessionStorage.getItem('userdoglina');
        hotdog(1);//validercf();
        document.getElementById("bloc1").style.visibility='hidden';
        document.getElementById("bloc1").style.height='0px';
        document.getElementById("bloc1").style.width='0px';
        document.getElementById("bloc2").style.visibility='visible';
        document.getElementById("bloc2").style.height='auto';
        document.getElementById("bloc2").style.width='auto';
        //document.getElementById("slidedownmenu").style.visibility='visible';
        document.getElementById("listeproduit").style.visibility='visible';
        document.getElementById('login_passwd').value='';
        document.getElementById('login_username').value='';
        produitpanier();
        showfamille();
        listeclients();
        listeremises();
        indispensables();
        affectclient(1,0);
        validercf();
    }
    else 			{
        document.getElementById('login_passwd').value='';
        document.getElementById('login_username').value='';
        document.getElementById("bloc1").style.visibility='visible';
        document.getElementById("bloc1").style.height='auto';
        document.getElementById("bloc1").style.width='auto';
        document.getElementById("section1").style.visibility='hidden';
        document.getElementById("section1").style.height='0px';
        document.getElementById("section2").style.visibility='hidden';
        document.getElementById("section2").style.height='0px';
        document.getElementById("listeproduit").style.visibility='hidden';						
    }
    
}

function deconnexionverifuser()
{
    regler(3,111);
    sessionStorage.removeItem("userdoglina");
    sessionStorage.removeItem("typedoglina");
    sessionStorage.removeItem("nomuserdoglina");
    sessionStorage.removeItem("magasinuserdoglina");
    sessionStorage.removeItem("nommagasinuserdoglina");
    sessionStorage.removeItem("typemagasindoglina");
    sessionStorage.removeItem("pointfidelitedoglina");
    sessionStorage.removeItem("idcommandeuserdoglina");
    sessionStorage.removeItem("clientdoglina");
    sessionStorage.removeItem("clientcodedoglina");
    sessionStorage.removeItem("clientcommande");
    sessionStorage.removeItem("idcommandeuserdoglina");
    sessionStorage.removeItem("nomuserclientdoglina");
    document.getElementById("bloc1").style.visibility='visible';
    document.getElementById("bloc1").style.height='768px';
    document.getElementById("bloc1").style.width='auto';
    document.getElementById("bloc2").style.visibility='hidden';
    document.getElementById("bloc2").style.height='0px';
    document.getElementById("bloc2").style.width='0px';
    //document.getElementById("slidedownmenu").style.visibility='hidden';
    document.getElementById('login_passwd').value='';
    document.getElementById('login_username').value='';
    document.getElementById('mahome').innerHTML='';
    
}



function validerpaye(vare,mp,me)
{
    
    document.getElementById('modepayer').value=mp;
    idencaissement();
    
    var montencaiee=document.getElementById('montantencaie').value;
    if(isNaN(montencaiee)) montencaiee=0;else if(montencaiee=='' || montencaiee==null) montencaiee=0;
    var montantencaiex=parseFloat(montencaiee);
    var montantdusx=parseFloat(document.getElementById('montantdus').value);
    
    if(montantdusx>0 && mp=='cf')
    {
    navigator.notification.vibrate(2000);
    navigator.notification.alert("Attention, Le montant de la CF est inferieur au montant global",null,'HOT DOG V1.0','OK');
    }
    else {
        
        if(mp=='esp' && (montantencaiex<montantdusx))
        {
           
			 navigator.notification.alert("Attention, Le montant saisie n'est pas bon",null,'HOT DOG V1.0','OK');
        }
        else {
		if(mp=='esp') {window.location.href="#mapass";window.location.href="#ticketvente2s";}
            
            db.transaction(function(tx) {
                           tx.executeSql(selectPaniers, [sessionStorage.getItem('userdoglina'),sessionStorage.getItem('magasinuserdoglina'),'0'], function(tx, result) {
                                         dataset = result.rows;
                                         var numberpanier=dataset.length;
                                         
                                         if(numberpanier>0) {
                                         
                                         
                                         
                                         //mtpaiement=document.getElementById('montantencaie').value;
                                         
                                         var pointe=document.getElementById('ptfids').value;
                                         if(isNaN(pointe)) pointe=0;else if(pointe=='' || pointe==null) pointe=0;
                                         var totalee=document.getElementById('totalfinal').value;
                                         if(isNaN(totalee)) totalee=0;else if(totalee=='' || totalee==null) totalee=0;
                                         
                                         
                                         //alert(mtpaiement);
                                         var mdpencais=1;var mdlivrer=1;//document.getElementById('montantencaie').value=200;
                                         if(mp=='esp')  { mdpencais=1;mtpaiement=document.getElementById('montantencaie').value;} else if(mp=='cb' && vare==0)  { mdpencais=2;document.getElementById('soldeencais').value=document.getElementById('montantdus').value;mtpaiement=document.getElementById('soldeencais').value;} else if(mp=='cf' && vare==0 && document.getElementById('usecredit').value==1 && totalee==0 && pointe!=0)  {  mdpencais=5;document.getElementById('soldeencais').value=document.getElementById('montantdus').value;mtpaiement=document.getElementById('soldeencais').value;} 	else if(mp=='cf') {
                                         mdpencais=5;document.getElementById('soldeencais').value=document.getElementById('montantdus').value;mtpaiement=document.getElementById('soldeencais').value;}else {mtpaiement=parseFloat(document.getElementById('montantencais').value);mdpencais=document.getElementById('mdpencais').options[document.getElementById('mdpencais').selectedIndex].value; }
                                         
                                         
                                         if(mp=='esp' || mp=='cb' || mp=='cf') mdlivrer=document.getElementById('livrez').value;
                                         else mdlivrer=document.getElementById('mdlivrer').options[document.getElementById('mdlivrer').selectedIndex].value;
                                         var montant3=document.getElementById('soldeencais').value;montant3=parseFloat(montant3);
                                         //if(mp=='cb') montant3=0;
                                         //alert(montant3);
                                         //alert('suittt'+vare);
                                         if(montant3==0 || vare==5)
                                         {
                                         //if(confirm("Etes vous sur de vouloir valider cet encaissement"))	{
                                         
                                         var neencais=document.getElementById('neencais').value;
                                         var dateeencais=document.getElementById('dateeencais').value;
                                         var clienteencais=document.getElementById('clienteencais').value;
                                         var totaleencais=parseFloat(document.getElementById('totaleencais').value);
                                         
                                         
                                         db.transaction(function(tx) {
                                                        
                                                        Today = new Date;
                                                        Jour = Today.getDate();if(Jour<10) Jour='0'+Jour;
                                                        Mois = (Today.getMonth())+1;if(Mois<10) Mois='0'+Mois;
                                                        Annee = Today.getFullYear();
                                                        Heure = Today.getHours();if(Heure<10) Heure='0'+Heure;
                                                        Minutes = Today.getMinutes();if(Minutes<10) Minutes='0'+Minutes;
                                                        Secondes = Today.getSeconds();if(Secondes<10) Secondes='0'+Secondes;
                                                        
                                                        if(document.getElementById('dateeencais').value=='') document.getElementById('dateeencais').value=Annee + "-" + Mois + "-" + Jour;
                                                        dateeencaiss = document.getElementById('dateeencais').value+" "+Heure+":"+Minutes+":"+Secondes;
                                                        
                                                        tx.executeSql(insertEncaissement, [document.getElementById('neencais').value,document.getElementById('dateeencais').value,sessionStorage.getItem('magasinuserdoglina'),sessionStorage.getItem('clientdoglina'),totaleencais,dateeencaiss,sessionStorage.getItem('userdoglina'),0], loadAndReset, onError);
                                                        
                                                        db.transaction(function(tx) {
                                                                       
                                                                       db.transaction(function(tx) {tx.executeSql(maxCommande, [sessionStorage.getItem('userdoglina'),sessionStorage.getItem('magasinuserdoglina')], function(tx, result) {
                                                                                                                  dataset = result.rows;
                                                                                                                  item = dataset.item(0);
                                                                                                                  if(!isNaN(item['maxis'])) nanes=item['maxis']; else nanes=0;
                                                                                                                  if(nanes==null) nanes=0;	
                                                                                                                  var commande=parseInt(parseInt(nanes)+1);
                                                                                                                  
                                                                                                                  db.transaction(function(tx) {
                                                                                                                                 
                                                                                                                                 
                                                                                                                                 tx.executeSql(insertCommande, [commande,sessionStorage.getItem('userdoglina'),sessionStorage.getItem('clientdoglina'),sessionStorage.getItem('magasinuserdoglina'),document.getElementById('neencais').value,document.getElementById('duencais').value,dateeencaiss,mdlivrer,0,0], loadAndReset, onError);
                                                                                                                                 var toti=document.getElementById('duencais').value;
                                                                                                                                 monclient(sessionStorage.getItem('clientdoglina'));
                                                                                                                                 document.getElementById('duencais').value='0.00';
                                                                                                                                 document.getElementById('montantdus').value=document.getElementById('duencais').value;
                                                                                                                                 var dudu=number_format(parseFloat(document.getElementById('montantdus').value), 2, '.', '');
                                                                                                                                 document.getElementById('dudus').innerHTML='<a class="super monaiex pink" href="#" style="font-size:30px;font-weight:bold;color:#000;letter-spacing:5px;" onclick="regler(0,'+dudu+');">'+dudu+'</a>';
                                                                                                                                 document.getElementById('encais').value='0.00';
                                                                                                                                 document.getElementById('montantencaie').value=document.getElementById('encais').value;
                                                                                                                                 document.getElementById('soldeencais').value='0.00';
                                                                                                                                 //document.getElementById('montantencaie').value='0							
                                                                                                                                 
                                                                                                                                 db.transaction(function(tx) {
                                                                                                                                                
                                                                                                                                                tx.executeSql(updateRemisen, [1,commande,sessionStorage.getItem('userdoglina'),sessionStorage.getItem('magasinuserdoglina'),0], loadAndReset, onError);});
                                                                                                                                 pointclient(toti,commande);
                                                                                                                                 
                                                                                                                                 });			
                                                                                                                  
                                                                                                                  db.transaction(function(tx) {
                                                                                                                                 
                                                                                                                                 totalavecremise(1,commande);
                                                                                                                                 tx.executeSql(updatePaniers, ['1',commande,sessionStorage.getItem('userdoglina'),'0'], loadAndReset, onError);
                                                                                                                                 });
                                                                                                                  panierpain(commande,dateeencaiss);
                                                                                                                  
                                                                                                                  sessionStorage.setItem('pointfidelitedoglina', document.getElementById('mtfidelpoint').value);
                                                                                                                  idencaissement();
                                                                                                                  produitpanier();
                                                                                                                  sessionStorage.setItem('idcommandeuserdoglina', commande);
                                                                                                               //   ticketcaisse(commande,sessionStorage.getItem('userdoglina'),sessionStorage.getItem('magasinuserdoglina'));
                                                                                                                  
                                                                                                               //   $("#poverticket").click();
																											  
                                                                                                                  ticketcaisses(commande,sessionStorage.getItem('userdoglina'),sessionStorage.getItem('magasinuserdoglina'),0);
                                                                                                                  //setTimeout(imprimer_ticket(commande,'Ticket de caisse', 'ticketcaisse'),10000);
                                                                                                                  
                                                                                                                  });
                                                                                      
                                                                                      
                                                                                      
                                                                                      
                                                                                      });
                                                                       });
                                                        
                                                        });
                                         
                                         
                                         //	}
                                         
                                         
                                         
                                         }
                                         else
                                         {
                                         
                                         var neencais=document.getElementById('neencais').value;
                                         //var dateeencais=document.getElementById('dateeencais').options[document.getElementById('dateeencais').selectedIndex].value;
                                         var dateeencais=document.getElementById('dateeencais').value;
                                         
                                         var clienteencais=document.getElementById('clienteencais').value;
                                         var totaleencais=parseFloat(document.getElementById('totaleencais').value);
                                         
                                         var mtpaiementt=parseFloat(mtpaiement);var mtpaiementte=parseFloat(mtpaiement);
                                         if(mp!='esp') var encale=document.getElementById('encais').value;
                                         else var encale=parseFloat(parseFloat(document.getElementById('encais').value)-parseFloat(mtpaiementt));
                                         //alert('mt'+mtpaiement);alert('encale'+encale);
                                         mtpaiement=parseFloat(mtpaiement)+parseFloat(encale);//alert(mtpaiement);
                                         
                                         //	encale=parseFloat(encale)+parseFloat(mtpaiement);
                                         //rende=parseFloat(mtpaiement)-parseFloat(montant3);alert(mtpaiement+'bbb'+montant3);
                                         rende=parseFloat(mtpaiement);
                                         montant33=parseFloat(document.getElementById('montantdus').value);
                                         //alert(rende+'R'+montant33);
                                         mtpaiementtt=parseFloat(document.getElementById('montantencais').value);
                                         if(rende>montant33 && vare!='-1') 
                                         {
                                         var rendea=parseFloat(rende)-parseFloat(montant33);
                                         var rendee=number_format(parseFloat(rendea), 2, '.', '');
                                         if(mp!='cb') 
										 {
										
										  navigator.notification.alert("Attention, Vous devrez lui rendre "+rendee+" DHS.",null,'HOT DOG V1.0','OK');
										 window.location.href="#mapass";window.location.href="#ticketvente2s";
										//  $(".mapas").click();
										  }
                                         mtpaiementtt=parseFloat(parseFloat(montant33)-parseFloat(document.getElementById('encais').value));
                                         }
                                         if(rende==montant33) { document.getElementById('soldeencais').value=mtpaiementt;//mtpaiementt=montant33;
                                         mtpaiementtt=mtpaiementte;//alert('kkk'+mtpaiementtt);
                                         }
                                         //else {
                                         
                                         var duencais=parseFloat(document.getElementById('duencais').value);
                                         var encais=parseFloat(document.getElementById('encais').value);
                                         if(encais>0) encais=0;
                                         
                                         var reste=parseFloat(duencais-encais-mtpaiementt);
                                         
                                         document.getElementById('soldeencais').value=reste.toFixed(2);
                                         
                                         Today = new Date;
                                         Jour = Today.getDate();if(Jour<10) Jour='0'+Jour;
                                         Mois = (Today.getMonth())+1;if(Mois<10) Mois='0'+Mois;
                                         Annee = Today.getFullYear();
                                         Heure = Today.getHours();if(Heure<10) Heure='0'+Heure;
                                         Minutes = Today.getMinutes();if(Minutes<10) Minutes='0'+Minutes;
                                         Secondes = Today.getSeconds();if(Secondes<10) Secondes='0'+Secondes;
                                         dateCreation = Annee + "-" + Mois + "-" + Jour+" "+Heure+":"+Minutes+":"+Secondes;
                                         
                                         db.transaction(function(tx) {tx.executeSql(maxEtatencaissement, [], function(tx, result) {
                                                                                    dataset = result.rows;
                                                                                    item = dataset.item(0);
                                                                                    if(!isNaN(item['maxiss'])) nanes=item['maxiss']; else nanes=0;
                                                                                    if(nanes==null) nanes=0;	
                                                                                    var maxis=parseInt(parseInt(nanes)+1);
                                                                                    
                                                                                    if(mp=='esp') mtpaiementtt=montant33;
                                                                                    db.transaction(function(tx) {
                                                                                                   Today = new Date;
                                                                                                   Jour = Today.getDate();if(Jour<10) Jour='0'+Jour;
                                                                                                   Mois = (Today.getMonth())+1;if(Mois<10) Mois='0'+Mois;
                                                                                                   Annee = Today.getFullYear();
                                                                                                   Heure = Today.getHours();if(Heure<10) Heure='0'+Heure;
                                                                                                   Minutes = Today.getMinutes();if(Minutes<10) Minutes='0'+Minutes;
                                                                                                   Secondes = Today.getSeconds();if(Secondes<10) Secondes='0'+Secondes;
                                                                                                   dateCreation = Annee + "-" + Mois + "-" + Jour+" "+Heure+":"+Minutes+":"+Secondes;
                                                                                                   
                                                                                                   if(mtpaiementtt!='' && mtpaiementtt!='0'){
                                                                                                   tx.executeSql(insertEtatencaissement, [maxis,document.getElementById('neencais').value,mdpencais,mtpaiementtt,dateCreation,sessionStorage.getItem('magasinuserdoglina'),dateeencais,sessionStorage.getItem('userdoglina')], loadAndReset, onError);
																								   }
																								   else 
																								   {
																								    navigator.notification.alert("Vous devrez saisir une valeur positive",null,'HOT DOG V1.0','OK');
																									
																									}
                                                                                                   
                                                                                                   });
                                                                                    
                                                                                    db.transaction(function(tx) {tx.executeSql(sumEtatencaissement, [document.getElementById('neencais').value,sessionStorage.getItem('magasinuserdoglina'),sessionStorage.getItem('userdoglina')], function(tx, result) {
                                                                                                                               dataset = result.rows;
                                                                                                                               item = dataset.item(0);
                                                                                                                               var soldex=item['soldex'];
                                                                                                                               if(soldex=='') montantencaisse=0;else montantencaisse=soldex;
                                                                                                                               if(mp=='esp') montantencaisse=montant33;
                                                                                                                               document.getElementById('encais').value=number_format(parseFloat(montantencaisse), 2, '.', '');
                                                                                                                               document.getElementById("mee").innerHTML='ME : '+document.getElementById('encais').value+' DHs';
                                                                                                                               document.getElementById('montantencaie').value=document.getElementById('encais').value;
                                                                                                                               //alert(parseFloat(document.getElementById('encais').value)+'W'+parseFloat(duencais)+'fin');
                                                                                                                               if(parseFloat(document.getElementById('encais').value)>=parseFloat(duencais)){ validerpaye(5,mp,me);}
                                                                                                                               else if(rende==montant33) { validerpaye(0,mp,me);}
                                                                                                                               nosetatsencaissements();
                                                                                                                               });
                                                                                                   });
                                                                                    
                                                                                    
                                                                                    
                                                                                    
                                                                                    });
                                                        
                                                        
                                                        rendre=parseFloat(rende);//alert('rendre'+rendre);
                                                        if(rendre<=0 && vare!='-1') validerpaye(-1,mp,me);
                                                        });
                                         
                                         
                                         
                                         
                                         
                                         }
                                         
                                         }
                                         
                                         
                                         
                                         
                                         })});
            
        }
        
    }
    
}

function panierpain(commande,dateeencaiss)
{
    
    
    db.transaction(function(tx) {
                   
                   tx.executeSql(selectSumPani, [commande,sessionStorage.getItem('userdoglina'),sessionStorage.getItem('magasinuserdoglina'),'1','2'], function(tx, resulta) {
                                 
                                 dataset = resulta.rows;
                                 item = dataset.item(0);
                                 document.getElementById('mamaxi').value=item['qti'];
                                 db.transaction(function(tx) {
                                                
                                                tx.executeSql(insertPaniera, [commande,'1','0','0','0','PAIN','0',sessionStorage.getItem('userdoglina'),sessionStorage.getItem('userdoglina'),document.getElementById('mamaxi').value,'1',dateeencaiss,sessionStorage.getItem('magasinuserdoglina'),'0'], loadAndReset, onError);
                                                });
                                 
                                 
                                 } );
                   });
    
}


function fermer()
{
    if(confirm("Etes vous sur de vouloir quitter cette page")) window.location.href = document.getElementById('titrepayer').href;				
}


function monticket()
{
    options = "Width=300,Height=700" ;
    window.open( "ticket.html", "Ticket de caisse", options ) ;
}

function imprimer()
{
    if(confirm("Etes vous sur de vouloir imprimer votre ticket de caisse")) 
    {
        options = "Width=300,Height=700" ;
        window.open( "ticket.html", "Ticket de caisse", options ) ;
        //window.opener.fact(28,1);
        window.location.href = document.getElementById('titrepayer').href;	
        
    }
}

function codee(varr)
{
    varr=parseInt(varr);
    if(varr<10) return '00'+varr;else if(varr<100) return '0'+varr;else if(varr<1000) return varr;
}

function newclient()
{
    var sexeclient=document.getElementById('sexeclient').options[document.getElementById('sexeclient').selectedIndex].value;
    var magasinclient=document.getElementById('magasinclient').options[document.getElementById('magasinclient').selectedIndex].value;
    var nomclient=document.getElementById("nomclient").value;
    var prenomclient=document.getElementById("prenomclient").value;
    var emailclient=document.getElementById("emailclient").value;
    var phoneclient=document.getElementById("phoneclient").value;
    var adresseclient=document.getElementById("adresseclient").value;
    var dateclient=document.getElementById("dateclient").value;
    var codeclient=document.getElementById("codeclient").value;
    var message ='';
    if(nomclient=='' || codeclient=='') 
    {
        if(nomclient=='') message += "Nom client obligatoire\n"; 
        if(codeclient=='') message += "Code client obligatoire\n"; 
    }
    if(message!='')
    {
        alert(message);
		 navigator.notification.alert("Attention, Le montant de la CF est inferieur au montant global",null,'HOT DOG V1.0','OK');
    }
    else
    {
        
        db.transaction(function(tx) {
                       tx.executeSql(verifClient, [codeclient], function(tx, result) {
                                     dataset = result.rows;
                                     if(dataset.length==0) {						
                                     
                                     db.transaction(function(tx) {tx.executeSql(maxClient, [sessionStorage.getItem('userdoglina'),sessionStorage.getItem('magasinuserdoglina')], function(tx, result) {
                                                                                dataset = result.rows;
                                                                                item = dataset.item(0);
                                                                                
                                                                                if(!isNaN(item['maxisss'])) nanes=item['maxisss']; else nanes=0;
                                                                                if(nanes==null) nanes=0;
                                                                                var maxis=parseInt(parseInt(nanes)+1);
                                                                                
                                                                                Today = new Date;
                                                                                Jour = Today.getDate();if(Jour<10) Jour='0'+Jour;
                                                                                Mois = (Today.getMonth())+1;if(Mois<10) Mois='0'+Mois;
                                                                                Annee = Today.getFullYear();
                                                                                Heure = Today.getHours();if(Heure<10) Heure='0'+Heure;
                                                                                Minutes = Today.getMinutes();if(Minutes<10) Minutes='0'+Minutes;
                                                                                Secondes = Today.getSeconds();if(Secondes<10) Secondes='0'+Secondes;
                                                                                dateCreation = Annee + "-" + Mois + "-" + Jour+" "+Heure+":"+Minutes+":"+Secondes;
                                                                                
                                                                                coder=dateCreation.substr(0,4)+dateCreation.substr(5,2)+dateCreation.substr(8,2);
                                                                                //codeclient=Annee+sessionStorage.getItem('userdoglina')+magasinclient+codee(maxis);
                                                                                
                                                                                db.transaction(function(tx) {
                                                                                               
                                                                                               tx.executeSql(insertClient, [maxis,codeclient,sexeclient,nomclient,prenomclient,emailclient,phoneclient,adresseclient,dateclient,magasinclient,sessionStorage.getItem('userdoglina'),dateCreation,dateCreation,1], loadAndReset, onError);
                                                                                               
                                                                                               document.getElementById("nomclient").value='';
                                                                                               document.getElementById("prenomclient").value='';
                                                                                               document.getElementById("emailclient").value='';
                                                                                               document.getElementById("phoneclient").value='';
                                                                                               document.getElementById("adresseclient").value='';				
                                                                                              
																							    navigator.notification.alert("Client cree avec succes",null,'HOT DOG V1.0','OK');
                                                                                               listeclients();
                                                                                               listeremises();
                                                                                               indispensables();	
                                                                                               //window.location.href = document.getElementById('closes').href;
                                                                                               //document.getElementById('poverclientnew').click();
                                                                                               $("#poverclientnew").click();
                                                                                               
                                                                                               });
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                })});
                                     }
                                     else 
									 {
									
									  navigator.notification.alert("Code client existe deja!",null,'HOT DOG V1.0','OK');
									  }
                                     })});
    }
    
    
}




function editclient(varr)
{
    $("#poverclients").click();
    document.getElementById("nomclientedit").value=varr;
    db.transaction(function(tx) {
                   tx.executeSql(InfoClient, [document.getElementById("nomclientedit").value], function(tx, result) {
                                 dataset = result.rows;
                                 
                                 for (i = 0, item = null; i < dataset.length; i++) {
                                 item = dataset.item(i);
                                 var id=item['id'];nom=item['nom'];prenom=item['prenom'];email=item['email'];phone=item['phone'];
                                 sexe=item['sexe'];code=item['code'];magasin=item['magasin'];
                                 
                                 
                                 var mesmagasinss='';
                                 db.transaction(function(tx) {
                                                tx.executeSql(selectMagasin, [], function(tx, result) {
                                                              dataset = result.rows;
                                                              for (i = 0, item = null; i < dataset.length; i++) {
                                                              item = dataset.item(i);
                                                              idmagasin = item['id'];
                                                              intitulemagasin = item['intitule'];
                                                              mesmagasinss += '<option value='+idmagasin+'>'+intitulemagasin+'</option>';
                                                              }
                                                              document.getElementById('magasinclients').innerHTML = mesmagasinss;			
                                                              
                                                              });
                                                
                                                });
                                 mesexes='<option value="0">Mlle</option><option value="1">MMe</option><option value="2" >Mr</option>';
                                 if(sexe==0) mesexes = '<option value="0" selected=selected>Mlle</option><option value="1">MMe</option><option value="2">Mr</option>';
                                 else if(sexe==1) mesexes = '<option value="0">Mlle</option><option value="1" selected=selected>MMe</option><option value="2">Mr</option>';
                                 else mesexes = '<option value="0">Mlle</option><option value="1">MMe</option><option value="2" selected=selected>Mr</option>';
                                 //alert(mesexes);	
                                 document.getElementById("nomclients").value=item['nom'];
                                 document.getElementById("prenomclients").value=item['prenom'];
                                 document.getElementById("emailclients").value=item['email'];
                                 document.getElementById("phoneclients").value=item['phone'];
                                 document.getElementById("adresseclients").value=item['adresse']	;
                                 document.getElementById("dateclients").value=item['dateNaissance'];
                                 document.getElementById("sexeclients").innerHTML=mesexes;
                                 }
                                 
                                 
                                 
                                 });
                   
                   });
    
    
}

function neweditclient()
{
    var sexeclient=document.getElementById('sexeclients').options[document.getElementById('sexeclients').selectedIndex].value;
    var magasinclient=document.getElementById('magasinclients').options[document.getElementById('magasinclients').selectedIndex].value;
    var nomclient=document.getElementById("nomclients").value;
    var prenomclient=document.getElementById("prenomclients").value;
    var emailclient=document.getElementById("emailclients").value;
    var phoneclient=document.getElementById("phoneclients").value;
    var adresseclient=document.getElementById("adresseclients").value;
    var dateclient=document.getElementById("dateclients").value;
    if(nomclient=='') 
    {
       
		 navigator.notification.alert("Nom client obligatoire",null,'HOT DOG V1.0','OK');
    }
    else
    {
        
        
        Today = new Date;
        Jour = Today.getDate();if(Jour<10) Jour='0'+Jour;
        Mois = (Today.getMonth())+1;if(Mois<10) Mois='0'+Mois;
        Annee = Today.getFullYear();
        Heure = Today.getHours();if(Heure<10) Heure='0'+Heure;
        Minutes = Today.getMinutes();if(Minutes<10) Minutes='0'+Minutes;
        Secondes = Today.getSeconds();if(Secondes<10) Secondes='0'+Secondes;
        dateCreation = Annee + "-" + Mois + "-" + Jour+" "+Heure+":"+Minutes+":"+Secondes;
        
        
        
        db.transaction(function(tx) {
                       tx.executeSql(updateClient, [sexeclient,nomclient,prenomclient,emailclient,phoneclient,adresseclient,dateclient,magasinclient,sessionStorage.getItem('userdoglina'),dateCreation,document.getElementById("nomclientedit").value], loadAndReset, onError);
                       
                       document.getElementById("nomclients").value='';
                       document.getElementById("prenomclients").value='';
                       document.getElementById("emailclients").value='';
                       document.getElementById("phoneclients").value='';
                       document.getElementById("adresseclients").value='';	
                       listeclients();
                       listeremises();
                       indispensables();				
                     
					    navigator.notification.alert("Client edite avec succes",null,'HOT DOG V1.0','OK');
                       window.location.href = document.getElementById('closes').href;
                       
                       });
        
        
    }
    
}


function suppclientbis(client)
{
    if(client==1) client=0;
    if(confirm("Etes vous sur de vouloir supprimer ce client"))
    {
        document.getElementById("nomclientedit").value=client;
        db.transaction(function(tx) {
                       
                       tx.executeSql(deleteClient, [document.getElementById("nomclientedit").value], loadAndReset, onError);
                       listeclients();				
                       
					    navigator.notification.alert("Client supprime avec succes",null,'HOT DOG V1.0','OK');
                       //window.location.href = document.getElementById('close').href;
                       //document.getElementById('poverclients').click();
                       
                       });
        
        
    }
    
}


function suppremisebis(remis)
{
    
    if(confirm("Etes vous sur de vouloir supprimer cette remise"))
    {
        document.getElementById("nomclientedit").value=remis;
        db.transaction(function(tx) {
                       
                       tx.executeSql(deleteRemise, [document.getElementById("nomclientedit").value,sessionStorage.getItem('userdoglina'),sessionStorage.getItem('magasinuserdoglina'),0], loadAndReset, onError);
                       totalavecremise(0,0);
                       listeremises();				
                       //alert(document.getElementById("nomclientedit").value+'+'+sessionStorage.getItem('userdoglina')+'+'+sessionStorage.getItem('magasinuserdoglina')+'+'+0);
                       //window.location.href = document.getElementById('closerem').href;
                       
                       });
        
        
    }
    
}



function affectclient(client,etat)
{
    
    if(client!=0) {
        document.getElementById("nomclientedit").value=client;
        db.transaction(function(tx) {
                       tx.executeSql(InfoClient, [document.getElementById("nomclientedit").value], function(tx, result) {
                                     dataset = result.rows;
                                     
                                     item = dataset.item(0);
                                     var id=item['id'];nom=item['nom'];prenom=item['prenom'];email=item['email'];phone=item['phone'];
                                     sexe=item['sexe'];code=item['code'];magasin=item['magasin'];
                                     
                                     document.getElementById("clienteencais").value=code;
                                     sessionStorage.setItem('clientdoglina', client);
                                     sessionStorage.setItem('clientcodedoglina', code);
                                     //sessionStorage.setItem('clientpointdoglina', point);
                                     document.getElementById("clientcommande").innerHTML='Client: '+nom;
                                     if(etat==1) $("#poverclients").click();							
                                     //window.location.href = document.getElementById('closes').href;	
                                     
                                     
                                     
                                     });
                       
                       });
    }
    
}

function modelivrer(mode)
{
    document.getElementById('mdlivrer').options[document.getElementById('mdlivrer').selectedIndex].value=mode;
    document.getElementById("livrez").value=mode;
    if(mode==2) document.getElementById('livrecommande').innerHTML='SUR PLACE';
    else document.getElementById('livrecommande').innerHTML='A EMPORTER';
}








