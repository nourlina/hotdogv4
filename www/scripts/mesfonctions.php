	  <?php
			
			
			function get_journees($groupe){
	$connexion = mysql_connect("localhost", "root","");
	mysql_select_db('foot', $connexion);
    $requetea="SELECT COUNT(*) FROM sousclub WHERE groupe='$groupe'";
    $resultata=mysql_query ($requetea, $connexion);
	$donna=mysql_fetch_array($resultata);
	$total=$donna[0];
     if ($total%2==0) 
	$total=($total*2)-2;
	else 
	$total=($total*2);
	return $total;
	}
	
			function bareme($division,$statut,$statutbis) {
	$connexion = mysql_connect("localhost", "root","");
	mysql_select_db('foot', $connexion);

	$requete0="SELECT id FROM `bareme` WHERE `division` ='".$division."' AND `statut` ='".$statut."' AND `statutbis` ='".$statutbis."'";	
	$resultat0=mysql_query ($requete0, $connexion);
	$ligne0=mysql_fetch_array($resultat0);
	
	return $ligne0['id'];
	}
	
	function calculer($club){
	$connexion = mysql_connect("localhost", "root","");
	mysql_select_db('foot', $connexion);
	$requetec="SELECT * FROM `match` WHERE clubR = '$club' and penality!=0";
	$resultatc=mysql_query($requetec, $connexion);
	$som_butsM=0;
	$som_butsR=0;
	$som_ptsM=0;
	$som_matchJ=0;
	$som_matchG=0;
	$som_matchP=0;
	$som_matchN=0;
	while($donnc=mysql_fetch_array($resultatc)){
	$butsM=$donnc['butR'];
	$butsR=$donnc['butV'];
	if($butsM!=NULL){
	$som_matchJ=$som_matchJ+1;
	
	$som_butsM=$som_butsM+$butsM;
	$som_butsR=$som_butsR+$butsR;
	if($butsM>$butsR){
	$som_matchG=$som_matchG+1;
	$som_ptsM=$som_ptsM+3;
	}
	if($butsM<$butsR){
	$som_matchP=$som_matchP+1;
	}
	if($butsM==$butsR){
	$som_matchN=$som_matchN+1;
	$som_ptsM=$som_ptsM+1;
	}
	
	
	$penality=$donnc['penality'];
	$requetecd="SELECT penality FROM `penality` WHERE id = '$penality'";
	$resultatcd=mysql_query($requetecd, $connexion);
	$donncd=mysql_fetch_array($resultatcd);
	$penality=$donncd['penality'];

	
	
	
	if($penality!=NULL){
	$som_ptsM=$som_ptsM-$penality;
	}
	}}


	
	$penality=0;
	
	
	$requetec="SELECT * FROM `match` WHERE clubV = '$club' and penality!=0";
	$resultatc=mysql_query($requetec, $connexion);
	while($donnc=mysql_fetch_array($resultatc)){
	$butsR=$donnc['butR'];
	$butsM=$donnc['butV'];
	$penality=$donnc['penality'];
	$requetecd="SELECT penality FROM `penality` WHERE id = '$penality'";
	$resultatcd=mysql_query($requetecd, $connexion);
	$donncd=mysql_fetch_array($resultatcd);
	$penality=$donncd['penality'];
	if($butsM!=NULL){
	$som_matchJ=$som_matchJ+1;
	
	$som_butsM=$som_butsM+$butsM;
	$som_butsR=$som_butsR+$butsR;
	if($butsM>$butsR){
	$som_matchG=$som_matchG+1;
	$som_ptsM=$som_ptsM+3;
	}
	if($butsM<$butsR){
	$som_matchP=$som_matchP+1;
	if($penality!=NULL){
	$som_ptsM=$som_ptsM-$penality;
	}
	}
	if($butsM==$butsR){
	$som_matchN=$som_matchN+1;
	$som_ptsM=$som_ptsM+1;
	}
	
	
	}}
	$dif=$som_butsM-$som_butsR;

	$requetefinale="UPDATE  `sousclub` SET  `matchJoue` =  '$som_matchJ',`matchGagne` =  '$som_matchG',`matchPerdu` =  '$som_matchP',`matchNull` =  '$som_matchN',`butM` =  '$som_butsM',`butR` =  '$som_butsR',`dif` =  '$dif',`points` =  '$som_ptsM',`penality` =  '$penality' WHERE  `id` =$club";
	//echo $requetefinale.'<br />';
	mysql_query($requetefinale, $connexion); 
}


			
		?>