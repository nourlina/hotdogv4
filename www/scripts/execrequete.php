
<?php
if (!isset ($FichierExecRequete))
{
	$FichierExecRequete=1;

	function ExecRequete ($Requete, $connexion)
	{
		$resultat = mysql_query ($Requete, $connexion);

		if ($resultat)
			return $resultat;
		else
		{
			
			echo "Erreur dans l'execution de la requete '$Requete' ".mysql_error();
			exit;
		}		
	}

}$connect = Connexion();
if(isset($_SESSION['userdognour'])) {
$connect = Connexion ();
					$requete1ss="select saison from `utilisateur` where id='".$_SESSION['userdognour']."'";
					$resultat1ss= ExecRequete($requete1ss, $connect);			
					$ligne1ss=mysql_fetch_array($resultat1ss);$_SESSION['saisondognour']=$ligne1ss['saison'];

if(isset($kokopa) && ($_SESSION['saisondognourlast']!=1)) {$_SESSION['saisondognour']=$_SESSION['saisondognourlast'];} else
{

			
			
			$requete1w="SELECT  saison from utilisateur where id='".$_SESSION['userdognour']."'";
			$connect = Connexion ();
			$resultat1ww= ExecRequete($requete1w, $connect);
			
			$ligne1ww=mysql_fetch_array($resultat1ww);
			$_SESSION['saisondognour']=$ligne1ww['saison'];
				$_SESSION['saisondognourr']=$_SESSION['saisondognour'];


}
}

function montel($var1)
{
$var1=str_replace(' ','',$var1);
return substr(chunk_split($var1, 2, '-'),0,-1);
}


if(!isset($_SESSION['droitdognour'])) $_SESSION['droitdognour']=0;
if(!isset($_SESSION['ipdognour'])) $_SESSION['ipdognour']="http://127.0.0.1";$monip=$_SESSION['ipdognour'];
	
$monparametre=substr($_SERVER['REQUEST_URI'],14,2);

$joueurlire=substr($_SESSION['droitdognour'],0,1);$joueurecrire=substr($_SESSION['droitdognour'],1,1);
$clublire=substr($_SESSION['droitdognour'],2,1);$clubecrire=substr($_SESSION['droitdognour'],3,1);
$utilitairelire=substr($_SESSION['droitdognour'],4,1);$utilitaireecrire=substr($_SESSION['droitdognour'],5,1);
$matchlire=substr($_SESSION['droitdognour'],6,1);$matchecrire=substr($_SESSION['droitdognour'],7,1);
$personnellire=substr($_SESSION['droitdognour'],8,1);$personnelecrire=substr($_SESSION['droitdognour'],9,1);
$arbitrelire=substr($_SESSION['droitdognour'],10,1);$arbitreecrire=substr($_SESSION['droitdognour'],11,1);
$paielire=substr($_SESSION['droitdognour'],12,1);$paieecrire=substr($_SESSION['droitdognour'],13,1);
$liguelire=substr($_SESSION['droitdognour'],14,1);$ligueecrire=substr($_SESSION['droitdognour'],15,1);
$bordereaulire=substr($_SESSION['droitdognour'],16,1);$bordereauecrire=substr($_SESSION['droitdognour'],17,1);
$messagerielire=substr($_SESSION['droitdognour'],18,1);$messagerieecrire=substr($_SESSION['droitdognour'],19,1);
$statlire=substr($_SESSION['droitdognour'],20,1);$statecrire=substr($_SESSION['droitdognour'],21,1);



