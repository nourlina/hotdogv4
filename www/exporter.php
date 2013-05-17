<?php require("verifuser.php");
$id=isset($_GET['id']) ? $_GET['id']:1;
	
			require_once ("scripts/connection.php");					
			require_once ("scripts/execrequete.php");	
			$connect = Connexion ();

header("Content-Type: application/vnd.ms-excel");
header("Expires: 0");
header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
$madate=date("d-m-Y H:i:s");$time=time();


	if($id==3)
	{
		
		header("content-disposition: attachment;filename=Historiquejoueur_$time.xls");
				$requete1wss3i="SELECT * from joueur where id='".$_SESSION['joueurdognour']."'";//echo $requete1w;
				$resultat1wss3i= ExecRequete($requete1wss3i, $connect);
				$ligne1wss3i=mysql_fetch_array($resultat1wss3i);
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='9'><br />Historique du joueur ".$ligne1wss3i['nom'].' '.$ligne1wss3i['prenom']." à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Identifiant</td><td align='center'>Club</td><td align='center'>Licence</td><td align='center'>Régime</td><td align='center'>Division</td><td align='center'>Statut</td><td align='center'>Saison</td><td align='center'>Date Qualification</td><td align='center'>Date de création</td></tr>";		
		$requete0=$_SESSION['requetestatutjoueur']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne0=mysql_fetch_array($resultat0)) {
		$cpt++;
				$requete1wss31="SELECT libelle from club where code='".$ligne0['club']."'";//echo $requete1w;
				$resultat1wss31= ExecRequete($requete1wss31, $connect);
				$ligne1wss31=mysql_fetch_array($resultat1wss31);
				
				$requete1wss32="SELECT libelle from division where id='".$ligne0['division']."'";//echo $requete1w;
				$resultat1wss32= ExecRequete($requete1wss32, $connect);
				$ligne1wss32=mysql_fetch_array($resultat1wss32);
				
				$requete1wss32dd="SELECT libelle from statutbis where id='".$ligne0['statutbis']."'";//echo $requete1w;
				$resultat1wss32dd= ExecRequete($requete1wss32dd, $connect);
				$ligne1wss32dd=mysql_fetch_array($resultat1wss32dd);
				
				$requete1wss33="SELECT libelle from statjoueur where id='".$ligne0['statut']."'";//echo $requete1w;
				$resultat1wss33= ExecRequete($requete1wss33, $connect);
				$ligne1wss33=mysql_fetch_array($resultat1wss33);
				
				$requete1wss34="SELECT libelle from saison where id='".$ligne0['saison']."'";//echo $requete1w;
				$resultat1wss34= ExecRequete($requete1wss34, $connect);
				$ligne1wss34=mysql_fetch_array($resultat1wss34);
				
				
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne0['id']."</td><td align='center'>".$ligne1wss31['libelle']."</td><td align='center'>".$ligne0['licence']."</td><td align='center'>".$ligne1wss32dd['libelle']."</td><td align='center'>".$ligne1wss32['libelle']."</td><td align='center'>".$ligne1wss33['libelle']."</td><td align='center'>".$ligne1wss34['libelle']."</td><td align='center'>".frtoeng($ligne0['dateQualification'])."</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td></tr>";			
		}
		$text .= "</table>";
	
	}
	
	else 	if($id==5)
	{
		
		header("content-disposition: attachment;filename=Etatjoueur_$time.xls");
				$requete1wss3i="SELECT * from joueur where id='".$_SESSION['joueurdognour']."'";//echo $requete1w;
				$resultat1wss3i= ExecRequete($requete1wss3i, $connect);
				$ligne1wss3i=mysql_fetch_array($resultat1wss3i);
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='7'><br />Etat du joueur ".$ligne1wss3i['nom'].' '.$ligne1wss3i['prenom']." à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Identifiant</td><td align='center'>Club</td><td align='center'>Division</td><td align='center'>Statut</td><td align='center'>Saison</td><td align='center'>Etat</td><td align='center'>Date de création</td></tr>";		
		$requete0=$_SESSION['requeteetatjoueur']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne0=mysql_fetch_array($resultat0)) {
		$cpt++;
				$requete1wss31="SELECT libelle from club where id='".$ligne0['club']."'";//echo $requete1w;
				$resultat1wss31= ExecRequete($requete1wss31, $connect);
				$ligne1wss31=mysql_fetch_array($resultat1wss31);
				
				$requete1wss32="SELECT libelle from division where id='".$ligne0['division']."'";//echo $requete1w;
				$resultat1wss32= ExecRequete($requete1wss32, $connect);
				$ligne1wss32=mysql_fetch_array($resultat1wss32);
				
				$requete1wss33="SELECT libelle from statjoueur where id='".$ligne0['statut']."'";//echo $requete1w;
				$resultat1wss33= ExecRequete($requete1wss33, $connect);
				$ligne1wss33=mysql_fetch_array($resultat1wss33);
				
				$requete1wss34="SELECT libelle from saison where id='".$ligne0['saison']."'";//echo $requete1w;
				$resultat1wss34= ExecRequete($requete1wss34, $connect);
				$ligne1wss34=mysql_fetch_array($resultat1wss34);
				
				$requete1wss3="SELECT libelle from etajoueur where id='".$ligne0['etat']."'";//echo $requete1w;
				$resultat1wss3= ExecRequete($requete1wss3, $connect);
				$ligne1wss3=mysql_fetch_array($resultat1wss3);
				
				
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne0['id']."</td><td align='center'>".$ligne1wss31['libelle']."</td><td align='center'>".$ligne1wss32['libelle']."</td><td align='center'>".$ligne1wss33['libelle']."</td><td align='center'>".$ligne1wss34['libelle']."</td><td align='center'>".$ligne1wss3['libelle']."</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td></tr>";			
		}
		$text .= "</table>";
	
	}
	else if($id==6)
	{
		
		header("content-disposition: attachment;filename=joueur_$time.xls");
		$text = "<table border='1'>";
		$tabe1=array("Nom & Prénom","Statut","N° de bordereau","Immatricule","Email","Mobile","Fixe","Fax","Cin","Nationalité","Saison","Club","Catégorie","Passe / Séjour","ville","Adresse","date de naissnace","date Intégration","Fonction","Nom Responsable","Téléphone Responsable","Ecole","Niveau scolaire","Autres informations");
		$coutt=count($tabe1);
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='$coutt'><br />Liste des joueurs à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'>";
		
		for($a=0;$a<count($tabe1);$a++) { $text .= "<td align='center'>".$tabe1[$a]."</td>"; };		
		$requete0=$_SESSION['requetejoueurs']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne1wss=mysql_fetch_array($resultat0)) {
		$cpt++;
				
		
		
				$nomprenom="";if($ligne1wss['sexe']==0) $nomprenom .="M";else $nomprenom .="Mme";
				 $nomprenom .=" ".$ligne1wss['nom'].' '.$ligne1wss['nom'];
		
				$requete1="SELECT libelle from nationalite where id='".$ligne1wss['nationalite']."'";//echo $requete1wss3;
				$resultat1= ExecRequete($requete1, $connect);
				$ligne1=mysql_fetch_array($resultat1);
				$nationalite=$ligne1['libelle'];
				
				$requete2="SELECT libelle from ville where id='".$ligne1wss['ville']."'";//echo $requete1wss3;
				$resultat2= ExecRequete($requete2, $connect);
				$ligne2=mysql_fetch_array($resultat2);
				$ville=$ligne2['libelle'];
				
				$requete2g="SELECT libelle from statutbis where id='".$ligne1wss['statutbis']."'";//echo $requete1wss3;
				$resultat2g= ExecRequete($requete2g, $connect);
				$ligne2g=mysql_fetch_array($resultat2g);
				$statutbis=$ligne2g['libelle'];
				
				$requete3="SELECT libelle from categjoueur where id='".$ligne1wss['division']."'";//echo $requete1wss3;
				$resultat3= ExecRequete($requete3, $connect);
				$ligne3=mysql_fetch_array($resultat3);
				$categorie=$ligne3['libelle'];
				
				$requete4="SELECT libelle from saison where id='".$ligne1wss['saison']."'";//echo $requete1wss3;
				$resultat4= ExecRequete($requete4, $connect);
				$ligne4=mysql_fetch_array($resultat4);
				$saison=$ligne4['libelle'];
				
				$requete5="SELECT sigle from club where id='".$ligne1wss['club']."'";//echo $requete1wss3;
				$resultat5= ExecRequete($requete5, $connect);
				$ligne5=mysql_fetch_array($resultat5);
				$club=$ligne5['sigle'];
				
		$tabe10=array($nomprenom,$statutbis,$ligne1wss['bordereau'],immatricule($ligne1wss['id']),$ligne1wss['email'],$ligne1wss['mobile'],$ligne1wss['tel'],$ligne1wss['fax'],$ligne1wss['cin'],$nationalite,$saison,$club,$categorie,$ligne1wss['passeport'],$ville,$ligne1wss['adresse'],frtoeng($ligne1wss['dateNaissance']),frtoeng($ligne1wss['dateIntegration']),$ligne1wss['fonction'],$ligne1wss['nomResponsable'],$ligne1wss['telResponsable'],$ligne1wss['ecole'],$ligne1wss['niveau'],$ligne1wss['information']);
		
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		 for($a=0;$a<count($tabe1);$a++) { $text .= "<td align='center'>".$tabe10[$a]."</td>"; }
		 
		 $text .="</tr>";			
		}
		$text .= "</table>";
	
	}
	
	else if($id==7)
	{
		
		header("content-disposition: attachment;filename=famille_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='5'><br />Liste des familles à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Identifiant</td><td align='center'>Famille</td><td align='center'>Parent</td><td align='center'>Etat</td><td align='center'>Date de création</td></tr>";		
		$requete0=$_SESSION['requetedivision']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne0=mysql_fetch_array($resultat0)) {
		$cpt++;
		if($ligne0['id']==1) $parent='Oui';else $parent='Non';
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne0['id']."</td><td align='left'> &nbsp;&nbsp;".$ligne0['libelle']."</td><td align='center'>".$parent."</td><td align='center'>".$ligne0['etat']."</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td></tr>";			
		}
		$text .= "</table>";
	
	}
	
	else if($id==8)
	{
		
		header("content-disposition: attachment;filename=groupe_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='5'><br />Liste des groupes à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Identifiant</td><td align='center'>Groupe</td><td align='center'>Division</td><td align='center'>Saison</td><td align='center'>Date de création</td></tr>";		
		$requete0=$_SESSION['requetegroupe']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne0=mysql_fetch_array($resultat0)) {
		$cpt++;
				$requete1wss3="SELECT libelle from saison where id='".$ligne0['saison']."'";//echo $requete1w;
				$resultat1wss3= ExecRequete($requete1wss3, $connect);
				$ligne1wss3=mysql_fetch_array($resultat1wss3);
				
				$requete1wss3s="SELECT libelle from division where id='".$ligne0['division']."'";//echo $requete1w;
				$resultat1wss3s= ExecRequete($requete1wss3s, $connect);
				$ligne1wss3s=mysql_fetch_array($resultat1wss3s);
				
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne0['id']."</td><td align='center'>".$ligne0['libelle']."</td><td align='center'>".$ligne1wss3s['libelle']."</td><td align='center'>".$ligne1wss3['libelle']."</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td></tr>";			
		}
		$text .= "</table>";
	
	}
	else if($id==9)
	{
		
		header("content-disposition: attachment;filename=saison_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='3'><br />Liste des saisons à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Identifiant</td><td align='center'>Saison</td><td align='center'>Date de création</td></tr>";		
		$requete0=$_SESSION['requetesaison']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne0=mysql_fetch_array($resultat0)) {
		$cpt++;
				
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne0['id']."</td><td align='center'>".$ligne0['libelle']."</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td></tr>";			
		}
		$text .= "</table>";
	
	}
	
		else if($id==10)
	{
		
		header("content-disposition: attachment;filename=Statutjoueur_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='3'><br />Liste des Statuts joueurs à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Identifiant</td><td align='center'>Statut joueur</td><td align='center'>Date de création</td></tr>";		
		$requete0=$_SESSION['requetestatjoueur']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne0=mysql_fetch_array($resultat0)) {
		$cpt++;
				
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne0['id']."</td><td align='center'>".$ligne0['libelle']."</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td></tr>";			
		}
		$text .= "</table>";
	
	}
	
			else if($id==11)
	{
		
		header("content-disposition: attachment;filename=Etatjoueur_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='3'><br />Liste des Etats joueurs à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Identifiant</td><td align='center'>Etat joueur</td><td align='center'>Date de création</td></tr>";		
		$requete0=$_SESSION['requeteetajoueur']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne0=mysql_fetch_array($resultat0)) {
		$cpt++;
				
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne0['id']."</td><td align='center'>".$ligne0['libelle']."</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td></tr>";			
		}
		$text .= "</table>";
	
	}
	
				else if($id==12)
	{
		
		header("content-disposition: attachment;filename=Etatmatch_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='3'><br />Liste des Etats match à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Identifiant</td><td align='center'>Etat joueur</td><td align='center'>Date de création</td></tr>";		
		$requete0=$_SESSION['requeteetamatch']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne0=mysql_fetch_array($resultat0)) {
		$cpt++;
				
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne0['id']."</td><td align='center'>".$ligne0['libelle']."</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td></tr>";			
		}
		$text .= "</table>";
	
	}
	
		else if($id==13)
	{
		
		header("content-disposition: attachment;filename=Statutarbitre_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='3'><br />Liste des Statuts Personne à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Identifiant</td><td align='center'>Statut Personne</td><td align='center'>Date de création</td></tr>";		
		$requete0=$_SESSION['requetetypepersonne']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne0=mysql_fetch_array($resultat0)) {
		$cpt++;
				
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne0['id']."</td><td align='center'>".$ligne0['libelle']."</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td></tr>";			
		}
		$text .= "</table>";
	
	}
	
	
	else if($id==14)
	{
		
		header("content-disposition: attachment;filename=bareme_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='9'><br />Liste des barèmes à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Identifiant</td><td align='center'>Type</td><td align='center'>Division</td><td align='center'>Statut</td><td align='center'>Frais</td><td align='center'>Frais Hôtel</td><td align='center'>Frais Km</td><td align='center'>Min Frais Km</td><td align='center'>Date de création</td></tr>";		
		$requete0=$_SESSION['requetebareme']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne0=mysql_fetch_array($resultat0)) {
		$cpt++;
												$requete1ws2="SELECT libelle from division where id='".$ligne0['division']."'";//echo $requete1w;
												$resultat1ws2= ExecRequete($requete1ws2, $connect);
												$ligne1ws2=mysql_fetch_array($resultat1ws2);

												$requete1ws2s="SELECT libelle from typepersonne where id='".$ligne0['statut']."'";//echo $requete1w;
												$resultat1ws2s= ExecRequete($requete1ws2s, $connect);
												$ligne1ws2s=mysql_fetch_array($resultat1ws2s);
												
												$requete1ws2ssss="SELECT libelle from statutArbitreBis where id='".$ligne0['statutbis']."'";
												$resultat1ws2ssss= ExecRequete($requete1ws2ssss, $connect);
												$ligne1ws2sss=mysql_fetch_array($resultat1ws2ssss);
				
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne0['id']."</td><td align='center'>".$ligne1ws2s['libelle']."</td><td align='center'>".$ligne1ws2['libelle']."</td><td align='center'>".$ligne1ws2sss['libelle']."</td><td align='center'>".$ligne0['frais']."</td><td align='center'>".$ligne0['fraisHotel']."</td><td align='center'>".$ligne0['fraisKm']."</td><td align='center'>".$ligne0['minFraisKm']."</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td></tr>";			
		}
		$text .= "</table>";
	
	}
	
	
		else if($id==15)
	{
		
		header("content-disposition: attachment;filename=grade_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='3'><br />Liste des grades à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Identifiant</td><td align='center'>Grade</td><td align='center'>Date de création</td></tr>";		
		$requete0=$_SESSION['requetegrade']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne0=mysql_fetch_array($resultat0)) {
		$cpt++;
				
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne0['id']."</td><td align='center'>".$ligne0['libelle']."</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td></tr>";			
		}
		$text .= "</table>";
	
	}
	
	
		else if($id==16)
	{
		
		header("content-disposition: attachment;filename=stade_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='8'><br />Liste des stades à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Identifiant</td><td align='center'>Stade</td><td align='center'>Ville</td><td align='center'>Responsable</td><td align='center'>Téléphone</td><td align='center'>Statut</td><td align='center'>Adresse</td><td align='center'>Date de création</td></tr>";		
		$requete0=$_SESSION['requetestade']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne0=mysql_fetch_array($resultat0)) {
		$cpt++;
				$requete1wss3="SELECT libelle from ville where id='".$ligne0['ville']."'";//echo $requete1w;
				$resultat1wss3= ExecRequete($requete1wss3, $connect);
				$ligne1wss3=mysql_fetch_array($resultat1wss3);
				
				$requete1wss3s="SELECT libelle from statstade where id='".$ligne0['statut']."'";//echo $requete1w;
				$resultat1wss3s= ExecRequete($requete1wss3s, $connect);
				$ligne1wss3s=mysql_fetch_array($resultat1wss3s);
				
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne0['id']."</td><td align='center'>".$ligne0['libelle']."</td><td align='center'>".$ligne1wss3['libelle']."</td><td align='center'>".$ligne0['responsable']."</td><td align='center'>".$ligne0['phone']."</td><td align='center'>".$ligne1wss3s['libelle']."</td><td align='center'>".$ligne0['lieu']."</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td></tr>";			
		}
		$text .= "</table>";
	
	}
	
	
	
	else if($id==17)
	{
		
		header("content-disposition: attachment;filename=ville_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='3'><br />Liste des villes à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Identifiant</td><td align='center'>Ville</td><td align='center'>Date de création</td></tr>";		
		$requete0=$_SESSION['requeteville']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne0=mysql_fetch_array($resultat0)) {
		$cpt++;
				
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne0['id']."</td><td align='center'>".$ligne0['libelle']."</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td></tr>";			
		}
		$text .= "</table>";
	
	}
	
	
			else if($id==18)
	{
		
		header("content-disposition: attachment;filename=distance_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='5'><br />Liste des distances à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Identifiant</td><td align='center'>Ville A-M</td><td align='center'>Ville N-Z</td><td align='center'>Distance</td><td align='center'>Date de création</td></tr>";		
		$requete0=$_SESSION['requetedistance']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne0=mysql_fetch_array($resultat0)) {
		$cpt++;
				$requete1wss3="SELECT libelle from ville where id='".$ligne0['ville1']."'";//echo $requete1w;
				$resultat1wss3= ExecRequete($requete1wss3, $connect);
				$ligne1wss3=mysql_fetch_array($resultat1wss3);
				
				$requete1wss3s="SELECT libelle from ville where id='".$ligne0['ville2']."'";//echo $requete1w;
				$resultat1wss3s= ExecRequete($requete1wss3s, $connect);
				$ligne1wss3s=mysql_fetch_array($resultat1wss3s);
				
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne0['id']."</td><td align='center'>".$ligne1wss3['libelle']."</td><td align='center'>".$ligne1wss3s['libelle']."</td><td align='center'>".$ligne0['distance']." km</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td></tr>";			
		}
		$text .= "</table>";
	
	}
	
			else if($id==19)
	{
		
		header("content-disposition: attachment;filename=typecompeition_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='4'><br />Liste des types de compétitions à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Identifiant</td><td align='center'>Libellé</td><td align='center'>Statut</td><td align='center'>Date de création</td></tr>";		
		$requete0=$_SESSION['requetetypecompetition']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne0=mysql_fetch_array($resultat0)) {
		$cpt++;
				$requete1wss3="SELECT libelle from statutcompetition where id='".$ligne0['statut']."'";//echo $requete1w;
				$resultat1wss3= ExecRequete($requete1wss3, $connect);
				$ligne1wss3=mysql_fetch_array($resultat1wss3);
				
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne0['id']."</td><td align='center'>".$ligne0['libelle']."</td><td align='center'>".$ligne1wss3['libelle']."</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td></tr>";			
		}
		$text .= "</table>";
	
	}
	
		else if($id==20)
	{
		
		header("content-disposition: attachment;filename=categjoueur_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='3'><br />Liste des catégories joueur à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Identifiant</td><td align='center'>Catégorie joueur</td><td align='center'>Date de création</td></tr>";		
		$requete0=$_SESSION['requetecategjoueur']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne0=mysql_fetch_array($resultat0)) {
		$cpt++;
				
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne0['id']."</td><td align='center'>".$ligne0['libelle']."</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td></tr>";			
		}
		$text .= "</table>";
	
	}
	
			else if($id==21)
	{
		
		header("content-disposition: attachment;filename=modepaiement_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='3'><br />Liste des modes de paiement à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Identifiant</td><td align='center'>Mode de paiement</td><td align='center'>Date de création</td></tr>";		
		$requete0=$_SESSION['requetempaiement']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne0=mysql_fetch_array($resultat0)) {
		$cpt++;
				
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne0['id']."</td><td align='center'>".$ligne0['libelle']."</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td></tr>";			
		}
		$text .= "</table>";
	
	}
	
				else if($id==22)
	{
		
		header("content-disposition: attachment;filename=banque_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='3'><br />Liste des banques à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Identifiant</td><td align='center'>Banque</td><td align='center'>Date de création</td></tr>";		
		$requete0=$_SESSION['requetebanque']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne0=mysql_fetch_array($resultat0)) {
		$cpt++;
				
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne0['id']."</td><td align='center'>".$ligne0['libelle']."</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td></tr>";			
		}
		$text .= "</table>";
	
	}
	
	
				else if($id==23)
	{
		
		header("content-disposition: attachment;filename=regime_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='3'><br />Liste des régimes à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Identifiant</td><td align='center'>Régime</td><td align='center'>Date de création</td></tr>";		
		$requete0=$_SESSION['requeteregime']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne0=mysql_fetch_array($resultat0)) {
		$cpt++;
		
				
				
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne0['id']."</td><td align='center'>".$ligne0['libelle']."</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td></tr>";			
		}
		$text .= "</table>";
	
	}
	
				else if($id==24)
	{
		
		header("content-disposition: attachment;filename=Produits_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='10'><br />Liste des Produits à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Identifiant</td><td align='center'>Libellé</td><td align='center'>Parent</td><td align='center'>Famille</td><td align='center'>Prix</td><td align='center'>Ordre</td><td align='center'>TVA Sur place</td><td align='center'>TVA A Emporter </td><td align='center'>Alerte</td><td align='center'>Date de création</td></tr>";		
		$requete0=$_SESSION['requeteclub']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne0=mysql_fetch_array($resultat0)) {
		$cpt++;
		
				$requete1wss3="SELECT libelle from famille where id='".$ligne0['famille']."'";//echo $requete1w;
				$resultat1wss3= ExecRequete($requete1wss3, $connect);
				$ligne1wss3=mysql_fetch_array($resultat1wss3);
				
				
				$requete1wss3s="SELECT libelle from famille where id='".$ligne0['parent']."'";//echo $requete1w;
				$resultat1wss3s= ExecRequete($requete1wss3s, $connect);
				$ligne1wss3s=mysql_fetch_array($resultat1wss3s);
				
				
				
				
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne0['id']."</td><td align='center'>".$ligne0['libelle']."</td><td align='center'>".$ligne1wss3['libelle']."</td><td align='center'>".$ligne1wss3s['libelle']."</td><td align='center'>".$ligne0['prix']."</td><td align='center'>".$ligne0['ordre']."</td><td align='center'>".$ligne0['tva']."</td><td align='center'>".$ligne0['tvabis']."</td><td align='center'>".$ligne0['alerte']."</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td></tr>";			
		}
		$text .= "</table>";
	
	}
	
		else if($id==25)
	{
		
		header("content-disposition: attachment;filename=sousclub_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='6'><br />Liste des sous clubs à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Identifiant</td><td align='center'>Club</td><td align='center'>Groupe</td><td align='center'>Division</td><td align='center'>Saison</td><td align='center'>Date de création</td></tr>";		
		$requete0=$_SESSION['requetesousclub']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne0=mysql_fetch_array($resultat0)) {
		$cpt++;
				$requete1wss30="SELECT sigle from club where id='".$ligne0['club']."'";//echo $requete1w;
				$resultat1wss30= ExecRequete($requete1wss30, $connect);
				$ligne1wss30=mysql_fetch_array($resultat1wss30);
				
				$requete1wss3="SELECT libelle from saison where id='".$ligne0['saison']."'";//echo $requete1w;
				$resultat1wss3= ExecRequete($requete1wss3, $connect);
				$ligne1wss3=mysql_fetch_array($resultat1wss3);
				
				$requete1wss3s="SELECT libelle from division where id='".$ligne0['division']."'";//echo $requete1w;
				$resultat1wss3s= ExecRequete($requete1wss3s, $connect);
				$ligne1wss3s=mysql_fetch_array($resultat1wss3s);
				
				$requete1wss3sd="SELECT libelle from groupe where id='".$ligne0['groupe']."'";//echo $requete1w;
				$resultat1wss3sd= ExecRequete($requete1wss3sd, $connect);
				$ligne1wss3sd=mysql_fetch_array($resultat1wss3sd);
				
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne0['id']."</td><td align='center'>".$ligne1wss30['sigle']."</td><td align='center'>".$ligne1wss3sd['libelle']."</td><td align='center'>".$ligne1wss3s['libelle']."</td><td align='center'>".$ligne1wss3['libelle']."</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td></tr>";			
		}
		$text .= "</table>";
	
	}
	
	
		
	else if($id==26)
	{
		header("content-disposition: attachment;filename=personnel_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='15'><br />Liste des personnels à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Identifiant</td><td align='center'>Nom</td><td align='center'>prénom</td><td align='center'>Licence</td><td align='center'>Cin</td><td align='center'>Téléphone</td><td align='center'>Email</td><td align='center'>Adresse</td><td align='center'>Diplome</td>";
		if($_SESSION['paramtypepersonne']==5) $text .="<td align='center'>Ligue</td><td align='center'>Commission</td>";
		else $text .="<td align='center'>Ligue</td><td align='center'>Commission</td>";
		$text .="<td align='center'>Ville</td><td align='center'>Statut</td><td align='center'>Date d'affectation</td><td align='center'>Date de création</td></tr>";		
		$requete0=$_SESSION['requetepersonnel']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne0=mysql_fetch_array($resultat0)) {
		$cpt++;
		
				if($_SESSION['paramtypepersonne']==5) {
				$requete1wss30="SELECT sigle from ligue where id='".$ligne0['club']."'";//echo $requete1w;
				$resultat1wss30= ExecRequete($requete1wss30, $connect);
				$ligne1wss30=mysql_fetch_array($resultat1wss30);
				
				$requete1wss3="SELECT libelle from commission where id='".$ligne0['categorie']."'";//echo $requete1w;
				$resultat1wss3= ExecRequete($requete1wss3, $connect);
				$ligne1wss3=mysql_fetch_array($resultat1wss3);
				}
				else {
				$requete1wss30="SELECT sigle from club where id='".$ligne0['club']."'";//echo $requete1w;
				$resultat1wss30= ExecRequete($requete1wss30, $connect);
				$ligne1wss30=mysql_fetch_array($resultat1wss30);
				
				$requete1wss3="SELECT libelle from division where id='".$ligne0['categorie']."'";//echo $requete1w;
				$resultat1wss3= ExecRequete($requete1wss3, $connect);
				$ligne1wss3=mysql_fetch_array($resultat1wss3);
				}
				
				$requete1wss3s="SELECT libelle from ville where id='".$ligne0['ville']."'";//echo $requete1w;
				$resultat1wss3s= ExecRequete($requete1wss3s, $connect);
				$ligne1wss3s=mysql_fetch_array($resultat1wss3s);
				
				$requete1wss3ss="SELECT libelle from typepersonne where id='".$ligne0['typepersonne']."'";//echo $requete1w;
				$resultat1wss3ss= ExecRequete($requete1wss3ss, $connect);
				$ligne1wss3ss=mysql_fetch_array($resultat1wss3ss);
				
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne0['id']."</td><td align='center'>".$ligne0['nom']."</td><td align='center'>".$ligne0['prenom']."</td><td align='center'>".$ligne0['licence']."</td><td align='center'>".$ligne0['cin']."</td><td align='center'>".$ligne0['phone']."</td><td align='center'>".$ligne0['email']."</td><td align='center'>".$ligne0['adresse']."</td><td align='center'>".$ligne0['diplome']."</td><td align='center'>".$ligne1wss30['sigle']."</td><td align='center'>".$ligne1wss3['libelle']."</td><td align='center'>".$ligne1wss3s['libelle']."</td><td align='center'>".$ligne1wss3ss['libelle']."</td><td align='center'>".frtoengs($ligne0['dateAffectation'])."</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td></tr>";			
		}
		$text .= "</table>";
	
	}
	
		
	else if($id==27)
	{
		header("content-disposition: attachment;filename=utilisateur_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='14'><br />Liste des utilisateurs à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Identifiant</td><td align='center'>Nom</td><td align='center'>prénom</td><td align='center'>Mobile</td><td align='center'>Email</td><td align='center'>Adresse</td><td align='center'>Fixe</td><td align='center'>Fonction</td><td align='center'>Login</td><td align='center'>Ville</td><td align='center'>Saison</td><td align='center'>Cin</td><td align='center'>Date de naissance</td><td align='center'>Date de création</td></tr>";		
		$requete0=$_SESSION['requeteutilisateur']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne0=mysql_fetch_array($resultat0)) {
		$cpt++;
		
				
				$requete1wss3s="SELECT libelle from ville where id='".$ligne0['ville']."'";//echo $requete1w;
				$resultat1wss3s= ExecRequete($requete1wss3s, $connect);
				$ligne1wss3s=mysql_fetch_array($resultat1wss3s);
				
				$requete1wss3ss="SELECT libelle from saison where id='".$ligne0['saison']."'";//echo $requete1w;
				$resultat1wss3ss= ExecRequete($requete1wss3ss, $connect);
				$ligne1wss3ss=mysql_fetch_array($resultat1wss3ss);
				
				
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne0['id']."</td><td align='center'>".$ligne0['nom']."</td><td align='center'>".$ligne0['prenom']."</td><td align='center'>".$ligne0['mobile']."</td><td align='center'>".$ligne0['email']."</td><td align='center'>".$ligne0['adresse']."</td><td align='center'>".$ligne0['fixe']."</td><td align='center'>".$ligne0['fonction']."</td><td align='center'>".$ligne0['login']."</td><td align='center'>".$ligne1wss3s['libelle']."</td><td align='center'>".$ligne1wss3ss['libelle']."</td><td align='center'>".$ligne0['cin']."</td><td align='center'>".frtoengs($ligne0['naissance'])."</td><td align='center'>".frtoengtime($ligne0['naissance'])."</td></tr>";			
		}
		$text .= "</table>";
	
	}
	
			else if($id==29)
	{
		
		header("content-disposition: attachment;filename=alerte_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='6'><br />Liste des alertes à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Identifiant</td><td align='center'>Message</td><td align='center'>Date</td><td align='center'>Heure</td><td align='center'>Statut</td><td align='center'>Date de création</td></tr>";		
		$requete0=$_SESSION['requetealerte']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne0=mysql_fetch_array($resultat0)) {
		$cpt++;
		if($ligne0['statut']==0) $statut='En cours';else $statut="Désactivé";
				
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne0['id']."</td><td align='center'>".$ligne0['message']."</td><td align='center'>".frtoengs($ligne0['date'])."</td><td align='center'>".$ligne0['heure']."</td><td align='center'>".$statut."</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td></tr>";			
		}
		$text .= "</table>";
	}
	
		else if($id==30)
	{
		if(!isset($_GET['commande']))
		{
		header("content-disposition: attachment;filename=ventes_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='7'><br />Liste des ventes à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>N° de vente</td><td align='center'>Vendeur</td><td align='center'>Magasin</td><td align='center'>Client</td><td align='center'>Livraison</td><td align='center'>Montant</td><td align='center'>Date de création</td></tr>";		
		$requete0=$_SESSION['requetecommadognour']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne0=mysql_fetch_array($resultat0)) {
		$cpt++;
				 
				$requete1wss30="SELECT nom,prenom from personnel where id='".$ligne0['vendeur']."'";//echo $requete1w;
				$resultat1wss30= ExecRequete($requete1wss30, $connect);
				$ligne1wss30=mysql_fetch_array($resultat1wss30);
				
				$requete1wss3="SELECT nom,prenom from client where code='".$ligne0['client']."'";//echo $requete1w;
				$resultat1wss3= ExecRequete($requete1wss3, $connect);
				$ligne1wss3=mysql_fetch_array($resultat1wss3);
				
				$requete1wss3s="SELECT intitule from magasin where id='".$ligne0['magasin']."'";//echo $requete1w;
				$resultat1wss3s= ExecRequete($requete1wss3s, $connect);
				$ligne1wss3s=mysql_fetch_array($resultat1wss3s);
				
				$requete1wss3ss="SELECT intitule from modelivraison where id='".$ligne0['livraison']."'";//echo $requete1w;
				$resultat1wss3ss= ExecRequete($requete1wss3ss, $connect);
				$ligne1wss3ss=mysql_fetch_array($resultat1wss3ss);
				
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne0['id'].'_'.$ligne0['magasin'].'_'.$ligne0['vendeur']."</td><td align='center'>".$ligne1wss30['nom']." ".$ligne1wss30['prenom']."</td><td align='center'>".$ligne1wss3s['intitule']."</td><td align='center'>".$ligne1wss3['nom']." ".$ligne1wss3['prenom']."</td><td align='center'>".$ligne1wss3ss['intitule']."</td><td align='center'>".$ligne0['montant']."</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td></tr>";			
		}
		$text .= "</table>";
		}
		else
		{
		header("content-disposition: attachment;filename=Ticket_$time.xls");
		$text = "<table border='1'>";
		$num=$_GET['commande'].'_'.$_GET['vendeur'].'_'.$_GET['magasin'];
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='4'><br />Ticket de la vente N° ".$num." à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Quantité</td><td align='center'>Article</td><td align='center'>TVA</td><td align='center'>TOTAL</td></tr>";	
			
		$requete0d="SELECT livraison FROM commande where vendeur = '".$_GET['vendeur']."' and magasin = '".$_GET['magasin']."' and id='".$_GET['commande']."' "; 
		$resultat0d= ExecRequete($requete0d, $connect);
		$ligntid=mysql_fetch_array($resultat0d);
		
	
		$requete0="SELECT * FROM panier where vendeur = '".$_GET['vendeur']."' and magasin = '".$_GET['magasin']."' and etat = 1 and commande='".$_GET['commande']."'  and produit!=0 order by id desc"; $cpt=0;$toto=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($lignti=mysql_fetch_array($resultat0)) {
		$cpt++;
				 
					$price=$lignti['prix'];$libelle=$lignti['libelle'];$produit=$lignti['produit'];$qte=$lignti['qte'];$remise=$lignti['remise'];	$remise=0;		
					$prixto=$qte*$price*((100-$remise)/100);$mdlivrer=$ligntid['livraison'];
					$tvas=$lignti['tva'];
					$tvass=$lignti['tva'];						
						if($mdlivrer==2) $tvas=$tvass;$toto+=$prixto;
				
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$lignti['qte']."</td><td align='center'>".$lignti['libelle']."</td><td align='center'>".$tvas." %</td><td align='center'>".$prixto." DHS</td></tr>";			
		}
		
					$requetetis="SELECT * FROM remise where vendeur = '".$_GET['vendeur']."' and magasin = '".$_GET['magasin']."' and etat = 1 and commande='".$_GET['commande']."'  order by id desc";
					$resultis= ExecRequete($requetetis, $connect);$remise=0;
					while($ligntis=mysql_fetch_array($resultis))
					{	
									
					$remise+=$ligntis['montant']+($toto*$ligntis['pourcentage']/100);
					
					}
					
					$totoo=$toto-$remise;
		$text .= "<tr style='font-family:arial;font-weight:light;'><td align='right' colspan='2'><b>Remise</b></td><td align='left' colspan='2'><b>".$remise." DHS</b></td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:light;'><td align='right' colspan='2'><b>Total</b></td><td align='left' colspan='2'><b>".$totoo." DHS</b></td></tr>";		
					
		$text .= "</table>";
		
	
		
		}
	
	}
	
	
		else if($id==31)
	{
		header("content-disposition: attachment;filename=controleur_commissaire_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='18'><br />Liste des controleurs à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Identifiant</td><td align='center'>Nom</td><td align='center'>prénom</td><td align='center'>Statut</td><td align='center'>Téléphone</td><td align='center'>Email</td><td align='center'>Adresse</td><td align='center'>Rib</td><td align='center'>Ligue</td><td align='center'>Grade</td><td align='center'>Ville</td><td align='center'>Banque</td><td align='center'>Date d'affectation</td><td align='center'>Date de naissance</td><td align='center'>Cin</td><td align='center'>Commentaire</td><td align='center'>Immatricule</td><td align='center'>Date de création</td></tr>";		
		$requete0=$_SESSION['requetecontroleur']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne0=mysql_fetch_array($resultat0)) {
		$cpt++;
		
				$requete1wss30d="SELECT libelle from typepersonne where id='".$ligne0['statut']."'";//echo $requete1w;
				$resultat1wss30d= ExecRequete($requete1wss30d, $connect);
				$ligne1wss30d=mysql_fetch_array($resultat1wss30d);
				
				$requete1wss30="SELECT libelle from ligue where id='".$ligne0['ligue']."'";//echo $requete1w;
				$resultat1wss30= ExecRequete($requete1wss30, $connect);
				$ligne1wss30=mysql_fetch_array($resultat1wss30);
				
				$requete1wss3="SELECT libelle from grade where id='".$ligne0['grade']."'";//echo $requete1w;
				$resultat1wss3= ExecRequete($requete1wss3, $connect);
				$ligne1wss3=mysql_fetch_array($resultat1wss3);
				
				$requete1wss3s="SELECT libelle from ville where id='".$ligne0['ville']."'";//echo $requete1w;
				$resultat1wss3s= ExecRequete($requete1wss3s, $connect);
				$ligne1wss3s=mysql_fetch_array($resultat1wss3s);
				
				$requete1wss3ss="SELECT libelle from banque where id='".$ligne0['banque']."'";//echo $requete1w;
				$resultat1wss3ss= ExecRequete($requete1wss3ss, $connect);
				$ligne1wss3ss=mysql_fetch_array($resultat1wss3ss);
				
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne0['id']."</td><td align='center'>".$ligne0['nom']."</td><td align='center'>".$ligne0['prenom']."</td><td align='center'>".$ligne1wss30d['libelle']."</td><td align='center'>".$ligne0['phone']."</td><td align='center'>".$ligne0['email']."</td><td align='center'>".$ligne0['adresse']."</td><td align='center'>".$ligne0['rib']."</td><td align='center'>".$ligne1wss30['libelle']."</td><td align='center'>".$ligne1wss3['libelle']."</td><td align='center'>".$ligne1wss3s['libelle']."</td><td align='center'>".$ligne1wss3ss['libelle']."</td><td align='center'>".frtoengs($ligne0['dateAffectation'])."</td><td align='center'>".frtoeng($ligne0['naissance'])."</td><td align='center'>".$ligne0['cin']."</td><td align='center'>".$ligne0['commentaire']."</td><td align='center'>".$ligne0['immatricule']."</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td></tr>";			
		}
		$text .= "</table>";
	
	}
	
		else if($id==32)
	{
		header("content-disposition: attachment;filename=Liste_Reglement_en_attente_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='13'><br />Liste des reglements en attente à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='13'>Critères : <br />".$_SESSION['criteresregldognour']."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Immatricule</td><td align='center'>Nom & Prénom</td><td align='center'>Statut</td><td align='center'>Match</td><td align='center'>Compétition</td><td align='center'>Date Match</td><td align='center'>Ligue</td><td align='center'>Saison</td><td align='center'>RIB</td><td align='center'>Frais Km</td><td align='center'>Frais Hôtel</td><td align='center'>Frais Arbitrage</td><td align='center'>Total</td></tr>";	

				
		$requete0=$_SESSION['requetereglement']; $cpto=0;$totalo=0;$cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne1ws=mysql_fetch_array($resultat0)) {
		$cpt++;
		
					if($ligne1ws['statut']==1)	$requete1ws2g="SELECT * from arbitre where id='".$ligne1ws['personnel']."'";
				else $requete1ws2g="SELECT * from controleur where id='".$ligne1ws['personnel']."'";//echo $requete1ws2g;
												$resultat1ws2g= ExecRequete($requete1ws2g, $connect);
												$ligne1ws2g=mysql_fetch_array($resultat1ws2g);
												
												
												
												
												
												$requete1ws2s="SELECT libelle from typepersonne where id='".$ligne1ws2g['statut']."'";
												$resultat1ws2s= ExecRequete($requete1ws2s, $connect);
												$ligne1ws2dd=mysql_fetch_array($resultat1ws2s);
												
												$requete1ws21="SELECT libelle,sigle from ligue where id='".$ligne1ws2g['ligue']."'";//echo $requete1w;
												$resultat1ws21= ExecRequete($requete1ws21, $connect);
												$ligne1ws21=mysql_fetch_array($resultat1ws21);
												
												$requete1ws23="SELECT libelle from grade where id='".$ligne1ws2g['grade']."'";
												$resultat1ws23= ExecRequete($requete1ws23, $connect);
												$ligne1ws23=mysql_fetch_array($resultat1ws23);
												
				$requete1ws1sr="SELECT club.id,club.sigle as sigle,`match`.etamatch,`match`.penality,`match`.dateMatch, `match`.saison, `match`.division,`match`.ville from  `club` inner join sousclub on club.id=sousclub.club inner join `match` on sousclub.id=`match`.clubR where `match`.id='".$ligne1ws['match']."'";//echo $requete1ws1sr;
				$resultat1ws1sr= ExecRequete($requete1ws1sr, $connect);
				$lignere=mysql_fetch_array($resultat1ws1sr);
						
				$requete1wss345aa="SELECT libelle from ville where id='".$lignere['ville']."'";//echo $requete1w;
				$resultat1wss345aa= ExecRequete($requete1wss345aa, $connect);
				$ligne1wseaa=mysql_fetch_array($resultat1wss345aa);
						
						$requete1ws1srv="SELECT club.id,club.sigle as sigle from  `club` inner join sousclub on club.id=sousclub.club inner join `match` on sousclub.id=`match`.clubV where `match`.id='".$ligne1ws['match']."'";//echo $requete1ws1sr;
						$resultat1ws1srv= ExecRequete($requete1ws1srv, $connect);
						$lignevi=mysql_fetch_array($resultat1ws1srv);
						
						$requete1ws1="SELECT * from division where id='".$lignere['division']."'";
						$resultat1ws1= ExecRequete($requete1ws1, $connect);
						$ligne1ws1=mysql_fetch_array($resultat1ws1); 
						
						$requete1ws12="SELECT * from saison where id='".$lignere['saison']."'";
						$resultat1ws12= ExecRequete($requete1ws12, $connect);
						$ligne1ws12=mysql_fetch_array($resultat1ws12); 
						
				
				$cpto++;
							$requete01="select * from bareme where division='".$lignere['division']."' and statut='".$ligne1ws['statut']."'  and statutbis='".$ligne1ws['statutbis']."' ";
							$resultat01= ExecRequete($requete01, $connect);
							$ligne1wss=mysql_fetch_array($resultat01); 
							
							$requete011="select libelle from ville where id='".$ligne1ws2g['ville']."'";
							$resultat011= ExecRequete($requete011, $connect);
							$ligne011=mysql_fetch_array($resultat011);

							$requete012="select libelle from ville where id='".$lignere['ville']."'";
							$resultat012= ExecRequete($requete012, $connect);
							$ligne012=mysql_fetch_array($resultat012);

							if($ligne1ws2g['ville']==$lignere['ville']) $distance=0;
							else {
							$requete013="select distance from distance where ((ville1='".$lignere['ville']."' and ville2='".$ligne1ws2g['ville']."') or (ville2='".$lignere['ville']."' and ville1='".$ligne1ws2g['ville']."')) ";
							$resultat013= ExecRequete($requete013, $connect);
							$ligne013=mysql_fetch_array($resultat013);
							$distance=$ligne013['distance'];
							}
							
							if($distance<$ligne1wss['minFraisKm']) $fraishotelbis=0;else $fraishotelbis=$ligne1wss['fraisHotel'];
							if(($lignere['etamatch']==26 or $lignere['etamatch']==28) &&($lignere['penality']!=0)) $fraismatchbis=$ligne1wss['frais'];else $fraismatchbis=0;
							if($distance==0 or $distance<$ligne1wss['minFraisKm']) $fraiskmbis=$ligne1wss['fraisKmInterne'];else $fraiskmbis=$distance*$ligne1wss['fraisKm'];
							
							//echo $fraishotelbis.'--'.$fraismatchbis.'--'.$fraiskmbis.'<br />';
							$totalbis=$fraishotelbis+$fraismatchbis+$fraiskmbis;
							$totalo+=$totalbis;
				
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne1ws2g['immatricule']."</td><td align='center'>".$ligne1ws2g['nom'].' '.$ligne1ws2g['prenom']."</td><td align='center'>".$ligne1ws2dd['libelle']."</td><td align='center'>".$lignere['sigle'].' Vs '.$lignevi['sigle']."</td><td align='center'>".$ligne1ws1['libelle']."</td><td align='center'>".frtoeng($lignere['dateMatch'])."</td><td align='center'>".$ligne1ws21['sigle']."</td><td align='center'>".$ligne1ws12['libelle']."</td><td align='center'>".$ligne1ws['rib']."</td><td align='center'>".number_format($fraiskmbis,2, ',', '').' ('.$distance.'Km)'."</td><td align='center'>".number_format($fraishotelbis,2, ',', '')."</td><td align='center'>".number_format($fraismatchbis,2, ',', '')."</td><td align='center'>".number_format($totalbis,2, ',', '').' DHs'."</td></tr>";			
		}
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='right' colspan='13'>Nombre d'ordres en attente : ".$cpto."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='right' colspan='13'>Montant Total : ".number_format($totalo,2, ',', '').' DHs'."</td></tr>";
	
			
		$text .= "</table>";
	
	}
	
		else if($id==37)
	{
		
		header("content-disposition: attachment;filename=Clients_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='red'><td align='center' colspan='12'><br />Liste des clients à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Code</td><td align='center'>Sexe</td><td align='center'>Etat</td><td align='center'>Nom</td><td align='center'>prénom</td><td align='center'>Email</td><td align='center'>Téléphone</td><td align='center'>Adresse</td><td align='center'>Date de naissance</td><td align='center'>Magasin</td><td align='center'>Ville</td><td align='center'>Date de création</td></tr>";		
		$requete0=$_SESSION['requeteclientsa']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne0=mysql_fetch_array($resultat0)) {
						
					$requete1wd5="SELECT * from magasin where id='".$ligne0['magasin']."' ";
					$resultat1wd5= ExecRequete($requete1wd5, $connect);
					$ligne1wd5=mysql_fetch_array($resultat1wd5);
					
					$requete1w0s1="SELECT * from ville where id='".$ligne0['ville']."'";
					$resultat1w0s1= ExecRequete($requete1w0s1, $connect);
					$lignew0s1=mysql_fetch_array($resultat1w0s1);
					
					if($ligne0['sexe']==0) $sexe="Homme";else $sexe="Femme";
					if($ligne0['etat']==0) $etat="Non actif";else $etat="Actif";
					
		$cpt++;
		
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".($ligne0['code'])."</td><td align='center'>".$sexe."</td><td align='center'>".$etat."</td><td align='center'>".$ligne0['nom']."</td><td align='center'>".$ligne0['prenom']."</td><td align='center'>".$ligne0['email']."</td><td align='center'>".$ligne0['phone']."</td><td align='center'>".$ligne0['adresse']."</td><td align='center'>".frtoeng($ligne0['dateNaissance'])."</td><td align='center'>".$ligne1wd5['intitule']."</td><td align='center'>".$lignew0s1['libelle']."</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td></tr>";
		
		}
		$text .= "</table>";
	
	}
	
		else if($id=='370')
	{
		
						$requete1wss3aa="SELECT numero from bordereau where id='".$_SESSION['bordereaudognour']."' ";
						$resultat1wss3aa= ExecRequete($requete1wss3aa, $connect);
						$ligne1wss3aa=mysql_fetch_array($resultat1wss3aa);
						$bordo=$ligne1wss3aa['numero'];
						
		header("content-disposition: attachment;filename=Détail_bordereaux_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='red'><td align='center' colspan='11'><br />Détail bordereau N° ".$bordo." à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Numéro d'ordre Ligue</td><td align='center'>Date de réception</td><td align='center'>Date de poste</td><td align='center'>Saison</td><td align='center'>Club</td><td align='center'>Catégorie</td><td align='center'>Joueurs traités</td><td align='center'>Nombre de joueurs</td><td align='center'>Numéro de bordereau</td><td align='center'>Recommandé</td><td align='center'>Date de création</td><td align='center'>Statut</td></tr>";		
		$requete0="SELECT * from bordereau where id='".$_SESSION['bordereaudognour']."'"; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne0=mysql_fetch_array($resultat0)) {
						
					$requete1wd5="SELECT * from club where id='".$ligne0['club']."' ";
					$resultat1wd5= ExecRequete($requete1wd5, $connect);
					$ligne1wd5=mysql_fetch_array($resultat1wd5);
					
					$requete1w0s1="SELECT * from etajoueur where id='".$ligne0['statut']."'";
					$resultat1w0s1= ExecRequete($requete1w0s1, $connect);
					$lignew0s1=mysql_fetch_array($resultat1w0s1);
					
					$requete1w0s1s="SELECT * from division where id='".$ligne0['categorie']."'";
					$resultat1w0s1s= ExecRequete($requete1w0s1s, $connect);
					$lignew0s1s=mysql_fetch_array($resultat1w0s1s);
					
				$requete01fe="select id from `statutjoueur` where `bordereau`='".$bordo."'";//echo $requete01fe;
				$resultat01fe=ExecRequete($requete01fe, $connect);
				$nbrcotae=mysql_num_rows($resultat01fe);
					
		$cpt++;
		
		
		
		if($_SESSION['traitefoot']==0) {
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".immatricule($ligne0['id'])."</td><td align='center'>".$ligne0['dateReception']."</td><td align='center'>".$ligne0['datePoste']."</td><td align='center'>".$ligne0['saison']."</td><td align='center'>".$ligne1wd5['libelle']."</td><td align='center'>".$lignew0s1s['libelle']."</td><td align='center'>".$nbrcotae."</td><td align='center'>".$ligne0['joueur']."</td><td align='center'>".$ligne0['numero']."</td><td align='center'>".$ligne0['valeur']."</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td><td align='center'>".$lignew0s1['libelle']."</td></tr>"; }
		else if (($_SESSION['traitefoot']==1) && ($nbrcotae==$ligne0['joueur'])) {
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".immatricule($ligne0['id'])."</td><td align='center'>".$ligne0['dateReception']."</td><td align='center'>".$ligne0['datePoste']."</td><td align='center'>".$ligne0['saison']."</td><td align='center'>".$ligne1wd5['libelle']."</td><td align='center'>".$lignew0s1s['libelle']."</td><td align='center'>".$nbrcotae."</td><td align='center'>".$ligne0['joueur']."</td><td align='center'>".$ligne0['numero']."</td><td align='center'>".$ligne0['valeur']."</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td><td align='center'>".$lignew0s1['libelle']."</td></tr>";}
		else if (($_SESSION['traitefoot']==2) && ($nbrcotae==$ligne0['joueur'])) {
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".immatricule($ligne0['id'])."</td><td align='center'>".$ligne0['dateReception']."</td><td align='center'>".$ligne0['datePoste']."</td><td align='center'>".$ligne0['saison']."</td><td align='center'>".$ligne1wd5['libelle']."</td><td align='center'>".$lignew0s1s['libelle']."</td><td align='center'>".$nbrcotae."</td><td align='center'>".$ligne0['joueur']."</td><td align='center'>".$ligne0['numero']."</td><td align='center'>".$ligne0['valeur']."</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td><td align='center'>".$lignew0s1['libelle']."</td></tr>";}
		else if (($_SESSION['traitefoot']==3) && ($nbrcotae==$ligne0['joueur'])) {
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".immatricule($ligne0['id'])."</td><td align='center'>".$ligne0['dateReception']."</td><td align='center'>".$ligne0['datePoste']."</td><td align='center'>".$ligne0['saison']."</td><td align='center'>".$ligne1wd5['libelle']."</td><td align='center'>".$lignew0s1s['libelle']."</td><td align='center'>".$nbrcotae."</td><td align='center'>".$ligne0['joueur']."</td><td align='center'>".$ligne0['numero']."</td><td align='center'>".$ligne0['valeur']."</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td><td align='center'>".$lignew0s1['libelle']."</td></tr>";}
		
		}
		$text .= "</table>";
		$text .= "<table>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='red'><td align='center' colspan='6'><br />Liste des joueurs de ce bordereau</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Licence</td><td align='center'>Nom & Prénom</td><td align='center'>CIN</td><td align='center'>Statut</td><td align='center'>Club</td><td align='center'>Catégorie</td></tr>";
		
		$requete0dd="select * from statutjoueur where bordereau='".$bordo."'"; $cpt=0;
		$resultat0dd= ExecRequete($requete0dd, $connect);
		while($ligne0dd=mysql_fetch_array($resultat0dd)) {
		
				$requete1ws="select * from joueur where id='".$ligne0dd['joueur']."'";
				$resultat1ws= ExecRequete($requete1ws, $connect);
				$ligne1wsss=mysql_fetch_array($resultat1ws);
										
						$requete1wss3="SELECT etajoueur.libelle from etajoueur inner join etatjoueur on etajoueur.id=etatjoueur.etat where etatjoueur.joueur='".$ligne1wsss['id']."' order by etatjoueur.id desc limit 0,1";
						$resultat1wss3= ExecRequete($requete1wss3, $connect);
						$ligne1wss3=mysql_fetch_array($resultat1wss3);
						
						

						
						$requete1wss3s="SELECT libelle from statjoueur where statjoueur.id='".$ligne0dd['statut']."' ";
						$resultat1wss3s= ExecRequete($requete1wss3s, $connect);
						$ligne1wss3s=mysql_fetch_array($resultat1wss3s);
						
						$requete1wss3sae="SELECT libelle from categjoueur where id='".$ligne0dd['categorie']."'";
						$resultat1wss3sae= ExecRequete($requete1wss3sae, $connect);
						$ligne1wss3sae=mysql_fetch_array($resultat1wss3sae);
						
						$requete1wss3sa="SELECT sigle,libelle from club where code='".$ligne0dd['club']."'";
						$resultat1wss3sa= ExecRequete($requete1wss3sa, $connect);
						$ligne1wss3sa=mysql_fetch_array($resultat1wss3sa);
		$text .= "<td align='center'>".($ligne0dd['licence'])."</td><td align='center'>".$ligne1wsss['nom']." ".$ligne1wsss['prenom']." </td><td align='center'>".$ligne1wsss['cin']."</td><td align='center'>".$ligne1wss3s['libelle']."</td><td align='center'>".$ligne1wss3sa['sigle']."</td><td align='center'>".$ligne1wss3sae['libelle']."</td></tr>";
		}
		
		
		$text .= "</table>";
	
	}
	
	
	
	
	
			else if($id==3700)
	{
		
		header("content-disposition: attachment;filename=Joueurs_Bordereaux_$time.xls");
		$text = "<table border='1'>";		
		$requete0=$_SESSION['requetebordereau']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		$suitebis=" and id!='' ";
		while($ligne0=mysql_fetch_array($resultat0)) {
						$cpt++;
					$requete1wd5="SELECT * from club where id='".$ligne0['club']."' ";
					$resultat1wd5= ExecRequete($requete1wd5, $connect);
					$ligne1wd5=mysql_fetch_array($resultat1wd5);
					
					$bordo=immatricules(variant_fix($ligne0['numero']));
					
					if($suitebis==" and id!='' ") $suitebis=" and ( bordereau='".$bordo."' ";else $suitebis=$suitebis." or bordereau='".$bordo."' ";
					
					
					}
					if($cpt!=0) $suitebis=$suitebis.' ) ';
					
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='red'><td align='center' colspan='9'><br />Liste des joueurs qualifiés</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Licence</td><td align='center'>Nom</td><td align='center'>Prénom</td><td align='center'>Date de naissance</td><td align='center'>CIN</td><td align='center'>Statut</td><td align='center'>Catégorie</td><td align='center'>Club</td><td align='center'>Date Qualification</td></tr>";
		
		if($_SESSION['clubfootbis']==0)	$requete0dd="select * from statutjoueur where id!='' ".$suitebis." order by categorie desc ";
		else $requete0dd="select * from statutjoueur where id!='' ".$suitebis." and club='".$_SESSION['clubfootbis']."' order by categorie desc ";
		$cpt=0;
		$resultat0dd= ExecRequete($requete0dd, $connect);
		while($ligne0dd=mysql_fetch_array($resultat0dd)) {
		
				$requete1ws="select * from joueur where id='".$ligne0dd['joueur']."'";
				$resultat1ws= ExecRequete($requete1ws, $connect);
				$ligne1wsss=mysql_fetch_array($resultat1ws);
										
						$requete1wss3="SELECT etajoueur.libelle from etajoueur inner join etatjoueur on etajoueur.id=etatjoueur.etat where etatjoueur.joueur='".$ligne1wsss['id']."' order by etatjoueur.id desc limit 0,1";
						$resultat1wss3= ExecRequete($requete1wss3, $connect);
						$ligne1wss3=mysql_fetch_array($resultat1wss3);
						
						

						
						$requete1wss3s="SELECT libelle from statjoueur where statjoueur.id='".$ligne0dd['statut']."' ";
						$resultat1wss3s= ExecRequete($requete1wss3s, $connect);
						$ligne1wss3s=mysql_fetch_array($resultat1wss3s);
						
						$requete1wss3sae="SELECT libelle from categjoueur where id='".$ligne0dd['categorie']."'";
						$resultat1wss3sae= ExecRequete($requete1wss3sae, $connect);
						$ligne1wss3sae=mysql_fetch_array($resultat1wss3sae);
						
						$requete1wss3sa="SELECT sigle,libelle from club where code='".$ligne0dd['club']."'";
						$resultat1wss3sa= ExecRequete($requete1wss3sa, $connect);
						$ligne1wss3sa=mysql_fetch_array($resultat1wss3sa);
		$text .= "<td align='center'>".$ligne0dd['licence']."</td><td align='center'>".$ligne1wsss['nom']."</td><td align='center'>".$ligne1wsss['prenom']." </td><td align='center'>".frtoengs($ligne1wsss['dateNaissance'])." </td><td align='center'>".$ligne1wsss['cin']."</td><td align='center'>".$ligne1wss3s['libelle']."</td><td align='center'>".$ligne1wss3sa['sigle']."</td><td align='center'>".$ligne1wss3sae['libelle']."</td><td align='center'>".(frtoengs($ligne0dd['dateQualification']))."</td></tr>";
		}
		
	
		$text .= "</table>";
	
	}
	
	
	
	
					else if($id==39)
	{
		
		header("content-disposition: attachment;filename=ligue_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='12'><br />Liste des ligues à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Identifiant</td><td align='center'>Code</td><td align='center'>ligue</td><td align='center'>Libellé</td><td align='center'>Ville</td><td align='center'>Site web</td><td align='center'>Responsable</td><td align='center'>Téléphone</td><td align='center'>Fax</td><td align='center'>Email</td><td align='center'>Adresse</td><td align='center'>Date de création</td></tr>";		
		$requete0=$_SESSION['requeteligue']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne0=mysql_fetch_array($resultat0)) {
		$cpt++;
		
				
				
				$requete1wss3s="SELECT libelle from ville where id='".$ligne0['ville']."'";//echo $requete1w;
				$resultat1wss3s= ExecRequete($requete1wss3s, $connect);
				$ligne1wss3s=mysql_fetch_array($resultat1wss3s);
				
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne0['id']."</td><td align='center'>".$ligne0['code']."</td><td align='center'>".$ligne0['sigle']."</td><td align='center'>".$ligne0['libelle']."</td><td align='center'>".$ligne1wss3s['libelle']."</td><td align='center'>".$ligne0['web']."</td><td align='center'>".$ligne0['responsable']."</td><td align='center'>".$ligne0['phone']."</td><td align='center'>".$ligne0['fax']."</td><td align='center'>".$ligne0['email']."</td><td align='center'>".$ligne0['adresse']."</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td></tr>";			
		}
		$text .= "</table>";
	
	}
	
	
	else if($id==40)
	{
		
		header("content-disposition: attachment;filename=commission_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='8'><br />Liste des commissions à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Identifiant</td><td align='center'>Commission</td><td align='center'>Ligue</td><td align='center'>Responsable</td><td align='center'>Téléphone</td><td align='center'>Fax</td><td align='center'>Email</td><td align='center'>Date de création</td></tr>";		
		$requete0=$_SESSION['requetecommission']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne0=mysql_fetch_array($resultat0)) {
		$cpt++;
		
				
				
				$requete1wss3s="SELECT libelle from ligue where id='".$ligne0['ligue']."'";//echo $requete1w;
				$resultat1wss3s= ExecRequete($requete1wss3s, $connect);
				$ligne1wss3s=mysql_fetch_array($resultat1wss3s);
				
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne0['id']."</td><td align='center'>".$ligne0['libelle']."</td><td align='center'>".$ligne1wss3s['libelle']."</td><td align='center'>".$ligne0['responsable']."</td><td align='center'>".$ligne0['phone']."</td><td align='center'>".$ligne0['fax']."</td><td align='center'>".$ligne0['email']."</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td></tr>";			
		}
		$text .= "</table>";
	
	}
	
	
	else if($id==41)
	{
		header("content-disposition: attachment;filename=effectues_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='14'><br />Liste des reglements effectués à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='14'>Critères : <br />".$_SESSION['criteresreglbisdognour']."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Immatricule</td><td align='center'>Nom & Prénom</td><td align='center'>Statut</td><td align='center'>Match</td><td align='center'>Compétition</td><td align='center'>Date Match</td><td align='center'>Date Virement</td><td align='center'>Ligue</td><td align='center'>Saison</td><td align='center'>RIB</td><td align='center'>Frais Km</td><td align='center'>Frais Hôtel</td><td align='center'>Frais Arbitrage</td><td align='center'>Total</td></tr>";	

				
		$requete0=$_SESSION['requetereglementbis']; $cpto=0;$totalo=0;$cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne1ws=mysql_fetch_array($resultat0)) {
		$cpt++;
		
				if($ligne1ws['statut']=='Arbitre') $requete1wssss="SELECT immatricule from `arbitre` where id='".$ligne1ws['idPersonnel']."'";
				else $requete1wssss="SELECT immatricule from `controleur` where id='".$ligne1ws['idPersonnel']."'";
				$resultat1wssss= ExecRequete($requete1wssss, $connect);
				$ligne1wssss=mysql_fetch_array($resultat1wssss);
				
				$requete1wsse="SELECT * from `match` where id='".$ligne1ws['idMatch']."'";//echo $requete1w;
				$resultat1wsse= ExecRequete($requete1wsse, $connect);
				$ligne1wse=mysql_fetch_array($resultat1wsse);
				
				$requete1wss345aa="SELECT libelle from ville where id='".$ligne1wse['ville']."'";//echo $requete1w;
				$resultat1wss345aa= ExecRequete($requete1wss345aa, $connect);
				$ligne1wseaa=mysql_fetch_array($resultat1wss345aa);
				
				$requete1wss345aae="SELECT libelle from saison where id='".$ligne1wse['saison']."'";//echo $requete1w;
				$resultat1wss345aae= ExecRequete($requete1wss345aae, $connect);
				$ligne1wseaae=mysql_fetch_array($resultat1wss345aae);
		
				$distance=$ligne1ws['distancebis'];
				if($distance==0 or $distance<$ligne1ws['minFraisKm']) $fraiskmbis=$ligne1ws['fraisKmInterne'];else $fraiskmbis=$distance*$ligne1ws['fraisKm'];
				if($distance<$ligne1ws['minFraisKm']) $fraishotelbis=0;else $fraishotelbis=$ligne1ws['fraisHotel'];
				if(($ligne1wse['etamatch']==26 or $ligne1wse['etamatch']==28) &&($ligne1wse['penality']!=0)) $fraismatchbis=$ligne1ws['frais'];else $fraismatchbis=0;
				
				$cpto++;
				$totalo+=$ligne1ws['total'];
				
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne1wssss['immatricule']."</td><td align='center'>".$ligne1ws['nom']."</td><td align='center'>".$ligne1ws['statut']."</td><td align='center'>".$ligne1ws['match']."</td><td align='center'>".$ligne1ws['division']."</td><td align='center'>".frtoeng($ligne1wse['dateMatch'])."</td><td align='center'>".frtoeng($ligne1ws['dateVirement'])."</td><td align='center'>".$ligne1ws['ligue']."</td><td align='center'>".$ligne1wseaae['libelle']."</td><td align='center'>".$ligne1ws['rib']."</td><td align='center'>".number_format($fraiskmbis,2, ',', '').' ('.$distance.'Km)'."</td><td align='center'>".number_format($fraishotelbis,2, ',', '')."</td><td align='center'>".number_format($fraismatchbis,2, ',', '')."</td><td align='center'>".number_format($ligne1ws['total'],2, ',', '').' DHs'."</td></tr>";			
		}
		
		
			
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='right' colspan='14'>Nombre d'ordres effectués : ".$cpto."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='right' colspan='14'>Montant Total : ".number_format($totalo,2, ',', '').' DHs'."</td></tr>";
	
			
		$text .= "</table>";
	
	}
	
	else if($id==42)
	{
				
		header("content-disposition: attachment;filename=Listejoueur_match_$time.xls");
		$text = "<table border='1'>";
		
					$requete1ws1sr="SELECT club.id,club.sigle as sigle,`match`.penality,`match`.butR,`match`.butV,`match`.dateMatch,`match`.saison,`match`.division,`match`.groupe,`match`.journee from  `club` inner join sousclub on club.id=sousclub.club inner join `match` on sousclub.id=`match`.clubR where `match`.id='".$_SESSION['matchjouerlina']."' ";
					$resultat1ws1sr= ExecRequete($requete1ws1sr, $connect);
					$lignere=mysql_fetch_array($resultat1ws1sr);						
					$requete1ws1srv="SELECT club.id,club.sigle as sigle from  `club` inner join sousclub on club.id=sousclub.club inner join `match` on sousclub.id=`match`.clubV where `match`.id='".$_SESSION['matchjouerlina']."' ";
					$resultat1ws1srv= ExecRequete($requete1ws1srv, $connect);
					$lignevi=mysql_fetch_array($resultat1ws1srv);						
					$Rencontre=' Rencontre'.$lignere['sigle'].' VS '.$lignevi['sigle'];
					
					$requete05="SELECT libelle from club where id='".$_SESSION['clubjouerlina']."'";
					$resultat05= ExecRequete($requete05, $connect);
					$ligne05=mysql_fetch_array($resultat05);
					$Club=" Club : ".$ligne05['libelle'];
					
					$requete05="SELECT libelle from saison where id='".$lignere['saison']."'";
					$resultat05= ExecRequete($requete05, $connect);
					$ligne05=mysql_fetch_array($resultat05);
					$Saison=" Saison : ".$ligne05['libelle'];
					
					$requete05="SELECT libelle from division where id='".$lignere['division']."'";
					$resultat05= ExecRequete($requete05, $connect);
					$ligne05=mysql_fetch_array($resultat05);
					$Division=" Division : ".$ligne05['libelle'];
							
							
					$requete05="SELECT libelle from groupe where id='".$lignere['groupe']."'";
					$resultat05= ExecRequete($requete05, $connect);
					$ligne05=mysql_fetch_array($resultat05);
					$Groupe=" Groupe : ".$ligne05['libelle'];
					
					$Journee=" Journée : ".$lignere['journee'];
										
					$DateMatch=" Date Match : ".frtoeng($lignere['dateMatch']);
					
					$requete001="SELECT distinct(jouer.id),jouer.joueur,jouer.`match`,jouer.dateMatch,jouer.dateCreation,jouer.saison,jouer.statut,jouer.but,jouer.minute from jouer inner join `statutjoueur` on `statutjoueur`.joueur=jouer.`joueur` where (jouer.`match`='".$_SESSION['matchnour']."' and `statutjoueur`.club='".$_SESSION['clubjouerlina']."' ) order by jouer.statut asc";
					
		$tabe1=array("Licence","Nom & Prénom","But","Minute","Jaune","Rouge","Dtae Match","Nombre Match","N° PV","Catégorie");
		
				
		$coutt=count($tabe1);
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='$coutt'><br />Liste des joueurs ".$Club." à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='$coutt'><br /> ".$Rencontre." ".$Division." ".$Groupe." ".$Journee." ".$DateMatch."  </td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'>";
		
		for($a=0;$a<count($tabe1);$a++) { $text .= "<td align='center'>".$tabe1[$a]."</td>"; };		
		$requete0=$requete001; $cpt=0;//echo $requete0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne001=mysql_fetch_array($resultat0)) {
		$cpt++;
				
			
				if($ligne001['statut']==1)
						{
						$requete1wfu="SELECT * from joueur where id='".$ligne001['joueur']."'";
						$resultat1wfu= ExecRequete($requete1wfu, $connect);
						$ligne1wfu=mysql_fetch_array($resultat1wfu);
						}
						else
						{
						$requete1wfu="SELECT * from personnel where id='".$ligne001['joueur']."'";
						$resultat1wfu= ExecRequete($requete1wfu, $connect);
						$ligne1wfu=mysql_fetch_array($resultat1wfu);
						}
						
			$requete05="SELECT id from joueurtoavert where joueur='".$ligne001['joueur']."' and statut='".$ligne001['statut']."' and type='1' and saison='".$ligne001['saison']."'";
			$resultat05= ExecRequete($requete05, $connect);
			$averti=mysql_num_rows($resultat05);
			
			$requete055s="SELECT * from joueurtoavert where joueur='".$ligne001['joueur']."' and statut='".$ligne001['statut']."' and type='2' and saison='".$ligne001['saison']."'";
			$resultat055s= ExecRequete($requete055s, $connect);
			$expuls=mysql_num_rows($resultat055s);
			
			$resultat055sq= ExecRequete($requete055s, $connect);
			$ligneaz=mysql_fetch_array($resultat055sq);
			
			
						if($ligne001['statut']==1)
						{
						$requete1wfuf="SELECT libelle from categjoueur where id='".$ligne1wfu['division']."'";
						$resultat1wfuf= ExecRequete($requete1wfuf, $connect);
						$ligne1wfuf=mysql_fetch_array($resultat1wfuf);
						$categor=$ligne1wfuf['libelle'];
						}
						else
						{
						$categor=$ligne1wfu['fonction'];
						}

						
		if($ligneaz['rouge']=='')$rouge="-";else $rouge=$ligneaz['rouge'];if($ligneaz['npv']=='') $npv="-";else $npv=$ligneaz['npv'];
		
		$tabe10=array($ligne1wfu['licence'],$ligne1wfu['nom'].' '.$ligne1wfu['prenom'],$ligne001['but'],$ligne001['minute'],$averti,$expuls,frtoeng($ligne001['dateMatch']),$rouge,$npv,$categor);
		
	
		
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		 for($a=0;$a<count($tabe1);$a++) { $text .= "<td align='center'>".$tabe10[$a]."</td>"; }
		 
		 $text .="</tr>";			
		}
		$text .= "</table>";
	
	}
	
	
		else if($id==43)
	{
		header("content-disposition: attachment;filename=JoueursAvertis_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='14'><br />Liste des joueurs avertis à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='14'><br />Critères de recherche :  ".$_SESSION['detailavertisdognour']."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Licence</td><td align='center'>Nom & Prénom</td><td align='center'>But</td><td align='center'>Minute</td><td align='center'>Jaune</td><td align='center'>Rouge</td><td align='center'>Date Match</td><td align='center'>Nbre Match<td align='center'>N° PV</td><td align='center'>Catégorie</td></tr>";	

		$requete001="SELECT distinct(jouer.id),jouer.joueur,jouer.`match`,jouer.dateMatch,jouer.dateCreation,jouer.saison,jouer.statut,jouer.but,jouer.minute from jouer inner join `statutjoueur` on `statutjoueur`.joueur=jouer.`joueur` where (jouer.`match`='".$_SESSION['matchnour']."' and `statutjoueur`.club='".$_SESSION['clubjouerlina']."' ) order by jouer.statut asc";//echo $requete001.'<br />';
				$resultat001= ExecRequete($requete001, $connect);$cpto=0;$cpt=0;
				$_SESSION['requetejoueursavertisbisbis']=$requete001;
				while($ligne001=mysql_fetch_array($resultat001))
					{
						$cpt++;
						if($ligne001['statut']==1)
						{
						$requete1wfu="SELECT * from joueur where id='".$ligne001['joueur']."'";
						$resultat1wfu= ExecRequete($requete1wfu, $connect);
						$ligne1wfu=mysql_fetch_array($resultat1wfu);
						}
						else
						{
						$requete1wfu="SELECT * from personnel where id='".$ligne001['joueur']."'";
						$resultat1wfu= ExecRequete($requete1wfu, $connect);
						$ligne1wfu=mysql_fetch_array($resultat1wfu);
						}
						
			$requete05="SELECT id from joueurtoavert where joueur='".$ligne001['joueur']."' and statut='".$ligne001['statut']."' and type='1' and saison='".$ligne001['saison']."'";
			$resultat05= ExecRequete($requete05, $connect);
			$averti=mysql_num_rows($resultat05);
			
			$requete055s="SELECT * from joueurtoavert where joueur='".$ligne001['joueur']."' and statut='".$ligne001['statut']."' and type='2' and saison='".$ligne001['saison']."'";
			$resultat055s= ExecRequete($requete055s, $connect);
			$expuls=mysql_num_rows($resultat055s);
			
			$resultat055sq= ExecRequete($requete055s, $connect);
			$ligneaz=mysql_fetch_array($resultat055sq);
			
			
						if($ligne001['statut']==1)
						{
						$requete1wfuf="SELECT libelle from categjoueur where id='".$ligne1wfu['division']."'";
						$resultat1wfuf= ExecRequete($requete1wfuf, $connect);
						$ligne1wfuf=mysql_fetch_array($resultat1wfuf);
						$categor=$ligne1wfuf['libelle'];
						}
						else
						{
						$categor=$ligne1wfu['fonction'];
						}
				if($ligneaz['rouge']=='') $rouge="-";else $rouge=$ligneaz['rouge']; 
				if($ligneaz['npv']=='')$npv="-";else $npv=$ligneaz['npv']; 
				
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne1wfu['licence']."</td><td align='center'>".$ligne1wfu['nom'].' '.$ligne1wfu['prenom']."</td><td align='center'>".$ligne001['but']."</td><td align='center'>".$ligne001['minute']."</td><td align='center'>".$averti."</td><td align='center'>".$expuls."</td><td align='center'>".frtoeng($ligne001['dateMatch'])."</td><td align='center'>".$rouge."</td><td align='center'>".$npv."</td><td align='center'>".$categor."</td></tr>";	



			
		}
		$text .= "</table>";
	
	}
	
		else if($id==59)
	{
		
		header("content-disposition: attachment;filename=cheques_$time.xls");
	
			
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='8'><br />Liste des chèques à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Immatricule</td><td align='center'>Joueur</td><td align='center'>Emetteur</td><td align='center'>Banque</td><td align='center'>Date d'ordre</td><td align='center'>Montant</td><td align='center'>Numéro</td><td align='center'>Date de création</td></tr>";		
		$requete0=$_SESSION['requetechequierfootnor']; $cpt=0;$totalo=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne1w=mysql_fetch_array($resultat0)) {
		
					$requete1w1="SELECT immatricule,nom,prenom from joueur where id='".$ligne1w['joueur']."'";
					$resultat1w1= ExecRequete($requete1w1, $connect);
					$ligne1w1=mysql_fetch_array($resultat1w1);
					
					$requete1w14="SELECT nom from payeur where id='".$ligne1w['emetteur']."'";//echo $requete1w;
					$resultat1w14= ExecRequete($requete1w14, $connect);
					$ligne1w14=mysql_fetch_array($resultat1w14);
					
					$cpt++;$totalo+=$ligne1w['montant'];
				
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne1w1['immatricule']."</td><td align='center'>".$ligne1w1['prenom'].' '.$ligne1w1['nom']."</td><td align='center'>".$ligne1w14['nom']."</td><td align='center'>".$ligne1w['banque']."</td><td align='center'>".$ligne1w['dateordre']."</td><td align='center'>".number_format($ligne1w['montant'],2, ',', '')."</td><td align='center'>".$ligne1w['cheque']."</td><td align='center'>".frtoengtime($ligne1w['dateCreation'])."</td></tr>";			
		}
		
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='right' colspan='14'>Nombre de chèques : ".$cpt."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='right' colspan='14'>Montant Total : ".number_format($totalo,2, ',', '').' DHs'."</td></tr>";
		
		$text .= "</table>";
	
	}
	
	
		else if($id==630)
	{
		
		header("content-disposition: attachment;filename=Heuretravaillés_personnel_$time.xls");
		
				if(isset($_GET['personnel']))
				{
				$requete1wss30="SELECT * from personnel where id='".$_GET['personnel']."'";//echo $requete1w;
				$resultat1wss30= ExecRequete($requete1wss30, $connect);
				$ligne1wss30=mysql_fetch_array($resultat1wss30);
				
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='5'><br />Récapitulatif des heures travaillées pour ".$ligne1wss30['prenom']." ".$ligne1wss30['nom']."  à la date du ".$madate." à la période du ".substr($_SESSION['perfiodefoot'],5,2).'/'.substr($_SESSION['perfiodefoot'],0,4)."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Identifiant</td><td align='center'>Jour</td><td align='center'>Heure Début</td><td align='center'>Heure Fin</td><td align='center'>Nombre d'heures</td></tr>";		
		$requete0=$_SESSION['heurepersonnelfoot']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);$totalh='00:00:00';
		while($ligne1w0x=mysql_fetch_array($resultat0)) {
		$cpt++;
							$difere=difheure($ligne1w0x['heure1'],$ligne1w0x['heure2']);
							$totalh=AddTime($difere,$totalh);
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne1w0x['id']."</td><td align='center'>".frtoengs($ligne1w0x['jour'])."</td><td align='center'>".$ligne1w0x['heure1']."</td><td align='center'>".$ligne1w0x['heure2']."</td><td align='center'>".$difere."</td></tr>";			
		}
		$text .= "<tr style='font-family:arial;font-weight:bold;' bgcolor='#000'><td  colspan='4' align='right'>TOTAL</td><td align='center'>".$totalh."</td></tr>";
		$text .= "</table>";
				} else {
				$requete1wss30="SELECT * from personnel";//echo $requete1w;
				$resultat1wss30= ExecRequete($requete1wss30, $connect);
				while($ligne1wss30=mysql_fetch_array($resultat1wss30))
				{
				
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='5'><br />Récapitulatif des heures travaillées pour ".$ligne1wss30['prenom']." ".$ligne1wss30['nom']."  à la date du ".$madate." à la période du ".substr($_SESSION['perfiodefoot'],5,2).'/'.substr($_SESSION['perfiodefoot'],0,4)."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Identifiant</td><td align='center'>Jour</td><td align='center'>Heure Début</td><td align='center'>Heure Fin</td><td align='center'>Nombre d'heures</td></tr>";		
		$requete0=$_SESSION['heurepersonnelfoot']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);$totalh='00:00:00';
		while($ligne1w0x=mysql_fetch_array($resultat0)) {
		$cpt++;
							$difere=difheure($ligne1w0x['heure1'],$ligne1w0x['heure2']);
							$totalh=AddTime($difere,$totalh);
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne1w0x['id']."</td><td align='center'>".frtoengs($ligne1w0x['jour'])."</td><td align='center'>".$ligne1w0x['heure1']."</td><td align='center'>".$ligne1w0x['heure2']."</td><td align='center'>".$difere."</td></tr>";			
		}
		$text .= "<tr style='font-family:arial;font-weight:bold;' bgcolor='#000'><td  colspan='4' align='right'>TOTAL</td><td align='center'>".$totalh."</td></tr>";
		$text .= "</table><br />";	
				
				}
			}
	
	}
	
		else if($id==631)
	{
		
		header("content-disposition: attachment;filename=Matchdisputes_personnel_$time.xls");
		
				
				if($_GET['statut']==1)
				{
				$requete1wss30="SELECT * from arbitre where id='".$_GET['arbitre']."'";//echo $requete1w;
				$resultat1wss30= ExecRequete($requete1wss30, $connect);
				$ligne1wss30=mysql_fetch_array($resultat1wss30);
				}
				else 
				{
				$requete1wss30="SELECT * from controleur where id='".$_GET['arbitre']."'";//echo $requete1w;
				$resultat1wss30= ExecRequete($requete1wss30, $connect);
				$ligne1wss30=mysql_fetch_array($resultat1wss30);
				}
				
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='7'><br />Récapitulatif des matchs disputés pour ".$ligne1wss30['prenom']." ".$ligne1wss30['nom']."  à la date du ".$madate." à la période du ".substr($_SESSION['perfiodefoot'],5,2).'/'.substr($_SESSION['perfiodefoot'],0,4)."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>N° Match</td><td align='center'>Club R</td><td align='center'>Score R</td><td align='center'>Club V</td><td align='center'>Score V</td><td align='center'>Date Match</td><td align='center'>Statut</td></tr>";		
		$requete0=$_SESSION['heurearbitrelfoot']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);$totalh='00:00:00';
		while($ligne1w0x=mysql_fetch_array($resultat0)) {
		$cpt++;
								$statarbitre='';
								if($_GET['statut']==1)
								{
								if($_SESSION['arbitredognour']==$ligne1w0x['arbitre1']) $statarbitre='Arbitre de centre';
								else if($_SESSION['arbitredognour']==$ligne1w0x['arbitre2']) $statarbitre='Arbitre Assistant 1';
								else if($_SESSION['arbitredognour']==$ligne1w0x['arbitre3']) $statarbitre='Arbitre Assistant 2';
								else if($_SESSION['arbitredognour']==$ligne1w0x['arbitre4']) $statarbitre='Quatri&egrave;me Arbitre';
								else if($_SESSION['arbitredognour']==$ligne1w0x['arbitre5']) $statarbitre='Arbitre 5';
								else if($_SESSION['arbitredognour']==$ligne1w0x['arbitre6']) $statarbitre='Arbitre 6';
								}
								else if($_GET['statut']==2) $statarbitre='Commissaire';
								else if($_GET['statut']==3) $statarbitre='Contrôleur';
										
							$requeteverif="SELECT club.sigle,club.id,`match`.butR,`match`.butV,`match`.ordre,`match`.pv,`match`.penality from club inner join sousclub on sousclub.club=club.id inner join `match`  on `match`.clubR=sousclub.id WHERE `match`.id='".$ligne1w0x['id']."' ";
							$resultatverif= ExecRequete($requeteverif, $connect);
							$ligneverif=mysql_fetch_array($resultatverif);
							$photoclub="clubs/mini/".$ligneverif['id'].".jpg";
							
							$requeteverifs="SELECT club.sigle,club.id from club inner join sousclub on sousclub.club=club.id inner join `match`  on `match`.clubV=sousclub.id WHERE `match`.id='".$ligne1w0x['id']."' ";
							$resultatverifs= ExecRequete($requeteverifs, $connect);
							$ligneverifs=mysql_fetch_array($resultatverifs);
							$photoclubs="clubs/mini/".$ligneverifs['id'].".jpg";$butr='-';$butv='-';
							if($ligneverif['penality']!=0) {$butr=$ligneverif['butR'];$butv=$ligneverif['butV'];}
							
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne1w0x['numero']."</td><td align='center'>".$ligneverif['sigle']."</td><td align='center'>".$butr."</td><td align='center'>".$ligneverifs['sigle']."</td><td align='center'>".$butv."</td><td align='center'>".frtoengtime($ligne1w0x['dateMatch'])."</td><td align='center'>".$statarbitre."</td></tr>";			
		}
		//$text .= "<tr style='font-family:arial;font-weight:bold;' bgcolor='#000'><td  colspan='4' align='right'>TOTAL</td><td align='center'>".$totalh."</td></tr>";
		$text .= "</table>";
				
	}
	
	
		else if($id==73)
	{
			
			if(isset($_GET['groupe']))
			{
			$requete000="select groupe from groupes where idGroupe='".$_GET['groupe']."' and user='".$_SESSION['userdognour']."'";
			$resultat000= ExecRequete($requete000, $connect);
			$ligne000=mysql_fetch_array($resultat000);
			
		header("content-disposition: attachment;filename=groupecontact_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='red'><td align='center' colspan='8'><br />Liste des contacts du groupe ".$ligne000['groupe']. " à la date du ".$madate."</td></tr>";
				
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Email</td><td align='center'>Nom</td><td align='center'>Prénom</td><td align='center'>Pays</td><td align='center'>Ville</td><td align='center'>Âge</td><td align='center'>Sexe</td><td align='center'>Téléphone</td></tr>";		
		$requete0="select * from newsletters where groupe='".$_GET['groupe']."' and user='".$_SESSION['userdognour']."'";$cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne0=mysql_fetch_array($resultat0)) { 
		$cpt++;
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne0['email']."</td><td align='center'>".$ligne0['nom']."</td><td align='center'>".$ligne0['prenom']."</td><td align='center'>".$ligne0['pays']."</td><td align='center'>".$ligne0['ville']."</td><td align='center'>".$ligne0['age']."</td><td align='center'>".$ligne0['sexe']."</td><td align='center'>".$ligne0['telephone']."</td></tr>";

			}
			}
			else {
			
			
		header("content-disposition: attachment;filename=groupecontact_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='red'><td align='center' colspan='8'><br />Liste de tous les contacts à la date du ".$madate."</td></tr>";				
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Email</td><td align='center'>Nom</td><td align='center'>Prénom</td><td align='center'>Pays</td><td align='center'>Ville</td><td align='center'>Âge</td><td align='center'>Sexe</td><td align='center'>Téléphone</td></tr>";		
		$requete0="select * from newsletters where user='".$_SESSION['userdognour']."'";$cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne0=mysql_fetch_array($resultat0)) { 
		$cpt++;
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne0['email']."</td><td align='center'>".$ligne0['nom']."</td><td align='center'>".$ligne0['prenom']."</td><td align='center'>".$ligne0['pays']."</td><td align='center'>".$ligne0['ville']."</td><td align='center'>".$ligne0['age']."</td><td align='center'>".$ligne0['sexe']."</td><td align='center'>".$ligne0['telephone']."</td></tr>";

			}
			
			
			}
	$text .= "</table>";
	}
	
		else if($id==74)
	{
		
		header("content-disposition: attachment;filename=fichecontrole_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='15'><br />Liste des contrôles à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Match</td><td align='center'>Arbitre</td><td align='center'>Statut Arbitre</td><td align='center'>Contrôleur</td><td align='center'>Date Match</td><td align='center'>Saison</td><td align='center'>Compétition</td><td align='center'>Journée</td><td align='center'>Note 1</td><td align='center'>Note 2</td><td align='center'>Note 3</td><td align='center'>Note 4</td><td align='center'>Note 5</td><td align='center'>Note Finale</td><td align='center'>Date de création</td></tr>";		
		$requete0=$_SESSION['requetecontrole']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne1w=mysql_fetch_array($resultat0)) {
		$cpt++;
		
				$requeteverif="SELECT club.sigle,club.id as club,`match`.butR,`match`.butV,`match`.id ,`match`.pv,`match`.penality from club inner join sousclub on sousclub.club=club.id inner join `match`  on `match`.clubR=sousclub.id WHERE `match`.id='".$ligne1w['match']."'";				$resultatverif= ExecRequete($requeteverif, $connect);
				$ligneverif=mysql_fetch_array($resultatverif);
				$matchh=$ligneverif['id']; 
				$requeteverifs="SELECT club.sigle,club.id from club inner join sousclub on sousclub.club=club.id inner join `match`  on `match`.clubV=sousclub.id WHERE `match`.id='".$ligne1w['match']."'";
				$resultatverifs= ExecRequete($requeteverifs, $connect);
				$ligneverifs=mysql_fetch_array($resultatverifs);  						
				$match=$ligneverif['sigle'].'&nbsp;&nbsp;VS&nbsp;&nbsp;'.$ligneverifs['sigle'];
				
				$requete1wss3="SELECT nom,prenom from arbitre where id='".$ligne1w['arbitre']."'";//echo $requete1w;
				$resultat1wss3= ExecRequete($requete1wss3, $connect);
				$ligne1wss3=mysql_fetch_array($resultat1wss3);
				$arbitre=$ligne1wss3['prenom'].' '.$ligne1wss3['nom']; 
				
				$typearbitre=$ligne1w['typeArbitre'];
				
				$requete1wss3="SELECT nom,prenom from controleur where id='".$ligne1w['controleur']."'";//echo $requete1w;
				$resultat1wss3= ExecRequete($requete1wss3, $connect);
				$ligne1wss3=mysql_fetch_array($resultat1wss3);
				$controleur=$ligne1wss3['prenom'].' '.$ligne1wss3['nom'];
				
				$datematch=frtoengtime($ligne1w['dateMatch']);
				
				$requete1w0s12d="SELECT * from saison where id='".$ligne1w['saison']."'";
				$resultat1w0s12d= ExecRequete($requete1w0s12d, $connect);
				$lignew0s12d=mysql_fetch_array($resultat1w0s12d);
				$saison=$lignew0s12d['libelle'];
				
				$requete1w0s12d="SELECT * from division where id='".$ligne1w['division']."'";
				$resultat1w0s12d= ExecRequete($requete1w0s12d, $connect);
				$lignew0s12d=mysql_fetch_array($resultat1w0s12d);
				$division=$lignew0s12d['libelle'];
				$requete1w0s12d="SELECT * from groupe where id='".$ligne1w['groupe']."'";
				$resultat1w0s12d= ExecRequete($requete1w0s12d, $connect);
				$lignew0s12d=mysql_fetch_array($resultat1w0s12d);
				$groupe=$lignew0s12d['libelle'];
				$competition=$division.'/'.$groupe;
				
				$journee=$ligne1w['journee'];
				$note1=$ligne1w['note1'];$note2=$ligne1w['note2'];$note3=$ligne1w['note3'];$note4=$ligne1w['note4'];$note5=$ligne1w['note5'];
				$note=number_format($ligne1w['note'],2);
				
					
					
				
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$match."</td><td align='center'>".$arbitre."</td><td align='center'>".$typearbitre."</td><td align='center'>".$controleur."</td><td align='center'>".$datematch."</td><td align='center'>".$saison."</td><td align='center'>".$competition."</td><td align='center'>".$journee."</td><td align='center'>".$note1."</td><td align='center'>".$note2."</td><td align='center'>".$note3."</td><td align='center'>".$note4."</td><td align='center'>".$note5."</td><td align='center'>".$note."</td><td align='center'>".frtoengtime($ligne1w['dateCreation'])."</td></tr>";			
		}
		$text .= "</table>";
	}
	
		else if($id==77)
	{
		
		header("content-disposition: attachment;filename=fournisseurs_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='10'><br />Liste des fournisseurs à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Identifiant</td><td align='center'>Raison sociale</td><td align='center'>Responsable</td><td align='center'>Téléphone</td><td align='center'>Fax</td><td align='center'>Email</td><td align='center'>Ville</td><td align='center'>Adresse</td><td align='center'>Commentaire</td><td align='center'>Date de création</td></tr>";		
		$requete0=$_SESSION['requetefourni']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne0=mysql_fetch_array($resultat0)) {
		$cpt++;
						$requete1wfss="SELECT libelle from ville where id='".$ligne0['ville']."'";
						$resultat1wfss= ExecRequete($requete1wfss, $connect);
						$ligne1wss3sd=mysql_fetch_array($resultat1wfss);
					
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne0['id']."</td><td align='center'>".$ligne0['raison']."</td><td align='center'>".$ligne0['responsable']."</td><td align='center'>".$ligne0['phone']."</td><td align='center'>".$ligne0['fax']."</td><td align='center'>".$ligne0['email']."</td><td align='center'>".$ligne1wss3sd['libelle']."</td><td align='center'>".$ligne0['adresse']."</td><td align='center'>".$ligne0['remarque']."</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td></tr>";			
		}
		$text .= "</table>";
	
	}
		else if($id==78)
	{
		
		header("content-disposition: attachment;filename=produitsbruts_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='11'><br />Liste des produits bruts à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Identifiant</td><td align='center'>Désignation</td><td align='center'>Taille</td><td align='center'>Unité</td><td align='center'>Portion</td><td align='center'>Magasin</td><td align='center'>Affiché</td><td align='center'>Quantite</td><td align='center'>Produit HOT DOG</td><td align='center'>Transformable</td><td align='center'>Date de création</td></tr>";		
		$requete0=$_SESSION['requetebrut']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne0=mysql_fetch_array($resultat0)) {
		$cpt++;
						
						$requete1wfsss="SELECT libelle from sousfamille where id='".$ligne0['sousfamille']."'";
						$resultat1wfsss= ExecRequete($requete1wfsss, $connect);
						$ligne1wss3sds=mysql_fetch_array($resultat1wfsss);
						
						if($ligne0['magasin']==0) $magasi='Charriot'; else if($ligne0['magasin']==1) $magasi='Magasin';else $magasi='Les deux';
					if($ligne0['cache']==0) $caches='Oui'; else $caches='Non';
					if($ligne0['transformable']==0) $transform='Oui'; else $transform='Non';		
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne0['id']."</td><td align='center'>".$ligne0['libelle']."</td><td align='center'>".$ligne0['taille']."</td><td align='center'>".$ligne0['unite']."</td><td align='center'>".$ligne0['portion']."</td><td align='center'>".$magasi."</td><td align='center'>".$caches."</td><td align='center'>".$ligne0['quantite']."</td><td align='center'>".$ligne1wss3sds['libelle']."</td><td align='center'>".$transform."</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td></tr>";			
		}
		$text .= "</table>";
		}
		
			else if($id==79) {
		
		header("content-disposition: attachment;filename=produitstransforme_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='8'><br />Liste des produits transformés à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Identifiant</td><td align='center'>Produit HOT DOG</td><td align='center'>Produit Brut</td><td align='center'>Unité</td><td align='center'>Portion</td><td align='center'>Magasin</td><td align='center'>Taille</td><td align='center'>Date de création</td></tr>";	
		$requete0=$_SESSION['requeteproduittransforme']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne0=mysql_fetch_array($resultat0)) {
		$cpt++;
						
						$requete1wfsss="SELECT libelle from sousfamille where id='".$ligne0['sousfamille']."'";
						$resultat1wfsss= ExecRequete($requete1wfsss, $connect);
						$ligne1wss3sds=mysql_fetch_array($resultat1wfsss);
			if($ligne0['libelle']==0) $magasi='Charriot'; else $magasi='Magasin';	
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne0['id']."</td><td align='center'>".$ligne0['libelle']."</td><td align='center'>".$ligne1wss3sds['libelle']."</td><td align='center'>".$ligne0['unite']."</td><td align='center'>".$ligne0['portion']."</td><td align='center'>".$magasi."</td><td align='center'>".$ligne0['taille']."</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td></tr>";			
		}
		
		
		$text .= "</table>";
	
	}

		else if($id==80) {
		
		header("content-disposition: attachment;filename=produitsfournisseur_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='5'><br />Liste des produits fournisseurs à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Identifiant</td><td align='center'>Produit</td><td align='center'>Fournisseur</td><td align='center'>Prix</td><td align='center'>Date de création</td></tr>";	
		$requete0=$_SESSION['requeteproduitfournisseur']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne0=mysql_fetch_array($resultat0)) {
		$cpt++;
						$requete1wfss="SELECT libelle from produit where id='".$ligne0['produit']."'";
						$resultat1wfss= ExecRequete($requete1wfss, $connect);
						$ligne1wss3sd=mysql_fetch_array($resultat1wfss);
						
						$requete1wfsss="SELECT raison from fournisseur where id='".$ligne0['fournisseur']."'";
						$resultat1wfsss= ExecRequete($requete1wfsss, $connect);
						$ligne1wss3sds=mysql_fetch_array($resultat1wfsss);
					
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne0['id']."</td><td align='center'>".$ligne1wss3sd['libelle']."</td><td align='center'>".$ligne1wss3sds['raison']."</td><td align='center'>".$ligne0['prix']."</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td></tr>";			
		}
		
		
		$text .= "</table>";
	
	}
	
		else if($id==81)
	{
		
		header("content-disposition: attachment;filename=magasins_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='4'><br />Liste des magasins à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Identifiant</td><td align='center'>Magasin</td><td align='center'>Type</td><td align='center'>Date de création</td></tr>";		
		$requete0=$_SESSION['requetemagasin']; $cpt=0;
		$resultat0= ExecRequete($requete0, $connect);
		while($ligne0=mysql_fetch_array($resultat0)) {
		$cpt++;
		if($ligne0['type']==0) $typ="Magasin"; else $typ="Charriot"; 
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne0['id']."</td><td align='center'>".$ligne0['intitule']."</td><td align='center'>".$typ."</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td></tr>";			
		}
		$text .= "</table>";
		
	
	}
	
	
		else if($id==82)
	{
				
		header("content-disposition: attachment;filename=listeetatentree_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='5'><br />Liste des bons d'entrée à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Identifiant</td><td align='center'>Fournisseur</td><td align='center'>Etat</td><td align='center'>Commentaire</td><td align='center'>Date entrée</td></tr>";		
		$requete0="SELECT * FROM etat_entree WHERE id!='' ".$_SESSION['affiche82']." GROUP BY  `dateCreation`  ";
		$resultat0= ExecRequete($requete0, $connect);$cpt=0;
		while($ligne0=mysql_fetch_array($resultat0)) {
		
						$cpt++;
						$requete1w="SELECT raison FROM fournisseur WHERE id='".$ligne0['fournisseur']."'";
						$resultat1w= ExecRequete($requete1w, $connect);
						$ligne1w=mysql_fetch_array($resultat1w);
						
						
							if($cpt%2) $colo='#ffffff';else $colo='#eae7e7';
							
							$etat ="";
							if(substr($ligne0['etat'],0,1)==0) $etat .='';else $etat .="J'ai compt&eacute; le stock livr&eacute; | ";
							if(substr($ligne0['etat'],2,1)==0) $etat .='';else $etat .="J'ai v&eacute;rifi&eacute; que l'emballage est en bon &eacute;tat | ";
							if(substr($ligne0['etat'],4,1)==0) $etat .='';else $etat .="le stock a &eacute;t&eacute; rang&eacute; correctement | ";
							if(substr($ligne0['etat'],6,1)==0) $etat .='';else $etat .="Retard | ";
							if(substr($ligne0['etat'],8,1)==0) $etat .='';else $etat .="Norme qualit&eacute; non respect&eacute; | ";
						
							
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne0['id']."</td><td align='left'> &nbsp;&nbsp;".$ligne1w['raison']."</td><td align='center'>".$etat."</td><td align='center'>".$ligne0['commentaire']."</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td></tr>";			
		
	}$text .= "</table>";
	
	}
	
	
			else if($id==820)
	{
				
		header("content-disposition: attachment;filename=listeetatentreeproduit_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='8'><br />Liste des bons d'entrée produits à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Identifiant</td><td align='center'>Produit</td><td align='center'>Fournisseur</td><td align='center'>Taille</td><td align='center'>Unité</td><td align='center'>Quantité</td><td align='center'>Prix</td><td align='center'>Date entrée</td></tr>";		
		if($_GET['fournisseur']==0) $requete0="SELECT * FROM etat_entree WHERE dateCreation='".$_GET['bon']."'"; 
		else $requete0="SELECT * FROM etat_entree WHERE dateCreation='".$_GET['bon']."' and fourniseur='".$_GET['fournisseur']."'"; 
		$resultat0= ExecRequete($requete0, $connect);$cpt=0;
		$resultat00= ExecRequete($requete0, $connect);$nbr00=mysql_num_rows($resultat00);
		while($ligne0=mysql_fetch_array($resultat0)) {
		
				
		
						$cpt++;
						$requete1w="SELECT raison FROM fournisseur WHERE id='".$ligne0['fournisseur']."'";
						$resultat1w= ExecRequete($requete1w, $connect);
						$ligne1w=mysql_fetch_array($resultat1w);
						
						$requete1w2="SELECT * FROM produit WHERE id='".$ligne0['produit']."'";
						$resultat1w2= ExecRequete($requete1w2, $connect);
						$ligne1w2=mysql_fetch_array($resultat1w2);
						
						$requete1w3="SELECT prix FROM produitfournisseur WHERE produit='".$ligne0['produit']."' and fournisseur='".$ligne0['fournisseur']."'";
						$resultat1w3= ExecRequete($requete1w3, $connect);
						$ligne1w3=mysql_fetch_array($resultat1w3);
						
						if($cpt%2) $colo='#ffffff';else $colo='#eae7e7';
				
						
							
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne0['id']."</td><td align='left'> &nbsp;&nbsp;".$ligne1w2['libelle']."</td><td align='left'> &nbsp;&nbsp;".$ligne1w['raison']."</td><td align='center'>".$ligne1w2['taille']."</td><td align='center'>".$ligne1w2['unite']."</td><td align='center'>".$ligne0['quantite']."</td><td align='center'>".$ligne1w3['prix']."</td><td align='center'>".frtoengtime($ligne0['dateCreation'])."</td></tr>";		

						$etat ="";
							if(substr($ligne0['etat'],0,1)==0) $etat .='';else $etat .="J'ai compt&eacute; le stock livr&eacute; | ";
							if(substr($ligne0['etat'],2,1)==0) $etat .='';else $etat .="J'ai v&eacute;rifi&eacute; que l'emballage est en bon &eacute;tat | ";
							if(substr($ligne0['etat'],4,1)==0) $etat .='';else $etat .="le stock a &eacute;t&eacute; rang&eacute; correctement | ";
							if(substr($ligne0['etat'],6,1)==0) $etat .='';else $etat .="Retard | ";
							if(substr($ligne0['etat'],8,1)==0) $etat .='';else $etat .="Norme qualit&eacute; non respect&eacute; | ";		
		
	if($nbr00==$cpt) { 
	$text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='left' colspan='8'>".$etat."</td></tr>";
		$text .= "<td align='left' colspan='8'>".$ligne0['commentaire']."</td></tr>";		
		}}
	
	$text .= "</table>";
	
	}
	
	else if($id==83)
	{
		
		header("content-disposition: attachment;filename=listeetatbon_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='6'><br />Liste des bons E/R  ['stock / Annexe] à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Identifiant</td><td align='center'>Magasin</td><td align='center'>Etat</td><td align='center'>Statut</td><td align='center'>Commentaire</td><td align='center'>Date de création</td></tr>";

		$requete1ws1a="SELECT * FROM etat_be WHERE id!=''  ".$_SESSION['affiche83']." GROUP BY  `dateCreation`";
		$resultat1ws= ExecRequete($requete1ws1a, $connect);$nan=0;$cpt=0;
				while($ligne1w0=mysql_fetch_array($resultat1ws)) {
				
						$cpt++;
						$requete1w="SELECT intitule FROM magasin WHERE id='".$ligne1w0['magasin']."'";
						$resultat1w= ExecRequete($requete1w, $connect);
						$ligne1w=mysql_fetch_array($resultat1w);
						
						if($ligne1w0['type']==1) $requete1w2="SELECT * FROM produit WHERE id='".$ligne1w0['produit']."'";
						else $requete1w2="SELECT * FROM produittransforme WHERE id='".$ligne1w0['produit']."'";
						$resultat1w2= ExecRequete($requete1w2, $connect);
						$ligne1w2=mysql_fetch_array($resultat1w2);
						
						if($ligne1w0['type']==0)
						{
						$requete1w3="select produittransforme.libelle,produittransforme.unite,produittransforme.id,produittransforme.magasin,sum(produitbt.taille) as somes from produittransforme inner join produitbt on produittransforme.id=produitbt.produittransforme where produittransforme.magasin='".$ligne1w0['magasin']."' group by produittransforme.id";
						$resultat1w3= ExecRequete($requete1w3, $connect);
						$ligne1w3=mysql_fetch_array($resultat1w3);$taille=$ligne1w3['somes'];$unite=$ligne1w3['unite'];
						}
						else
						{
						$taille=$ligne1w2['taille'];$unite=$ligne1w2['unite'];						
						}
						
						
							if($cpt%2) $colo='#ffffff';else $colo='#eae7e7';
		if($ligne1w0['etat']==0) $etat="Sortie"; else $etat="Retourn&eacute;";
		if($ligne1w0['statut']==0) $statut="Stock";else if($ligne1w0['statut']==1) $statut="Annexe"; else $statut="Perte";							
							
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne1w0['id']."</td><td align='left'> &nbsp;&nbsp;".$ligne1w['intitule']."</td><td align='center'>".$etat."</td><td align='center'>".$statut."</td><td align='center'>".$ligne1w0['commentaire']."</td><td align='center'>".frtoengtime($ligne1w0['dateCreation'])."</td></tr>";			
		
		
	}$text .= "</table>";
	
	}
	
	
	
	
	else if($id==830)
	{
		
		header("content-disposition: attachment;filename=listeetatbon_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='9'><br />Liste des bons E/R  ['stock / Annexe] à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Identifiant</td><td align='center'>Produit</td><td align='center'>Magasin</td><td align='center'>Taille</td><td align='center'>Unité</td><td align='center'>Quantité</td><td align='center'>Etat</td><td align='center'>Stock</td><td align='center'>Date de création</td></tr>";		
		$requete1w0="SELECT * FROM etat_be WHERE magasin='".$_GET['magasin']."' and statut='".$_GET['statut']."' and etat='".$_GET['etat']."' and dateCreation='".$_GET['dateCreation']."' ";
		$resultat1w0= ExecRequete($requete1w0, $connect);$cpt=0;
		$resultat00= ExecRequete($requete1w0, $connect);$nbr00=mysql_num_rows($resultat00);
		while($ligne1w0=mysql_fetch_array($resultat1w0))
		{
						$cpt++;
						$requete1w="SELECT intitule FROM magasin WHERE id='".$ligne1w0['magasin']."'";
						$resultat1w= ExecRequete($requete1w, $connect);
						$ligne1w=mysql_fetch_array($resultat1w);
						
						if($ligne1w0['type']==1) $requete1w2="SELECT * FROM produit WHERE id='".$ligne1w0['produit']."'";
						else $requete1w2="SELECT * FROM produittransforme WHERE id='".$ligne1w0['produit']."'";
						$resultat1w2= ExecRequete($requete1w2, $connect);
						$ligne1w2=mysql_fetch_array($resultat1w2);
						
						if($ligne1w0['type']==0)
						{
						$requete1w3="select produittransforme.libelle,produittransforme.unite,produittransforme.id,produittransforme.magasin,sum(produitbt.taille) as somes from produittransforme inner join produitbt on produittransforme.id=produitbt.produittransforme where produittransforme.magasin='".$ligne1w0['magasin']."' group by produittransforme.id";
						$resultat1w3= ExecRequete($requete1w3, $connect);
						$ligne1w3=mysql_fetch_array($resultat1w3);$taille=$ligne1w3['somes'];$unite=$ligne1w3['unite'];
						}
						else
						{
						$taille=$ligne1w2['taille'];$unite=$ligne1w2['unite'];						
						}
						if($ligne1w0['etat']==0) $etat="Sortie";else $etat="Retourné"; 
						if($ligne1w0['statut']==0) $stock="Stock";else $stock="Annexe";
							if($cpt%2) $colo='#ffffff';else $colo='#eae7e7';
						
							
		if($cpt%2) $text .= "<tr style='font-family:arial;font-weight:light;' bgcolor='#c0c0c0'>";
		else $text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne1w0['id']."</td><td align='left'> &nbsp;&nbsp;".$ligne1w2['libelle']."</td><td align='center'>".$ligne1w['intitule']."</td><td align='center'>".$taille."</td><td align='center'>".$unite."</td><td align='center'>".$ligne1w0['quantite']."</td><td align='center'>".$etat."</td><td align='center'>".$stock."</td><td align='center'>".frtoengtime($ligne1w0['dateCreation'])."</td></tr>";			
		if($nbr00==$cpt) {				
		$text .= "<tr style='font-family:arial;font-weight:light;' colspan='9'><td class='texte8' colspan='8' valign='top'>".$ligne1w0['commentaire']."</td></tr>";
		}
		
	
	}$text .= "</table>";
	
	}
	
	
	
	else if($id==84)
	{
		
		header("content-disposition: attachment;filename=EtatStockMagasins_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='6'><br />".$_SESSION['affichere83']." à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='6'>Produits BRUTS</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Produit</td><td align='center'>Taille</td><td align='center'>Quantité entrée</td><td align='center'>Taille X Quantité</td><td align='center'>Taille Portion</td><td align='center'>Nombre Portion</td></tr>";		
		$requete1ws1a="SELECT * from produit order by libelle asc ";
				$resultat1ws= ExecRequete($requete1ws1a, $connect);$nan=0;
				while($ligne1ws=mysql_fetch_array($resultat1ws)) {
				
			$requete1w0="SELECT sum(quantite) as some FROM etat_be WHERE id!='' ".$_SESSION['affiche83']." and produit='".$ligne1ws['id']."' and type='1' and etat=0";
			$resultat1w0= ExecRequete($requete1w0, $connect);
			$ligne1w0=mysql_fetch_array($resultat1w0);$nan++;
			
			if($nan%2) $colo='#ffffff';else $colo='#eae7e7';
			
						$some=$ligne1w0['some'];if($some=='') $some=0;
						$tailleportion=$ligne1ws['taille']*$some;
						if($ligne1ws['portion']==0) $nbrportion=0;else $nbrportion=ceil($tailleportion/$ligne1ws['portion']);
		$text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne1ws['libelle']."</td><td align='left'> &nbsp;&nbsp;".$ligne1ws['taille']."</td><td align='center'>".$some."</td><td align='center'>".$tailleportion."</td><td align='center'>".$ligne1ws['portion']."</td><td align='center'>".$nbrportion."</td></tr>";			
		}
		
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='6'>Produits TRANSFORMÉS</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Produit</td><td align='center'>Taille</td><td align='center'>Quantité entrée</td><td align='center'>Taille X Quantité</td><td align='center'>Taille Portion</td><td align='center'>Nombre Portion</td></tr>";		
		
			$requete1ws1a="SELECT * from produittransforme order by libelle asc ";
				$resultat1ws= ExecRequete($requete1ws1a, $connect);$nan=0;
				while($ligne1ws=mysql_fetch_array($resultat1ws)) {
				
			$requete1w0="SELECT sum(quantite) as some FROM etat_be WHERE id!='' ".$_SESSION['affiche83']." and produit='".$ligne1ws['id']."' and type='0' and etat=0";
			$resultat1w0= ExecRequete($requete1w0, $connect);
			$ligne1w0=mysql_fetch_array($resultat1w0);
			
			$requete1w0r="SELECT sum(taille) as somes FROM produitbt WHERE produittransforme='".$ligne1ws['id']."'";
			$resultat1w0r= ExecRequete($requete1w0r, $connect);
			$ligne1w0r=mysql_fetch_array($resultat1w0r);$nan++;
			
			if($nan%2) $colo='#ffffff';else $colo='#eae7e7';
			
						$some=$ligne1w0['some'];if($some=='') $some=0;
						$taille=$ligne1w0r['somes'];if($taille=='') $taille=0;
						$tailleportion=$taille*$some;
						if($ligne1ws['portion']==0) $nbrportion=0;else $nbrportion=ceil($tailleportion/$ligne1ws['portion']);
		$text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne1ws['libelle']."</td><td align='left'> &nbsp;&nbsp;".$taille."</td><td align='center'>".$some."</td><td align='center'>".$tailleportion."</td><td align='center'>".$ligne1ws['portion']."</td><td align='center'>".$nbrportion."</td></tr>";			
		}

		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='6'>Stock par produit HOT DOG</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Famille</td><td align='center'>Produit</td><td align='center'>Nbre Portions</td><td align='center'>Nbre Portions Vd.</td><td align='center'>Nbre Portions St.</td><td align='center'>Seuil</td></tr>";		
		
							$requete1ws1a="SELECT * from sousfamille group by famille ";
				$resultat1ws= ExecRequete($requete1ws1a, $connect);
				while($ligne1ws=mysql_fetch_array($resultat1ws)) {
				
					$requete1w0r="SELECT libelle FROM famille WHERE id='".$ligne1ws['famille']."'";
					$resultat1w0r= ExecRequete($requete1w0r, $connect);
					$ligne1w0r=mysql_fetch_array($resultat1w0r);
			
					$requete1w0="SELECT * from sousfamille where famille ='".$ligne1ws['famille']."'";
					$resultat1w0= ExecRequete($requete1w0, $connect);$nan=0;
					while($ligne1w0=mysql_fetch_array($resultat1w0)) {
					if($nan%2) $colo='#ffffff';else $colo='#eae7e7';$nan++;
					
					$requete1w021="SELECT * from produit where sousfamille='".$ligne1ws['id']."'";
					$resultat1w021= ExecRequete($requete1w021, $connect);$some1=0;
					while($ligne1w021=mysql_fetch_array($resultat1w021))
					{					
					$requete1w02="SELECT sum(quantite) as some FROM etat_be WHERE id!='' ".$suite1." ".$suite2." ".$suite3." ".$suite4." and produit='".$ligne1w021['id']."' and type='1' and etat=0";
					$resultat1w02= ExecRequete($requete1w02, $connect);
					$ligne1w02=mysql_fetch_array($resultat1w02);
						$somes=$ligne1w02['some'];if($somes=='') $somes=0;
						$tailleportion=$ligne1w021['taille']*$somes;
						if($ligne1w021['portion']==0) $nbrportion=0;else $nbrportion=ceil($tailleportion/$ligne1w021['portion']);
						$some1+=$nbrportion;					
					}
					
					$requete1w022="SELECT * from produit where sousfamille='".$ligne1ws['id']."'";
					$resultat1w022= ExecRequete($requete1w022, $connect);$some2=0;
					while($ligne1w022=mysql_fetch_array($resultat1w022))
					{					
					$requete1w0e="SELECT sum(quantite) as some FROM etat_be WHERE id!='' ".$_SESSION['affiche83']." and produit='".$ligne1w022['id']."' and type='0' and etat=0";
					$resultat1w0e= ExecRequete($requete1w0e, $connect);
					$ligne1w0e=mysql_fetch_array($resultat1w0e);
					
					$requete1w0r="SELECT sum(taille) as somes FROM produitbt WHERE produittransforme='".$ligne1w022['id']."'";
					$resultat1w0r= ExecRequete($requete1w0r, $connect);
					$ligne1w0r=mysql_fetch_array($resultat1w0r);
			
						$some=$ligne1w0e['some'];if($some=='') $some=0;
						$taille=$ligne1w0r['somes'];if($taille=='') $taille=0;
						$tailleportion=$taille*$some;
						if($ligne1w022['portion']==0) $nbrportion=0;else $nbrportion=ceil($tailleportion/$ligne1w022['portion']);
						$some2+=$nbrportion;					
					}
					
			
					$requete1w01="SELECT sum(quantite) as some FROM etat_be WHERE id!='' ".$_SESSION['affiche83']." and produit='".$ligne1w0['id']."' and type='0' and etat=0";
					$resultat1w01= ExecRequete($requete1w01, $connect);
					$ligne1w01=mysql_fetch_array($resultat1w01);
					
					$requete1w03="SELECT sum(qte) as qtes FROM panier WHERE commande!='0' ".$_SESSION['affiche83s']." and produit='".$ligne1w0['id']."' ";
					$resultat1w03= ExecRequete($requete1w03, $connect);
					$ligne1w03=mysql_fetch_array($resultat1w03);
					
					$vendus=$ligne1w03['qtes'];if($vendus=='') $vendus=0;
					$somes0=$some1+$some2;if($somes0=='') $somes0=0;
					$stockportion=$somes0-$vendus;if($nan==1) $libels=$ligne1w0r['libelle'];else $libels='';
		$text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$libels."</td><td align='left'> &nbsp;&nbsp;".$ligne1w0['libelle']."</td><td align='center'>".$somes0."</td><td align='center'>".$vendus."</td><td align='center'>".$stockportion."</td><td align='center'>".$ligne1w0['alerte']."</td></tr>";			
		}}
		
		$text .= "</table>";
	
	}
	

	
	else if($id==85)
	{
		
		header("content-disposition: attachment;filename=StockPrincipal_$time.xls");
		$text = "<table border='1'>";
		$text .= "<tr style='font-family:arial;font-weight:bold;color:white;' bgcolor='#555252'><td align='center' colspan='8'><br />Etat Stock principal à la date du ".$madate."</td></tr>";
		$text .= "<tr style='font-family:arial;font-weight:bold;'><td align='center'>Produit</td><td align='center'>Taille</td><td align='center'>Quantité entrée</td><td align='center'>Qte Sortie Brut</td><td align='center'>Qte Sortie trans</td><td align='center'>Qte Retournée</td><td align='center'>Qte Dispo</td><td align='center'>Qte Dispos</td></tr>";		
		$requete1ws1a="SELECT * from produit order by libelle asc ";
				$resultat1ws= ExecRequete($requete1ws1a, $connect);$nan=0;
				while($ligne1ws=mysql_fetch_array($resultat1ws)) {
				
				if($nan%2) $colo='#ffffff';else $colo='#eae7e7';$nan++;
					
			$requete1w0="SELECT sum(quantite) as some FROM etat_entree WHERE id!='' ".$_SESSION['affiche85s']." and produit='".$ligne1ws['id']."'";
			$resultat1w0= ExecRequete($requete1w0, $connect);
			$ligne1w0=mysql_fetch_array($resultat1w0);
			$some=$ligne1w0['some'];if($some=='') $some=0;
			
			$requete1w04="SELECT sum(quantite) as some4 FROM etat_be WHERE id!='' ".$_SESSION['affiche85']." and produit='".$ligne1ws['id']."' and etat=0 and type=1";
			$resultat1w04= ExecRequete($requete1w04, $connect);
			$ligne1w04=mysql_fetch_array($resultat1w04);
			$some4=$ligne1w04['some4'];if($some4=='') $some4=0;
			
			
			
			$requete1w05="SELECT sum(quantite) as some5 FROM etat_be inner join produitbt on produitbt.produittransforme=etat_be.produit WHERE produitbt.produitbrut='".$ligne1ws['id']."' ".$_SESSION['affiche85ss']." and etat=0 and type=0";
			$resultat1w05= ExecRequete($requete1w05, $connect);
			$ligne1w05=mysql_fetch_array($resultat1w05);
			$some5=$ligne1w05['some5'];if($some5=='') $some5=0;
			
			
			$requete1w06="SELECT sum(quantite) as some4 FROM etat_be WHERE id!='' ".$_SESSION['affiche85']." and produit='".$ligne1ws['id']."' and etat=1 and type=1";
			$resultat1w06= ExecRequete($requete1w06, $connect);
			$ligne1w06=mysql_fetch_array($resultat1w06);
			$some6=$ligne1w06['some4'];if($some6=='') $some6=0;
			
			$quantitstock=0;//$quantitstock=quantites($ligne1ws['id'],0);
			
			$qtedispo=$quantitstock+$some-$some4-$some5+$some6;
			$qtedispos=$qtedispo*$ligne1ws['taille'];
		$text .= "<tr style='font-family:arial;font-weight:light;'>";
		$text .= "<td align='center'>".$ligne1ws['libelle']."</td><td align='left'> &nbsp;&nbsp;".$ligne1ws['taille']."</td><td align='center'>".$some."</td><td align='center'>".$some4."</td><td align='center'>".$some5."</td><td align='center'>".$some6."</td><td align='center'>".$qtedispo."</td><td align='center'>".$qtedispos."</td></tr>";			
		}
		$text .= "</table>";
	
	}
	
	
	echo $text;
	

?>