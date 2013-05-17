
 var selectAllStatement1s = "SELECT * FROM panier";
 var selectAllStatement2s = "SELECT * FROM caisse";
 var selectAllStatement3s = "SELECT * FROM client";
 var selectAllStatement4s = "SELECT * FROM remise";
 var selectAllStatement5s = "SELECT * FROM commande";
 var selectAllStatement6s = "SELECT * FROM encaissement";
 var selectAllStatement7s = "SELECT * FROM etatencaissement";
  var selectAllStatement8s = "SELECT * FROM etat_entree";
  var selectAllStatement9s = "SELECT * FROM etat_be";
  var selectAllStatement10s = "SELECT * FROM produitbt";

 var db = openDatabase("DOGAPP64", "64.0", "DOG APP IPAD 64", 200000);
 var dataset;
 
 function addslashes(ch) {
ch = ch.replace(/\\/g,"\\\\")
ch = ch.replace(/\'/g,"\\'")
ch = ch.replace(/\"/g,"\\\"")
return ch
}
      function onError(tx, error) {
       // alert(error.message);
      }
      
      function showRecords1s() {
	  
	  
						Today = new Date;
						Jour = Today.getDate();if(Jour<10) Jour='0'+Jour;
						Mois = (Today.getMonth())+1;if(Mois<10) Mois='0'+Mois;
						Annee = Today.getFullYear();
						Heure = Today.getHours();if(Heure<10) Heure='0'+Heure;
						Minutes = Today.getMinutes();if(Minutes<10) Minutes='0'+Minutes;
						Secondes = Today.getSeconds();if(Secondes<10) Secondes='0'+Secondes;
						dateMise = Annee + "-" + Mois + "-" + Jour+" "+Heure+":"+Minutes+":"+Secondes;
						
						
     document.getElementById('miseajour').innerHTML='<img src="pictures/loaderbis.gif" />';
        db.transaction(function(tx) {
          tx.executeSql(selectAllStatement1s, [], function(tx, result) {
			dataset = result.rows; var requete = "delete from archive_panier;delete from archive_caisse;delete from archive_client;delete from archive_remise;delete from archive_commande;delete from archive_encaissement;delete from archive_etatencaissement;delete from archive_etat_entree;delete from archive_etat_be;";
			if(dataset.length!=0) requete += "insdoglina INTO  archive_panier (  id ,  commande ,  session ,  produit ,  tva ,  libelle ,  prix ,  remise ,  client ,  vendeur ,  qte ,  etat ,  dateCreation ,  magasin  , `mise` ) VALUES ";
            for (var i = 0, item = null; i < dataset.length; i++) {
			item = dataset.item(i); 
           	  var id=item['id']; 
			  var commande=item['commande']; var session=item['session']; var produit=item['produit']; var tva=item['tva']; 
			  var libelle=escape(item['libelle']); var prix=item['prix']; var remise=item['remise']; var client='1'; var vendeur=item['vendeur'];
			  var qte=item['qte'];var etat=item['etat'];var dateCreation=item['dateCreation'];var magasin=item['magasin'];			   
			 requete += "  (NULL,  '"+commande+"','"+session+"','"+produit+"','"+tva+"','"+libelle+"','"+prix+"','"+remise+"','"+client+"','"+vendeur+"','"+qte+"','"+etat+"','"+dateCreation+"','"+magasin+"' ,'"+dateMise+"' )"; 
			 if(dataset.length!=parseFloat(i+1)) requete += ",";else requete += ";";
			}
			//if(dataset.length!=0) requete += ");";

					db.transaction(function(tx) {
          tx.executeSql(selectAllStatement2s, [], function(tx, result1) {
			dataset1 = result1.rows; 
           if(dataset1.length!=0) requete += "insdoglina INTO  archive_caisse (  id ,  vendeur ,  magasin ,  etat ,  entree ,  sortie ,  dateCreation  , `mise` ) VALUES ";
		   for (var i = 0, item = null; i < dataset1.length; i++) {
			item1 = dataset1.item(i); 			   
			 requete +=  " ('"+item1['id']+"', '"+item1['vendeur']+"', '"+item1['magasin']+"', '"+item1['etat']+"', '"+item1['entree']+"', '"+item1['sortie']+"','"+item1['dateCreation']+"' ,'"+dateMise+"') "; 
			 if(dataset1.length!=parseFloat(i+1)) requete += ",";else requete += ";";
			 
			 }
			 
			 	db.transaction(function(tx) {
          tx.executeSql(selectAllStatement3s, [], function(tx, result2) {
			dataset2 = result2.rows;
			if(dataset2.length!=0) requete += "insdoglina INTO archive_client (id, code, sexe, nom, prenom, email, phone, adresse, dateNaissance, magasin, utilisateur, dateCreation, dateModification, point, etat , mise, avant ) VALUES ";
            for (var j = 0, item = null; j < dataset2.length; j++) {
			item2 = dataset2.item(j); 			   
			 requete += " ('"+item2['id']+"', '"+item2['code']+"', '"+item2['sexe']+"', '"+escape(item2['nom'])+"', '"+escape(item2['prenom'])+"', '"+item2['email']+"', '"+item2['phone']+"', '"+escape(item2['adresse'])+"', '"+item2['dateNaissance']+"', '"+item2['magasin']+"', '"+item2['utilisateur']+"', '"+item2['dateCreation']+"', '"+item2['dateModification']+"','"+item2['point']+"','"+item2['etat']+"' ,'"+dateMise+"','"+item2['avant']+"') "; 
			 if(dataset2.length!=parseFloat(j+1)) requete += ",";else requete += ";";
			 }
			
			 
			 db.transaction(function(tx) {
          tx.executeSql(selectAllStatement4s, [], function(tx, result3) {
			dataset3 = result3.rows;
			if(dataset3.length!=0) requete += " insdoglina INTO  archive_remise (  id ,  client ,  vendeur ,  pourcentage ,  montant ,  magasin ,  commande ,  etat ,  dateCreation ,  type  , `mise` ) VALUES ";
            for (var i = 0, item = null; i < dataset3.length; i++) {
			item3 = dataset3.item(i); 			   
			 requete += " ('"+item3['id']+"', '"+item3['client']+"', '"+item3['vendeur']+"', '"+item3['pourcentage']+"', '"+item3['montant']+"', '"+item3['magasin']+"', '"+item3['commande']+"', '"+item3['etat']+"', '"+item3['dateCreation']+"', '"+item3['type']+"' ,'"+dateMise+"')"; 
			 if(dataset3.length!=parseFloat(i+1)) requete += ",";else requete += ";";
			 }
			 
			  
			  
			   db.transaction(function(tx) {
          tx.executeSql(selectAllStatement5s, [], function(tx, result4) {
			dataset4 = result4.rows;
			if(dataset4.length!=0) requete += " insdoglina INTO  `archive_commande` (  `id` ,  `vendeur` ,  `client` ,  `magasin` ,  `encaissement` ,  `montant` , `total` ,  `dateCreation` ,  `livraison` ,  `type` , `mise` ) VALUES ";
            for (var i = 0, item = null; i < dataset4.length; i++) {
			item4 = dataset4.item(i); 			   
			 requete += " ('"+item4['id']+"', '"+item4['vendeur']+"', '"+item4['client']+"', '"+item4['magasin']+"', '"+item4['encaissement']+"', '"+item4['montant']+"', '"+item4['total']+"', '"+item4['dateCreation']+"', '"+item4['livraison']+"', '"+item4['type']+"' ,'"+dateMise+"')"; 
			
			  if(dataset4.length!=parseFloat(i+1)) requete += ",";else requete += ";";
			  }
			 
			  
			  
			   db.transaction(function(tx) {
          tx.executeSql(selectAllStatement6s, [], function(tx, result5) {
			dataset5 = result5.rows;
			if(dataset5.length!=0) requete += " insdoglina INTO  `archive_encaissement` (  `id` ,  `date` ,  `magasin` ,  `client` ,  `montant` ,  `dateCreation` ,  `vendeur` ,  `commande`  , `mise` )  VALUES ";
            for (var i = 0, item = null; i < dataset5.length; i++) {
			item5 = dataset5.item(i); 			   
			 requete += " ('"+item5['id']+"', '"+item5['date']+"', '"+item5['magasin']+"', '"+item5['client']+"', '"+item5['montant']+"', '"+item5['dateCreation']+"', '"+item5['vendeur']+"', '"+item5['commande']+"' ,'"+dateMise+"')"; 
			 if(dataset5.length!=parseFloat(i+1)) requete += ",";else requete += ";";
			 }
			 
			    db.transaction(function(tx) {
          tx.executeSql(selectAllStatement8s, [], function(tx, result8) {
			dataset8 = result8.rows;
			if(dataset8.length!=0) requete += " insdoglina INTO  `archive_etat_entree` (  `id` , `fournisseur` , `produit` ,  `quantite` , `dateCreation` , `vendeur` , `etat` , `commentaire`  , `mise`  )  VALUES ";
            for (var i = 0, item = null; i < dataset8.length; i++) {
			item8 = dataset8.item(i); 			   
			 requete += " ('NULL','"+item8['fournisseur']+"', '"+item8['produit']+"', '"+item8['quantite']+"', '"+item8['dateCreation']+"', '"+item8['vendeur']+"', '"+item8['etat']+"', '"+item8['commentaire']+"' ,'"+dateMise+"')"; 
			 if(dataset8.length!=parseFloat(i+1)) requete += ",";else requete += ";";
			 }
			 
			 db.transaction(function(tx) {
          tx.executeSql(selectAllStatement9s, [], function(tx, result9) {
			dataset9 = result9.rows;
			if(dataset9.length!=0) requete += " insdoglina INTO  `archive_etat_be` (  `id` , `produit` , `type` ,  `quantite` , `dateCreation` , `vendeur` , `magasin` , `etat` , `statut` , `commentaire`  , `mise`  )  VALUES ";
            for (var i = 0, item = null; i < dataset9.length; i++) {
			item9 = dataset9.item(i); 			   
			 requete += " ('NULL','"+item9['produit']+"', '"+item9['type']+"', '"+item9['quantite']+"', '"+item9['dateCreation']+"', '"+item9['vendeur']+"', '"+item9['magasin']+"', '"+item9['etat']+"', '"+item9['statut']+"', '"+item9['commentaire']+"' ,'"+dateMise+"')"; 
			 if(dataset9.length!=parseFloat(i+1)) requete += ",";else requete += ";";
			 }
			 
					
			 
			requete += " insdoglina INTO  `archive_vendeur` (  `id` , `vendeur` , `magasin` , `dateModification`)  VALUES ('NULL','"+sessionStorage.getItem('userdoglina')+"', '"+sessionStorage.getItem('magasinuserdoglina')+"' ,'"+dateMise+"');"; 
			


			 
			  
			   db.transaction(function(tx) {
          tx.executeSql(selectAllStatement7s, [], function(tx, result6) {
			dataset6 = result6.rows;
			if(dataset6.length!=0) requete += " insdoglina INTO  `archive_etatencaissement` (  `id` ,  `encaissement` ,  `modepaiement` ,  `solde` ,  `dateCreation` ,  `magasin` ,  `dateEncais` ,  `vendeur`  , `mise` ) VALUES ";
            for (var i = 0, item = null; i < dataset6.length; i++) {
			item6 = dataset6.item(i); 			   
			 requete += " ('"+item6['id']+"', '"+item6['encaissement']+"', '"+item6['modepaiement']+"', '"+item6['solde']+"', '"+item6['dateCreation']+"', '"+item6['magasin']+"', '"+item6['dateEncais']+"', '"+item6['vendeur']+"','"+dateMise+"')"; 
			 if(dataset6.length!=parseFloat(i+1)) requete += ",";else requete += ";";
			 
			  
			}
			document.getElementById('userIds').value=requete;ajaxpost1();
			})});
			
			//})});
			})});	})});})});})});})}); })}); })}); })});
		
		
	
      }
	  
	  
	   function showRecords2s() {
						
						Today = new Date;
						Jour = Today.getDate();if(Jour<10) Jour='0'+Jour;
						Mois = (Today.getMonth())+1;if(Mois<10) Mois='0'+Mois;
						Annee = Today.getFullYear();
						Heure = Today.getHours();if(Heure<10) Heure='0'+Heure;
						Minutes = Today.getMinutes();if(Minutes<10) Minutes='0'+Minutes;
						Secondes = Today.getSeconds();if(Secondes<10) Secondes='0'+Secondes;
						dateMise = Annee + "-" + Mois + "-" + Jour+" "+Heure+":"+Minutes+":"+Secondes;
	  
     
       document.getElementById('miseajour').innerHTML='<img src="pictures/loaderbis.gif" />';
			
			    			    db.transaction(function(tx) {
          tx.executeSql(selectAllStatement8s, [], function(tx, result8) {
			dataset8 = result8.rows;
			var requete = "delete from archive_etat_entree;delete from archive_etat_be;";
			if(dataset8.length!=0) requete += " insdoglina INTO  `archive_etat_entree` (  `id` , `fournisseur` , `produit` ,  `quantite` , `dateCreation` , `vendeur` , `etat` , `commentaire` , `mise` )  VALUES ";
            for (var i = 0, item = null; i < dataset8.length; i++) {
			item8 = dataset8.item(i); 			   
			 requete += " ('NULL','"+item8['fournisseur']+"', '"+item8['produit']+"', '"+item8['quantite']+"', '"+item8['dateCreation']+"', '"+item8['vendeur']+"', '"+item8['etat']+"', '"+item8['commentaire']+"' ,'"+dateMise+"')"; 
			 if(dataset8.length!=parseFloat(i+1)) requete += ",";else requete += ";";
			 }
			
			 db.transaction(function(tx) {
          tx.executeSql(selectAllStatement9s, [], function(tx, result9) {
			dataset9 = result9.rows;
			if(dataset9.length!=0) requete += " insdoglina INTO  `archive_etat_be` (  `id` , `produit` , `type` ,  `quantite` , `dateCreation` , `vendeur` , `magasin` , `etat` , `statut` , `commentaire` , `mise`   )  VALUES ";
            for (var i = 0, item = null; i < dataset9.length; i++) {
			item9 = dataset9.item(i); 			   
			 requete += " ('NULL','"+item9['produit']+"', '"+item9['type']+"', '"+item9['quantite']+"', '"+item9['dateCreation']+"', '"+item9['vendeur']+"', '"+item9['magasin']+"', '"+item9['etat']+"', '"+item9['statut']+"', '"+item9['commentaire']+"' ,'"+dateMise+"')"; 
			 if(dataset9.length!=parseFloat(i+1)) requete += ",";else requete += ";";
			 }
			 
			
			requete += " insdoglina INTO  `archive_vendeur` (  `id` , `vendeur` , `magasin` , `dateModification`)  VALUES ('NULL','"+sessionStorage.getItem('userdoglina')+"', '"+sessionStorage.getItem('magasinuserdoglina')+"' ,'"+dateMise+"');"; 
			
			
			document.getElementById('userIds').value=requete;ajaxpost2();
			
			})});
			
			
			})});
      }
	  
	  
	  
	  
	   function showRecords3s() {
						
						Today = new Date;
						Jour = Today.getDate();if(Jour<10) Jour='0'+Jour;
						Mois = (Today.getMonth())+1;if(Mois<10) Mois='0'+Mois;
						Annee = Today.getFullYear();
						Heure = Today.getHours();if(Heure<10) Heure='0'+Heure;
						Minutes = Today.getMinutes();if(Minutes<10) Minutes='0'+Minutes;
						Secondes = Today.getSeconds();if(Secondes<10) Secondes='0'+Secondes;
						dateMise = Annee + "-" + Mois + "-" + Jour+" "+Heure+":"+Minutes+":"+Secondes;
	  
     
       document.getElementById('miseajour').innerHTML='<img src="pictures/loaderbis.gif" />';
			
			    			    db.transaction(function(tx) {
          tx.executeSql(selectAllStatement8s, [], function(tx, result8) {
			dataset8 = result8.rows;
			var requete = "delete from archive_etat_entree;";
			if(dataset8.length!=0) requete += " insdoglina INTO  `archive_etat_entree` (  `id` , `fournisseur` , `produit` ,  `quantite` , `dateCreation` , `vendeur` , `etat` , `commentaire` , `mise` )  VALUES ";
            for (var i = 0, item = null; i < dataset8.length; i++) {
			item8 = dataset8.item(i); 			   
			 requete += " ('NULL','"+item8['fournisseur']+"', '"+item8['produit']+"', '"+item8['quantite']+"', '"+item8['dateCreation']+"', '"+item8['vendeur']+"', '"+item8['etat']+"', '"+item8['commentaire']+"' ,'"+dateMise+"')"; 
			 if(dataset8.length!=parseFloat(i+1)) requete += ",";else requete += ";";
			 }
			
			
			
			requete += " insdoglina INTO  `archive_vendeur` (  `id` , `vendeur` , `magasin` , `dateModification`)  VALUES ('NULL','"+sessionStorage.getItem('userdoglina')+"', '"+sessionStorage.getItem('magasinuserdoglina')+"' ,'"+dateMise+"');"; 
			
			
			document.getElementById('userIds').value=requete;ajaxpost2();
			
		
			
			})});
      }
	  
	  
	  	   function showRecords4s() {
						
						Today = new Date;
						Jour = Today.getDate();if(Jour<10) Jour='0'+Jour;
						Mois = (Today.getMonth())+1;if(Mois<10) Mois='0'+Mois;
						Annee = Today.getFullYear();
						Heure = Today.getHours();if(Heure<10) Heure='0'+Heure;
						Minutes = Today.getMinutes();if(Minutes<10) Minutes='0'+Minutes;
						Secondes = Today.getSeconds();if(Secondes<10) Secondes='0'+Secondes;
						dateMise = Annee + "-" + Mois + "-" + Jour+" "+Heure+":"+Minutes+":"+Secondes;
	  
     
       document.getElementById('miseajour').innerHTML='<img src="pictures/loaderbis.gif" />';
			
		
			
			 db.transaction(function(tx) {
          tx.executeSql(selectAllStatement9s, [], function(tx, result9) {
			dataset9 = result9.rows;
			var requete = "delete from archive_etat_be;";
			if(dataset9.length!=0) requete += " insdoglina INTO  `archive_etat_be` (  `id` , `produit` , `type` ,  `quantite` , `dateCreation` , `vendeur` , `magasin` , `etat` , `statut` , `commentaire` , `mise`   )  VALUES ";
            for (var i = 0, item = null; i < dataset9.length; i++) {
			item9 = dataset9.item(i); 			   
			 requete += " ('NULL','"+item9['produit']+"', '"+item9['type']+"', '"+item9['quantite']+"', '"+item9['dateCreation']+"', '"+item9['vendeur']+"', '"+item9['magasin']+"', '"+item9['etat']+"', '"+item9['statut']+"', '"+item9['commentaire']+"' ,'"+dateMise+"')"; 
			 if(dataset9.length!=parseFloat(i+1)) requete += ",";else requete += ";";
			 }
			 
			
			requete += " insdoglina INTO  `archive_vendeur` (  `id` , `vendeur` , `magasin` , `dateModification`)  VALUES ('NULL','"+sessionStorage.getItem('userdoglina')+"', '"+sessionStorage.getItem('magasinuserdoglina')+"' ,'"+dateMise+"');"; 
			
			
			document.getElementById('userIds').value=requete;ajaxpost2();
			
		
			
			})});
      }
	  
	  
	  

function ajaxRequest(){
     var activexmodes=["Msxml2.XMLHTTP", "Microsoft.XMLHTTP"]; //activeX versions to check for in IE
     if (window.ActiveXObject){ //Test for support for ActiveXObject in IE first (as XMLHttpRequest in IE7 is broken)
      for (var i=0; i<activexmodes.length; i++){
       try{
        return new ActiveXObject(activexmodes[i]);
       }
       catch(e){
        //suppress error
       }
      }
     }
     else if (window.XMLHttpRequest) // if Mozilla, Safari etc
      return new XMLHttpRequest();
     else
      return false;
}
 
function ajaxpost1(){
                if(checkConnection()!='No network connection') {
    var mypostrequest=new ajaxRequest();
    mypostrequest.onreadystatechange=function(){
     if (mypostrequest.readyState==4){
      if (mypostrequest.status==200 || window.location.href.indexOf("http")==-1){
       document.getElementById("miseajour").innerHTML = mypostrequest.responseText;
      }
      else{
       alert("An error has occured making the request");
      }
     }
    }
    
    var userId = encodeURIComponent(document.getElementById("userIds").value);
	var userdog = sessionStorage.getItem('userdoglina');
    var parameters = "userdog="+userdog+"&userId="+userId;
	mypostrequest.open("POST", "http://www.linaweb.ma/hotdog/dog/export1.php", true);
    mypostrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    mypostrequest.send(parameters);
} else alert("Impossible de soumettres les données, problème de connexion!");  
}


function ajaxpost2(){
                if(checkConnection()!='No network connection') {
                
    var mypostrequest=new ajaxRequest();
    mypostrequest.onreadystatechange=function(){
     if (mypostrequest.readyState==4){
      if (mypostrequest.status==200 || window.location.href.indexOf("http")==-1){
       document.getElementById("miseajour").innerHTML = mypostrequest.responseText;
      }
      else{
       alert("An error has occured making the request");
      }
     }
    }
    
    var userId = encodeURIComponent(document.getElementById("userIds").value);
	var userdog = sessionStorage.getItem('userdoglina');
    var parameters = "userdog="+userdog+"&userId="+userId;
    mypostrequest.open("POST", "http://www.linaweb.ma/hotdog/dog/export2.php", true);
    mypostrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    mypostrequest.send(parameters);
                } else alert("Impossible de soumettres les données, problème de connexion!");                
}


function sendmap(){
                
                
                if(checkConnection()!='No network connection')
     {
    var mypostrequest=new ajaxRequest();
    mypostrequest.onreadystatechange=function(){
     if (mypostrequest.readyState==4){
      if (mypostrequest.status==200 || window.location.href.indexOf("http")==-1){
       document.getElementById("mapper").innerHTML = mypostrequest.responseText;
	   document.getElementById("mapper").innerHTML='Donn&eacute;es de g&eacute;olocalisation envoy&eacute;es avec succ&egrave;s';
      }
      else{
       alert("An error has occured making the request");
      }
     }
    }
    
	
    var monmaping = encodeURIComponent(document.getElementById("monmaping").innerHTML);
	var lieucharriot = encodeURIComponent(document.getElementById("lieucharriot").value);
	var userdog = sessionStorage.getItem('userdoglina');
	var magasindog = sessionStorage.getItem('magasinuserdoglina');
	var latitudes = encodeURIComponent(document.getElementById("latitudes").value);
	var longitudes = encodeURIComponent(document.getElementById("longitudes").value);
    var parameters = "userdog="+userdog+"&monmaping="+monmaping+"&lieucharriot="+lieucharriot+"&magasindog="+magasindog+"&latitudes="+latitudes+"&longitudes="+longitudes;
	document.getElementById("mapper").innerHTML="<img src='pictures/loadinglargeur.gif' style='border:0px;' />";
	mypostrequest.open("POST", "http://www.linaweb.ma/hotdog/sendmap.php", true);
    mypostrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    mypostrequest.send(parameters);
     } else alert("Impossible d'envoyer les données, problème de connexion!");
	
}