// Doit =0 Aucune action  / Droit=1 Lire / Droit=2 Lire et écrire


					function immatricule($gal)
						{
						if($gal<10) return "00000".$gal;
						else if($gal<100) return "0000".$gal;
						else if($gal<1000) return "000".$gal;
						else if($gal<10000) return "00".$gal;
						else if($gal<100000) return "0".$gal;
						else return $gal;
						
						}
						
					function immatricules($gal)
						{
						/*if($gal<10) return "000000".$gal;
						else if($gal<100) return "00000".$gal;
						else if($gal<1000) return "0000".$gal;
						else if($gal<10000) return "000".$gal;
						else if($gal<100000) return "00".$gal;
						else if($gal<1000000) return "0".$gal;
						else */
						
						return $gal;
						
						}
						function moncode4($moncode)
{
if($moncode<10) return $moncode='000'.$moncode;else if($moncode<100) return $moncode='00'.$moncode;else if($moncode<1000) return $moncode='0'.$moncode;
else return $moncode;
}
				
						function moncode($moncode)
{
if($moncode<10) return $moncode='00000'.$moncode;else if($moncode<100) return $moncode='0000'.$moncode;else if($moncode<1000) return $moncode='000'.$moncode;
else if($moncode<10000) return $moncode='00'.$moncode; else if($moncode<100000) return $moncode='0'.$moncode; else return $moncode;
}				
						
					function frtoeng($gal)
						{
						return substr($gal,8,2).'-'.substr($gal,5,2).'-'.substr($gal,0,4);						
						}

					function frtoengs($gal)
						{
						return substr($gal,8,2).'/'.substr($gal,5,2).'/'.substr($gal,0,4);						
						}

						
						
					function frtoengtime($gal)
						{
						return substr($gal,8,2).'-'.substr($gal,5,2).'-'.substr($gal,0,4).' &agrave; '.substr($gal,11,8);						
						}
						
					function encod($gal)
						{
						$HTTP_USER_AGENT = $_SERVER['HTTP_USER_AGENT'];

//Detection du browser
if(eregi('Safari', $HTTP_USER_AGENT) && !eregi('Konqueror', $HTTP_USER_AGENT))
    $navigateur='Safari';

elseif (eregi('msie', $HTTP_USER_AGENT) && !eregi('opera', $HTTP_USER_AGENT))
    $navigateur='Internet Explorer';

elseif (eregi('opera', $HTTP_USER_AGENT))
    $navigateur='Opera';

elseif (eregi('Mozilla', $HTTP_USER_AGENT))
    $navigateur='Mozilla FireFox';

else {
    $navigateur=$HTTP_USER_AGENT;
}
//echo $navigateur;
						if($navigateur=='Mozilla FireFox') return utf8_encode($gal);else return $gal;
						}
						
						
					
					$requetety="select * from `parametrage` where `id`='1'";
					$resulty=ExecRequete($requetety, $connect);
					$lignety=mysql_fetch_array($resulty);
					
					if(!isset($_SESSION['userdognour'])) {
					$_SESSION['saisondognour']=$lignety['saison'];
					}
					else
					{
					$requete1ss="select saison from `utilisateur` where id='".$_SESSION['userdognour']."'";
					$resultat1ss= ExecRequete($requete1ss, $connect);			
					$ligne1ss=mysql_fetch_array($resultat1ss);$_SESSION['saisondognour']=$ligne1ss['saison'];
					}
					//$_SESSION['saisondognour']=16;
					$_SESSION['saisondognourr']=$_SESSION['saisondognour'];
					$requetetys="select libelle from `saison` where id='".$_SESSION['saisondognour']."'";
					$resultys=ExecRequete($requetetys, $connect);
					$lignetys=mysql_fetch_array($resultys);
					$_SESSION['saisonsdognour']=$lignetys['libelle'];
					
					
					
					function categorie($naissance,$saison)
					{
					$age=$saison-$naissance;
					if($age<=10) $categorie=6;else if($age<=12) $categorie=5; else if($age<=14) $categorie=4; 
					else if($age<=16) $categorie=3; else if($age<=19) $categorie=2; else $categorie=1; 
					return $categorie;
					}
					
						function effectif($saison,$club,$categorie)
							{
								$effectif=0;
								require_once ("../scripts/connection.php");					
								require_once ("../scripts/execrequete.php");			
								$connect = Connexion ();
								$requete="select * from `categoriengage` where  (`saison`='".$saison."' and `club`='".$club."' and `categorie`='".$categorie."')";
								$resultat=ExecRequete($requete, $connect);
								while($ligne=mysql_fetch_array($resultat))
									{
									$effectif+=$ligne['nombre']*30;
									}
									return $effectif;
							}
							
						function effectiff($saison,$club)
							{
								$effectif=0;
								require_once ("../scripts/connection.php");					
								require_once ("../scripts/execrequete.php");			
								$connect = Connexion ();
								$requete="select * from `categoriengage` where  (`saison`='".$saison."' and `club`='".$club."')";
								$resultat=ExecRequete($requete, $connect);
								while($ligne=mysql_fetch_array($resultat))
									{
									$effectif+=$ligne['nombre']*30;
									}
									return $effectif;
							}
							
						
					
							function apayer($elevag)
							{
							require_once ("../scripts/connection.php");					
							require_once ("../scripts/execrequete.php");			
							$connect = Connexion ();
							
							$requete1w0="SELECT * from payeur where id='".$elevag."'";
							$resultat1w0= ExecRequete($requete1w0, $connect);$cpt=0;$tota=0;
							$resultat1w0ds= ExecRequete($requete1w0, $connect);
							$nabre=mysql_num_rows($resultat1w0ds);
							while($ligne1w0=mysql_fetch_array($resultat1w0))
							{
							$requete1w0x="SELECT sum(montant) as monto from cheque where emetteur='".$ligne1w0['id']."'";
							$resultat1w0x= ExecRequete($requete1w0x, $connect);
							$ligne1w0x=mysql_fetch_array($resultat1w0x);
							$monto=$ligne1w0x['monto'];if($monto=="") $monto=0;
							$tota+=$monto;
							$tota+=$ligne1w0['espece'];
							$tota+=$ligne1w0['cb'];
							}
							return $tota;
							}
							
							
							function reglersansfrais($elevag)
							{
								require_once ("../scripts/connection.php");					
								require_once ("../scripts/execrequete.php");			
								$connect = Connexion ();
							
								$requete1w="SELECT * from affecteleverapide where eleve='".$elevag."' order by id asc";//echo $requete1w;
								$resultat1w= ExecRequete($requete1w, $connect);$toto=0;
								while($ligne1w=mysql_fetch_array($resultat1w))
								{																	
								$requete1w253="SELECT * from formule where id='".$ligne1w['courx']."'";
								$resultat1w253= ExecRequete($requete1w253, $connect);
								$ligne1w253=mysql_fetch_array($resultat1w253);$courx=$ligne1w253['libelle'];							
								$toto+=$ligne1w253['tarif']*$ligne1w['nombre'];								
								}
								return $toto;
							
							}
							
							function frais($elevag,$frais)
						{
							require_once ("../scripts/connection.php");					
							require_once ("../scripts/execrequete.php");			
							$connect = Connexion ();
							$requete1w="SELECT * from reductioneleve where eleve='".$elevag."' ";
							$resultat1w= ExecRequete($requete1w, $connect);$cpt=0;$toto1x=0;
							while($ligne1w=mysql_fetch_array($resultat1w))
							{		
							$cpt++;//if($cpt%2) $none='none';else $none='#C0c0c0';
							$requete1ww="SELECT * from reduction where id='".$ligne1w['reduction']."'";
							$resultat1ww= ExecRequete($requete1ww, $connect);
							$ligne1ww=mysql_fetch_array($resultat1ww);
							$requete1wwd="SELECT * from reduction where '".$ligne1w['reduction']."' ";
							$resultat1wwd= ExecRequete($requete1wwd, $connect);
							$ligne1wwd=mysql_fetch_array($resultat1wwd);
							$montantx=$ligne1wwd['montant'];
							 if($ligne1ww['type']==1) {$toto1x +=$ligne1ww['montant']; }
							
							else $toto1x +=0;
							 
							 }
							 
							// echo "Frais d'inscription : ".$toto1x."<br />";
							 
							 
							$requete1w="SELECT * from reductioneleve where eleve='".$elevag."' ";
							$resultat1w= ExecRequete($requete1w, $connect);$cpt=0;$toto1=0;
							while($ligne1w=mysql_fetch_array($resultat1w))
							{		
							$cpt++;//if($cpt%2) $none='none';else $none='#C0c0c0';
							$requete1ww="SELECT * from reduction where id='".$ligne1w['reduction']."'";
							$resultat1ww= ExecRequete($requete1ww, $connect);
							$ligne1ww=mysql_fetch_array($resultat1ww);
							$requete1wwd="SELECT * from reduction where '".$ligne1w['reduction']."' ";
							$resultat1wwd= ExecRequete($requete1wwd, $connect);
							$ligne1wwd=mysql_fetch_array($resultat1wwd);
							$montantx=$ligne1wwd['montant'];
							 if($ligne1ww['type']!=1) 
								{
						$requete1wws="SELECT montant,pourcentage from reduction where id='".$ligne1wwd['id']."'";
								$resultat1wws= ExecRequete($requete1wws, $connect);
								$ligne1wws=mysql_fetch_array($resultat1wws);
							
								if($ligne1ww['applique']==1) $toto1 -=$ligne1ww['pourcentage']*$toto1x/100; 	
								else $toto1 -=$ligne1ww['pourcentage']*$frais/100;
								//echo $toto1.'jjjj';
							 
							 }
							 else $toto1 +=0;
							 }
							 
							// echo "Réduction : ".$toto1."<br />";
							 $fraiss=$toto1+$toto1x;
							 return $fraiss;
							 }
							 
							 
							 
							 
						
							 
							 
							 
							 	function sommeregler($elevag)
							{
							require_once ("../scripts/connection.php");					
							require_once ("../scripts/execrequete.php");			
							$connect = Connexion ();$apayer=0;
							
							$requete1w0="SELECT * from payeur where eleve='".$elevag."'";
							$resultat1w0= ExecRequete($requete1w0, $connect);$cpt=0;$tota=0;
							while($ligne1w0=mysql_fetch_array($resultat1w0))
							{											
							$requete1w0x="SELECT sum(montant) as monto from cheque where emetteur='".$ligne1w0['id']."'";
							$resultat1w0x= ExecRequete($requete1w0x, $connect);
							$ligne1w0x0x=mysql_fetch_array($resultat1w0x);
							$monto=$ligne1w0x0x['monto'];if($monto=="") $monto=0;
							$tota+=$monto;
							$tota+=$ligne1w0['espece'];
							$tota+=$ligne1w0['cb'];														
							}
							
							
							$requete1w0u="SELECT id from payeur where eleve='".$elevag."'";//echo $requete1w0u;
							$resultat1w0u= ExecRequete($requete1w0u, $connect);$totax=0;
							while($ligne1w0u=mysql_fetch_array($resultat1w0u))
							{
							$requete1w0="SELECT * from payeur where id='".$ligne1w0u['id']."'";
							$resultat1w0= ExecRequete($requete1w0, $connect);
							$resultat1w0a= ExecRequete($requete1w0, $connect);
							$abx=mysql_num_rows($resultat1w0a);
							
							$requete1w0xx="SELECT * from payeur where associe='".$ligne1w0u['id']."'";
							$resultat1w0xx= ExecRequete($requete1w0xx, $connect);
							$resultat1w0axx= ExecRequete($requete1w0xx, $connect);
							$abxxx=mysql_num_rows($resultat1w0axx);
							
							
							if($abx>0 && $abxxx==0) {
							while($ligne1w0=mysql_fetch_array($resultat1w0))
							{	
							$tate1=reglersansfrais($ligne1w0['eleve']);
							$tate2=frais($ligne1w0['eleve'],$tate1);
							$totax+=$tate1+$tate2;
							$apayer+=apayer($ligne1w0['id']);
							//echo 'a'.$totax.'b';
							}
							}
							}
							
							
							
							
							$requete1w0u="SELECT id from payeur where eleve='".$elevag."'";//echo $requete1w0u;
							$resultat1w0u= ExecRequete($requete1w0u, $connect);$totax=0;
							while($ligne1w0u=mysql_fetch_array($resultat1w0u))
							{
							$requete1w0="SELECT * from payeur where associe='".$ligne1w0u['id']."'";
							$resultat1w0= ExecRequete($requete1w0, $connect);
							$resultat1w0a= ExecRequete($requete1w0, $connect);
							$abx=mysql_num_rows($resultat1w0a);
							if($abx>0) {
							while($ligne1w0=mysql_fetch_array($resultat1w0))
							{											;
							$tate1=reglersansfrais($ligne1w0['eleve']);
							$tate2=frais($ligne1w0['eleve'],$tate1);
							$totax+=$tate1+$tate2;
							$apayer+=apayer($ligne1w0['associe']);
							//echo 'a'.$totax.'b';
							}
							}
							}
							
							$requete1w0u="SELECT associe from payeur where eleve='".$elevag."'";//echo $requete1w0u;
							$resultat1w0u= ExecRequete($requete1w0u, $connect);$totaxx=0;
							while($ligne1w0u=mysql_fetch_array($resultat1w0u))
							{
							$requete1w0="SELECT * from payeur where id='".$ligne1w0u['associe']."'";
							$resultat1w0= ExecRequete($requete1w0, $connect);
							$resultat1w0a= ExecRequete($requete1w0, $connect);
							$abx=mysql_num_rows($resultat1w0a);
							if($abx>0) {
							while($ligne1w0=mysql_fetch_array($resultat1w0))
							{											
							//$totaxx+=sommearegler($ligne1w0['eleve']);
							$tate1=reglersansfrais($ligne1w0['eleve']);
							$tate2=frais($ligne1w0['eleve'],$tate1);
							//$totaxx+=0;
							$apayer+=apayer($ligne1w0['id']);
							//echo 'c'.$totaxx.'d';
							}
							}
							}
							
							
						
						return $apayer-($totax+$totaxx);
						}
						
						
						
						function textemenu($montexte)
						{
						return '<b>'.strtoupper(substr($montexte,0,1)).'</b>'.substr($montexte,1);						
						}
						
						function clearDir($dossier) {
							$ouverture=@opendir($dossier);
							if (!$ouverture) return;
							while($fichier=readdir($ouverture)) {
								if ($fichier == '.' || $fichier == '..') continue;
									if (is_dir($dossier."/".$fichier)) {
										$r=clearDir($dossier."/".$fichier);
										if (!$r) return false;
									}
									else {
										$r=@unlink($dossier."/".$fichier);
										if (!$r) return false;
									}
							}
						closedir($ouverture);
						$r=@rmdir($dossier);
						if (!$r) return false;
							return true;
						}
						

 
						function difheure($heuredeb,$heurefin)
						{
						   $hd=explode(":",$heuredeb);
						   $hf=explode(":",$heurefin);
						   $hd[0]=(int)($hd[0]);$hd[1]=(int)($hd[1]);$hd[2]=(int)($hd[2]);
						   $hf[0]=(int)($hf[0]);$hf[1]=(int)($hf[1]);$hf[2]=(int)($hf[2]);
						   if($hf[2]<$hd[2]){$hf[1]=$hf[1]-1;$hf[2]=$hf[2]+60;}
						   if($hf[1]<$hd[1]){$hf[0]=$hf[0]-1;$hf[1]=$hf[1]+60;}
						   if($hf[0]<$hd[0]){$hf[0]=$hf[0]+24;}
						   $aa=$hf[0]-$hd[0];if($aa<10) $aa='0'.$aa;
						   $bb=$hf[1]-$hd[1];if($bb<10) $bb='0'.$bb;
						   $cc=$hf[2]-$hd[2];if($cc<10) $cc='0'.$cc;
						   return (($aa).":".( $bb).":".($cc));
						}
						
						function AddTime($time1,$time2) {  
						    list( $hr1, $min1, $sec1 ) = split( ":", $time1);  
						    $UTime1 = mktime(1,$min1,$sec1,01,01,1970);  
						    list( $hr2, $min2, $sec2 ) = split( ":", $time2);  
						    $UTime2 = mktime(1,$min2,$sec2,01,01,1970);  
						    $UTimeTotal = $UTime1 + $UTime2;  
						    $UTimeTotal = $UTimeTotal - 3600;  
						    $timeTotal = date ("H:i:s",$UTimeTotal);  
						    list( $hr3, $min3, $sec3 ) = split( ":", $timeTotal);  
						    $hrTotal = $hr1 + $hr2;  
						    if ($hr3 >= 1)  
							$hrTotal = $hrTotal + $hr3;  
						    $timeTotal = $hrTotal.":".$min3.":".$sec3;  
						    return $timeTotal;  
						}
						
						function quantite($produit,$act)
				{
			require_once ("../scripts/connection.php");					
			require_once ("../scripts/execrequete.php");			
			$connect = Connexion ();
				
			$requete1ws="SELECT produitfournisseur.fournisseur,produitfournisseur.prix,etat_entree.quantite,etat_entree.dateCreation,etat_entree.etat from produitfournisseur inner join etat_entree on produitfournisseur.produit=etat_entree.produit where produitfournisseur.produit='".$produit."'";
			$resultat1w5s= ExecRequete($requete1ws, $connect);$a=0;$quantite_initialie=0;$quantite_initialiea=0;
			while($ligne5s=mysql_fetch_array($resultat1w5s)) {
				$a++;
				$quantite_initialie +=$ligne5s['quantite'];
				}
			$requete1ws="select etat_be.id,etat_be.quantite,etat_be.vendeur,etat_be.statut,etat_be.magasin,etat_be.vendeur,etat_be.etat,etat_be.statut,etat_be.dateCreation,etat_be.magasin from etat_be inner join produit on etat_be.produit=produit.id where  etat_be.produit='".$produit."' and etat_be.type=1";
			$resultat1w5s= ExecRequete($requete1ws, $connect);$a=0;$quantite_brut=0;$quantite_brut_annexe=0;
			while($ligne5s=mysql_fetch_array($resultat1w5s)) {
				$a++;
				if($ligne5s['statut']==0) {if($ligne5s['etat']==0) $quantite_brut +=$ligne5s['quantite'];else $quantite_brut -=$ligne5s['quantite'];}
				else {if($ligne5s['etat']==0) $quantite_brut_annexe +=$ligne5s['quantite'];else $quantite_brut_annexe -=$ligne5s['quantite'];}
				} 
			$requete1ws="select etat_be.id,etat_be.quantite,etat_be.vendeur,etat_be.statut,etat_be.etat,etat_be.dateCreation,etat_be.magasin,produittransforme.libelle,produitbt.produitbrut,produitbt.taille,produit.taille as tailli from etat_be inner join produittransforme on etat_be.produit=produittransforme.id inner join produitbt on produitbt.produittransforme=produittransforme.id inner join produit on produit.id=produitbt.produitbrut where produitbt.produitbrut='".$produit."' and etat_be.type=0 ";
			$resultat1w5s= ExecRequete($requete1ws, $connect);$a=0;$quantite_mt=0;$quantite_mt_annexe=0;
			while($ligne5s=mysql_fetch_array($resultat1w5s)) {
				$a++;
				if($ligne5s['statut']==0) { 
					if($ligne5s['etat']==0) $quantite_mt +=($ligne5s['taille']/$ligne5s['tailli'])*$ligne5s['quantite'];
					else $quantite_mt -=($ligne5s['taille']/$ligne5s['tailli'])*$ligne5s['quantite'];
				} 
				else { 
					if($ligne5s['etat']==0) $quantite_mt_annexe +=($ligne5s['taille']/$ligne5s['tailli'])*$ligne5s['quantite'];
					else $quantite_mt_annexe -=($ligne5s['taille']/$ligne5s['tailli'])*$ligne5s['quantite'];
				}
			}	
			$quantite=$quantite_initialie-($quantite_brut+$quantite_mt);
			$quantitea=$quantite_brut_annexe+$quantite_mt_annexe;
			if($act==0) return $quantite;else return $quantitea;
			//return $quantite.'--'.$quantitea;
			//return $quantite_initialie.'---'.$quantite_brut.'---'.$quantite_brut_annexe.'---'.$quantite_mt.'---'.$quantite_mt_annexe;
			}
						?>

